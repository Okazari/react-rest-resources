import Books from './Books'
import {RestHoc} from '../../ReactRest'
import {BooksService} from '../../services'
export default RestHoc(Books, BooksService)
