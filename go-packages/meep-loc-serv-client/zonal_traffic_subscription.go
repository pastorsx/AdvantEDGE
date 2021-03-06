/*
 * Location API
 *
 * The ETSI MEC ISG MEC012 Location API described using OpenAPI. The API is based on the Open Mobile Alliance's specification RESTful Network API for Zonal Presence
 *
 * API version: 1.1.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// A type containing zonal traffic subscription
type ZonalTrafficSubscription struct {

	// Uniquely identifies this create subscription request. If there is a communication failure during the request, using the same clientCorrelator when retrying the request allows the operator to avoid creating a duplicate subscription.
	ClientCorrelator string `json:"clientCorrelator,omitempty"`

	CallbackReference *UserTrackingSubscriptionCallbackReference `json:"callbackReference"`

	// Identifier of zone
	ZoneId string `json:"zoneId"`

	// Interest realms of access points within a zone (e.g. geographical area, a type of industry etc.).
	InterestRealm []string `json:"interestRealm,omitempty"`

	// List of user event values to generate notifications for (these apply to zone identifier or all interest realms within zone identifier specified). If this element is missing, a notification is requested to be generated for any change in user event.
	UserEventCriteria []UserEventType `json:"userEventCriteria,omitempty"`

	// Period (in seconds) of time notifications are provided for. If set to \"0\" (zero), a default duration time, which is specified by the service policy, will be used. If the parameter is omitted, the notifications will continue until the maximum duration time, which is specified by the service policy, unless the notifications are stopped by deletion of subscription for notifications. This element MAY be given by the client during resource creation in order to signal the desired lifetime of the subscription. The server MUST return in this element the period of time for which the subscription will still be valid.
	Duration string `json:"duration,omitempty"`

	// Self referring URL.
	ResourceURL string `json:"resourceURL,omitempty"`
}
