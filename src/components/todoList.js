import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { shape, number, string, func, arrayOf, bool } from 'prop-types';
import { Todo } from './todo';
import { updateTodo, removeTodo, removeAll, showCompleted, showAll } from '../actions/todo';

const TodoList = ({
  todos, updateTodo, removeTodo, showCompleted, removeAll,
}) => (
  <Fragment>
    <div className="action-bar">
      <button type="button" onClick={() => showCompleted(todos)}>show completed</button>
      <button type="button" onClick={() => removeAll()}>remove all</button>
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
  showCompleted: func.isRequired,
  removeAll: func.isRequired,
};

export default connect(null, {
  updateTodo, removeTodo, showCompleted, removeAll, showAll,
})(TodoList);

