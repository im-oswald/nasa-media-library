const SearchBox = () => {
  const markup = () => (
    <div className='md:flex md:w-1/4 items-center space-x-1 py-4'>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id='search-box'
        type='text'
        placeholder='Search'
      />
    </div>
  )

  return markup()
}

export default SearchBox
