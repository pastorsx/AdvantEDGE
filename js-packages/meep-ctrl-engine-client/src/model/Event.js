/**
 * MEEP Controller REST API
 * Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EventNetworkCharacteristicsUpdate', 'model/EventOther', 'model/EventPoasInRange', 'model/EventUeMobility'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EventNetworkCharacteristicsUpdate'), require('./EventOther'), require('./EventPoasInRange'), require('./EventUeMobility'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.Event = factory(root.MeepControllerRestApi.ApiClient, root.MeepControllerRestApi.EventNetworkCharacteristicsUpdate, root.MeepControllerRestApi.EventOther, root.MeepControllerRestApi.EventPoasInRange, root.MeepControllerRestApi.EventUeMobility);
  }
}(this, function(ApiClient, EventNetworkCharacteristicsUpdate, EventOther, EventPoasInRange, EventUeMobility) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Event</code>.
   * Event object
   * @alias module:model/Event
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('eventNetworkCharacteristicsUpdate')) {
        obj['eventNetworkCharacteristicsUpdate'] = EventNetworkCharacteristicsUpdate.constructFromObject(data['eventNetworkCharacteristicsUpdate']);
      }
      if (data.hasOwnProperty('eventUeMobility')) {
        obj['eventUeMobility'] = EventUeMobility.constructFromObject(data['eventUeMobility']);
      }
      if (data.hasOwnProperty('eventPoasInRange')) {
        obj['eventPoasInRange'] = EventPoasInRange.constructFromObject(data['eventPoasInRange']);
      }
      if (data.hasOwnProperty('eventOther')) {
        obj['eventOther'] = EventOther.constructFromObject(data['eventOther']);
      }
    }
    return obj;
  }

  /**
   * Event name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Event type
   * @member {module:model/Event.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/EventNetworkCharacteristicsUpdate} eventNetworkCharacteristicsUpdate
   */
  exports.prototype['eventNetworkCharacteristicsUpdate'] = undefined;
  /**
   * @member {module:model/EventUeMobility} eventUeMobility
   */
  exports.prototype['eventUeMobility'] = undefined;
  /**
   * @member {module:model/EventPoasInRange} eventPoasInRange
   */
  exports.prototype['eventPoasInRange'] = undefined;
  /**
   * @member {module:model/EventOther} eventOther
   */
  exports.prototype['eventOther'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "NETWORK-CHARACTERISTICS-UPDATE"
     * @const
     */
    "NETWORK-CHARACTERISTICS-UPDATE": "NETWORK-CHARACTERISTICS-UPDATE",
    /**
     * value: "UE-MOBILITY"
     * @const
     */
    "UE-MOBILITY": "UE-MOBILITY",
    /**
     * value: "POAS-IN-RANGE"
     * @const
     */
    "POAS-IN-RANGE": "POAS-IN-RANGE",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER"  };


  return exports;
}));


