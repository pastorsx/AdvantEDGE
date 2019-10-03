/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package model

import (
	"fmt"
	"testing"

	ceModel "github.com/InterDigitalInc/AdvantEDGE/go-packages/meep-ctrl-engine-model"
	log "github.com/InterDigitalInc/AdvantEDGE/go-packages/meep-logger"
)

const modelRedisAddr string = "localhost:30379"
const modelName string = "model-tester"
const testScenario string = `
{"_id":"demo1","_rev":"5-905df5009b54170401d47031711afff7","name":"demo1","deployment":{"interDomainLatency":50,"interDomainLatencyVariation":5,"interDomainThroughput":1000,"domains":[{"id":"PUBLIC","name":"PUBLIC","type":"PUBLIC","interZoneLatency":6,"interZoneLatencyVariation":2,"interZoneThroughput":1000000,"zones":[{"id":"PUBLIC-COMMON","name":"PUBLIC-COMMON","type":"COMMON","interFogLatency":2,"interFogLatencyVariation":1,"interFogThroughput":1000000,"interEdgeLatency":3,"interEdgeLatencyVariation":1,"interEdgeThroughput":1000000,"edgeFogLatency":5,"edgeFogLatencyVariation":1,"edgeFogThroughput":1000000,"networkLocations":[{"id":"PUBLIC-COMMON-DEFAULT","name":"PUBLIC-COMMON-DEFAULT","type":"DEFAULT","terminalLinkLatency":1,"terminalLinkLatencyVariation":1,"terminalLinkThroughput":50000,"terminalLinkPacketLoss":1,"physicalLocations":[{"id":"cloud1","name":"cloud1","type":"DC","processes":[{"id":"cloud1-iperf","name":"cloud1-iperf","type":"CLOUD-APP","image":"gophernet/iperf-server","commandArguments":"-c, export; iperf -s -p $IPERF_SERVICE_PORT","commandExe":"/bin/bash","serviceConfig":{"name":"cloud1-iperf","ports":[{"protocol":"UDP","port":80}]}},{"id":"cloud1-svc","name":"cloud1-svc","type":"CLOUD-APP","image":"meep-docker-registry:30001/demo-server","environment":"MGM_GROUP_NAME=cloud1-svc, MGM_APP_ID=cloud1-svc, MGM_APP_PORT=80","serviceConfig":{"name":"cloud1-svc","ports":[{"protocol":"TCP","port":80}]}}]}]}]}]},{"id":"operator1","name":"operator1","type":"OPERATOR","interZoneLatency":15,"interZoneLatencyVariation":3,"interZoneThroughput":1000,"zones":[{"id":"operator1-COMMON","name":"operator1-COMMON","type":"COMMON","interFogLatency":2,"interFogLatencyVariation":1,"interFogThroughput":1000000,"interEdgeLatency":3,"interEdgeLatencyVariation":1,"interEdgeThroughput":1000000,"edgeFogLatency":5,"edgeFogLatencyVariation":1,"edgeFogThroughput":1000000,"networkLocations":[{"id":"operator1-COMMON-DEFAULT","name":"operator1-COMMON-DEFAULT","type":"DEFAULT","terminalLinkLatency":1,"terminalLinkLatencyVariation":1,"terminalLinkThroughput":50000,"terminalLinkPacketLoss":1}]},{"id":"zone1","name":"zone1","type":"ZONE","interFogLatency":10,"interFogLatencyVariation":2,"interFogThroughput":1000,"interEdgeLatency":12,"interEdgeLatencyVariation":2,"interEdgeThroughput":1000,"edgeFogLatency":5,"edgeFogLatencyVariation":1,"edgeFogThroughput":1000,"networkLocations":[{"id":"zone1-DEFAULT","name":"zone1-DEFAULT","type":"DEFAULT","terminalLinkLatency":1,"terminalLinkLatencyVariation":1,"terminalLinkThroughput":50000,"terminalLinkPacketLoss":1,"physicalLocations":[{"id":"zone1-edge1","name":"zone1-edge1","type":"EDGE","processes":[{"id":"zone1-edge1-iperf","name":"zone1-edge1-iperf","type":"EDGE-APP","image":"gophernet/iperf-server","commandArguments":"-c, export; iperf -s -p $IPERF_SERVICE_PORT","commandExe":"/bin/bash","serviceConfig":{"name":"zone1-edge1-iperf","meSvcName":"iperf","ports":[{"protocol":"UDP","port":80}]}},{"id":"zone1-edge1-svc","name":"zone1-edge1-svc","type":"EDGE-APP","image":"meep-docker-registry:30001/demo-server","environment":"MGM_GROUP_NAME=svc, MGM_APP_ID=zone1-edge1-svc, MGM_APP_PORT=80","serviceConfig":{"name":"zone1-edge1-svc","meSvcName":"svc","ports":[{"protocol":"TCP","port":80}]}}]}]},{"id":"zone1-poa1","name":"zone1-poa1","type":"POA","terminalLinkLatency":1,"terminalLinkLatencyVariation":1,"terminalLinkThroughput":1000,"physicalLocations":[{"id":"zone1-fog1","name":"zone1-fog1","type":"FOG","processes":[{"id":"zone1-fog1-iperf","name":"zone1-fog1-iperf","type":"EDGE-APP","image":"gophernet/iperf-server","commandArguments":"-c, export; iperf -s -p $IPERF_SERVICE_PORT;","commandExe":"/bin/bash","serviceConfig":{"name":"zone1-fog1-iperf","meSvcName":"iperf","ports":[{"protocol":"UDP","port":80}]}},{"id":"zone1-fog1-svc","name":"zone1-fog1-svc","type":"EDGE-APP","image":"meep-docker-registry:30001/demo-server","environment":"MGM_GROUP_NAME=svc, MGM_APP_ID=zone1-fog1-svc, MGM_APP_PORT=80","serviceConfig":{"name":"zone1-fog1-svc","meSvcName":"svc","ports":[{"protocol":"TCP","port":80}]}}]},{"id":"ue1","name":"ue1","type":"UE","processes":[{"id":"ue1-iperf","name":"ue1-iperf","type":"UE-APP","image":"gophernet/iperf-client","commandArguments":"-c, export; iperf -u -c $IPERF_SERVICE_HOST -p $IPERF_SERVICE_PORT -t 3600 -b 50M;","commandExe":"/bin/bash"}]},{"id":"ue2-ext","name":"ue2-ext","type":"UE","isExternal":true,"processes":[{"id":"ue2-svc","name":"ue2-svc","type":"UE-APP","isExternal":true,"externalConfig":{"ingressServiceMap":[{"name":"svc","port":80,"externalPort":31111,"protocol":"TCP"},{"name":"iperf","port":80,"externalPort":31222,"protocol":"UDP"},{"name":"cloud1-svc","port":80,"externalPort":31112,"protocol":"TCP"},{"name":"cloud1-iperf","port":80,"externalPort":31223,"protocol":"UDP"}]}}]}]},{"id":"zone1-poa2","name":"zone1-poa2","type":"POA","terminalLinkLatency":10,"terminalLinkLatencyVariation":2,"terminalLinkThroughput":50}]},{"id":"zone2","name":"zone2","type":"ZONE","interFogLatency":10,"interFogLatencyVariation":2,"interFogThroughput":1000,"interEdgeLatency":12,"interEdgeLatencyVariation":2,"interEdgeThroughput":1000,"edgeFogLatency":5,"edgeFogLatencyVariation":1,"edgeFogThroughput":1000,"networkLocations":[{"id":"zone2-DEFAULT","name":"zone2-DEFAULT","type":"DEFAULT","terminalLinkLatency":1,"terminalLinkLatencyVariation":1,"terminalLinkThroughput":50000,"terminalLinkPacketLoss":1,"physicalLocations":[{"id":"zone2-edge1","name":"zone2-edge1","type":"EDGE","processes":[{"id":"zone2-edge1-iperf","name":"zone2-edge1-iperf","type":"EDGE-APP","image":"gophernet/iperf-server","commandArguments":"-c, export; iperf -s -p $IPERF_SERVICE_PORT;","commandExe":"/bin/bash","serviceConfig":{"name":"zone2-edge1-iperf","meSvcName":"iperf","ports":[{"protocol":"UDP","port":80}]}},{"id":"zone2-edge1-svc","name":"zone2-edge1-svc","type":"EDGE-APP","image":"meep-docker-registry:30001/demo-server","environment":"MGM_GROUP_NAME=svc, MGM_APP_ID=zone2-edge1-svc, MGM_APP_PORT=80","serviceConfig":{"name":"zone2-edge1-svc","meSvcName":"svc","ports":[{"protocol":"TCP","port":80}]}}]}]},{"id":"zone2-poa1","name":"zone2-poa1","type":"POA","terminalLinkLatency":1,"terminalLinkLatencyVariation":1,"terminalLinkThroughput":20}]}]}]}}
`

func TestNewModel(t *testing.T) {
	fmt.Println("--- ", t.Name())
	log.MeepTextLogInit(t.Name())

	// Keep this one first...
	fmt.Println("Invalid Redis DB address")
	_, err := NewModel("ExpectedFailure-InvalidDbLocation", "test-mod", modelName)
	if err == nil {
		t.Errorf("Should report error on invalid Redis db")
	}
	fmt.Println("Invalid module")
	_, err = NewModel(modelRedisAddr, "", modelName)
	if err == nil {
		t.Errorf("Should report error on invalid module")
	}

	fmt.Println("Create normal")
	_, err = NewModel(modelRedisAddr, "test-mod", modelName)
	if err != nil {
		t.Errorf("Unable to create model")
	}

	fmt.Println("Create no name")
	_, err = NewModel(modelRedisAddr, "test-mod", "")
	if err == nil {
		t.Errorf("Should not allow creating model without a name")
	}
}

func TestGetSetModel(t *testing.T) {
	fmt.Println("--- ", t.Name())
	log.MeepTextLogInit(t.Name())

	m, err := NewModel(modelRedisAddr, "test-mod", modelName)
	if err != nil {
		t.Errorf("Unable to create model")
	}

	fmt.Println("GetSvcMap - in-existing")
	svcMap := m.GetServiceMaps()
	if svcMap != nil {
		t.Errorf("Service map unexpected")
	}

	fmt.Println("Set Model")
	err = m.SetModel([]byte(testScenario))
	if err != nil {
		t.Errorf("Error setting model")
	}
	if m.scenario.Name != "demo1" {
		t.Errorf("SetModel failed")
	}

	fmt.Println("Get Model")
	s := m.GetModel()
	if s == nil {
		t.Errorf("Error getting model")
	}
	if s.Name != "demo1" {
		t.Errorf("GetModel failed")
	}

	fmt.Println("GetSvcMap - existing")
	svcMap = m.GetServiceMaps()
	if svcMap == nil {
		t.Errorf("Service map expected")
	}

	fmt.Println("Set Model - deleted scenario")
	m.scenario = nil
	err = m.SetModel([]byte(testScenario))
	if err == nil {
		t.Errorf("SetModel should have failed (nil scenario)")
	}
}

func TestActivateDeactivate(t *testing.T) {
	fmt.Println("--- ", t.Name())
	log.MeepTextLogInit(t.Name())

	m, err := NewModel(modelRedisAddr, "test-mod", modelName)
	if err != nil {
		t.Errorf("Unable to create model")
	}
	fmt.Println("Set Model")
	err = m.SetModel([]byte(testScenario))
	if err != nil {
		t.Errorf("Error setting model")
	}
	if m.scenario.Name != "demo1" {
		t.Errorf("SetModel failed")
	}
	fmt.Println("Activate model")
	err = m.Activate()
	if err != nil {
		t.Errorf("Error activating model")
	}
	fmt.Println("Update model")
	err = m.Update([]byte(testScenario))
	if err != nil {
		t.Errorf("Error updating model")
	}
	fmt.Println("Deactivate model")
	err = m.Deactivate()
	if err != nil {
		t.Errorf("Error deactivating model")
	}
}

func TestMoveNode(t *testing.T) {
	fmt.Println("--- ", t.Name())
	log.MeepTextLogInit(t.Name())

	m, err := NewModel(modelRedisAddr, "test-mod", modelName)
	if err != nil {
		t.Errorf("Unable to create model")
	}
	fmt.Println("Set Model")
	err = m.SetModel([]byte(testScenario))
	if err != nil {
		t.Errorf("Error setting model")
	}
	if m.scenario.Name != "demo1" {
		t.Errorf("SetModel failed")
	}
	fmt.Println("Move ue1")
	old, new, err := m.MoveNode("ue1", "zone2-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone1-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone2-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}
	fmt.Println("Move ue2-ext")
	old, new, err = m.MoveNode("ue2-ext", "zone2-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone1-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone2-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}
	fmt.Println("Move ue1 back")
	old, new, err = m.MoveNode("ue1", "zone1-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone2-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone1-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}
	fmt.Println("Move ue2-ext back")
	old, new, err = m.MoveNode("ue2-ext", "zone1-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone2-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone1-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}
	fmt.Println("Move ue2-ext again")
	old, new, err = m.MoveNode("ue2-ext", "zone2-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone1-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone2-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}
	fmt.Println("Move ue1")
	old, new, err = m.MoveNode("ue1", "zone2-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone1-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone2-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}
	fmt.Println("Move ue1 back again")
	old, new, err = m.MoveNode("ue1", "zone1-poa1")
	if err != nil {
		t.Errorf("Error moving UE")
	}
	if old != "zone2-poa1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone1-poa1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}

	fmt.Println("Move zone1-edge1-iperf")
	_, _, err = m.MoveNode("zone1-edge1-iperf", "zone2-edge2")
	if err == nil {
		t.Errorf("Moving Edge-App part of mobility group should not be allowed")
	}

	fmt.Println("Move zone1-edge1-iperf")
	// Remove mobility group
	node := m.nodeMap.FindByName("zone1-edge1-iperf")
	if node == nil {
		t.Errorf("unable to find node")
	}
	proc := node.object.(*ceModel.Process)
	proc.ServiceConfig.MeSvcName = ""
	old, new, err = m.MoveNode("zone1-edge1-iperf", "zone2-edge1")
	if err != nil {
		t.Errorf("Error moving Edge-App")
	}
	if old != "zone1-edge1" {
		t.Errorf("Move Node - wrong origin Location " + old)
	}
	if new != "zone2-edge1" {
		t.Errorf("Move Node - wrong destination Location " + new)
	}

	fmt.Println("Move Node - not a UE")
	_, _, err = m.MoveNode("Not-a-UE", "zone1-poa1")
	if err == nil {
		t.Errorf("Error moving UE - inexisting UE")
	}
	fmt.Println("Move Node - not a PoA")
	_, _, err = m.MoveNode("ue1", "Not-a-poa")
	if err == nil {
		t.Errorf("Error moving UE - inexisting PoA")
	}

}

func TestFindUE(t *testing.T) {
	fmt.Println("--- ", t.Name())
	log.MeepTextLogInit(t.Name())

	m, err := NewModel(modelRedisAddr, "test-mod", modelName)
	if err != nil {
		t.Errorf("Unable to create model")
	}
	fmt.Println("Set Model")
	err = m.SetModel([]byte(testScenario))
	if err != nil {
		t.Errorf("Error setting model")
	}
	if m.scenario.Name != "demo1" {
		t.Errorf("SetModel failed")
	}

	fmt.Println("Find ue1")
	ue, err := m.FindUE("ue1")
	if err != nil {
		t.Errorf("Error finding UE")
	}
	if ue.Name != "ue1" {
		t.Errorf("Found wrong ue")
	}
	fmt.Println("Find ue2-ext")
	ue, err = m.FindUE("ue2-ext")
	if err != nil {
		t.Errorf("Error finding UE")
	}
	if ue.Name != "ue2-ext" {
		t.Errorf("Found wrong ue")
	}
	fmt.Println("Find Not-a-UE")
	ue, err = m.FindUE("Not-a-UE")
	if err == nil {
		t.Errorf("Found inexisting UE")
	}

}

func TestUpdateNetChar(t *testing.T) {
	fmt.Println("--- ", t.Name())
	log.MeepTextLogInit(t.Name())

	m, err := NewModel(modelRedisAddr, "test-mod", modelName)
	if err != nil {
		t.Errorf("Unable to create model")
	}
	fmt.Println("Set Model")
	err = m.SetModel([]byte(testScenario))
	if err != nil {
		t.Errorf("Error setting model")
	}
	if m.scenario.Name != "demo1" {
		t.Errorf("SetModel failed")
	}

	var nc ceModel.EventNetworkCharacteristicsUpdate
	nc.ElementName = "demo1"
	nc.ElementType = "SCENARIO"
	nc.Latency = 1
	nc.LatencyVariation = 2
	nc.Throughput = 3
	nc.PacketLoss = 4
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	if m.scenario.Deployment.InterDomainLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if m.scenario.Deployment.InterDomainLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if m.scenario.Deployment.InterDomainThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if m.scenario.Deployment.InterDomainPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "operator1"
	nc.ElementType = "OPERATOR"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n := m.nodeMap.FindByName(nc.ElementName)
	d := n.object.(*ceModel.Domain)
	if d.InterZoneLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if d.InterZoneLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if d.InterZoneThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if d.InterZonePacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "zone1"
	nc.ElementType = "ZONE-INTER-EDGE"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	z := n.object.(*ceModel.Zone)
	if z.InterEdgeLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if z.InterEdgeLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if z.InterEdgeThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if z.InterEdgePacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}
	nc.ElementType = "ZONE-INTER-FOG"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	if z.InterFogLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if z.InterFogLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if z.InterFogThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if z.InterFogPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}
	nc.ElementType = "ZONE-EDGE-FOG"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	if z.EdgeFogLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if z.EdgeFogLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if z.EdgeFogThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if z.EdgeFogPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "zone1-poa1"
	nc.ElementType = "POA"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	nl := n.object.(*ceModel.NetworkLocation)
	if nl.TerminalLinkLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if nl.TerminalLinkLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if nl.TerminalLinkThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if nl.TerminalLinkPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "zone1-fog1"
	nc.ElementType = "FOG"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	pl := n.object.(*ceModel.PhysicalLocation)
	if pl.LinkLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if pl.LinkLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if pl.LinkThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if pl.LinkPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "zone1-edge1"
	nc.ElementType = "EDGE"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	pl = n.object.(*ceModel.PhysicalLocation)
	if pl.LinkLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if pl.LinkLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if pl.LinkThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if pl.LinkPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "ue1"
	nc.ElementType = "UE"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	pl = n.object.(*ceModel.PhysicalLocation)
	if pl.LinkLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if pl.LinkLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if pl.LinkThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if pl.LinkPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "cloud1"
	nc.ElementType = "DISTANT CLOUD"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	pl = n.object.(*ceModel.PhysicalLocation)
	if pl.LinkLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if pl.LinkLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if pl.LinkThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if pl.LinkPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "zone1-edge1-iperf"
	nc.ElementType = "EDGE APPLICATION"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	proc := n.object.(*ceModel.Process)
	if proc.AppLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if proc.AppLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if proc.AppThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if proc.AppPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "ue1-iperf"
	nc.ElementType = "UE APPLICATION"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	proc = n.object.(*ceModel.Process)
	if proc.AppLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if proc.AppLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if proc.AppThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if proc.AppPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "cloud1-iperf"
	nc.ElementType = "CLOUD APPLICATION"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Update " + nc.ElementType + " failed")
	}
	n = m.nodeMap.FindByName(nc.ElementName)
	proc = n.object.(*ceModel.Process)
	if proc.AppLatency != 1 {
		t.Errorf("Update " + nc.ElementType + " latency failed")
	}
	if proc.AppLatencyVariation != 2 {
		t.Errorf("Update " + nc.ElementType + " jitter failed")
	}
	if proc.AppThroughput != 3 {
		t.Errorf("Update " + nc.ElementType + " throughput failed")
	}
	if proc.AppPacketLoss != 4 {
		t.Errorf("Update " + nc.ElementType + " packet loss failed")
	}

	nc.ElementName = "Not-a-Name"
	nc.ElementType = "POA"
	err = m.UpdateNetChar(&nc)
	if err == nil {
		t.Errorf("Update " + nc.ElementType + " should fail")
	}

	nc.ElementName = "ue1"
	nc.ElementType = "Not-a-Type"
	err = m.UpdateNetChar(&nc)
	if err != nil {
		t.Errorf("Unsupported type should not fail")
	}

}
