import UsersRepository from '../../commons/repositories/UsersRepository';
import ValidationHelper from '../../commons/helpers/ValidationHelper';

const messageEmailErrors = { 
	404: 'Usuário não encontrado, verifique se o email está correto.',
	500: 'Erro no servidor, contate o administrador do sistema.',
	501: 'Erro no servidor, contate o administrador do sistema.'
};

const messagePasswordErrors = { 
	405: 'Senha incorreta, tente novamente.',
	500: 'Erro no servidor, contate o administrador do sistema.',
	501: 'Erro no servidor, contate o administrador do sistema.'
};

export default class LoginController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
		
		this.handleValidMail = this.handleValidMail.bind(this);
		this.handleValidPassword = this.handleValidPassword.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);

		this.usersRepository = new UsersRepository(); 
	}

	async handleValidMail(e) {
		const { loading, auth, errors } = this.getState();
		e.preventDefault();
		
		if(loading) return;
		this.setState({ loading: true });

		// Checking if the email field is empty
		if(!auth.email) { 
			this.setState({ errors: { ...errors, email: 'Por favor, preencha o campo email.' } });
			return;
		}

		// Checking if the email is valid
		if(!ValidationHelper.isEmail(auth.email)) {
			this.setState({ errors: { ...errors, email: 'Email é inválido, tente novamente.' } });
			return;	
		}

		const response = await this.usersRepository.findOne(auth.email);

		if(!response.user) {
			setTimeout(() => 
				this.setState({ 
					errors: { ...errors, email: messageEmailErrors[response.status] }, 
					loading: false 
				}), 
				1200
			);

			return;	
		}		
		
		const user = {  
			...auth,
			first_name: response.user.firstName,
			last_name: response.user.lastName,
			id: response.user.id,
			email: response.email
		};

		setTimeout(() => this.setState({ isValidMail: true, loading: false, auth: user }), 1200);
	}

	async handleValidPassword(e) {
		const { loading, auth, errors } = this.getState();
		e.preventDefault();
		if(loading) return;

		this.setState({ loading: true });

		// Checking if the password field is empty
		if(!auth.password) { 
			this.setState({ errors: { ...errors, password: 'Por favor, preencha o campo de senha.' } });
			return;
		}

		const response = await this.usersRepository.verifyPassword(auth.id, auth.password);
		if(response.status != 200) {
			setTimeout(() => 
				this.setState({ 
					errors: { ...errors, password: messagePasswordErrors[response.status] }, 
					loading: false 
				}), 
				1200
			);

			return;	
		}


		this.getProps().history.push('/painel');
	}

	handleTextChange(e) {
		const { id, value } = e.target;
		const auth = { ...this.getState().auth };
		
		auth[id] = value;
		this.setState({ auth });
	}

}