// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import keplerGlReducer, {enhanceReduxMiddleware} from '@indranil-kepler.gl/reducers';

import appReducer from './app-reducer';
import window from 'global/window';

const reducers = combineReducers({
  keplerGl: keplerGlReducer,
  app: appReducer
});

const middlewares = enhanceReduxMiddleware([]);
const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, initialState, composeEnhancers(...enhancers));
