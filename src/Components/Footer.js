import React from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import './Custom.css';
import { Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <Row>
            <Col lg={7} md={12}>
              <h5>© 2020 All rights reserved by Gokulram.</h5>
            </Col>
            <Col lg={5} md={12}>
              <div className="social-media">
                <a href="https://linkedin.com/in/gokulram-m-3ab59018a">
                  <FaLinkedin className="social" />
                </a>
                <a href="https://github.com/ramgokulmsd">
                  <FaGithub className="social" />
                </a>
                <a href="mailto:gokulramcse@gmail.com ">
                  <FaEnvelope className="social" />
                </a>
                <a href="https://www.instagram.com/ramgokulmsd">
                  <FaInstagram className="social" />
                </a>
                <a href="https://twitter.com/GokulramHah">
                  <FaTwitter className="social" />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Footer;

















