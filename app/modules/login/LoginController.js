import ValidationHelper from '../../commons/helpers/ValidationHelper';

export default class LoginController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
		
		this.handleValidMail = this.handleValidMail.bind(this);
		this.handleValidPassword = this.handleValidPassword.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleValidMail(e) {
		const { loading, auth, errors } = this.getState();
		e.preventDefault();
		
		if(loading) return;

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

		this.setState({ errors: { ...errors, email: null } });

		this.setState({ loading: true });
		setTimeout(() => this.setState({ isValidMail: true, loading: false }), 1200);
	}

	handleValidPassword(e) {
		e.preventDefault();
		if(this.getState().loading) return;

		this.setState({ loading: true });
		this.getProps().history.push('/painel');
	}

	handleTextChange(e) {
		const { id, value } = e.target;
		const auth = { ...this.getState().auth };
		
		auth[id] = value;
		this.setState({ auth });
	}

}