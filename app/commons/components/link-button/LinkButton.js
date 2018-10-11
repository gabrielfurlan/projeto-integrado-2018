import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './link-button.styl';

export default class LinkButton extends Component {
	render() {
		const { className, children, color, handleClick, type } = this.props;
		return (
			<button 
				type={type}
				className={`link-button ${className} ${color}`} 
				onClick={handleClick}
			>
				{children}
			</button>
		);
	}	
}

LinkButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	color: PropTypes.string,
	handleClick: PropTypes.func,
	type: PropTypes.string,
};

LinkButton.defaultProps = {
	className: '',
	children: 'LinkButton',
	color: '-green',
	handleClick: () => console.log('Not Implemented.'),
	type: 'button'
};