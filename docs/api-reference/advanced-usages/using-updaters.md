# Using Updaters

Updaters are state transition functions that mapped to actions. One action can map to multiple state updaters, each belongs to a subreducer.

This action-updater pattern allows a user to import a specific action updater in the app's root reducer and use it to directly modify indranil-kepler.gl’s state without dispatching the action. This will give user a lot of freedom to control over indranil-kepler.gl's state transition.

To achieve the same result with `togglePerspective` updating indranil-kepler.gl's map perspective mode. You can import and dispatch indranil-kepler.gl action `togglePerspective`:

```js
// action and forward dispatcher
import {togglePerspective} from 'indranil-kepler.gl/actions';

const MapContainer = ({dispatch}) => (
  <div>
    <button onClick={() => dispatch(togglePerspective())} />
    <KeplerGl id="foo" />
  </div>
);
```

or import the corresponding updater `mapStateUpdaters.togglePerspectiveUpdater` and call it inside the root reducer. The example below demos how to add a button outside indranil-kepler.gl component, and update the map perspective when click it.

```js
import keplerGlReducer, {mapStateUpdaters} from 'indranil-kepler.gl/reducers';

// Root Reducer
const reducers = combineReducers({
 keplerGl: keplerGlReducer,
 app: appReducer
});

const composedReducer = (state, action) => {
 switch (action.type) {
   case 'CLICK_BUTTON':
     return {
       ...state,
       keplerGl: {
         ...state.keplerGl,
         foo: {
            ...state.keplerGl.foo,
            mapState: mapStateUpdaters.togglePerspectiveUpdater(
            t  state.keplerGl.foo.mapState
            )
         }
       }
     };
 }
 return reducers(state, action);
};

export default composedReducer;
```
