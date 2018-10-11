import { SET_SECTORS } from '../actions/sectorsActions';

const INITIAL_STATE = [];

export default (state = [], action) => {
	switch(action.type) {
		case SET_SECTORS: return [ ...state, ...action.sectors ];
		default: return state;
	}
};
