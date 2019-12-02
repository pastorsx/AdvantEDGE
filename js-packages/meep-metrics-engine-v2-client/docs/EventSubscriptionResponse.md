# AdvantEdgeMetricsServiceRestApi.EventSubscriptionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriptionId** | **String** | Subscription identifier | [optional] 
**clientCorrelator** | **String** | Uniquely identifies this create subscription request. If there is a communication failure during the request, using the same clientCorrelator when retrying the request allows the operator to avoid creating a duplicate subscription. | [optional] 
**callbackReference** | [**EventsCallbackReference**](EventsCallbackReference.md) |  | [optional] 
**resourceURL** | **String** | Self referring URL. | [optional] 
**eventQueryParams** | [**EventQueryParams**](EventQueryParams.md) |  | [optional] 


