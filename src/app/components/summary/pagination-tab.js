import PaginationHelper from '../../helpers/pagination-helper'

const PaginationTab = ({ text, selected, changePage }) => {
  // method got triggered when any pagination button is clicked
  function onPageChanged(event) {
    event.preventDefault()
    changePage(text)
  }

  // markup method to show Pagination Buttons
  const markup = () => (
    <li onClick={onPageChanged}>
      <a
        href=''
        className={PaginationHelper.getClasses(selected)}
        id={`page-${text + 1}-btn`}
      >
        {text + 1}
      </a>
    </li>
  )

  return markup()
}

export default PaginationTab
