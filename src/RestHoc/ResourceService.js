class Resource {
  constructor(url, initialValue) {
    this.subscribers = []
    this.url = url
    if(!!initialValue) {
      this.value = initialValue
    } else {
      this.update()
    }
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  setResource(resource) {
    this.value = resource
    this.subscribers.forEach(subscriber => subscriber.next(resource))
  }

  update() {
    fetch(this.url)
      .then(response => response.json())
      .then(resource => this.setResource(resource))
  }

  post(resource) {
    console.log(resource)
    fetch(this.url, {method: 'PATCH', body: JSON.stringify(resource)})
      .then(response => response.json())
      .then(() => this.setResource(resource))
  }
}



class ResourceService {

  constructor(singleName, multiName, url) {
    this.singleName = singleName
    this.multiName = multiName
    this.url = url
    this.map = {}
    this.subscribers = []
    this.update()
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  update() {
    fetch(this.url)
    .then(response => response.json())
    .then(resources => {
      resources.forEach(
        (resource) => {
          if(!this.map[resource.id]) this.map[resource.id] = new Resource(`${this.url}/${resource.id}`, resource)
        }
      )
      this.subscribers.map(subscriber => subscriber.next(this.map))
    })
  }

  getById(id) {
    if (!this.map[id]) this.map[id] = new Resource(`${this.url}/${id}`)
    return this.map[id]
  }

  postResource(resource) {
    this.map[resource.id].post(resource)
  }

}

export default ResourceService
