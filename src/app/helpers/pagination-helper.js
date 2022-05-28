import {
  selectedPageClassList,
  nonSelectedPageClassList,
} from '../constants/pagination-config'

const PaginationHelper = {
  // decided multiple class to make current page tab different from others in pagination tab
  getClasses: (selected) =>
    selected ? selectedPageClassList : nonSelectedPageClassList,
}

export default PaginationHelper
