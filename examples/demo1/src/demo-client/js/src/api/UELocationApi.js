/**
 * MEEP Demo App API
 * This is the MEEP Demo App API
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.UELocationApi = factory(root.MeepDemoAppApi.ApiClient, root.MeepDemoAppApi.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';

  /**
   * UELocation service.
   * @module api/UELocationApi
   * @version 0.0.1
   */

  /**
   * Constructs a new UELocationApi. 
   * @alias module:api/UELocationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUeLocation operation.
     * @callback module:api/UELocationApi~getUeLocationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the UE location values
     * 
     * @param {String} ueId UE identifier
     * @param {module:api/UELocationApi~getUeLocationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserInfo}
     */
    this.getUeLocation = function(ueId, callback) {
      var postBody = null;

      // verify the required parameter 'ueId' is set
      if (ueId === undefined || ueId === null) {
        throw new Error("Missing the required parameter 'ueId' when calling getUeLocation");
      }


      var pathParams = {
        'ueId': ueId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserInfo;

      return this.apiClient.callApi(
        '/location/{ueId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
