import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import ComposeSalad from './components/ComposeSalad';
import ViewOrder from './components/ViewOrder';
import WelcomePage from './components/WelcomePage'
import Confirmation from './components/Confirmation'

const router = createBrowserRouter([
	{
		element: <App />,
		path: '',
		children: [
			{path: '', element: <WelcomePage /> },
			{path: 'compose-salad', element: <ComposeSalad />},
			{path: 'view-order', element: <ViewOrder />, children: [

				{path: 'boop', 
				element: <Confirmation />}
		],}
		
		],
	},
]);
export default router;
