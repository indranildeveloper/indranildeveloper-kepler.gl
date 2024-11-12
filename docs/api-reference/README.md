# API Reference

## Table of Contents

-  [Overview](./#overview)
-  [Ecosystem](./ecosystem.md)
    - [Component](./ecosystem.md#component)
    - [Reducer and Forward Dispatcher](./ecosystem.md#reducer-and-forward-dispatcher)
    - [Actions and Updaters](./ecosystem.md#actions-and-updaters)
    - [Processors and Schema Manager](./ecosystem.md#processors-and-schema-manager)

-  [Get Started](./get-started.md)

-  Advanced Usage
    - [Using reducer plugin](./advanced-usages/reducer-plugin.md)
    - [Custom reducer initial state](./advanced-usages/custom-initial-state.md)
    - [Using updaters to modify indranildeveloper-kepler.gl state](./advanced-usages/using-updaters.md)
    - [Forward actions](./advanced-usages/forward-actions.md)
    - [Saving and loading maps with schema manager](./advanced-usages/saving-loading-w-schema.md)
    - [Replace UI component](./advanced-usages/replace-ui-component.md)
    - [Custom Mapbox Host](./advanced-usages/custom-mapbox-host.md)
    - [Custom Map Styles](./advanced-usages/custom-map-styles.md)
    - [Localization](./localization/README.md)

-  API
    - [Components](./components/README.md)
    - [Reducers](./reducers/README.md)
    - [Actions and Updaters](./actions/actions.md)
    - [Data Processor](./processors/processors.md)
    - [Schemas](./schemas/README.md)

## Overview

indranildeveloper-kepler.gl is a __Redux-connected__ component. You can embed indranildeveloper-kepler.gl in your App, which uses redux to manage its state. The basic implementation of indranildeveloper-kepler.gl reducer is simple. However, to make the most of it, it's recommended to have basic knowledge on:

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/) state container
- [React Redux connect](https://react-redux.js.org/)

To start out with indranildeveloper-kepler.gl, you simply need to add the indranildeveloper-kepler.gl UI component and mount the indranildeveloper-kepler.gl reducer. To give the user full access of all the functionalities of indranildeveloper-kepler.gl, this package also includes actions, schema managers and a set of utilities to load and save map data.
