import React from 'react'
import BackButton from './back-button'
import Gallery from './gallery'
import Keywords from './keyword'
import Photographer from './photographer'

const Details = ({ item, setDetail }) => {
  const creator = item.photographer || item.secondary_creator

  const markup = () => (
    <React.Fragment>
      <div className='container mx-auto max-w-6xl mt-5'>
        <BackButton setDetail={setDetail} />
        <Gallery item={item} />
        <Photographer creator={creator} />
        <Keywords keywords={item.keywords} />
      </div>
    </React.Fragment>
  )

  return markup()
}

export default Details
