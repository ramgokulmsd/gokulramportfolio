import React from 'react';
import './Custom.css';
import { Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="title-contact">
            <h2>ContactUs</h2>
            <p>Get In Touch</p>
            <div className="underline"></div>
          </div>
          <Row>
            <Col lg={{ offset: 3, span: 6 }} md={12} sm={8} >
              <Form>
                <Form.Group controlId="formGroupText">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupText">
                  <Form.Label>Subject:</Form.Label>
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group controlId="formGroupText">
                  <Form.Label>Estimated Budget:</Form.Label>
                  <Form.Control type="text" placeholder="Estimated Budget" />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows="4" placeholder="Enter your Message" />
                </Form.Group>
                <Button className="btn" variant="primary" type="submit">
                  Message
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );



}

export default Contact;
























