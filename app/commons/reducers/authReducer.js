import { RESET_AUTH, SET_AUTH } from '../actions/authActions';

const INITIAL_STATE = {
	id: '',
	first_name: '',
	last_name: '',
	role: null,
	manager: null,
	analyst: null,
	email: '',
	about: '',
	created_at: null,
};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SET_AUTH: return { ...state, ...action.user };
		case RESET_AUTH: return { ...state, ...INITIAL_STATE };
		default: return state;
	}
};