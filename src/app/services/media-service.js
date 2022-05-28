import { nasaApi } from '../api'
import {
  imageKeyword,
  defaultImagePicker,
  defaultDataPicker,
  apiBaseUrl,
} from '../constants/api-config'
import { error } from './toast'
import {
  digViaAttributes,
  extractEntriesForPage,
  evaluatePageForApi,
  evaluatePageForResponse,
  filterAttributes,
  filterImageFiles,
} from '../utils'

// method being used for showing results with pagination
export const search = (
  callback,
  entriesPerPage,
  terms = '',
  page = 0,
  startYear = null,
  endYear = null,
  onlyImages = true
) => {
  let query = `q=${terms}&page=${evaluatePageForApi(page, entriesPerPage)}`
  try {
    // include specific media type in query
    if (onlyImages) {
      query += `&media_type=${imageKeyword}`
    }

    // make GET request to NASA API's search endpoint
    nasaApi.get(`/search?${query}`).then((res) => {
      // fetch results - NASA API is following this structure for forming results
      let response = res.data.collection

      // digViaAttributes helps in shaping data into single object by deeping dive
      // into multiple objects from response
      let data = digViaAttributes(
        response.items,
        defaultImagePicker,
        defaultDataPicker
      )

      // filterAttributes help in filtering the data using js code
      if (startYear) {
        data = filterAttributes('startYear', data, startYear)
      }

      // filterAttributes help in filtering the data using js code
      if (endYear) {
        data = filterAttributes('endYear', data, endYear)
      }

      // callback is the method from the component passed where this service is being
      // called and is supposed to through all the data back to component when ready
      // NASA API supports pagination of 100 items per request, but this code supports in-project pagination algo of dynamic load
      // that can be changed from frontend so extractEntriesForPage help in getting only those entries needed for our current page
      // and evaluatePageForResponse helps in showing the next/previous pages links for current page
      callback({
        links: response.links,
        data: extractEntriesForPage(
          data,
          evaluatePageForResponse(page, entriesPerPage) + 1,
          entriesPerPage
        ),
        currentPage: page,
        totalPages: Math.ceil(data.length / entriesPerPage),
        searchedTerms: terms,
        startYear: startYear,
        endYear: endYear,
      })
    })
  } catch (err) {
    // show alert in case of error
    error(err.message)
  }
}

// method that got triggered from details page only and fetch all images
export const getCollection = (callback, url) => {
  try {
    // make GET request to NASA ASSETS to fetch images
    nasaApi.get(url.split(apiBaseUrl).join('')).then((res) => {
      // callback is the method from the component passed where this service is being
      // called and is supposed to through all the data back to component when readys
      callback(filterImageFiles(res.data))
    })
  } catch (err) {
    // show alert in case of error
    error(err.message)
  }
}
