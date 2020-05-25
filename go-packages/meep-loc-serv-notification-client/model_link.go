/*
 * Copyright (c) 2020  InterDigital Communications, Inc
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
 * This API enables the Location Service to post location events to edge applications <p>**Micro-service**<br>None <p>**Type & Usage**<br>User's Edge Applications subscribing to Location events must implement this API <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_ <p>**Note**<br>This API is not exposed by default on the AdvantEDGE platform
 *
 * API version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// Link to other resources
type Link struct {
	// Describes the relationship between the URI and the resource.
	Rel *interface{} `json:"rel"`
	// URI
	Href *interface{} `json:"href"`
}
