import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Router } from 'react-router-dom';

import { resetAuthAction, setAuthAction } from './commons/actions/authActions';

import ApplicationController from './ApplicationController';

import './application.styl';

export class Application extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		};

		// instacing controller 
		this.controller = new ApplicationController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);
	}

	componentWillMount() {
		const { id } = this.props.auth;
		const logged = window.sessionStorage.getItem('loggedIn') || window.localStorage.getItem('loggedIn');
		const storageId = window.sessionStorage.getItem('id') || window.localStorage.getItem('id');
		if(id || logged != 'true' || !storageId) this.setState({ loading: false });
	}

	componentDidMount() {
		const { id } = this.props.auth;
		const logged = window.sessionStorage.getItem('loggedIn') || window.localStorage.getItem('loggedIn');
		const storageId = window.sessionStorage.getItem('id') || window.localStorage.getItem('id');
		
		if(!id && logged === 'true' && storageId) { 
			this.controller.setAuth(storageId);
		} else {
			window.sessionStorage.setItem('id', '');
			window.sessionStorage.setItem('loggedIn', 'false');
			this.props.resetAuthAction();
		}
	}

	renderLoading() {
		return (
			<div className='loading'>
				<img src='/icons/rolling-orange.svg' />
			</div>
		);
	}

	render() { 
		const { children } = this.props;
		const { loading } = this.state;

		return (
			<div className='application'>
				{!loading ? children : this.renderLoading()}					
			</div>
		);
	}
}

Application.propTypes = {
	children: PropTypes.any
};

Application.defualtProps = {

};

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDispatchToProps = {
	resetAuthAction,
	setAuthAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Application));