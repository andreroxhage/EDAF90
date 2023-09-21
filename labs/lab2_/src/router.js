import {NavLink, createBrowserRouter} from 'react-router-dom';
import App from './App';
import ComposeSalad from './components/ComposeSalad';
import ViewOrder from './components/ViewOrder';
import WelcomePage from './components/WelcomePage';

const router = createBrowserRouter([
	{
		element: <App />,
		path: '',
		errorElement: (
			<div className='p-2 d-flex w-50 flex-column'>
				<h1>Oops! 404 Not Found</h1>

				<p>
					<NavLink to='/'>Back to Safety</NavLink>
				</p>
			</div>
		),
		children: [
			{
				path: '',
				element: <WelcomePage />,
			},
			{path: 'compose-salad', element: <ComposeSalad />},
			{path: 'view-order', element: <ViewOrder />},
		],
	},
]);
export default router;
