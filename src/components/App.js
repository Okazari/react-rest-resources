import React from 'react'
import Authors from './Authors'
import Books from './Books'
import styles from './styles.css'
const App = () => {
  return (
    <div className="app">
      <Authors />
      <Authors />
      <Books />
      <Books />
    </div>
  )
}

export default App
