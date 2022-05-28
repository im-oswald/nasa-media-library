const BackButton = ({ setDetail }) => {
  // function that will be triggered on back button click
  function goBack() {
    setDetail(false, {})
  }

  // markup method to show back button
  const markup = () => (
    <button
      onClick={goBack}
      className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-flex items-center'
    >
      <svg
        className='h-10 w-10 mr-5'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='256'
        height='256'
        viewBox='0 0 256 256'
      >
        <g transform='translate(128 128) scale(0.72 0.72)'>
          <g
            style={{
              stroke: 'none',
              strokeWidth: 0,
              strokeDasharray: 'none',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              strokeMiterlimit: 10,
              fill: 'none',
              fillRule: 'nonzero',
              opacity: 1,
            }}
            transform='translate(-175.05 -175.05000000000004) scale(3.89 3.89)'
          >
            <path
              d='M 45 90 c 24.853 0 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 S 0 20.147 0 45 C 0 69.853 20.147 90 45 90 z M 21.459 43.791 l 18.366 -18.366 c 0.668 -0.668 1.75 -0.668 2.418 0 l 6.055 6.055 c 0.668 0.668 0.668 1.751 0 2.418 l -5.111 5.11 l 24.144 0 c 0.944 0 1.71 0.766 1.71 1.71 v 8.563 c 0 0.944 -0.766 1.71 -1.71 1.71 l -24.145 0 l 5.111 5.111 c 0.668 0.668 0.668 1.751 0 2.418 l -6.055 6.055 c -0.668 0.668 -1.751 0.668 -2.418 0 L 21.459 46.209 C 20.791 45.541 20.791 44.458 21.459 43.791 z'
              style={{
                stroke: 'none',
                strokeWidth: 1,
                strokeDasharray: 'none',
                strokeLinecap: 'butt',
                strokeLinejoin: 'miter',
                strokeMiterlimit: 10,
                fill: 'rgb(91,160,208)',
                fillRule: 'nonzero',
                opacity: 1,
              }}
              transform=' matrix(1 0 0 1 0 0) '
              strokeLinecap='round'
            />
          </g>
        </g>
      </svg>
      <span>Go back to results page</span>
    </button>
  )

  return markup()
}

export default BackButton
