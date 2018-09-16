import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './client-card.styl';

class ClientCard extends Component {
	
	constructor(props) {
		super(props);
		this.toClient = this.toClient.bind(this);
	}

	toClient() {
		const { history, id } = this.props;
		history.push(`/client/${id}`);
	}

	render() {
		const { name } = this.props;

		return (
			<div className='client-card' onClick={this.toClient}>
				<h3 className='title'>{name}</h3>
			</div>
		);
	}
}

const clientShape = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

ClientCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

ClientCard.defaultProps = {

};

export default withRouter(ClientCard);
