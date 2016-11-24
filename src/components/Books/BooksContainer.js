import Books from './Books'
import RestHoc from '../../RestHoc'
import {BooksService} from '../../services'
export default RestHoc(Books, BooksService)
