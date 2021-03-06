/*
 * Copyright (c) 2019  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// MEEP types
export const TYPE_CFG = 'CFG';
export const TYPE_EXEC = 'EXEC';

// MEEP IDs
export const MEEP_TAB_CFG = 'meep-tab-cfg';
export const MEEP_TAB_EXEC = 'meep-tab-exec';
export const MEEP_TAB_MON = 'meep-tab-mon';
export const MEEP_TAB_SET = 'meep-tab-set';
export const MEEP_LBL_SCENARIO_NAME = 'meep-lbl-scenario-name';
export const MEEP_BTN_CANCEL = 'meep-btn-cancel';
export const MEEP_BTN_APPLY = 'meep-btn-apply';

// Dialog IDs
export const MEEP_DLG_NEW_SCENARIO = 'meep-dlg-new-scenario';
export const MEEP_DLG_NEW_SCENARIO_NAME = 'meep-dlg-new-scenario-name';
export const MEEP_DLG_SAVE_SCENARIO = 'meep-dlg-save-scenario';
export const MEEP_DLG_OPEN_SCENARIO = 'meep-dlg-open-scenario';
export const MEEP_DLG_OPEN_SCENARIO_SELECT = 'meep-dlg-open-scenario-select';
export const MEEP_DLG_DEL_SCENARIO = 'meep-dlg-del-scenario';
export const MEEP_DLG_INVALID_SCENARIO = 'meep-dlg-invalid-scenario';
export const MEEP_DLG_EXPORT_SCENARIO = 'meep-dlg-export-scenario';
export const MEEP_DLG_DEPLOY_SCENARIO = 'meep-dlg-deploy-scenario';
export const MEEP_DLG_DEPLOY_SCENARIO_SELECT = 'meep-dlg-deploy-scenario-select';
export const MEEP_DLG_TERMINATE_SCENARIO = 'meep-dlg-terminate-scenario';
export const MEEP_DLG_CONFIRM = 'meep-dlg-confirm';

// Configuration page states
export const CFG_STATE_IDLE = 'IDLE';
export const CFG_STATE_NEW = 'NEW';
export const CFG_STATE_LOADED = 'LOADED';

// Configuration page IDs
export const CFG_VIS = 'cfg-vis';

export const CFG_BTN_NEW_SCENARIO = 'cfg-btn-new-scenario';
export const CFG_BTN_OPEN_SCENARIO = 'cfg-btn-open-scenario';
export const CFG_BTN_SAVE_SCENARIO = 'cfg-btn-save-scenario';
export const CFG_BTN_DEL_SCENARIO = 'cfg-btn-del-scenario';
export const CFG_BTN_IMP_SCENARIO = 'cfg-btn-imp-scenario';
export const CFG_BTN_EXP_SCENARIO = 'cfg-btn-exp-scenario';
export const CFG_BTN_NEW_ELEM = 'cfg-btn-new-elem';
export const CFG_BTN_DEL_ELEM = 'cfg-btn-del-elem';
export const CFG_BTN_SAVE_ELEM = 'cfg-btn-save-elem';

export const CFG_ELEM_TYPE = 'cfg-elem-type';
export const CFG_ELEM_NAME = 'cfg-elem-name';
export const CFG_ELEM_PARENT = 'cfg-elem-parent';
export const CFG_ELEM_IMG = 'cfg-elem-img';
export const CFG_ELEM_GROUP = 'cfg-elem-group';
export const CFG_ELEM_ENV = 'cfg-elem-env';
export const CFG_ELEM_PORT = 'cfg-elem-port';
export const CFG_ELEM_EXT_PORT = 'cfg-elem-ext-port';
export const CFG_ELEM_PROT = 'cfg-elem-prot';
export const CFG_ELEM_GPU_COUNT = 'cfg-elem-gpu-count';
export const CFG_ELEM_GPU_TYPE = 'cfg-elem-gpu-type';
export const CFG_ELEM_CMD = 'cfg-elem-cmd';
export const CFG_ELEM_ARGS = 'cfg-elem-args';
export const CFG_ELEM_EXTERNAL_CHECK = 'cfg-elem-external-check';
export const CFG_ELEM_CHART_CHECK = 'cfg-elem-chart-check';
export const CFG_ELEM_CHART_LOC = 'cfg-elem-chart-loc';
export const CFG_ELEM_CHART_GROUP = 'cfg-elem-chart-group';
export const CFG_ELEM_CHART_ALT_VAL = 'cfg-elem-chart-alt-val';
export const CFG_ELEM_LATENCY = 'cfg-elem-latency';
export const CFG_ELEM_LATENCY_VAR = 'cfg-elem-latency-var';
export const CFG_ELEM_PKT_LOSS = 'cfg-elem-pkt-loss';
export const CFG_ELEM_THROUGHPUT = 'cfg-elem-throughput';
export const CFG_ELEM_INGRESS_SVC_MAP = 'cfg-elem-ingress-svc-map';
export const CFG_ELEM_EGRESS_SVC_MAP = 'cfg-elem-egress-svc-map';

// Execution page states
export const EXEC_STATE_IDLE = 'IDLE';
export const EXEC_STATE_DEPLOYED = 'DEPLOYED';

// Execution page IDs
export const EXEC_BTN_DEPLOY = 'exec-btn-deploy';
export const EXEC_BTN_SAVE_SCENARIO = 'exec-btn-save-scenario';
export const EXEC_BTN_TERMINATE = 'exec-btn-terminate';
export const EXEC_BTN_REFRESH = 'exec-btn-refresh';
export const EXEC_BTN_EVENT = 'exec-btn-event';

export const EXEC_EVT_TYPE = 'exec-evt-type';
export const EXEC_EVT_MOB_TARGET = 'exec-evt-mob-target';
export const EXEC_EVT_MOB_DEST = 'exec-evt-mob-dest';
export const EXEC_EVT_NC_TYPE = 'exec-evt-nc-type';
export const EXEC_EVT_NC_NAME = 'exec-evt-nc-name';

// Trivia
export const NO_SCENARIO_NAME = 'NO_SCENARIO_NAME_12Q(*&HGHG___--9098';

export const DOMAIN_TYPE_STR = 'OPERATOR';
export const PUBLIC_DOMAIN_TYPE_STR = 'PUBLIC';
export const ZONE_TYPE_STR = 'ZONE';
export const COMMON_ZONE_TYPE_STR = 'COMMON';
export const NL_TYPE_STR = 'POA';
export const DEFAULT_NL_TYPE_STR = 'DEFAULT';
export const UE_TYPE_STR = 'UE';
export const FOG_TYPE_STR = 'FOG';
export const EDGE_TYPE_STR = 'EDGE';
export const CN_TYPE_STR = 'CN';
export const DC_TYPE_STR = 'DC';
export const MEC_SVC_TYPE_STR = 'MEC-SVC';
export const UE_APP_TYPE_STR = 'UE-APP';
export const EDGE_APP_TYPE_STR = 'EDGE-APP';
export const CLOUD_APP_TYPE_STR = 'CLOUD-APP';

export const ELEMENT_TYPE_SCENARIO = 'SCENARIO';
export const ELEMENT_TYPE_OPERATOR = 'OPERATOR';
export const ELEMENT_TYPE_ZONE = 'ZONE';
export const ELEMENT_TYPE_POA = 'POA';
export const ELEMENT_TYPE_DC = 'DISTANT CLOUD';
export const ELEMENT_TYPE_CN = 'CORE NETWORK';
export const ELEMENT_TYPE_EDGE = 'EDGE';
export const ELEMENT_TYPE_FOG = 'FOG';
export const ELEMENT_TYPE_UE = 'UE';
export const ELEMENT_TYPE_MECSVC = 'MEC SERVICE';
export const ELEMENT_TYPE_UE_APP = 'UE APPLICATION';
export const ELEMENT_TYPE_EDGE_APP = 'EDGE APPLICATION';
export const ELEMENT_TYPE_CLOUD_APP = 'CLOUD APPLICATION';

// Default latencies per physical location type
export const DEFAULT_LATENCY_INTER_DOMAIN = 50;
export const DEFAULT_LATENCY_JITTER_INTER_DOMAIN = 10;
export const DEFAULT_THROUGHPUT_INTER_DOMAIN = 1000;
export const DEFAULT_PACKET_LOSS_INTER_DOMAIN = 0;
export const DEFAULT_LATENCY_INTER_ZONE = 6;
export const DEFAULT_LATENCY_JITTER_INTER_ZONE = 2;
export const DEFAULT_THROUGHPUT_INTER_ZONE = 1000;
export const DEFAULT_PACKET_LOSS_INTER_ZONE = 0;
export const DEFAULT_LATENCY_INTER_EDGE = 3;
export const DEFAULT_LATENCY_JITTER_INTER_EDGE = 1;
export const DEFAULT_THROUGHPUT_INTER_EDGE = 1000;
export const DEFAULT_PACKET_LOSS_INTER_EDGE = 0;
export const DEFAULT_LATENCY_INTER_FOG = 2;
export const DEFAULT_LATENCY_JITTER_INTER_FOG = 1;
export const DEFAULT_THROUGHPUT_INTER_FOG = 1000;
export const DEFAULT_PACKET_LOSS_INTER_FOG = 0;
export const DEFAULT_LATENCY_EDGE_FOG = 5;
export const DEFAULT_LATENCY_JITTER_EDGE_FOG = 1;
export const DEFAULT_THROUGHPUT_EDGE_FOG = 1000;
export const DEFAULT_PACKET_LOSS_EDGE_FOG = 0;
export const DEFAULT_LATENCY_TERMINAL_LINK = 1;
export const DEFAULT_LATENCY_JITTER_TERMINAL_LINK = 1;
export const DEFAULT_THROUGHPUT_TERMINAL_LINK = 1000;
export const DEFAULT_PACKET_LOSS_TERMINAL_LINK = 1;
export const DEFAULT_LATENCY_DC = 0;

// GPU Types
export const GPU_TYPE_NVIDIA = 'NVIDIA';

// Monitoring Page IDs
export const MON_DASHBOARD_SELECT = 'mon-dashboard-select';
export const MON_DASHBOARD_IFRAME = 'mon-dashboard-iframe';

// Settings Page IDs
export const SET_EXEC_REFRESH_CHECKBOX = 'set-exec-refresh-checkbox';
export const SET_EXEC_REFRESH_INT = 'set-exec-refresh-int';
export const SET_DEV_MODE_CHECKBOX = 'set-dev-mode-checkbox';

// Logical Scenario types
export const TYPE_SCENARIO = 0;
export const TYPE_DOMAIN = 1;
export const TYPE_ZONE = 2;
export const TYPE_NET_LOC = 3;
export const TYPE_PHY_LOC = 4;
export const TYPE_PROCESS = 5;

// NC Group Prefixes
export const PREFIX_INT_DOM = 'Inter-Domain';
export const PREFIX_INT_ZONE = 'Inter-Zone';
export const PREFIX_INT_EDGE = 'Inter-Edge';
export const PREFIX_INT_FOG = 'Inter-Fog';
export const PREFIX_EDGE_FOG = 'Edge-Fog';
export const PREFIX_TERM_LINK = 'Terminal Link';

export const id = (label) => {
  return '#' + label;
};
