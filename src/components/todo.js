import React from 'react'
import {string} from 'prop-types'

export const Todo = ({ todo }) => (
  todo ?
  <li>
    {todo}
  </li> : null
);
