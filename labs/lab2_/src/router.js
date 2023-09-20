import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import ComposeSalad from './components/ComposeSalad';
import ViewOrder from './components/ViewOrder';
import WelcomePage from './components/WelcomePage'

const router = createBrowserRouter([
	{
		element: <App />,
		path: '',
		children: [
			{path: '', element: <WelcomePage /> },
			{path: 'compose-salad', element: <ComposeSalad />},
			{path: 'view-order', element: <ViewOrder />}
		],
	},
]);
export default router;
