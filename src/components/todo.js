import React from 'react';

export const Todo = props => (
  <div>
    <li style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }} >
      <input onClick={() => props.onClick.updateTodo(props.todo)} type="checkbox" />
      {props.todo.desc}
    </li>
    <input type="button" value="X" onClick={() => props.onClick.removeTodo(props.todo)} />
  </div>
);
