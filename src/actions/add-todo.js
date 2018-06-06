import {createTodo as _createTodo} from '../services/todo';

export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const createTodo = (todo) => (dispatch) =>
  _createTodo(todo)
    .then(() => dispatch(addTodo(todo)));
