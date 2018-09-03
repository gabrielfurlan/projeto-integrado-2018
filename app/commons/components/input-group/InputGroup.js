import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './input-group.styl';

export default class InputGroup extends Component {
	render() {
		const { children, className, error, label } = this.props;
		return (
			<div className={`input-group ${className} ${error ? '-with-error' : ''}`}>
				<label className='label'>{label}</label>
				{children}
				<p className='error-text'>{error}</p>
			</div>
		);
	}
}

InputGroup.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	error: PropTypes.string,
	label: PropTypes.string
};

InputGroup.defaultProps = {
	className: '',
	error: '',
	label: '&nbsp;'
};
