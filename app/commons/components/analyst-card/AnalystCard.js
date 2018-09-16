import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './analyst-card.styl';

class AnalystCard extends Component {
	
	constructor(props) {
		super(props);
		this.toAnalyst = this.toAnalyst.bind(this);
	}

	toAnalyst() {
		const { history, id } = this.props;
		history.push(`/analista/${id}`);
	}

	render() {
		const { name } = this.props;

		return (
			<div className='analyst-card' onClick={this.toAnalyst}>
				<h3 className='title'>{name}</h3>
			</div>
		);
	}
}

AnalystCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

AnalystCard.defaultProps = {

};

export default withRouter(AnalystCard);
