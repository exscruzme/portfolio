import React, {Component} from 'react';
import About from './About.js';
import Experience from './Experience.js';
import Connect from './Connect.js';

class Portfolio extends Component {
	render() {
		return(
			<div>
				<section><About/></section>
				<section><Experience/></section>
				<section><Connect/></section>
			</div>
		);
	}
}

export default Portfolio;