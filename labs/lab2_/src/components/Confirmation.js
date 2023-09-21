import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Confirmation() {
	const outletContext = useOutletContext();
	let cart = outletContext.shoppingCart;
	let latest = cart[cart.length -1];

	return (
		<h5 className='mb-3 pb-4'>
		
		Snyggt jobbat, du har lagt till {latest.id} i varukorgen.
		
		</h5>

	);
	
}
export default Confirmation;
