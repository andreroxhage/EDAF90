import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {useState} from 'react';

import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import inventory from './inventory.ES6';

function App() {
	const [shoppingCart, setShoppingCart] = useState([]);

	/*
	useEffect(() => {
		fetch('rest_api_url')
			.then((respons) => respons.json())
			.then((data) => {
				setInvertory(data);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			})
			.finally((msg) => {
				console.log('Fina l y' + msg);
			});
	}, []);
	*/

	return (
		<div className='container py-4'>
			<Header />
			<NavBar />

			<Outlet
				context={{ shoppingCart, setShoppingCart, inventory }} />

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
