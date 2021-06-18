import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "./img.svg";

const Common = (props) =>{
    return(
        <>
        <section id="header" className="d-flex algin-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1">
                        <h1 className="h1" >{props.name}<strong className="brand-name">Nishant</strong> </h1>
                        <p className="my-3 epic mb-3">We are a team of talented people</p>
                        <div className="mt-3">
                            <NavLink to={props.visit}className="btn-get"> {props.btname} </NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column">
                        <img src={props.imgsrc} className="img-fluid animated" width="300px" height="300px" alt="" />
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
export default Common;