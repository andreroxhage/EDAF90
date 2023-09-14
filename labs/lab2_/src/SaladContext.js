import {createContext, useContext, useState} from 'react';

// Create the SaladContext
const SaladContext = createContext();

// Create a SaladProvider component to wrap your app with
function SaladProvider({children}) {
	const [salad, setSalad] = useState({
		foundation: '',
		protein: '',
		dressing: '',
		extra: [],
	});

	return (
		<SaladContext.Provider value={{salad, setSalad}}>
			{children}
		</SaladContext.Provider>
	);
}

export {SaladContext, SaladProvider};
