import PaginationHelper from '../../helpers/pagination-helper'

const PaginationTab = ({ text, selected, changePage }) => {
  function onPageChanged(event) {
    event.preventDefault()
    changePage(text)
  }

  const markup = () => (
    <li onClick={onPageChanged}>
      <a href='' className={PaginationHelper.getClasses(selected)}>
        {text}
      </a>
    </li>
  )

  return markup()
}

export default PaginationTab
