import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './user-card.styl';

class UserCard extends Component {
	
	constructor(props) {
		super(props);
		this.toUser = this.toUser.bind(this);
	}

	toUser() {
		const { history, id } = this.props;
		history.push(`/usuario/${id}`);
	}

	render() {
		const { firstName, lastName, id } = this.props;
		return (
			<div className='user-card' onClick={this.toUser}>
				<h3 className='title'>{firstName} {lastName}</h3>
				<div className='info-wrapper'>
					<p className='id'>ID: {id}</p>
				</div>
			</div>
		);
	}
}

UserCard.propTypes = {
	id: PropTypes.string.isRequired,
	firstName: PropTypes.string.isRequired, 
	lastName: PropTypes.string.isRequired,
};

UserCard.defaultProps = {

};

export default withRouter(UserCard);
