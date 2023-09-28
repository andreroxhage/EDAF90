import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function BootStrapSpinner() {
	return (
		<div className='d-flexjustify-content-center'>
			{' '}
			<div className='spinner-border' role='status'>
				{' '}
				<span className='visually-hidden'>Loading...</span>{' '}
			</div>{' '}
		</div>
	);
}
