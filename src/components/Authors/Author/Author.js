import React from 'react'
class Author extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit(event) {
    event.preventDefault()
    const { author, updateResource } = this.props
    if (this.state.editing){
      updateResource({...author, name: event.target.authorName.value})
    }
    this.setState({editing: !this.state.editing})
  }

  render() {
    const { author, deleteResource } = this.props
    const { editing } = this.state
    if(!author) return null
    return (
      <form className="item" onSubmit={this.toggleEdit}>
        {!editing ? 
          <div className="itemName">
            {author.name}
          </div> :
          <input className="itemName" onChange={this.storeValue} name="authorName" defaultValue={author.name}/>
        }
          <div className="actionList">
            <input type="submit" className="actionButton" value={ !editing ? 'Edit' : 'Save' } />
            <button type="button" onClick={() => deleteResource(author.id)} className="actionButton">
              Delete
            </button>
          </div>
      </form>
    )
  }
}

export default Author
