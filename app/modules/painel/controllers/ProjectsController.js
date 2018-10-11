import ProjectsRepository from '../../../commons/repositories/ProjectsRepository';
import ClientsRepository from '../../../commons/repositories/ClientsRepository';
import ValidationHelper from '../../../commons/helpers/ValidationHelper';

import { initial_project, initial_project_errors } from '../Painel';

export default class ProjectsController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
	
		this.projectsRepository = new ProjectsRepository(); 
		this.clientsRepository = new ClientsRepository(); 
		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	async setInfo() {
		let clients = await this.clientsRepository.findAll();
		const project_clients_data = clients.map(client => ({ id: client.id, label: client.name }));
		
		let projects = await this.projectsRepository.findAll();
		projects = projects.map(project => ({ ...project, client: clients.find(client => client.id == project.clientId) }));

		this.setState({ project_clients_data, projects });
	}

	async handleSave(e) {
		e.preventDefault();
		const { project } = this.getState();
		
		this.setState({ projectStatus: 'loading' });
		const { error, validated } = this._validate();

		if(!validated) return this.setState({ projectError: error });
		
		const response = await this.projectsRepository.save(this.mapToApi(project));

		if(response.status != 200) {
			this.setState({ projectStatus: 'error' });
			return false;
		}

		this.setState({ projectStatus: 'saved', project: { ...initial_project } });
		this.setInfo();
		
		return false;
	}

	mapToApi(project) {
		return {
			name: project.name,
			description: project.description,
			clientId: project.client.id
		};
	}

	_validate() {
		const { project } = this.getState();
		const error = {};
		let validated = true;

		error.name = [];
		if(!project.name) {
			validated = false;
			error.name.push('Por favor, preencha o campo nome da projeto.');
		}

		if(!project.client.id) {
			validated = false;
			error.client = [];
			error.client.push('Por favor, selecione um cliente.');
		}

		return ({ validated , error: { ...initial_project_errors, ...error } });
	}

	handleTextChange(e) {
		const { value, id } = e.target;
		const project = { ...this.getState().project };
		project[id] = value;
		this.setState({ project });
	}

	handleSelectChange(ref, value) {
		const project = { ...this.getState().project };
		project[ref] = value;
		this.setState({ project });
	} 

}
