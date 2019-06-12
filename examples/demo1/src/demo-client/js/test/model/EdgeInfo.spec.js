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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MeepDemoAppApi);
  }
}(this, function(expect, MeepDemoAppApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MeepDemoAppApi.EdgeInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EdgeInfo', function() {
    it('should create an instance of EdgeInfo', function() {
      // uncomment below and update the code to test EdgeInfo
      //var instance = new MeepDemoAppApi.EdgeInfo();
      //expect(instance).to.be.a(MeepDemoAppApi.EdgeInfo);
    });

    it('should have the property svc (base name: "svc")', function() {
      // uncomment below and update the code to test the property svc
      //var instance = new MeepDemoAppApi.EdgeInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MeepDemoAppApi.EdgeInfo();
      //expect(instance).to.be();
    });

    it('should have the property ip (base name: "ip")', function() {
      // uncomment below and update the code to test the property ip
      //var instance = new MeepDemoAppApi.EdgeInfo();
      //expect(instance).to.be();
    });

  });

}));
