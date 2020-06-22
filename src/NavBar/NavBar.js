import React from "react";
import { withRouter, NavLink } from "react-router-dom";

const Navbar = (props) => {
	const handleLogout = () => {
		sessionStorage.clear();
		props.setIsAuthenticated(false);
	};

	return (
		<>
			<nav>
				<span className="logo">Kandy Korner</span>
				<div>
					{!props.isAuthenticated && (
						<>
							<NavLink
								to="/login"
								className="navlink login"
								activeClassName="activeLink"
							>
								Login 
							</NavLink>
							<NavLink
								to="/register"
								className="navlink register"
								activeClassName="activeLink"
							>
								Register
							</NavLink>
						</>
					)}
					{props.isAuthenticated && (
						<>
							<NavLink
								to="/products"
								className="navlink"
								activeClassName="activeLink"
							>
								Candy
							</NavLink>
							<NavLink
								to="/employees"
								className="navlink"
								activeClassName="activeLink"
							>
								Employees
							</NavLink>
							<NavLink
								to="/locations"
								className="navlink"
								activeClassName="activeLink"
							>
								Locations
							</NavLink>
							<NavLink
								to="/login"
								className="navlink logout"
								activeClassName="activeLink"
								onClick={handleLogout}
							>
								Logout
							</NavLink>
						</>
					)}
				</div>
			</nav>
			<div className="nav-colorband"></div>
		</>
	);
};

export default withRouter(Navbar);
