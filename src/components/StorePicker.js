import React from 'react';
import {getFunName} from '../helpers'


class StorePicker extends React.Component {
goToStore(event){
	event.preventDefault();
//Attraper le text
console.log('you Changed the URl');
//copier dans l'url
const idS=this.storeInput.value;
this.context.router.transitionTo(`/store/${idS}`)
console.log(this.storeInput.value)


}

	render(){
		// return React.createElement('p',{className:'Testing'},' I love You')
		return (
		<form className="store-selector" onSubmit={(e)=>this.goToStore(e)}>
	{/*POur cOMMENTER */}
		<h2>Please Enter a Store</h2>
		<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=>{this.storeInput=input}}/>
		<button type="submit">Visit the Store </button>
		</form>
		)
	}
}

StorePicker.contextTypes={
	router : React.PropTypes.object
}

export default StorePicker;