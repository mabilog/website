import React from 'react'
import './sidebar.scss'

const Sidebar = ({menu, setMenu}) => {

  const handleClick = () => {
    setMenu(!menu)
  }
  return (
    <div className={"sidebar " + (menu && "active")}>

      <ul className="sidebar__list">
        <li>
          <a href="#projects"  className="sidebar__link" onClick={handleClick}>Projects</a>
        </li>
        <li>
          <a href="#resume" className="sidebar__link" onClick={handleClick}>Resume</a>
        </li>
        <li>
          <a href="#contact"  className="sidebar__link" onClick={handleClick}>Contact</a>
        </li>
        <li>
          <a href="#about" className="sidebar__link" onClick={handleClick}>About</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
