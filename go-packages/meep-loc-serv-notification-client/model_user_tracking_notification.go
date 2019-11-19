/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Location Service Subscription Notification REST API
 *
 * This API enables the Location Service to post location events to edge applications <p>**Micro-service**<br>None <p>**Type & Usage**<br>User's Edge Applications subscribing to Location events must implement this API <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address:30000/api_ <p>**Default Port**<br>This API is not exposed by default on the AdvantEDGE platform
 *
 * API version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

import (
	"time"
)

// User tracking notification - callback generated toward an ME app with a user tracking subscription
type UserTrackingNotification struct {
	// CallBackData if passed by the application during the associated ZonalTrafficSubscription and UserTrackingSubscription operation. See [REST_NetAPI_Common].
	CallbackData string    `json:"callbackData"`
	UserInfo     *UserInfo `json:"userInfo"`
	// Indicates the time of day for zonal presence notification.
	TimeStamp     time.Time      `json:"timeStamp"`
	UserEventType *UserEventType `json:"userEventType,omitempty"`
}