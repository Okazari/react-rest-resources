import Authors from './Authors'
import {RestHoc} from '../../ReactRest'
import {AuthorsService} from '../../services'
export default RestHoc(Authors, AuthorsService)
