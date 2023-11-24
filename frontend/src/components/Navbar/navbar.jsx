import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg">
    <div >  
      <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link to="/course">Courses</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              <Link to="/user">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <div className="d-flex" role="search">
            <input
              className="input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="submit" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
