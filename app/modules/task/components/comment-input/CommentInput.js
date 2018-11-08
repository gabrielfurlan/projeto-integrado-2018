import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import Button from '../../../../commons/components/button';

const colors = ['#F83A67', '#4F9488', '#3E6E99', '#CED481', '#CC6C67', '#E1A246'];

import './comment-input.styl';

export default class CommentInput extends Component {

	renderFiles() {
		const { files } = this.props;
		return files.map(({ data }) => <div className='file'>{data.name}</div>);
	}
	
	render() {
		const { comment, first_name, last_name, handleSend, handleChange, handleFileChange, files } = this.props;
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
					<div className='file-list'>{ this.renderFiles() }</div>
					<div className='input-wrapper'>
						<textarea 
							onChange={handleChange} 
							placeholder='Adiocione um comentário...' 
							className='text-area'
							value={comment} 
						/>
						<div className='actions'>
							<label htmlFor='file' className='clip'>
								<input id='file' type='file' onChange={handleFileChange} />
								<img src='/icons/file-upload.svg' className='clip' />
							</label>
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
	files: PropTypes.array,
	handleChange: PropTypes.func.isRequired,
	handleFileChange: PropTypes.func.isRequired,
	handleSave: PropTypes.func.isRequired
};

CommentInput.defaultProps = {
	first_name: '',
	last_name: '',
	comment: ''
};
