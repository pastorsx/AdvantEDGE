/*
 * Copyright (c) 2020  InterDigital Communications, Inc
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
 * AdvantEDGE Monitoring Engine REST API
 * This API provides AdvantEDGE microservice & scenario deployment status information collected in the Monitoring Engine. <p>**Micro-service**<br>[meep-mon-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-mon-engine) <p>**Type & Usage**<br>Platform interface to retrieve AdvantEDGE microservice & scenario deployment status information <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    factory(root.expect, root.AdvantEdgeMonitoringEngineRestApi);
  }
}(this, function(expect, AdvantEdgeMonitoringEngineRestApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('PodStatus', function() {
      beforeEach(function() {
        instance = new AdvantEdgeMonitoringEngineRestApi.PodStatus();
      });

      it('should create an instance of PodStatus', function() {
        // TODO: update the code to test PodStatus
        expect(instance).to.be.a(AdvantEdgeMonitoringEngineRestApi.PodStatus);
      });

      it('should have the property podType (base name: "podType")', function() {
        // TODO: update the code to test the property podType
        expect(instance).to.have.property('podType');
        // expect(instance.podType).to.be(expectedValueLiteral);
      });

      it('should have the property sandbox (base name: "sandbox")', function() {
        // TODO: update the code to test the property sandbox
        expect(instance).to.have.property('sandbox');
        // expect(instance.sandbox).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property namespace (base name: "namespace")', function() {
        // TODO: update the code to test the property namespace
        expect(instance).to.have.property('namespace');
        // expect(instance.namespace).to.be(expectedValueLiteral);
      });

      it('should have the property meepApp (base name: "meepApp")', function() {
        // TODO: update the code to test the property meepApp
        expect(instance).to.have.property('meepApp');
        // expect(instance.meepApp).to.be(expectedValueLiteral);
      });

      it('should have the property meepOrigin (base name: "meepOrigin")', function() {
        // TODO: update the code to test the property meepOrigin
        expect(instance).to.have.property('meepOrigin');
        // expect(instance.meepOrigin).to.be(expectedValueLiteral);
      });

      it('should have the property meepScenario (base name: "meepScenario")', function() {
        // TODO: update the code to test the property meepScenario
        expect(instance).to.have.property('meepScenario');
        // expect(instance.meepScenario).to.be(expectedValueLiteral);
      });

      it('should have the property phase (base name: "phase")', function() {
        // TODO: update the code to test the property phase
        expect(instance).to.have.property('phase');
        // expect(instance.phase).to.be(expectedValueLiteral);
      });

      it('should have the property podInitialized (base name: "podInitialized")', function() {
        // TODO: update the code to test the property podInitialized
        expect(instance).to.have.property('podInitialized');
        // expect(instance.podInitialized).to.be(expectedValueLiteral);
      });

      it('should have the property podReady (base name: "podReady")', function() {
        // TODO: update the code to test the property podReady
        expect(instance).to.have.property('podReady');
        // expect(instance.podReady).to.be(expectedValueLiteral);
      });

      it('should have the property podScheduled (base name: "podScheduled")', function() {
        // TODO: update the code to test the property podScheduled
        expect(instance).to.have.property('podScheduled');
        // expect(instance.podScheduled).to.be(expectedValueLiteral);
      });

      it('should have the property podUnschedulable (base name: "podUnschedulable")', function() {
        // TODO: update the code to test the property podUnschedulable
        expect(instance).to.have.property('podUnschedulable');
        // expect(instance.podUnschedulable).to.be(expectedValueLiteral);
      });

      it('should have the property podConditionError (base name: "podConditionError")', function() {
        // TODO: update the code to test the property podConditionError
        expect(instance).to.have.property('podConditionError');
        // expect(instance.podConditionError).to.be(expectedValueLiteral);
      });

      it('should have the property containerStatusesMsg (base name: "containerStatusesMsg")', function() {
        // TODO: update the code to test the property containerStatusesMsg
        expect(instance).to.have.property('containerStatusesMsg');
        // expect(instance.containerStatusesMsg).to.be(expectedValueLiteral);
      });

      it('should have the property nbOkContainers (base name: "nbOkContainers")', function() {
        // TODO: update the code to test the property nbOkContainers
        expect(instance).to.have.property('nbOkContainers');
        // expect(instance.nbOkContainers).to.be(expectedValueLiteral);
      });

      it('should have the property nbTotalContainers (base name: "nbTotalContainers")', function() {
        // TODO: update the code to test the property nbTotalContainers
        expect(instance).to.have.property('nbTotalContainers');
        // expect(instance.nbTotalContainers).to.be(expectedValueLiteral);
      });

      it('should have the property nbPodRestart (base name: "nbPodRestart")', function() {
        // TODO: update the code to test the property nbPodRestart
        expect(instance).to.have.property('nbPodRestart');
        // expect(instance.nbPodRestart).to.be(expectedValueLiteral);
      });

      it('should have the property logicalState (base name: "logicalState")', function() {
        // TODO: update the code to test the property logicalState
        expect(instance).to.have.property('logicalState');
        // expect(instance.logicalState).to.be(expectedValueLiteral);
      });

      it('should have the property startTime (base name: "startTime")', function() {
        // TODO: update the code to test the property startTime
        expect(instance).to.have.property('startTime');
        // expect(instance.startTime).to.be(expectedValueLiteral);
      });

    });
  });

}));
