import React from 'react'
import styles from '../Input/styles.module.css'



export default function Input({ value, updateText, handleAction }) {
  

  return (
    <div className={styles.input}>
      <input 
        
        placeholder='Create a new todo...'
        value={value}
        onChange={(e) => updateText(e.target.value)}
        className={styles.field}
      />
      <button className={styles.btn} onClick={handleAction}>Add todo</button>
    </div>

  )
}