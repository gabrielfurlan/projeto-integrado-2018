import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import Button from '../../../../commons/components/button';

const colors = ['#F83A67', '#4F9488', '#3E6E99', '#CED481', '#CC6C67', '#E1A246'];

import './comment-input.styl';

export default class CommentInput extends Component {

	render() {
		const { comment, first_name, last_name, handleSend, handleChange } = this.props;
		const name = `${first_name} ${last_name}`;
		return (
			<form className='comment-input' onSubmit={handleSend}>
				<figure className='avatar-wrapper'>
					<Avatar colors={colors} name={first_name} size="50px" textSizeRatio="1.75" round />
				</figure>
				<div className='content'>
					<header className='comment-header'>
						<h3 className='name'>{name}</h3>
					</header>
					<div className='input-wrapper'>
						<textarea 
							onChange={handleChange} 
							placeholder='Adiocione um comentário...' 
							className='text-area'
							value={comment} 
						/>
						<div className='actions'>
							<img src='/icons/send.svg' className='send' onClick={handleSend} />
						</div>
					</div>
				</div>
			</form>
		);
	}
}

CommentInput.propTypes = {
	first_name: PropTypes.string,
	last_name: PropTypes.string,
	comment: PropTypes.string,
	handleChange: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired
};

CommentInput.defaultProps = {
	first_name: '',
	last_name: '',
	comment: ''
};
