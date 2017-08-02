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
	this.updateFruit=this.updateFruit.bind(this);
	this.removeF=this.removeF.bind(this);
	this.removeFromOrder=this.removeFromOrder.bind(this);
	//get initialState
	this.state={
		fruits:{},
		order:{}
	}
}

componentWillMount(){
	//befre rendering the app 
	this.ref=base.syncState(`${this.props.params.storeId}/fruits`,
	{
		context:this,
		state:'fruits'
	});
//check

const localStorageRef=localStorage.getItem(`order-${this.
	props.params.storeId}`);

if (localStorageRef){
	this.setState({
		order:JSON.parse(localStorageRef)
	});
}


}
componentWillUnmount(){
	base.removeBinding(this.ref);
}

componentUpdate(nextProps, nextState){
localStorage.setItem(`order-${this.props.params.storeId}`,
JSON.stringify(nextState.order))
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


updateFruit(key,updatedFruit){
	const fruits={...this.state.fruits};
	fruits[key]=updatedFruit;
	this.setState({fruits});
}


removeF(key){
const fruits={...this.state.fruits};
fruits[key]=null;
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

removeFromOrder(key){
const order ={...this.state.order};
delete order[key];
this.setState({order})

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
					.map(key=><Fruit  key={key}  index ={key} 
						details={this.state.fruits[key]}
						addToOrder={this.addToOrder}
						/>)
				}
		</ul>
				
		</div>
			<Order 
			fruits={this.state.fruits} 
			order={this.state.order}
			params={this.props.params}
			removeFromOrder={this.removeFromOrder}
			 />
				<Inventory addF={this.addF}  
				loadSamples={this.loadSamples}
				fruits={this.state.fruits}
				updateFruit={this.updateFruit}
				removeF={this.removeF}
				/> 
	
		</div>
			)
	}
}

Appl.propTypes={
	params:React.PropTypes.object.isRequired,
	//toujours mettre après isRequired,
}


export default Appl;