import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class AsyncComponent extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			Component: null
		};
	}

	componentWillMount() {
		if (!this.state.Component) {
			this.props.moduleProvider().then(({ Component }) => this.setState({ Component }));
		}
	}

	render() {
		const { Component } = this.state;

		return (
			<div>
				{Component ? <Component /> : null}
			</div>
		);
	}
};

export default withRouter(AsyncComponent);