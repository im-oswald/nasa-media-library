import MobileNav from './mobile-nav'
import Nav from './nav'

const Header = ({
  setList,
  mobileNav,
  load,
  searchBoxRef,
  setDetail,
  setLoading,
}) => {
  const markup = () => (
    <nav className='bg-white shadow-lg'>
      <Nav
        toggleMenu={toggleMenu}
        setList={setList}
        load={load}
        searchBoxRef={searchBoxRef}
        setDetail={setDetail}
        setLoading={setLoading}
      />
      <MobileNav mobileNav={mobileNav} />
    </nav>
  )

  const toggleMenu = () => {
    mobileNav.current?.classList.toggle('hidden')
  }

  return markup()
}

export default Header
