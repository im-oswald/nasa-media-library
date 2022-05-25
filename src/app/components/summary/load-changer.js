import React from 'react'
import { loadOptions } from '../../constants/pagination-config'

const LoadChanger = ({ load, setLoad, list, setList }) => {
  const renderOptions = () =>
    loadOptions.map((option) => (
      <option key={option} value={option} selected={option == load}>
        {option}
      </option>
    ))

  function setNewLoad(event) {
    setLoad(Number(event.target.value))
  }

  const markup = () => (
    <React.Fragment>
      <div className='md:flex mb-4 md:mb-0 md:mb-0 md:items-center'>
        <div className='md:w-full'>
          <label
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'
            htmlFor='inline-full-name'
          >
            Showing entries per page:
          </label>
        </div>
        <div className='sm:w-1/3'>
          <select
            onChange={setNewLoad}
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
          >
            {renderOptions()}
          </select>
        </div>
      </div>
    </React.Fragment>
  )

  return markup()
}

export default LoadChanger
