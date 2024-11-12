// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Base from '../base';

export default class TriangleBlur extends Component {
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string
  };

  static defaultProps = {
    height: '16px',
    viewBox: '0 0 16 16',
    predefinedClassName: 'data-ex-icons-triangle-blur'
  };

  render() {
    return (
      <Base {...this.props}>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_129_11271)">
            <path d="M9.81261 2.05281L9.51117 2.28574L9.21508 2.04604C9.28836 1.95552 9.39902 1.90349 9.51548 1.90481C9.63194 1.90613 9.7414 1.96065 9.81261 2.05281Z" />
            <path d="M9.90479 11.8095C10.7464 11.8095 11.4286 11.1273 11.4286 10.2857H12.1905C12.1905 11.5481 11.1672 12.5715 9.90479 12.5715V11.8095Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.31629 10.2117C5.41417 11.391 5.85028 12.3392 6.53097 13.0156C7.30635 13.7861 8.36665 14.1714 9.51117 14.1714C11.8515 14.1714 13.727 12.3411 13.727 9.69573C13.727 9.00131 13.4598 8.17203 13.095 7.35087C12.7257 6.51951 12.2366 5.65342 11.7524 4.87233C11.2675 4.09001 10.7832 3.38606 10.4204 2.87804C10.2389 2.62384 10.0875 2.41824 9.98124 2.27589C9.9281 2.2047 9.88623 2.1493 9.85751 2.11152C9.84314 2.09262 9.83206 2.07813 9.8245 2.06827L9.81583 2.05698L9.8129 2.05317C9.81284 2.0531 9.81261 2.05281 9.51117 2.28574C9.21508 2.04604 9.21514 2.04597 9.21508 2.04604L9.21178 2.05013L9.20302 2.06103C9.1954 2.07052 9.18427 2.08445 9.16984 2.1026C9.141 2.1389 9.09901 2.19211 9.04574 2.26056C8.93923 2.39743 8.78754 2.59539 8.60573 2.8411C8.2424 3.33212 7.75734 4.01576 7.2716 4.78506C7.03523 5.15943 6.79766 5.5557 6.57337 5.96129H3.64893V6.72319H6.17508C6.0877 6.90131 6.00448 7.07971 5.92658 7.25738C5.86124 7.4064 5.79914 7.55602 5.7412 7.70552H2.77681V8.46742H5.48518C5.391 8.80484 5.32702 9.13517 5.30439 9.44975H1.90479V10.2117H5.31629ZM6.08112 10.2117C6.17573 11.2042 6.54449 11.955 7.068 12.4751C7.68059 13.0838 8.53773 13.4095 9.51117 13.4095C11.4067 13.4095 12.9651 11.9447 12.9651 9.69573C12.9651 9.16656 12.753 8.4578 12.3987 7.66016C12.049 6.87272 11.5794 6.03926 11.1048 5.27376C10.6311 4.50947 10.1566 3.81977 9.80035 3.32079C9.68897 3.16481 9.58927 3.02765 9.50489 2.91287C9.42245 3.02077 9.32579 3.14889 9.2182 3.29429C8.86249 3.77502 8.38882 4.44273 7.91584 5.19183C7.75831 5.44132 7.60134 5.69907 7.44915 5.96129H10.5061V6.72319H7.02889C6.88272 7.00381 6.74625 7.28533 6.62436 7.56332C6.60348 7.61095 6.58308 7.65836 6.56318 7.70552H9.63395V8.46742H6.28002C6.16879 8.82013 6.09558 9.15066 6.06871 9.44975H8.76193V10.2117H6.08112Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_129_11271">
              <rect width="16" height="16" />
            </clipPath>
          </defs>
        </svg>
      </Base>
    );
  }
}
