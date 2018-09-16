import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import classNames from 'classnames';
import { addTodo } from '../actions/add-todo';
import toto from './postit.jpg';

import './add-todo.scss';

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
      <div className="outer-div">
        <div className="inner-div">
          <img src={toto} alt="postit img" />

          <h1> Todo list</h1>
          <section>
            <form onSubmit={this.handleSubmit} >
              <input type="text" name="task" value={this.state.task} onChange={this.handleChange} placeholder="need something ..." />
              <input type="submit" value="Create new task" className={classNames('link-button', { disabled: this.state.task === '' })} />
            </form>
          </section>
        </div>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: func.isRequired,
};

export default connect(null, { addTodo })(AddTodo);
