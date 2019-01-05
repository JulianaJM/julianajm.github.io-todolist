import React from "react";
import {
  shape, string, func, bool
} from "prop-types";

import "./todo.scss";

export const Todo = ({ todo, onClick }) => (
  <div className="holder">
    <ul>
      <li>
        {/* eslint-disable-next-line */}
        <label
          className="container"
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {" "}
          {todo.desc}
          <input onClick={() => onClick.updateTodo(todo)} type="checkbox" checked={todo.completed} />
          <span className="checkmark" />
        </label>
        <input
          type="button"
          value="X"
          onClick={() => onClick.removeTodo(todo)}
          className="site"
        />
      </li>
    </ul>
  </div>
);

Todo.propTypes = {
  onClick: shape({
    updateTodo: func.isRequired,
    removeTodo: func.isRequired
  }).isRequired,
  todo: shape({
    id: string.isRequired,
    completed: bool.isRequired,
    desc: string.isRequired
  }).isRequired
};
