import ValidationHelper from '../../helpers/validation-helper'
import { error } from '../../services/toast'

const Filter = ({ setStartYear, setEndYear }) => {
  function setYear({ target }) {
    if (ValidationHelper.validYear(target.value)) {
      target.id.includes('start')
        ? setStartYear(target.value)
        : setEndYear(target.value)
    } else {
      error('Please enter a valid year')
    }
  }

  const markup = () => (
    <div className='flex'>
      <div className='mb-4 mr-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='start-year'
          type='number'
          onBlur={setYear}
          placeholder='Year Start'
        />
      </div>

      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          id='end-year'
          type='number'
          onBlur={setYear}
          placeholder='Year End'
        />
      </div>
    </div>
  )

  return markup()
}

export default Filter
