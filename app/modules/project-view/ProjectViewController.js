import ProjectsRepository from '../../commons/repositories/ProjectsRepository';
import TasksRepository from '../../commons/repositories/TasksRepository';

import { initial_task_errors, initial_task } from './ProjectView';

export default class ProjectViewController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
		
		this.projectsRepository = new ProjectsRepository(); 
		this.tasksRepository = new TasksRepository(); 
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async findAll() {
		const { id } = this.getProps().match.params;
		let response = await this.tasksRepository.findByProjectId(id);
		const todo = response.filter(task => task.status === 'to-do');
		const done = response.filter(task => task.status === 'done');
		const qa = response.filter(task => task.status === 'qa');
		const inProgress = response.filter(task => task.status === 'in-progress');

		this.setState({ todo, done, inProgress, qa });
	}

	async handleSubmit(e) {
		e.preventDefault();

		const { task } = this.getState();

		const { error, validated } = this._validate();
		if(!validated) return this.setState({ taskErrors: error });
		const response = await this.tasksRepository.save(this.mapToApi(task));

		if(response.status != 200) {
			this.setState({ taskStatus: 'error' });
			return false;
		}

		this.setState({ taskErrors: { ...initial_task_errors }, taskStatus: 'saved', task: { ...initial_task } });
		this.findAll();
		return false;
	}

	mapToApi(task) {
		const { id } = this.getProps().match.params;
		return {
			name: task.name,
			description: task.description,
			projectId: id,
			priority: task.priority.id,
			status: 'to-do'
		};
	}

	renderAlert() {
		switch (this.props.taskStatus) {
			case 'error':
				return <div className='alert -error'>Erro ao cadastrar o tarefa! Por favor contate o administrador do sistema.</div>;
			case 'saved':
				return <div className='alert -success'>Tarefa cadastrado com sucesso!</div>;
			default:
				return null;
		}
	}

	_validate() {
		const { task } = this.getState();
		const error = { ...initial_task_errors };
		let validated = true;
		console.log(error);

		if(!task.name) {
			validated = false;
			error.name.push('Por favor, preencha o campo nome.');
		}

		return ({ validated , error });
	}

	async setInfo() {
		const { id } = this.getProps().match.params;
		const response = await this.projectsRepository.findOne(id);
		this.setState({ project: response.project });
	}

	handleTextChange(e) {
		const { value, id } = e.target;
		const task = { ...this.getState().task };
		task[id] = value;
		this.setState({ task });
	}

	handleSelectChange(ref, value) {
		const task = { ...this.getState().task };
		task[ref] = value;
		this.setState({ task });
	} 

}