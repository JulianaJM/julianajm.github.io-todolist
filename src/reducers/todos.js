import {ADD_TODO} from '../actions/add-todo';
import {UPDATE_TODO} from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {desc: action.todo, status: 'READY'}];

    case UPDATE_TODO:
      debugger
      return [...state,{...action.todo, status: 'INPROGRESS'}];

    default:
      return state;
  }
};

export default todos;
