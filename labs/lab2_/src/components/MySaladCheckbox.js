import React from 'react';

export default function MySaladCheckbox({id, options, value, onChange}) {
	const handleCheckboxChange = (i) => {
		const updatedValue = {...value}; // Create a copy of the current state
		updatedValue[i] = !updatedValue[i]; // Toggle the checkbox value true/false

		onChange(updatedValue); // Callback on setState function in parent
	};

	return (
		<div className='d-flex flex-column h-100'>
			<div className='row'>
				{options.map((item) => (
					<div className='col-3 p-2' key={id + item}>
						<label className='form-check-label'>
							<input
								className='form-check-input'
								type='checkbox'
								checked={value[item] || false}
								onChange={() => handleCheckboxChange(item)}
								key={item}
							/>
							{item}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
