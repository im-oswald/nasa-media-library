import React from 'react'

const LoadChanger = () => {
  const markup = () => (
    <React.Fragment>
      <div className='md:flex md:items-center'>
        <div className='md:w-full'>
          <label
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='inline-full-name'
          >
            Showing entries per page:
          </label>
        </div>
        <div className='md:3/4'>
          <select className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
            <option></option>
          </select>
        </div>
      </div>
    </React.Fragment>
  )

  return markup()
}

export default LoadChanger
