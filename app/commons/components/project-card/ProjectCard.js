import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './project-card.styl';

class ProjectCard extends Component {
	
	constructor(props) {
		super(props);
		this.toProject = this.toProject.bind(this);
	}

	toProject() {
		const { history, id } = this.props;
		history.push(`/projeto/${id}`);
	}

	render() {
		const { id, name, client, description } = this.props;

		return (
			<div className='project-card' onClick={this.toProject}>
				<h3 className='title'>{name}</h3>
				<div className='info'>
					<p className='id'>ID: {id}</p>
					<p className='client-name'>Cliente: {client.name}</p>
				</div>
			</div>
		);
	}
}

const clientShape = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

ProjectCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	client: PropTypes.shape(clientShape),
	description: PropTypes.string.isRequired
};

ProjectCard.defaultProps = {
	client: {}
};

export default withRouter(ProjectCard);
