import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Confirmation() {
	const outletContext = useOutletContext();
	let cart = outletContext.shoppingCart;
	let latest = cart[cart.length -1];

	return (
		<h1>
		
		Snyggt jobbat, du har lagt till {latest.id} i varukorgen.
		
		</h1>

	);
	
}
export default Confirmation;
