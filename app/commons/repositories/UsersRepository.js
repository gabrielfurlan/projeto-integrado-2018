import BaseRepository from './BaseRepository';

export default class UsersRepository extends BaseRepository {
	
	/*
		* @method findOne 
		* @param key {String} it is user email or id  
		* @return {Promise} returns promise content user request 
	*/
	findOne(key) {
		return this.get(`/user/${key}`);
	}

	verifyPassword(id, password) {
		return this.post(`/user/${id}/verify`, { password });
	}

	save(user) {
		return this.post('/users', user);
	}

	findAll() {
		return this.get('/users');
	}


}