import React from 'react'
const Book = ({ resource }) => {
  console.log(resource)
  if(!resource) return null
  return (
    <div>
      {resource.title}
    </div>
  )
}

export default Book
