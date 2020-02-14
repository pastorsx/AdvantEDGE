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
 * This API is the main platform API and mainly used by the AdvantEDGE frontend to interact with scenarios <p>**Micro-service**<br>[meep-ctrl-engine](https://github.com/InterDigitalInc/AdvantEDGE/tree/master/go-apps/meep-ctrl-engine) <p>**Type & Usage**<br>Platform main interface used by controller software that want to interact with the AdvantEDGE platform <p>**Details**<br>API details available at _your-AdvantEDGE-ip-address:30000/api_ <p>**Default Port**<br>`30000` 
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
    instance = new AdvantEdgePlatformControllerRestApi.EventReplayApi();
  });

  describe('(package)', function() {
    describe('EventReplayApi', function() {
      describe('createReplayFile', function() {
        it('should call createReplayFile successfully', function(done) {
          // TODO: uncomment, update parameter values for createReplayFile call
          /*
          var name = "name_example";
          var replayFile = new AdvantEdgePlatformControllerRestApi.Replay();
          replayFile.events = [new AdvantEdgePlatformControllerRestApi.ReplayEvent()];
          replayFile.events[0].time = 0;
          replayFile.events[0].event = new AdvantEdgePlatformControllerRestApi.Event();
          replayFile.events[0].event.name = "";
          replayFile.events[0].event.type = "NETWORK-CHARACTERISTICS-UPDATE";
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate = new AdvantEdgePlatformControllerRestApi.EventNetworkCharacteristicsUpdate();
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate.elementName = "";
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate.elementType = "SCENARIO";
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate.latency = 0;
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate.latencyVariation = 0;
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate.throughput = 0;
          replayFile.events[0].event.eventNetworkCharacteristicsUpdate.packetLoss = 0.0;
          replayFile.events[0].event.eventMobility = new AdvantEdgePlatformControllerRestApi.EventMobility();
          replayFile.events[0].event.eventMobility.elementName = "";
          replayFile.events[0].event.eventMobility.dest = "";
          replayFile.events[0].event.eventPoasInRange = new AdvantEdgePlatformControllerRestApi.EventPoasInRange();
          replayFile.events[0].event.eventPoasInRange.ue = "";
          replayFile.events[0].event.eventPoasInRange.poasInRange = [""];
          replayFile.events[0].event.eventOther = new AdvantEdgePlatformControllerRestApi.EventOther();
          replayFile.events[0].event.eventOther.event = "";

          instance.createReplayFile(name, replayFile, function(error, data, response) {
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
      describe('createReplayFileFromScenarioExec', function() {
        it('should call createReplayFileFromScenarioExec successfully', function(done) {
          // TODO: uncomment, update parameter values for createReplayFileFromScenarioExec call
          /*
          var name = "name_example";
          var scenarioName = new AdvantEdgePlatformControllerRestApi.ScenarioName();

          instance.createReplayFileFromScenarioExec(name, scenarioName, function(error, data, response) {
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
      describe('deleteReplayFile', function() {
        it('should call deleteReplayFile successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteReplayFile call
          /*
          var name = "name_example";

          instance.deleteReplayFile(name, function(error, data, response) {
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
      describe('deleteReplayFileList', function() {
        it('should call deleteReplayFileList successfully', function(done) {
          // TODO: uncomment deleteReplayFileList call
          /*

          instance.deleteReplayFileList(function(error, data, response) {
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
      describe('getReplayFile', function() {
        it('should call getReplayFile successfully', function(done) {
          // TODO: uncomment, update parameter values for getReplayFile call and complete the assertions
          /*
          var name = "name_example";

          instance.getReplayFile(name, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.Replay);
            {
              let dataCtr = data.events;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.ReplayEvent);
                expect(data.index).to.be.a('number');
                expect(data.index).to.be(0);
                expect(data.time).to.be.a('number');
                expect(data.time).to.be(0);
                expect(data.event).to.be.a(AdvantEdgePlatformControllerRestApi.Event);
                      expect(data.event.name).to.be.a('string');
                  expect(data.event.name).to.be("");
                  expect(data.event.type).to.be.a('string');
                  expect(data.event.type).to.be("NETWORK-CHARACTERISTICS-UPDATE");
                  expect(data.event.eventNetworkCharacteristicsUpdate).to.be.a(AdvantEdgePlatformControllerRestApi.EventNetworkCharacteristicsUpdate);
                        expect(data.event.eventNetworkCharacteristicsUpdate.elementName).to.be.a('string');
                    expect(data.event.eventNetworkCharacteristicsUpdate.elementName).to.be("");
                    expect(data.event.eventNetworkCharacteristicsUpdate.elementType).to.be.a('string');
                    expect(data.event.eventNetworkCharacteristicsUpdate.elementType).to.be("SCENARIO");
                    expect(data.event.eventNetworkCharacteristicsUpdate.latency).to.be.a('number');
                    expect(data.event.eventNetworkCharacteristicsUpdate.latency).to.be(0);
                    expect(data.event.eventNetworkCharacteristicsUpdate.latencyVariation).to.be.a('number');
                    expect(data.event.eventNetworkCharacteristicsUpdate.latencyVariation).to.be(0);
                    expect(data.event.eventNetworkCharacteristicsUpdate.throughput).to.be.a('number');
                    expect(data.event.eventNetworkCharacteristicsUpdate.throughput).to.be(0);
                    expect(data.event.eventNetworkCharacteristicsUpdate.packetLoss).to.be.a('number');
                    expect(data.event.eventNetworkCharacteristicsUpdate.packetLoss).to.be(0.0);
                  expect(data.event.eventMobility).to.be.a(AdvantEdgePlatformControllerRestApi.EventMobility);
                        expect(data.event.eventMobility.elementName).to.be.a('string');
                    expect(data.event.eventMobility.elementName).to.be("");
                    expect(data.event.eventMobility.dest).to.be.a('string');
                    expect(data.event.eventMobility.dest).to.be("");
                  expect(data.event.eventPoasInRange).to.be.a(AdvantEdgePlatformControllerRestApi.EventPoasInRange);
                        expect(data.event.eventPoasInRange.ue).to.be.a('string');
                    expect(data.event.eventPoasInRange.ue).to.be("");
                    {
                      let dataCtr = data.event.eventPoasInRange.poasInRange;
                      expect(dataCtr).to.be.an(Array);
                      expect(dataCtr).to.not.be.empty();
                      for (let p in dataCtr) {
                        let data = dataCtr[p];
                        expect(data).to.be.a('string');
                        expect(data).to.be("");
                      }
                    }
                  expect(data.event.eventOther).to.be.a(AdvantEdgePlatformControllerRestApi.EventOther);
                        expect(data.event.eventOther.event).to.be.a('string');
                    expect(data.event.eventOther.event).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getReplayFileList', function() {
        it('should call getReplayFileList successfully', function(done) {
          // TODO: uncomment getReplayFileList call and complete the assertions
          /*

          instance.getReplayFileList(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(AdvantEdgePlatformControllerRestApi.ReplayFileList);
            {
              let dataCtr = data.replayFiles;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('loopReplay', function() {
        it('should call loopReplay successfully', function(done) {
          // TODO: uncomment, update parameter values for loopReplay call
          /*
          var name = "name_example";

          instance.loopReplay(name, function(error, data, response) {
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
      describe('playReplayFile', function() {
        it('should call playReplayFile successfully', function(done) {
          // TODO: uncomment, update parameter values for playReplayFile call
          /*
          var name = "name_example";

          instance.playReplayFile(name, function(error, data, response) {
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
      describe('stopReplayFile', function() {
        it('should call stopReplayFile successfully', function(done) {
          // TODO: uncomment, update parameter values for stopReplayFile call
          /*
          var name = "name_example";

          instance.stopReplayFile(name, function(error, data, response) {
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
