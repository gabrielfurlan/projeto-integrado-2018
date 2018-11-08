import ProjectsRepository from '../../commons/repositories/ProjectsRepository';
import FilesRepository from '../../commons/repositories/FilesRepository';
import TasksRepository from '../../commons/repositories/TasksRepository';
import CommentFilesRepository from '../../commons/repositories/CommentFilesRepository';
import ResourcesRepository from '../../commons/repositories/ResourcesRepository';
import UsersRepository from '../../commons/repositories/UsersRepository';

import b64toBlob from 'b64-to-blob';

export default class TasksController {

	constructor(getProps, getState, setState) {
		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;
		
		this.projectsRepository = new ProjectsRepository(); 
		this.tasksRepository = new TasksRepository(); 
		this.filesRepository = new FilesRepository(); 
		this.commentFilesRepository = new CommentFilesRepository(); 
		this.resourcesRepository = new ResourcesRepository(); 
		this.usersRepository = new UsersRepository(); 
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSendComment = this.handleSendComment.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
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
		const fetchCommentsUser = comments.map(({ userId }) => this.usersRepository
																															 	.findOne(userId));

		let response = await Promise.all(fetchCommentsUser);
		const users = response.map(({ user }) => user);

		comments = comments.map(comment => { 
			return {
				...comment, 
				user: users.find(user => user.id === comment.userId)
			};
		}).sort((a,b) => new Date(b.createdAt) < new Date(a.createdAt));

		const fetchCommentsFiles = comments.map(({ id }) => this.filesRepository
																															.findByCommentId(id));
		response = await Promise.all(fetchCommentsFiles);
		
		const files = [];
		response.forEach(list => {
			list.forEach(file => files.push(file));
		});

		comments = comments.map(comment => { 
			console.log(response);
			return {
				...comment, 
				files: files.filter(({ resourceId }) => resourceId == comment.id)
			};
		});

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

	handleFileChange(e) {
		e.preventDefault();
		const { files, id } = e.target;

		const reader = new FileReader();

		reader.onload = (e) => {
			const file = { data: files[0], src: e.target.result, id: e.target.result + files[0].name, name: files[0].name };
			const newFiles = [...this.getState().files];
			newFiles.push(file);
			this.setState({ files: newFiles });
		};

		reader.readAsDataURL(files[0]);
	}

	async handleSendComment(e) {
		e.preventDefault();

		const { comment, files } = this.getState();
		if(!comment && !files.length) return;

		const response = await this.resourcesRepository
												.save(this.getCommentToApi());

		const filePromises = this.getState().files.map(file => this.upload(file, response.data.id));
		const result = await Promise.all(filePromises);

		this.setComments();
	}

	async upload(file, id) {
		let data = new FormData();
		data.append('files', new Blob([file.data], { type: 'multipart/form-data' }));
		data.append('info', JSON.stringify({ ext: file.data.type.split('/')[1] }));
		
		const response = await this.filesRepository.upload({ data, id: file.data.name });
		return this.filesRepository.save({ resourceId: id, file: response.Location, name: file.data.name }, id);
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