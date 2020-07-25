import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import './Custom.css';
import { FaCheck } from "react-icons/fa";

function Pricing() {
	return (
		<>
			<section id="pricing">
				<div className="promoto">
					<div className="container">
						<div className="title-pricing">
							<h2>Pricing</h2>
							<p>Choose your Plans</p>
							<div className="underline"></div>
						</div>
						<div className="pricing-section">
							<Row>
								<Col lg={4} md={6} sm={12}  >
									<div className="plan1">
										<Card style={{ width: '18rem' }}>
											<Card.Header className="basic">
												<h5 id="plans">Basic</h5>
												<p className="rate">$70</p>
												<p className="rate">Only PSD Design</p>
											</Card.Header>
											<Card.Body>
												<p><FaCheck className="picon" />Graphic Desing</p>
												<p><FaCheck className="picon" />	Web Design</p>
												<p><FaCheck className="picon" />	UI/UX Design</p>
												<p><FaCheck className="picon" />	HTML & CSS</p>
												<p><FaCheck className="picon" />SEO Optimize</p>
												<p><FaCheck className="picon" />Business Develop</p>
												<Button variant="primary">Choose plans</Button>
											</Card.Body>
										</Card>
									</div>
								</Col>
								<Col lg={4} md={6} sm={12}  >
									<div className="plan2">
										<Card style={{ width: '18rem' }}>
											<Card.Header className="standard">
												<h5 id="plans">Standard</h5>
												<p className="rate">$100</p>
												<p className="rate">Only PSD Design</p>
											</Card.Header>
											<Card.Body>
												<p><FaCheck className="picon" />Graphic Desing</p>
												<p><FaCheck className="picon" />	Web Design</p>
												<p><FaCheck className="picon" />	UI/UX Design</p>
												<p><FaCheck className="picon" />	HTML & CSS</p>
												<p><FaCheck className="picon" />SEO Optimize</p>
												<p><FaCheck className="picon" />Business Develop</p>
												<Button variant="primary">Choose plans</Button>
											</Card.Body>
										</Card>
									</div>
								</Col>
								<Col lg={4} md={6} sm={12} >
									<div className="plan3">
										<Card style={{ width: '18rem' }}>
											<Card.Header className="premium">
												<h5 id="plans">Premium</h5>
												<p className="rate">$150</p>
												<p className="rate">Only PSD Design</p>
											</Card.Header>
											<Card.Body>
												<p><FaCheck className="picon" />Graphic Desing</p>
												<p><FaCheck className="picon" />	Web Design</p>
												<p><FaCheck className="picon" />	UI/UX Design</p>
												<p><FaCheck className="picon" />	HTML & CSS</p>
												<p><FaCheck className="picon" />SEO Optimize</p>
												<p><FaCheck className="picon" />Business Develop</p>
												<Button variant="primary">Choose plans</Button>
											</Card.Body>
										</Card>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Pricing;

