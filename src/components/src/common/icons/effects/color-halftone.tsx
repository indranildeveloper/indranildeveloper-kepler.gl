// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Base from '../base';

export default class ColorHalftone extends Component {
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string
  };

  static defaultProps = {
    height: '16px',
    viewBox: '0 0 16 16',
    predefinedClassName: 'data-ex-icons-color-halftone'
  };

  render() {
    return (
      <Base {...this.props}>
        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_129_11269)">
            <path d="M4.03812 5.10475C4.03812 5.69386 3.56056 6.17142 2.97145 6.17142C2.38235 6.17142 1.90479 5.69386 1.90479 5.10475C1.90479 4.51565 2.38235 4.03809 2.97145 4.03809C3.56056 4.03809 4.03812 4.51565 4.03812 5.10475Z" />
            <path
              opacity="0.5"
              d="M2.81902 11.0476C2.81902 11.3843 2.54613 11.6572 2.2095 11.6572C1.87287 11.6572 1.59998 11.3843 1.59998 11.0476C1.59998 10.711 1.87287 10.4381 2.2095 10.4381C2.54613 10.4381 2.81902 10.711 2.81902 11.0476Z"
            />
            <path d="M5.86668 1.90484C5.86668 2.5781 5.3209 3.12389 4.64764 3.12389C3.97438 3.12389 3.42859 2.5781 3.42859 1.90484C3.42859 1.23158 3.97438 0.685791 4.64764 0.685791C5.3209 0.685791 5.86668 1.23158 5.86668 1.90484Z" />
            <path d="M2.51427 1.90484C2.51427 2.5781 1.96848 3.12389 1.29522 3.12389C0.621958 3.12389 0.0761719 2.5781 0.0761719 1.90484C0.0761719 1.23158 0.621958 0.685791 1.29522 0.685791C1.96848 0.685791 2.51427 1.23158 2.51427 1.90484Z" />
            <path d="M4.95235 8.30479C4.95235 8.80973 4.54301 9.21907 4.03807 9.21907C3.53312 9.21907 3.12378 8.80973 3.12378 8.30479C3.12378 7.79984 3.53312 7.3905 4.03807 7.3905C4.54301 7.3905 4.95235 7.79984 4.95235 8.30479Z" />
            <path
              opacity="0.3"
              d="M4.34287 13.3334C4.34287 13.5858 4.1382 13.7905 3.88573 13.7905C3.63326 13.7905 3.42859 13.5858 3.42859 13.3334C3.42859 13.0809 3.63326 12.8762 3.88573 12.8762C4.1382 12.8762 4.34287 13.0809 4.34287 13.3334Z"
            />
            <path d="M7.39054 5.10475C7.39054 5.69386 6.91297 6.17142 6.32387 6.17142C5.73477 6.17142 5.2572 5.69386 5.2572 5.10475C5.2572 4.51565 5.73477 4.03809 6.32387 4.03809C6.91297 4.03809 7.39054 4.51565 7.39054 5.10475Z" />
            <path
              opacity="0.5"
              d="M6.17144 11.0476C6.17144 11.3843 5.89855 11.6572 5.56192 11.6572C5.22529 11.6572 4.95239 11.3843 4.95239 11.0476C4.95239 10.711 5.22529 10.4381 5.56192 10.4381C5.89855 10.4381 6.17144 10.711 6.17144 11.0476Z"
            />
            <path d="M9.2191 1.90484C9.2191 2.5781 8.67332 3.12389 8.00005 3.12389C7.32679 3.12389 6.78101 2.5781 6.78101 1.90484C6.78101 1.23158 7.32679 0.685791 8.00005 0.685791C8.67332 0.685791 9.2191 1.23158 9.2191 1.90484Z" />
            <path d="M8.30477 8.30479C8.30477 8.80973 7.89543 9.21907 7.39048 9.21907C6.88554 9.21907 6.4762 8.80973 6.4762 8.30479C6.4762 7.79984 6.88554 7.3905 7.39048 7.3905C7.89543 7.3905 8.30477 7.79984 8.30477 8.30479Z" />
            <path
              opacity="0.3"
              d="M7.69529 13.3334C7.69529 13.5858 7.49062 13.7905 7.23815 13.7905C6.98568 13.7905 6.78101 13.5858 6.78101 13.3334C6.78101 13.0809 6.98568 12.8762 7.23815 12.8762C7.49062 12.8762 7.69529 13.0809 7.69529 13.3334Z"
            />
            <path d="M10.7428 5.10475C10.7428 5.69386 10.2653 6.17142 9.67616 6.17142C9.08706 6.17142 8.6095 5.69386 8.6095 5.10475C8.6095 4.51565 9.08706 4.03809 9.67616 4.03809C10.2653 4.03809 10.7428 4.51565 10.7428 5.10475Z" />
            <path
              opacity="0.5"
              d="M9.52386 11.0476C9.52386 11.3843 9.25096 11.6572 8.91433 11.6572C8.5777 11.6572 8.30481 11.3843 8.30481 11.0476C8.30481 10.711 8.5777 10.4381 8.91433 10.4381C9.25096 10.4381 9.52386 10.711 9.52386 11.0476Z"
            />
            <path d="M12.5714 1.90484C12.5714 2.5781 12.0256 3.12389 11.3523 3.12389C10.6791 3.12389 10.1333 2.5781 10.1333 1.90484C10.1333 1.23158 10.6791 0.685791 11.3523 0.685791C12.0256 0.685791 12.5714 1.23158 12.5714 1.90484Z" />
            <path d="M11.6572 8.30479C11.6572 8.80973 11.2478 9.21907 10.7429 9.21907C10.238 9.21907 9.82861 8.80973 9.82861 8.30479C9.82861 7.79984 10.238 7.3905 10.7429 7.3905C11.2478 7.3905 11.6572 7.79984 11.6572 8.30479Z" />
            <path
              opacity="0.3"
              d="M11.0476 13.3334C11.0476 13.5858 10.8429 13.7905 10.5904 13.7905C10.338 13.7905 10.1333 13.5858 10.1333 13.3334C10.1333 13.0809 10.338 12.8762 10.5904 12.8762C10.8429 12.8762 11.0476 13.0809 11.0476 13.3334Z"
            />
            <path d="M14.0952 5.10475C14.0952 5.69386 13.6177 6.17142 13.0286 6.17142C12.4395 6.17142 11.9619 5.69386 11.9619 5.10475C11.9619 4.51565 12.4395 4.03809 13.0286 4.03809C13.6177 4.03809 14.0952 4.51565 14.0952 5.10475Z" />
            <path
              opacity="0.5"
              d="M12.8763 11.0476C12.8763 11.3843 12.6034 11.6572 12.2668 11.6572C11.9301 11.6572 11.6572 11.3843 11.6572 11.0476C11.6572 10.711 11.9301 10.4381 12.2668 10.4381C12.6034 10.4381 12.8763 10.711 12.8763 11.0476Z"
            />
            <path d="M15.9238 1.90484C15.9238 2.5781 15.378 3.12389 14.7048 3.12389C14.0315 3.12389 13.4857 2.5781 13.4857 1.90484C13.4857 1.23158 14.0315 0.685791 14.7048 0.685791C15.378 0.685791 15.9238 1.23158 15.9238 1.90484Z" />
            <path d="M15.0096 8.30479C15.0096 8.80973 14.6003 9.21907 14.0953 9.21907C13.5904 9.21907 13.181 8.80973 13.181 8.30479C13.181 7.79984 13.5904 7.3905 14.0953 7.3905C14.6003 7.3905 15.0096 7.79984 15.0096 8.30479Z" />
            <path
              opacity="0.3"
              d="M14.4 13.3334C14.4 13.5858 14.1953 13.7905 13.9429 13.7905C13.6904 13.7905 13.4857 13.5858 13.4857 13.3334C13.4857 13.0809 13.6904 12.8762 13.9429 12.8762C14.1953 12.8762 14.4 13.0809 14.4 13.3334Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_129_11269">
              <rect
                width="12.1905"
                height="12.1905"
                fill="white"
                transform="translate(1.90479 1.90479)"
              />
            </clipPath>
          </defs>
        </svg>
      </Base>
    );
  }
}
