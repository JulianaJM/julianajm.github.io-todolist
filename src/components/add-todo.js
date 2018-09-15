import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addTodo } from '../actions/add-todo';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ task: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.task.trim()) {
      return;
    }
    this.props.addTodo(this.state.task);
    this.setState({ task: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" value={this.state.task} onChange={this.handleChange} />
          <input type="submit" value="Create new task" />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: func.isRequired,
};

export default connect(null, { addTodo })(AddTodo);
