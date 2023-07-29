import React from 'react'
// import home from "./images/home11.jpg";
import { Link } from "react-scroll";



const Navbar = () => {

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Explore",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];


  return (
    <div className='container' id='Navbar'>
      <div className='navbar'>
      <h3 className='title'>RAAHI</h3>
      <ul className="list">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-list"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
        </div>
    </div>
  )
}

export default Navbar
