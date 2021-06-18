import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () =>{
    return(
        <>
       <div className="my-5">
           <h1 className="text-center">Contact Us</h1>
       </div>
       <div className="container contact-div">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                   <form action="">
                   <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input required type="text" className="form-control" id="exampleFormControlInput1" placeholder="abcdefghi"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input required type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phine no</label>
  <input required type="number" className="form-control" id="exampleFormControlInput1" placeholder="98*******3"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <NavLink  to="/"className="btn btn-outline-primary">
        Submit Form
    </NavLink>
</div>
                   </form>
               </div>
           </div>
       </div>
        </>
    )
}
export default Contact;