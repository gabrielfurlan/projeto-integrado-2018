import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import module from './module';
import AsyncComponent from './AsyncComponent';
import Application from './Application';
import PrivateRoute from './PrivateRoute';

import './stylesheets/settings/resets.styl';
import './stylesheets/settings/devices.styl';

const login = () => register("login", import(/* webpackChunkName: "login" */ "./modules/login/index"));
const painel = () => register("painel", import(/* webpackChunkName: "painel" */ "./modules/painel/index"));
const task = () => register("task", import(/* webpackChunkName: "task" */ "./modules/task/index"));

const register = module(store);

ReactDom.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route exact path='/' component={() => <AsyncComponent moduleProvider={login} />} />
				<Route path='/painel' component={() => <AsyncComponent moduleProvider={painel} />} />
				<Route path='/tarefa/:id' component={() => <AsyncComponent moduleProvider={task} />} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
