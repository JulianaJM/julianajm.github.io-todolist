import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { shape, number, string, func, arrayOf, bool } from 'prop-types';
import { Todo } from './todo';
import { updateTodo, removeTodo } from '../actions/todo';

const TodoList = ({ todos, updateTodo, removeTodo }) => (
  <Fragment>
    <div className="action-bar">
      <button type="button">show completed</button>
      <button type="button">remove all</button>
    </div>
    <br />
    <ul className="todo-background">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          onClick={{ updateTodo, removeTodo }}
        />))
        }
    </ul>
  </Fragment>);

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
