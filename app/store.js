import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './commons/reducers/authReducer';
import sectorsReducer from './commons/reducers/sectorsReducer';

export default (() => {
	const initialState = {};
	const store = createStore(createReducer(), composeWithDevTools(
		applyMiddleware(thunk)
	));
	store.async = {};

	return store;
})();

export function registerReducer(store, name, reducer) {
	store.async[name] = reducer;
	store.replaceReducer(createReducer(store.async));
};

function createReducer(reducers) {
	return combineReducers({
		root: (state = null) => state,
		...reducers,
		auth: authReducer,
		sectors: sectorsReducer
	});
}
