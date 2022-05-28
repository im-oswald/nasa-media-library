import React from 'react'
import List from '../list'
import Summary from '../summary'

const SearchResults = ({
  list,
  setList,
  load,
  setLoad,
  setStartYear,
  setEndYear,
  startYear,
  endYear,
  searchBoxRef,
  setDetail,
  setLoading,
}) => {
  // markup method to show results along with pagination, filters and load option
  const markup = () => (
    <React.Fragment>
      {list.data && (
        <Summary
          list={list}
          setList={setList}
          load={load}
          setLoad={setLoad}
          setStartYear={setStartYear}
          setEndYear={setEndYear}
          isFiltered={startYear || endYear}
          setLoading={setLoading}
        />
      )}
      <List list={list} searchBoxRef={searchBoxRef} setDetail={setDetail} />
    </React.Fragment>
  )

  return markup()
}

export default SearchResults
