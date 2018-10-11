import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../commons/components/button';
import ClientCard from '../../../../commons/components/client-card';
import Input from '../../../../commons/components/input';
import InputGroup from '../../../../commons/components/input-group';
import LinkButton from '../../../../commons/components/link-button';
import Modal from '../../../../commons/components/modal';
import PlusButton from '../../../../commons/components/plus-button';
import Select from '../../../../commons/components/select';

import MaskHelper from '../../../../commons/helpers/MaskHelper';

import ClientsController from '../../controllers/ClientsController';

import './clients.styl';

export default class Clients extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			isOpenedNewClientModal: false
		};

		this.handleToggleNewClientModal = this.handleToggleNewClientModal.bind(this); 
	}

	componentDidMount() {
		this.props.controller.findAll();
	}

	handleToggleNewClientModal() {
		let { isOpenedNewClientModal } = { ...this.state };
		isOpenedNewClientModal = !isOpenedNewClientModal;
		this.setState({ isOpenedNewClientModal });
	}

	renderClients() {
		const { clients, sectors } = this.props;
		return clients.map(client => <ClientCard key={client.id} sectors={sectors} {...client} />);
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
		const { isOpenedNewClientModal } = this.state;
		const { sectors, client, errors, controller, clients } = this.props;
		
		return (
			<section className='clients'>
				<h1 className='title'>Clientes</h1>
				<div className='clients-header'>
					<PlusButton handleClick={this.handleToggleNewClientModal} />
				</div>
				<div className='list'>
					{this.renderClients()}
				</div>
				<Modal opened={isOpenedNewClientModal} className='client-modal' handleClose={this.handleToggleNewClientModal}>
					<h2 className='title'>Cadastre um novo cliente</h2>
					<form className='client-form' onSubmit={controller.handleSave}>
						{	this.renderAlert() }
						<div className='row-1'>
							<InputGroup label='Nome da empresa' error={errors.name[0]} className='name-ig'>
								<Input id='name' value={client.name} handleChange={controller.handleTextChange} />
							</InputGroup>
							<InputGroup label='CNPJ' error={errors.cnpj[0]} className='cnpj-ig'>
								<Input id='cnpj' value={MaskHelper.formatCNPJ(client.cnpj)} placeholder='00.000.000/0000-00' handleChange={controller.handleTextChange} />
							</InputGroup>
						</div>

						<div className='row-1'>
							<InputGroup label='Setor' error={errors.sector[0]} className='sector-ig'>
								<Select className='-white' id='sector'options={sectors} value={client.sector} handleChange={controller.handleSelectChange} />
							</InputGroup>
						</div>
						
						<div className='row-1'>
							<InputGroup label='Email' error={errors.email[0]} className='email-ig'>
								<Input id='email' value={client.email} placeholder='email@dominio.com' handleChange={controller.handleTextChange} />
							</InputGroup>
							<InputGroup label='Telefone' error={errors.phone_number[0]} className='phone-ig'>
								<Input id='phone_number' value={MaskHelper.formatPhone(client.phone_number)} placeholder='(00) 00000-0000' handleChange={controller.handleTextChange} />
							</InputGroup>
						</div>

						<div className='actions'>
							<Button color='-orange' type='submit' handleClick={controller.handleSave}>Cadastrar</Button>
							<LinkButton handleClick={this.handleToggleNewClientModal} color='-orange'>Cancelar</LinkButton>
						</div>
					</form>
				</Modal>
			</section>
		);
	}
}

Clients.propTypes = {
	sectors: PropTypes.array,
	clients: PropTypes.array,
	statusLoading: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	controller: PropTypes.instanceOf(ClientsController).isRequired,
	client: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

Clients.defaultProps = {
	sectors: []
};
