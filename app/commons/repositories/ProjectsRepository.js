import BaseRepository from './BaseRepository';

export default class ProjectsRepository extends BaseRepository {
	
	save(project) {
		return this.post('/projects', project);
	}

	findAll() {
		return this.get('/projects');
	}

	findOne(id) {
		return this.get(`/project/${id}`);
	}

}