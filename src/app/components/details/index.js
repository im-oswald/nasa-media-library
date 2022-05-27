import React from 'react'
import BackButton from './back-button'
import CreatedDate from './created-date'
import Gallery from './gallery'
import Keywords from './keyword'
import Location from './location'
import Photographer from './photographer'

const Details = ({ item, setDetail }) => {
  const creator = item.photographer || item.secondary_creator

  const markup = () => (
    <React.Fragment>
      <div className='container mx-auto max-w-6xl mt-5'>
        <section className='overflow-hidden text-gray-700'>
          <div className='container px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
            <BackButton setDetail={setDetail} />
            <h1 className='font-medium leading-tight text-xl md:text-3xl mt-5 mb-2 mb-5'>
              {item.title}
            </h1>
            <Gallery item={item} />
            <p className='mt-5 mb-5'>{item.description}</p>
            <div className='flex flex-col md:flex-row justify-between'>
              <Photographer creator={creator} />
              <Keywords keywords={item.keywords} />
            </div>
            <div className='flex flex-col md:flex-row justify-between'>
              <Location location={item.location} />
              <CreatedDate date_created={item.date_created} />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  )

  return markup()
}

export default Details
