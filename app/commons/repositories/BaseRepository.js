import axios from 'axios';

const ROOT_URL = 'http://localhost:8080';

export default class Baseository {

	getOrigin(endpoint) {
		return axios.get(endpoint);
	}

	get(endpoint) {
		return this.resolvePromise(axios.get(`${ROOT_URL}${endpoint}`));
	}

	post(endpoint, body) {
		return this.resolvePromise(axios.post(`${ROOT_URL}${endpoint}`, body));
	}

	put(endpoint, body) {
		return this.resolvePromise(axios.put(`${ROOT_URL}${endpoint}`, body));
	}

	delete(endpoint) {
		return this.resolvePromise(axios.delete(`${ROOT_URL}${endpoint}`));
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