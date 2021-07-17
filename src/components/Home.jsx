import React from 'react'
import './home.scss'
const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="center">
        <img src="assets/angelo1x1.jpg" alt="angelo" />
        <div className="center__right">
          <h1>Angelo Mabilog</h1>
          <h3>An aspiring developer looking for new opportunities</h3>
        <a href="#projects">See my work here!</a>
        </div>
      </div>
    </div>
  )
}

export default Home
