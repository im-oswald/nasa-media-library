import PaginationTab from './pagination-tab'
import { search } from '../../services/media-service'

const Pagination = ({ list, setList }) => {
  function changePage(page) {
    search(setList, list.searchedTerms, page)
  }

  const getPaginationTabs = () => {
    let html = []
    for (let i = 0; i < list.totalPages; i++) {
      html.push(
        <PaginationTab
          selected={i + 1 == list.currentPage}
          text={i + 1}
          changePage={changePage}
        />
      )
    }
    return html
  }

  const markup = () => (
    <nav>
      <ul className='inline-flex -space-x-px'>
        <li>
          <a
            href='#'
            className='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Previous
          </a>
        </li>
        {getPaginationTabs(list)}
        <li>
          <a
            href='#'
            className='py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )

  return markup()
}

export default Pagination
