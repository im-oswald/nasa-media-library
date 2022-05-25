const Logo = () => {
  const markup = () => (
    <div>
      <a href='/' className='flex items-center py-4 px-2'>
        <img
          src='/assets/icons/favicon.png'
          alt='Logo'
          className='h-8 w-8 mr-2'
        />
        <span className='hidden md:flex font-semibold text-gray-500 text-lg'>
          Media Library
        </span>
      </a>
    </div>
  )

  return markup()
}

export default Logo
