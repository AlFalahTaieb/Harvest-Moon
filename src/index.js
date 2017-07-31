//ça va chager le package react dans la variable REACT, ( tout ça est dans le package Json)
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Match , Miss} from 'react-router';

import './css/style.css'//importer le css
import StorePicker from './components/StorePicker';
import Appl from './components/Appl';
import NotFound from './components/NotFound';

const Root =()=>{
	return (
		<BrowserRouter>
		<div>
			<Match exactly pattern ="/" component={StorePicker}/>
			<Match exactly pattern ="/store/:storeId" component={Appl}/>
			<Miss component={NotFound}/>

		</div>
		
		</BrowserRouter>
		)
}

render(<Root/>,document.querySelector('#main'));
