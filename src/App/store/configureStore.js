/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import history from './history';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
  );

  store.injectedReducers = {};
  store.injectedSagas = {};
  store.runSaga = sagaMiddleware.run;

  return store;
};

export default configureStore;
