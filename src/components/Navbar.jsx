import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'
import './nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const navRef = useRef(null)
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }

  return (
    <header className='nav-header'>
       <h3>Logo</h3> 
       <nav ref={navRef}>
            <Link to="/">Home</Link>
            <Link to="/Projects_ECs">Projects and ECs</Link>
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