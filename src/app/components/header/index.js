import { useRef } from 'react'
import MobileNav from './mobile-nav'
import Nav from './nav'

const Header = () => {
  const mobileNav = useRef(null)

  const markup = (mobileNav) => (
    <nav className='bg-white shadow-lg'>
      <Nav toggleMenu={toggleMenu} />
      <MobileNav mobileNav={mobileNav} />
    </nav>
  )

  const toggleMenu = () => {
    mobileNav.current?.classList.toggle('hidden')
  }

  return markup(mobileNav)
}

export default Header
