import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {
	render() {
		return (
			<nav className="navBarWrapper">
				<ul className="navBar">
					<li className="navItem">
						<Link className="navLink" to="/">
							Home
						</Link>
					</li>
					<li className="navItem">
						<Link className="navLink" to="/locations">
							Locations
						</Link>
					</li>
					<li className="navItem">
						<Link className="navLink" to="/products">
							Messages
						</Link>
					</li>
					{/* <li className="navItem">
						<Link className="navLink" to="">
							
						</Link>
					</li> */}
				</ul>
			</nav>
		);
	}
}

export default NavBar;
