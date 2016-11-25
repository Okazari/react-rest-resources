import React from 'react'
import Book from './Book'

const Books = ({ books }) => {
  console.log(books)
  if(!books) return null
  return (
    <div>
      {books.map(bookId => <Book key={bookId} bookId={bookId} />)}
    </div>
  )
}

export default Books
