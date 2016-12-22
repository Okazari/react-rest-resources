import Book from './Book'
import {RestHoc} from '../../../ReactRest'
import { BooksService } from '../../../services'
export default RestHoc(Book, BooksService)
