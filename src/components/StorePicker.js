import React from 'react';
import {getFunName} from '../helpers'


class StorePicker extends React.Component {
goToStore(){
//Attraper le text
//copier dans l'url

console.log('you Changed the URl');


}

	render(){
		// return React.createElement('p',{className:'Testing'},' I love You')
		return (
		<form className="store-selector" onSubmit={this.goToStore}>
	{/*POur cOMMENTER */}
		<h2>Please Enter a Store</h2>
		<input type="text" required placeholder="Store Name" defaultValue={getFunName()}></input>
		<button type="submit">Visit the Store </button>
		</form>
		)
	}
}

export default StorePicker;