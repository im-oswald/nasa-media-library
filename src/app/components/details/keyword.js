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
        <div className='md:w-1/2 max-w-sm rounded overflow-hidden shadow-lg'>
          <div className='cursor-pointer h-full max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='flex p-5 items-center'>
              <img
                className='w-10 h-10 rounded-full mr-4'
                src='/assets/icons/tag.svg'
              />
              <div className='text-sm'>
                <p className='text-gray-900 leading-none'>{renderKeywords()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )

  return markup()
}

export default Keywords
