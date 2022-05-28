import React from 'react'

const Photographer = ({ creator }) => {
  // markup method to show photographer name
  const markup = () => (
    <React.Fragment>
      {creator && (
        <div className='md:w-1/2 max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='flex p-5 items-center'>
              <img
                alt='photographer'
                className='w-10 h-10 rounded-full mr-4'
                src='/assets/icons/photographer.svg'
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>{creator}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )

  return markup()
}

export default Photographer
