import React, { useState } from 'react'
import styles from '../Input/styles.module.css'
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
    <div className={styles.input}>
      <input 
        onKeyPress={handleKeyPress}
        placeholder='Create a new todo...'
        value={value}
        onChange={handleChange}
        className={styles.field}
      />
      <button className={styles.btn} onClick={handleAddTodo}>Add todo</button>
    </div>

  )
}