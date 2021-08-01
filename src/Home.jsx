import React from 'react';
import mern from './images/m.jpg';
import {NavLink} from 'react-router-dom';
function Home() {
   
    return (
        <>
            <div className="container-fluid " style={{minHeight :"82vh"}}>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 mt-5">
                                <h1 ><span style={{ fontSize: "40px", color: "grey" }}> We are the Team of</span> <br />
                                    <span style={{ color: "green", fontSize: "85px" }} >M</span><span style={{ color: "pink", fontSize: "85px" }}>E</span>
                                    <span style={{ color: "blue", fontSize: "85px" }} >R</span><span style={{ color: "green", fontSize: "85px" }}>N</span>  <span style={{ fontSize: "85px" }}>STACK <br /> devlopers</span></h1>
                                    <NavLink to="/contact" className="btn btn-outline-primary col-md-4"><span style={{ fontWeight:"bold"}}> Contact Us</span></NavLink>
                            </div>
                            <div className="col-md-6 d-flex align-self-center mt-3">
                                <img src={mern} alt="images" className="img-fluid vert-move" ></img>
                                {/* <img src="http://media.whatcounts.com/whatcounts_marketing/170825_InteractiveEmail/weather2.jpg" class="vert-move" /> */}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Home;