import axios from 'axios';
import { put } from 'redux-saga/effects';

import * as actions from '../actions/items';

function* getItems() {
  const requestUrl = `https://jsonplaceholder.typicode.com/users/`;
  try {
    const response = yield axios.get(requestUrl);
    yield put(actions.itemsLoaded(response.data));
  } catch (error) {
    yield put(actions.itemsLoadingError(error));
  }
}

export default getItems;
