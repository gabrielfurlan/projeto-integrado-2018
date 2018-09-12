import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from 'avataaars';

import SlimButton from '../../commons/components/slim-button';
import InputGroup from '../../commons/components/input-group';
import Input from '../../commons/components/input';
import Modal from '../../commons/components/modal';
import Select from '../../commons/components/select';
import SideBar from '../../commons/components/side-bar';
import TaskCard from '../../commons/components/task-card';

import priorities from '../../commons/assets/priorities';

import './project-view.styl';

const toDoTasks = [
	{
		id: 'e23qwe22ds',
		title: 'Titulo da tarefa #00',
		priority: 'low',
		estimate_hours: 5
	},
	{
		id: 'ersfd343ds',
		title: 'Titulo da tarefa #01',
		priority: 'low',
		estimate_hours: 2		
	}
];

const inProgressTasks = [
	{
		id: 'e23qwedsds',
		title: 'Titulo da tarefa #04',
		priority: 'high',
		estimate_hours: 5
	},
	{
		id: 'ersas343ds',
		title: 'Titulo da tarefa #02',
		priority: 'medium',
		estimate_hours: 6		
	},
	{
		id: 'ersas343ds',
		title: 'Titulo da tarefa #07',
		priority: 'high',
		estimate_hours: 6		
	},
];

const doneTasks = [
	{
		id: 'as3qwedsds',
		title: 'Titulo da tarefa #03',
		priority: 'high',
		estimate_hours: 5
	}
];

export default class ProjectView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpenedNewTaskModal: false
		};

		this.handleToggleNewTaskModal = this.handleToggleNewTaskModal.bind(this); 
	}

	renderToDoTasks() {
		return toDoTasks.map(task => <TaskCard {...task} />);
	}

	renderInProgressTasks() {
		return inProgressTasks.map(task => <TaskCard {...task} />);
	}

	renderDoneTasks() {
		return doneTasks.map(task => <TaskCard {...task} />);
	}

	handleToggleNewTaskModal() {
		let { isOpenedNewTaskModal } = { ...this.state };
		isOpenedNewTaskModal = !isOpenedNewTaskModal;
		this.setState({ isOpenedNewTaskModal });
	}

	render() {
		const { isOpenedNewTaskModal } = this.state;

		return (
			<div className='project-view'>
				<SideBar />
				<main className='content'>
					<h1 className='title'>
						<Link to='/'>Projetos</Link> /
						<div className='project-name'>Nome do projeto vai aqui <span className='code'>(e23qwe22ds)</span></div>
					</h1>
					<p className='description'>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. </p>
					<div className='project-view-header'>
						<SlimButton color='' handleClick={this.handleToggleNewTaskModal}>
							<img 
								src='/icons/add.svg' 
								onMouseOver={(e) => e.currentTarget.src = '/icons/add-white.svg'} 
								onMouseOut={(e) => e.currentTarget.src = '/icons/add.svg'} 
							/>
						</SlimButton>
					</div>
					<section className='kanban'>
						<div className='state'>
							<h3 className='title'>A fazer</h3>
							<ul className='list'>
								{this.renderToDoTasks()}
							</ul>
						</div>
						<div className='state'>
							<h3 className='title'>Fazendo</h3>
							<ul className='list'>
								{this.renderInProgressTasks()}
							</ul>
						</div>
						<div className='state'>
							<h3 className='title'>Feito</h3>
							<ul className='list'>
								{this.renderDoneTasks()}
							</ul>
						</div>
					</section>
				</main>
				<Modal opened={isOpenedNewTaskModal} className='new-task-modal' handleClose={this.handleToggleNewTaskModal}>
				
				</Modal>
			</div>
		);
	}
}

ProjectView.propTypes = {

};
