export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETED = 'COMPLETED';
export const REMOVE_ALL = 'REMOVE_ALL';
export const SHOW_ALL = 'SHOW_ALL';

export const updateTodo = todo => ({
  type: UPDATE_TODO,
  todo,
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo,
});


export const showCompleted = todos => ({
  type: COMPLETED,
  todos,
});

export const removeAll = () => ({
  type: REMOVE_ALL,
});

export const showAll = () => ({
  type: SHOW_ALL,
});
