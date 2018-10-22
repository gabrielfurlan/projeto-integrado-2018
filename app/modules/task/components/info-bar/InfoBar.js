import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputGroup from '../../../../commons/components/input-group';
import Select from '../../../../commons/components/select';

import './info-bar.styl';

export default class InfoBar extends Component {
	render() {
		const { 
			priority, handleToggleLogTimeModal, handleStatusChange, statusList, taskStatus 
		} = this.props;

		return (
			<section className='info-bar'>
				<h2 className='subtitle'>Gerais</h2>
				<InputGroup className='status-group' label='Status'>
					<Select
						options={statusList}
						id='taskStatus'
						value={taskStatus}
						handleChange={handleStatusChange}
					/>
				</InputGroup>
				<div className='input-group log-time'>
					<label className='label'><span>Log Time <img onClick={handleToggleLogTimeModal} src='/icons/add.svg'/></span></label>
					<div className='value'>0h 0m</div> 
				</div>
				<div className='input-group priority'>
					<label className='label'>Prioridade</label>
					<img src={priority.icon} />
					{priority.label}
				</div>
			</section>
		);
	}
}

InfoBar.propTypes = {
	priority: PropTypes.object,
	handleToggleLogTimeModal: PropTypes.func.isRequired,
	handleStatusChange: PropTypes.func.isRequired,
	statusList: PropTypes.array.isRequired,
	taskStatus: PropTypes.array.isRequired,
};
