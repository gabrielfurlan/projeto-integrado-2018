import React, { PureComponent } from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import AsyncComponent from './AsyncComponent';

class PrivateRoute extends PureComponent {

	checkRoute(children, pathname) {

		var verify = false;

		children.map(route => {
			if (route.props.path.split('/')[1] == pathname.split('/')[1]) return verify = true;;
		});

		
		return verify;
	}

	render() {
		const { children, location : { pathname } } = this.props;
		const logged = window.sessionStorage.getItem('loggedIn') || window.localStorage.getItem('loggedIn');

		if(logged == 'true') return <div>{this.props.children}</div>;
		else return <Redirect to={{ pathname: '/', state: { from: this.props.location.pathname } }} />;
	}

};

export default withRouter(PrivateRoute);
