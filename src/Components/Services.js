import React,{Component} from 'react';
import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';
import servicebg1 from './images/servicebg1.png';
import servicebg2 from './images/servicebg2.png';
import servicebg3 from './images/servicebg3.png';
import servicebg4 from './images/servicebg4.png';
import servicebg5 from './images/servicebg5.png';
import servicebg6 from './images/servicebg6.png';
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


class  Services extends Component {
	render(){
		return(
			<Myservice>
				<div className="container">
					<div className="inside">
            			<h2>Services</h2>
            			<p className="choose">What We Provide You ?</p>
            			<div className="underline"></div>
              		</div> 
              	
              			<Row>
    						<Col md={6} sm={12} lg={4} >
								<div className="web">
    								<h5 className="service-title">Web Design</h5>
    								<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
		    						<img src={servicebg1} alt="Logo" className="servicebg"/>
		    						<img src={icon1} alt="Logo" className="icon"/>
		    						<img src={shape1} alt="Logo" className="shape"/>
								</div>
							</Col>
							<Col md={6} sm={12} lg={4}>
								<div className="interface">
									<h5 className="service-title">Interface Design</h5>
		    						<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
		    						<img src={servicebg2} alt="Logo" className="servicebg"  />
		    						<img src={icon2} alt="Logo" className="icon"/>
		    						<img src={shape2} alt="Logo" className="shape"/>
								</div>
							</Col>
							<Col md={6} sm={12} lg={4}>
								<div className="webdev">
									<h5 className="service-title">Web Development</h5>
		    						<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
		    						<img src={servicebg3} alt="Logo" className="servicebg"/>
		    						<img src={icon3} alt="Logo" className="icon"/>
		    						<img src={shape3} alt="Logo" className="shape"/>
								</div>	
							</Col>
					  		<Col md={6} sm={12} lg={4}>
					  			<div className="ux">
		    						<h5 className="service-title">UX Design</h5>
		    						<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
		    						<img src={servicebg4} alt="Logo" className="servicebg"/>
		    						<img src={icon4} alt="Logo" className="icon"/>
		    						<img src={shape4} alt="Logo" className="shape"/>
								</div>	
							</Col>
							<Col md={6} sm={12}  lg={4} >
								<div className="motion">
									<h5 className="service-title">Motion Graphic</h5>
		    						<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
		    						<img src={servicebg5} alt="Logo" className="servicebg"/>
		    						<img src={icon5} alt="Logo" className="icon"/>
		    						<img src={shape5} alt="Logo" className="shape"/>
								</div>	
							</Col>
							<Col md={6} sm={12} lg={4}>
								<div className="seo">
									<h5 className="service-title">SEO Optimize</h5>
		    						<p className="service-text">Lipsum as it is sometimes known
									is dummy text used in laying out print,graphic or web designs.</p>
		    						<img src={servicebg6} alt="Logo" className="servicebg"/>
		    						<img src={icon6} alt="Logo" className="icon"/>
		    						<img src={shape6} alt="Logo" className="shape"/>
								</div>	
							</Col>
  						</Row>
  		
            	</div>
            </Myservice>
	
);
}
}

export default Services;

const Myservice =styled.section `


h2	{

	font-size:48px;
	text-transform:uppercase;
	margin-top:100px;
	text-align:center;
	color:#0ABEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
}

.underline	{

	width: 100px;
	border:1px solid;
	margin-left:45%;
	color:#0ABEAD;
	margin-bottom:40px;
}
.choose {
	font-size:16px;
	color:#000;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	text-align:center;
}

.service-section {
	margin-top:50px;
}
.service-section2 {
	margin-top:50px;
}
.servicebg {
	width:100%;
	position:relative;
}
.shape {
	width:330px;
	position:absolute;
	top:128px;
	left:15px;
}
.icon {
		
	position:absolute;	
	left:130px;
	top:50px;
}

.service-title {
	
	position: absolute;
    z-index: 1;
    padding-top: 138px;
	margin-left:80px;
	color:#FFFFFF;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
	font-size:24px;
	text-align:center;
}
.service-text {
	position: absolute;
    z-index: 1;
    padding-top: 180px;
    margin-left:20px;
    margin-right:80px;
    text-align:center;
}

.web {

	margin-bottom:40px;
}
.interface {

	margin-bottom:40px;
}
.webdev {
	margin-bottom:40px;
}
.ux {
	margin-bottom:40px;
}
.motion {
	margin-bottom:40px;
}
.seo {
	margin-bottom:40px;
}



@media only screen and (max-width: 767px) {

h2 {
	font-size:35px;
}
.underline {
	width: 120px;
	margin-left: 32%;
}
.web {

	margin-bottom:40px;
}
.interface {

	margin-bottom:40px;
}
.webdev {
	margin-bottom:10px;
}
.ux {
	margin-bottom:40px;
}
.motion {
	margin-bottom:40px;
}
.seo {
	margin-bottom:10px;
}

}





@media only screen and (max-width:991px) {

	h2 {
		margin-top:60px;

	}

}
`