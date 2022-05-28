import { maxLoadOfRequest } from '../constants/pagination-config'

// NASA API returns data into multi-level objects
// digViaAttributes helps in shaping data into single object by deeping dive
// into multiple objects from response
export const digViaAttributes = (
  object,
  linkAttr,
  dataAttr,
  collectionLink = 'href'
) => {
  let results = []
  object.map((data) =>
    results.push({
      ...data[dataAttr][0],
      ...data.links.filter((link) => link.rel == linkAttr)[0],
      collection: data[collectionLink],
    })
  )

  return results
}

// filterAttributes help in filtering response either for startYEar
// or for endYear - this method should work for both
export const filterAttributes = (type, data, value) =>
  data.filter((entry) =>
    type.includes('start')
      ? extractYear(entry.date_created) >= value
      : extractYear(entry.date_created) <= value
  )

// JS helper code to extract year from format: YYYY-mm-ddT13:12:30Z
export const extractYear = (dateString) => dateString.split('-')[0]

// JS helper code to covert slug into readable text
export const textFromId = (id) =>
  id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')

// NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
// that can be changed from frontend so extractEntriesForPage help in getting only those entries needed for our current page
export const extractEntriesForPage = (data, page, entriesPerPage) =>
  data.slice(page * entriesPerPage - entriesPerPage, page * entriesPerPage)

// NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
// that can be changed from frontend so evaluatePageForApi help in getting page number that needs to be requested from NASA API
// because page 2 with load 20 is page 1 for NASA API
// similary page 12 with load 20 is page 3 for NASA API
export const evaluatePageForApi = (page, entriesPerPage) =>
  Math.trunc(page / noOfPagesPerRequest(entriesPerPage)) + 1

// NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
// that can be changed from frontend so evaluatePageForResponse help in getting page number that needs to be displayed
// because page 2 with load 20 is page 1 for NASA API
// similary page 12 with load 20 is page 3 for NASA API
export const evaluatePageForResponse = (page, entriesPerPage) =>
  Math.trunc(page % noOfPagesPerRequest(entriesPerPage))

// NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
// that can be changed from frontend so paginationStart help in getting start page number where pagination tabs should start with
// because page 2 with load 20 is page 1 for NASA API
// similary page 12 with load 20 is page 3 for NASA API
export const paginationStart = (currentPage, load) =>
  Math.trunc(currentPage / noOfPagesPerRequest(load)) *
  noOfPagesPerRequest(load)

// NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
// that can be changed from frontend so paginationEnd help in getting end page number where pagination tabs should end with
// because page 2 with load 20 is page 1 for NASA API
// similary page 12 with load 20 is page 3 for NASA API
export const paginationEnd = (currentPage, load, totalPages) =>
  paginationStart(currentPage, load) + totalPages

// NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
// that can be changed from frontend so noOfPagesPerRequest help in getting pages our application show in this response
// because page 2 with load 20 is page 1 for NASA API
// similary page 12 with load 20 is page 3 for NASA API
// for some results data is not in multiples of 100 so noOfPagesPerRequest handle such cases
export const noOfPagesPerRequest = (entriesPerPage) =>
  maxLoadOfRequest / entriesPerPage

// Collection that we get from NASA have image files along with 1 metadata file
// so this method helps in filtering image files
export const filterImageFiles = (data) =>
  data.filter((item) => !item.includes('.json'))
