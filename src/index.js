import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './reducers/index';
import TodoListContainer from "./containers/todolist-container";


const Index = () => {
  return (
  <Provider store={store}>
      <TodoListContainer />
  </Provider>)
};

ReactDOM.render(<Index />, document.getElementById("todoApp"));
