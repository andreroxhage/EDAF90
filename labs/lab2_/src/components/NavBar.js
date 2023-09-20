import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function NavBar() {
	return (
		<>
			<NavLink className='nav-link' to='/compose-salad'>
				Compose Salad
			</NavLink>

			<nav class='navbar navbar-expand-lg bg-body-tertiary'>
				<div class='container-fluid'>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#n
      avbarNavAltMarkup'
						aria-controls='navbarNavAltMarkup'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span class='navbar-toggler-icon'></span>
					</button>
					<div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div class='navbar-nav'>
							<a class='nav-link' href='#'>
								Compose Salad
							</a>
							<a class='nav-link' href='#'>
								Varukorg
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
