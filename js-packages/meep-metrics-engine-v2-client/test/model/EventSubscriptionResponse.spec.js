/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * AdvantEDGE Metrics Service REST API
 * Metrics Service provides metrics about the active scenario <p>**Micro-service**<br>[meep-metrics-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-metrics-engine) <p>**Type & Usage**<br>Platform Service used by control/monitoring software and possibly by edge applications that require metrics <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address:30000/api_ <p>**Default Port**<br>`30005`
 *
 * OpenAPI spec version: 1.0.0
 * Contact: AdvantEDGE@InterDigital.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
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
    factory(root.expect, root.AdvantEdgeMetricsServiceRestApi);
  }
}(this, function(expect, AdvantEdgeMetricsServiceRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('EventSubscriptionResponse', function() {
      beforeEach(function() {
        instance = new AdvantEdgeMetricsServiceRestApi.EventSubscriptionResponse();
      });

      it('should create an instance of EventSubscriptionResponse', function() {
        // TODO: update the code to test EventSubscriptionResponse
        expect(instance).to.be.a(AdvantEdgeMetricsServiceRestApi.EventSubscriptionResponse);
      });

      it('should have the property subscriptionId (base name: "subscriptionId")', function() {
        // TODO: update the code to test the property subscriptionId
        expect(instance).to.have.property('subscriptionId');
        // expect(instance.subscriptionId).to.be(expectedValueLiteral);
      });

      it('should have the property clientCorrelator (base name: "clientCorrelator")', function() {
        // TODO: update the code to test the property clientCorrelator
        expect(instance).to.have.property('clientCorrelator');
        // expect(instance.clientCorrelator).to.be(expectedValueLiteral);
      });

      it('should have the property callbackReference (base name: "callbackReference")', function() {
        // TODO: update the code to test the property callbackReference
        expect(instance).to.have.property('callbackReference');
        // expect(instance.callbackReference).to.be(expectedValueLiteral);
      });

      it('should have the property resourceURL (base name: "resourceURL")', function() {
        // TODO: update the code to test the property resourceURL
        expect(instance).to.have.property('resourceURL');
        // expect(instance.resourceURL).to.be(expectedValueLiteral);
      });

      it('should have the property eventQueryParams (base name: "eventQueryParams")', function() {
        // TODO: update the code to test the property eventQueryParams
        expect(instance).to.have.property('eventQueryParams');
        // expect(instance.eventQueryParams).to.be(expectedValueLiteral);
      });

    });
  });

}));
