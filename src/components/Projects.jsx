import React, { useState } from 'react'
import './projects.scss';

import  ProjectData  from'./ProjectData/ProjectData.jsx'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Projects = ({ slide }) => {
  const [current, setCurrent] = useState(0);
  const length = slide.length 


  
  const prevSlide = () => {
    console.log('prevSlide');
    setCurrent(current === 0 ? length - 1 : current - 1)

  }
  
  const nextSlide = () => {
    console.log('nextSlide')
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  
  console.log(current); 

  if(!Array.isArray(slide) || slide.length <= 0){
    return null;
  }
  
  
  return (
    <div className="projects" id="projects">
      <NavigateBeforeIcon className="arrow leftArrow"  onClick={prevSlide}/>
      {ProjectData.map((slide, index) => {
        
        return(
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
         {index === current && (
          //  <div className="project__wrapper">
            
            <a href={slide.url} target="_blank" className="project__link" rel="noreferrer">
              <img src={slide.image} alt={slide.id} className="project__image"/>
            </a>
          //  </div>
           
         )}

        </div>
        )}
      )}
      <NavigateNextIcon className='arrow rightArrow' onClick={nextSlide}/>
    </div>
  )
}

export default Projects
