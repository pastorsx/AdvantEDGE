# Go API client for client

The ETSI MEC ISG MEC012 Location API described using OpenAPI. The API is based on the Open Mobile Alliance's specification RESTful Network API for Zonal Presence

## Overview
This API client was generated by the [swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By using the [swagger-spec](https://github.com/swagger-api/swagger-spec) from a remote server, you can easily generate an API client.

- API version: 1.1.1
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.GoClientCodegen

## Installation
Put the package under your project folder and add the following in import:
```
    "./client"
```

## Documentation for API Endpoints

All URIs are relative to *http://127.0.0.1:8081/etsi-013/location/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SubscriptionsApi* | [**UserTrackingSubDelById**](docs/SubscriptionsApi.md#usertrackingsubdelbyid) | **Delete** /subscriptions/userTracking/{subscriptionId} | 
*SubscriptionsApi* | [**UserTrackingSubGet**](docs/SubscriptionsApi.md#usertrackingsubget) | **Get** /subscriptions/userTracking | 
*SubscriptionsApi* | [**UserTrackingSubGetById**](docs/SubscriptionsApi.md#usertrackingsubgetbyid) | **Get** /subscriptions/userTracking/{subscriptionId} | 
*SubscriptionsApi* | [**UserTrackingSubPost**](docs/SubscriptionsApi.md#usertrackingsubpost) | **Post** /subscriptions/userTracking | 
*SubscriptionsApi* | [**UserTrackingSubPutById**](docs/SubscriptionsApi.md#usertrackingsubputbyid) | **Put** /subscriptions/userTracking/{subscriptionId} | 
*SubscriptionsApi* | [**ZonalTrafficSubDelById**](docs/SubscriptionsApi.md#zonaltrafficsubdelbyid) | **Delete** /subscriptions/zonalTraffic/{subscriptionId} | 
*SubscriptionsApi* | [**ZonalTrafficSubGet**](docs/SubscriptionsApi.md#zonaltrafficsubget) | **Get** /subscriptions/zonalTraffic | 
*SubscriptionsApi* | [**ZonalTrafficSubGetById**](docs/SubscriptionsApi.md#zonaltrafficsubgetbyid) | **Get** /subscriptions/zonalTraffic/{subscriptionId} | 
*SubscriptionsApi* | [**ZonalTrafficSubPost**](docs/SubscriptionsApi.md#zonaltrafficsubpost) | **Post** /subscriptions/zonalTraffic | 
*SubscriptionsApi* | [**ZonalTrafficSubPutById**](docs/SubscriptionsApi.md#zonaltrafficsubputbyid) | **Put** /subscriptions/zonalTraffic/{subscriptionId} | 
*SubscriptionsApi* | [**ZoneStatusDelById**](docs/SubscriptionsApi.md#zonestatusdelbyid) | **Delete** /subscriptions/zoneStatus/{subscriptionId} | 
*SubscriptionsApi* | [**ZoneStatusGet**](docs/SubscriptionsApi.md#zonestatusget) | **Get** /subscriptions/zonalStatus | 
*SubscriptionsApi* | [**ZoneStatusGetById**](docs/SubscriptionsApi.md#zonestatusgetbyid) | **Get** /subscriptions/zoneStatus/{subscriptionId} | 
*SubscriptionsApi* | [**ZoneStatusPost**](docs/SubscriptionsApi.md#zonestatuspost) | **Post** /subscriptions/zonalStatus | 
*SubscriptionsApi* | [**ZoneStatusPutById**](docs/SubscriptionsApi.md#zonestatusputbyid) | **Put** /subscriptions/zoneStatus/{subscriptionId} | 
*UsersApi* | [**UsersGet**](docs/UsersApi.md#usersget) | **Get** /users | 
*UsersApi* | [**UsersGetById**](docs/UsersApi.md#usersgetbyid) | **Get** /users/{userId} | 
*ZonesApi* | [**ZonesByIdGetAps**](docs/ZonesApi.md#zonesbyidgetaps) | **Get** /zones/{zoneId}/accessPoints | 
*ZonesApi* | [**ZonesByIdGetApsById**](docs/ZonesApi.md#zonesbyidgetapsbyid) | **Get** /zones/{zoneId}/accessPoints/{accessPointId} | 
*ZonesApi* | [**ZonesGet**](docs/ZonesApi.md#zonesget) | **Get** /zones | 
*ZonesApi* | [**ZonesGetById**](docs/ZonesApi.md#zonesgetbyid) | **Get** /zones/{zoneId} | 


## Documentation For Models

 - [AccessPointInfo](docs/AccessPointInfo.md)
 - [AccessPointList](docs/AccessPointList.md)
 - [ConnectionType](docs/ConnectionType.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse2001](docs/InlineResponse2001.md)
 - [InlineResponse20010](docs/InlineResponse20010.md)
 - [InlineResponse20011](docs/InlineResponse20011.md)
 - [InlineResponse20012](docs/InlineResponse20012.md)
 - [InlineResponse2001NotificationSubscriptionList](docs/InlineResponse2001NotificationSubscriptionList.md)
 - [InlineResponse2002](docs/InlineResponse2002.md)
 - [InlineResponse2002NotificationSubscriptionList](docs/InlineResponse2002NotificationSubscriptionList.md)
 - [InlineResponse2003](docs/InlineResponse2003.md)
 - [InlineResponse2004](docs/InlineResponse2004.md)
 - [InlineResponse2005](docs/InlineResponse2005.md)
 - [InlineResponse2006](docs/InlineResponse2006.md)
 - [InlineResponse2007](docs/InlineResponse2007.md)
 - [InlineResponse2008](docs/InlineResponse2008.md)
 - [InlineResponse2009](docs/InlineResponse2009.md)
 - [InlineResponse200NotificationSubscriptionList](docs/InlineResponse200NotificationSubscriptionList.md)
 - [InlineResponse201](docs/InlineResponse201.md)
 - [InlineResponse2011](docs/InlineResponse2011.md)
 - [InlineResponse2012](docs/InlineResponse2012.md)
 - [Link](docs/Link.md)
 - [LocationInfo](docs/LocationInfo.md)
 - [OperationStatus](docs/OperationStatus.md)
 - [UserEventType](docs/UserEventType.md)
 - [UserInfo](docs/UserInfo.md)
 - [UserList](docs/UserList.md)
 - [UserTrackingSubscription](docs/UserTrackingSubscription.md)
 - [UserTrackingSubscriptionCallbackReference](docs/UserTrackingSubscriptionCallbackReference.md)
 - [ZonalPresenceNotification](docs/ZonalPresenceNotification.md)
 - [ZonalTrafficSubscription](docs/ZonalTrafficSubscription.md)
 - [ZoneInfo](docs/ZoneInfo.md)
 - [ZoneList](docs/ZoneList.md)
 - [ZoneStatusNotification](docs/ZoneStatusNotification.md)
 - [ZoneStatusSubscription](docs/ZoneStatusSubscription.md)


## Documentation For Authorization
 Endpoints do not require authorization.


## Author



