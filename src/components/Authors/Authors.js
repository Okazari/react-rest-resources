import React from 'react'
import Author from './Author'

const Authors = ({ authors, postResource }) => {
  if(!authors) return null
  const onAdd = (event) => {
    event.preventDefault()
    postResource({name: event.target.newAuthor.value})
    event.target.reset()
  }
  return (
    <div className="container">
    <h1> Author list </h1>
      {authors.map(authorId => <Author key={authorId} authorId={authorId} />)}
      <form className="item" onSubmit={onAdd}>
        <input className="itemName" name="newAuthor" />
        <div className="actionList">
          <button className="actionButton">
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default Authors
