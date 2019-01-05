import React, { Component } from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { updateFilter } from "../actions/add-todo";
import TodoList from "../components/todoList";
import AddTodo from "../components/add-todo";

class TodoListContainer extends Component {
  // constructor(props){
  // super(props);
  // }

  showCompleted = () => {
    const { updateFilter } = this.props;
    updateFilter(true);
  }

  showAll = () => {
    const { updateFilter } = this.props;
    updateFilter(false);
  }

  render() {
    return (
      <>
        <AddTodo />
        <TodoList
          onFilterCompleted={() => this.showCompleted()}
          onFilterAll={() => this.showAll()}
        />
      </>
    );
  }
}

const mapDispatchToProps = dispatch/* , ownProps */ => ({
  updateFilter: isFiltered => dispatch(updateFilter(isFiltered))
});

const mapStateToProps = ({ todos, completed }) => ({ todos, completed });

// const mapStateToProps = state => ({ todos: state.todos });
// const mapStateToProps = (state) => {
//   return {
//     todos : state.todos
//   }
// };

TodoListContainer.propTypes = {
  updateFilter: func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
