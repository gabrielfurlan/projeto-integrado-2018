import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Router } from 'react-router-dom';

export class Application extends Component {
	return() {
		return (
			<div className='application'>
					
			</div>
		);
	}
}

Application.propTypes = {
	children: PropTypes.any
};

Application.defaultProps = {
	
};
