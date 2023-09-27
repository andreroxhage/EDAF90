import {NavLink, createBrowserRouter} from 'react-router-dom';
import App from './App';
import ComposeSalad from './components/ComposeSalad';
import ViewOrder from './components/ViewOrder';
import WelcomePage from './components/WelcomePage';
import Confirmation from './components/Confirmation';
import inventoryLoader from './inventoryLoader';

const router = createBrowserRouter([
	{
		element: <App />,
		path: '',
		errorElement: (
			<div className='p-2 d-flex w-50 flex-column'>
				<h1>Oops! 404 Not Found, stupid</h1>

				<p>
					<NavLink to='/'>Back to a page that actually exists</NavLink>
				</p>
			</div>
		),
		children: [
			{
				path: '/',
				element: <WelcomePage />,
			},
			{
				path: 'compose-salad',
				loader: inventoryLoader,
				Component: ComposeSalad,
			},
			{
				path: 'view-order',
				element: <ViewOrder />,
				children: [{path: ':saladID', element: <Confirmation />}],
			},
			{path: '/*', element: <ComposeSalad />}, //nån grej här!!!!
		],
	},
]);
export default router;
