import React from 'react'
import HeaderHelper from '../../helpers/header-helper'
import { navItems } from '../../constants/header-config'

const NavItems = () => {
  // helper component to show individual nav item
  const NavItem = ({ item }) => {
    return (
      <li key={item.id} className='list-none'>
        <a
          href={item.link}
          target={item.open}
          className={HeaderHelper.joinClasses(item)}
        >
          {item.title}
        </a>
      </li>
    )
  }

  // markup method to show nav items for navigation
  const markup = () => (
    <React.Fragment>
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </React.Fragment>
  )

  return markup()
}

export default NavItems
