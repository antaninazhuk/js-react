import React from 'react'
import styles from '../TodoItem/styles.module.css'
import styled from 'styled-components'

const Title = styled.span`
    font-weight: 400;
    font-size: 28px;
    line-height: 59px;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: ${todo => todo.completed ? 'line-through' : 'none'}
`


export default function TodoItem(todo) {
    const { id, title, completed, deleteTodo, isCompleted} = todo;
   
    return (
        
        <li className={styles.todoItem}>
            <div>
            <input type="checkbox" checked={completed} onClick={() => isCompleted(id)} />    
            <Title completed={completed}>{`${title}`}</Title>
            </div>
            <button className={styles.button} onClick={() => deleteTodo(id)} >Delete</button>
           
        </li>
      
    )
}

