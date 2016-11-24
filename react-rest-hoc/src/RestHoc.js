import React from 'react'

const RestHOC = (Component, ResourceService) => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props)
      console.log(props)
      this.state = {}
      const resource = ResourceService.getById(props.resourceId)
      resource.subscribe({
        next: (resource) => this.setState({resource})
      })
    }

    postResource(newResource) {
      ResourceService.postResource(newResource)
    }

    render() {
      return <Component resource={this.state.resource} postResource={this.postResource}/>
    }
  }
}

export default RestHOC
