import React from 'react';
import { connect } from 'react-redux';
import { shape, number, string, func, arrayOf, bool } from 'prop-types';
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

TodoList.propTypes = {
  todos: arrayOf(shape({
    id: number.isRequired,
    completed: bool.isRequired,
    desc: string.isRequired,
  }).isRequired).isRequired,
  updateTodo: func.isRequired,
  removeTodo: func.isRequired,
};

export default connect(null, { updateTodo, removeTodo })(TodoList);
