import BaseRepository from './BaseRepository';

export default class ClientsRepository extends BaseRepository {
	
	save(client) {
		return this.post('/clients', client);
	}

	findAll() {
		return this.get('/clients');
	}

}