import React from 'react'
import Author from './Author'

const Authors = ({ resources }) => {
  console.log(resources)
  if(!resources) return null
  return (
    <div>
      {resources.map(authorId => <Author key={authorId} resourceId={authorId} />)}
    </div>
  )
}

export default Authors
