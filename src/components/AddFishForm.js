import React from 'react';

class AddFishForm extends React.Component {

createF(event){
	event.preventDefault();
	// alert('fish')

const fruit={
	name:this.name.value,
	price:this.price.value,
	status:this.status.value,
	desc:this.desc.value,
	image:this.image.value,
}
console.log(fruit)
}

	render(){
		return (
	
<form className="fish-edit" onSubmit={(e)=>this.createF(e)}>
<input  ref={(input)=>this.name = input}type="text" placeholder="Fruit Name"/>
<input  ref={(input)=>this.price = input}type="text" placeholder="Fruit Price"/>
<select>
	<option value="available">Fresh!</option>
	<option value="unavailable">Sold Out!</option>

</select>
<input ref={(input)=>this.status = input} type="text" placeholder="Fruit Status"/>
<textarea ref={(input)=>this.desc = input} placeholder="Fruit Desc"/>
<input  ref={(input)=>this.image = input}type="text" placeholder="Fruit Image"/>
<button type="submit">+ Add Item</button>



</form>

)
	}
}
export default AddFishForm;