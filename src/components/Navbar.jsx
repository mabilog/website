import React from 'react'
import './navbar.scss';

const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href='#home' className='logo'>mabilog.</a>
          <div className="itemContainer">

          </div>
        </div>
        <div className="right">
              <a href="#projects"  className="sidebar__link" >Projects</a>
              <a href="#resume" className="sidebar__link" >Resume</a>
              <a href="#contact"  className="sidebar__link" >Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
