import React from 'react'
// import image from "../images/footer14.jpg";
import {SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook,SlSocialTwitter} from 'react-icons/sl'
import "./style.css"

const Footer = () => {
  return (
    <div className='footer' name='Sponsors'>
      {/* <img src={image} alt="footer-img"  className='footer-image'/> */}
    <hr className='ruler'/>
    <div className='Footer-down'>
      <div className='copyright'>
        <div>
        RAAHI |
      </div>
      <div>
         All rights reserved &copy;
      </div>
      </div>
      <div className='Footer-links'>
        <SlSocialInstagram/>
        <SlSocialLinkedin/>
        <SlSocialFacebook/>
        <SlSocialTwitter/>
      </div>
    </div>
    </div>
  )
}

export default Footer
