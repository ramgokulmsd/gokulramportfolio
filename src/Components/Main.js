import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './Home';
import Aboutus from './Aboutus';
import Resume from './Resume';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';





const Main =() => (
 
 <Switch>
 	<Route exact path="/" component={Home} />
 	<Route  path="/aboutus" component={Aboutus} />
 	<Route  path="/resume" component={Resume} />
 	<Route  path="/Services" component={Services} />
 	<Route  path="/pricing" component={Pricing} />
 	<Route  path="/contact" component={Contact} />
 	
 </Switch>

)


export default Main;