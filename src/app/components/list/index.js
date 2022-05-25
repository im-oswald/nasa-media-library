import React from 'react'
import Item from './item'
import NotFound from '../not-found'

const List = ({ list, searchBoxRef }) => {
  const markup = () => (
    <React.Fragment>
      {list.data && list.data.length ? (
        <div className='container mx-auto max-w-6xl mt-5'>
          <div className='grid grid-cols-4 gap-4'>{renderItems(list)}</div>
        </div>
      ) : (
        <NotFound searchBoxRef={searchBoxRef} />
      )}
    </React.Fragment>
  )

  const renderItems = () => {
    let html = []

    list.data.map((item, index) => html.push(<Item item={item} key={index} />))
    html.push()
    return html
  }

  return markup()
}

export default List
