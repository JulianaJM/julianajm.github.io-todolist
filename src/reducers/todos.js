import { ADD_TODO } from '../actions/add-todo';
import { UPDATE_TODO, REMOVE_TODO } from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, desc: action.todo, completed: false }];

    case UPDATE_TODO:
      return state.map(todo => ((todo.id === action.todo.id) ?
        { ...todo, completed: !todo.completed } : todo));

    case REMOVE_TODO:
      return state.filter(todo => action.todo.id !== todo.id);
    default:
      return state;
  }
};

export default todos;
