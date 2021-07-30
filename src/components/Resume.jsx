import React from 'react'
import './resume.scss';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume__header">
        <h2>Gabriel Angelo Mabilog</h2>
        <div className="resume__contact">
          <span>Montreal, Qc</span>
        <a href="https://linkedin.com/in/mabilog" target="_blank" rel="noreferrer noopener"><LinkedInIcon className="link linkedIn"/></a>
        <div className="email">
          <span>Email: </span>
            <a href="mailto:g.angelo.m@gmail.com">g.angelo.m@gmail.com</a>
        </div>
        </div>
      </div>

      <div className="resume__title">
        <h3>Junior Full Stack Web Developper</h3>
        <p>Focus on Desktop and Mobile Applications</p>
      </div>

      <div className="resume__education">
        <h3>Education</h3>
        <table>
          <tr>
            <td>TheOdinProject</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>FreeCodeCamp</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Concordia Bootcamp</td>
            <td>2020</td>
          </tr>
        </table>
      </div>
    
      <div className="resume__experience">
        <h3>Experience</h3>
          <h4 className="react-projects">React Projects</h4>
            <p>
            HTML, CSS, JavaScript, <br />
            API fetching<br />
            NodeJS, Webpack <br />
            React Hooks 
            </p>
      </div>

      <div className="resume__skills">
        <h3>Skills</h3>
        <p>
          HTML CSS JavaScript <br />
          Sass Scss <br />
          React Redux NodeJS <br />
          Firebase MongoDB
        </p>
          <h4>Progress</h4>
          <p>
            Ruby on Rails <br />  
            Typescript <br />
            PHP & WordPress
          </p>
      </div>

    </div>
  )
}

export default Resume
