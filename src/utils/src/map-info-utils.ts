// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {MAP_INFO_CHARACTER} from '@indranil-kepler.gl/constants';

export function isValidMapInfo(mapInfo) {
  return (
    mapInfo.title.length &&
    mapInfo.title.length <= MAP_INFO_CHARACTER.title &&
    (!mapInfo.description.length || mapInfo.description.length <= MAP_INFO_CHARACTER.description)
  );
}
