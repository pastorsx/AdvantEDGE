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

import { updateObject } from '../../util/object-util';

// CHANGE_VIS
const CFG_CHANGE_VIS = 'CFG_CHANGE_VIS';
function cfgChangeVis(vis) {
  return {
    type: CFG_CHANGE_VIS,
    payload: vis
  };
}

// CHANGE_VIS
const CFG_CHANGE_VIS_DATA = 'CFG_CHANGE_VIS_DATA';
function cfgChangeVisData(data) {
  return {
    type: CFG_CHANGE_VIS_DATA,
    payload: data
  };
}

export {
  // Action creators
  cfgChangeVis,
  cfgChangeVisData,

  CFG_CHANGE_VIS
};

const initialState = {
  network: {},
  options: {},
  data: {
    nodes: [],
    edges: []
  },
  showConfig: false
};

export function cfgVisReducer(state = initialState, action) {
  switch (action.type) {
  case CFG_CHANGE_VIS:
    return action.payload;
  case CFG_CHANGE_VIS_DATA:
    return updateObject(state, {data: action.payload});
  default:
    return state;
  }
}
