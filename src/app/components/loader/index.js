import React from 'react'

const Loader = ({ loading }) => {
  // markup method to show loader when API is busy
  const markup = () => (
    <React.Fragment>
      {loading && (
        <div
          id='loading-screen'
          className='w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50'
        >
          <span className='text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0'>
            <i className='fas fa-circle-notch fa-spin fa-5x'></i>
          </span>
        </div>
      )}
    </React.Fragment>
  )

  return markup()
}

export default Loader
