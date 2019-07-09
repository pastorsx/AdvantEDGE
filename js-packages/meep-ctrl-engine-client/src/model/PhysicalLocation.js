/**
 * MEEP Controller REST API
 * Copyright (c) 2019 InterDigital Communications, Inc. All rights reserved. The information provided herein is the proprietary and confidential information of InterDigital Communications, Inc. 
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
    define(['ApiClient', 'model/Process'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Process'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepControllerRestApi) {
      root.MeepControllerRestApi = {};
    }
    root.MeepControllerRestApi.PhysicalLocation = factory(root.MeepControllerRestApi.ApiClient, root.MeepControllerRestApi.Process);
  }
}(this, function(ApiClient, Process) {
  'use strict';




  /**
   * The PhysicalLocation model module.
   * @module model/PhysicalLocation
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PhysicalLocation</code>.
   * Physical location object
   * @alias module:model/PhysicalLocation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>PhysicalLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhysicalLocation} obj Optional instance to populate.
   * @return {module:model/PhysicalLocation} The populated <code>PhysicalLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('isExternal')) {
        obj['isExternal'] = ApiClient.convertToType(data['isExternal'], 'Boolean');
      }
      if (data.hasOwnProperty('networkLocationsInRange')) {
        obj['networkLocationsInRange'] = ApiClient.convertToType(data['networkLocationsInRange'], ['String']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], {'String': 'String'});
      }
      if (data.hasOwnProperty('userMeta')) {
        obj['userMeta'] = ApiClient.convertToType(data['userMeta'], {'String': 'String'});
      }
      if (data.hasOwnProperty('processes')) {
        obj['processes'] = ApiClient.convertToType(data['processes'], [Process]);
      }
    }
    return obj;
  }

  /**
   * Unique physical location ID
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Physical location name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Physical location type
   * @member {module:model/PhysicalLocation.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * true: Physical location is external to MEEP false: Physical location is internal to MEEP
   * @member {Boolean} isExternal
   */
  exports.prototype['isExternal'] = undefined;
  /**
   * @member {Array.<String>} networkLocationsInRange
   */
  exports.prototype['networkLocationsInRange'] = undefined;
  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * Key/Value Pair Map (string, string)
   * @member {Object.<String, String>} userMeta
   */
  exports.prototype['userMeta'] = undefined;
  /**
   * @member {Array.<module:model/Process>} processes
   */
  exports.prototype['processes'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "UE"
     * @const
     */
    "UE": "UE",
    /**
     * value: "FOG"
     * @const
     */
    "FOG": "FOG",
    /**
     * value: "EDGE"
     * @const
     */
    "EDGE": "EDGE",
    /**
     * value: "CN"
     * @const
     */
    "CN": "CN",
    /**
     * value: "DC"
     * @const
     */
    "DC": "DC"  };


  return exports;
}));


