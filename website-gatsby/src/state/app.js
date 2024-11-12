// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {handleActions} from 'redux-actions';

const DEFAULT_APP_STATE = {};

export default handleActions(
  {
    INIT: (state, action) => ({...state, ready: true})
  },
  DEFAULT_APP_STATE
);
