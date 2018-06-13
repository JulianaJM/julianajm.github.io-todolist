import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import TodoListContainer from "./containers/todolist-container";

const store = createStore(rootReducer);

const Index = () => {
  return (
  <Provider store={store}>
      <TodoListContainer />
  </Provider>)
};

ReactDOM.render(<Index />, document.getElementById("todoApp"));
