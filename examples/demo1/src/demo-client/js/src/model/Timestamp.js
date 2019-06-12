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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.Timestamp = factory(root.MeepDemoAppApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Timestamp model module.
   * @module model/Timestamp
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Timestamp</code>.
   * Indicates the time of day for zonal presence notification.
   * @alias module:model/Timestamp
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Timestamp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Timestamp} obj Optional instance to populate.
   * @return {module:model/Timestamp} The populated <code>Timestamp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    return data;
  }




  return exports;
}));


