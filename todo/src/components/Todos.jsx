import React, { useState } from 'react'
import TodoItem from './TodoItem';
import Input from './Input';

const initialState = [
    {        
        "id": 1,
        "title": "Create a new todo..."
    },
    {
        "id": 2,
        "title": "Create a new todo..."
    },
    {
        "id": 3,
        "title": "Create a new todo..."
    },
    {
        "id": 4,
        "title": "Create a new todo..."
    },
]

export default function Todos() {
    const [todos, setTodos] = useState(initialState);

    function addTodo(todo) {
        let copy = [...todos];
        copy.push({
            id: Math.floor(Math.random() * 200),
            title: todo,
        });
        setTodos(copy)
    }

    function handleDeleteTodo(id) {
        let filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    return (
        <div>
            <Input addTodo={addTodo} />
            <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
            }}>
                {todos.map(todo => <TodoItem key={todo.id} {...todo} deleteTodo={handleDeleteTodo} />)}
            </ul>
        </div>
    )
}

