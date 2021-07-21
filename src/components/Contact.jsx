import React from 'react'
import './contact.scss'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="center">
        <div className="left">
          <img src="../../assets/Startup life-pana.png" alt="" srcset="" />
        </div>
        <div className="right">
          <h2>Contact.</h2>
          <form action="">
            <input type="text"  placeholder="E-mail"/>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Submit</button>
          </form>
          <div className="links">
            <a href="http://linkedin.com/in/mabilog">
            <LinkedInIcon className="link" /></a>
            <GitHubIcon className="link"/>
            <InstagramIcon className="link"/>
            <TwitterIcon className="link"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
