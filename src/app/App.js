import React, { useState, useRef } from 'react'
import Header from './components/header'
import { Toaster } from 'react-hot-toast'
import List from './components/list'
import { alertPosition } from './constants/alert-config'
import Summary from './components/summary'
import { defaultEntriesPerPage } from './constants/pagination-config'

const App = () => {
  const [list, setList] = useState({})
  const [load, setLoad] = useState(defaultEntriesPerPage)
  const mobileNav = useRef(null)

  const markup = () => (
    <React.Fragment>
      <Header mobileNav={mobileNav} setList={setList} load={load} />
      <Summary list={list} setList={setList} load={load} setLoad={setLoad} />
      <List mobileNav={mobileNav} list={list} />

      <Toaster position={alertPosition} />
    </React.Fragment>
  )

  return markup()
}

export default App
