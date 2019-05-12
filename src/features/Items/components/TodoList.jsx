import React from 'react';

import { StyledDiv, StyledText } from './styles';

const TodoList = props => {
  const { loadRepos } = props;
  loadRepos();

  return (
    <StyledDiv>
      <h1>Hello World</h1>
      <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledText>
    </StyledDiv>
  );
};

export default TodoList;
