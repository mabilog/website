import React from 'react'
import './contact.scss'

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
        </div>
      </div>
    </div>
  )
}

export default Contact
