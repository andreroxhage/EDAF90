import React from 'react';

export default function MySaladSelect({id, options, value, onChange}) {
	return (
		<select
			id={id}
			onChange={onChange}
			defaultValue={value}
			value={value}
			className='form-select'
			aria-label='Default select example'
		>
			{options.map((name) => (
				<option key={name} value={name}>
					{name}
				</option>
			))}
		</select>
	);
}
