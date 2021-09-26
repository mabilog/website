import React, { useState } from 'react'

import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
// import Contact from './components/Contact.jsx';
import Sidebar from './components/Sidebar.jsx';

import ProjectData from './components/ProjectData/ProjectData.jsx';
import './App.scss';

function App() {
const [menu, setMenu] = useState(false);

  return (
    <div className="app">
      <Navbar menu={menu} setMenu={setMenu}/>
      <Sidebar menu={menu} setMenu={setMenu}/>
      <div className="sections">
        <Home/>
        <Projects slide={ProjectData}/>
        <Resume/>
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default App;
