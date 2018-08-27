import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
 
import './side-bar.styl';

export default class SideBar extends Component {
	render() {
		return (
			<div className='side-bar'>
				<img className='logo' src='/icons/logo.svg' alt='Logo' />
				<nav className='navigation'>
					<NavLink exact className='link' to='/painel'>
						<img src='/icons/global.svg' alt='Home' />
						Home
					</NavLink>
					<NavLink className='link' to='/painel/projetos'>
						<img src='/icons/projects.svg' alt='Projetos' />
						Projetos
					</NavLink>
					<NavLink className='link' to='/painel/config'>
						<img src='/icons/user-config.svg' alt='Configuração' />
						Configuração
					</NavLink>
				</nav>
			</div>
		);
	}
} 

SideBar.propTypes = {

};

SideBar.defualtProps = {

};
