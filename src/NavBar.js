import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavBar extends Component {
	render() {
		return(
			<div>
				<Navbar brand='exscruzme' left className="navbar">
				  <NavItem href='get-started.html' className="navitem">Home</NavItem>
				  <NavItem href='components.html'>Experience</NavItem>
				  <NavItem href='components.html'>Connect</NavItem>
				  <NavItem href='components.html'>Fun Stuff</NavItem>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;