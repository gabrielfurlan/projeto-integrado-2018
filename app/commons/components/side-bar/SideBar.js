import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import Brand from '../brand';

import { NavLink } from 'react-router-dom';
import links from './links';

import './side-bar.styl';

const rolesLabel = {
	manager: 'Gerente',
	analyst: 'Analista'
};

const colors = ['#F83A67', '#4F9488', '#3E6E99', '#CED481', '#CC6C67', '#E1A246'];

export default class SideBar extends Component {

	renderLinks() {
		const { auth } = this.props;
		return links.filter(({ access }) => access.findIndex(role => role === auth.role) != -1).map(({ icon, label, to }) => (
			<NavLink exact title={label} className='link' to={to} >
				<img src={icon} alt={label} />
				{label}
			</NavLink>
		));
	}

	render() {
		const { handleLogout, auth } = this.props;
		const name = `${auth.first_name} ${auth.last_name}`;
		return (
			<div className='side-bar'>
				<Brand />
				<div className='user-info'>
					<figure className='avatar'>
						<Avatar colors={colors} name={auth.first_name} size="90" textSizeRatio="1.75" round />
					</figure>
					<span className='name'>{name}</span>
					<span className='role'>{rolesLabel[auth.role]}</span>
				</div>
				<nav className='navigation'>
					{ this.renderLinks() }
					<a title='Sair' className='link -logout' onClick={handleLogout} >
						<img src='/icons/exit.svg' alt='Sair' />
						Sair
					</a>
				</nav>
			</div>
		);
	}
} 

SideBar.propTypes = {
	auth: PropTypes.object,
	handleLogout: PropTypes.func.isRequired
};

SideBar.defualtProps = {
	auth: {}
};
