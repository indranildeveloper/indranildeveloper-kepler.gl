// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

export type FileCacheItem = {
  data: any;
  info: {
    id?: string;
    label: string;
    format: string;
  };
};

export type ValidKeplerGlMap = {
  datasets: unknown;
  config: unknown;
  info: Record<string, string>;
};
