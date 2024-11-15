// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import window from 'global/window';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {enhanceReduxMiddleware} from '@indranil-kepler.gl/reducers';

import demoReducer from './reducers/index';

const reducers = combineReducers({
  demo: demoReducer
});

const middlewares = enhanceReduxMiddleware([]);

export const enhancers = [applyMiddleware(...middlewares)];

const initialState = {};

// add redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, initialState, composeEnhancers(...enhancers));
