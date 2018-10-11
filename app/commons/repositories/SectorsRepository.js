import BaseRepository from './BaseRepository';

export default class SectorsRepository extends BaseRepository {
	
	/*
		* @method find 
		* @return {Promise} returns promise content sectors request 
	*/
	find() {
		return this.get('/sectors');
	}

}