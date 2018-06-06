import React from 'react'
import {Todo} from "./todo";

export const TodoList = ({todos}) =>
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )}
  </ul>;

