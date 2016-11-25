import ResourceService from '../RestHoc/ResourceService'
export const AuthorsService = new ResourceService('http://localhost:8888/authors',
  {
    name: {
      single: 'author',
      plural: 'authors',
    }
  }
)
export const BooksService = new ResourceService('http://localhost:8888/books',
  {
    name: {
      single: 'book',
      plural: 'books',
    }
  }
)
