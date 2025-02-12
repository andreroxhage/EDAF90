import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useEffect, useState} from 'react';

import NavBar from './components/NavBar';
import {useNavigation, useLocation, Outlet} from 'react-router-dom';
import BootStrapSpinner from './components/BootStrapSpinner';
import Salad from './salad';

function App() {
	const [shoppingCart, setShoppingCart] = useState(fetchCart);
	const navigation = useNavigation();

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

function fetchCart() {
	let cart = window.localStorage.getItem('cart');
		if(!cart){
			return [];
		}else{
			cart = Salad.parse(cart);
		}
	return cart;
}

export default App;



//'[[][][]]'