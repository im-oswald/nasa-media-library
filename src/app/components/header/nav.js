import Logo from './logo.js'
import MobileMenuButton from './mobile-menu-button.js'
import NavItems from './nav-items.js'
import SearchBox from './search-box.js'

const Nav = ({ toggleMenu }) => {
  const markup = (toggleMenu) => (
    <div className='mx-auto px-4'>
      <div className='flex justify-between'>
        <div className='flex space-x-7'>
          <Logo />
        </div>

        <SearchBox />

        <div className='hidden md:flex items-center space-x-3'>
          <NavItems />
        </div>

        <MobileMenuButton toggleMenu={toggleMenu} />
      </div>
    </div>
  )

  return markup(toggleMenu)
}

export default Nav
