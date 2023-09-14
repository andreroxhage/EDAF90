import './App.css';
import React, {useState, useReducer} from 'react';

// Define action types for the reducer
const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'decrement',
};

function App() {
	// Use the useReducer hook to manage state and dispatch actions
	const [state, dispatch] = useReducer(reducer, {count: 0});

	// Define a reducer function to handle state updates
	function reducer(state, action) {
		switch (action.type) {
			case ACTIONS.INCREMENT:
				return {count: state.count + 1};
			case ACTIONS.DECREMENT:
				return {count: state.count - 1};
			default:
				return state;
		}
	}

	// Render the component with buttons for incrementing and decrementing
	return (
		<>
			<button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
			<span>{state.count}</span>
			<button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
		</>
	);
}

export default App;
