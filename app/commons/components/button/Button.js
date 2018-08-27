import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './button.styl';

export default class Button extends Component {
	render() {
		const { className, children, color, handleClick, type } = this.props;
		return (
			<button 
				type={type}
				className={`button ${className} ${color}`} 
				onClick={handleClick}
			>
				{children}
			</button>
		);
	}	
}

Button.propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	color: PropTypes.string,
	handleClick: PropTypes.func,
	type: PropTypes.string,
};

Button.defaultProps = {
	className: '',
	children: 'Button',
	color: '-green',
	handleClick: () => console.log('Not Implemented.'),
	type: 'button'
};