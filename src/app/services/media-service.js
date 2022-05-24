import { nasaApi } from '../api'
import { imageKeyword, defaultImagePicker } from '../constants/api-config'
import { defaultEntriesPerPage } from '../constants/pagination-config'
import { error } from './toast'
import { digViaAttribute, extractEntriesForPage } from '../utils'

export const search = (
  callback,
  terms = '',
  page = 1,
  entriesPerPage = defaultEntriesPerPage,
  onlyImages = true
) => {
  let query = `q=${terms}&page=${page}`
  try {
    if (onlyImages) {
      query += `&media_type=${imageKeyword}`
    }
    nasaApi.get(`/search?${query}`).then((res) => {
      let response = res.data.collection
      let data = digViaAttribute(response.items, defaultImagePicker)
      callback({
        links: response.links,
        data: extractEntriesForPage(data, page, entriesPerPage),
        currentPage: page,
        totalPages: Math.ceil(data.length / entriesPerPage),
        searchedTerms: terms,
      })
    })
  } catch (err) {
    error(err)
  }
}
