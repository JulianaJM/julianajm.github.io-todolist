import { UPDATE_FILTER } from '../actions/add-todo';

const completed = (state = false, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action;

    default:
      return state;
  }
};

export default completed;
