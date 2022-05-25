import { yearRegex } from '../constants/filter-config'
import { textFromId } from '../utils'

const ValidationHelper = {
  fieldRequired: (id) => textFromId(id) + ' is required',
  validYear: (year) => !year || yearRegex.test(year),
}

export default ValidationHelper
