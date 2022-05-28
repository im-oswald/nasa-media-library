import { yearRegex } from '../constants/filter-config'
import { textFromId } from '../utils'

const ValidationHelper = {
  // helper method to make validation message for failed field
  fieldRequired: (id) => textFromId(id) + ' is required',
  // helper method to validate year using regex
  validYear: (year) => !year || yearRegex.test(year),
}

export default ValidationHelper
