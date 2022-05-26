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
}) => {
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
        />
      )}
      <List list={list} searchBoxRef={searchBoxRef} setDetail={setDetail} />
    </React.Fragment>
  )

  return markup()
}

export default SearchResults
