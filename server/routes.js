import MultipartHelper from '../app/commons/helpers/MultipartHelper';
import FileSystemHelper from '../app/commons/helpers/FileSystemHelper';
import IdGeneratorHelper from '../app/commons/helpers/IdGeneratorHelper';

import S3Repository from '../app/commons/repositories/S3Repository';
const s3 = new S3Repository();

const routes = (app) => {
	app.post('/upload', async (req, res) => {
		const multipartData = await MultipartHelper.parse(req);
		if (multipartData.error) console.log('multipartData', multipartData.error);

		const { file, info } = multipartData;
		let fileData, filePath;

		filePath = file.path;
		fileData = await FileSystemHelper.read(filePath);
		const key = `files/${info.ext}/${IdGeneratorHelper.new(20)}.${info.ext}`;

		const result = await s3.upload(fileData, key, info.contentType);
		await FileSystemHelper.delete(filePath);

		res.send(result);
	});

	app.get('*', (req, res) => res.render('generic-index'));
};

export default routes;
