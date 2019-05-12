/* eslint-disable no-param-reassign */
import createReducer from '../reducers';

export const injectReducerFactory = store => {
  return (key, reducer) => {
    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
};

const getInjectors = store => ({
  injectReducer: injectReducerFactory(store),
});

export default getInjectors;
