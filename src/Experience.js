import React, {Component} from 'react';
import ExperienceCard from './ExperienceCard.js';
import experience from './experience.json';

class Experience extends Component {
	render() {
		return(
			<div className="experience">
				<main>
					<section><h1>Experience</h1></section>
					<section>
						{experience.experiences.map((item, index) => {
							return <ExperienceCard key={index} title={item.title} reveal={item.reveal} date={item.date} logo={item.logo}/>
						})}
					</section>
					<br/>
				</main>
			</div>
		);
	}
}

export default Experience;