const CollectionHelper = {
  getSmallImage: (collection) =>
    collection.filter((item) => item.includes('small.jpg'))[0],
  getMediumImage: (collection) =>
    collection.filter((item) => item.includes('medium.jpg'))[0],
  getLargeImage: (collection) =>
    collection.filter((item) => item.includes('large.jpg'))[0],
  getThumbnail: (collection) =>
    collection.filter((item) => item.includes('thumb.jpg'))[0],
  getOriginalImage: (collection) =>
    collection.filter((item) => item.includes('orig.jpg'))[0],
}

export default CollectionHelper
