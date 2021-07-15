import React from 'react'
import './navbar.scss';
import {Person, Mail} from '@material-ui/icons'
const Navbar = () => {
  return (
    <div className="navbar active">
      <div className="wrapper">
        <div className="left">
          <a href='#home' className='logo'>mabilog.</a>
          <div className="itemContainer">

          </div>
        </div>
        <div className="right">
          <div className="personal__info">
            <Person className='icon icon__person pInfo'/>
            <span id="pInfo">(514)638-7661</span>
            <Mail className='icon icon__mail pInfo'/>
            <span id="pInfo">g.angelo.m@gmail.com</span>
          </div>
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

            {/* <a href="#resume" className="scroll-links">Resume</a>
            <a href="#projects" className="scroll-links">Projects</a>
            <a href="#contact" className="scroll-links">Contact</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
