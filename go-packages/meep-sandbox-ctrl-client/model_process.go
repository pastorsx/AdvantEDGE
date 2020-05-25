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
 * AdvantEDGE Sandbox Controller REST API
 *
 * This API is the main Sandbox Controller API for scenario deployment & event injection <p>**Micro-service**<br>[meep-sandbox-ctrl](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-sandbox-ctrl) <p>**Type & Usage**<br>Platform runtime interface to manage active scenarios and inject events in AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
 *
 * API version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package client

// Application or service object
type Process struct {
	// Unique process ID
	Id string `json:"id,omitempty"`
	// Process name
	Name string `json:"name,omitempty"`
	// Process type
	Type_ string `json:"type,omitempty"`
	// true: process is external to MEEP false: process is internal to MEEP
	IsExternal bool `json:"isExternal,omitempty"`
	// Docker image to deploy inside MEEP
	Image string `json:"image,omitempty"`
	// Environment variables using the format NAME=\"value\",NAME=\"value\",NAME=\"value\"
	Environment string `json:"environment,omitempty"`
	// Arguments to command executable
	CommandArguments string `json:"commandArguments,omitempty"`
	// Executable to invoke at container start up
	CommandExe     string          `json:"commandExe,omitempty"`
	ServiceConfig  *ServiceConfig  `json:"serviceConfig,omitempty"`
	GpuConfig      *GpuConfig      `json:"gpuConfig,omitempty"`
	ExternalConfig *ExternalConfig `json:"externalConfig,omitempty"`
	// Process status
	Status string `json:"status,omitempty"`
	// Chart location for the deployment of the chart provided by the user
	UserChartLocation string `json:"userChartLocation,omitempty"`
	// Chart values.yaml file location for the deployment of the chart provided by the user
	UserChartAlternateValues string `json:"userChartAlternateValues,omitempty"`
	// Chart supplemental information related to the group (service)
	UserChartGroup string `json:"userChartGroup,omitempty"`
	// Key/Value Pair Map (string, string)
	Meta map[string]string `json:"meta,omitempty"`
	// Key/Value Pair Map (string, string)
	UserMeta map[string]string `json:"userMeta,omitempty"`
	// Latency in ms caused by the application
	AppLatency int32 `json:"appLatency,omitempty"`
	// Latency variation in ms caused by the application
	AppLatencyVariation int32 `json:"appLatencyVariation,omitempty"`
	// The limit of the traffic supported by the application
	AppThroughput int32 `json:"appThroughput,omitempty"`
	// Packet lost (in terms of percentage) caused by the application
	AppPacketLoss float64 `json:"appPacketLoss,omitempty"`
	// Identifier used for process placement in AdvantEDGE cluster
	PlacementId string `json:"placementId,omitempty"`
}
