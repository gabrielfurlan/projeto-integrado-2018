import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskCard from '../../../../commons/components/task-card';

import './home.styl';

const tasks = [
	{
		id: 'e23qwe22ds',
		title: 'Titulo da tarefa #00',
		priority: 'high',
		estimate_hours: 5
	},
	{
		id: 'ersfd343ds',
		title: 'Titulo da tarefa #01',
		priority: 'low',
		estimate_hours: 2		
	}
];

export default class Home extends Component {

	renderTasks() {
		return tasks.map(task => <TaskCard {...task} />);
	}

	render() {
		return (
			<section className='home'>
				<h1 className='title'>Home</h1>
				<section className='global-info'>
					<h2 className='subtitle'>Informações Gerais: </h2>
					<div className='info -done-tasks'>
						<span className='value'>0</span>
						<label className='label'>tarefas realizadas</label>
					</div>
					<div className='info -todo'>
						<span className='value'>0</span>
						<label className='label'>tarefas a fazer</label>
					</div>
					<div className='info -hours-worked'>
						<span className='value'>0:00</span>
						<label className='label'>horas trabalhada</label>
					</div>
				</section>
				<section className='assign-to-me'>
					<h2 className='subtitle'>Tarefas atribuidas a mim:</h2>
					<ul className='list'>
						{ this.renderTasks() }
					</ul>
				</section>
				<section className='annotations'>
					<h2 className='subtitle'>Minhas anotações:</h2>
					<ul className='list'>
						<span>Nenhuma anotação cadastrada</span>
					</ul>
				</section>
			</section>
		);
	}
} 

Home.propTypes = {

};

Home.defualtProps = {

};
