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
		const { name } = this.props;

		return (
			<div className='project-card' onClick={this.toProject}>
				<h3 className='title'>{name}</h3>
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
	client: PropTypes.shape(clientShape).isRequired
};

ProjectCard.defaultProps = {

};

export default withRouter(ProjectCard);
