import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from '../../commons/components/button';
import LinkButton from '../../commons/components/link-button';
import PlusButton from '../../commons/components/plus-button';
import InputGroup from '../../commons/components/input-group';
import Input from '../../commons/components/input';
import Modal from '../../commons/components/modal';
import Select from '../../commons/components/select';
import SideBar from '../../commons/components/side-bar';
import TaskCard from '../../commons/components/task-card';
import TextArea from '../../commons/components/text-area';

import priorities from '../../commons/assets/priorities';
const priorityOptions = priorities.map(({ id, label, icon }) => ({ 
	id,
	label: (<span><img src={icon} />{label}</span>)
}));

import ProjectViewController from './ProjectViewController';

import { resetAuthAction } from '../../commons/actions/authActions';

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

const initial_project = {
	id: '',
	name: '',
	description: ''
};

export const initial_task_errors = {
	name: []
};

export const initial_task = {
	name: '',
	description: '',
	priority: priorityOptions[2]
};

export class ProjectView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpenedNewTaskModal: false,
			project: { ...initial_project },
			todo: [],
			inProgress: [],
			done: [],
			qa: [],
			task: { ...initial_task },
			taskErrors: { ...initial_task_errors },
			taskStatus: ''
		};

		this.handleToggleNewTaskModal = this.handleToggleNewTaskModal.bind(this); 
		this.handleLogout = this.handleLogout.bind(this); 

		// instacing controller 
		this.controller = new ProjectViewController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);
	}

	componentDidMount() {
		this.controller.setInfo();
		this.controller.findAll();
	}

	renderToDoTasks() {
		return this.state.todo.map(task => <TaskCard {...task} />);
	}

	renderInProgressTasks() {
		return this.state.inProgress.map(task => <TaskCard {...task} />);
	}

	renderDoneTasks() {
		return this.state.done.map(task => <TaskCard {...task} />);
	}

	renderQATasks() {
		return this.state.qa.map(task => <TaskCard {...task} />);
	}

	handleToggleNewTaskModal() {
		let { isOpenedNewTaskModal } = { ...this.state };
		isOpenedNewTaskModal = !isOpenedNewTaskModal;
		this.setState({ isOpenedNewTaskModal });
	}

	handleLogout() {
		this.props.resetAuthAction();
		window.sessionStorage.setItem('id', '');
		window.sessionStorage.setItem('loggedIn', 'false');
		this.props.history.push('/');
	}

	renderAlert() {
		switch (this.state.taskStatus) {
			case 'error':
				return <div className='alert -error'>Erro ao cadastrar o projeto! Por favor contate o administrador do sistema.</div>;
			case 'saved':
				return <div className='alert -success'>Projeto cadastrado com sucesso!</div>;
			default:
				return null;
		}
	}

	render() {
		const { auth } = this.props;
		const { isOpenedNewTaskModal, project, task, taskErrors } = this.state;
		const { handleTextChange, handleSelectChange, handleSubmit } = this.controller;

		return (
			<div className='project-view'>
				<SideBar auth={auth} handleLogout={this.handleLogout} />
				<main className='content'>
					<h1 className='title'>
						<Link to='/'>Projetos</Link> /
						<div className='project-name'>{project.name} <span className='code'>({project.id})</span></div>
					</h1>
					<p className='description'>{project.description}</p>
					<div className='project-view-header'>
						<PlusButton handleClick={this.handleToggleNewTaskModal} />
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
							<h3 className='title'>Homologação</h3>
							<ul className='list'>
								{this.renderQATasks()}
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
					<h2 className='title'>Cadastre uma nova tarefa</h2>
					<form className='task-form' onSubmit={handleSubmit}>
						{	this.renderAlert() }
						<div className='row-1'>
							<InputGroup label='Nome da tarefa' error={taskErrors.name[0]} className='name-ig'>
								<Input id='name' value={task.name} handleChange={handleTextChange} />
							</InputGroup>
							<InputGroup label='Prioridade' className='role-ig'>
								<Select className='-white' id='priority' options={priorityOptions} value={task.priority} handleChange={handleSelectChange} />
							</InputGroup>
						</div>
						
						<div className='row-2'>
							<InputGroup label='Descrição' error={''} className='description-ig'>
								<TextArea id='description' value={task.description} handleChange={handleTextChange} />
							</InputGroup>
						</div>

						<div className='actions'>
							<Button color='-orange' type='submit' handleClick={() => {}}>Cadastrar</Button>
							<LinkButton handleClick={this.handleToggleNewTaskModal} color='-orange'>Cancelar</LinkButton>
						</div>
					</form>
				</Modal>
			</div>
		);
	}
}

ProjectView.propTypes = {

};

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDispatchToProps = {
	resetAuthAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectView));
