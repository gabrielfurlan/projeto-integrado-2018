import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './plus-button.styl';

export default class PlusButton extends Component {
	render() {
		const { className, color, handleClick } = this.props;
		return (
			<button type='button' className={`plus-button ${className} ${color}`} onClick={handleClick}>
				<span>Novo</span>
				<span className='plus'>+</span>
			</button>
		);
	}	
}

PlusButton.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	handleClick: PropTypes.func,
	type: PropTypes.string,
};

PlusButton.defaultProps = {
	className: '',
	color: '-orange',
	handleClick: () => console.log('Not Implemented.'),
};