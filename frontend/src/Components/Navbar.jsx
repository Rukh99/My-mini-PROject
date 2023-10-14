import React from 'react'
import { NavLink } from 'react-router-dom'
import useAppContext from '../AppContext';

const Navbar = () => { //  custom props in react same as attributes in html file

  const { loggedIn, logout, } = useAppContext();


  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <li className="nav-item">
          <button className="btn btn-danger" onClick={logout} >
            Logout
          </button>
        </li>
      )

    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FREELANCING
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
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
              </li>
              {showLoginOption()}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
