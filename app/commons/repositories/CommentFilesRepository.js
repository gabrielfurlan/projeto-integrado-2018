import Buffer from 'buffer';
import BaseRepository from './BaseRepository';

export default class CommentFilesRepository extends BaseRepository {
	
	save(file) {
		const curBuffer = new Buffer(file, 'binary');
		return this.post('/files-resources', curBuffer);
	}

	findByCommentId(commentId) {
		return this.get(`/comments/${commentId}/files`);
	}

}