import {useContext, useEffect, useState} from 'react';
import MySaladSelect from './MySaladSelect';
import MySaladCheckbox from './MySaladCheckbox';
import Salad from '../salad';
import { useOutletContext } from 'react-router-dom';

function ComposeSalad() {

	const { inventory, setShoppingCart, other } = useOutletContext();

	let extras = Object.keys(inventory).filter((item) => inventory[item].extra);
	let foundations = Object.keys(inventory).filter(
		(item) => inventory[item].foundation
	);
	let proteins = Object.keys(inventory).filter(
		(item) => inventory[item].protein
	);
	let dressings = Object.keys(inventory).filter(
		(item) => inventory[item].dressing
	);

	const [foundation, setFoundation] = useState();
	const [protein, setProtein] = useState('');
	const [dressing, setDressing] = useState('');
	const [extra, setExtra] = useState({});

	function handleSubmit(e) {
		e.preventDefault();

		let newSalad = new Salad();
		let chosenExtra = Object.keys(extra).filter((i) => extra[i]); // due to:  {"Bacon":true,"Fetaost":false}

		chosenExtra.forEach((ingredient) =>
			newSalad.add(ingredient, inventory[ingredient])
		);

		e.target.classList.add('was-validated');

		if (e.target.checkValidity()) {
			newSalad
				.add(foundation, inventory[foundation])
				.add(protein, inventory[protein])
				.add(dressing, inventory[dressing]);

			setShoppingCart((prevSalads) => [...prevSalads, newSalad]);
			resetForm(e);
		}
	}
	function resetForm(e) {
		setFoundation('');
		setProtein('');
		setDressing('');
		setExtra({});
		e.target.classList.remove('was-validated');
	}

	function onFoundationChange(e) {
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
		<div className='row h-200 p-5 bg-light border rounded-3 '>
			<h3>Välj innehållet i din sallad</h3>
			<form
				className='d-flex flex-column my-4 needs-validation'
				onSubmit={handleSubmit}
				noValidate
			>
				<div className='mb-2'>
					<p>Välj bas</p>
					<MySaladSelect
						id={'foundationId'}
						options={foundations}
						value={foundation}
						onChange={onFoundationChange}
					/>
				</div>

				<div className='mt-2 mb-2'>
					<p>Välj protein</p>
					<MySaladSelect
						id={'proteinId'}
						options={proteins}
						value={protein}
						onChange={onProteinChange}
					/>
				</div>

				<div className='mb-2 mt-2'>
					<p>Välj tillbehör</p>
					<MySaladCheckbox
						id={'extraId'}
						options={extras}
						value={extra}
						onChange={onExtraChange}
					/>
				</div>

				<div className='mt-2 mb-2'>
					<p>Välj dressing</p>
					<MySaladSelect
						id={'dressingId'}
						options={dressings}
						value={dressing}
						onChange={onDressingChange}
					/>
				</div>

				<button type='submit' className='mt-4 btn btn-primary'>
					Beställ
				</button>
			</form>
		</div>
	);
}
export default ComposeSalad;
