import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./img.svg";

const Home = () =>{
    return(
        <>
        <section id="header" className="d-flex algin-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1">
                        <h1 className="h1" >Grow Your Website With <strong className="brand-name">Nishant</strong> </h1>
                        <h2 className="my-3 ee mb-3">We are a team of talented people</h2>
                        <div className="mt-3">
                            <NavLink to="/about" className="btn-get"> Get Started</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
                        <img src={web} className="img-fluid animated" width="300px" height="300px" alt="" />
                    </div>
                </div >
            </div>
        </div>
        
        </section>
        <div className="footer">
           <strong> Made By Nishant Sharma©</strong>
        </div>
        </>
    )
}
export default Home;