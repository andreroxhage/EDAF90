import React from 'react';

export default function MySaladSelect({id, options, value, onChange}) {
	return (
		<select
			required
			id={id}
			className='form-select'
			value={value}
			aria-label='Default select example'
			onChange={onChange}
		>
			{options.map((name) => (
				<option key={name} value={name}>
					{name}
				</option>
			))}
		</select>
	);
}
