class Resource {
  constructor(url) {
    this.subscribers = []
    this.url = url
    this.update()
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }

  setResource(resource) {
    this.subscribers.map(subscriber => subscriber.next(resource))
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

  constructor(url) {
    this.url = url
    this.map = {}
  }

  getById(id) {
    if (!this.map[id]) this.map[id] = new Resource(`${this.url}/${id}`)
    return this.map[id]
  }

  postResource(resource) {
    this.map[resource.id].post(resource)
  }

}

export default new ResourceService('http://localhost:8888/resources')
