// default load that results page should show responses with
export const defaultEntriesPerPage = 20
// options in which load can be managed - changable from frontend
export const loadOptions = [20, 50, 100]
// combination of classes that highlights current pagination tab
export const selectedPageClassList =
  'py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
// combination of classes for other than current pagination tabs
export const nonSelectedPageClassList =
  'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
// tailwind class for elements which are supposed to be disabled
export const disabledClass = 'cursor-not-allowed'
// NASA API max response size
export const maxLoadOfRequest = 100
