import React from 'react'
import Book from './Book'

const Books = ({ books, postResource }) => {
  if(!books) return null
  const onAdd = (event) => {
    event.preventDefault()
    postResource({title: event.target.newBook.value})
    event.target.reset()
  }
  return (
    <div className="container">
    <h1> Book list </h1>
      {books.map(bookId => <Book key={bookId} bookId={bookId} />)}
      <form className="item" onSubmit={onAdd}>
        <input className="itemName" name="newBook" />
        <div className="actionList">
          <button className="actionButton">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default Books
