import React from 'react'
import image from "../images/footer14.jpg";
import "./style.css"

const Footer = () => {
  return (
    <div className='footer' name='Sponsors'>
    <div className='Footer-image'>
      <div className='blink'>
        <marquee behavior="scroll" direction="left" scrollamount='12'>Thanks For Visiting Our Website</marquee>
      </div>
      <img src={image} alt="footer-img"  className='footer-image'/>
    <hr className='ruler'/>
    <div className='Footer-down'>
      <div className='copyright'>
        All rights reserved &copy;
      </div>
      <div className='Footer-logo'>
        GOTOEGYPT
      </div>
      <div className='Footer-links'>
        <p>Privacy</p>
        <p>Disclaimer</p>
        <p>Contact</p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
