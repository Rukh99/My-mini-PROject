import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container bg-dark me-auto mb-2 mb-lg-0 p-3 text-white'>
    <nav className="navbar">
    <h3 style={{color:"blue"}}> FREELANCER </h3>
  <div className="container">
  <ul> 
  <li>
  <NavLink className="nav-item" to="/Signup">SIGNUP </NavLink>
  </li>
  <li>
  <NavLink className="nav-item" to="/login">LOGIN  </NavLink>
  </li>
  </ul>
    
  </div>
</nav>

</div>
  )
}

export default Navbar