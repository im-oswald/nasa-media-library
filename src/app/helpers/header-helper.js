import { defaultNavClasses } from '../constants/header-config'

const HeaderHelper = {
  joinClasses: (item, classes = defaultNavClasses) => {
    Object.keys(item)
      .filter((key) => key.includes('Class'))
      .map((_class) => (classes += ` ${item[_class]}`))
    return classes
  },
}

export default HeaderHelper
