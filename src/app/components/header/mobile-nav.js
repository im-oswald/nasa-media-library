import NavItems from './nav-items'

const MobileNav = ({ mobileNav }) => {
  // markup method to show navigation on mobile screens
  const markup = (mobileNav) => (
    <div ref={mobileNav} className='hidden mobile-menu'>
      <ul className='h-24 grid flex justify-center content-around'>
        <NavItems />
      </ul>
    </div>
  )

  return markup(mobileNav)
}

export default MobileNav
