import UsersRepository from './commons/repositories/UsersRepository';

export default class ApplicationController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
	
		this.usersRepository = new UsersRepository();
	}

	async setAuth(id) {
		const response = await this.usersRepository.findOne(id);

		if(response.status != 200) {
			// handling error

			this.getProps().resetAuthAction();
			window.sessionStorage.setItem('id', '');
			window.sessionStorage.setItem('loggedIn', 'false');
			this.setState({ loading: false });

			return;
		}

		const user = {  
			first_name: response.user.firstName,
			last_name: response.user.lastName,
			id: response.user.id,
			role: response.user.role,
			email: response.email
		};

		this.getProps().setAuthAction(user);
		window.sessionStorage.setItem('id', user.id);
		window.sessionStorage.setItem('loggedIn', 'true');
		this.setState({ loading: false });
	}
}