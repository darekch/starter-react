/* eslint-disable */
import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'App/store/utils/injectReducer';
import injectSaga from 'App/store/utils/injectSaga';

import * as actions from '../../actions';
import itemsSaga from '../../sagas';
import itemsReducer from '../../reducers/list';
import TodoList from '../../components/List/TodoList';

const withReducer = injectReducer({
  key: 'Test',
  reducer: itemsReducer,
});
const withSaga = injectSaga({
  key: 'Test',
  saga: itemsSaga,
});

const mapStateToProps = state => {
  return {
    asd: 1,
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

export const TestContainer = compose(
  withReducer,
  withSaga,
  withConnect,
)(TodoList);
