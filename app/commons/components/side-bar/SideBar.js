import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'avataaars';

import Brand from '../brand';

import { NavLink } from 'react-router-dom';
 
import './side-bar.styl';

export default class SideBar extends Component {
	render() {
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
					<span className='name'>Gabriel Furlan</span>
				</div>
				<nav className='navigation'>
					<NavLink exact title='Home' className='link' to='/painel'>
						<img src='/icons/global.svg' alt='Home' />
						Home
					</NavLink>
					<NavLink title='Projetos' className='link' to='/painel/projetos'>
						<img src='/icons/projects.svg' alt='Projetos' />
						Projetos
					</NavLink>
					<NavLink title='Configuração' className='link' to='/painel/config'>
						<img src='/icons/user-config.svg' alt='Configuração' />
						Configurações
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
