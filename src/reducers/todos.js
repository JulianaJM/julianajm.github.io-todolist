import {ADD_TODO, LOAD_TODOS} from '../actions/add-todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];

    case LOAD_TODOS:
      return state;
    default:
      return state;
  }
};

export default todos;
