import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './client-card.styl';

class ClientCard extends Component {
	
	constructor(props) {
		super(props);
		this.toClient = this.toClient.bind(this);
	}

	toClient() {
		const { history, id } = this.props;
		history.push(`/client/${id}`);
	}

	render() {
		const { name, email, phoneNumber, cnpj, sectorId, sectors } = this.props;
		const sector = sectors.find(sector => sector.id === sectorId);

		return (
			<div className='client-card' onClick={this.toClient}>
				<h3 className='title'>{name} <span>({cnpj})</span></h3>
				<div className='info'>
					<p className='sector'>Setor: {sector.label}</p>
					<p className='email'>Email: {email}</p>
					<p className='phone'>Phone: {phoneNumber}</p>
				</div>
			</div>
		);
	}
}

ClientCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	sectors: PropTypes.string.isRequired
};

ClientCard.defaultProps = {

};

export default withRouter(ClientCard);
