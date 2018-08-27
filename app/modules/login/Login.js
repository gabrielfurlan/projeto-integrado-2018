import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginController from './LoginController';

import Button from '../../commons/components/button';
import Input from '../../commons/components/input';

import './login.styl';

export class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isValidMail: false,
			loading: false
		};

		this.handleValidMail = this.handleValidMail.bind(this);
		this.handleValidPassword = this.handleValidPassword.bind(this);
	}

	handleValidMail(e) {
		e.preventDefault();
		if(this.state.loading) return;

		this.setState({ loading: true });
		setTimeout(() => this.setState({ isValidMail: true, loading: false }), 1200);
	}

	handleValidPassword(e) {
		e.preventDefault();
		if(this.state.loading) return;

		this.setState({ loading: true });
		this.props.history.push('/painel');
	}

	render() {
		const { isValidMail, loading } = this.state;
		
		return (
			<div className='login'>
				<section className='content'>
					<form className={!isValidMail ? 'form -show' : 'form -hide'} onSubmit={this.handleValidMail}>
						<h1 className='title'>Bem vindo,</h1>
						<h2 className='description'>Faça login com sua conta ou solicite um novo cadastro ao administrador</h2>
						<fieldset>
							<Input className='-email' id='email' placeholder='Entre com seu email corporativo' />
							<Button type='submit'>
								{loading ? <img className='loading' src='/icons/rolling.svg' /> : 'Continuar'}
							</Button>
						</fieldset>
					</form>

					<form className={isValidMail ? 'form -show' : 'form -hide'} onSubmit={this.handleValidPassword}>
						<h1 className='title'>Bem vindo,</h1>
						<h2 className='description'>Faça login com sua conta ou solicite um novo cadastro ao administrador</h2>	
						<fieldset>
							<Input className='-password' type='password' id='password' placeholder='Digite sua senha' />
							<Button type='submit'>
								{loading ? <img className='loading' src='/icons/rolling.svg' /> : 'Entrar'}
							</Button>
						</fieldset>
					</form>
				</section>
				<section className='aprensentation' />
			</div>
		);
	}
}

Login.propTypes = {

};

Login.defaultProps = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));