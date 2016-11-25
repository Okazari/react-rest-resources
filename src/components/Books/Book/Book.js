import React from 'react'
const Book = ({ book }) => {
  console.log(book)
  if(!book) return null
  return (
    <div>
      {book.title}
    </div>
  )
}

export default Book
