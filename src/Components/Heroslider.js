import React from 'react';
import './Custom.css';
import Happyman from './images/Happyman.png';
import { Button, Col, Row } from 'react-bootstrap';

function Heroslider() {
	return (
		<>
			<section id="home">
				<div className="container">
					<div className="heroslider">
						<Row>
							<Col lg={4} md={5}>
								<div className="contents">
									<p className="name">Hello, <span>IM Gokul Ram</span></p>
									<p className="designation">Creative Designer</p>
									<p className="works">Freelancer Web/ Mobile UI/UX Designer with Motion Graphics</p>
									<Button className="hire">Hire Me </Button>
									<Button className="get">Get Resume </Button>
								</div>
							</Col>
							<Col lg={8} md={7}>
								<div className="happy">
									<img src={Happyman} className="happymanimage" alt="man" />
								</div>
							</Col>
						</Row>
					</div>
				</div>
				<div className="heroshape">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0CBFAE" fill-opacity="1" d="M0,32L60,74.7C120,117,240,203,360,224C480,245,600,203,720,208C840,213,960,267,1080,288C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
				</div>
			</section>
		</>
	);
}

export default Heroslider;

