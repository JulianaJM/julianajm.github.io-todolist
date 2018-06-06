import {combineReducers, createStore} from 'redux';
import todos from './todos';

const rootReducer = combineReducers({todos});

function configureStore() {
  return createStore(rootReducer);
}

const store = configureStore();
export default store;
