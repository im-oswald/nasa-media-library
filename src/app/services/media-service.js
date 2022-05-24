import { nasaApi } from '../api'
import { imageKeyword, defaultImagePicker } from '../constants/api-config'
import { error } from './toast'
import {
  digViaAttribute,
  extractEntriesForPage,
  evaluatePageForApi,
  evaluatePageForResponse,
} from '../utils'

export const search = (
  callback,
  entriesPerPage,
  terms = '',
  page = 1,
  onlyImages = true
) => {
  let query = `q=${terms}&page=${evaluatePageForApi(page, entriesPerPage)}`
  try {
    if (onlyImages) {
      query += `&media_type=${imageKeyword}`
    }
    nasaApi.get(`/search?${query}`).then((res) => {
      let response = res.data.collection
      let data = digViaAttribute(response.items, defaultImagePicker)

      callback({
        links: response.links,
        data: extractEntriesForPage(
          data,
          evaluatePageForResponse(page, entriesPerPage),
          entriesPerPage
        ),
        currentPage: page,
        totalPages: Math.ceil(data.length / entriesPerPage),
        searchedTerms: terms,
      })
    })
  } catch (err) {
    error(err.message)
  }
}
