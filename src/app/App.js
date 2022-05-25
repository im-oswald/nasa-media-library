import React, { useState, useRef, useEffect } from 'react'
import Header from './components/header'
import { Toaster } from 'react-hot-toast'
import List from './components/list'
import { alertPosition } from './constants/alert-config'
import Summary from './components/summary'
import { defaultEntriesPerPage } from './constants/pagination-config'
import { search } from './services/media-service'

const App = () => {
  const [list, setList] = useState({})
  const [load, setLoad] = useState(defaultEntriesPerPage)
  const [startYear, setStartYear] = useState(null)
  const [endYear, setEndYear] = useState(null)
  const mobileNav = useRef(null)

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

  const markup = () => (
    <React.Fragment>
      <Header mobileNav={mobileNav} setList={setList} load={load} />
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
      <List mobileNav={mobileNav} list={list} />

      <Toaster position={alertPosition} />
    </React.Fragment>
  )

  return markup()
}

export default App
