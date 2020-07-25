import React, { Component } from 'react';
import './Custom.css';
import { Row, Col } from 'react-bootstrap';
import shape1 from './images/shape1.png';
import shape2 from './images/shape2.png';
import shape3 from './images/shape3.png';
import shape4 from './images/shape4.png';
import shape5 from './images/shape5.png';
import shape6 from './images/shape6.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';

class Services extends Component {
	render() {
		return (
			<>
				<section id="service">
					<div className="container">
						<div className="title-service">
							<h2>Services</h2>
							<p>What We Provide You ?</p>
							<div className="underline"></div>
						</div>
						<div className="service-demo">
							<Row>
								<Col md={6} sm={12} lg={4} >
									<div className="web">
										<h5 className="service-title">Web Design</h5>
										<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
										<img src={icon1} alt="Logo" className="icon" />
										<img src={shape1} alt="Logo" className="shape" />
									</div>
								</Col>
								<Col md={6} sm={12} lg={4}>
									<div className="interface">
										<h5 className="service-title">Interface Design</h5>
										<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
										<img src={icon2} alt="Logo" className="icon" />
										<img src={shape2} alt="Logo" className="shape" />
									</div>
								</Col>
								<Col md={6} sm={12} lg={4}>
									<div className="webdev">
										<h5 className="service-title">Web Development</h5>
										<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
										<img src={icon3} alt="Logo" className="icon" />
										<img src={shape3} alt="Logo" className="shape" />
									</div>
								</Col>


								<Col md={6} sm={12} lg={4}>
									<div className="ux">
										<h5 className="service-title">UX Design</h5>
										<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
										<img src={icon4} alt="Logo" className="icon" />
										<img src={shape4} alt="Logo" className="shape" />
									</div>
								</Col>
								<Col md={6} sm={12} lg={4} >
									<div className="motion">
										<h5 className="service-title">Motion Graphic</h5>
										<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
										<img src={icon5} alt="Logo" className="icon" />
										<img src={shape5} alt="Logo" className="shape" />
									</div>
								</Col>
								<Col md={6} sm={12} lg={4}>
									<div className="seo">
										<h5 className="service-title">SEO Optimize</h5>
										<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
										<img src={icon6} alt="Logo" className="icon" />
										<img src={shape6} alt="Logo" className="shape" />
									</div>
								</Col>

							</Row>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Services;

