﻿// Import CSS 
import 'material-design-icons/iconfont/material-icons.css';
import 'ol/ol.css';
import '../css/demo-svc.scss';

// Import module dependencies
import * as $ from 'jquery';
import 'material-design-icons';
import * as mdc from 'material-components-web';

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Toolbar from '@material-ui/core/Toolbar';

// Import JS dependencies
import * as demoSvcRestApiClient from '../../../demo-client/js/src/index.js';
import * as iperfTransitRestApiClient from '../../../iperf-proxy-client/js/src/index.js';

// Import images used in JS
import * as im1 from '../img/zone1-edge1-svc.jpg';
import * as im2 from '../img/zone1-fog1-svc.jpg';
import * as im3 from '../img/zone2-edge1-svc.jpg';
import * as im4 from '../img/azone1-edge1-svc.jpg';
import * as im5 from '../img/azone1-fog1-svc.jpg';
import * as im6 from '../img/azone2-edge1-svc.jpg';

// Constants
const PAGE_STATUS = 'page-status-link';
const PAGE_SETTINGS = 'page-settings-link';

const STATUS_OK = 'No Conflict';
const STATUS_RA = 'Active Resolution Advisory';

const DEFAULT_REFRESH_INTERVAL_MS = 1000;


// Variables
var drawer;
var refreshIntervalTextfield;
var refreshInterval = DEFAULT_REFRESH_INTERVAL_MS;
var refreshIntervalTimer;
var mapLayerSelect;
var mapLayers = [];
var map;
var targetedUeNameDialogTextfield;
var iperfBwDialogTextfield;


// MEEP Controller REST API JS client
var basepath = 'http://' + location.host + location.pathname + 'v1/';
console.log("basepath: " + basepath);

demoSvcRestApiClient.ApiClient.instance.basePath = basepath.replace(/\/+$/, '');
var ueStateApi = new demoSvcRestApiClient.UEStateApi();
var edgeInfoApi = new demoSvcRestApiClient.EdgeAppInfoApi();

//iperfTransitRestApiClient.ApiClient.instance.basePath = "http://iperf-transit-iperf-transit-server/v1";

var iperfBasepath = basepath;
iperfBasepath = iperfBasepath.replace(/\/+$/, '');
//find the path in the webbrowser to determine if its running in the cloud or edge
var subStr1 = iperfBasepath.split(":");
var subStr2 = subStr1[2].split("/");
var portApp = subStr2[0];
iperfBasepath = iperfBasepath.replace(portApp, "30220");
iperfTransitRestApiClient.ApiClient.instance.basePath = iperfBasepath;

var iperfInfoApi = new iperfTransitRestApiClient.IperfAppInfoApi();

/**
 * Callback function to receive the result of the edgeAppInfo operation.
 * @callback module:api/EdgeInfoApi~getEdgeInfoCallback
 * @param {String} error Error message, if any.
 * @param {module:model/EdgeInfo} data The data returned by the service call.
 * @param {String} response The complete HTTP response.
 */
function getEdgeInfoCb(error, data, response) {
    console.log("Received getEdgeInfo response");

    if (error != null) {
        console.log(error);
    } else {
        console.log(data);
        if (data != null) {
            updateSvcInfo(data);
        }
    }
}

function updateSvcInfo(data) {
    $('#svc-info-name').text(data.svc);
    $('#node-svc-info-name').text(data.name);
    $('#node-svc-info-ip').text(data.ip);
    var str = "img/" + data.name + ".jpg"
    $('#demo-svc-app-pic').attr('src', str);
}

function hideTrafficGenerator() {
    $('#iperf-bw-tf-div').hide();
    $('#start-demo-iperf-button').hide();
    $('#stop-demo-iperf-button').hide();
}

function showTrafficGenerator() {
    $('#iperf-bw-tf-div').show();
    $('#start-demo-iperf-button').show();
    $('#stop-demo-iperf-button').show();
}


/**
 * Callback function to receive the result of the getUeState operation.
 * @callback module:api/UeStateApi~getUeStateCallback
 * @param {String} error Error message, if any.
 * @param {module:model/UeState} data The data returned by the service call.
 * @param {String} response The complete HTTP response.
 */
function getUeStateCb(error, data, response) {
    console.log("Received getUeState response");

    if (error != null) {
        console.log(error);
    } else {
        console.log(data);
        if (data != null) {
            updateGameStats(data);
        }
    }
}

/**
 * Callback function to receive the result of the createUeState operation.
 * @callback module:api/UeStateApi~createUeStateCallback
 * @param {String} error Error message, if any.
 * @param {module:model/UeState} data The data returned by the service call.
 * @param {String} response The complete HTTP response.
 */
function createUeStateCb(error, data, response) {
    console.log("Received createUeState response");

    if (error != null) {
        console.log(error);
    } else {
        console.log("creation successful");
    }
}

function genTrafficCb(error, data, response) {
    console.log("Received genTraffic response");

    if (error != null) {
        console.log(error);
    } else {
        console.log("genTraffic successful");
    }
}

function initTrafficBwCb(error, data, response) {
    console.log("Received initTrafficBwInfo response");

    if (error != null) {
        console.log(error);
        iperfBwDialogTextfield.value = "";
    } else {
        console.log(data);
        if (data != null) {
           iperfBwDialogTextfield.value = data.trafficBw;
        } else {
           iperfBwDialogTextfield.value = "";
        }
    }
}

function demoIperfOnButtonCb(error, data, response) {
    console.log("Received iperf ON response");

    if (error != null) {
        console.log(error);
    } else {
        console.log("response successful");
    }
}
function demoIperfOffButtonCb(error, data, response) {
    console.log("Received iperf OFF response");

    if (error != null) {
        console.log(error);
    } else {
        console.log("response successful");
    }
}

function updateGameStats(data) {
    $('#demo-svc-info-duration').text(data.duration);
    showTrafficGenerator();
}

// Retrieve current scenario status
function refreshGameInfo() {
    console.log("Sending regular update request");
    edgeInfoApi.getEdgeInfo(getEdgeInfoCb);
    ueStateApi.getUeState(targetedUeNameDialogTextfield.value, getUeStateCb);
}

// Initialize UI
function initializeUI() {

    // Set service information
    $('#svc-info-name').text("N/A");
    $('#node-svc-info-name').text("N/A");
    $('#node-svc-info-ip').text("N/A");
    $('#poa-info-name').text("N/A");
    $('#demo-svc-info-duration').text("N/A");

    targetedUeNameDialogTextfield = new mdc.textField.MDCTextField(document.querySelector('#targeted-ue-name-tf-div'));
    //setting a default value for now
    targetedUeNameDialogTextfield.value = "ue2-ext";
    targetedUeNameDialogTextfield.valid = true;
    $('#targeted-ue-name-tf-div').hide();
    iperfBwDialogTextfield = new mdc.textField.MDCTextField(document.querySelector('#iperf-bw-tf-div'));
    iperfBwDialogTextfield.valid = true;

    ueStateApi.getUeState(targetedUeNameDialogTextfield.value, initTrafficBwCb);
    hideTrafficGenerator();

    // START COUNTER BUTTON
    $("#start-demo-svc-button").on("click", function () {
        console.log("start-demo-svc-button clicked");
        ueStateApi.createUeState(targetedUeNameDialogTextfield.value, createUeStateCb);
        showTrafficGenerator
    });

    // START TRAFFIC BUTTON
    $("#start-demo-iperf-button").on("click", function () {
        console.log("start-demo-iperf-button clicked");

	var ueState = new demoSvcRestApiClient.UeState();
	ueState['trafficBw'] = parseInt(iperfBwDialogTextfield.value);
	//we don't care about reporting other values
	ueStateApi.updateUeState(targetedUeNameDialogTextfield.value, ueState, genTrafficCb);

	var iperfInfo = new iperfTransitRestApiClient.IperfInfo();

	iperfInfo['name'] = targetedUeNameDialogTextfield.value;

	if (portApp != "31111") {
		iperfInfo.app = "31223"
	} else {
		iperfInfo.app = "31222"
	}
		
	iperfInfo.throughput  = iperfBwDialogTextfield.value;

        iperfInfoApi.handleIperfInfo(iperfInfo, demoIperfOnButtonCb);
    });
    // STOP TRAFFIC BUTTON
    $("#stop-demo-iperf-button").on("click", function () {
        console.log("stop-demo-iperf-button clicked");

        iperfBwDialogTextfield.value = ""

	var ueState = new demoSvcRestApiClient.UeState();
        ueState['trafficBw'] = 0;
	ueStateApi.updateUeState(targetedUeNameDialogTextfield.value, ueState, genTrafficCb);

	var iperfInfo = new iperfTransitRestApiClient.IperfInfo();

        iperfInfo['name'] = targetedUeNameDialogTextfield.value;

        if (portApp != "31111") {
                iperfInfo.app = "31223"
        } else {
                iperfInfo.app = "31222"
        }

        iperfInfo.throughput  = "0"

        iperfInfoApi.handleIperfInfo(iperfInfo, demoIperfOffButtonCb);
    });



    // Set Status page
    setMainContent(PAGE_STATUS);

    // Retrieve Deployed scenario status
    refreshGameInfo();

    // Set default Drone info refresh interval
    refreshIntervalTextfield.value = DEFAULT_REFRESH_INTERVAL_MS;
    startAutomaticRefresh();
}

// Set main page content
function setMainContent(targetId) {
    console.log("Setting main page content to: %s", targetId);
    $('.idcc-page').hide();
    if (targetId == PAGE_STATUS) {
        $('#page-status').show();
    } else if (targetId == PAGE_SETTINGS) {
        $('#page-settings').show();

        // Refresh form field values here to update UI
        refreshIntervalTextfield.value = refreshIntervalTextfield.value;
        mapLayerSelect.value = mapLayerSelect.value;
    }
}

// Start automatic visualization updates
function startAutomaticRefresh() {
    console.log("Starting drone information table automatic refresh");
    var value = refreshIntervalTextfield.value;
    if (isNaN(value) || value < 500 || value > 60000) {
        console.log("Invalid refresh interval: ", value);
        clearInterval(refreshIntervalTimer);
        refreshIntervalTextfield.valid = false;
    } else {
        console.log("Setting refresh interval: ", value);
        clearInterval(refreshIntervalTimer);
        refreshIntervalTimer = setInterval(refreshGameInfo, value);
        refreshIntervalTextfield.valid = true;
    }
}

// Stop automatic visualization updates
function stopAutomaticRefresh() {
    console.log("Stopping automatic refresh");
    clearInterval(refreshIntervalTimer);
}

// Update Map layer visualization
function setMapLayer(style) {
    console.log("Setting map style to: " + style);
    for (var i = 0; i < mapLayers.length; ++i) {
        if (mapLayers[i].type == 'TILE') {
            mapLayers[i].setVisible(MAP_STYLES[i] === style);
        }
    }
}


// Initialize variables and listeners when document ready
$(document).ready(function () {

    // Initialize variables
    drawer = new mdc.drawer.MDCPersistentDrawer(document.querySelector('#main-drawer'));
    refreshIntervalTextfield = new mdc.textField.MDCTextField(document.querySelector('#refresh-interval-tf-div'));
    mapLayerSelect = new mdc.select.MDCSelect(document.querySelector('#map-layer-select-div'));

    // Register event listeners
    $('.idcc-toolbar-menu').on('click', function () {
        drawer.open = !drawer.open;
    });

    const activatedClass = 'mdc-list-item--selected';
    $('.mdc-drawer__drawer').on('click', function (event) {
        var target = event.target;
        while (target && !$(target).hasClass('mdc-list-item')) {
            target = target.parentElement;
        }
        if (target) {
            $('.' + activatedClass).removeClass(activatedClass);
            $(event.target).addClass(activatedClass);
            setMainContent(target.id);
        }
    });

    $("#refresh-interval-tf").change(function () {
        startAutomaticRefresh();
    });

    $("#map-layer-select").change(function () {
        setMapLayer(this.value);
    });

    // Initialize UI
    initializeUI();
});

