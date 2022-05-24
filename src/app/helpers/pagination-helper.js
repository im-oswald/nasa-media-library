import {
  selectedPageClassList,
  nonSelectedPageClassList,
} from '../constants/pagination-config'

const PaginationHelper = {
  getClasses: (selected) =>
    selected ? selectedPageClassList : nonSelectedPageClassList,
}

export default PaginationHelper
