import { combineReducers } from 'redux';
import todos from './todos';
import completed from './completed';

const rootReducer = combineReducers({ todos, completed });

export default rootReducer;
