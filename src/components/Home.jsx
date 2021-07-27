import React from 'react'
import './home.scss'

// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
import Socials from './Socials';

const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="center">
        <img src="assets/angelo1x1.jpg" alt="angelo" />
        <div className="center__right">
          <h2>hi, i'm </h2>
          <h1>angelo mabilog.</h1>
          <h3>An aspiring developer looking for new opportunities</h3>
          <a href="#projects" >See my work here!</a>
        </div>
      </div>
      {/* <div className="socials">
            <a href="https://linkedin.com/in/mabilog" target="_blank" rel="noreferrer noopener"><LinkedInIcon className="link linkedIn"/></a>
            <a href="https://github.com/mabilog" target="_blank" rel="noreferrer noopener"><GitHubIcon className="link github"/></a>
            <a href="https://www.instagram.com/angelo.m/" target="_blank" rel="noreferrer noopener"><InstagramIcon className="link instagram"/></a>
            <a href="https://twitter.com/angelo_mab" target="_blank" rel="noreferrer noopener"><TwitterIcon className="link twitter"/></a>
      </div> */}
      <Socials/>
    </div>
  )
}

export default Home
