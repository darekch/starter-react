/* eslint-disable */
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'App/store/utils/injectReducer';
import injectSaga from 'App/store/utils/injectSaga';

import * as actions from './actions';
import itemsSaga from './sagas';
import itemsReducer from './reducers/list';
import TodoList from './components/TodoList';

const withReducer = injectReducer({
  key: 'Items',
  reducer: itemsReducer,
});
const withSaga = injectSaga({
  key: 'Items',
  saga: itemsSaga,
});

const mapStateToProps = state => {
  return {
    //
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRepos: () => dispatch(actions.loadItems()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TodoList);
