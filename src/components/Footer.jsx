import React from 'react'
import "./footer.scss";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Footer = () => {
  return (
    <div className="footer">
      <h3>Follow me here!</h3>
      <div className="links">
            <a href="https://linkedin.com/in/mabilog"><LinkedInIcon className="link"/></a>
            <a href="https://github.com/mabilog"><GitHubIcon className="link"/></a>
            <a href="https://www.instagram.com/angelo.m/"><InstagramIcon className="link"/></a>
            <a href="https://twitter.com/angelo_mab"><TwitterIcon className="link"/></a>
          </div>
    </div>
  )
}

export default Footer
