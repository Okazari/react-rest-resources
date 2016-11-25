import React from 'react'
const Authors = ({ author }) => {
  console.log(author)
  if(!author) return null
  return (
    <div>
      {author.name}
    </div>
  )
}

export default Authors
