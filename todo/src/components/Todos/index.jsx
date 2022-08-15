import React, { useState } from 'react'
import TodoItem from './components/TodoItem/TodoItem'; 
import Input from '../Input/Input';
import { v4 as uuidv4 } from 'uuid';
import styles from '../Todos/styles.module.css'

const initialState = [
    {        
        "id": 1,
        "title": "go swimming",
        "completed": true
    },
    {
        "id": 2,
        "title": "buy bread",
        "completed": false
    },
    {
        "id": 3,
        "title": "call sister",
        "completed": false
    },
    {
        "id": 4,
        "title": "do homework",
        "completed": false
    },
]

export function Todos() {
    const [todos, setTodos] = useState(initialState);

    function addTodo(todo) {
        let copy = [...todos];
        copy.push({
            id: uuidv4(),
            title: todo,
        });
        setTodos(copy)
    }

    function handleDeleteTodo(id) {
        let filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    function handleCompleted(id) {
        let isCompletedTodos = todos.map(todo => todo.id === id ? ({...todo, completed:true}) : todo)
        setTodos(isCompletedTodos);

    }


    return (
        <div>
            <Input addTodo={addTodo} />
            <ul className={styles.list}>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={handleDeleteTodo} isCompleted={handleCompleted} />)}
            </ul>
        </div>
    )
}

