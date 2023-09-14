import {useContext, useEffect, useState} from 'react';
import inventory from './inventory.mjs';
import MySaladSelect from './MySaladSelect';
import MySaladCheckbox from './MySaladCheckbox';

function ComposeSalad(props) {
	const [foundation, setFoundation] = useState('Pasta');
	const [protein, setProtein] = useState('Kyckling');
	const [dressing, setDressing] = useState('Ceasardressing');
	const [extra, setExtra] = useState({Bacon: true, Fetaost: true});
	const [inventory, setInvertory] = useState({});

	/*
	useEffect(() => {
		fetch('rest_api_url')
			.then((respons) => respons.json())
			.then((data) => {
				setInvertory(data);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			});
	}, []);
	*/

	/*
  1. The ComposeSalad form state, which changes while the user is composing a salad.
     This state should be local to ComposeSalad.

  2. The list of salads in the shopping basket. This state is created and modified by ComposeSalad
     and viewed by ViewOrder, which we will write later. This state belongs to a common ancestor
     of the producer/viewer, the App component.
*/

	useEffect(() => {
		console.log('Foundation: ' + foundation);
		console.log('Protein: ' + protein);
		console.log('Tillbehör: ' + JSON.stringify(extra));
		console.log('Dressing: ' + dressing);
	}, [foundation, protein, dressing, extra]);

	/*
	function updateSalad() {
		console.log('\n --- ');
		const newSalad = {
			foundation,
			protein,
			dressing,
			extra,
		};
		setSalad(newSalad);
		console.log(salad);
		console.log('\n --- ');
	}
*/
	function handleSubmit(e) {
		// 5. To-do: Handle form submission
		e.preventDefault();
	}

	function onFoundationChange(e) {
		console.log(
			'What is this in event handlers? ' + this + ', typeof: ' + typeof this
		);
		setFoundation(e.target.value);
	}
	function onProteinChange(e) {
		setProtein(e.target.value);
	}
	function onDressingChange(e) {
		setDressing(e.target.value);
	}
	function onExtraChange(newExtra) {
		setExtra(newExtra);
	}

	return (
		<div className='container col-12'>
			<div className='row h-200 p-5 bg-light border rounded-3'>
				<h1>Välj innehållet i din sallad</h1>
				<form className='d-flex flex-column my-4' onSubmit={handleSubmit}>
					<div className='mb-2'>
						<p>Välj bas</p>
						<MySaladSelect
							id={'foundationId'}
							options={Object.keys(props.inventory).filter(
								(name) => props.inventory[name].foundation
							)}
							value={foundation}
							onChange={onFoundationChange}
						/>
					</div>

					<div className='mt-2 mb-2'>
						<p>Välj protein</p>
						<MySaladSelect
							id={'proteinId'}
							options={Object.keys(props.inventory).filter(
								(name) => props.inventory[name].protein
							)}
							value={protein}
							onChange={onProteinChange}
						/>
					</div>

					<div className='mb-2 mt-2'>
						<p>Välj tillbehör</p>
						<MySaladCheckbox
							id={'extraId'}
							options={Object.keys(props.inventory).filter(
								(name) => props.inventory[name].extra
							)}
							value={extra}
							onChange={onExtraChange}
						/>
					</div>

					<div className='mt-2 mb-2'>
						<p>Välj dressing</p>
						<MySaladSelect
							id={'dressingId'}
							options={Object.keys(props.inventory).filter(
								(name) => props.inventory[name].dressing
							)}
							value={dressing}
							onChange={onDressingChange}
						/>
					</div>

					<button type='button' className='mt-4 btn btn-primary'>
						Beställ
					</button>
				</form>
			</div>
		</div>
	);
}
export default ComposeSalad;
