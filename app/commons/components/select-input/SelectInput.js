import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './select-input.styl';

export default class SelectInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpened: false
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	renderOptions() {
		const { options } = this.props;
		return options.map((option, i) => <li key={i} onClick={e => this.handleClick(option)} className="option">{option.label}</li>);
	}

	handleClick(option) {
		const opened = this.state.isOpened;
		this.setState({ isOpened: !opened });

		if (option.label) {
			this.refs.input.value = '';
			this.props.handleClick(this.props.id, option);
		}
	}

	handleChange(e) {
		this.setState({ isOpened: true });
		this.props.handleChange(e);
	}

	render() {
		const { state: { isOpened }, props: { id, options, value, placeholder, handleChange, selected } } = this;
		return (
			<div className="select-input">
				<div className='input-wrapper'>
					<input placeholder={placeholder} ref="input" className="input" onChange={this.handleChange} value={selected.label ? selected.label : value} />
					<img src={isOpened && options.length ? '#arrow-drop-up' : '#arrow-drop-down'} />
				</div>
				<ul className={`options -${isOpened && options.length ? true : false}`}>
					{this.renderOptions()}
				</ul>
			</div>
		);
	}

}

SelectInput.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string,
	selected: PropTypes.object,
	handleClick: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	options: PropTypes.array
};

SelectInput.defaultProps = {
	placeholder: 'Selecione um opção',
	options: [],
	selected: {}
};