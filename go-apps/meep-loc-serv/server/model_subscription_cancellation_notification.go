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

// A type containing the subscription cancellation notification.
type SubscriptionCancellationNotification struct {
	// Address of terminal if the error applies to an individual terminal.
	Address string `json:"address,omitempty"`
	// CallbackData if passed by the application in the receiptRequest element during the associated subscription operation
	CallbackData string `json:"callbackData,omitempty"`
	// Link to other resources that are in relationship with the resource.
	Link []Link `json:"link,omitempty"`

	Reason *ServiceError `json:"reason,omitempty"`
}