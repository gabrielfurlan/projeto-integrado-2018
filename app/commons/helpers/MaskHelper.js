export default class MaskHelper {
	static formatDate (date) {
		if(date.length > 2 && date[2] != '/') date = date.substring(0, 2) + '/' + date.substring(2, date.length);
		if(date.length > 5 && date[5] != '/') date = date.substring(0, 5) + '/' + date.substring(5, date.length);

		return date.substring(0, 10);
	};

	static formatRG (rg) {
		if(rg.length > 2 && rg[2] != '.') rg = rg.substring(0, 2) + '.' + rg.substring(2, rg.length);
		if(rg.length > 6 && rg[6] != '.') rg = rg.substring(0, 6) + '.' + rg.substring(6, rg.length);
		if(rg.length > 10 && rg[10] != '-') rg = rg.substring(0, 10) + '-' + rg.substring(10, rg.length);

		return rg.substring(0, 12);
	};

	static formatCPF (cpf) {
		if(cpf.length > 3 && cpf[3] != '.') cpf = cpf.substring(0, 3) + '.' + cpf.substring(3, cpf.length);
		if(cpf.length > 7 && cpf[7] != '.') cpf = cpf.substring(0, 7) + '.' + cpf.substring(7, cpf.length);
		if(cpf.length > 11 && cpf[11] != '-') cpf = cpf.substring(0, 11) + '-' + cpf.substring(11, cpf.length);

		return cpf.substring(0, 14);
	};

	static formatPhone (phone) {
		phone = this.extractNumbers(phone);
		if(phone.length > 0 && phone[0] != '(') phone = '(' + phone;
		if(phone.length > 3 && phone[3] != ')') phone = phone.substring(0, 3) + ')' + phone.substring(3, phone.length);
		if(phone.length > 4 && phone[4] != ' ') phone = phone.substring(0, 4) + ' ' + phone.substring(4, phone.length);

		phone = phone.replace(/[-]/g, '');
		if(phone.length > 13) phone = phone.substring(0, 10) + '-' + phone.substring(10, phone.length);
		else if(phone.length > 9) phone = phone.substring(0, 9) + '-' + phone.substring(9, phone.length);

		return phone.substring(0, 15);
	};

	static extractPhone(phone) {
		return phone.replace('-', '').replace('(', '').replace(')', '').replace(' ', '');
	};

	static formatCEP (cep) {
		var numbers = this.extractNumbers(cep);
		if(numbers.length > 5) numbers = numbers.substring(0, 5) + '-' + numbers.substring(5, numbers.length);

		return numbers.substring(0, 9);
	};

	static formatCNPJ(cnpj) {
		const number = this.extractNumbers(cnpj);
		var parsed = '';

		for(var i in number) {
			if(i == 2 || i == 5) parsed += '.';
			if(i == 8) parsed += '/';
			if(i == 12) parsed += '-';
			parsed += number[i];
		}

		return parsed.substring(0, 18);
	};

	static formatStateName(state, list, to = 'name') {
		if(to == 'name') {
			for(var i in list) {
				const item = list[i];
				if(item.id == state) return item.name;
			}
			return 'XX';
		}
	};

	// ENTRAR COM STRING!!!
	static numberWithDots(value) {
		const number = this.extractNumbers(value).split('').reverse().join('');
		var withDots = '';
		for(var i in number) {
			if(i % 3 == 0 && i > 2) withDots += '.';
			withDots += number[i];
		}
		return withDots.split('').reverse().join('');
	};

	static firstName(value){
		const splited = value.split(' ');
		return splited[0];
	};
	static validateNumbers(value){
		var onlyNumbers = value.replace(/[^0-9]/g,'');
		return onlyNumbers;
	};

	static extractNumbers(text) {
		var number = '';
		for(var i in text) {
			const n = text[i];
			if(parseInt(n) || parseInt(n) === 0) number += n;
		}
		return number;
	};
};