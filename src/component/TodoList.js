import React from 'react';
import TodoItem from './TodoItem';
import List from '@mui/material/List';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;
