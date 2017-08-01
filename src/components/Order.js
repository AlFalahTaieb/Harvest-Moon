import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {
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