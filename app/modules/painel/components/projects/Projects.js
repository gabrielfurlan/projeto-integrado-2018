import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../../commons/components/project-card';

import './projects.styl';


const projects = [
	{
		id: 'asdasdasd',
		name: 'Projeto Teste #1',
		client: {
			id: 'aushdashdajs',
			name: 'Client #1'
		}
	},
	{
		id: 'asassdasd',
		name: 'Projeto Teste #2',
		client: {
			id: 'aushdashdaja',
			name: 'Client #2'
		}
	}
];

export default class Projects extends Component {
		
	renderProjects() {
		return projects.map(project => <ProjectCard key={project.id} {...project} />);
	}

	render() {
		return (
			<section className='projects'>
				<h1 className='title'>Projetos</h1>
				<div className='list'>
					{this.renderProjects()}
				</div>
			</section>
		);
	}
}

Projects.propTypes = {

};

Projects.defaultProps = {

};

