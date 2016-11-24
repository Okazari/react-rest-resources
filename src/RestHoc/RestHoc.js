import React from 'react'

const RestHOC = (Component, ResourceService) => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props)
      console.log(props)
      this.state = {}
      if(this.props.resourceId){
        const resource = ResourceService.getById(props.resourceId)
        this.state = {
          resource: resource.value
        }
        resource.subscribe({
          next: (resource) => this.setState({resource})
        })
      } else {
        ResourceService.subscribe({
          next: (resources) => this.setState({resources: Object.keys(resources)})
        })
      }
    }

    render() {
      return <Component
              resources={this.state.resources}
              resource={this.state.resource}
              postResource={this.postResource}
            />
    }
  }
}

export default RestHOC
