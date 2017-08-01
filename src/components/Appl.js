import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFruits from '../sample-fruits';
import Fruit from './Fruit';
import base from '../base';
class Appl extends React.Component{
constructor(){
	super();

	this.addF=this.addF.bind(this);
		this.loadSamples=this.loadSamples.bind(this);
			this.addToOrder=this.addToOrder.bind(this);
	//get initialState
	this.state={
		fruits:{},
		order:{}
	}
}

componentWillMount(){
	this.ref=base.syncState(`${this.props.params.storeId}/fruits`,
	{
		context:this,
		state:'fruits'
	});
}
componentWillUnmount(){
	base.removeBinding(this.ref);
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

addToOrder(key){
	//copier state
	const order ={...this.state.order};
	//update
	order[key]=order[key]+1 ||1;
	this.setState({order});
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
					.map(key=><Fruit  key={key}  index ={key} details={this
						.state.fruits[key]}
						addToOrder={this.addToOrder}
						/>)
				}
		</ul>
				
		</div>
			<Order fruits={this.state.fruits} order={this.state.order} />
				<Inventory addF={this.addF}  
				loadSamples={this.loadSamples}/> 
	
		</div>
			)
	}
}

export default Appl;