import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './input.styl';

export default class Input extends Component {

	render() {
		const { 
			className, id, disabled, placeholder, type, 
			handleChange, value
		} = this.props;
		
		return (
			<input 
				className={`input ${className}`}
				placeholder={placeholder}
				id={id}
				value={value}
				type={type}
				onChange={handleChange}
				disabled={disabled}
			/>
		);	
	}

}

Input.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	disabled: PropTypes.bool,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	handleChange: PropTypes.func
};

Input.defaultProps = {
	className: '',
	id: '',
	disabled: false,
	placeholder: '',
	type: 'text',
	handleChange: () => console.log('Not implemented.')
};
