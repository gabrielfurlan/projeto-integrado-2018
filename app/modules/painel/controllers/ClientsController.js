import ClientsRepository from '../../../commons/repositories/ClientsRepository';
import ValidationHelper from '../../../commons/helpers/ValidationHelper';

import { initial_client, initial_client_errors } from '../Painel';

export default class ClientsController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
	
		this.clientsRepository = new ClientsRepository(); 
		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	async findAll() {
		let response = await this.clientsRepository.findAll();
		this.setState({ clients: response });
	}

	async handleSave(e) {
		e.preventDefault();
		const { client } = this.getState();
		this.setState({ clientStatus: 'loading', clientStatus: '' });
		const { error, validated } = this._validate();

		if(!validated) return this.setState({ clientError: error });
		
		const response = await this.clientsRepository.save(this.mapToApi(client));

		if(response.status != 200) {
			this.setState({ clientStatus: 'error' });
			return false;
		}

		this.setState({ clientStatus: 'saved', client: { ...initial_client } });
		this.findAll();
		return false;
	}

	mapToApi(client) {
		return {
			name: client.name,
			email: client.email,
			sectorId: client.sector.id,
			cnpj: client.cnpj,
			phoneNumber: client.phone_number
		};
	}

	_validate() {
		const { client } = this.getState();
		const error = {};

		let validated = true;

		error.name = [];
		if(!client.name) {
			validated = false;
			error.name.push('Por favor, preencha o campo nome da empresa.');
		}

		error.cnpj = [];
		if(!client.cnpj) {
			validated = false;  
			error.cnpj.push('Por favor, preencha o campo cnpj.');
		}

		error.email = [];
		if(!client.email) {
			validated = false;
			error.email.push('Por favor, preencha o campo email.');
		}

		if(!ValidationHelper.isEmail(client.email)) {
			validated = false;
			error.email.push('Email inválido.');
		}

		error.phone_number = [];
		if(!client.phone_number) {
			validated = false;
			error.phone_number.push('Por favor, preencha o campo telefone.');
		}

		if(!client.sector.id) {
			validated = false;
			error.sector = [];
			error.sector.push('Por favor, selecione um setor.');
		}

		return ({ validated , error: { ...initial_client_errors, ...error } });
	}

	handleTextChange(e) {
		const { value, id } = e.target;
		const client = { ...this.getState().client };
		client[id] = value;
		this.setState({ client });
	}

	handleSelectChange(ref, value) {
		const client = { ...this.getState().client };
		client[ref] = value;
		this.setState({ client });
	} 

}
