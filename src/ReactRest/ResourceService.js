const headers = {
  'Content-Type': 'application/json',
}

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
    return fetch(this.url)
      .then(response => response.json())
      .then(resource => this.setResource(resource))
  }

  put(resource) {
    return fetch(this.url, {method: 'PUT', headers, body: JSON.stringify(resource)})
      .then(response => response.json())
      .then(() => this.setResource(resource))
  }

  delete() {
    return fetch(this.url, {method: 'DELETE', headers})
      .then(response => response.json())
  }
}



class ResourceService {

  constructor(url, options) {
    this.options = options
    this.url = url
    this.map = {}
    this.subscribers = []
    this.update()
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  notify() {
    this.subscribers.map(subscriber => subscriber.next(this.map))
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
      this.notify()
    })
  }

  getById(id) {
    if (!this.map[id]) this.map[id] = new Resource(`${this.url}/${id}`)
    return this.map[id]
  }

  postResource(resource) {
    fetch(this.url, {
      method: 'POST',
      headers,
      body: JSON.stringify(resource)
    })
    .then(response => response.json())
    .then(data => {
      this.map[data.id] = new Resource(`${this.url}/${data.id}`, {...resource, id: data.id})
      this.notify()
    })
  }

  updateResource(resource) {
    this.getById(resource.id).put(resource)
  }

  deleteResource(resourceId) {
    this.getById(resourceId).delete().then(() => {
      delete this.map[resourceId]
      this.notify()
    })
  }

}

export default ResourceService
