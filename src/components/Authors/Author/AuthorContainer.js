import Author from './Author'
import {RestHoc} from '../../../ReactRest'
import {AuthorsService} from '../../../services'
export default RestHoc(Author, AuthorsService)
