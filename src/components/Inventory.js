import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
constructor(){
	super();
	this.renderInventory=this.renderInventory.bind(this);
}

handleChange(e,key){
	const fruit=this.props.fruits[key];
	//prendre une copie et maj
	const updatedFruit={
		...fruit,
[e.target.name]:e.target.value
	}
	this.props.updateFruit(key,updatedFruit);
}



renderInventory(key){

	const fruit = this.props.fruits[key];
	return(
		<div className="fruit-edit" key={key}>
		<input type="text" name="name" value={fruit.name} placeholder="Fruit Name" onChange={(e)=>this.handleChange(e,key)}/>
		<input type="text" name="price" value={fruit.price} placeholder="Fruit Price" onChange={(e)=>this.handleChange(e,key)}/>
		<select type="text" name="status" value={fruit.status} placeholder="Fruit Status"onChange={(e)=>this.handleChange(e,key)}>
		
	<option value="available">Fresh!</option>
	<option value="unavailable">Sold Out!</option>

</select>
		<textarea type="text" name="desc" value={fruit.desc} placeholder="Fruit Desc" onChange={(e)=>this.handleChange(e,key)}/>
		<input type="text" name="image" value={fruit.image} placeholder="Fruit Image" onChange={(e)=>this.handleChange(e,key)}/>

<button onClick={()=>this.props.removeF(key)}>Remove Fruit</button>
		</div>
		)
}


	render(){
		return (

			<div>
				<h2>Inventory</h2>
				{Object.keys(this.props.fruits).map(this.renderInventory)}
			<AddFishForm addF={this.props.addF}/>
			<button onClick={this.props.loadSamples}>Load simple fruits</button>

			</div>
			
			)
	}
}

Inventory.propTypes={
fruits:React.PropTypes.object.isRequired,
updateFruit:React.PropTypes.func.isRequired,
removeF:React.PropTypes.func.isRequired,
addF:React.PropTypes.func.isRequired,
loadSamples:React.PropTypes.func.isRequired

};


export default Inventory;