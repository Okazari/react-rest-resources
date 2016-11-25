import React from 'react'
import Author from './Author'

const Authors = ({ authors }) => {
  console.log(authors)
  if(!authors) return null
  return (
    <div>
      {authors.map(authorId => <Author key={authorId} authorId={authorId} />)}
    </div>
  )
}

export default Authors
