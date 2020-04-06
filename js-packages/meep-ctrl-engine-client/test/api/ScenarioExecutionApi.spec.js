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
 * AdvantEDGE Platform Controller REST API
 * This API is the main platform API and mainly used by the AdvantEDGE frontend to interact with scenarios <p>**Micro-service**<br>[meep-ctrl-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-ctrl-engine) <p>**Type & Usage**<br>Platform main interface used by controller software that want to interact with the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address/api_
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
    factory(root.expect, root.AdvantEdgePlatformControllerRestApi);
  }
}(this, function(expect, AdvantEdgePlatformControllerRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AdvantEdgePlatformControllerRestApi.ScenarioExecutionApi();
  });

  describe('(package)', function() {
    describe('ScenarioExecutionApi', function() {
      describe('activateScenario', function() {
        it('should call activateScenario successfully', function(done) {
          // TODO: uncomment, update parameter values for activateScenario call
          /*
          var name = "name_example";
          var opts = {};
          opts.activationInfo = new AdvantEdgePlatformControllerRestApi.ActivationInfo();
          opts.activationInfo.replayFileName = "";

          instance.activateScenario(name, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getActiveNodeServiceMaps', function() {
        it('should call getActiveNodeServiceMaps successfully', function(done) {
          // TODO: uncomment, update parameter values for getActiveNodeServiceMaps call and complete the assertions
          /*
          var opts = {};
          opts.node = "node_example";
          opts.type = "type_example";
          opts.service = "service_example";

          instance.getActiveNodeServiceMaps(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.NodeServiceMaps);
              expect(data.node).to.be.a('string');
              expect(data.node).to.be("");
              {
                let dataCtr = data.ingressServiceMap;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.IngressService);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.port).to.be.a('number');
                  expect(data.port).to.be(0);
                  expect(data.externalPort).to.be.a('number');
                  expect(data.externalPort).to.be(0);
                  expect(data.protocol).to.be.a('string');
                  expect(data.protocol).to.be("");
                }
              }
              {
                let dataCtr = data.egressServiceMap;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.EgressService);
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.meSvcName).to.be.a('string');
                  expect(data.meSvcName).to.be("");
                  expect(data.ip).to.be.a('string');
                  expect(data.ip).to.be("");
                  expect(data.port).to.be.a('number');
                  expect(data.port).to.be(0);
                  expect(data.protocol).to.be.a('string');
                  expect(data.protocol).to.be("");
                }
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getActiveScenario', function() {
        it('should call getActiveScenario successfully', function(done) {
          // TODO: uncomment getActiveScenario call and complete the assertions
          /*

          instance.getActiveScenario(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.Scenario);
            expect(data.version).to.be.a('string');
            expect(data.version).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.config).to.be.a(AdvantEdgePlatformControllerRestApi.ScenarioConfig);
                  expect(data.config.visualization).to.be.a('string');
              expect(data.config.visualization).to.be("");
              expect(data.config.other).to.be.a('string');
              expect(data.config.other).to.be("");
            expect(data.deployment).to.be.a(AdvantEdgePlatformControllerRestApi.Deployment);
                  expect(data.deployment.interDomainLatency).to.be.a('number');
              expect(data.deployment.interDomainLatency).to.be(0);
              expect(data.deployment.interDomainLatencyVariation).to.be.a('number');
              expect(data.deployment.interDomainLatencyVariation).to.be(0);
              expect(data.deployment.interDomainThroughput).to.be.a('number');
              expect(data.deployment.interDomainThroughput).to.be(0);
              expect(data.deployment.interDomainPacketLoss).to.be.a('number');
              expect(data.deployment.interDomainPacketLoss).to.be(0.0);
              {
                let dataCtr = data.deployment.meta;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.deployment.userMeta;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              {
                let dataCtr = data.deployment.domains;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.Domain);
                  expect(data.id).to.be.a('string');
                  expect(data.id).to.be("");
                  expect(data.name).to.be.a('string');
                  expect(data.name).to.be("");
                  expect(data.type).to.be.a('string');
                  expect(data.type).to.be("OPERATOR");
                  expect(data.interZoneLatency).to.be.a('number');
                  expect(data.interZoneLatency).to.be(0);
                  expect(data.interZoneLatencyVariation).to.be.a('number');
                  expect(data.interZoneLatencyVariation).to.be(0);
                  expect(data.interZoneThroughput).to.be.a('number');
                  expect(data.interZoneThroughput).to.be(0);
                  expect(data.interZonePacketLoss).to.be.a('number');
                  expect(data.interZonePacketLoss).to.be(0.0);
                  {
                    let dataCtr = data.meta;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  {
                    let dataCtr = data.userMeta;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
                  expect(data._3gpp).to.be.a(AdvantEdgePlatformControllerRestApi.Model3gpp);
                        expect(data._3gpp.mnc).to.be.a('string');
                    expect(data._3gpp.mnc).to.be("");
                    expect(data._3gpp.mcc).to.be.a('string');
                    expect(data._3gpp.mcc).to.be("");
                    expect(data._3gpp.cellId).to.be.a('string');
                    expect(data._3gpp.cellId).to.be("");
                  {
                    let dataCtr = data.zones;
                    expect(dataCtr).to.be.an(Array);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.Zone);
                      expect(data.id).to.be.a('string');
                      expect(data.id).to.be("");
                      expect(data.name).to.be.a('string');
                      expect(data.name).to.be("");
                      expect(data.type).to.be.a('string');
                      expect(data.type).to.be("ZONE");
                      expect(data.netChar).to.be.a(AdvantEdgePlatformControllerRestApi.NetworkCharacteristics);
                            expect(data.netChar.latency).to.be.a('number');
                        expect(data.netChar.latency).to.be(0);
                        expect(data.netChar.latencyVariation).to.be.a('number');
                        expect(data.netChar.latencyVariation).to.be(0);
                        expect(data.netChar.throughput).to.be.a('number');
                        expect(data.netChar.throughput).to.be(0);
                        expect(data.netChar.packetLoss).to.be.a('number');
                        expect(data.netChar.packetLoss).to.be(0.0);
                      expect(data.interFogLatency).to.be.a('number');
                      expect(data.interFogLatency).to.be(0);
                      expect(data.interFogLatencyVariation).to.be.a('number');
                      expect(data.interFogLatencyVariation).to.be(0);
                      expect(data.interFogThroughput).to.be.a('number');
                      expect(data.interFogThroughput).to.be(0);
                      expect(data.interFogPacketLoss).to.be.a('number');
                      expect(data.interFogPacketLoss).to.be(0.0);
                      expect(data.interEdgeLatency).to.be.a('number');
                      expect(data.interEdgeLatency).to.be(0);
                      expect(data.interEdgeLatencyVariation).to.be.a('number');
                      expect(data.interEdgeLatencyVariation).to.be(0);
                      expect(data.interEdgeThroughput).to.be.a('number');
                      expect(data.interEdgeThroughput).to.be(0);
                      expect(data.interEdgePacketLoss).to.be.a('number');
                      expect(data.interEdgePacketLoss).to.be(0.0);
                      expect(data.edgeFogLatency).to.be.a('number');
                      expect(data.edgeFogLatency).to.be(0);
                      expect(data.edgeFogLatencyVariation).to.be.a('number');
                      expect(data.edgeFogLatencyVariation).to.be(0);
                      expect(data.edgeFogThroughput).to.be.a('number');
                      expect(data.edgeFogThroughput).to.be(0);
                      expect(data.edgeFogPacketLoss).to.be.a('number');
                      expect(data.edgeFogPacketLoss).to.be(0.0);
                      {
                        let dataCtr = data.meta;
                        expect(dataCtr).to.be.an(Object);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a('string');
                          expect(data).to.be("");
                        }
                      }
                      {
                        let dataCtr = data.userMeta;
                        expect(dataCtr).to.be.an(Object);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a('string');
                          expect(data).to.be("");
                        }
                      }
                      {
                        let dataCtr = data.networkLocations;
                        expect(dataCtr).to.be.an(Array);
                        expect(dataCtr).to.not.be.empty();
                        for (let p in dataCtr) {
                          let data = dataCtr[p];
                          expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.NetworkLocation);
                          expect(data.id).to.be.a('string');
                          expect(data.id).to.be("");
                          expect(data.name).to.be.a('string');
                          expect(data.name).to.be("");
                          expect(data.type).to.be.a('string');
                          expect(data.type).to.be("POA");
                          expect(data.terminalLinkLatency).to.be.a('number');
                          expect(data.terminalLinkLatency).to.be(0);
                          expect(data.terminalLinkLatencyVariation).to.be.a('number');
                          expect(data.terminalLinkLatencyVariation).to.be(0);
                          expect(data.terminalLinkThroughput).to.be.a('number');
                          expect(data.terminalLinkThroughput).to.be(0);
                          expect(data.terminalLinkPacketLoss).to.be.a('number');
                          expect(data.terminalLinkPacketLoss).to.be(0.0);
                          {
                            let dataCtr = data.meta;
                            expect(dataCtr).to.be.an(Object);
                            expect(dataCtr).to.not.be.empty();
                            for (let p in dataCtr) {
                              let data = dataCtr[p];
                              expect(data).to.be.a('string');
                              expect(data).to.be("");
                            }
                          }
                          {
                            let dataCtr = data.userMeta;
                            expect(dataCtr).to.be.an(Object);
                            expect(dataCtr).to.not.be.empty();
                            for (let p in dataCtr) {
                              let data = dataCtr[p];
                              expect(data).to.be.a('string');
                              expect(data).to.be("");
                            }
                          }
                          expect(data._3gpp).to.be.a(AdvantEdgePlatformControllerRestApi.Model3gpp);
                                expect(data._3gpp.mnc).to.be.a('string');
                            expect(data._3gpp.mnc).to.be("");
                            expect(data._3gpp.mcc).to.be.a('string');
                            expect(data._3gpp.mcc).to.be("");
                            expect(data._3gpp.cellId).to.be.a('string');
                            expect(data._3gpp.cellId).to.be("");
                          {
                            let dataCtr = data.physicalLocations;
                            expect(dataCtr).to.be.an(Array);
                            expect(dataCtr).to.not.be.empty();
                            for (let p in dataCtr) {
                              let data = dataCtr[p];
                              expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.PhysicalLocation);
                              expect(data.id).to.be.a('string');
                              expect(data.id).to.be("");
                              expect(data.name).to.be.a('string');
                              expect(data.name).to.be("");
                              expect(data.type).to.be.a('string');
                              expect(data.type).to.be("UE");
                              expect(data.isExternal).to.be.a('boolean');
                              expect(data.isExternal).to.be(false);
                              {
                                let dataCtr = data.networkLocationsInRange;
                                expect(dataCtr).to.be.an(Array);
                                expect(dataCtr).to.not.be.empty();
                                for (let p in dataCtr) {
                                  let data = dataCtr[p];
                                  expect(data).to.be.a('string');
                                  expect(data).to.be("");
                                }
                              }
                              {
                                let dataCtr = data.meta;
                                expect(dataCtr).to.be.an(Object);
                                expect(dataCtr).to.not.be.empty();
                                for (let p in dataCtr) {
                                  let data = dataCtr[p];
                                  expect(data).to.be.a('string');
                                  expect(data).to.be("");
                                }
                              }
                              {
                                let dataCtr = data.userMeta;
                                expect(dataCtr).to.be.an(Object);
                                expect(dataCtr).to.not.be.empty();
                                for (let p in dataCtr) {
                                  let data = dataCtr[p];
                                  expect(data).to.be.a('string');
                                  expect(data).to.be("");
                                }
                              }
                              {
                                let dataCtr = data.processes;
                                expect(dataCtr).to.be.an(Array);
                                expect(dataCtr).to.not.be.empty();
                                for (let p in dataCtr) {
                                  let data = dataCtr[p];
                                  expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.Process);
                                  expect(data.id).to.be.a('string');
                                  expect(data.id).to.be("");
                                  expect(data.name).to.be.a('string');
                                  expect(data.name).to.be("");
                                  expect(data.type).to.be.a('string');
                                  expect(data.type).to.be("UE-APP");
                                  expect(data.isExternal).to.be.a('boolean');
                                  expect(data.isExternal).to.be(false);
                                  expect(data.image).to.be.a('string');
                                  expect(data.image).to.be("");
                                  expect(data.environment).to.be.a('string');
                                  expect(data.environment).to.be("");
                                  expect(data.commandArguments).to.be.a('string');
                                  expect(data.commandArguments).to.be("");
                                  expect(data.commandExe).to.be.a('string');
                                  expect(data.commandExe).to.be("");
                                  expect(data.serviceConfig).to.be.a(AdvantEdgePlatformControllerRestApi.ServiceConfig);
                                        expect(data.serviceConfig.name).to.be.a('string');
                                    expect(data.serviceConfig.name).to.be("");
                                    expect(data.serviceConfig.meSvcName).to.be.a('string');
                                    expect(data.serviceConfig.meSvcName).to.be("");
                                    {
                                      let dataCtr = data.serviceConfig.ports;
                                      expect(dataCtr).to.be.an(Array);
                                      expect(dataCtr).to.not.be.empty();
                                      for (let p in dataCtr) {
                                        let data = dataCtr[p];
                                        expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.ServicePort);
                                        expect(data.protocol).to.be.a('string');
                                        expect(data.protocol).to.be("");
                                        expect(data.port).to.be.a('number');
                                        expect(data.port).to.be(0);
                                        expect(data.externalPort).to.be.a('number');
                                        expect(data.externalPort).to.be(0);
                                      }
                                    }
                                  expect(data.gpuConfig).to.be.a(AdvantEdgePlatformControllerRestApi.GpuConfig);
                                        expect(data.gpuConfig.type).to.be.a('string');
                                    expect(data.gpuConfig.type).to.be("");
                                    expect(data.gpuConfig.count).to.be.a('number');
                                    expect(data.gpuConfig.count).to.be(0);
                                  expect(data.externalConfig).to.be.a(AdvantEdgePlatformControllerRestApi.ExternalConfig);
                                        {
                                      let dataCtr = data.externalConfig.ingressServiceMap;
                                      expect(dataCtr).to.be.an(Array);
                                      expect(dataCtr).to.not.be.empty();
                                      for (let p in dataCtr) {
                                        let data = dataCtr[p];
                                        expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.IngressService);
                                        expect(data.name).to.be.a('string');
                                        expect(data.name).to.be("");
                                        expect(data.port).to.be.a('number');
                                        expect(data.port).to.be(0);
                                        expect(data.externalPort).to.be.a('number');
                                        expect(data.externalPort).to.be(0);
                                        expect(data.protocol).to.be.a('string');
                                        expect(data.protocol).to.be("");
                                      }
                                    }
                                    {
                                      let dataCtr = data.externalConfig.egressServiceMap;
                                      expect(dataCtr).to.be.an(Array);
                                      expect(dataCtr).to.not.be.empty();
                                      for (let p in dataCtr) {
                                        let data = dataCtr[p];
                                        expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.EgressService);
                                        expect(data.name).to.be.a('string');
                                        expect(data.name).to.be("");
                                        expect(data.meSvcName).to.be.a('string');
                                        expect(data.meSvcName).to.be("");
                                        expect(data.ip).to.be.a('string');
                                        expect(data.ip).to.be("");
                                        expect(data.port).to.be.a('number');
                                        expect(data.port).to.be(0);
                                        expect(data.protocol).to.be.a('string');
                                        expect(data.protocol).to.be("");
                                      }
                                    }
                                  expect(data.status).to.be.a('string');
                                  expect(data.status).to.be("");
                                  expect(data.userChartLocation).to.be.a('string');
                                  expect(data.userChartLocation).to.be("");
                                  expect(data.userChartAlternateValues).to.be.a('string');
                                  expect(data.userChartAlternateValues).to.be("");
                                  expect(data.userChartGroup).to.be.a('string');
                                  expect(data.userChartGroup).to.be("");
                                  {
                                    let dataCtr = data.meta;
                                    expect(dataCtr).to.be.an(Object);
                                    expect(dataCtr).to.not.be.empty();
                                    for (let p in dataCtr) {
                                      let data = dataCtr[p];
                                      expect(data).to.be.a('string');
                                      expect(data).to.be("");
                                    }
                                  }
                                  {
                                    let dataCtr = data.userMeta;
                                    expect(dataCtr).to.be.an(Object);
                                    expect(dataCtr).to.not.be.empty();
                                    for (let p in dataCtr) {
                                      let data = dataCtr[p];
                                      expect(data).to.be.a('string');
                                      expect(data).to.be("");
                                    }
                                  }
                                  expect(data.appLatency).to.be.a('number');
                                  expect(data.appLatency).to.be(0);
                                  expect(data.appLatencyVariation).to.be.a('number');
                                  expect(data.appLatencyVariation).to.be(0);
                                  expect(data.appThroughput).to.be.a('number');
                                  expect(data.appThroughput).to.be(0);
                                  expect(data.appPacketLoss).to.be.a('number');
                                  expect(data.appPacketLoss).to.be(0.0);
                                  expect(data.placementId).to.be.a('string');
                                  expect(data.placementId).to.be("");
                                }
                              }
                              expect(data.linkLatency).to.be.a('number');
                              expect(data.linkLatency).to.be(0);
                              expect(data.linkLatencyVariation).to.be.a('number');
                              expect(data.linkLatencyVariation).to.be(0);
                              expect(data.linkThroughput).to.be.a('number');
                              expect(data.linkThroughput).to.be(0);
                              expect(data.linkPacketLoss).to.be.a('number');
                              expect(data.linkPacketLoss).to.be(0.0);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sendEvent', function() {
        it('should call sendEvent successfully', function(done) {
          // TODO: uncomment, update parameter values for sendEvent call
          /*
          var type = "type_example";
          var event = new AdvantEdgePlatformControllerRestApi.Event();
          event.name = "";
          event.type = "NETWORK-CHARACTERISTICS-UPDATE";
          event.eventNetworkCharacteristicsUpdate = new AdvantEdgePlatformControllerRestApi.EventNetworkCharacteristicsUpdate();
          event.eventNetworkCharacteristicsUpdate.elementName = "";
          event.eventNetworkCharacteristicsUpdate.elementType = "SCENARIO";
          event.eventNetworkCharacteristicsUpdate.latency = 0;
          event.eventNetworkCharacteristicsUpdate.latencyVariation = 0;
          event.eventNetworkCharacteristicsUpdate.throughput = 0;
          event.eventNetworkCharacteristicsUpdate.packetLoss = 0.0;
          event.eventMobility = new AdvantEdgePlatformControllerRestApi.EventMobility();
          event.eventMobility.elementName = "";
          event.eventMobility.dest = "";
          event.eventPoasInRange = new AdvantEdgePlatformControllerRestApi.EventPoasInRange();
          event.eventPoasInRange.ue = "";
          event.eventPoasInRange.poasInRange = [""];
          event.eventOther = new AdvantEdgePlatformControllerRestApi.EventOther();
          event.eventOther.event = "";

          instance.sendEvent(type, event, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('terminateScenario', function() {
        it('should call terminateScenario successfully', function(done) {
          // TODO: uncomment terminateScenario call
          /*

          instance.terminateScenario(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
