import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from 'avataaars';

import Button from '../../commons/components/button';
import InputGroup from '../../commons/components/input-group';
import Input from '../../commons/components/input';
import Modal from '../../commons/components/modal';
import Select from '../../commons/components/select';
import SideBar from '../../commons/components/side-bar';

import priorities from '../../commons/assets/priorities';

import './task.styl';

const status = [
	{
		id: 'aaa',
		label: 'aaa'
	},
	{
		id: 'bbb',
		label: 'bbb'
	}
];

export default class Task extends Component {

	constructor(props) {
		super(props);
		this.state = {
			logTimeModalIsOpened: false
		};

		this.handleToggleLogTimeModal = this.handleToggleLogTimeModal.bind(this);
	}

	handleToggleLogTimeModal() {
		const { logTimeModalIsOpened } = { ...this.state };
		this.setState({ logTimeModalIsOpened: !logTimeModalIsOpened }); 
	}

	render() {
		const { logTimeModalIsOpened } = { ...this.state };

		return (
			<div className='task'>
				<SideBar />
				<main className='content'>
					<h1 className='title'>
						<Link to='/'>Projetos</Link> /
						<Link to='/'>Nome do Projeto</Link> / 
						<div className='task-name'>Nome da task vai aqui <span className='code'>(e23qwe22ds)</span></div>
					</h1>
					<p className='description'>Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. </p>
					<div className='files'>
						<div className='uploader'>
							<input type='file' id='file' />
							<label className='icon' htmlFor='file'>
								<img src='/icons/file-upload.svg'/>
								Anexar
							</label>
						</div>
						<ul className='file-list'>
							<span className='not-found'>Nenhum arquivo anexado.</span>
						</ul>
					</div>
					<section className='comments'>
						<h2 className='subtitle'>Comentários</h2>
						<ul className='list'>
							<li className='comment-card'>
								<figure className='avatar-wrapper'>
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
								<div className='content'>
									<header className='comment-header'>
										<h3 className='name'>Rafael Silva</h3>
										<span className='created-at'>1 minuto atrás</span>
									</header>
									<p className='text'>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl</p>
								</div>
							</li>

							<li className='comment-card'>
								<figure className='avatar-wrapper'>
									<Avatar
									  avatarStyle='Circle'
									 	topType='ShortHairShortCurly'
									 	accessoriesType='Prescription01'
									 	hatColor='Red'
									 	hairColor='Black'
									 	facialHairType='MoustacheFancy'
									 	facialHairColor='BrownDark'
									 	clotheType='BlazerShirt'
									 	clotheColor='Blue02'
									 	graphicType='Cumbia'
									 	eyeType='Close'
									 	eyebrowType='RaisedExcited'
									 	mouthType='Sad'
									 	skinColor='Light'
									/>
								</figure>
								<div className='content'>
									<header className='comment-header'>
										<h3 className='name'>Arthur</h3>
										<span className='created-at'>1 minuto atrás</span>
									</header>
									<p className='text'>Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. </p>
								</div>
							</li>
					
							<li className='comment-card'>
								<figure className='avatar-wrapper'>
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
								<div className='content'>
									<header className='comment-header'>
										<h3 className='name'>Rafael Silva</h3>
										<span className='created-at'>1 minuto atrás</span>
									</header>
									<p className='text'>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl

									Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl
									</p>
								</div>
							</li>
							<li className='comment-input'>
								<figure className='avatar-wrapper'>
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
								<div className='content'>
									<header className='comment-header'>
										<h3 className='name'>Rafael Silva</h3>
									</header>
									<textarea placeholder='Adiocione um comentário...' className='text-area' />
									<div className='actions'>
										<Button className='send'>Enviar</Button>
									</div>
								</div>
							</li>
						</ul>
					</section>
					<section className='infos'>
						<h2 className='subtitle'>Gerais</h2>
						<InputGroup className='status-group' label='Status'>
							<Select options={status} />
						</InputGroup>
						<div className='input-group log-time'>
							<label className='label'><span>Log Time <img onClick={this.handleToggleLogTimeModal} src='/icons/add.svg'/></span></label>
							<div className='value'>0h 0m</div> 
						</div>
						<div className='input-group priority'>
							<label className='label'>Prioridade</label>
							<img src={priorities[0].icon} />
							{priorities[0].label}
						</div>
					</section>
				</main>
				<Modal className='add-log-time-modal' opened={logTimeModalIsOpened} handleClose={this.handleToggleLogTimeModal}>
					<h4 className='title'>Log Time</h4>
					<InputGroup className='time-group' label='Tampo gasto'>
						<Input placeholder='0h 0m' />
					</InputGroup>
					<InputGroup className='time-group' label='Tampo restante'>
						<Input placeholder='0h 0m' />
					</InputGroup>
					<div className='actions'>

						<Button className='save-action'>Salvar</Button>
					</div>
				</Modal>
			</div>
		);
	}
}

Task.propTypes = {

};
