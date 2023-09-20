import React from 'react';

export default function MySaladSelect({id, options, value, onChange}) {
	return (
		<>
			<select
				required
				id={id}
				className='form-select'
				value={value}
				aria-label='select example'
				onChange={onChange}
			>
				<option value=''>Gör ditt val</option>
				{options.map((name) => (
					<option key={name} value={name}>
						{name}
					</option>
				))}
			</select>
			<div className='invalid-feedback'>Va fan gör du?!?</div>
		</>
	);
}
