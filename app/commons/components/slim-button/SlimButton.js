import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './slim-button.styl';

export default class SlimButton extends Component {
	render() {
		const { className, children, color, handleClick, type } = this.props;
		return (
			<button 
				type={type}
				className={`slim-button ${className} ${color}`} 
				onClick={handleClick}
			>
				{children}
			</button>
		);
	}	
}

SlimButton.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	color: PropTypes.string,
	handleClick: PropTypes.func,
	type: PropTypes.string,
};

SlimButton.defaultProps = {
	className: '',
	children: 'SlimButton',
	color: '-green',
	handleClick: () => console.log('Not Implemented.'),
	type: 'button'
};