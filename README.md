# React Rest Resource

## Why ?

As i used `redux` along with `react` on a project, we decided to store data in an `api` reducer. We had to makes some asynchronous actions using `redux-thunk`.
After some time I definitly felt not comfortable with this way of storing api data. 
I wanted to find another way to store my API data and keep my redux store for one single use : Store my application state.

I assisted to a conference about reactive programming and i choosed to try something about observables resources.

Here it is !

## Usage

### First step : Create a Resource Service for your rest endpoint

Use the `ResourceService` factory to create a service for you endpoint.

```js 
const MyService = new ResourceService(url, options)
```

@params:
 - url: String - Your resource endpoint - Example : `http://localhost:8888/api/authors`
 - options : Object - an option object
   - name : Object - Names used for your ressource
     - single : String - A string used for single resources's injection in your components - Example : `author`
     - plural : String - A string used for resources's collections injection - Example : `authors`
   
```js
import { ResourceService } from 'react-rest-resource'
export const AuthorsService = new ResourceService('http://localhost:8888/authors',
  {
    name: {
      single: 'author',
      plural: 'authors',
    }
  }
)
```

### Second step : Use the provided Hoc to connect your components to your services

```js
//The component you want to connect
import Component from './Component'
//Import the library HOC
import { RestHoc } from 'react-rest-resource'
import RessourceService from 'MyResourceService'
const AuthorsService = new ResourceService('http://localhost:8888/authors',
  {
    name: {
      single: 'author',
      plural: 'authors',
    }
  }
)
const AuthorsFinalComponent = RestHoc(Component, AuthorsService)
```

#### Usage for a collection of resource id

Usage of the resulting component
```html
  <AuthorsFinalComponent />
```
This will inject an array of id using the `plural` name you defined.
In the example :
```js
const Component = ({ authors }) => {
  <div>
    {authors.map(authorId => authorId)}}
  </div>
}
```

#### Usage for a plain resource
This time you have to add a props - using the single name you defined in your service followed by Id - (this internaly do something like `name.single + 'Id'` to find the props)
```html
  <AuthorsFinalComponent authorId="2" />
```
This will inject your resource using the `single` name you defined.
In the example :
```js
const Component = ({ author }) => {
  <div>
    {author.name}
  </div>
}
```
