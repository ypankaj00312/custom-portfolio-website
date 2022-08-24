import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from './logo.jpg';
export const Header = () => {
  return (
    <div>
        <ul className='Navbar-items'>
          <li className='logo-container' >
            <img className='logo' src ={logo} alt= 'Logo'></img></li>
            <li className='home' >
            <Link className='link' to="/">Home</Link></li>
            <li className='education'>
            <Link className='link' to="/education">Education</Link></li>
            <li className='skills'>
            <Link className='link' to="/skills">Skills</Link></li>
            <li className='Projects'>
            <Link  className='link' to="/projects">Projects</Link></li>
            <li className=' contact-me'>
            <Link  className='link' to="/contact-me">Contact Me</Link></li>
        </ul>
    </div>
  )
}
