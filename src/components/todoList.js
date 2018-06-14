import React from 'react';
import { connect } from 'react-redux';
import {Todo} from "./todo";
import {updateTodo} from '../actions/todo';

const TodoList = ({todos, updateTodo}) =>
  <ul>
    {todos.map((todo, i) =>
      <Todo
        key={i}
        {...todo}
        onClick={()=> updateTodo(todo)}
      />
    )}
  </ul>;

export default connect(null, {updateTodo})(TodoList)
