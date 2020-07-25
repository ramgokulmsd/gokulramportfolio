import React from 'react';
import Manhold from './images/Manhold.png';
import { Button, Row, Col } from 'react-bootstrap';
import './Custom.css';

function Aboutus() {
	return (
		<>
			<section id="about">
				<div className="container">
					<div className="title-about">
						<h2>Aboutus</h2>
						<p>Why Choose Me?</p>
						<div className="underline"></div>
					</div>
					<div className="aboutus">
						<Row>
							<Col lg={8} >
								<div className="man">
									<img src={Manhold} className="manholdimage" alt="Man" />
								</div>
							</Col>
							<Col lg={4}>
								<div className="content">
									<h4 >Why Choose Me?</h4>
									<p>To be a part of a growth oriented organization,contributing, Learning and
									enhancing my development both as a professional and as an individual.
									Successful working in a team environment, as well as independently.
									The ability to follow instructions and deliver quality results.</p>
									<h4>Here is Few Features: </h4>
									<div className="listofitems">
										<li>User Interface Design</li>
										<li>User Experience Design </li>
										<li>Visual Commination Design</li>
										<li>Interaction Design</li>
										<li>Supper Support</li>
									</div>
									<Button className="hire">Hire Me </Button>
									<Button className="get">Get Resume </Button>
								</div>
							</Col>
						</Row>
					</div>
				</div>
			</section>
		</>
	);
}

export default Aboutus;


