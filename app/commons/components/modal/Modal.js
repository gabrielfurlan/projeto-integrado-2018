import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './modal.styl';

export default class Modal extends Component {

	render() {
		const { children, className, opened, handleClose } = this.props;

		return (
			<div className={`modal-wrapper ${className} ${opened ? '' : '-hide'}`} onClick={handleClose}>
				<div className='modal' onClick={e => e.stopPropagation()}>
					{ children }
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	handleClose: PropTypes.func,
	opened: PropTypes.bool
};

Modal.defaultProps = {
	className: '',
	handleClose: () => console.log('Not Implemented'),
	opened: false
};
