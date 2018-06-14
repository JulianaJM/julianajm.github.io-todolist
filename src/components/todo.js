import React from 'react'
import {string} from 'prop-types'

export const Todo = ({desc, status, onClick}) => {
    return (
      <li style={{textDecoration: status === 'INPROGRESS' ? 'line-through' : 'none'}} onClick={onClick}>
        {desc}
      </li>
    )
};
