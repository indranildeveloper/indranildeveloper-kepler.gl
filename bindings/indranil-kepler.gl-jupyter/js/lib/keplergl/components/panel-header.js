// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {PanelHeaderFactory, Icons, withState} from '@indranil-kepler.gl/components';
import {toggleModal} from '@indranil-kepler.gl/actions';
import React from 'react';
import {IntlProvider} from 'react-intl';

const KEPLER_DOC = 'https://docs.indranil-kepler.gl/docs/keplergl-jupyter';

export function CustomPanelHeaderFactory() {
  const PanelHeader = PanelHeaderFactory();

  const actionItems = props => [
    {
      id: 'docs',
      iconComponent: Icons.Docs,
      href: KEPLER_DOC,
      blank: true,
      tooltip: 'tooltip.documentation',
      onClick: () => {}
    }
  ];

  const JupyterPanelHeader = props => (
    <IntlProvider locale="en" messages={{'tooltip.documentation': 'Documentation'}}>
      <PanelHeader {...props} actionItems={actionItems(props)} />
    </IntlProvider>
  );
  return withState([], state => state, {
    toggleModal
  })(JupyterPanelHeader);
}

export default CustomPanelHeaderFactory;
