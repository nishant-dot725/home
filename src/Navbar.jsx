import React from 'react';
import "./active.css"
import "./al.css"
import { NavLink } from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

               
         <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand">Nishant</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 ml-auto mb-lg-0">
        <li className="nav-item">
          <NavLink  exact className="nav-link " activeClassName="act"  aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  exact className="nav-link"  activeClassName="act" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  exact className="nav-link"  activeClassName="act" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  exact className="nav-link"  activeClassName="act" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
    }
    export default Navbar;