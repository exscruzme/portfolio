import React, {Component} from 'react';
import {Col, Card, CardTitle, Icon} from 'react-materialize';
import amex from './amex_logo.png';

class Connect extends Component {
	render() {
		return(
			<div>
				<main>
					<section><h1>Connect</h1></section>
					<section>
						<Col l ={3} m={3} s={12}>
						    <Card className='white darken-1' textClassName='black-text' title={['Github ', <span><Icon>photo</Icon></span>]} actions={[<a href='https://github.com/exscruzme'>github.com/exscruzme</a>]}>
						    Check out what I've been working on.
						    </Card>
						</Col>
					</section>
					<section>
						<Col l ={3} m={3} s={12}>
						    <Card className='white darken-1' textClassName='black-text' title={['LinkedIn ', <span><Icon>photo</Icon></span>]} actions={[<a href='https://linkedin.com/in/exscruzme'>linkedin.com/in/exscruzme</a>]}>
						    Check out what I've been working on.
						    </Card>
						</Col>
					</section>
					<section>
						<Col l ={3} m={3} s={12}>
						    <Card className='white darken-1' textClassName='black-text' title={['Email ', <span><Icon>photo</Icon></span>]} actions={[<a href='mailto:exscruzme@gmail.com'>exscruzme@gmail.com</a>]}>
						    Check out what I've been working on.
						    </Card>
						</Col>
					</section>
				</main>
			</div>
		);
	}

}

export default Connect;