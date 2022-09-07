import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state,action) {
            state.todos.push({
                id: v4(),
                text: action.payload.text,
                completed: false
            })
        },
        toggleComplete(state,action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed;
            
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }

})

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;