/*
 * Location API
 *
 * The ETSI MEC ISG MEC012 Location API described using OpenAPI. The API is based on the Open Mobile Alliance's specification RESTful Network API for Zonal Presence
 *
 * API version: 1.1.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

// A type containing location information with latitude, longitude and altitude, in addition the accuracy of the information are provided.
type LocationInfo struct {
	Latitude float32 `json:"latitude"`

	Longitude float32 `json:"longitude"`

	Altitude float32 `json:"altitude,omitempty"`

	Accuracy int32 `json:"accuracy"`
}
