import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import './nav.css'
import React from 'react'

const Navbar = () => {
  const navRef = useRef(null)
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header className='nav-header'>
       <h3>Logo</h3> 
       <nav ref={navRef}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
       </nav>
       <button className='nav-btn' onClick={showNavbar}>
            <FaBars /> 
       </button>
    </header>
  )
}

export default Navbar