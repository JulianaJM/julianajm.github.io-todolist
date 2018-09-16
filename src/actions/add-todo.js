export const ADD_TODO = 'ADD_TODO';

let nextTodoId = 0;
export const addTodo = todo => ({
  type: ADD_TODO,
  /* eslint-disable-next-line */
  id: nextTodoId++,
  todo,
});
