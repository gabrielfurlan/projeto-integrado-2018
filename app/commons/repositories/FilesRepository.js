import axios from 'axios';

import BaseRepository from './BaseRepository';

export default class FilesRepository extends BaseRepository{

	constructor() {
		super();
		this.upload = this.upload.bind(this);
	}

	async upload({ data, id }) {
		return this.resolvePromise(axios.post('/upload', data));
	}

	findByCommentId(resourceId) {
		return this.get(`/resources/${resourceId}/files`);
	}

	save(file, resourceId) {
		return this.post(`/resources/${resourceId}/files`, file);
	}

	async resolvePromise(promise) {
		let response;

		try {
			response = await promise;
		} catch(e) {
			console.log(e);
			return {
				code: 501,
				message: 'Internal Server Error'
			};
		}

		return response.data;
	}

}