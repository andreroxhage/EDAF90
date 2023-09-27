import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useEffect, useState} from 'react';

import NavBar from './components/NavBar';
import {Outlet} from 'react-router-dom';

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);

	return (
		<div className='container py-4'>
			<Header />
			<NavBar />

			<Outlet context={{shoppingCart, setShoppingCart}} />

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
