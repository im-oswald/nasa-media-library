import PaginationTab from './pagination-tab'
import { search } from '../../services/media-service'
import { paginationStart, paginationEnd } from '../../utils'
import { error } from '../../services/toast'

const Pagination = ({ list, setList, load, isFiltered, setLoading }) => {
  // method got triggered from child Tab component to fetch new results
  function changePage(page) {
    setLoading(true)
    search(
      checkList,
      load,
      list.searchedTerms,
      page,
      list.startYear,
      list.endYear
    )
  }

  // method got triggered when Previous pagination button clicked
  function previousPage(event) {
    event.preventDefault()

    if ([undefined, 0].includes(list.currentPage)) {
      error('No previous page found')
      return
    }

    setLoading(true)
    search(checkList, load, list.searchedTerms, list.currentPage - 1)
  }

  // method got triggered when next pagination button clicked
  function nextPage(event) {
    event.preventDefault()

    if (list.currentPage == undefined) {
      error('No next page found')
      return
    }

    setLoading(true)
    search(checkList, load, list.searchedTerms, list.currentPage + 1)
  }

  // callback function to fetch results and update it to parent components
  const checkList = (result) => {
    if (result.data.length) {
      setLoading(false)
      setList(result)
    } else {
      error('No data found on given page')
    }
  }

  // helper child component to show all pagination numbered tabs
  const getPaginationTabs = () => {
    let html = []
    for (
      // helper function paginationStart that calculates what should be starting of numbers
      let currentTab = paginationStart(list.currentPage, load);
      // helper function paginationEnd that calculates where should this pagination go
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

  // markup method to show Pagination bar
  const markup = () => (
    <nav className='pt-2'>
      <ul className='inline-flex -space-x-px'>
        {!isFiltered && (
          <li>
            <a
              href=''
              id='next-btn'
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
              href=''
              id='previous-btn'
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
