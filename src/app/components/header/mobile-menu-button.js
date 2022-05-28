const MobileMenuButton = ({ toggleMenu }) => {
  // markup method to show menu button for mobile screens
  const markup = (toggleMenu) => (
    <div className='md:hidden flex items-center'>
      <button className='outline-none mobile-menu-button' onClick={toggleMenu}>
        <svg
          className='w-6 h-6 text-gray-500 hover:text-green-500'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path d='M4 6h16M4 12h16M4 18h16'></path>
        </svg>
      </button>
    </div>
  )

  return markup(toggleMenu)
}

export default MobileMenuButton
