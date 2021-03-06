import React from 'react'
import Moment from 'react-moment'

const CreatedDate = ({ date_created }) => {
  // markup method to show date_created on details page
  const markup = () => (
    // show only if dat_created is present
    <React.Fragment>
      {date_created && (
        <div className='md:w-1/2 max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='flex p-5 items-center'>
              <img
                alt='date_created'
                className='w-10 h-10 rounded-full mr-4'
                src='/assets/icons/clock.svg'
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>
                  <Moment date={date_created} durationFromNow /> ago
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )

  return markup()
}

export default CreatedDate
