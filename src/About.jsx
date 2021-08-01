import React from 'react';
import mern from './images/dev.jpg';
import "./index.css";
import {NavLink} from 'react-router-dom';
function About() {
   
    return (
        <>
            <div className="container-fluid " style={{minHeight :"82vh"}}>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mt-5">
                                <h1 className="abouttext" > <span style={{color:"blue"}}>We are the team </span>of talented Devlopers</h1>
                                <h4 style={{color:"grey",fontSize:"large"}}>Making websites</h4>
                                <NavLink to="/services" className="btn btn-outline-danger col-md-4"><span style={{ fontWeight:"bold"}}>Services</span></NavLink>
                                    <NavLink to="/contact" className="btn btn-outline-primary col-md-4 mx-1"><span style={{ fontWeight:"bold"}}> Contact Us</span></NavLink>
                            </div>
                            <div className="col-md-6 d-flex align-self-center mt-3">
                                <img src={mern} alt="images" className="img-fluid  " ></img>
                                {/* <img src="http://media.whatcounts.com/whatcounts_marketing/170825_InteractiveEmail/weather2.jpg" class="vert-move" /> */}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default About;