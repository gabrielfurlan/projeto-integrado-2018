import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../commons/components/button';
import Input from '../../../../commons/components/input';
import InputGroup from '../../../../commons/components/input-group';
import LinkButton from '../../../../commons/components/link-button';
import Modal from '../../../../commons/components/modal';
import PlusButton from '../../../../commons/components/plus-button';
import ProjectCard from '../../../../commons/components/project-card';
import Select from '../../../../commons/components/select';
import TextArea from '../../../../commons/components/text-area';

import ProjectsController from '../../controllers/ProjectsController';

import './projects.styl';

const projects = [
	{
		id: 'asdasdasd',
		name: 'Projeto Teste #1',
		client: {
			id: 'aushdashdajs',
			name: 'Client #1'
		}
	},
	{
		id: 'asassdasd',
		name: 'Projeto Teste #2',
		client: {
			id: 'aushdashdaja',
			name: 'Client #2'
		}
	}
];

export default class Projects extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOpenedNewProjectModal: false
		};

		this.handleToggleNewProjectModal = this.handleToggleNewProjectModal.bind(this); 
	}

	componentDidMount() {
		this.props.controller.setInfo();
	}

	handleToggleNewProjectModal() {
		let { isOpenedNewProjectModal } = { ...this.state };
		isOpenedNewProjectModal = !isOpenedNewProjectModal;
		this.setState({ isOpenedNewProjectModal });
	}
		
	renderProjects() {
		const clients = this.props.clients.map(client => ({ id: client.id, name: client.label }));
		let projects = [...this.props.projects];

		projects = projects.map(project => ({ 
			...project, 
			client: clients.find(client => client.id === project.clientId) 
		}));

		return projects.map(project => <ProjectCard key={project.id} {...project} />);
	}

	renderAlert() {
		switch (this.props.status) {
			case 'error':
				return <div className='alert -error'>Erro ao cadastrar o projeto! Por favor contate o administrador do sistema.</div>;
			case 'saved':
				return <div className='alert -success'>Projeto cadastrado com sucesso!</div>;
			default:
				return null;
		}
	}

	render() {
		const { isOpenedNewProjectModal } = this.state;
		const { controller, clients, project, projects, errors } = this.props;

		return (
			<section className='projects'>
				<h1 className='title'>Projetos</h1>
				<div className='projects-header'>
					<PlusButton handleClick={this.handleToggleNewProjectModal} />
				</div>
				<div className='list'>
					{this.renderProjects()}
				</div>
				<Modal opened={isOpenedNewProjectModal} className='projects-modal' handleClose={this.handleToggleNewProjectModal}>
					<h2 className='title'>Cadastre um novo projeto</h2>
					<form className='project-form' onSubmit={controller.handleSave}>
						{	this.renderAlert() }
						<div className='row-1'>
							<InputGroup label='Nome do projeto' error={errors.name[0]} className='name-ig'>
								<Input id='name' value={project.name} handleChange={controller.handleTextChange} />
							</InputGroup>
							<InputGroup label='Cliente' error={errors.client[0]} className='client-ig'>
								<Select className='-white' id='client'options={clients} value={project.client} handleChange={controller.handleSelectChange} />
							</InputGroup>
						</div>
						
						<div className='row-2'>
							<InputGroup label='Descrição' error={errors.description[0]} className='description-ig'>
								<TextArea id='description' value={project.description} handleChange={controller.handleTextChange} />
							</InputGroup>
						</div>

						<div className='actions'>
							<Button color='-orange' type='submit' handleClick={controller.handleSave}>Cadastrar</Button>
							<LinkButton handleClick={this.handleToggleNewProjectModal} color='-orange'>Cancelar</LinkButton>
						</div>
					</form>
				</Modal>
			</section>
		);
	}
}

Projects.propTypes = {
	clients: PropTypes.array,
	status: PropTypes.string.isRequired,
	controller: PropTypes.instanceOf(ProjectsController).isRequired,
	errors: PropTypes.object.isRequired
};

Projects.defaultProps = {
	clients: []
};
