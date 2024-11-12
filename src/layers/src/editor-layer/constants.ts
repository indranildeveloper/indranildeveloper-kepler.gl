// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {RGBColor} from '@indranil-kepler.gl/types';

export const COLORS = {
  // blue
  PRIMARY: [0x26, 0xb5, 0xf2] as RGBColor,
  // gray
  SECONDARY: [0xaa, 0xaa, 0xaa] as RGBColor,
  // yellow
  HIGHLIGHT: [0xff, 0xff, 0x00] as RGBColor
};

export const EDIT_TYPES = {
  ADD_POSITION: 'addPosition',
  MOVE_POSITION: 'movePosition',
  TRANSLATING: 'translating',
  ADD_FEATURE: 'addFeature'
};
