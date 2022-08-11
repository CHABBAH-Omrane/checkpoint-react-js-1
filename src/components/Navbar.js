import React from 'react';
import logo from '../img/logo-N-removebg.png';
const Navbar = () => {
	return (
		<div>
			<nav className="nav">
				<a href="#">
					<img
						className="nav_elem nav_logo"
						src={logo}
						alt="logo tunisian Developer"
					/>
				</a>
				<ul className="nav_elem nav_links">
					<li className="elem">
						<a className="nav_link" href="#section--1" style={{ opacity: 1 }}>
							Discover
						</a>
					</li>
					<li>
						<a className="nav_link" href="#section--2 " style={{ opacity: 1 }}>
							Profile
						</a>
					</li>
					<li>
						<a className="nav_link sing_in" href="#">
							Sing in
						</a>
					</li>
					<li>
						<a
							className="add_link nav_link nav_link--btn btn--open-model"
							href="#"
						>
							Create account
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
