import React, { useState } from 'react';
import {Outlet, useOutletContext, useNavigate} from 'react-router-dom';

export default function ViewOrder() {
	const outletContext = useOutletContext();
	const [resp, setResp] = useState(null);
	const navigate = useNavigate();

	function handleOrderSubmit(e) {
		e.preventDefault();

		const url = 'http://localhost:8080/orders/';

		console.log(outletContext.shoppingCart);

		let order = outletContext.shoppingCart.map((salad) =>
			Object.keys(salad.ingredients)
		);
		console.log(JSON.stringify(order.keys));

		return fetch(url, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(order),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Error code: ' + response.status);
				}
				return response.json();})
				
				.then((json) => {
					navigate('/view-order/');
					setResp(json);
					outletContext.setShoppingCart([]);
				
			});
	}

	return (
		<div className='row h-200 p-5 bg-light border rounded-3'>
			<Outlet context={outletContext} />
			{resp && 
			
			<h5 className='mb-3 pb-4'>
		
				<p>Du har beställt {JSON.stringify(resp.order)}</p>
				<p>Pris: {JSON.stringify(resp.price)}</p>
				ID: {JSON.stringify(resp.uuid)}
		
			</h5>}

			<h3>Varukorg</h3>
			<div className='d-flex flex-column'>
				{outletContext.shoppingCart.map((salad) => (
					<div
						className='column mt-2 p-3 border border-grey bg-white rounded-3'
						key={salad.uuid}
					>
						<h3>{salad.id}</h3>
						<p>
							{Object.keys(salad.ingredients).reduce(
								(prev, next) => prev + ' ' + next,
								''
							)}
						</p>
						<p>{salad.getPrice() + ' kr'}</p>
					</div>
				))}
				{outletContext.shoppingCart.length >= 1 && (
					<div className='mt-4'>
						<p>
							{'Totalt pris: ' +
								outletContext.shoppingCart.reduce(
									(prev, next) => prev + next.getPrice(),
									0
								) +
								' kr'}
						</p>
					</div>
				)}
			</div>
			<form onSubmit={handleOrderSubmit} action='http://localhost:8080/'>
				<button type='submit' className='mt-4 btn btn-primary'>
					Beställ
				</button>
			</form>
		</div>
	);
}
