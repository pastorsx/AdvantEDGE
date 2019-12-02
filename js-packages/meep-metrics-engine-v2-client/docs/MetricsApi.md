# AdvantEdgeMetricsServiceRestApi.MetricsApi

All URIs are relative to *http://localhost/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEventMetrics**](MetricsApi.md#getEventMetrics) | **GET** /metrics/event | 
[**getNetworkMetrics**](MetricsApi.md#getNetworkMetrics) | **GET** /metrics/network | 


<a name="getEventMetrics"></a>
# **getEventMetrics**
> EventQueryResponse getEventMetrics(params)



Returns Event metrics according to specificed parameters

### Example
```javascript
var AdvantEdgeMetricsServiceRestApi = require('advant_edge_metrics_service_rest_api');

var apiInstance = new AdvantEdgeMetricsServiceRestApi.MetricsApi();

var params = new AdvantEdgeMetricsServiceRestApi.EventQueryParams(); // EventQueryParams | Query parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEventMetrics(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**EventQueryParams**](EventQueryParams.md)| Query parameters | 

### Return type

[**EventQueryResponse**](EventQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNetworkMetrics"></a>
# **getNetworkMetrics**
> NetworkQueryResponse getNetworkMetrics(params)



Returns Network metrics according to specificed parameters

### Example
```javascript
var AdvantEdgeMetricsServiceRestApi = require('advant_edge_metrics_service_rest_api');

var apiInstance = new AdvantEdgeMetricsServiceRestApi.MetricsApi();

var params = new AdvantEdgeMetricsServiceRestApi.NetworkQueryParams(); // NetworkQueryParams | Query parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNetworkMetrics(params, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **params** | [**NetworkQueryParams**](NetworkQueryParams.md)| Query parameters | 

### Return type

[**NetworkQueryResponse**](NetworkQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

