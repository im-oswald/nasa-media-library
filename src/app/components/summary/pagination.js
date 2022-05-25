import PaginationTab from './pagination-tab'
import { search } from '../../services/media-service'
import { paginationStart, paginationEnd } from '../../utils'
import { error } from '../../services/toast'

const Pagination = ({ list, setList, load, isFiltered }) => {
  function changePage(page) {
    search(
      setList,
      load,
      list.searchedTerms,
      page,
      list.startYear,
      list.endYear
    )
  }

  function previousPage(event) {
    event.preventDefault()

    if ([undefined, 0].includes(list.currentPage)) {
      error('No previous page found')
      return
    }

    search(setList, load, list.searchedTerms, list.currentPage - 1)
  }

  function nextPage(event) {
    event.preventDefault()

    if (list.currentPage == undefined) {
      error('No next page found')
      return
    }

    search(checkList, load, list.searchedTerms, list.currentPage + 1)
  }

  const checkList = (result) => {
    if (result.data.length) {
      setList(result)
    } else {
      error('No next page found')
    }
  }

  const getPaginationTabs = () => {
    let html = []
    for (
      let currentTab = paginationStart(list.currentPage, load);
      currentTab < paginationEnd(list.currentPage, load, list.totalPages);
      currentTab++
    ) {
      html.push(
        <PaginationTab
          key={currentTab}
          selected={currentTab == list.currentPage}
          text={currentTab}
          changePage={changePage}
        />
      )
    }
    return html
  }

  const markup = () => (
    <nav className='pt-2'>
      <ul className='inline-flex -space-x-px'>
        {!isFiltered && (
          <li>
            <a
              href='#'
              onClick={previousPage}
              className='py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Previous
            </a>
          </li>
        )}
        {getPaginationTabs(list)}
        {!isFiltered && (
          <li>
            <a
              href='#'
              onClick={nextPage}
              className='py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  )

  return markup()
}

export default Pagination
