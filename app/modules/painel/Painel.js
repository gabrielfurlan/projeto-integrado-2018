import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PainelController from './PainelController';

import Analyts from './components/analysts';
import Clients from './components/clients';
import Home from './components/home';
import Projects from './components/projects';

import SideBar from '../../commons/components/side-bar';

import { resetAuthAction } from '../../commons/actions/authActions';

import './painel.styl';

export class Painel extends Component {

	constructor(props) {
		super(props);
		this.renderHome = this.renderHome.bind(this);
		this.renderProjects = this.renderProjects.bind(this);
		this.renderClients = this.renderClients.bind(this);
		this.renderAnalysts = this.renderAnalysts.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	} 

	renderHome() {
		return <Home />;
	}

	renderProjects() {
		return <Projects />;
	}

	renderClients() {
		return <Clients />;
	}

	renderAnalysts() {
		return <Analyts />;
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
					<Route exact path='/painel/analistas' render={this.renderAnalysts} />
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
	auth: state.auth
});

const mapDispatchToProps = {
	resetAuthAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Painel));
