import React from 'react';
import styled from 'styled-components';



function Footer() {


return(

		<Myfooter>
				<div className="footer">

					<h5>© 2019 sample. All rights reserved.</h5>

				</div>
         </Myfooter>

);
}

export default Footer;


const Myfooter = styled.section `

background:#fff;
width:100%;
height:80px;





h5 {

	text-align:center;
	padding-top:20px;
}


`

