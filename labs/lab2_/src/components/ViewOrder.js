import React from 'react';

export default function ViewOrder({shoppingCart}) {
	return (
		<div className='row h-200 p-5 bg-light border rounded-3'>
			<h3>Varukorg</h3>
			<div className='d-flex flex-column'>
				{shoppingCart.map((salad) => (
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
				{shoppingCart.length >= 1 && (
					<div className='mt-4'>
						<p>
							{'Totalt pris: ' +
								shoppingCart.reduce((prev, next) => prev + next.getPrice(), 0) +
								' kr'}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
