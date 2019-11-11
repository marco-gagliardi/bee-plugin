import React from 'react'
import {Link} from "react-router-dom";
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = (props) => {
  return (
    <nav className='Navbar Navbar--sticky'>
      <Link to='/'>
        <img src={logo} className='Navbar__logo' alt='logo' />
      </Link>
      <Link to='/home'>Home</Link>
    </nav>
  )
};

Navbar.propTypes = {
};

export default Navbar