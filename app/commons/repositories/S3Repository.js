import AWS from 'aws-sdk';

export default class S3Repository {
	constructor() {
		this.s3 = new AWS.S3({ signatureVersion: 'v4' });
		this.bucket = 'pi-2018';
	}

	async getAll(prefix) {
		const params = {
			Bucket: this.bucket,
			Prefix: prefix
		};

		return new Promise((resolve, reject) => {
			this.s3.listObjects(params, (err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	}

	async upload(body, key, contentType = null) {
		const params = {
			Body: body,
			Bucket: this.bucket,
			Key: key,
			ACL: 'public-read-write'
		};

		if(contentType) params.ContentType = contentType;

		return new Promise((resolve, reject) => {
			this.s3.upload(params, (err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		});
	}

	async delete(key) {
		const options = {
			Bucket: this.bucket,
			Key: key
		};

		console.log(options);

		return new Promise((resolve, reject) => {
			this.s3.deleteObject(options, function (err, result) {
				console.log('err', err);
				console.log('result', result);

				if (err) reject(err);
				else resolve(result);
			});
		});
	}
}