import React from 'react'
class book extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(event) {
    event.preventDefault()
    const { book, updateResource } = this.props
    if (this.state.editing){
      updateResource({...book, title: event.target.bookTitle.value})
    }
    this.setState({editing: !this.state.editing})
  }

  render() {
    const { book, deleteResource } = this.props
    const { editing } = this.state
    if(!book) return null
    return (
      <form className="item" onSubmit={this.toggleEdit}>
        {!editing ? 
          <div className="itemName">
            {book.title}
          </div> :
          <input className="itemName" onChange={this.storeValue} name="bookTitle" defaultValue={book.title}/>
        }
          <div className="actionList">
            <input type="submit" className="actionButton" value={ !editing ? 'Edit' : 'Save' } />
            <button type="button" onClick={() => deleteResource(book.id)} className="actionButton">
              Delete
            </button>
          </div>
      </form>
    )
  }
}

export default book
