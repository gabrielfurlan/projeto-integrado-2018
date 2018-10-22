import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Avatar from 'react-avatar';
import moment from 'moment';

import Button from '../../commons/components/button';
import InputGroup from '../../commons/components/input-group';
import Input from '../../commons/components/input';
import Modal from '../../commons/components/modal';
import Select from '../../commons/components/select';
import SideBar from '../../commons/components/side-bar';

import priorities from '../../commons/assets/priorities';
import taskStatusList from '../../commons/assets/taskStatusList';

import { resetAuthAction } from '../../commons/actions/authActions';

import InfoBar from './components/info-bar';
import CommentInput from './components/comment-input';

const colors = ['#F83A67', '#4F9488', '#3E6E99', '#CED481', '#CC6C67', '#E1A246'];

const initial_task = {
	name: '##',
	description: '--',
	id: '##',
	priority: 'low',
	projectId: '',
	status: taskStatusList[0].id
};

const initial_project = {
	name: '##',
	id: ''
};

import './task.styl';

import TaskController from './TaskController';

export class Task extends Component {

	constructor(props) {
		super(props);
		this.state = {
			task: { ...initial_task },
			project: {},
			comment: '',
			comments: [],
			logTimeModalIsOpened: false
		};

		this.handleToggleLogTimeModal = this.handleToggleLogTimeModal.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	
		// instacing controller 
		this.controller = new TaskController(
			() => this.props,
			() => this.state,
			(state) => this.setState({ ...this.state, ...state })
		);
	}

	componentDidMount() {
		this.controller.setInfo();
	}

	handleToggleLogTimeModal() {
		const { logTimeModalIsOpened } = { ...this.state };
		this.setState({ logTimeModalIsOpened: !logTimeModalIsOpened }); 
	}

	handleLogout() {
		this.props.resetAuthAction();
		window.sessionStorage.setItem('id', '');
		window.sessionStorage.setItem('loggedIn', 'false');
		this.props.history.push('/');
	}

	renderComments() {
		const { comments } = this.state;
		if(!comments.length) return <span className='not-found'>Nenhum comentário.</span>;


		return comments.map(resource => {
			const { user, comment, createdAt } = resource;
			const name = `${user.firstName} ${user.lastName}`;
			const date = moment(createdAt);
			const now = moment(Date.now());
			const dateArray = [];

			const minutes = now.diff(date, 'minutes');
			const hours = now.diff(date, 'hours');
			const days = now.diff(date, 'days');
			const weeks = now.diff(date, 'weeks');
			const months = now.diff(date, 'months');
			const years = now.diff(date, 'years');

			if(minutes) {
				dateArray.push({ 
					count: minutes, 
					label: `minuto${minutes > 1 ? 's' : ''}`
				});
			}

			if(hours) {
				dateArray.push({ 
					count: hours, 
					label: `hora${minutes > 1 ? 's' : ''}`
				});
			} 
			
			if(days) {
				dateArray.push({ 
					count: days, 
					label: `dia${days > 1 ? 's' : ''}`
				});
			}

			if(weeks) {
				dateArray.push({ 
					count: weeks, 
					label: `dia${weeks > 1 ? 's' : ''}`
				});
			}

			if(months) {
				dateArray.push({ 
					count: months, 
					label: `dia${months > 1 ? 's' : ''}`
				});
			} 

			if(years) {
				dateArray.push({ 
					count: years, 
					label: `dia${years > 1 ? 's' : ''}`
				});
			} 

			const selectDate = dateArray[dateArray.length-1];
			const createdAtString = dateArray.length ? `${selectDate.count} ${selectDate.label} atrás` : 'Agora'; 

			return (
				<li className='comment-card'>
					<figure className='avatar-wrapper'>
						<Avatar colors={colors} name={user.firstName} size="50px" textSizeRatio="1.75" round />
					</figure>
					<div className='content'>
						<header className='comment-header'>
							<h3 className='name'>{name}</h3>
							<span className='created-at'>{createdAtString}</span>
						</header>
						{ !!comment ? <p className='text'>{comment}</p> : null }
					</div>
				</li>
			);
		});
	}
	

	render() {
		const { auth } = this.props;
		const { logTimeModalIsOpened, project, task, comment } = this.state;
		const priority = priorities.find(({ id }) => id === task.priority);
		const taskStatus = taskStatusList.find(({ id }) => id === task.status);
		const name = `${auth.first_name} ${auth.last_name}`;
		
		return (
			<div className='task'>
				<SideBar auth={auth} handleLogout={this.handleLogout} />
				<main className='content'>
					<h1 className='title'>
						<Link to='/painel/projetos'>Projetos</Link> /
						<Link to={`/projeto/${project.id}`}>{project.name}</Link> / 
						<div className='task-name'>{task.name} {<span className='code'>({task.id})</span>}</div>
					</h1>
					<p className='description'>{ task.description || 'Sem descrição.' }</p>
					{/*<div className='files'>
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
					</div>*/}
					<section className='comments'>
						<h2 className='subtitle'>Feed</h2>
						<ul className='list'>
							{ this.renderComments() }
							<CommentInput 
								first_name={auth.first_name}
								last_name={auth.last_name}
								comment={comment}
								handleSend={this.controller.handleSendComment}
								handleChange={this.controller.handleCommentChange}
							/>
						</ul>
					</section>
					<InfoBar 
						statusList={taskStatusList} 
						priority={priority}
						taskStatus={taskStatus}
						handleToggleLogTimeModal={this.handleToggleLogTimeModal}
						handleStatusChange={this.controller.handleStatusChange}
					/>
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

Task.defualtProps = {

};

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDispatchToProps = {
	resetAuthAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Task));