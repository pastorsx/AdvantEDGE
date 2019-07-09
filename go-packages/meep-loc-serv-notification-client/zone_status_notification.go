/*
 * MEEP Location Service - Notification Callback
 *
 * This is MEEP Location Services Notification Callback API
 *
 * API version: 0.0.0
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

import (
	"time"
)

// A type containing zone status notification.
type ZoneStatusNotification struct {

	// CallBackData if passed by the application during the associated ZonalTrafficSubscription and UserTrackingSubscription operation. See [REST_NetAPI_Common].
	CallbackData string `json:"callbackData,omitempty"`

	// Identifier of zone
	ZoneId string `json:"zoneId"`

	// Identifier of access point, <E-CGI><Cell Portion ID> (reference ETSI TS 129 171). Where the E-CGI is made up of the PLMN and Cell Identity (28 bit string). Then the PLMN is made up of the 3 digit MCC & 2 or 3 digit MNC. The Cell Portion is an optional element
	AccessPointId string `json:"accessPointId,omitempty"`

	// This element shall be present when ZoneStatusSubscription includes numberOfUsersZoneThreshold element and the number of users in a zone exceeds the threshold defined in this subscription.
	NumberOfUsersInZone int32 `json:"numberOfUsersInZone,omitempty"`

	// This element shall be present when ZoneStatusSubscription includes numberOfUsersAPThreshold element and the number of users in an access point exceeds the threshold defined in the subscription.
	NumberOfUsersInAP int32 `json:"numberOfUsersInAP,omitempty"`

	OperationStatus *OperationStatus `json:"operationStatus,omitempty"`

	// Indicates the time of day for zonal presence notification.
	Timestamp time.Time `json:"timestamp"`

	// Link to other resources that are in relationship with this notification. The server SHOULD include a link to the related subscription. No other links are required or suggested by this specification.
	Link []Link `json:"link,omitempty"`
}
