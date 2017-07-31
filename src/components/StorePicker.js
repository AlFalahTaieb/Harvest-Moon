import React from 'react';
import {getFunName} from '../helpers'


class StorePicker extends React.Component {
	render(){
		// return React.createElement('p',{className:'Testing'},' I love You')
		return (
		<form className="store-selector">
	{/*POur cOMMENTER */}
		<h2>Please Enter a Store</h2>
		<input type="text" required placeHolder="Store Name" defaultValue={getFunName()}></input>
		<button type="submit">visit Store </button>
		</form>
		)
	}
}

export default StorePicker;