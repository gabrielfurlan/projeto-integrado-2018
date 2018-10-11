import moment from 'moment';
moment.locale('PT-br');

export default class DateHelper {

	static months() {
		return moment.months().map((month, key) => {
			return { id: key + 1, label: month };
		});
	}

	static years() {
		let count = new Date().getFullYear();
		const years = [];

		while (count > 1900) {
			years.push(count);
			count--;
		}

		return years.map(year => {
			return { id: year, label: year };
		});
	}

	static days(month) {
		let count = 1;
		const days = [];
		switch(month){
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				while(count <= 31) {
					days.push(count);
					count++;
				}
				break;
			case 2:
				while(count <= 28) {
					days.push(count);
					count++;
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				while(count <= 30) {
					days.push(count);
					count++;
				}
				break;
		}

		return days.map(day => ({ id: day, label: day }));
	}

}