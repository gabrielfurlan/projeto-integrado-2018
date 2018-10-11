import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PainelController from './controllers/PainelController';
import UsersController from './controllers/UsersController';
import ClientsController from './controllers/ClientsController';
import ProjectsController from './controllers/ProjectsController';

import Users from './components/users';
import Clients from './components/clients';
import Home from './components/home';
import Projects from './components/projects';

import SideBar from '../../commons/components/side-bar';
import userTypes from '../../commons/assets/userTypes';

import { resetAuthAction } from '../../commons/actions/authActions';

import './painel.styl';

export const initial_user = {
	first_name: '',
	last_name: '',
	email: '',
	day: {}, 
	month: {}, 
	year: {},
	role: userTypes[0]
};

export const initial_client = {
	email: '',
	cnpj: '',
	name: '',
	phone_number: '',
	sector: { id: null, label: '' }
};

export const initial_project = {
	name: '',
	description: '',
	client: { id: null, label: '' }
};

export const initial_user_errors = {
	first_name: [],
	last_name: [],
	email: [],
	day: [],
	month: [],
	year: [],
	role: []
};

export const initial_client_errors = {
	email: [],
	cnpj: [],
	name: [],
	phone_number: [],
	sector: []
};

export const initial_project_errors = {
	name: [],
	description: [],
	client: []
};

export class Painel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			user: { ...initial_user },
			users: [],
			userError: { ...initial_user_errors },
			userStatus: null,
			clientsStatusLoading: 'loading',
			client: { ...initial_client },
			clients: [],
			clientsStatusLoading: 'loading',
			clientError: { ...initial_client_errors },
			clientStatus: null,
			project: { ...initial_project },
			projectError: { ...initial_project_errors },
			projectStatus: null,
			project_clients_data: [],
			projects: []
		};

		this.renderHome = this.renderHome.bind(this);
		this.renderProjects = this.renderProjects.bind(this);
		this.renderClients = this.renderClients.bind(this);
		this.renderUsers = this.renderUsers.bind(this);
		this.handleLogout = this.handleLogout.bind(this);

		// instacing users controller 
		this.usersController = new UsersController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);

		// instacing clients controller 
		this.clientsController = new ClientsController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);

		// instacing projects controller 
		this.projectsController = new ProjectsController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);
	} 

	renderHome() {
		return <Home />;
	}

	renderProjects() {
		return ( 
			<Projects 
				projects={this.state.projects}
				sectors={this.props.sectors}
				controller={this.projectsController}
				clients={this.state.project_clients_data}
				project={this.state.project}
				errors={this.state.projectError}
				status={this.state.projectStatus}
			/>
		);
	}

	renderClients() {
		return (
			<Clients 
				controller={this.clientsController}
				sectors={this.props.sectors}
				client={this.state.client}
				clients={this.state.clients}
				statusLoading={this.state.clientsStatusLoading}
				errors={this.state.clientError}
				status={this.state.clientStatus}
			/>
		);
	}

	renderUsers() {
		return (
			<Users 
				controller={this.usersController}
				user={this.state.user}
				users={this.state.users}
				errors={this.state.userError}
				status={this.state.userStatus}
				statusLoading={this.state.usersStatusLoading}
			/>
		);
	}

	handleLogout() {
		this.props.resetAuthAction();
		window.sessionStorage.setItem('id', '');
		window.sessionStorage.setItem('loggedIn', 'false');
		this.props.history.push('/');
	}

	render() {
		const { auth } = this.props;

		return (
			<div className='painel'>
				<SideBar auth={auth} handleLogout={this.handleLogout} />
				<main className='content'>
					<Route exact path='/painel' render={this.renderHome} />
					<Route exact path='/painel/projetos' render={this.renderProjects} />
					<Route exact path='/painel/clientes' render={this.renderClients} />
					<Route exact path='/painel/users' render={this.renderUsers} />
				</main>
			</div>
		);
	}

} 

Painel.propTypes = {

};

Painel.defualtProps = {

};

const mapStateToProps = state => ({
	auth: state.auth,
	sectors: state.sectors
});

const mapDispatchToProps = {
	resetAuthAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Painel));
