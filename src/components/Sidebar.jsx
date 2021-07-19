import React from 'react'
import './sidebar.scss'

const Sidebar = ({menuOpen, setMenuOpen}) => {

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <ul className="sidebar__list">
        <li>
          <a href="#home" className="sidebar__link" onClick={handleClick}>mabilog.</a>
        </li>
        <li>
          <a href="#projects"  className="sidebar__link" onClick={handleClick}>Projects</a>
        </li>
        <li>
          <a href="#resume" className="sidebar__link" onClick={handleClick}>Resume</a>
        </li>
        <li>
          <a href="#contact"  className="sidebar__link" onClick={handleClick}>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
