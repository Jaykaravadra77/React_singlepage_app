import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"
function Navbar() {
    return (
        <>
            <div className="container-fluid  ">
                <div className="row  bg-dark">
                    <div className="col-md-10 mx-auto bg-dark">
                        <div className="row bg-dark ">

                            <nav className="navbar navbar-expand-lg navbar-dark  ">
                                <div className="container-fluid">
                                    <h3  className="mstack mt-2"   >MERN STACK TEAM</h3>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                        <ul className="navbar-nav ms-auto ">

                                            <li className="nav-item mx-1" >
                                                <NavLink activeClassName="a" className="red" style={{ textDecoration: "none", color: "white",fontSize:"18px" }} to="/" >Home</NavLink>
                                            </li>
                                            <li className="nav-item mx-1">
                                                <NavLink activeClassName="a" className="red" style={{ textDecoration: "none", color: "white",fontSize:"18px" }} to="/about" >About</NavLink>
                                            </li>       <li className="nav-item mx-1">
                                                <NavLink activeClassName="a" className="red" style={{ textDecoration: "none", color: "white",fontSize:"18px" }} to="/services" >Services</NavLink>
                                            </li>       <li className="nav-item mx-1">
                                                <NavLink activeClassName="a"className="red"  to="/contact" style={{ textDecoration: "none", color: "white",fontSize:"18px" }} >Contact Us</NavLink>
                                            </li>


                                        </ul>
                                    </div>

                                </div>
                            

                            </nav>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar;