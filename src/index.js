import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers/index';
import TodoListContainer from "./containers/todolist-container";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger));

const Index = () => {
  return (
  <Provider store={store}>
      <TodoListContainer />
  </Provider>)
};

ReactDOM.render(<Index />, document.getElementById("todoApp"));
