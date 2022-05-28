import React from 'react'
import Item from './item'
import NotFound from '../not-found'

const List = ({ list, searchBoxRef, setDetail }) => {
  // markup method to show results or 404 page
  const markup = () => (
    <React.Fragment>
      {list.data && list.data.length ? (
        <div className='container mx-auto max-w-6xl mt-5'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {list.data.map((item, index) => (
              <Item item={item} key={index} setDetail={setDetail} />
            ))}
          </div>
        </div>
      ) : (
        <NotFound searchBoxRef={searchBoxRef} />
      )}
    </React.Fragment>
  )

  return markup()
}

export default List
