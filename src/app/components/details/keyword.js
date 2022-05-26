import React from 'react'

const Keywords = ({ keywords }) => {
  const renderKeywords = () => {
    let html = []
    keywords.map((keyword) =>
      html.push(
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {keyword}
        </span>
      )
    )
    return html
  }

  const markup = () => (
    <React.Fragment>
      {keywords.length && (
        <section className='overflow-hidden text-gray-700'>
          <div className='container px-5 py-2 mx-auto lg:pt-24 lg:px-32'>
            <div className='max-w-sm rounded overflow-hidden shadow-lg'>
              <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
                <div className='px-6 pt-4 pb-2'>
                  <span className='font-bold mr-1'>Tags: </span>{' '}
                  {renderKeywords()}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  )

  return markup()
}

export default Keywords
