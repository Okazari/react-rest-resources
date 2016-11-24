import ResourceService from '../RestHoc/ResourceService'
export const AuthorsService = new ResourceService('authors', 'author', 'http://localhost:8888/authors')
export const BooksService = new ResourceService('books', 'book', 'http://localhost:8888/books')
