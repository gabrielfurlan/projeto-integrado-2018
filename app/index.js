import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import module from './module';
import AsyncComponent from './AsyncComponent';
import PrivateRoute from './PrivateRoute';

import './stylesheets/settings/resets.styl';
import './stylesheets/settings/devices.styl';

const login = () => register("login", import(/* webpackChunkName: "login" */ "./modules/login/index"));
const painel = () => register("login", import(/* webpackChunkName: "painel" */ "./modules/painel/index"));

const register = module(store);

ReactDom.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={() => <AsyncComponent moduleProvider={login} />} />
				<Route path='/painel' component={() => <AsyncComponent moduleProvider={painel} />} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
