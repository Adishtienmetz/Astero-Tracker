import React from 'react'
import { FaMeteor } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {
  return (
    <Link to='/'>
        <div className="navbar">
            <FaMeteor className="icon" />
            <h1>Astero <span className='purple'>Tracker</span></h1>
        </div>
    </Link>
  )
}

export default Navbar