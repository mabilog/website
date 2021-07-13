import React from 'react'
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href='/'>angelo mabilog</a>
      <ul>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
