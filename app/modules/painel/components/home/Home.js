import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './home.styl';

export default class Home extends Component {
	render() {
		return (
			<section className='home'>
				<h1 className='title'>Home</h1>
				<section className='global-info'>
					<h2 className='subtitle'>Informações Gerais: </h2>
					<div className='info -done-tasks'>
						<span className='value'>0</span>
						<label className='label'>tarefas realizadas</label>
					</div>
					<div className='info -todo'>
						<span className='value'>0</span>
						<label className='label'>tarefas a fazer</label>
					</div>
					<div className='info -hours-worked'>
						<span className='value'>0:00</span>
						<label className='label'>horas trabalhada</label>
					</div>
				</section>
				<section className='assign-to-me'>
					<h2 className='subtitle'>Tarefas atribuidas a mim:</h2>
					<ul className='list'>
						<li className='card' />
						<li className='card' />
						<li className='card' />
						<li className='card' />
					</ul>
				</section>
			</section>
		);
	}
} 

Home.propTypes = {

};

Home.defualtProps = {

};
