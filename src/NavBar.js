import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavBar extends Component {
	render() {
		return(
			<div>
				<Navbar brand='exscruzme' href='#' left className="navbar">
				  <NavItem href='#'>Home</NavItem>
				  <NavItem href='#'>Experience</NavItem>
				  <NavItem href='#'>Connect</NavItem>
				  <NavItem href='#'>Fun Stuff</NavItem>
				</Navbar>
			</div>
		);
	}
}

export default NavBar;