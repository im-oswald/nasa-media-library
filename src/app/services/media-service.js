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
    if (onlyImages) {
      query += `&media_type=${imageKeyword}`
    }
    nasaApi.get(`/search?${query}`).then((res) => {
      let response = res.data.collection
      let data = digViaAttributes(
        response.items,
        defaultImagePicker,
        defaultDataPicker
      )

      if (startYear) {
        data = filterAttributes('startYear', data, startYear)
      }

      if (endYear) {
        data = filterAttributes('endYear', data, endYear)
      }

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
    error(err.message)
  }
}

export const getCollection = (callback, url) => {
  try {
    nasaApi.get(url.split(apiBaseUrl).join('')).then((res) => {
      callback(filterImageFiles(res.data))
    })
  } catch (err) {
    error(err.message)
  }
}
