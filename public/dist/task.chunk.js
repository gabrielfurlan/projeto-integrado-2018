(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~painel~project-view"],{

/***/ "./app/commons/assets/taskStatusList.js":
/*!**********************************************!*\
  !*** ./app/commons/assets/taskStatusList.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	id: 'to-do',
	label: 'A fazer'
}, {
	id: 'in-progress',
	label: 'Fazendo'
}, {
	id: 'qa',
	label: 'QA'
}, {
	id: 'done',
	label: 'Feito'
}];

/***/ }),

/***/ "./app/commons/repositories/ResourcesRepository.js":
/*!*********************************************************!*\
  !*** ./app/commons/repositories/ResourcesRepository.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRepository2 = __webpack_require__(/*! ./BaseRepository */ "./app/commons/repositories/BaseRepository.js");

var _BaseRepository3 = _interopRequireDefault(_BaseRepository2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResourcesRepository = function (_BaseRepository) {
	(0, _inherits3.default)(ResourcesRepository, _BaseRepository);

	function ResourcesRepository() {
		(0, _classCallCheck3.default)(this, ResourcesRepository);
		return (0, _possibleConstructorReturn3.default)(this, (ResourcesRepository.__proto__ || (0, _getPrototypeOf2.default)(ResourcesRepository)).apply(this, arguments));
	}

	(0, _createClass3.default)(ResourcesRepository, [{
		key: 'save',
		value: function save(resource) {
			return this.post('/resources', resource);
		}
	}, {
		key: 'findAll',
		value: function findAll(taskId) {
			return this.get('/task/' + taskId + '/resources');
		}
	}]);
	return ResourcesRepository;
}(_BaseRepository3.default);

exports.default = ResourcesRepository;

/***/ }),

/***/ "./app/commons/repositories/TasksRepository.js":
/*!*****************************************************!*\
  !*** ./app/commons/repositories/TasksRepository.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _BaseRepository2 = __webpack_require__(/*! ./BaseRepository */ "./app/commons/repositories/BaseRepository.js");

var _BaseRepository3 = _interopRequireDefault(_BaseRepository2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TasksRepository = function (_BaseRepository) {
	(0, _inherits3.default)(TasksRepository, _BaseRepository);

	function TasksRepository() {
		(0, _classCallCheck3.default)(this, TasksRepository);
		return (0, _possibleConstructorReturn3.default)(this, (TasksRepository.__proto__ || (0, _getPrototypeOf2.default)(TasksRepository)).apply(this, arguments));
	}

	(0, _createClass3.default)(TasksRepository, [{
		key: 'save',
		value: function save(task) {
			return this.post('/tasks', task);
		}
	}, {
		key: 'findAll',
		value: function findAll() {
			return this.get('/tasks');
		}
	}, {
		key: 'findOne',
		value: function findOne(id) {
			return this.get('/task/' + id);
		}
	}, {
		key: 'findByProjectId',
		value: function findByProjectId(projectId) {
			return this.get('/projects/' + projectId + '/tasks');
		}
	}, {
		key: 'editStatus',
		value: function editStatus(id, status) {
			return this.post('/task/' + id + '/edit-status', { status: status });
		}
	}]);
	return TasksRepository;
}(_BaseRepository3.default);

exports.default = TasksRepository;

/***/ }),

/***/ "./app/modules/task/Task.js":
/*!**********************************!*\
  !*** ./app/modules/task/Task.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Task = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactAvatar = __webpack_require__(/*! react-avatar */ "./node_modules/react-avatar/es/index.js");

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _button = __webpack_require__(/*! ../../commons/components/button */ "./app/commons/components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _inputGroup = __webpack_require__(/*! ../../commons/components/input-group */ "./app/commons/components/input-group/index.js");

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _input = __webpack_require__(/*! ../../commons/components/input */ "./app/commons/components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _modal = __webpack_require__(/*! ../../commons/components/modal */ "./app/commons/components/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _select = __webpack_require__(/*! ../../commons/components/select */ "./app/commons/components/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _sideBar = __webpack_require__(/*! ../../commons/components/side-bar */ "./app/commons/components/side-bar/index.js");

var _sideBar2 = _interopRequireDefault(_sideBar);

var _priorities = __webpack_require__(/*! ../../commons/assets/priorities */ "./app/commons/assets/priorities.js");

var _priorities2 = _interopRequireDefault(_priorities);

var _taskStatusList = __webpack_require__(/*! ../../commons/assets/taskStatusList */ "./app/commons/assets/taskStatusList.js");

var _taskStatusList2 = _interopRequireDefault(_taskStatusList);

var _authActions = __webpack_require__(/*! ../../commons/actions/authActions */ "./app/commons/actions/authActions.js");

var _infoBar = __webpack_require__(/*! ./components/info-bar */ "./app/modules/task/components/info-bar/index.js");

var _infoBar2 = _interopRequireDefault(_infoBar);

var _commentInput = __webpack_require__(/*! ./components/comment-input */ "./app/modules/task/components/comment-input/index.js");

var _commentInput2 = _interopRequireDefault(_commentInput);

__webpack_require__(/*! ./task.styl */ "./app/modules/task/task.styl");

var _TaskController = __webpack_require__(/*! ./TaskController */ "./app/modules/task/TaskController.js");

var _TaskController2 = _interopRequireDefault(_TaskController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = ['#F83A67', '#4F9488', '#3E6E99', '#CED481', '#CC6C67', '#E1A246'];

var initial_task = {
	name: '##',
	description: '--',
	id: '##',
	priority: 'low',
	projectId: '',
	status: _taskStatusList2.default[0].id
};

var initial_project = {
	name: '##',
	id: ''
};

var Task = exports.Task = function (_Component) {
	(0, _inherits3.default)(Task, _Component);

	function Task(props) {
		(0, _classCallCheck3.default)(this, Task);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Task.__proto__ || (0, _getPrototypeOf2.default)(Task)).call(this, props));

		_this.state = {
			task: (0, _extends3.default)({}, initial_task),
			project: {},
			comment: '',
			comments: [],
			logTimeModalIsOpened: false
		};

		_this.handleToggleLogTimeModal = _this.handleToggleLogTimeModal.bind(_this);
		_this.handleLogout = _this.handleLogout.bind(_this);

		// instacing controller 
		_this.controller = new _TaskController2.default(function () {
			return _this.props;
		}, function () {
			return _this.state;
		}, function (state) {
			return _this.setState((0, _extends3.default)({}, _this.state, state));
		});
		return _this;
	}

	(0, _createClass3.default)(Task, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.controller.setInfo();
		}
	}, {
		key: 'handleToggleLogTimeModal',
		value: function handleToggleLogTimeModal() {
			var _state = (0, _extends3.default)({}, this.state),
			    logTimeModalIsOpened = _state.logTimeModalIsOpened;

			this.setState({ logTimeModalIsOpened: !logTimeModalIsOpened });
		}
	}, {
		key: 'handleLogout',
		value: function handleLogout() {
			this.props.resetAuthAction();
			window.sessionStorage.setItem('id', '');
			window.sessionStorage.setItem('loggedIn', 'false');
			this.props.history.push('/');
		}
	}, {
		key: 'renderComments',
		value: function renderComments() {
			var comments = this.state.comments;

			if (!comments.length) return _react2.default.createElement(
				'span',
				{ className: 'not-found' },
				'Nenhum coment\xE1rio.'
			);

			return comments.map(function (resource) {
				var user = resource.user,
				    comment = resource.comment,
				    createdAt = resource.createdAt;

				var name = user.firstName + ' ' + user.lastName;
				var date = (0, _moment2.default)(createdAt);
				var now = (0, _moment2.default)(Date.now());
				var dateArray = [];

				var minutes = now.diff(date, 'minutes');
				var hours = now.diff(date, 'hours');
				var days = now.diff(date, 'days');
				var weeks = now.diff(date, 'weeks');
				var months = now.diff(date, 'months');
				var years = now.diff(date, 'years');

				if (minutes) {
					dateArray.push({
						count: minutes,
						label: 'minuto' + (minutes > 1 ? 's' : '')
					});
				}

				if (hours) {
					dateArray.push({
						count: hours,
						label: 'hora' + (minutes > 1 ? 's' : '')
					});
				}

				if (days) {
					dateArray.push({
						count: days,
						label: 'dia' + (days > 1 ? 's' : '')
					});
				}

				if (weeks) {
					dateArray.push({
						count: weeks,
						label: 'dia' + (weeks > 1 ? 's' : '')
					});
				}

				if (months) {
					dateArray.push({
						count: months,
						label: 'dia' + (months > 1 ? 's' : '')
					});
				}

				if (years) {
					dateArray.push({
						count: years,
						label: 'dia' + (years > 1 ? 's' : '')
					});
				}

				var selectDate = dateArray[dateArray.length - 1];
				var createdAtString = dateArray.length ? selectDate.count + ' ' + selectDate.label + ' atr\xE1s' : 'Agora';

				return _react2.default.createElement(
					'li',
					{ className: 'comment-card' },
					_react2.default.createElement(
						'figure',
						{ className: 'avatar-wrapper' },
						_react2.default.createElement(_reactAvatar2.default, { colors: colors, name: user.firstName, size: '50px', textSizeRatio: '1.75', round: true })
					),
					_react2.default.createElement(
						'div',
						{ className: 'content' },
						_react2.default.createElement(
							'header',
							{ className: 'comment-header' },
							_react2.default.createElement(
								'h3',
								{ className: 'name' },
								name
							),
							_react2.default.createElement(
								'span',
								{ className: 'created-at' },
								createdAtString
							)
						),
						!!comment ? _react2.default.createElement(
							'p',
							{ className: 'text' },
							comment
						) : null
					)
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var auth = this.props.auth;
			var _state2 = this.state,
			    logTimeModalIsOpened = _state2.logTimeModalIsOpened,
			    project = _state2.project,
			    task = _state2.task,
			    comment = _state2.comment;

			var priority = _priorities2.default.find(function (_ref) {
				var id = _ref.id;
				return id === task.priority;
			});
			var taskStatus = _taskStatusList2.default.find(function (_ref2) {
				var id = _ref2.id;
				return id === task.status;
			});
			var name = auth.first_name + ' ' + auth.last_name;

			return _react2.default.createElement(
				'div',
				{ className: 'task' },
				_react2.default.createElement(_sideBar2.default, { auth: auth, handleLogout: this.handleLogout }),
				_react2.default.createElement(
					'main',
					{ className: 'content' },
					_react2.default.createElement(
						'h1',
						{ className: 'title' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/painel/projetos' },
							'Projetos'
						),
						' /',
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/projeto/' + project.id },
							project.name
						),
						' /',
						_react2.default.createElement(
							'div',
							{ className: 'task-name' },
							task.name,
							' ',
							_react2.default.createElement(
								'span',
								{ className: 'code' },
								'(',
								task.id,
								')'
							)
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'description' },
						task.description || 'Sem descrição.'
					),
					_react2.default.createElement(
						'section',
						{ className: 'comments' },
						_react2.default.createElement(
							'h2',
							{ className: 'subtitle' },
							'Feed'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'list' },
							this.renderComments(),
							_react2.default.createElement(_commentInput2.default, {
								first_name: auth.first_name,
								last_name: auth.last_name,
								comment: comment,
								handleSend: this.controller.handleSendComment,
								handleChange: this.controller.handleCommentChange
							})
						)
					),
					_react2.default.createElement(_infoBar2.default, {
						statusList: _taskStatusList2.default,
						priority: priority,
						taskStatus: taskStatus,
						handleToggleLogTimeModal: this.handleToggleLogTimeModal,
						handleStatusChange: this.controller.handleStatusChange
					})
				),
				_react2.default.createElement(
					_modal2.default,
					{ className: 'add-log-time-modal', opened: logTimeModalIsOpened, handleClose: this.handleToggleLogTimeModal },
					_react2.default.createElement(
						'h4',
						{ className: 'title' },
						'Log Time'
					),
					_react2.default.createElement(
						_inputGroup2.default,
						{ className: 'time-group', label: 'Tampo gasto' },
						_react2.default.createElement(_input2.default, { placeholder: '0h 0m' })
					),
					_react2.default.createElement(
						_inputGroup2.default,
						{ className: 'time-group', label: 'Tampo restante' },
						_react2.default.createElement(_input2.default, { placeholder: '0h 0m' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'actions' },
						_react2.default.createElement(
							_button2.default,
							{ className: 'save-action' },
							'Salvar'
						)
					)
				)
			);
		}
	}]);
	return Task;
}(_react.Component);

Task.propTypes = {};

Task.defualtProps = {};

var mapStateToProps = function mapStateToProps(state) {
	return {
		auth: state.auth
	};
};

var mapDispatchToProps = {
	resetAuthAction: _authActions.resetAuthAction
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Task));

/***/ }),

/***/ "./app/modules/task/TaskController.js":
/*!********************************************!*\
  !*** ./app/modules/task/TaskController.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ProjectsRepository = __webpack_require__(/*! ../../commons/repositories/ProjectsRepository */ "./app/commons/repositories/ProjectsRepository.js");

var _ProjectsRepository2 = _interopRequireDefault(_ProjectsRepository);

var _TasksRepository = __webpack_require__(/*! ../../commons/repositories/TasksRepository */ "./app/commons/repositories/TasksRepository.js");

var _TasksRepository2 = _interopRequireDefault(_TasksRepository);

var _ResourcesRepository = __webpack_require__(/*! ../../commons/repositories/ResourcesRepository */ "./app/commons/repositories/ResourcesRepository.js");

var _ResourcesRepository2 = _interopRequireDefault(_ResourcesRepository);

var _UsersRepository = __webpack_require__(/*! ../../commons/repositories/UsersRepository */ "./app/commons/repositories/UsersRepository.js");

var _UsersRepository2 = _interopRequireDefault(_UsersRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TasksController = function () {
	function TasksController(getProps, getState, setState) {
		(0, _classCallCheck3.default)(this, TasksController);

		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;

		this.projectsRepository = new _ProjectsRepository2.default();
		this.tasksRepository = new _TasksRepository2.default();
		this.resourcesRepository = new _ResourcesRepository2.default();
		this.usersRepository = new _UsersRepository2.default();
		this.handleCommentChange = this.handleCommentChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
		this.handleSendComment = this.handleSendComment.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
	}

	(0, _createClass3.default)(TasksController, [{
		key: 'setInfo',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var id, response, task, project;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								id = this.getProps().match.params.id;
								_context.next = 3;
								return this.tasksRepository.findOne(id);

							case 3:
								response = _context.sent;
								task = response.task;


								this.setState({ task: task });

								_context.next = 8;
								return this.projectsRepository.findOne(task.projectId);

							case 8:
								response = _context.sent;
								project = response.project;


								this.setState({ project: project });
								this.setComments();

							case 12:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function setInfo() {
				return _ref.apply(this, arguments);
			}

			return setInfo;
		}()
	}, {
		key: 'setComments',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
				var _this = this;

				var id, comments, fetchCommentsUser, users;
				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								id = this.getProps().match.params.id;
								_context2.next = 3;
								return this.resourcesRepository.findAll(id);

							case 3:
								comments = _context2.sent;
								fetchCommentsUser = comments.map(function (_ref3) {
									var userId = _ref3.userId;
									return _this.usersRepository.findOne(userId);
								});
								_context2.next = 7;
								return _promise2.default.all(fetchCommentsUser);

							case 7:
								users = _context2.sent;

								Repository = new _ResourcesRepository2.default();
								this.handleCommentChange = this.handleCommentChange.bind(this);
								this.handleTextChange = this.handleTextChange.bind(this);
								this.handleSelectChange = this.handleSelectChange.bind(this);
								this.handleSendComment = this.handleSendComment.bind(this);
								this.handleStatusChange = this.handleStatusChange.bind(this);

							case 14:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function setComments() {
				return _ref2.apply(this, arguments);
			}

			return setComments;
		}()
	}, {
		key: 'setInfo',
		value: function () {
			var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
				var id, response, task, project;
				return _regenerator2.default.wrap(function _callee3$(_context3) {
					while (1) {
						switch (_context3.prev = _context3.next) {
							case 0:
								id = this.getProps().match.params.id;
								_context3.next = 3;
								return this.tasksRepository.findOne(id);

							case 3:
								response = _context3.sent;
								task = response.task;


								this.setState({ task: task });

								_context3.next = 8;
								return this.projectsRepository.findOne(task.projectId);

							case 8:
								response = _context3.sent;
								project = response.project;


								this.setState({ project: project });
								this.setComments();

							case 12:
							case 'end':
								return _context3.stop();
						}
					}
				}, _callee3, this);
			}));

			function setInfo() {
				return _ref4.apply(this, arguments);
			}

			return setInfo;
		}()
	}, {
		key: 'setComments',
		value: function () {
			var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
				var _this2 = this;

				var id, comments, fetchCommentsUser, response, users;
				return _regenerator2.default.wrap(function _callee4$(_context4) {
					while (1) {
						switch (_context4.prev = _context4.next) {
							case 0:
								id = this.getProps().match.params.id;
								_context4.next = 3;
								return this.resourcesRepository.findAll(id);

							case 3:
								comments = _context4.sent;

								console.log(comments);
								fetchCommentsUser = comments.map(function (_ref6) {
									var userId = _ref6.userId;
									return _this2.usersRepository.findOne(userId);
								});
								_context4.next = 8;
								return _promise2.default.all(fetchCommentsUser);

							case 8:
								response = _context4.sent;
								users = response.map(function (_ref7) {
									var user = _ref7.user;
									return user;
								});


								comments = comments.map(function (comment) {
									return (0, _extends3.default)({}, comment, {
										user: users.find(function (user) {
											return user.id === comment.userId;
										})
									});
								}).sort(function (a, b) {
									return new Date(b.createdAt) < new Date(a.createdAt);
								});

								this.setState({ comments: comments });

							case 12:
							case 'end':
								return _context4.stop();
						}
					}
				}, _callee4, this);
			}));

			function setComments() {
				return _ref5.apply(this, arguments);
			}

			return setComments;
		}()
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(e) {
			var _e$target = e.target,
			    value = _e$target.value,
			    id = _e$target.id;

			var task = (0, _extends3.default)({}, this.getState().task);
			task[id] = value;
			this.setState({ task: task });
		}
	}, {
		key: 'handleSelectChange',
		value: function handleSelectChange(ref, value) {
			var task = (0, _extends3.default)({}, this.getState().task);
			task[ref] = value;
			this.setState({ task: task });
		}
	}, {
		key: 'handleSendComment',
		value: function () {
			var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(e) {
				var comment;
				return _regenerator2.default.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								e.preventDefault();
								_context5.next = 3;
								return this.resourcesRepository.save(this.getCommentToApi());

							case 3:
								comment = _context5.sent;


								this.setComments();

							case 5:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));

			function handleSendComment(_x) {
				return _ref8.apply(this, arguments);
			}

			return handleSendComment;
		}()
	}, {
		key: 'getCommentToApi',
		value: function getCommentToApi() {
			var _getState = this.getState(),
			    comment = _getState.comment,
			    task = _getState.task;

			var _getProps = this.getProps(),
			    auth = _getProps.auth;

			return {
				comment: comment,
				taskId: task.id,
				userId: auth.id
			};
		}
	}, {
		key: 'handleCommentChange',
		value: function handleCommentChange(e) {
			var value = e.target.value;

			var state = (0, _extends3.default)({}, this.getState());
			state.comment = value;
			this.setState(state);
		}
	}, {
		key: 'handleStatusChange',
		value: function () {
			var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(ref, value) {
				var task, response;
				return _regenerator2.default.wrap(function _callee6$(_context6) {
					while (1) {
						switch (_context6.prev = _context6.next) {
							case 0:
								task = (0, _extends3.default)({}, this.getState().task);

								task.status = value.id;

								this.setState({ task: task });
								_context6.next = 5;
								return this.tasksRepository.editStatus(task.id, task.status);

							case 5:
								response = _context6.sent;

							case 6:
							case 'end':
								return _context6.stop();
						}
					}
				}, _callee6, this);
			}));

			function handleStatusChange(_x2, _x3) {
				return _ref9.apply(this, arguments);
			}

			return handleStatusChange;
		}()
	}]);
	return TasksController;
}();

exports.default = TasksController;

/***/ }),

/***/ "./app/modules/task/components/comment-input/CommentInput.js":
/*!*******************************************************************!*\
  !*** ./app/modules/task/components/comment-input/CommentInput.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAvatar = __webpack_require__(/*! react-avatar */ "./node_modules/react-avatar/es/index.js");

var _reactAvatar2 = _interopRequireDefault(_reactAvatar);

var _button = __webpack_require__(/*! ../../../../commons/components/button */ "./app/commons/components/button/index.js");

var _button2 = _interopRequireDefault(_button);

__webpack_require__(/*! ./comment-input.styl */ "./app/modules/task/components/comment-input/comment-input.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = ['#F83A67', '#4F9488', '#3E6E99', '#CED481', '#CC6C67', '#E1A246'];

var CommentInput = function (_Component) {
	(0, _inherits3.default)(CommentInput, _Component);

	function CommentInput() {
		(0, _classCallCheck3.default)(this, CommentInput);
		return (0, _possibleConstructorReturn3.default)(this, (CommentInput.__proto__ || (0, _getPrototypeOf2.default)(CommentInput)).apply(this, arguments));
	}

	(0, _createClass3.default)(CommentInput, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    comment = _props.comment,
			    first_name = _props.first_name,
			    last_name = _props.last_name,
			    handleSend = _props.handleSend,
			    handleChange = _props.handleChange;

			var name = first_name + ' ' + last_name;
			return _react2.default.createElement(
				'form',
				{ className: 'comment-input', onSubmit: handleSend },
				_react2.default.createElement(
					'figure',
					{ className: 'avatar-wrapper' },
					_react2.default.createElement(_reactAvatar2.default, { colors: colors, name: first_name, size: '50px', textSizeRatio: '1.75', round: true })
				),
				_react2.default.createElement(
					'div',
					{ className: 'content' },
					_react2.default.createElement(
						'header',
						{ className: 'comment-header' },
						_react2.default.createElement(
							'h3',
							{ className: 'name' },
							name
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'input-wrapper' },
						_react2.default.createElement('textarea', {
							onChange: handleChange,
							placeholder: 'Adiocione um coment\xE1rio...',
							className: 'text-area',
							value: comment
						}),
						_react2.default.createElement(
							'div',
							{ className: 'actions' },
							_react2.default.createElement('img', { src: '/icons/send.svg', className: 'send', onClick: handleSend })
						)
					)
				)
			);
		}
	}]);
	return CommentInput;
}(_react.Component);

exports.default = CommentInput;


CommentInput.propTypes = {
	first_name: _propTypes2.default.string,
	last_name: _propTypes2.default.string,
	comment: _propTypes2.default.string,
	handleChange: _propTypes2.default.func.isRequired,
	handleSave: _propTypes2.default.func.isRequired
};

CommentInput.defaultProps = {
	first_name: '',
	last_name: '',
	comment: ''
};

/***/ }),

/***/ "./app/modules/task/components/comment-input/comment-input.styl":
/*!**********************************************************************!*\
  !*** ./app/modules/task/components/comment-input/comment-input.styl ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./comment-input.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/components/comment-input/comment-input.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./app/modules/task/components/comment-input/index.js":
/*!************************************************************!*\
  !*** ./app/modules/task/components/comment-input/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CommentInput = __webpack_require__(/*! ./CommentInput */ "./app/modules/task/components/comment-input/CommentInput.js");

var _CommentInput2 = _interopRequireDefault(_CommentInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CommentInput2.default;

/***/ }),

/***/ "./app/modules/task/components/info-bar/InfoBar.js":
/*!*********************************************************!*\
  !*** ./app/modules/task/components/info-bar/InfoBar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _inputGroup = __webpack_require__(/*! ../../../../commons/components/input-group */ "./app/commons/components/input-group/index.js");

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _select = __webpack_require__(/*! ../../../../commons/components/select */ "./app/commons/components/select/index.js");

var _select2 = _interopRequireDefault(_select);

__webpack_require__(/*! ./info-bar.styl */ "./app/modules/task/components/info-bar/info-bar.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoBar = function (_Component) {
	(0, _inherits3.default)(InfoBar, _Component);

	function InfoBar() {
		(0, _classCallCheck3.default)(this, InfoBar);
		return (0, _possibleConstructorReturn3.default)(this, (InfoBar.__proto__ || (0, _getPrototypeOf2.default)(InfoBar)).apply(this, arguments));
	}

	(0, _createClass3.default)(InfoBar, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    priority = _props.priority,
			    handleToggleLogTimeModal = _props.handleToggleLogTimeModal,
			    handleStatusChange = _props.handleStatusChange,
			    statusList = _props.statusList,
			    taskStatus = _props.taskStatus;


			return _react2.default.createElement(
				'section',
				{ className: 'info-bar' },
				_react2.default.createElement(
					'h2',
					{ className: 'subtitle' },
					'Gerais'
				),
				_react2.default.createElement(
					_inputGroup2.default,
					{ className: 'status-group', label: 'Status' },
					_react2.default.createElement(_select2.default, {
						options: statusList,
						id: 'taskStatus',
						value: taskStatus,
						handleChange: handleStatusChange
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'input-group log-time' },
					_react2.default.createElement(
						'label',
						{ className: 'label' },
						_react2.default.createElement(
							'span',
							null,
							'Log Time ',
							_react2.default.createElement('img', { onClick: handleToggleLogTimeModal, src: '/icons/add.svg' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'value' },
						'0h 0m'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'input-group priority' },
					_react2.default.createElement(
						'label',
						{ className: 'label' },
						'Prioridade'
					),
					_react2.default.createElement('img', { src: priority.icon }),
					priority.label
				)
			);
		}
	}]);
	return InfoBar;
}(_react.Component);

exports.default = InfoBar;


InfoBar.propTypes = {
	priority: _propTypes2.default.object,
	handleToggleLogTimeModal: _propTypes2.default.func.isRequired,
	handleStatusChange: _propTypes2.default.func.isRequired,
	statusList: _propTypes2.default.array.isRequired,
	taskStatus: _propTypes2.default.array.isRequired
};

/***/ }),

/***/ "./app/modules/task/components/info-bar/index.js":
/*!*******************************************************!*\
  !*** ./app/modules/task/components/info-bar/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InfoBar = __webpack_require__(/*! ./InfoBar */ "./app/modules/task/components/info-bar/InfoBar.js");

var _InfoBar2 = _interopRequireDefault(_InfoBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _InfoBar2.default;

/***/ }),

/***/ "./app/modules/task/components/info-bar/info-bar.styl":
/*!************************************************************!*\
  !*** ./app/modules/task/components/info-bar/info-bar.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./info-bar.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/components/info-bar/info-bar.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./app/modules/task/index.js":
/*!***********************************!*\
  !*** ./app/modules/task/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Task = __webpack_require__(/*! ./Task */ "./app/modules/task/Task.js");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Task).default;
  }
});

var _taskReducer = __webpack_require__(/*! ./taskReducer */ "./app/modules/task/taskReducer.js");

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_taskReducer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app/modules/task/task.styl":
/*!************************************!*\
  !*** ./app/modules/task/task.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/stylus-loader??ref--6-2!./task.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/task.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./app/modules/task/taskReducer.js":
/*!*****************************************!*\
  !*** ./app/modules/task/taskReducer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/components/comment-input/comment-input.styl":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/task/components/comment-input/comment-input.styl ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment-input {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 60px auto;\n      grid-template-columns: 60px auto;\n  margin-top: 45px;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.comment-input > .avatar-wrapper {\n  padding-right: 10px;\n}\n.comment-input > .avatar-wrapper > svg {\n  width: 100%;\n  height: auto;\n}\n.comment-input > .content > .comment-header {\n  margin-bottom: 15px;\n}\n.comment-input > .content > .comment-header > .name {\n  display: inline-block;\n  font-size: 1em;\n}\n.comment-input > .content > .input-wrapper {\n  background-color: #fff;\n  border-radius: 50px;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n}\n.comment-input > .content > .input-wrapper > .text-area {\n  width: calc(100% - 50px);\n  height: 50px;\n  resize: none;\n  border: none;\n  overflow: hidden;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 20px;\n  background-color: transparent;\n  display: inline-block;\n}\n.comment-input > .content > .input-wrapper > .text-area:focues {\n  outline: none;\n}\n.comment-input > .content > .input-wrapper > .actions {\n  width: 50px;\n  height: 50px;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: right;\n  vertical-align: top;\n}\n.comment-input > .content > .input-wrapper > .actions > .send {\n  width: 100%;\n  height: 100%;\n  padding: 12px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/components/info-bar/info-bar.styl":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/task/components/info-bar/info-bar.styl ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task > .content > .info-bar {\n  width: calc(50% - 30px);\n  display: inline-block;\n  margin-top: 60px;\n}\n.task > .content > .info-bar > .input-group > .label {\n  width: 100%;\n  height: 40px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.task > .content > .info-bar > .input-group + .input-group {\n  margin-top: 30px;\n}\n.task > .content > .info-bar > .input-group.status-group > .select {\n  width: 160px;\n}\n.task > .content > .info-bar > .log-time > .label span {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.task > .content > .info-bar > .log-time > .label span > img {\n  width: 40px;\n  cursor: pointer;\n}\n.task > .content > .info-bar > .log-time > .value {\n  font-style: italic;\n}\n.task > .content > .info-bar > .priority > img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/task.styl":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/task/task.styl ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 200px auto;\n      grid-template-columns: 200px auto;\n  -ms-grid-rows: calc(100vh - 3px);\n      grid-template-rows: calc(100vh - 3px);\n}\n.task > .content {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.task > .content:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.task > .content .subtitle {\n  display: block;\n  font-size: 1em;\n  font-weight: 700;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.task > .content > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 30px;\n  color: #a6a8ad;\n}\n.task > .content > .title > a {\n  color: #a6a8ad;\n  padding-right: 10px;\n}\n.task > .content > .title > a + a {\n  padding-left: 10px;\n}\n.task > .content > .title > .task-name {\n  display: inline;\n  color: #5d5e61;\n  padding: 10px;\n}\n.task > .content > .title > .task-name > .code {\n  margin-left: 3px;\n  margin-bottom: 60px;\n  font-size: 1em;\n  color: #a6a8ad;\n  text-transform: uppercase;\n  font-style: italic;\n}\n.task > .content > .description {\n  font-size: 1em;\n  line-height: 1.4em;\n  color: #a6a8ad;\n}\n.task > .content > .files {\n  margin-top: 30px;\n}\n.task > .content > .files > .uploader {\n  margin-bottom: 15px;\n}\n.task > .content > .files > .uploader > input {\n  display: none;\n}\n.task > .content > .files > .uploader > label {\n  display: inline-block;\n  color: #a6a8ad;\n  cursor: pointer;\n}\n.task > .content > .files > .uploader > label > img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task > .content > .files > .uploader:hover {\n  color: #3e6e99;\n}\n.task > .content > .files > .file-list > .not-found {\n  font-size: 0.9em;\n  color: #a6a8ad;\n}\n.task > .content > .comments {\n  width: calc(50% - 30px);\n  display: inline-block;\n  margin-top: 60px;\n  vertical-align: top;\n  margin-right: 60px;\n}\n.task > .content > .comments > .subtitle {\n  padding-bottom: 45px;\n}\n.task > .content > .comments > .list > .comment-card {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 60px auto;\n      grid-template-columns: 60px auto;\n}\n.task > .content > .comments > .list > .comment-card + .comment-card {\n  margin-top: 45px;\n}\n.task > .content > .comments > .list > .comment-card > .avatar-wrapper {\n  padding-right: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .avatar-wrapper > svg {\n  width: 100%;\n  height: auto;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header {\n  margin-bottom: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header > .name {\n  display: inline-block;\n  font-size: 1em;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header > .created-at {\n  color: #a6a8ad;\n  margin-left: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .content > .text {\n  width: 100%;\n  line-height: 1.4em;\n}\n.task > .add-log-time-modal > .modal > .title {\n  font-size: 1.2em;\n  margin-bottom: 45px;\n}\n.task > .add-log-time-modal > .modal > .input-group.time-group {\n  width: calc(50% - 5px);\n  display: inline-block;\n}\n.task > .add-log-time-modal > .modal > .input-group.time-group + .input-group {\n  margin-left: 10px;\n}\n.task > .add-log-time-modal > .modal > .input-group.time-group > .input {\n  width: 100%;\n}\n.task > .add-log-time-modal > .modal > .actions {\n  width: 100%;\n  margin-top: 45px;\n}\n.task > .add-log-time-modal > .modal > .actions > .save-action {\n  width: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

}]);
//# sourceMappingURL=task.chunk.js.map