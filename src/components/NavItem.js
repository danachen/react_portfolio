import React from 'react'

const NavItem = ({title, href}) => {
  return (
    <div>
      <li className="nav-item">
        <a href={href} className="# nav-link">{title}</a>
      </li>
    </div>
  )
}

export default NavItem