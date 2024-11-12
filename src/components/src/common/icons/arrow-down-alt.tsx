// SPDX-License-Identifier: MIT
// Copyright contributors to the indranildeveloper-kepler.gl project

import React, {Component} from 'react';
import Base, {BaseProps} from './base';

export default class ArrowDownAlt extends Component<Partial<BaseProps>> {
  static defaultProps = {
    height: '16px',
    predefinedClassName: 'data-ex-icons-arrow_down_alt'
  };

  render() {
    return (
      <Base {...this.props}>
        <path d="M30.9874294,23.8822323 L21.4022168,35.7397323 L21.4022168,3.80585729 C21.4022168,2.11829479 20.0731075,0.750419792 18.4333707,0.750419792 C16.7936338,0.750419792 15.4645245,2.11829479 15.4645245,3.80585729 L15.4645245,35.7397323 L5.87742937,23.8822323 C4.82882614,22.5802323 2.95282411,22.4077948 1.69713585,23.4869823 C0.433917229,24.5661698 0.26260144,26.4920448 1.31308727,27.789201 L16.1516703,46.1479823 C16.7155063,46.846451 17.552318,47.2504198 18.4333707,47.2504198 C19.3144233,47.2504198 20.151235,46.846451 20.7150711,46.1479823 L35.556478,27.789201 C36.6041399,26.4920448 36.4309415,24.5661698 35.1724294,23.4869823 C33.9007391,22.4077948 32.0407391,22.5802323 30.9874294,23.8822323 Z" />
      </Base>
    );
  }
}
