import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import WA from './images/WA.png';

function Headerbar() {   
  return (
          <Myheader>
          <div className="container">
            <Navbar bg="light" expand="lg">
              <img src={WA} alt="Logo" />
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="links">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">AboutUs</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/Contact">Contact</Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              </div>
          </Myheader>
);}

export default Headerbar;





const Myheader = styled.section `

.bg-light {
  background-color: #fff !important;
}

a {
  color: #000;
  text-decoration: none;
  background-color: transparent;
  margin:10px;
}

a:hover {
  color: #20c997;
    
}
.links {

  padding-left:300px;
}


@media only screen and (max-width:991px) {


.links {

  padding-left:290px;
}

}

@media only screen and (max-width:767px) {


.links {

  padding-left:0px;
}

}





`

