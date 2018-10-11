import TasksRepository from '../../commons/repositories/TasksRepository';

export default class TasksController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
		
		this.tasksRepository = new TasksRepository(); 
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	async setInfo() {
		const { id } = this.getProps().match.params;
		const response = await this.tasksRepository.findOne(id);
		console.log(response);
		this.setState({ task: response.task });
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