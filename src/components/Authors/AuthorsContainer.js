import Authors from './Authors'
import RestHoc from '../../RestHoc'
import {AuthorsService} from '../../services'
export default RestHoc(Authors, AuthorsService)
