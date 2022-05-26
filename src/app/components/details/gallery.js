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

  const markup = () => (
    <React.Fragment>
      <section className='overflow-hidden text-gray-700'>
        <div className='container px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
          <div className='flex flex-wrap -m-1 md:-m-2'>
            <div className='flex flex-wrap w-1/2'>
              {smallImage && (
                <div className='w-1/2 p-1 md:p-2'>
                  <img
                    alt='small-variant'
                    className='block object-cover object-center w-full h-full rounded-lg'
                    src={smallImage}
                    title='Small Variant'
                  />
                </div>
              )}
              {thumbnail && (
                <div className='w-1/2 p-1 md:p-2'>
                  <img
                    alt='thumbnail'
                    className='block object-cover object-center w-full h-full rounded-lg'
                    src={thumbnail}
                    title='Thumbnail'
                  />
                </div>
              )}
              {originalImage && (
                <div className='w-full p-1 md:p-2'>
                  <img
                    alt='original-variant'
                    className='block object-cover object-center w-full h-full rounded-lg'
                    src={originalImage}
                    title='Original Variant'
                  />
                </div>
              )}
            </div>
            <div className='flex flex-wrap w-1/2'>
              {mediumImage && (
                <div className='w-full p-1 md:p-2'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center w-full h-full rounded-lg'
                    src={mediumImage}
                    title='Medium Variant'
                  />
                </div>
              )}
              {largeImage && (
                <div className='w-full p-1 md:p-2'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center w-full h-full rounded-lg'
                    src={largeImage}
                    title='Large Variant'
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )

  return markup()
}

export default Gallery
