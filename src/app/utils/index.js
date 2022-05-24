export const digViaAttribute = (object, attrName) => {
  let results = []
  object.forEach((data) => {
    results.push(data.links.filter((link) => link.rel == attrName)[0])
  })
  return results
}

export const textFromId = (id) =>
  id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')

export const extractEntriesForPage = (data, page, entriesPerPage) =>
  data.slice(page * entriesPerPage - entriesPerPage, page * entriesPerPage)

export const evaluatePage = () => {}
