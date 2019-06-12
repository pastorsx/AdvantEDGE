package swagger

import (
        "net/http"
	"encoding/json"
	"time"
	"os"
	"log"
        mgm "github.com/InterDigitalInc/AdvantEDGE/mgmanagerapi"
)

const eventTypeStateUpdate = "STATE-UPDATE"
const eventTypeStateTransferStart = "STATE-TRANSFER-START"
const eventTypeStateTransferComplete = "STATE-TRANSFER-COMPLETE"
const eventTypeStateTransferCancel = "STATE-TRANSFER-CANCEL"

var mgManager *mgm.APIClient
var mgName string
var mgAppId string
var mgAppPort string

var ueIdToStateValueMap map[string]UeState
var ueIdToTickerMap map[string]*time.Ticker
var ueIdToUserInfoMap map[string]*UserInfo

func Init() {

	ueIdToStateValueMap = make(map[string]UeState)
	ueIdToTickerMap = make(map[string]*time.Ticker)
        ueIdToUserInfoMap = make(map[string]*UserInfo)



	//state transfer app necessities
        // Initialize variables from environment
        mgName = os.Getenv("MGM_GROUP_NAME")
        if mgName == "" {
                log.Println("MGM_GROUP_NAME not set")
                //return errors.New("MGM_GROUP_NAME not set")
        }
        mgAppId = os.Getenv("MGM_APP_ID")
        if mgAppId == "" {
                log.Println("MGM_APP_ID not set")
                //return errors.New("MGM_APP_ID not set")
        }
        mgAppPort = os.Getenv("MGM_APP_PORT")
        if mgAppPort == "" {
                log.Println("MGM_APP_PORT not set")
                //return errors.New("MGM_APP_PORT not set")
        }

        // Create client for MG Manager API
        mgmCfg := mgm.NewConfiguration()
        mgmCfg.BasePath = "http://meep-mg-manager/v1"
        mgManager = mgm.NewAPIClient(mgmCfg)
        if mgManager == nil {
                log.Println("Cannot find the MG Manager API")
                //err := errors.New("Failed to find MG Manager API")
                //return err
        }

//	mgName = "demoSvc"
//	mgAppId = "zone1-fog1-demoSvc"
//	mgAppPort = "80"	
        // Register edge app instance with MG Manager
        var mgApp mgm.MobilityGroupApp
        mgApp.Id = mgAppId
        mgApp.Url = "http://" + mgAppId + ":" + mgAppPort + "/v1"
        _, err := mgManager.MembershipApi.CreateMobilityGroupApp(nil, mgName, mgAppId, mgApp)
        if err != nil {
		log.Println(err.Error())
                //return err
        }

}

func updateUe(ueId string, ueState UeState) {
        ueIdToStateValueMap[ueId] = ueState
        ticker := ueIdToTickerMap[ueId]
	if ticker == nil {
		ueIdToTickerMap[ueId] = startTicker(ueId)
		log.Printf("start ticker after update")
	} else {
		log.Printf("do no start ticker")
	}
}

func getUe(ueId string) *UeState {
	ueState, ok := ueIdToStateValueMap[ueId]
	if ok == false {
		return nil
	}
        
        return &ueState
}

func addUe(ueId string) {
	var ueState UeState
	ueState.Duration = 0
	ueState.TrafficBw = 0

	ueIdToStateValueMap[ueId] = ueState
	ueIdToTickerMap[ueId] = startTicker(ueId)


	// Inform MGM of presence of new UE
        go func() {
        	var mgUe mgm.MobilityGroupUe
                mgUe.Id = ueId
                _, err := mgManager.MembershipApi.CreateMobilityGroupUe(nil, mgName, mgAppId, mgUe)
                if err != nil {
                        log.Println(err.Error())
                }
        }()

}

func restartUe(ueId string) {
        var ueState UeState
        ueState.Duration = 0
	ueState.TrafficBw = 0
        ueIdToStateValueMap[ueId] = ueState
        //no change to ticker
}

func startTicker(ueId string) *time.Ticker {

        ticker := time.NewTicker(1000 * time.Millisecond)
        go func() {
                for range ticker.C {
			ueState := ueIdToStateValueMap[ueId]
			ueState.Duration++
			ueIdToStateValueMap[ueId] = ueState
		}
	} ()
	return ticker
}

func deleteUe(ueId string) {

	ticker := ueIdToTickerMap[ueId]
	ticker.Stop()
	delete(ueIdToStateValueMap, ueId)
	delete(ueIdToTickerMap, ueId)

}

func localDBHandleEvent(w http.ResponseWriter, r *http.Request) {

        // Unmarshal Event from request body
        var event MobilityGroupEvent
        decoder := json.NewDecoder(r.Body)
        err := decoder.Decode(&event)
        if err != nil {
                log.Println(err.Error())
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

        // Process event
        log.Println("event.Name: ", event.Name)
        log.Println("event.Type_: ", event.Type_)
        log.Println("event.UeId: ", event.UeId)

        if event.Type_ == eventTypeStateUpdate {
		var ueState UeState

       		err = json.Unmarshal([]byte(event.AppState.UeState), &ueState)
	        if err != nil {
			log.Println(err.Error())
	                http.Error(w, err.Error(), http.StatusInternalServerError)
                	//return
        	}
		updateUe(event.AppState.UeId, ueState)

        } else {
        	// Marshal UE state and send it to MG Manager
	        ueState := ueIdToStateValueMap[event.UeId]
		var mgAppState mgm.MobilityGroupAppState
        	mgAppState.UeId = event.UeId

		//marshal the data
		jsonResponse, err := json.Marshal(ueState)
        	mgAppState.UeState = string(jsonResponse)

       	 	_, err = mgManager.StateTransferApi.TransferAppState(nil, mgName, mgAppId, mgAppState)
        	if err != nil {
                	log.Println(err.Error())
        	}
	}

        // Send OK response
        w.Header().Set("Content-Type", "application/json; charset=UTF-8")
        w.WriteHeader(http.StatusOK)
}

func localDBUpdateTrackedUes(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/json; charset=UTF-8")

        var notif TrackingNotification
        decoder := json.NewDecoder(r.Body)
        err := decoder.Decode(&notif)
        if err != nil {
                log.Println(err.Error())
                http.Error(w, err.Error(), http.StatusInternalServerError)
                return
        }

	var userInfo UserInfo
	userInfo.Address = notif.Address
	userInfo.ZoneId = notif.ZoneId
	userInfo.AccessPointId = notif.CurrentAccessPointId

	ueIdToUserInfoMap[notif.Address] = &userInfo 
        w.WriteHeader(http.StatusOK)

}

func getLocalDBUserInfo(ueId string) *UserInfo {

	userInfo, ok := ueIdToUserInfoMap[ueId]
	if ok == false {
                return nil
        }

	return userInfo
}
