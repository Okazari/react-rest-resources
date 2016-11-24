import Book from './Book'
import RestHoc from '../../../RestHoc'
import { BooksService } from '../../../services'
export default RestHoc(Book, BooksService)
