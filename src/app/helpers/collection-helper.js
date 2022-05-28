// Helper to process images collection to show specific image in gallery
const CollectionHelper = {
  // pull out small image url from collection on details page
  getSmallImage: (collection) =>
    collection.filter((item) => item.includes('small.jpg'))[0],
  // pull out medium image url from collection on details page
  getMediumImage: (collection) =>
    collection.filter((item) => item.includes('medium.jpg'))[0],
  // pull out large image url from collection on details page
  getLargeImage: (collection) =>
    collection.filter((item) => item.includes('large.jpg'))[0],
  // pull out thumbnail url from collection on details page
  getThumbnail: (collection) =>
    collection.filter((item) => item.includes('thumb.jpg'))[0],
  // pull out original image url from collection on details page
  getOriginalImage: (collection) =>
    collection.filter((item) => item.includes('orig.jpg'))[0],
}

export default CollectionHelper
