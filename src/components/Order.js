import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {

constructor(){
	super()
	this.renderOrder=this.renderOrder.bind(this)
}

renderOrder(key){
	const fruit = this.props.fruits[key];
	const count = this.props.order[key];
	const removeButton= <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

	if(!fruit || fruit.status ==='unavailable'){
		return <li key={key} >Sorry, {fruit ? fruit.name : 'fruit'} is no longer available!</li>

	}
	return (
<li key={key}>
<span>{count}kg {fruit.name} {removeButton}</span>
<span className="price">{formatPrice(count * fruit.price)}</span>
{removeButton}</li>
		)
}


	render(){
		const orderIds=Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) =>{
			const fruit = this.props.fruits[key];
			const count = this.props.order[key];
			const isAvailable= fruit && fruit.status ==='available';
			if(isAvailable){
				return prevTotal + (count * fruit.price || 0)
			}
			return prevTotal
		},0);
		return (
			<div className="order-wrap">
				<h2>Your Order</h2>
				<ul className="order">
				{orderIds.map(this.renderOrder)}
					<li className="total">
					<strong>Total:</strong>
		{formatPrice(total)}
		</li>
				</ul>
				
		
			</div>
			)
	}
}

export default Order;