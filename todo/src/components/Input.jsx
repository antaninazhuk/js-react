import React, { useState } from 'react'

export default function Input({ addTodo }) {
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue(event.target.value)
  }

  function handleAddTodo() {
    addTodo(value)
    setValue('')
  }

  function handleKeyPress(event) {
      if (event.key === 'Enter') {
        handleAddTodo()
      }
    }

  return (
    <div>
      <input 
        onKeyPress={handleKeyPress}
        placeholder='Create a new todo...'
        style={{
          margin: '20px 0'
        }}
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>

  )
}