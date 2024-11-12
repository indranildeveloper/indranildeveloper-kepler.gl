// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import React from 'react';
import {MapStyle} from '@indranil-kepler.gl/reducers';
import {Layer, LayerClassesType} from '@indranil-kepler.gl/layers';
import {Filter, InteractionConfig, UiState} from '@indranil-kepler.gl/types';

import {
  MapStyleActions,
  VisStateActions,
  MapStateActions,
  UIStateActions
} from '@indranil-kepler.gl/actions';
import {Datasets} from '@indranil-kepler.gl/table';

export type SidePanelItem = {
  id: string;
  label: string;
  iconComponent: React.ComponentType<any>;
  component: React.ComponentType<any>;
};

export type SidePanelProps = {
  appName: string;
  appWebsite: string;
  filters: Filter[];
  interactionConfig: InteractionConfig;
  layerBlending: string;
  overlayBlending?: string;
  layers: Layer[];
  layerClasses: LayerClassesType;
  layerOrder: string[];
  mapStyle: MapStyle;
  mapInfo: {title?: string; description?: string};
  width: number;
  datasets: Datasets;
  uiStateActions: typeof UIStateActions;
  visStateActions: typeof VisStateActions;
  mapStateActions: typeof MapStateActions;
  mapStyleActions: typeof MapStyleActions;
  uiState: UiState;
  availableProviders: {hasShare?: boolean; hasStorage?: boolean};
  mapSaved?: string | null;
  panels?: SidePanelItem[];
  onSaveMap?: () => void;
  version: string;
};

export type DatasetAttribution = {
  title: string;
  url: string;
};
