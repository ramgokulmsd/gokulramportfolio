import React  from 'react';
import styled from 'styled-components';
import Happyman from './images/Happyman.png';
import {Button} from 'react-bootstrap';

 function Heroslider() {
		return(
				<Myhero>
					<div className="container">
						<div className="happy">
						  <img src={Happyman} className="happymanimage" alt="man"/>	
			  			</div>
						<div className="contents">
							<p className="name">Hello, <span>IM White Alexa</span></p>
							<p className="designation">Creative Designer</p>
							<p className="works">Freelancer Web/ Mobile UI/UX Designer with Motion Graphics</p>
							<Button className="hire">Hire Me </Button>
							<Button className="get">Get Resume </Button>
						</div>
					</div>
				</Myhero>
);}

export default Heroslider;


const Myhero = styled.section `

background:#fff;

.happy {
	padding-left:300px;
	margin-top:50px;
}

.happy p {
	padding-left:0px;
}

.happy img {
	width:803px;
	height:501px;
}

.name {
	position:absolute;
	color:#0CBFAE;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:28px;
	top:250px;
}
.name span {
	color:#F57F17;
}
.designation {
	position:absolute;
	top:285px;
	font-size:50px;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
	color:#0ABEAD;
}

.works {
	position:absolute;
	color:#333333;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	font-size:16px;
	top:358px;
}
.hire {
	background:#09BEAD;
	color:#fff;
	position:absolute;
	top:420px;
	width:170px;
	height:60px;
	border-radius:100px;
	border-color:#09BEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:16px;

}

.get {
	background-color:#F57F17;
	color:#fff;
	position:absolute;
	top:420px;
	left:310px;
	width:170px;
	height:60px;
	border-radius:100px;
	border-color:#F57F17;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-SemiBold;
	font-size:16px;
}


@media only screen and (max-width:767px) {

.happymanimage {
	display:none;
}
.name{
	position: unset;
	text-align:center;
	margin-top:100px;
}
.designation {
	font-size:35px;
	text-align:center;
	position: unset;
	margin-top:30px;
}
	
.works {
	position: unset;
	text-align:center;
	font-size:18px;
	margin-top:30px;
}
.hire {
	position: unset;
	margin-left:10px;
	margin-bottom:20px;
	margin-top:30px;
	width:300px;
}
.get {
	position: unset;
	width:300px;
	margin-left:10px;
	margin-top:20px;

}

}

@media only screen and (max-width:768px) {

.happy img {
	width:400px;
	height:401px;
}	
.get {
	left:250px;
}

}	

`