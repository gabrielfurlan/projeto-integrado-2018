import BaseRepository from './BaseRepository';

export default class ResourcesRepository extends BaseRepository {
	
	save(resource) {
		return this.post('/resources', resource);
	}

	findAll(taskId) {
		return this.get(`/task/${taskId}/resources`);
	}

}