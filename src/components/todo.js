import React from 'react';

export const Todo = ({ desc, completed, onClick }) => (
  <li style={{ textDecoration: completed ? 'line-through' : 'none' }} onClick={onClick}>
    {desc}
  </li>);
