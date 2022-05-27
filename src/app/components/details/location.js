import React from 'react'

const Location = ({ location }) => {
  const markup = () => (
    <React.Fragment>
      {location && (
        <div className='md:w-1/2 max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='flex p-5 items-center'>
              <img
                className='w-10 h-10 rounded-full mr-4'
                src='/assets/icons/location.svg'
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>{location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )

  return markup()
}

export default Location
