import React from 'react';

const ItemTodo = ({text, completed }) => {
    return ( 
        <li
          style={{
              textDecoration: completed ? 'line-through' : 'none'
          }}
        >
            {text}
        </li>
     );
}
 
export default ItemTodo;