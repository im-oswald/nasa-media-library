import React, { useEffect, useState } from 'react'
import CollectionHelper from '../../helpers/collection-helper'
import { getCollection } from '../../services/media-service'

const Gallery = ({ item }) => {
  const [collection, setCollection] = useState([])
  const smallImage = CollectionHelper.getSmallImage(collection)
  const mediumImage = CollectionHelper.getMediumImage(collection)
  const largeImage = CollectionHelper.getLargeImage(collection)
  const thumbnail = CollectionHelper.getThumbnail(collection)
  const originalImage = CollectionHelper.getOriginalImage(collection)

  useEffect(() => {
    if (item) {
      getCollection(setCollection, item.collection)
    }
  }, [item])

  const Image = ({ title, src, alt }) => {
    return (
      <img
        alt={alt}
        className='block object-cover object-center w-full h-full rounded-lg'
        src={src}
        title={title}
      />
    )
  }

  const markup = () => (
    <React.Fragment>
      <div className='flex flex-wrap -m-1 md:-m-2'>
        <div className='flex flex-wrap w-1/2'>
          {smallImage && (
            <div className='w-1/2 p-1 md:p-2'>
              <Image
                title='Small Variant'
                src={smallImage}
                alt='small-variant'
              />
            </div>
          )}
          {thumbnail && (
            <div className='w-1/2 p-1 md:p-2'>
              <Image title='Thumbnail' src={thumbnail} alt='thumbnail' />
            </div>
          )}
          {originalImage && (
            <div className='w-full p-1 md:p-2'>
              <Image
                title='Original Variant'
                src={originalImage}
                alt='original-variant'
              />
            </div>
          )}
        </div>
        <div className='flex flex-wrap w-1/2'>
          {mediumImage && (
            <div className='w-full p-1 md:p-2'>
              <Image
                title='Medium Variant'
                src={mediumImage}
                alt='medium-variant'
              />
            </div>
          )}
          {largeImage && (
            <div className='w-full p-1 md:p-2'>
              <Image
                title='Large Variant'
                src={largeImage}
                alt='large-variant'
              />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )

  return markup()
}

export default Gallery
