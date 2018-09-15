import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { addTodo } from '../actions/add-todo';

const AddTodo = ({ addTodo }) => {
  let input;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    addTodo(input.value);
    input.value = '';
  };
  return (
    <div>
      <form onSubmit={onSubmit} >
        <input ref={node => input = node} />
        <button type="submit">Create new task</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  addTodo: func.isRequired,
};

export default connect(null, { addTodo })(AddTodo);
