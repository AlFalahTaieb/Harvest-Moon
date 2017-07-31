import React from 'react';
import { formatPrice } from '../helpers'

class Fruit extends React.Component{
	render(){
const {details}=this.props;

return (
<li className="menu-fruit">
<img src={details.image} alt={details.name}/>
<h3 className="fruit-name">
	{details.name}
	<span className="price">{formatPrice(details.price)}</span>
</h3>
<p>{details.desc}</p>
<button>Add To Order</button>

</li>


)
	}
}

export default Fruit;