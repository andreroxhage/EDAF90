import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import ComposeSalad from './components/ComposeSalad';
import ViewOrder from './components/ViewOrder';

const router = createBrowserRouter([
	{
		element: <App />,
		path: '',
		children: [
			{path: 'compose-salad', element: <ComposeSalad />},
			{path: 'view-order', element: <ViewOrder />},
		],
	},
]);
export default router;
