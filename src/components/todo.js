import React from 'react';

export const Todo = ({ desc, status, onClick }) => (
  <li style={{ textDecoration: status === 'INPROGRESS' ? 'line-through' : 'none' }} onClick={onClick}>
    {desc}
  </li>);
