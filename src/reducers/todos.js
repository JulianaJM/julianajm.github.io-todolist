import {ADD_TODO} from '../actions/add-todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return action;
    default:
      return state;
  }
};

export default todos;
