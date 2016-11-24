import Author from './Author'
import RestHoc from '../../../RestHoc'
import {AuthorsService} from '../../../services'
export default RestHoc(Author, AuthorsService)
