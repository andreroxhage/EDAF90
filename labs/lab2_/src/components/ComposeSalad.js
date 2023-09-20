import {useContext, useEffect, useState} from 'react';
import inventory from '../inventory.mjs';
import MySaladSelect from './MySaladSelect';
import MySaladCheckbox from './MySaladCheckbox';
import Salad from '../salad';

function ComposeSalad({inventory, setShoppingCart}) {
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

	const [foundation, setFoundation] = useState(foundations[1]);
	const [protein, setProtein] = useState(proteins[0]);
	const [dressing, setDressing] = useState(dressings[0]);
	const [extra, setExtra] = useState({});

	function handleSubmit(e) {
		e.preventDefault();

		let newSalad = new Salad();
		let chosenExtra = Object.keys(extra).filter((i) => extra[i]); // due to:  {"Bacon":true,"Fetaost":false}

		chosenExtra.forEach((ingredient) =>
			newSalad.add(ingredient, inventory[ingredient])
		);

		newSalad
			.add(foundation, inventory[foundation])
			.add(protein, inventory[protein])
			.add(dressing, inventory[dressing]);

		setShoppingCart((prevSalads) => [...prevSalads, newSalad]);
		resetForm();
	}
	function resetForm() {
		setFoundation(foundations[0]);
		setProtein(proteins[0]);
		setDressing(dressings[0]);
		setExtra({});
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
		<div className='row h-200 p-5 bg-light border rounded-3'>
			<h3>Välj innehållet i din sallad</h3>
			<form className='d-flex flex-column my-4' onSubmit={handleSubmit}>
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
