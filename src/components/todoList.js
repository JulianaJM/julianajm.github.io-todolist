import React from 'react';
import { connect } from 'react-redux';
import { Todo } from './todo';
import { updateTodo, removeTodo } from '../actions/todo';

const TodoList = ({ todos, updateTodo, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        onClick={{ updateTodo, removeTodo }}
      />))
      }
  </ul>);

export default connect(null, { updateTodo, removeTodo })(TodoList);
