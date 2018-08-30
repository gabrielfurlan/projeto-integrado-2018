import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PainelController from './PainelController';

import Home from './components/home';

import SideBar from '../../commons/components/side-bar';

import './painel.styl';

export class Painel extends Component {

	constructor(props) {
		super(props);
		this.renderHome = this.renderHome.bind(this);
	} 

	renderHome() {
		return <Home />;
	}

	render() {
		return (
			<div className='painel'>
				<SideBar />
				<main className='content'>
					<Route exact path='/painel' render={this.renderHome} />
				</main>
			</div>
		);
	}

} 

Painel.propTypes = {

};

Painel.defualtProps = {

};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Painel));