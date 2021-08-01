import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import Footer from './Footer';
import {Route,Switch} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/about" component={About} /> 
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
   <Footer/>
    
    </>
  )
}

export default App;
