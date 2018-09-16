import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'avataaars';

import Brand from '../brand';

import { NavLink } from 'react-router-dom';
import links from './links';
 
import './side-bar.styl';

export default class SideBar extends Component {

	renderLinks() {
		return links.map(({ icon, label, to }) => (
			<NavLink exact title={label} className='link' to={to} >
				<img src={icon} alt={label} />
				{label}
			</NavLink>
		));
	}

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
					{ this.renderLinks() }
				</nav>
			</div>
		);
	}
} 

SideBar.propTypes = {

};

SideBar.defualtProps = {

};
