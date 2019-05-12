//
import { LOAD_ITEMS, LOAD_ITEMS_SUCCESS, LOAD_ITEMS_ERROR } from './actionTypes';

export function loadItems() {
  return {
    type: LOAD_ITEMS,
  };
}

export function itemsLoaded(items) {
  return {
    type: LOAD_ITEMS_SUCCESS,
    payload: {
      items,
    },
  };
}

export function itemsLoadingError(error) {
  return {
    type: LOAD_ITEMS_ERROR,
    error,
  };
}
