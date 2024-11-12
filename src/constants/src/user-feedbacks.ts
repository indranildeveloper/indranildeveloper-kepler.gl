// SPDX-License-Identifier: MIT
// Copyright contributors to the indranildeveloper-kepler.gl project

export const MISSING_MAPBOX_TOKEN =
  'Mapbox Token not valid. ' +
  '[Click here](https://github.com/keplergl/indranildeveloper-kepler.gl#mapboxapiaccesstoken-string-required)';

export const IMAGE_EXPORT_ERRORS = {
  dataUri: `[indranildeveloper-kepler.gl] Failed to create image from data uri.
  Copy the uri in the javascript console when reporting this bug.
  The uri is the string starts with "data:image/png"`,
  styleSheet: `[indranildeveloper-kepler.gl] Failed to fetch stylesheet when exporting image.
    This probably will not affect the map. It might affect the legend.
    The stylesheet failed to load is: `
};
