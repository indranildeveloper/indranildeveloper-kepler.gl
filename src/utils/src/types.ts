// SPDX-License-Identifier: MIT
// Copyright contributors to the indranil-kepler.gl project

import {Filter, Field, FilterDatasetOpt} from '@indranil-kepler.gl/types';

import {DataContainerInterface} from './data-container-interface';

export interface KeplerTableModel<K, L> {
  id: string;
  getColumnFieldIdx(columnName: string): number;
  filterTable(filters: Filter[], layers: L[], opt?: FilterDatasetOpt): K;
  getColumnFilterProps(columnName: string): Field['filterProps'] | null | undefined;
  dataContainer: DataContainerInterface;
  filterTableCPU(filters: Filter[], layers: L[]): K;
  gpuFilter: {
    filterRange: number[][];
    filterValueUpdateTriggers: any;
    filterValueAccessor: (
      dc: DataContainerInterface
    ) => (
      getIndex?: (any) => number,
      getData?: (dc_: DataContainerInterface, d: any, fieldIndex: number) => any
    ) => (d: any) => (number | number[])[];
  };
  filteredIndex: number[];
}
