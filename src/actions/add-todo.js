// import {loadTodos as _loadTodos} from '../services/todo';

export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODOS = 'LOAD_TODOS';

export const addTodo = (todo) => {
  return {
  type: ADD_TODO,
  todo
}};

export const loadTodos = () => {
  return {
  type: LOAD_TODOS
}};

// export const loadTodos = (todo) => (dispatch) =>
//   _loadTodos(todo)
//     .then(() => dispatch(addTodo(todo)));
