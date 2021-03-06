/**
 * MEEP Demo App API
 * Copyright (c) 2019  InterDigital Communications, Inc Licensed under the Apache License, Version 2.0 (the \"License\"); you may not use this file except in compliance with the License. You may obtain a copy of the License at      http://www.apache.org/licenses/LICENSE-2.0  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License. 
 *
 * OpenAPI spec version: 0.0.1
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MeepDemoAppApi) {
      root.MeepDemoAppApi = {};
    }
    root.MeepDemoAppApi.UserEventType = factory(root.MeepDemoAppApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class UserEventType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Entering"
     * @const
     */
    "Entering": "Entering",
    /**
     * value: "Transferring"
     * @const
     */
    "Transferring": "Transferring",
    /**
     * value: "Exiting"
     * @const
     */
    "Exiting": "Exiting"  };

  /**
   * Returns a <code>UserEventType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/UserEventType} The enum <code>UserEventType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


