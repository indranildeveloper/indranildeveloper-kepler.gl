// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {CLOUDFRONT, KEPLER_GL_BUCKET, WEBSITE_ASSET_FOLDER} from './constants';

export function cdnUrl(path) {
  return `${CLOUDFRONT}/${KEPLER_GL_BUCKET}/${WEBSITE_ASSET_FOLDER}/${path}`;
}
