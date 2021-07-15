import React, { useState } from 'react'

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Sidebar from './components/Sidebar.jsx';

import './App.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className={"sections " + (menuOpen && "active")}>
        <Home/>
        <Resume/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
