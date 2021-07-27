import React from 'react'
import './socials.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Socials = () => {
  return (
    <div className="socials">
            <a href="https://linkedin.com/in/mabilog" target="_blank" rel="noreferrer noopener"><LinkedInIcon className="link linkedIn"/></a>
            <a href="https://github.com/mabilog" target="_blank" rel="noreferrer noopener"><GitHubIcon className="link github"/></a>
            <a href="https://www.instagram.com/angelo.m/" target="_blank" rel="noreferrer noopener"><InstagramIcon className="link instagram"/></a>
            <a href="https://twitter.com/angelo_mab" target="_blank" rel="noreferrer noopener"><TwitterIcon className="link twitter"/></a>
      </div>
  )
}

export default Socials
