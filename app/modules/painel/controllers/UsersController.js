import UsersRepository from '../../../commons/repositories/UsersRepository';
import ValidationHelper from '../../../commons/helpers/ValidationHelper';
import moment from 'moment';

import { initial_user, initial_user_errors } from '../Painel';

export default class UsersController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
	
		this.usersRepository = new UsersRepository(); 
		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	async findAll() {
		let response = await this.usersRepository.findAll();
		this.setState({ users: response });
	}

	async handleSave(e) {
		e.preventDefault();

		const { user } = this.getState();

		const { error, validated } = this._validate();
		if(!validated) return this.setState({ userError: error });

		const response = await this.usersRepository.save(this.mapToApi(user));

		if(response.status == 406) {
			const error = { ...initial_user_errors };
			error.email.push('Email já cadastrado.');
			return this.setState({ userError: error });			
		}

		if(response.status != 200) {
			this.setState({ userStatus: 'error' });
			return false;
		}

		this.setState({ userError: { ...initial_user_errors }, userStatus: 'saved', user: { ...initial_user } });
		this.findAll();
		return false;
	}

	mapToApi(user) {
		const birthday = new Date();
		birthday.setDate(user.day.id);
		birthday.setMonth(user.month.id - 1);
		birthday.setYear(user.year.id);

		return {
			firstName: user.first_name,
			lastName: user.last_name,
			email: user.email,
			birthday: moment(birthday).format('YYYY-MM-DD'),
			role: user.role.id
		};
	}

	_validate() {
		const { user } = this.getState();
		const error = { ...initial_user_errors };
		let validated = true;

		const emailRxp = /asda/;

		if(!user.first_name) {
			validated = false;
			error.first_name.push('Por favor, preencha o campo nome.');
		}

		if(!user.last_name) {
			validated = false;  
			error.last_name.push('Por favor, preencha o campo sobrenome.');
		}

		if(!user.email) {
			validated = false;
			error.email.push('Por favor, preencha o campo email.');
		}

		if(!ValidationHelper.isEmail(user.email)) {
			validated = false;
			error.email.push('Email inválido.');
		}

		if(!user.day.id) {
			validated = false;
			error.day.push('Por favor, selecione o dia de seu nascimento.');
		}

		if(!user.month.id) {
			validated = false;
			error.month.push('Por favor, selecione o mês de seu nascimento.');
		}

		if(!user.year.id) {
			validated = false;
			error.year.push('Por favor, selecione o ano de seu nascimento.');
		}
		
		return ({ validated , error });
	}

	handleTextChange(e) {
		const { value, id } = e.target;
		const user = { ...this.getState().user };
		user[id] = value;
		this.setState({ user });
	}

	handleSelectChange(ref, value) {
		const user = { ...this.getState().user };
		user[ref] = value;
		this.setState({ user });
	} 

}
