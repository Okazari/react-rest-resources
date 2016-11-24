import React from 'react'
const Authors = ({ resource }) => {
  console.log(resource)
  if(!resource) return null
  return (
    <div>
      {resource.name}
    </div>
  )
}

export default Authors
