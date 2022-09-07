import React, { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem'; 
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/features/todoSlice';
import styles from '../Todos/styles.module.css'

export function Todos() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodoAction = () => {
        dispatch(addTodo({text}));
        setText('');
    }

    const todos = useSelector(state => state.todos.todos);

    
    return (
        <div>
            <Input value={text} updateText={setText} handleAction={handleAddTodoAction} />
            <ul className={styles.list}>
            {todos.map(todo => <TodoItem key={todo.id} data = {todo} />)}
            </ul>
        </div>
    )
}

