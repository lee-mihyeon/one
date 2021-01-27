import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: pink; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
    return (
        <TodoListBlock>
          <TodoItem text="프로젝트 생성하기" done/>
          <TodoItem text="컴포넌트 스타일링 하기" done />
          <TodoItem text="Context 만들기"  />
          <TodoItem text="기능 구현하기"  />
          <Counter/>
        </TodoListBlock>
      );
    }

export default TodoList;