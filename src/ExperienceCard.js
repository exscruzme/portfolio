import React, {Component} from 'react'; 
import {Card, CardTitle, Col} from 'react-materialize';
import amex from './amex_logo.png';
import michelin from './michelin_logo.png';

class ExperienceCard extends Component {
	render() {
		return(
			<Col l={6}>
				<Card header={<CardTitle reveal image={amex} waves='light'/>}
				    title={this.props.title}
				    reveal={this.props.reveal}>
				    <p>{this.props.date}</p>
				</Card>
			</Col>
		);
	}
}

export default ExperienceCard; 