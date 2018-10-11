import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './select.styl';

export default class Select extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpened: false
		};

		this.handleToggleClick = this.handleToggleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	renderOptions() {
		const { options, id } = this.props;
		return options.map((option, i) => <li key={i} id={id} onClick={e => this.handleChange(id, option)} className="option">{option.label}</li>);
	}

	handleChange(reference, option) {
		this.props.handleChange(reference, option);
	}

	handleToggleClick() {
		this.setState({ isOpened: !this.state.isOpened });
	}

	render() {
		const { state: { isOpened }, props: { className, options, value, placeholder, disabled } } = this;

		return (
			<div className={`select ${className} ${disabled ? '-disabled' : ''}`} onClick={disabled ? null : this.handleToggleClick}>
				<label className={value.label ? '' : 'placeholder'}>{value.label ? value.label : <span className='placeholder'>{placeholder}</span>}</label>
				<img className='icon' src='/icons/dropdown.svg' />
				<ul className={`select-dropdown ${isOpened && options.length ? '-show' : ''}`}>
					{this.renderOptions()}
				</ul>
			</div>
		);
	}
}

Select.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	options: PropTypes.array.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.object,
	placeholder: PropTypes.string,
	disabled: PropTypes.bool
};

Select.defaultProps = {
	className: '',
	id: '',
	options: [],
	placeholder: 'Selecione',
	value: {},
	disabled: false
};
