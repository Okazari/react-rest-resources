# React Rest Resource

## Why ?

As i used `redux` along with `react` on a project, we decided to store data in an `api` reducer. We had to makes some asynchronous actions using `redux-thunk`.
After some time I definitly felt not comfortable with this way of storing api data. 
I wanted to find another way to store my API data and keep my redux store for one single use : Store my application state.

I assisted to a conference about reactive programming and i choosed to try something about observables resources.

Here it is !

## Features

  - Optimize your HTTP requests : Get only the data you need.
  - Optimize your renders : Only react components that really need to refresh will do
  - Don't worry about async, your component will update as soon as the data is there.

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

### Second step : Use the provided Hoc to get your resources injected as props in your component

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
Usage it to get a list of id or your plain resource
```js
  //This will inject an array of id into a props use the plural name you defined
  <AuthorsFinalComponent />
  // => In your component you will get a props authors = [1,2,3,4]

  //If you provide a props using your single name + Id, it will inject the plain resource object using the single name you defined
  <AuthorsFinalComponent autorId={1} />
  // => In your component you will get a props author = {id: 1, name:"Toto", ...} 
```

In both usage, the RestHOC will also inject 3 methods in your props to manipulate your data :

```js
  postResource(newResource)
  updateResource(updatedResource)
  deleteResource(resourceId)
```

Theses methods will update/create/delete your data and update every component binded to your RessourceService with the RestHoc 