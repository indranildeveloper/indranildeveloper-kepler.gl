// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import React from 'react';
import ReactDOM from 'react-dom/client';
import document from 'global/document';
import {Provider} from 'react-redux';
import store from './store.ts';
import App from './app.tsx';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Root />);
