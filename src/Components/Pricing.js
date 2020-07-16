import React from 'react';
import {Button,Card, Row,Col} from 'react-bootstrap';
import styled from 'styled-components';


function Pricing()  {
		return(
				<Mypricing>
					<div className="container">
       					<div className="inside">
            				<h2>Pricing</h2>
            				<p className="choose">Why Choose Me?</p>
            				<div className="underline"></div>
              		 	</div>
						<div>
							<Row>
								<Col md={6} sm={12} lg={4} >
									<div className="plan1">
             		 				<Card style={{ width: '18rem' }}>
								  		<Card.Header className="basic">
									  		<h5 id="plans">Basic</h5>
									  		<p className="rate">$70</p>
									  		<p className="rate">Only PSD Design</p>
								  		</Card.Header>
										<Card.Body>
											<p>Graphic Desing</p>
											<p>	Web Design</p>												
											<p>	UI/UX Design</p> 
											<p>	HTML & CSS</p>
											<p>SEO Optimize</p>
											<p>Business Develop</p>
											<Button variant="primary">Choose plans</Button>
										</Card.Body>
									</Card>
									</div>
								</Col>
								<Col md={6} sm={12} lg={4} >
									<div className="plan2">
             		 				<Card style={{ width: '18rem' }}>
								  		<Card.Header className="standard">
									  		<h5 id="plans">Standard</h5>
											<p className="rate">$100</p>
											<p className="rate">Only PSD Design</p>
										</Card.Header>
										<Card.Body>
											<p>Graphic Desing</p>
											<p>	Web Design</p>												
											<p>	UI/UX Design</p> 
											<p>	HTML & CSS</p>
											<p>SEO Optimize</p>
											<p>Business Develop</p>
										<Button variant="primary">Choose plans</Button>
										</Card.Body>
									</Card>
									</div>
								</Col>
								<Col md={6}  sm={12} lg={4} >
									<div className="plan3">
             		 				<Card style={{ width: '18rem' }}>
								  		<Card.Header className="premium">
									  		<h5 id="plans">Premium</h5>
									  		<p className="rate">$150</p>
									  		<p className="rate">Only PSD Design</p>
								 	 	</Card.Header>
										<Card.Body>
											<p>Graphic Desing</p>
											<p>	Web Design</p>												
											<p>	UI/UX Design</p> 
											<p>	HTML & CSS</p>
											<p>SEO Optimize</p>
											<p>Business Develop</p>
											<Button variant="primary">Choose plans</Button>
										</Card.Body>
									</Card>
									</div>
								</Col>
							</Row>	
              		 	</div>
					</div>		 
            	</Mypricing>
 );}

export default Pricing;


const Mypricing =styled.section `

h2{
	font-size:48px;
	text-transform:uppercase;
	
	text-align:center;
	color:#0ABEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
}

.underline{
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
.basic {
  
    background-color: #FF6331;
  }
.standard {
	background-color:#803AFB;
}
.premium {
	background-color:#F5276C;
}

.plan1 .btn {
	background-color: #FF6331;
	border-color:#FF6331;
	border-radius:30px;
	width:200px;
	height:60px;
}
.plan2 .btn {
	background-color:#803AFB;
	border-radius:30px;
	border-color:#803AFB;
	width:200px;
	height:60px;
}
.plan3 .btn {
	background-color:#F5276C;
	border-radius:30px;
	border-color:#F5276C;
	width:200px;
	height:60px;
}


#plans {
	color:#fff;
	text-align:center;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:36px;
}

p {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:16px;
	text-align:center;
}

.rate {
	color:#ffffff;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:16px;
	align-item:right;

}
.card-body {
	text-align:center;
}


@media only screen and (max-width: 767px) {

h2 {
	font-size:35px;
}
.underline  {
	width: 120px;
	margin-left: 32%;
}


}

@media only screen and (max-width:991px) {

	.plan3 {

		margin-top:40px;
	}

}


`