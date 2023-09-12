import {useEffect, useState} from 'react';
import inventory from './inventory.mjs';

function ComposeSalad(props) {
	let extras = Object.keys(props.inventory).filter(
		(name) => props.inventory[name].foundation
	);
	const [foundation, setFoundation] = useState('Pasta');
	const [extra, setExtra] = useState({Bacon: true, Fetaost: true});

	function handleSubmit(event) {
		// 5. To-do: Handle form submission
		event.preventDefault();
	}

	function onFoundationChange(event) {
		setFoundation(event);
	}

	return (
		<div className='container col-12'>
			<div className='row h-200 p-5 bg-light border rounded-3'>
				<h1>Välj innehållet i din sallad</h1>
				<form className='my-4' onSubmit={handleSubmit}>
					<div className='mb-4'>
						<p>Välj bas</p>
						<select
							onChange={onFoundationChange}
							className='form-select'
							aria-label='Default select example'
						>
							<option selected>{foundation}</option>

							{Object.keys(props.inventory)
								.filter((name) => props.inventory[name].foundation)
								.map((name) => (
									<option key={name} value='1'>
										{name}
									</option>
								))}
						</select>
					</div>

					<div className='mb-4 '>
						<p>Välj protein</p>
						<select className='form-select' aria-label='Default select example'>
							<option selected>Välj</option>

							{Object.keys(props.inventory)
								.filter((name) => props.inventory[name].protein)
								.map((name) => (
									<option key={name} value='1'>
										{name}
									</option>
								))}
						</select>
					</div>

					<div className='mb-4'>
						<p>Välj tillbehör</p>

						<input className='form-check-input' type='checkbox' value='Bacon' />
						<label className='form-check-label'>Bacon</label>
					</div>

					<div className='mb-4 '>
						<p>Välj dressing</p>
						<select
							className='form-select'
							aria-label='Default select example'
							defaultValue={'Väää'}
						>
							{Object.keys(props.inventory)
								.filter((name) => props.inventory[name].dressing)
								.map((name) => (
									<option key={name} value='1'>
										{name}
									</option>
								))}
						</select>
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
