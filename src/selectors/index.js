import { createSelector } from "reselect";
// selector
const getCompleted = state /* , props */ => state.filter(todo => todo.completed);
const getAll = todos => todos;

// reselect function
export const makeGetCompletedState = () => createSelector(getCompleted,
  todos => todos);

export const makeGetAllState = () => createSelector(getAll,
  todos => todos);

// First argument, selectors. Second argument
// is a function called with the selectors as argument
// So in the above (bar) => bar is a function.
// The only argument in this function (which I call bar,
// but could be called anything) is the selector I specified
// in the first argument of the createSelector function.
