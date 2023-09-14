import {useEffect, useState} from 'react';
import inventory from './inventory.mjs';
import MySaladSelect from './MySaladSelect';

function ComposeSalad(props) {
	const [foundation, setFoundation] = useState('Pasta');
	const [protein, setProtein] = useState('');
	const [dressing, setDressing] = useState('');
	const [extra, setExtra] = useState({Bacon: true, Fetaost: true});

	useEffect(() => {
		console.log('Foundation: ' + foundation);
		console.log('Protein: ' + protein);
		console.log('Tillbehör: ' + extra);
		console.log('Dressing: ' + dressing);
	}, [foundation, protein, dressing, extra]);

	function handleSubmit(e) {
		// 5. To-do: Handle form submission
		e.preventDefault();
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

	return (
		<div className='container col-12'>
			<div className='row h-200 p-5 bg-light border rounded-3'>
				<h1>Välj innehållet i din sallad</h1>
				<form className='my-4' onSubmit={handleSubmit}>
					<div className='mb-4'>
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

					<div className='mb-4 '>
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

					{/*<div className='mb-4'>
						<p>Välj tillbehör</p>

						<input className='form-check-input' type='checkbox' value='Bacon' />
						<label className='form-check-label'>Bacon</label>
					</div>*/}

					<div className='mb-4 '>
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

					<button type='button' className='btn btn-primary'>
						Beställ
					</button>
				</form>
			</div>
		</div>
	);
}
export default ComposeSalad;
