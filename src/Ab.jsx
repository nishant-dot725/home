import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./img.svg";

const About = () =>{
    return(
        <>
         <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
        <div className="box  algin-items-center">
           <div className="p">We are a Team of talented people</div>
           <div className="p -two">So if You have Any boubt OR query you can complain here. <br/>Click on this button <i className="fa fa-arrow-down"></i> </div>
           <div className="mt-3">
                            <NavLink to="/contact" className="btn-get"> Contact us</NavLink>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
                        <img src={web} className="img-fluid animated" width="300px" height="300px" alt="" />
                    </div>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default About;