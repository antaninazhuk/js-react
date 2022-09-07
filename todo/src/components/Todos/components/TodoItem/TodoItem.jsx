import React from 'react';
import styles from '../TodoItem/styles.module.css';
import styled from 'styled-components';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../../../../store/features/todoSlice';

const Title = styled.span`
font-weight: 400;
font-size: 28px;
line-height: 59px;
letter-spacing: 0.1em;
color: rgba(255, 255, 255, 0.7);
`

export default function TodoItem({data}) {
    const { id, text, completed} = data;
    const dispatch = useDispatch();    

    const completedClass = classNames('', {'line-through':completed});   
    return (        
        <li className={styles.todoItem}>
            <div>
              <input type="checkbox" onClick={() => dispatch(toggleComplete({id}))}  />    
              <Title className={completedClass}>{text}</Title>
            </div>
              <button 
                className={styles.button}
                onClick={() => dispatch(removeTodo({id}))}>
                Delete
              </button>           
        </li>      
    )
}

