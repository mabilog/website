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
          <h2>Say hi!</h2>
          <form action="">
            <input type="email"  placeholder="E-mail" required/>
            <textarea placeholder="Message" required></textarea>
            <button type="submit" id="submitBtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
