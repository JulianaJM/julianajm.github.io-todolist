import React from 'react'
import {Todo} from "./todo";

export const TodoList = ({todos}) =>
  <ul>
    {todos.map((todo, i) =>
      <Todo
        key={i}
        todo={todo}
      />
    )}
  </ul>;
