import React from 'react'
import { NavLink } from 'react-router-dom';
import useAppContext from "../AppContext"

const Navbar = () => {
  const {loggedIn,logout,} = useAppContext();
  const showLoginOption =()=>{
    if(loggedIn){
      return(
        <li className="nav-item">
        <button  className="btn btn-primary"  onClick={logout} >
          Logout 
        </button>
        </li>
      )
        
    }
}

  
  return (
    <nav className="navbar navbar-expand-lg bg-primary p-3">
    <div className="container ">
      <a className="navbar-brand bg-body-primary fw-bold" href="#">
        FREELANCER
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">
            ABOUT US
          </NavLink>
        </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              LOGIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              SIGNUP 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/browzeproject">
              PROJECT LIST 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/addproject">
              ADD PROJECT 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projectmanager">
              PROJECT  MANAGER 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
               FREELANCERS 
            </NavLink>
            showLoginOption();
          </li>
         
          
        </ul>
      </div>
    </div>
  </nav>
    
  )
}

export default Navbar