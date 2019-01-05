import React from "react";
import { connect } from "react-redux";
import {
  shape, string, func, arrayOf, bool
} from "prop-types";
import { makeGetCompletedState } from "../selectors";
import { Todo } from "./todo";
import {
  updateTodo,
  removeTodo,
  removeAll,
  showAll
} from "../actions/todo";

const TodoList = ({
  todos,
  updateTodo,
  removeTodo,
  completedTodos,
  isFiltered,
  onFilterCompleted,
  // onFilterAll,
  removeAll
}) => (
  <>
    <div className="action-bar">
      <button type="button" onClick={onFilterCompleted}>
        show completed
      </button>
      <button type="button" onClick={() => removeAll()}>
        remove all
      </button>
    </div>
    <br />
    <ul className="todo-background">
      {!isFiltered && todos.map(todo => (
        <Todo key={todo.id} todo={todo} onClick={{ updateTodo, removeTodo }} />
      ))}

      {isFiltered && completedTodos.map(todo => (
        <Todo key={todo.id} todo={todo} onClick={{ updateTodo, removeTodo }} />
      ))}
    </ul>
  </>
);

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      id: string.isRequired,
      completed: bool.isRequired,
      desc: string.isRequired
    }).isRequired
  ).isRequired,
  completedTodos: arrayOf(
    shape({
      id: string.isRequired,
      completed: bool.isRequired,
      desc: string.isRequired
    }).isRequired
  ),
  updateTodo: func.isRequired,
  removeTodo: func.isRequired,
  onFilterCompleted: func.isRequired,
  removeAll: func.isRequired,
  isFiltered: bool.isRequired
};

const makeMapStateToProps = () => {
  const getCompleted = makeGetCompletedState();
  const mapStateToProps = ({ todos, completed }) => ({
    todos,
    isFiltered: completed.isFiltered,
    completedTodos: getCompleted(todos)
  });

  return mapStateToProps;
}; // This will create a private mapStateToProps function for each instance of the component.

export default connect(
  makeMapStateToProps,
  {
    updateTodo,
    removeTodo,
    removeAll,
    showAll
  }
)(TodoList);
