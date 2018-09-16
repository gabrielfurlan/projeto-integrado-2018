import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ClientCard from '../../../../commons/components/client-card';

import './clients.styl';


const clients = [
	{
		id: 'asdasdasd',
		name: 'Cliente Teste #1'
	},
	{
		id: 'asassdasd',
		name: 'Cliente Teste #2'
	}
];

export default class Clients extends Component {
		
	renderClients() {
		return clients.map(client => <ClientCard key={client.id} {...client} />);
	}

	render() {
		return (
			<section className='clients'>
				<h1 className='title'>Cliente</h1>
				<div className='list'>
					{this.renderClients()}
				</div>
			</section>
		);
	}
}

Clients.propTypes = {

};

Clients.defaultProps = {

};

