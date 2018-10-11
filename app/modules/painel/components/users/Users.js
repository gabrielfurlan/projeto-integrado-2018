import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../commons/components/button';
import Input from '../../../../commons/components/input';
import InputGroup from '../../../../commons/components/input-group';
import LinkButton from '../../../../commons/components/link-button';
import Modal from '../../../../commons/components/modal';
import PlusButton from '../../../../commons/components/plus-button';
import Select from '../../../../commons/components/select';
import UserCard from '../../../../commons/components/user-card';

import DateHelper from '../../../../commons/helpers/DateHelper';

import userTypes from '../../../../commons/assets/userTypes';

import UsersController from '../../controllers/UsersController';

import './users.styl';

export default class Users extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOpenedNewUserModal: false
		};

		this.handleToggleNewUserModal = this.handleToggleNewUserModal.bind(this); 
	}

	componentDidMount() {
		this.props.controller.findAll();
	}

	handleToggleNewUserModal() {
		let { isOpenedNewUserModal } = { ...this.state };
		isOpenedNewUserModal = !isOpenedNewUserModal;
		this.setState({ isOpenedNewUserModal });
	}

	renderUsers() {
		return this.props.users.map(user => <UserCard key={user.id} {...user} />);
	}

	renderAlert() {
		switch (this.props.status) {
			case 'error':
				return <div className='alert -error'>Erro ao cadastrar o cliente! Por favor contate o administrador do sistema.</div>;
			case 'saved':
				return <div className='alert -success'>Cliente cadastrado com sucesso!</div>;
			default:
				return null;
		}
	}


	render() {
		let { isOpenedNewUserModal } = this.state;
		let { errors, user, controller } = this.props;

		return (
			<section className='users'>
				<h1 className='title'>Usuários</h1>
				<div className='users-header'>
					<PlusButton handleClick={this.handleToggleNewUserModal} />
				</div>
				<div className='list'>
					{this.renderUsers()}
				</div>
				<Modal opened={isOpenedNewUserModal} className='user-modal' handleClose={this.handleToggleNewUserModal}>
						<h2 className='title'>Cadastre um novo usuário</h2>
						<form className='user-form' onSubmit={controller.handleSave}>
							{	this.renderAlert() }
							<div className='row-1'>
								<InputGroup label='Nome' error={errors.first_name[0]} className='first-name-ig'>
									<Input id='first_name' value={user.first_name} handleChange={controller.handleTextChange} />
								</InputGroup>
								<InputGroup label='Sobrenome' error={errors.last_name[0]} className='last-name-ig'>
									<Input id='last_name' value={user.last_name} handleChange={controller.handleTextChange} />
								</InputGroup>
							</div>

							<div className='row-2'>
								<InputGroup label='Email' error={errors.email[0]} className='email-ig'>
									<Input id='email' value={user.email} handleChange={controller.handleTextChange} />
								</InputGroup>
								<InputGroup label='Função' className='role-ig'>
									<Select className='-white' id='role'options={userTypes} value={user.role} handleChange={controller.handleSelectChange} />
								</InputGroup>
							</div>

							<div className='row-3'>
								<InputGroup label='Data de nascimento' error={errors.day[0]} className='month-ig'>
									<Select className='-white' id='month'options={DateHelper.months()} value={user.month} placeholder='Mês' handleChange={controller.handleSelectChange} />
								</InputGroup>
								<InputGroup label='&nbsp;' error={errors.month[0]} className='day-ig'>
									<Select disabled={!user.month.id} className='-white' id='day' value={user.day} options={DateHelper.days(user.month.id)} placeholder='Dia' handleChange={controller.handleSelectChange} />
								</InputGroup>
								<InputGroup label='&nbsp;' error={errors.year[0]} className='year-ig'>
									<Select className='-white' id='year' options={DateHelper.years()} value={user.year} placeholder='Ano' handleChange={controller.handleSelectChange} />
								</InputGroup>
							</div>
							
							<div className='actions'>
								<Button color='-orange' type='submit'>Cadastrar</Button>
								<LinkButton handleClick={this.handleToggleNewUserModal} color='-orange'>Cancelar</LinkButton>
							</div>
						</form>
				</Modal>
			</section>
		);
	}
}

Users.propTypes = {
	sectors: PropTypes.array,
	users: PropTypes.array,
	statusLoading: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	controller: PropTypes.instanceOf(UsersController).isRequired,
	user: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

Users.defaultProps = {
	sectors: []
};

