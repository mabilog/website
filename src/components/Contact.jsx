import React from 'react'
import './contact.scss'

import Footer from './Footer';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="center">
        <div className="left">
          <img src="../../assets/Startup life-pana.png" alt="" srcset="" />
        </div>
        <div className="right">
          <h2>Say hi!</h2>
          <form action="">
            <input type="email"  placeholder="E-mail" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit" id="submitBtn">Submit</button>
          </form>
          <Footer/>
           {/* <h3>Follow me here!</h3>
           <div className="links">
            <a href="https://linkedin.com/in/mabilog"><LinkedInIcon className="link"/></a>
            <a href="https://github.com/mabilog"><GitHubIcon className="link"/></a>
            <a href="https://www.instagram.com/angelo.m/"><InstagramIcon className="link"/></a>
            <a href="https://twitter.com/angelo_mab"><TwitterIcon className="link"/></a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
