import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import getItems from './items';

function* itemsSaga() {
  yield takeLatest(actionTypes.LOAD_ITEMS, getItems);
}

export default itemsSaga;
