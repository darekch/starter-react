import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';

const createReducer = (asyncReducers = {}) => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...asyncReducers,
  });

  return rootReducer;
};

export default createReducer;
