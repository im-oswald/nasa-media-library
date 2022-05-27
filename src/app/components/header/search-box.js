import { useState } from 'react'
import { search } from '../../services/media-service'
import { error } from '../../services/toast'
import ValidationHelper from '../../helpers/validation-helper'

const SearchBox = ({ setList, load, searchBoxRef, setDetail, setLoading }) => {
  const [terms, setTerms] = useState('')

  function onChangeTerms(event) {
    setTerms(event.target.value)
  }

  function searchItems(event) {
    if (event.key !== 'Enter') return

    if (!terms) {
      error(ValidationHelper.fieldRequired(event.target.id))
      return
    }

    setLoading(true)

    search(populateResults, load, terms)

    setTerms('')
  }

  const populateResults = (result) => {
    setList(result)
    setDetail(false, {})
    setLoading(false)
  }

  const markup = () => (
    <div className='md:flex md:w-1/4 items-center space-x-1 py-4'>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='search-box'
        type='text'
        ref={searchBoxRef}
        placeholder='Type and hit enter to search'
        value={terms}
        onChange={onChangeTerms}
        onKeyDown={searchItems}
      />
    </div>
  )

  return markup()
}

export default SearchBox
