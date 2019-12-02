# AdvantEdgeMetricsServiceRestApi.NetworkSubscriptionParams

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientCorrelator** | **String** | Uniquely identifies this create subscription request. If there is a communication failure during the request, using the same clientCorrelator when retrying the request allows the operator to avoid creating a duplicate subscription. | [optional] 
**callbackReference** | [**NetworkCallbackReference**](NetworkCallbackReference.md) |  | [optional] 
**eventQueryParams** | [**EventQueryParams**](EventQueryParams.md) |  | [optional] 


