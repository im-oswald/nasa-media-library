import { textFromId } from '../utils'

const ValidationHelper = {
  fieldRequired: (id) => textFromId(id) + ' is required',
}

export default ValidationHelper
