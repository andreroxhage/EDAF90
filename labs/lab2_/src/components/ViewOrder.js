import React from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function ViewOrder() {
	const outletContext = useOutletContext();

	console.log(outletContext.shoppingCart); // Log the shopping cart data

	return (
		<div className='row h-200 p-5 bg-light border rounded-3'>
			<Outlet/>
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
								outletContext.shoppingCart.reduce((prev, next) => prev + next.getPrice(), 0) +
								' kr'}
						</p>
					</div>
				)}
			</div>

		</div>
	);
}
