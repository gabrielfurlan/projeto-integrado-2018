import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import './task-card.styl';

const priorities = [
	{
		id: 'high',
		label: 'Alta',
		icon: '/icons/high-priority.svg'
	},
	{
		id: 'medium',
		label: 'Média',
		icon: '/icons/medium-priority.svg'
	},
	{
		id: 'low',
		label: 'Baixa',
		icon: '/icons/low-priority.svg'
	}
];

class TaskCard extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(e) {
		this.props.history.push(`/tarefa/${e.target.id}`);
	}

	render() {
		const { id, priority, title } = this.props;
		const priorityData = priorities.find(({ id }) => priority === id);

		return (
			<div id={id} className='task-card' onClick={this.handleClick} >
				<h4 className='title'>{ title }</h4>
				<div className='basic-infos'>
					<span className={`priority -${priorityData.id}`}>
						<img src={priorityData.icon} />
						{priorityData.label} Prioridade
					</span>
					<span className='code'>{id}</span>
				</div>
			</div>
		);
	}

}

TaskCard.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	priority: PropTypes.string,
	estimate_hours: PropTypes.number
};

TaskCard.defaultProps = {
	id: 'XXX-X',
	title: 'Tarefa com um título padrão',
	priority: 'low',
	estimate_hours: 0
};

export default withRouter(TaskCard);