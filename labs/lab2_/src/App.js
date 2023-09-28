import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useEffect, useState} from 'react';

import NavBar from './components/NavBar';
import {useNavigation, useLocation, Outlet} from 'react-router-dom';
import BootStrapSpinner from './components/BootStrapSpinner';
import Salad from './salad';

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);
	const navigation = useNavigation();

	/*
	useEffect(() => {
		// Load shopping cart from localStorage when the component mounts
		const savedShoppingCart = window.localStorage.getItem('shoppingCart');
		if (savedShoppingCart) {
			setShoppingCart(Salad.parse(savedShoppingCart));
		}
	}, [setShoppingCart]);

	//Function to update localStorage whenever shoppingCart changes
	useEffect(() => {
		window.localStorage.setItem('shoppingCart', Salad.parse(shoppingCart));
	}, [shoppingCart]);
	*/

	return (
		<div className='container py-4'>
			<Header />
			<NavBar />

			{navigation.state === 'loading' || navigation.state === 'submitting' ? (
				<BootStrapSpinner />
			) : (
				<Outlet context={{shoppingCart, setShoppingCart}} />
			)}

			<footer className='pt-3 mt-4 text-muted border-top'>
				EDAF90 - webprogrammering
			</footer>
		</div>
	);
}

function Header() {
	return (
		<header className='pb-3mb-4border-bottom'>
			<span className='fs-4'>Min egen salladsbar</span>
		</header>
	);
}

export default App;
