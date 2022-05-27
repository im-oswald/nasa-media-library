import React, { useState, useRef, useEffect } from 'react'
import Header from './components/header'
import { Toaster } from 'react-hot-toast'
import { alertPosition } from './constants/alert-config'
import { defaultEntriesPerPage } from './constants/pagination-config'
import { search } from './services/media-service'
import SearchResults from './components/search-results'
import Details from './components/details'
import Loader from './components/loader'

const App = () => {
  const [list, setList] = useState({})
  const [load, setLoad] = useState(defaultEntriesPerPage)
  const [startYear, setStartYear] = useState(null)
  const [endYear, setEndYear] = useState(null)
  const [isDetail, setIsDetail] = useState(false)
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)
  const mobileNav = useRef(null)
  const searchBoxRef = useRef(null)

  useEffect(() => {
    if (list.searchedTerms) {
      search(
        setList,
        load,
        list.searchedTerms,
        list.currentPage,
        startYear,
        endYear
      )
    }
  }, [setList, load, list.searchedTerms, list.currentPage, startYear, endYear])

  function setDetail(isDetail, item) {
    setIsDetail(isDetail)
    setItem(item)
  }

  const markup = () => (
    <React.Fragment>
      <Header
        mobileNav={mobileNav}
        setList={setList}
        load={load}
        searchBoxRef={searchBoxRef}
        setDetail={setDetail}
        setLoading={setLoading}
      />
      {!isDetail && (
        <SearchResults
          list={list}
          setList={setList}
          load={load}
          setLoad={setLoad}
          setStartYear={setStartYear}
          setEndYear={setEndYear}
          startYear={startYear}
          endYear={endYear}
          searchBoxRef={searchBoxRef}
          setDetail={setDetail}
          setLoading={setLoading}
        />
      )}

      {isDetail && <Details item={item} setDetail={setDetail} />}

      <Toaster position={alertPosition} />
      <Loader loading={loading} />
    </React.Fragment>
  )

  return markup()
}

export default App
