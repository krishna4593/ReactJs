import React from 'react'

const Navbar = () => {
  return (
   <nav className="navbar">
      <h2 className="logo">Horizon Courts</h2>

      <ul className="nav-links">
        <li>About Us</li>
        <li>Services</li>
        <li>Coaches</li>
        <li>Events</li>
        <li>Contacts</li>
      </ul>

      <button className="nav-btn">Book now</button>
    </nav>
  )
}

export default Navbar
