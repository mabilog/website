import React from 'react'
import './home.scss'
import angelo1x1 from './ProjectData/picture/angelo1x1.jpg'
import Socials from './Socials';

const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="center">
        <img src={angelo1x1} alt="angelo" />
        <div className="center__right">
          <h2>Hi, I'm </h2>
          <h1>Angelo</h1>
          <h3>An aspiring developer looking for new opportunities</h3>
          <a href="#projects" >See my work here!</a>
        </div>
      </div>
      <Socials/>
    </div>
  )
}

export default Home
