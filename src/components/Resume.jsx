import React from 'react'
import './resume.scss';

import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="resume__things">

        <div className="resume__header">
          <h2>Gabriel Angelo Mabilog</h2>
          <div className="resume__contact">
            <span>Montreal, Qc </span>
            <a href="https://linkedin.com/in/mabilog" target="_blank" rel="noreferrer noopener"> <LinkedInIcon className="link linkedIn"/></a>
          </div>
          <div className="resume__email">
            <span>Email: </span>
            <a href="mailto:g.angelo.m@gmail.com">g.angelo.m@gmail.com</a>
          </div>
        </div>

        <div className="resume__content">
          <div className="resume__title resume__items">
            <h3>Junior Full Stack Web Developer</h3>
            <p>Focus on Desktop and Mobile Applications</p>
          </div>

          <div className="resume__education  resume__items">
            <h4>Education</h4>
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
        
          <div className="resume__experience  resume__items">
            <h4>Experience</h4>
              <h5 className="react-projects">React Projects</h5>
                <p>
                HTML, Javascript, CSS, Sass, Scss <br />
                API fetching<br />
                React Hooks <br/>
                NodeJS, Webpack <br />
                </p>
          </div>

          <div className="resume__skills  resume__items">
            <h4>Skills</h4>
            <p>
              HTML CSS JavaScript <br />
              Sass Scss <br />
              React Redux NodeJS <br />
              Firebase MongoDB
            </p>
            <h4>Progress</h4>
            <p>
              PHP & WordPress <br/>
              Ruby on Rails <br />  
              Typescript <br />
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Resume
