import multiparty from 'multiparty';

export default class MultpartHelper {
	static parse(req) {
		return new Promise((resolve, reject) => {

			const form = new multiparty.Form();

			form.parse(req, (err, fields, result) => {
				console.log(err);
				if (err) {
					reject(err);
				} else {
					const file = result.files[0];

					let info;
					if (fields.info) {
						info = JSON.parse(fields.info[0]);
					}

					resolve({ file, info });
				}
			});
		});
	}
}