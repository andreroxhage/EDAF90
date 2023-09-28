import React, {useEffect, useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export default function NavBar() {

	
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
							<NavLink className='nav-link' to='/compose-salad'>
								Compose Salad
							</NavLink>

							<NavLink className='nav-link' to='/view-order'>
								View Order
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
