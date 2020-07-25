import React from 'react';
import './Custom.css';
import { Accordion, Card } from 'react-bootstrap';
import { FaUserGraduate, FaHistory, FaLaptopCode, FaPalette, FaCheck } from "react-icons/fa";

function Resume() {
  return (
    <>
      <section id="resume">
        <div className="container">
          <div className="title-resume">
            <h2>Resume</h2>
            <p>My formal Bio Details.</p>
            <div className="underline"></div>
          </div>
          <div className="resume-section">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  <FaUserGraduate className="ficon" />Education
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h6>BE computer science and Engineering (2016-2020)</h6>
                    <p>-6.8 (CGPA) - pursuing SENGUNTHAR ENGINEERING COLLEGE - TIRUCHENGODE.</p>
                    <h6>H.S.C (2014-2016)</h6>
                    <p>- 66% SRI RAGAVENDRA HIGHER SECONDARY SCHOOL, SATHY.</p>
                    <h6>-S.S.L.C (2013-2014)</h6>
                    <p> - 83% SRI PARIYUR AMMAN HIGHER SECONDARY SCHOOL,T.N.PALAYAM.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  <FaHistory className="ficon" />  Work History
                              </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p> I am currently doing freelancer works and  I am looking for full-time job.</p>
                    <h6>WorkSamples :</h6>
                    <p>React
                                <span> <a href="http://www.reactsample.epizy.com"> Check it.</a></span>
                    </p>

                    <p>Bootstrap <a href="http://www.gokulramsample.epizy.com">check it.</a>  </p>

                    <p>Github <a href="https://github.com/ramgokulmsd">Check it.</a>  </p>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  <FaLaptopCode className="ficon" />Programming Skills
                              </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul><FaCheck className="ficon" />HTML</ul>
                    <ul><FaCheck className="ficon" />CSS</ul>
                    <ul><FaCheck className="ficon" />Jquery</ul>
                    <ul><FaCheck className="ficon" />Reactjs</ul>
                    <ul><FaCheck className="ficon" />Bootstrap</ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  <FaPalette className="ficon" />Other Skills
                              </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <ul><FaCheck className="ficon" />Figma</ul>
                    <ul><FaCheck className="ficon" />Git</ul>
                    <ul><FaCheck className="ficon" />MicroSoft</ul>
                    <ul><FaCheck className="ficon" />GIMP</ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

            </Accordion>
          </div>
        </div>
      </section>
    </>
  );

}

export default Resume;

