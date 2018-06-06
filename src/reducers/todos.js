import {ADD_TODO} from '../actions/add-todo';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return action;
    default:
      return state;
  }
};
