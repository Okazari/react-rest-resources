import React from 'react'
import Book from './Book'

const Books = ({ resources }) => {
  console.log(resources)
  if(!resources) return null
  return (
    <div>
      {resources.map(authorId => <Book key={authorId} resourceId={authorId} />)}
    </div>
  )
}

export default Books
