import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  shape, number, string, arrayOf, bool
} from 'prop-types';
import TodoList from '../components/todoList';
import AddTodo from '../components/add-todo';

const TodoListContainer = ({ todos }) => (
  <Fragment>
    <AddTodo />
    <TodoList todos={todos} />
  </Fragment>
);

const mapStateToProps = ({ todos }) => ({ todos });
// const mapStateToProps = state => ({ todos: state.todos });
// const mapStateToProps = (state) => {
//   return {
//     todos : state.todos
//   }
// };

TodoListContainer.propTypes = {
  todos: arrayOf(shape({
    id: number.isRequired,
    completed: bool.isRequired,
    desc: string.isRequired,
  }).isRequired).isRequired,
};

export default connect(mapStateToProps)(TodoListContainer);
