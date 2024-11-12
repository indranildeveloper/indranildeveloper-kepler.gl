// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {ThemeProvider} from 'styled-components';
import {IntlProvider} from 'react-intl';

import {render} from '@testing-library/react';
import {theme} from '@indranil-kepler.gl/styles';
import {messages} from '@indranil-kepler.gl/localization';
import {keplerGlReducerCore as coreReducer} from '@indranil-kepler.gl/reducers';
import {keplerGlInit} from '@indranil-kepler.gl/actions';

const mockStore = configureStore();
const initialCoreState = coreReducer(undefined, keplerGlInit({}));

export function renderWithTheme(component, options) {
  return render(
    <ThemeProvider theme={theme}>
      <IntlProvider locale="en" messages={messages}>
        {component}
      </IntlProvider>
    </ThemeProvider>,
    options
  );
}

export function renderWithStore(component, options) {
  // assume instance reducer is already mounted
  const store = mockStore({
    keplerGl: {
      foo: initialCoreState
    }
  });

  return render(<Provider store={store}>{component}</Provider>, options);
}

export function IntlWrapper({children, locale = 'en'}) {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
