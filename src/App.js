import React from 'react';
import Home from './Home'
import {Switch, Route} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar';
import Service from './Services';
import Contact from './Contact';
import About from './Ab';


const App = () =>{
  return(
    <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route  exact path="/about" component={About} />
       <Route exact path="/service" component={Service} />
       <Route exact path="/contact" component={Contact} />
     </Switch>
    
    </>
  )
}
export default App;