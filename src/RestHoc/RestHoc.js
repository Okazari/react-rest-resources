import React from 'react'

const getDisplayName = (c) => c.displayName || c.name || 'Component'

const RestHOC = (Component, ResourceService) => {
  return class extends React.Component {
    static displayName = `RestHoc(${getDisplayName(Component)})`
    constructor(props) {
      super(props)
      this.state = {}
      const resourceId = props[`${ResourceService.singleName}Id`]
      if (resourceId) {
        const resource = ResourceService.getById(resourceId)
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
      const injectedProps = {
        postResource: this.postResource
      }
      if (this.state.resource) injectedProps[ResourceService.singleName] = this.state.resource
      if (this.state.resources) injectedProps[ResourceService.multiName] = this.state.resources
      return <Component
              {...injectedProps}
              {...this.props}
            />
    }
  }
}

export default RestHOC
