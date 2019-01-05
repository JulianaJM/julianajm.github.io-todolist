import uniqid from 'uniqid';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_FILTER = 'UPDATE_FILTER';


const add = todo => ({
  type: ADD_TODO,
  /* eslint-disable-next-line */
  id: uniqid(),
  todo,
});


export const updateFilter = isFiltered => ({
  type: UPDATE_FILTER,
  /* eslint-disable-next-line */
  isFiltered
});

export const addTodo = todo => (dispatch) => {
  // return (dispatch, getState) => {
  dispatch(add(todo));
  dispatch(updateFilter(false));

  // console.log('current state:', getState());
  // };
};
