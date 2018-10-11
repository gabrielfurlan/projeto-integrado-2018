import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './text-area.styl';

export default class TextArea extends Component {
	render() {
		const { className, id, placeholder, handleChange, type, value, disabled } = this.props;
		return (
			<textarea
				className={`text-area ${className}`}
				placeholder={placeholder}
				onChange={handleChange}
				value={value}
				id={id}
				disabled={disabled}
			/>
		);
	}
}

TextArea.propTypes = {
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	disabled: PropTypes.bool
};

TextArea.defaultProps = {
	placeholder: '',
	className: '',
	disabled: false
};