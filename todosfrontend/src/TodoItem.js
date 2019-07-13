import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
    <li>
      <span
       style={{
           textDecoration: completed? 'line-through': 'none'
       }}
      >
       {name}
      </span>
    </li>
);

export default TodoItem;
