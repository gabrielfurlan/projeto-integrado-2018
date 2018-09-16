import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnalystCard from '../../../../commons/components/analyst-card';

import './analysts.styl';

const analysts = [
	{
		id: 'asdasdasd',
		name: 'Analista Teste #1'
	},
	{
		id: 'asassdasd',
		name: 'Analista Teste #2'
	}
];

export default class Analysts extends Component {
		
	renderAnalysts() {
		return analysts.map(analyst => <AnalystCard key={analyst.id} {...analyst} />);
	}

	render() {
		return (
			<section className='analysts'>
				<h1 className='title'>Analistas</h1>
				<div className='list'>
					{this.renderAnalysts()}
				</div>
			</section>
		);
	}
}

Analysts.propTypes = {

};

Analysts.defaultProps = {

};

