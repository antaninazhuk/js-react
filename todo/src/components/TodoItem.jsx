import React from 'react'

export default function TodoItem(props) {
    const { id, title, deleteTodo } = props;
    return (
        
        <li style={{
            background: '#eee',
            display: 'block',
            margin: '10px 0',
            padding: '10px',
            
            }}>
            <input type="checkbox" onClick={() => deleteTodo(id)} />    
            {`${title}`}
           
        </li>
      
    )
}

