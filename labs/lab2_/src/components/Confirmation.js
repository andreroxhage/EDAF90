import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function Confirmation() {
	const outletContext = useOutletContext();
	const saladID = useParams();
	let cart = outletContext.shoppingCart;

	return (
		<h5 className='mb-3 pb-4'>
		
		Snyggt jobbat, du har lagt till {JSON.stringify(saladID)} i varukorgen.
		
		</h5>

	);
	
}
export default Confirmation;
