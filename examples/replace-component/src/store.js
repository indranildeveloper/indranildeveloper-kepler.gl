// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer, {enhanceReduxMiddleware} from '@indranil-kepler.gl/reducers';
import appReducer from './app-reducer';

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  uiState: {
    // hide side panel when mounted
    activeSidePanel: null,
    // hide all modals whtn mounted
    currentModal: null
  }
});

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

export default createStore(reducers, {}, compose(...enhancers));
