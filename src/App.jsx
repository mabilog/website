import React from 'react'

import Navbar from './components/Navbar.jsx';
import Resume from './components/Resume.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Resume/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
