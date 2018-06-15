import { ADD_TODO } from '../actions/add-todo';
import { UPDATE_TODO } from '../actions/todo';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { desc: action.todo, completed: false }];

    case UPDATE_TODO:
      return state.map(todo =>
        (todo.desc === action.todo.desc)
          ? {...todo, completed: !todo.completed}
          : todo
      );

    default:
      return state;
  }
};

export default todos;
