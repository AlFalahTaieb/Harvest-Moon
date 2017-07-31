import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory'
import sampleFruits from '../sample-fruits'
import Fruit from './Fruit'

class Appl extends React.Component{
constructor(){
	super();

	this.addF=this.addF.bind(this);
		this.loadSamples=this.loadSamples.bind(this);
	//get initialState
	this.state={
		fruits:{},
		order:{}
	}
}

addF(fruit){
//MAJ State
const fruits={...this.state.fruits} // prendre toutes les variables qu'on a composé et les copier  
//ajouter les nouveaux fruits
const timestamp=Date.now();
fruits[`fruit-${timestamp}`]=fruit;

//set State
this.setState({fruits})
}

loadSamples(){
this.setState({
	fruits:sampleFruits
});
}


	render(){


		return(
	<div className="catch-of-the-day">
	    <div className="menu">
			<Header tagline="Fresh Fruits Market" />
				<ul className="list-of-fruits">
	{
		Object
		.keys(this.state.fruits)
					.map(key=><Fruit  key={key} details={this.state.fruits[key]}/>)
				}
		</ul>
				
		</div>
			<Order />
				<Inventory addF={this.addF}  
				loadSamples={this.loadSamples}/> 
	
		</div>
			)
	}
}

export default Appl;