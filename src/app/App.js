import React, { useState, useRef } from 'react'
import Header from './components/header'
import { Toaster } from 'react-hot-toast'
import List from './components/list'
import { alertPosition } from './constants/alert-config'
import Summary from './components/summary'

const App = () => {
  const [list, setList] = useState({})
  const mobileNav = useRef(null)

  const markup = () => (
    <React.Fragment>
      <Header mobileNav={mobileNav} setList={setList} />
      <Summary list={list} setList={setList} />
      <List mobileNav={mobileNav} list={list} />

      <Toaster position={alertPosition} />
    </React.Fragment>
  )

  return markup()
}

export default App
