/*
 * Location API
 *
 * The ETSI MEC ISG MEC012 Location API described using OpenAPI. The API is based on the Open Mobile Alliance's specification RESTful Network API for Zonal Presence
 *
 * API version: 1.1.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// A type containing zonal presence notification
type ZonalPresenceNotification struct {
	CallbackData string `json:"callbackData,omitempty"`
	ZoneId string `json:"zoneId"`
	Address string `json:"address"`
	InterestRealm string `json:"interestRealm,omitempty"`
	UserEventType UserEventType `json:"userEventType"`
	CurrentAccessPointId string `json:"currentAccessPointId"`
	PreviousAccessPointId string `json:"previousAccessPointId,omitempty"`
	Timestamp string `json:"timestamp"`
	// Link to other resources that are in relationship with this notification. The server SHOULD include a link to the related subscription. No other links are required or suggested by this specification.
	Link []Link `json:"link,omitempty"`
}
