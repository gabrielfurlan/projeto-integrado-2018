export const SET_AUTH = 'SET_AUTH';
export const setAuthAction = (user) => ({
	type: SET_AUTH,
	user
});

export const RESET_AUTH = 'RESET_AUTH';
export const resetAuthAction = () => ({
	type: RESET_AUTH
});