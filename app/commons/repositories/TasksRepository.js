import BaseRepository from './BaseRepository';

export default class TasksRepository extends BaseRepository {
	
	save(task) {
		return this.post('/tasks', task);
	}

	findAll() {
		return this.get('/tasks');
	}

	findOne(id) {
		return this.get(`/task/${id}`);
	}

	findByProjectId(projectId) {
		return this.get(`/projects/${projectId}/tasks`);
	}

}