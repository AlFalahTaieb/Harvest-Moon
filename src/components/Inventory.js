import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
	render(){
		return (

			<div>
				<h2>Inventory</h2>
			<AddFishForm addF={this.props.addF}/>
			<button onClick={this.props.loadSamples}>Load simple fruits</button>

			</div>
			
			)
	}
}
export default Inventory;