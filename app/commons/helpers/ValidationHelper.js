export default class ValidationHelper {
	
	static isEmail(value) {
		let user = value.substring(0, value.indexOf('@')).trim();
		let dominio = value.substring(value.indexOf('@') + 1, value.length).trim();
		let host = dominio.substring(0, dominio.indexOf('.'));
		
		if(
			user.length < 1 || user.indexOf('@') != -1 || host.length < 1 ||
			value.indexOf(' ') > -1 || dominio.length < 3 || dominio.indexOf('@') != -1 || 
			dominio.lastIndexOf('.') >= dominio.length - 1
		) return false;

		return true;
	}

}