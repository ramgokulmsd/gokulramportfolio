import React  from 'react';
import styled from 'styled-components';
import Manhold from './images/Manhold.png';
import {Button, Row,Col} from 'react-bootstrap';


function Aboutus()  {
		return(
				<Myabout >
					<div className="container">
						<Row>
							<Col sm={8} lg={12} md={12}>
       							<div className="title-about">
            						<h2>Aboutus</h2>
            						<p className="choose">Why Choose Me?</p>
            						<div className="underline"></div>
              		 			</div> 
              		 			<div className="man">
              		 				<img src={Manhold} className="manholdimage"  alt="Man"/>
              		 				<div className="content">
              		 					<h4 className="chooseme">Why Choose Me?</h4>
              		 					<p className="answer">Lorem ipsum, or lipsum as it is sometimes known, is dummy text 
										used in laying out print, graphic or web designs. The passage is 
										attributed to an unknown typesetter in the 15th century who is 
										thought to have scrambled parts of Cicero's De Finibus Bonorum 
										et Malorum for use in a type specimen book.</p>
										<h4 className="features">Here is Few Features: </h4>
										<div className="listofitems">
											<li className="interface">User Interface Design</li>
											<li className="experience">User Experience Design </li>
											<li className="visual">Visual Commination Design</li>
											<li className="interaction">Interaction Design</li>
											<li className="supper">Supper Support</li>
										</div>
										<Button className="hire">Hire Me </Button>
										<Button className="get">Get Resume </Button>
									</div>
              		 			</div>
							</Col>
						</Row>	   
            		</div>
            	</Myabout>


		);}

export default Aboutus;



const Myabout =styled.section `

h2{
	font-size:48px;
	text-transform:uppercase;
	padding-top:100px;
	text-align:center;
	color:#0ABEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
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

.man {
	position:relative;
}

.man img {
	margin-top:40px;
	position:relative;
	margin-left: -30px;
	width:900px;
}

.content {
	
  	width:420px;
 	height:594px;
  	box-shadow: 10px 0 5px -2px ;
  	position:absolute;
  	top:7%;
  	left:65%;
  	z-index:1;
}

.chooseme {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:24px;
	margin-top:80px;

}
.answer {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
	margin-right:5px;
}
.features {
	color:#0ABEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:18px;
}

.interface {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
}

.experience {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
}
.visual {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
}
.interaction {
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
}
.supper {

	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
}
.hire {
	background:#09BEAD;
	color:#fff;
	width:170px;
	height:60px;
	border-radius:100px;
	border-color:#09BEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:16px;
	margin-top:30px;
	margin-right:10px;
}

.get {
	
	background-color:#F57F17;
	color:#fff;
	width:170px;
	height:60px;
	border-radius:100px;
	border-color:#F57F17;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:16px;
	margin-top:30px;
}

@media only screen and (max-width: 767px) {
	.manholdimage {
		display:none;
	}
	h2 {
		padding-top:60px;
		font-size:35px;
	}
	.content {
		box-shadow:none; 
		position:unset;
		width:340px;
	}
	.underline{
		margin-left:35%;	
	}
	.chooseme {
		margin-top:40px;
		margin-left:10px;
	}
	.answer {
		margin-top:10px;
		margin-left:20px;
		margin-right:20px;
		margin-bottom:15px;
		font-size:20px;
	}
	.features {
			
		font-size: 28px;
		margin-left:10px;
	}
	.listofitems {
		margin:20px;
	}
	.interface {
		font-size: 20px;
	}
		
	.experience {
		font-size: 20px;
	}
	.visual {
		font-size: 20px;
	}
	.interaction {
		font-size: 20px;
	}
	.supper {
		font-size: 20px;
	}
	.hire {
		width:300px;
		margin-left:10px;
	}
	.get {
		display:none;
	}
}

@media only screen and (max-width:991px) {
	.manholdimage {
		display:none;
	}
	.content {
		box-shadow:none; 
		position:unset;
		width:100%;
		height:100%;
	}
	h2 {

		padding-top:85px;
	}
	.chooseme {
		margin-top:40px;
	}

}

`