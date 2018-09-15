import React from 'react';
import { shape, number, string, func, bool } from 'prop-types';


export const Todo = ({ todo, onClick }) => (
  <div>
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >
      <input onClick={() => onClick.updateTodo(todo)} type="checkbox" />
      {todo.desc}
    </li>
    <input type="button" value="X" onClick={() => onClick.removeTodo(todo)} />
  </div>
);


Todo.propTypes = {
  onClick: shape({
    updateTodo: func.isRequired,
    removeTodo: func.isRequired,
  }).isRequired,
  todo: shape({
    id: number.isRequired,
    completed: bool.isRequired,
    desc: string.isRequired,
  }).isRequired,
};
