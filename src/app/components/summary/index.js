import LoadChanger from './load-changer'
import Pagination from './pagination'
import Filter from './filter'

const Summary = ({
  list,
  setList,
  load,
  setLoad,
  setStartYear,
  setEndYear,
  isFiltered,
}) => {
  const markup = () => (
    <div className='mx-auto p-10 max-w-6xl mt-5 bg-blue-50 rounded-lg'>
      <h1 className='font-medium leading-tight text-xl md:text-3xl mt-0 mb-2 text-blue-600 mb-5'>
        Showing result(s) for &quot;{list.searchedTerms}&quot;
      </h1>
      <div className='flex flex-col md:flex-row justify-between'>
        <div>
          <LoadChanger
            list={list}
            setList={setList}
            load={load}
            setLoad={setLoad}
          />
        </div>
        <div>
          <Filter setStartYear={setStartYear} setEndYear={setEndYear} />
        </div>
        <div>
          <Pagination
            list={list}
            setList={setList}
            load={load}
            isFiltered={isFiltered}
          />
        </div>
      </div>
    </div>
  )

  return markup()
}

export default Summary
