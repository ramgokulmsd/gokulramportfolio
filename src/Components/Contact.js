import React from 'react';
import styled from 'styled-components';
import GoogleMap from './images/GoogleMap.jpg';
import { Form,Button,Row,Col } from 'react-bootstrap';




function Contact() {

	return(

				<Mycontact>
				<div className="container">
				<div className="title-contact">
            		<h2>Aboutus</h2>
            		<p className="choose">Why Choose Me?</p>
            		<div className="underline"></div>
              	</div>
				<Row>
              	 	<Col lg={{offset:6,span:6}}  md={{offset:3,span:6}}sm={8} > 


              	<Form>
                  <Form.Group controlId="formGroupText">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group >
                    <Form.Label>Comments:</Form.Label>
                    <Form.Control as="textarea" rows="4" placeholder="Leave your Comments"/>
                  </Form.Group>
                  <Button className="btn" variant="primary" type="submit">
                  Message
                  </Button> 
                </Form>
                </Col>
                </Row>
                </div>
              	</Mycontact>
        );



}

export default Contact;




const Mycontact=styled.section `



 	 background:url(${GoogleMap});
 	 opacity:0.7;

h2{
	font-size:48px;
	text-transform:uppercase;
	margin-top:100px;
	text-align:center;
	color:#0ABEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
	z-index:1;

}

.underline{
	width: 100px;
	border:1px solid;
	margin-left:45%;
	color:#0ABEAD;
}

.choose {
	font-size:16px;
	color:#000;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	text-align:center;
} 

Form {

	background:#fff;
	padding:40px;
	margin-top:30px;
	color:#0ABEAD;
	margin-bottom:40px;
}


`



















