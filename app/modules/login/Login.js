import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginController from './LoginController';

import SlimButton from '../../commons/components/slim-button';
import Input from '../../commons/components/input';

import { setAuthAction } from '../../commons/actions/authActions';

import './login.styl';

export class Login extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isValidMail: false,
			loading: false,
			auth: {
				id: null,
				first_name: null,
				last_name: null,
				email: '',
				password: '',
				role: '',
				keep_logged: false
			},
			errors: {
				email: null,
				password: null
			}
		};

		// instacing controller 
		this.controller = new LoginController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);
	}

	render() {
		const { isValidMail, loading, errors, auth } = this.state;
	
		return (
			<div className='login'>
				<section className='content'>
					<form className={!isValidMail ? 'form -show' : 'form -hide'} onSubmit={this.controller.handleValidMail}>
						<h1 className='title'>Bem vindo,</h1>
						<h2 className='description'>Faça login com sua conta ou solicite um novo cadastro ao administrador</h2>
						<fieldset>
							<Input handleChange={this.controller.handleTextChange} value={auth.email} className='-email' id='email' placeholder='Entre com seu email corporativo' />
							<p className={`error ${errors.email ? '' : '-hide'}`}>{errors.email}</p>
							<SlimButton type='submit' color='-orange' handleClick={this.controller.handleValidMail}>
								{loading ? <img className='loading' src='/icons/rolling-orange.svg' /> : 'Continuar'}
							</SlimButton>
						</fieldset>
					</form>

					<form className={isValidMail ? 'form -show' : 'form -hide'} onSubmit={this.controller.handleValidPassword}>
						<h1 className='title'>Olá, {auth.first_name}!</h1>
						<h2 className='description'>Caso tenha esquecido sua senha, <Link to='/resetar-senha'>clique aqui</Link>.</h2>	
						<fieldset>
							<Input handleChange={this.controller.handleTextChange} value={auth.password} className='-password' type='password' id='password' placeholder='Digite sua senha' />
							<p className={`error ${errors.password ? '' : '-hide'}`}>{errors.password}</p>
							<SlimButton type='submit' handleClick={null} color='-orange'>
								{loading ? <img className='loading' src='/icons/rolling-orange.svg' /> : 'Entrar'}
							</SlimButton>
						</fieldset>
					</form>
				</section>
				<section className={`aprensentation ${isValidMail ? '-valided' : ''}`} />
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
	setAuthAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));