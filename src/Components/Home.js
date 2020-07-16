import React from 'react';
import Heroslider from './Heroslider';
import Aboutus from './Aboutus';
import Resume from './Resume';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';


function Home() {
	return(
			<div>
				<Heroslider/>
				<Aboutus/>
				<Services/>
				<Resume/>
				<Pricing/>
				<Contact/>
			</div>
);
}


export default Home;
