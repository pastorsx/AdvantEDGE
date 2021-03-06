# Go API client for client

Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```
    "./client"
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MEEPSettingsApi* | [**GetMeepSettings**](docs/MEEPSettingsApi.md#getmeepsettings) | **Get** /settings | Retrieve MEEP Controller settings
*MEEPSettingsApi* | [**SetMeepSettings**](docs/MEEPSettingsApi.md#setmeepsettings) | **Put** /settings | Set MEEP Controller settings
*PodStatesApi* | [**GetStates**](docs/PodStatesApi.md#getstates) | **Get** /states | This operation returns status information for pods
*ScenarioConfigurationApi* | [**CreateScenario**](docs/ScenarioConfigurationApi.md#createscenario) | **Post** /scenarios/{name} | Add new scenario to MEEP store
*ScenarioConfigurationApi* | [**DeleteScenario**](docs/ScenarioConfigurationApi.md#deletescenario) | **Delete** /scenarios/{name} | Delete scenario from MEEP store
*ScenarioConfigurationApi* | [**DeleteScenarioList**](docs/ScenarioConfigurationApi.md#deletescenariolist) | **Delete** /scenarios | Delete all scenarios in MEEP store
*ScenarioConfigurationApi* | [**GetScenario**](docs/ScenarioConfigurationApi.md#getscenario) | **Get** /scenarios/{name} | Retrieve scenario from MEEP store
*ScenarioConfigurationApi* | [**GetScenarioList**](docs/ScenarioConfigurationApi.md#getscenariolist) | **Get** /scenarios | Retrieve list of scenarios in MEEP store
*ScenarioConfigurationApi* | [**SetScenario**](docs/ScenarioConfigurationApi.md#setscenario) | **Put** /scenarios/{name} | Update scenario in MEEP store
*ScenarioExecutionApi* | [**ActivateScenario**](docs/ScenarioExecutionApi.md#activatescenario) | **Post** /active/{name} | Activate (deploy) scenario
*ScenarioExecutionApi* | [**GetActiveNodeServiceMaps**](docs/ScenarioExecutionApi.md#getactivenodeservicemaps) | **Get** /active/serviceMaps | Retrieve list of active external node service mappings
*ScenarioExecutionApi* | [**GetActiveScenario**](docs/ScenarioExecutionApi.md#getactivescenario) | **Get** /active | Retrieve active (deployed) scenario
*ScenarioExecutionApi* | [**GetEventList**](docs/ScenarioExecutionApi.md#geteventlist) | **Get** /events | Retrieve list of supported event types for active (deployed) scenario
*ScenarioExecutionApi* | [**SendEvent**](docs/ScenarioExecutionApi.md#sendevent) | **Post** /events/{type} | Send event to active (deployed) scenario
*ScenarioExecutionApi* | [**TerminateScenario**](docs/ScenarioExecutionApi.md#terminatescenario) | **Delete** /active | Terminate active (deployed) scenario


## Documentation For Models

 - [Deployment](docs/Deployment.md)
 - [Domain](docs/Domain.md)
 - [EgressService](docs/EgressService.md)
 - [Event](docs/Event.md)
 - [EventList](docs/EventList.md)
 - [EventNetworkCharacteristicsUpdate](docs/EventNetworkCharacteristicsUpdate.md)
 - [EventOther](docs/EventOther.md)
 - [EventPoasInRange](docs/EventPoasInRange.md)
 - [EventUeMobility](docs/EventUeMobility.md)
 - [ExternalConfig](docs/ExternalConfig.md)
 - [GpuConfig](docs/GpuConfig.md)
 - [IngressService](docs/IngressService.md)
 - [NetworkLocation](docs/NetworkLocation.md)
 - [NodeServiceMaps](docs/NodeServiceMaps.md)
 - [PhysicalLocation](docs/PhysicalLocation.md)
 - [PodStatus](docs/PodStatus.md)
 - [PodsStatus](docs/PodsStatus.md)
 - [Process](docs/Process.md)
 - [Scenario](docs/Scenario.md)
 - [ScenarioConfig](docs/ScenarioConfig.md)
 - [ScenarioList](docs/ScenarioList.md)
 - [ServiceConfig](docs/ServiceConfig.md)
 - [ServicePort](docs/ServicePort.md)
 - [Settings](docs/Settings.md)
 - [Zone](docs/Zone.md)


## Documentation For Authorization
 Endpoints do not require authorization.


## Author



