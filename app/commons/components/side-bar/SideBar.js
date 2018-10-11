import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'avataaars';

import Brand from '../brand';

import { NavLink } from 'react-router-dom';
import links from './links';
 
import './side-bar.styl';

const rolesLabel = {
	manager: 'Gerente',
	analyst: 'Analista'
};

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
						<Avatar
					  	avatarStyle='Circle'
							topType='WinterHat3'
							accessoriesType='Blank'
							hatColor='Black'
							facialHairType='BeardLight'
							facialHairColor='Black'
							clotheType='BlazerSweater'
							eyeType='Wink'
							eyebrowType='SadConcernedNatural'
							mouthType='Smile'
							skinColor='Brown'
						/>
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
