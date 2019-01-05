import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import TodoListContainer from './containers/todolist-container';

const logger = createLogger();
const middlewares = [thunk, logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const App = () => (
  <Provider store={store}>
    <TodoListContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('todoApp'));
