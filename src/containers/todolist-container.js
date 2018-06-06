import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux'
import {TodoList} from "../components/todoList";
import AddTodo from "../components/add-todo";

class TodoListContainer extends Component {

  constructor(props) {
    super();
  }

  componentDidMount(){
    debugger
  }

  render() {
    return (
      <Fragment>
        <AddTodo/>
        <TodoList todos={this.props.todos}/>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({todos});
export default connect(mapStateToProps)(TodoListContainer)
