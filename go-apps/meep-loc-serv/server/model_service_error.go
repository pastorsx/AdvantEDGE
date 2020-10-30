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
 * ETSI GS MEC 013 - Location API
 *
 * The ETSI MEC ISG MEC013 WLAN Access Information API described using OpenAPI.
 *
 * API version: 2.1.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package server

// used to indicate a notification termination or cancellation.
type ServiceError struct {
	// Message identifier, either with prefix SVC or with prefix POL
	MessageId string `json:"messageId"`
	// Message text, with replacement variables marked with %n, where n is an index into the list of <variables> elements, starting at 1
	Text string `json:"text"`
	// Variables to substitute into text string
	Variables []string `json:"variables,omitempty"`
}