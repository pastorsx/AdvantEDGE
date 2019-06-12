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
    define(['ApiClient', 'model/TrackingNotification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TrackingNotification'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.NotificationsApi = factory(root.MeepDemoAppApi.ApiClient, root.MeepDemoAppApi.TrackingNotification);
  }
}(this, function(ApiClient, TrackingNotification) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the rcvTrackingNotification operation.
     * @callback module:api/NotificationsApi~rcvTrackingNotificationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This operation is used by the AdvantEDGE Location Service to issue a callback notification towards an ME application with a zonal or user tracking subscription
     * Zonal or User location tracking subscription notification
     * @param {String} subscriptionId Identity of a notification subscription (user or zonal)
     * @param {module:model/TrackingNotification} notification Zonal or User Tracking Notification
     * @param {module:api/NotificationsApi~rcvTrackingNotificationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.rcvTrackingNotification = function(subscriptionId, notification, callback) {
      var postBody = notification;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling rcvTrackingNotification");
      }

      // verify the required parameter 'notification' is set
      if (notification === undefined || notification === null) {
        throw new Error("Missing the required parameter 'notification' when calling rcvTrackingNotification");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/location_notifications/{subscriptionId}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
