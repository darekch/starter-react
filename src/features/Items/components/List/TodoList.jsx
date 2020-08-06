import React, { Component, Suspense } from 'react';

// import LoadableButton from 'common/components/Button';
import Button from '../Button';
import Footer from '../ListFooter/TodoFooter';
import FooterClass from '../ListFooter/TodoFooterClass';
import MyContext from '../../context/ItemsContext';
import { StyledDiv, StyledText } from '../styles';

const LoadableButton = React.lazy(() => import('common/components/Button'));
const LoadableHButton = React.lazy(() => import('common/components/HButton'));

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log('[List]constructor');
  }

  static getDerivedStateFromProps() {
    console.log('[List]getDerivedStateFromProps');
    return null;
  }

  static getDerivedStateFromError() {
    console.log('[List]getDerivedStateFromError');
    return null;
  }

  componentDidMount() {
    console.log('[List]componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[List]shouldComponentUpdate');
  }

  componentDidUpdate() {
    console.log('[List]componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[List]componentWillUnmount');
  }

  getSnapshotBeforeUpdate() {
    console.log('[List]getSnapshotBeforeUpdate');
  }

  componentDidCatch() {
    console.log('[List]componentDidCatch');
  }

  render() {
    console.log('[List]render');

    console.log(this.props);

    const { loadRepos } = this.props;
    loadRepos();

    return (
      <StyledDiv>
        <h1>React 16.8.6</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <LoadableButton />
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledText>
          <LoadableHButton />
          <h2>Context</h2>
          <MyContext.Provider value="green">
            <Button />
            <Footer />
            <FooterClass />
          </MyContext.Provider>
        </Suspense>
      </StyledDiv>
    );
  }
}

export default TodoList;
