import React from 'react'

const Photographer = ({ creator }) => {
  const markup = () => (
    <React.Fragment>
      {creator && (
        <section className='overflow-hidden text-gray-700'>
          <div className='container px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
              <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
                <div className='flex p-5 items-center'>
                  <img
                    className='w-10 h-10 rounded-full mr-4'
                    src='/assets/icons/photographer.png'
                  />
                  <div className='text-sm'>
                    <p className='text-gray-900 leading-none'>{creator}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  )

  return markup()
}

export default Photographer
