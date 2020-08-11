import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/logo.png';
import './Custom.css';


 class Headerbar extends React.Component {



render(){

  return (
    <>
      <div className="heading">
        <div className="container-fluid">
          <Navbar bg="light" expand="lg" fixed="top" >
             <img src={logo} className="logo" alt="logo" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <a href="#home">Home</a>
                <a href="#about">Aboutus</a>
                <a href="#resume">Resume</a>
                <a href="#service">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </>
  );
}
}
export default Headerbar;






