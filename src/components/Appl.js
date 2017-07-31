import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'

class Appl extends React.Component{
	render(){
		return(
	<div className="catch-of-the-day">
	    <div className="menu">
			<Header tagline="Fresh Fruits Market" />
		</div>
			<Order />
				<Inventory />
		</div>
			)
	}
}

export default Appl;