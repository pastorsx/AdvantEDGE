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

import { connect } from 'react-redux';
import React, { Component }  from 'react';
import { Grid, GridCell, GridInner } from '@rmwc/grid';
import { TextField } from '@rmwc/textfield';
import { Checkbox } from '@rmwc/checkbox';
import { Elevation } from '@rmwc/elevation';

import {
  uiSetAutomaticRefresh,
  uiChangeRefreshInterval,
  uiChangeDevMode,
  PAGE_SETTINGS
} from '../../state/ui';

import {
  SET_EXEC_REFRESH_CHECKBOX,
  SET_EXEC_REFRESH_INT,
  SET_DEV_MODE_CHECKBOX
} from '../../meep-constants';

class SettingsPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  setAutomaticRefresh(interval) {
    this.props.setAutomaticRefresh(interval);
  }

  validateInterval(interval)  {
    if (interval < 500 || 60000 < interval) {
      return false;
    }
    return true;
  }

  intervalChanged(val) {
    if (!this.validateInterval(val)) {
      this.props.changeRefreshInterval(val);
      this.props.stopRefresh();
      this.setState({error: true});
    } else {
      this.props.changeRefreshInterval(val);
      this.props.startRefresh();
      this.setState({error: false});
    }
  }

  handleCheckboxChange(e) {
    if (e.target.checked) {
      if (this.validateInterval(this.props.refreshInterval)) {
        this.props.startRefresh();
      } else {
        this.props.stopRefresh();
      }
    }
  }

  styles() {
    var styles = {
      interval: {

      },
      errorText: {
        display: 'none'
      },
      errorGridCell: {
        marginTop: -15,
        marginLeft: 25,
        paddingBottom: 10
      }
    };

    if (this.state.error) {
      delete styles.errorText.display;
      styles.errorText.fontSize = 14;
      styles.errorText.color = 'rgb(176, 0, 32)';
    }

    return styles;
  }

  render() {

    if (this.props.page !== PAGE_SETTINGS) {
      return null;
    }

    return (
      <div style={{width: '100%'}}>
        <Grid style={{width: '100%'}}>
          <GridInner>
            <GridCell span={12} style={styles.inner}>

              <Elevation className="component-style" z={2} style={{marginBottom: 10}}>
                <Grid>
                  <GridCell span={12} style={{paddingLeft: 10, paddingTop: 10}}>
                    <div>
                      <span className="mdc-typography--headline6">Execution: </span>
                    </div>
                  </GridCell>
                </Grid>
                <Grid span={12}>
                  <GridCell span={2}>
                    <div style={{marginTop: 20}}>
                      <Checkbox
                        checked={this.props.automaticRefresh}
                        onChange={e => {
                          this.props.setAutomaticRefresh(e.target.checked);}
                        }
                        data-cy={SET_EXEC_REFRESH_CHECKBOX}>
                          Automatic refresh:
                      </Checkbox>
                    </div>
                  </GridCell>
                  <GridCell span={2}>
                    <TextField outlined style={this.styles().interval}
                      label="Interval (ms)"
                      onChange={(e) => this.intervalChanged(e.target.value)}
                      value={this.props.refreshInterval}
                      disabled={!this.props.automaticRefresh}
                      data-cy={SET_EXEC_REFRESH_INT}
                    />
                  </GridCell>
                  <GridCell span={8}>
                  </GridCell>
                </Grid>

                <Grid>
                  <GridCell span={2}>
                  </GridCell>
                  <GridCell span={2} style={this.styles().errorGridCell}>
                    <p style={this.styles().errorText}>
                      500 &lt; value &lt; 60000
                    </p>
                  </GridCell>
                  <GridCell span={8}>
                  </GridCell>
                </Grid>
              </Elevation>

              <Elevation className="component-style" z={2}>
                <Grid>
                  <GridCell span={12} style={{paddingLeft: 10, paddingTop: 10, marginBottom: -20}}>
                    <div>
                      <span className="mdc-typography--headline6">Development: </span>
                    </div>
                  </GridCell>
                </Grid>
                <Grid span={12} style={{marginTop: 10}}>
                  <GridCell span={4}>
                    <div style={{paddingTop: 20, paddingBottom: 20}}>
                      <Checkbox
                        checked={this.props.devMode}
                        onChange={e => this.props.changeDevMode(e.target.checked)}
                        data-cy={SET_DEV_MODE_CHECKBOX}
                      >
                        Development mode
                      </Checkbox>
                    </div>
                  </GridCell>
                  <GridCell span={8}>
                  </GridCell>
                </Grid>
              </Elevation>

            </GridCell>
          </GridInner>
        </Grid>
      </div>
    );
  }
}

const styles = {
  headlineGrid: {
    marginBottom: 10
  },
  headline: {
    padding: 10,
    marginBotton: 25
  },
  inner: {
    height: '100%'
  },
  page: {
    height: 1500,
    marginBottom: 10
  },
  cfgTable: {
    marginTop: 20,
    padding: 10
  }
};

const mapStateToProps = state => {
  return {
    automaticRefresh: state.ui.automaticRefresh,
    refreshInterval: state.ui.refreshInterval,
    devMode: state.ui.devMode,
    page: state.ui.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAutomaticRefresh: (val) => dispatch(uiSetAutomaticRefresh(val)),
    changeRefreshInterval: (val) => dispatch(uiChangeRefreshInterval(val)),
    changeDevMode: (mode) => dispatch(uiChangeDevMode(mode))
  };
};

const ConnectedSettingsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsPageContainer);

export default ConnectedSettingsPageContainer;
