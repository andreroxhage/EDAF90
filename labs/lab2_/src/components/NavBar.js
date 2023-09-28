import React, {useEffect, useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export default function NavBar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-body-tertiary'>
				<div className='container-fluid'>
					<div className='navbar'>
						<NavLink className='nav-link p-2' to='/compose-salad'>
							Compose Salad
						</NavLink>

						<NavLink className='nav-link p-2' to='/view-order'>
							View Order
						</NavLink>
					</div>
				</div>
			</nav>
		</>
	);
}
