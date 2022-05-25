import { maxLoadOfRequest } from '../constants/pagination-config'

export const digViaAttributes = (object, linkAttr, dataAttr) => {
  let results = []
  object.map((data) =>
    results.push({
      ...data[dataAttr][0],
      ...data.links.filter((link) => link.rel == linkAttr)[0],
    })
  )

  return results
}

export const filterAttributes = (type, data, value) =>
  data.filter((entry) =>
    type.includes('start')
      ? extractYear(entry.date_created) >= value
      : extractYear(entry.date_created) <= value
  )

export const extractYear = (dateString) => dateString.split('-')[0]

export const textFromId = (id) =>
  id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')

export const extractEntriesForPage = (data, page, entriesPerPage) =>
  data.slice(page * entriesPerPage - entriesPerPage, page * entriesPerPage)

export const evaluatePageForApi = (page, entriesPerPage) =>
  Math.trunc(page / noOfPagesPerRequest(entriesPerPage)) + 1

export const evaluatePageForResponse = (page, entriesPerPage) =>
  Math.trunc(page % noOfPagesPerRequest(entriesPerPage))

export const paginationStart = (currentPage, load) =>
  Math.trunc(currentPage / noOfPagesPerRequest(load)) *
  noOfPagesPerRequest(load)

export const paginationEnd = (currentPage, load, totalPages) =>
  paginationStart(currentPage, load) + totalPages

export const noOfPagesPerRequest = (entriesPerPage) =>
  maxLoadOfRequest / entriesPerPage
