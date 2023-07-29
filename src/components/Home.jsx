import React from 'react'
import home from "./images/home11.jpg";
// import {FaAngleDoubleDown} from "react-icons/fa";
// import { Link } from "react-scroll";


const Home = () => {
  return (
    <div className='' name='Home'>
     <img src={home} alt="home-img" className='photo'/>
     <p className='line'>Unveil the world's iconic landmarks on our website. Discover captivating stories of history, art, and culture. Embark on a virtual journey through time, exploring the brilliance of human achievements. Let curiosity guide you as we celebrate the beauty of our shared heritage. Let the exploration begin!</p> 

     {/* <div className='drop-down'>
        <FaAngleDoubleDown className='icon'/>
        <p className='scroll'>
            <Link to='about'>
            Scroll Down
            </Link>
            </p>
        </div> */}
    </div>
  )
}

export default Home
