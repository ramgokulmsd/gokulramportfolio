import React from 'react';
import Headerbar from './Components/Headerbar';
import Heroslider from './Components/Heroslider';
import Aboutus from './Components/Aboutus';
import Resume from './Components/Resume';
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {

	return (
		<div>
			<Headerbar />
			<Heroslider />
			<Aboutus />
			<Services />
			<Resume />
			<Pricing />
			<Contact />
			<Footer />
		</div>
	);
}


export default App;