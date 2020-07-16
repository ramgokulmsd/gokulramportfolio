import React from 'react';
import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import {FaUserGraduate,FaHistory,FaLaptopCode,FaRegChartBar,FaPalette} from "react-icons/fa";


function Resume() {
        return(
			           <Myresume>
				          <div className="container">
						        <div className="inside">
            				  <h2>Resume</h2>
            				<p className="choose">My formal Bio Details.</p>
            				<div className="underline"></div>
              			</div> 
              		
              				<Tabs defaultTab="one" onChange={(tabId) => { console.log(tabId) }}>
              					<Row>
              					<Col lg={3} sm={12}>

        							   <TabList>
                         <div>
                          <FaUserGraduate/>
          								<Tab tabFor="one">Education</Tab>
                          </div>

                          <div>
                          <FaHistory/>
          								<Tab tabFor="two">Work History</Tab>
                          </div>
                          <div>
                          <FaLaptopCode/>
          								<Tab tabFor="three">Programming Skill</Tab>
                          </div>
                          <div>
                          <FaPalette/>
          								<Tab tabFor="four">Designer Skills</Tab>
                          </div>
                          <div>
                           <FaRegChartBar/>
          								<Tab tabFor="five">SEO Skills</Tab>
          								</div>
        							</TabList>
        						</Col>
        						<Col lg={9} sm={12}>
	        							<TabPanel tabId="one">

	      									<h5>Sengunthar Engineering College	</h5>
	      									<h5>BE Computer Science and  Engineer</h5>
	      									<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											
	      									<h5>B.sc in Computer Engineer</h5>
	      									<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
	      									<h5>B.sc in Computer Engineer</h5>
	      									<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
	        						 	</TabPanel>
	        						 	<TabPanel tabId="two">
      										<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
        						 		</TabPanel>
        						 		<TabPanel tabId="three">
        						 			<div>
      											<li>HTML</li>
      											<li>CSS</li>
      											<li>JQuery</li>
      											<li>Bootrap</li>
      											<li>ReactJs</li>
      											<li>HTML</li>
      										</div>
        						 		</TabPanel>
        						 		<TabPanel tabId="four">
      										<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
        						 		</TabPanel>
        						 		<TabPanel tabId="five">
      										<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
											<h5>Envato University</h5>
      										<h5>B.sc in Computer Engineer</h5>
      										<p>Reference site about Lorem Ipsum, giving information on its origins, as well as a 
											random Lipsum generator.</p>
        						 		</TabPanel>
        						 	
      							</Col>
      							</Row>
      						</Tabs>
	        			
             		</div>	
             </Myresume>


		);

	}


export default Resume;

const Myresume =styled.section `


h2{

	font-size:48px;
	text-transform:uppercase;
	margin-top:100px;
	text-align:center;
	color:#0ABEAD;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Bold;
}

.underline{

	width: 100px;
	border:1px solid;
	margin-left:45%;
 	margin-bottom:40px; 
  	color:#0ABEAD;

}
.choose {
	font-size:16px;
	color:#000;
	font-family:DejaVuSans,AdobeInvisFont,MyriadHebrew-Regular,Poppins-Regular;
	text-align:center;
}

button, select {
  text-transform: none;
  width: 195px;
  text-align: left;
  margin-top:10px;
  margin-left:10px;
}
.rwt__tablist:not([aria-orientation="vertical"]) .rwt__tab[aria-selected="true"]:after {
   
   border-bottom: none;
}
.rwt__tablist:not([aria-orientation="vertical"]) {
    border-bottom: none; 
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

  h2 {
    margin-top:40px;

  }

}

`