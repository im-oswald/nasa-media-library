import Logo from './logo.js'
import MobileMenuButton from './mobile-menu-button.js'
import NavItems from './nav-items.js'
import SearchBox from './search-box.js'

const Nav = ({ toggleMenu, setList, load, searchBoxRef }) => {
  const markup = () => (
    <div className='mx-auto px-4'>
      <div className='flex justify-between'>
        <div className='flex space-x-7'>
          <Logo />
        </div>

        <SearchBox setList={setList} load={load} searchBoxRef={searchBoxRef} />

        <div className='hidden md:flex items-center space-x-3'>
          <NavItems />
        </div>

        <MobileMenuButton toggleMenu={toggleMenu} />
      </div>
    </div>
  )

  return markup()
}

export default Nav
