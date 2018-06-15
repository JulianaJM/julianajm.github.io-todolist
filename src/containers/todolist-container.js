import React, { Fragment } from 'react';
import { connect } from 'react-redux';
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
export default connect(mapStateToProps)(TodoListContainer);
