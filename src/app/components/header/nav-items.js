import React from 'react'
import HeaderHelper from '../../helpers/header-helper'
import { navItems } from '../../constants/header-config'

const NavItems = () => {
  const renderNavItems = () => {
    let html = []
    navItems.forEach((item) =>
      html.push(
        <li className='list-none'>
          <a
            key={item.id}
            href={item.link}
            target={item.open}
            className={HeaderHelper.joinClasses(item)}
          >
            {item.title}
          </a>
        </li>
      )
    )
    return html
  }

  return <React.Fragment>{renderNavItems()}</React.Fragment>
}

export default NavItems
