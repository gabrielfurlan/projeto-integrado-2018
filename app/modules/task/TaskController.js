import ProjectsRepository from '../../commons/repositories/ProjectsRepository';
import TasksRepository from '../../commons/repositories/TasksRepository';
import ResourcesRepository from '../../commons/repositories/ResourcesRepository';
import UsersRepository from '../../commons/repositories/UsersRepository';

export default class TasksController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
		
		this.projectsRepository = new ProjectsRepository(); 
		this.tasksRepository = new TasksRepository(); 
		this.resourcesRepository = new ResourcesRepository(); 
		this.usersRepository = new UsersRepository(); 
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSendComment = this.handleSendComment.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	async setInfo() {
		const { id } = this.getProps().match.params;
		
		let response = await this.tasksRepository.findOne(id);
		const task = response.task;

		this.setState({ task });

		response = await this.projectsRepository.findOne(task.projectId);
		const project = response.project;

		this.setState({ project });
		this.setComments();
	}

	async setComments() {
		const { id } = this.getProps().match.params;
		const comments = await this.resourcesRepository.findAll(id);
		const fetchCommentsUser = comments.map(({ userId }) => this.usersRepository
																															 	.findOne(userId));

		const users = await Promise.all(fetchCommentsUser);
		Repository = new ResourcesRepository(); 
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSendComment = this.handleSendComment.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	async setInfo() {
		const { id } = this.getProps().match.params;
		
		let response = await this.tasksRepository.findOne(id);
		const task = response.task;

		this.setState({ task });

		response = await this.projectsRepository.findOne(task.projectId);
		const project = response.project;

		this.setState({ project });
		this.setComments();
	}

	async setComments() {
		const { id } = this.getProps().match.params;
		let comments = await this.resourcesRepository.findAll(id);
		console.log(comments);
		const fetchCommentsUser = comments.map(({ userId }) => this.usersRepository
																															 	.findOne(userId));

		const response = await Promise.all(fetchCommentsUser);
		const users = response.map(({ user }) => user);

		comments = comments.map(comment => { 
			return {
				...comment, 
				user: users.find(user => user.id === comment.userId)
			};
		}).sort((a,b) => new Date(b.createdAt) < new Date(a.createdAt));


		this.setState({ comments });
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

	async handleSendComment(e) {
		e.preventDefault();
		const comment = await this.resourcesRepository
												.save(this.getCommentToApi());
		
		this.setComments();
	}

	getCommentToApi() {
		const { comment, task } = this.getState();
		const { auth } = this.getProps();

		return {
			comment,
			taskId: task.id,
			userId:  auth.id
		};
	}

	handleCommentChange(e) {
		const { value } = e.target;
		const state = { ...this.getState() };
		state.comment = value;
		this.setState(state);
	}

	async handleStatusChange(ref, value) {
		const task = { ...this.getState().task };
		task.status = value.id;

		this.setState({ task });		
		const response = await this.tasksRepository.editStatus(task.id, task.status);
	}

}