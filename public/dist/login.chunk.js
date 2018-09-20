(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./app/commons/components/input/Input.js":
/*!***********************************************!*\
  !*** ./app/commons/components/input/Input.js ***!
  \***********************************************/
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

__webpack_require__(/*! ./input.styl */ "./app/commons/components/input/input.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_Component) {
	(0, _inherits3.default)(Input, _Component);

	function Input() {
		(0, _classCallCheck3.default)(this, Input);
		return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
	}

	(0, _createClass3.default)(Input, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    id = _props.id,
			    disabled = _props.disabled,
			    placeholder = _props.placeholder,
			    type = _props.type,
			    handleChange = _props.handleChange,
			    value = _props.value;


			return _react2.default.createElement('input', {
				className: 'input ' + className,
				placeholder: placeholder,
				id: id,
				value: value,
				type: type,
				onChange: handleChange,
				disabled: disabled
			});
		}
	}]);
	return Input;
}(_react.Component);

exports.default = Input;


Input.propTypes = {
	className: _propTypes2.default.string,
	id: _propTypes2.default.string,
	disabled: _propTypes2.default.bool,
	placeholder: _propTypes2.default.string,
	type: _propTypes2.default.string,
	value: _propTypes2.default.string,
	handleChange: _propTypes2.default.func
};

Input.defaultProps = {
	className: '',
	id: '',
	disabled: false,
	placeholder: '',
	type: 'text',
	handleChange: function handleChange() {
		return console.log('Not implemented.');
	}
};

/***/ }),

/***/ "./app/commons/components/input/index.js":
/*!***********************************************!*\
  !*** ./app/commons/components/input/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Input = __webpack_require__(/*! ./Input */ "./app/commons/components/input/Input.js");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Input2.default;

/***/ }),

/***/ "./app/commons/components/input/input.styl":
/*!*************************************************!*\
  !*** ./app/commons/components/input/input.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./input.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/input/input.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./app/commons/components/slim-button/SlimButton.js":
/*!**********************************************************!*\
  !*** ./app/commons/components/slim-button/SlimButton.js ***!
  \**********************************************************/
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

__webpack_require__(/*! ./slim-button.styl */ "./app/commons/components/slim-button/slim-button.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SlimButton = function (_Component) {
	(0, _inherits3.default)(SlimButton, _Component);

	function SlimButton() {
		(0, _classCallCheck3.default)(this, SlimButton);
		return (0, _possibleConstructorReturn3.default)(this, (SlimButton.__proto__ || (0, _getPrototypeOf2.default)(SlimButton)).apply(this, arguments));
	}

	(0, _createClass3.default)(SlimButton, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    children = _props.children,
			    color = _props.color,
			    handleClick = _props.handleClick,
			    type = _props.type;

			return _react2.default.createElement(
				'button',
				{
					type: type,
					className: 'slim-button ' + className + ' ' + color,
					onClick: handleClick
				},
				children
			);
		}
	}]);
	return SlimButton;
}(_react.Component);

exports.default = SlimButton;


SlimButton.propTypes = {
	className: _propTypes2.default.string,
	children: _propTypes2.default.any,
	color: _propTypes2.default.string,
	handleClick: _propTypes2.default.func,
	type: _propTypes2.default.string
};

SlimButton.defaultProps = {
	className: '',
	children: 'SlimButton',
	color: '-green',
	handleClick: function handleClick() {
		return console.log('Not Implemented.');
	},
	type: 'button'
};

/***/ }),

/***/ "./app/commons/components/slim-button/index.js":
/*!*****************************************************!*\
  !*** ./app/commons/components/slim-button/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SlimButton = __webpack_require__(/*! ./SlimButton */ "./app/commons/components/slim-button/SlimButton.js");

var _SlimButton2 = _interopRequireDefault(_SlimButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SlimButton2.default;

/***/ }),

/***/ "./app/commons/components/slim-button/slim-button.styl":
/*!*************************************************************!*\
  !*** ./app/commons/components/slim-button/slim-button.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./slim-button.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/slim-button/slim-button.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./app/commons/helpers/ValidationHelper.js":
/*!*************************************************!*\
  !*** ./app/commons/helpers/ValidationHelper.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationHelper = function () {
	function ValidationHelper() {
		(0, _classCallCheck3.default)(this, ValidationHelper);
	}

	(0, _createClass3.default)(ValidationHelper, null, [{
		key: 'isEmail',
		value: function isEmail(value) {
			var user = value.substring(0, value.indexOf('@')).trim();
			var dominio = value.substring(value.indexOf('@') + 1, value.length).trim();
			var host = dominio.substring(0, dominio.indexOf('.'));

			if (user.length < 1 || user.indexOf('@') != -1 || host.length < 1 || value.indexOf(' ') > -1 || dominio.length < 3 || dominio.indexOf('@') != -1 || dominio.lastIndexOf('.') >= dominio.length - 1) return false;

			return true;
		}
	}]);
	return ValidationHelper;
}();

exports.default = ValidationHelper;

/***/ }),

/***/ "./app/modules/login/Login.js":
/*!************************************!*\
  !*** ./app/modules/login/Login.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Login = undefined;

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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginController = __webpack_require__(/*! ./LoginController */ "./app/modules/login/LoginController.js");

var _LoginController2 = _interopRequireDefault(_LoginController);

var _slimButton = __webpack_require__(/*! ../../commons/components/slim-button */ "./app/commons/components/slim-button/index.js");

var _slimButton2 = _interopRequireDefault(_slimButton);

var _input = __webpack_require__(/*! ../../commons/components/input */ "./app/commons/components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _authActions = __webpack_require__(/*! ../../commons/actions/authActions */ "./app/commons/actions/authActions.js");

__webpack_require__(/*! ./login.styl */ "./app/modules/login/login.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = exports.Login = function (_Component) {
	(0, _inherits3.default)(Login, _Component);

	function Login(props) {
		(0, _classCallCheck3.default)(this, Login);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

		_this.state = {
			isValidMail: false,
			loading: false,
			auth: {
				id: null,
				first_name: null,
				last_name: null,
				email: '',
				password: '',
				role: '',
				keep_logged: false
			},
			errors: {
				email: null,
				password: null
			}
		};

		// instacing controller 
		_this.controller = new _LoginController2.default(function () {
			return _this.props;
		}, function () {
			return _this.state;
		}, function (state) {
			return _this.setState((0, _extends3.default)({}, _this.state, state));
		});
		return _this;
	}

	(0, _createClass3.default)(Login, [{
		key: 'render',
		value: function render() {
			var _state = this.state,
			    isValidMail = _state.isValidMail,
			    loading = _state.loading,
			    errors = _state.errors,
			    auth = _state.auth;


			return _react2.default.createElement(
				'div',
				{ className: 'login' },
				_react2.default.createElement(
					'section',
					{ className: 'content' },
					_react2.default.createElement(
						'form',
						{ className: !isValidMail ? 'form -show' : 'form -hide', onSubmit: this.controller.handleValidMail },
						_react2.default.createElement(
							'h1',
							{ className: 'title' },
							'Bem vindo,'
						),
						_react2.default.createElement(
							'h2',
							{ className: 'description' },
							'Fa\xE7a login com sua conta ou solicite um novo cadastro ao administrador'
						),
						_react2.default.createElement(
							'fieldset',
							null,
							_react2.default.createElement(_input2.default, { handleChange: this.controller.handleTextChange, value: auth.email, className: '-email', id: 'email', placeholder: 'Entre com seu email corporativo' }),
							_react2.default.createElement(
								'p',
								{ className: 'error ' + (errors.email ? '' : '-hide') },
								errors.email
							),
							_react2.default.createElement(
								_slimButton2.default,
								{ type: 'submit', color: '-orange', handleClick: this.controller.handleValidMail },
								loading ? _react2.default.createElement('img', { className: 'loading', src: '/icons/rolling.svg' }) : 'Continuar'
							)
						)
					),
					_react2.default.createElement(
						'form',
						{ className: isValidMail ? 'form -show' : 'form -hide', onSubmit: this.controller.handleValidPassword },
						_react2.default.createElement(
							'h1',
							{ className: 'title' },
							'Ol\xE1, ',
							auth.first_name,
							'!'
						),
						_react2.default.createElement(
							'h2',
							{ className: 'description' },
							'Caso tenha esquecido sua senha, ',
							_react2.default.createElement(
								_reactRouterDom.Link,
								{ to: '/resetar-senha' },
								'clique aqui'
							),
							'.'
						),
						_react2.default.createElement(
							'fieldset',
							null,
							_react2.default.createElement(_input2.default, { handleChange: this.controller.handleTextChange, value: auth.password, className: '-password', type: 'password', id: 'password', placeholder: 'Digite sua senha' }),
							_react2.default.createElement(
								'p',
								{ className: 'error ' + (errors.password ? '' : '-hide') },
								errors.password
							),
							_react2.default.createElement(
								_slimButton2.default,
								{ type: 'submit', handleClick: null, color: '-orange' },
								loading ? _react2.default.createElement('img', { className: 'loading', src: '/icons/rolling.svg' }) : 'Entrar'
							)
						)
					)
				),
				_react2.default.createElement('section', { className: 'aprensentation ' + (isValidMail ? '-valided' : '') })
			);
		}
	}]);
	return Login;
}(_react.Component);

Login.propTypes = {};

Login.defaultProps = {};

var mapStateToProps = function mapStateToProps(state) {
	return {};
};

var mapDispatchToProps = {
	setAuthAction: _authActions.setAuthAction
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ "./app/modules/login/LoginController.js":
/*!**********************************************!*\
  !*** ./app/modules/login/LoginController.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _UsersRepository = __webpack_require__(/*! ../../commons/repositories/UsersRepository */ "./app/commons/repositories/UsersRepository.js");

var _UsersRepository2 = _interopRequireDefault(_UsersRepository);

var _ValidationHelper = __webpack_require__(/*! ../../commons/helpers/ValidationHelper */ "./app/commons/helpers/ValidationHelper.js");

var _ValidationHelper2 = _interopRequireDefault(_ValidationHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageEmailErrors = {
	404: 'Usuário não encontrado, verifique se o email está correto.',
	500: 'Erro no servidor, contate o administrador do sistema.',
	501: 'Erro no servidor, contate o administrador do sistema.'
};

var messagePasswordErrors = {
	405: 'Senha incorreta, tente novamente.',
	500: 'Erro no servidor, contate o administrador do sistema.',
	501: 'Erro no servidor, contate o administrador do sistema.'
};

var LoginController = function () {
	function LoginController(getProps, getState, setState) {
		(0, _classCallCheck3.default)(this, LoginController);

		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;

		this.handleValidMail = this.handleValidMail.bind(this);
		this.handleValidPassword = this.handleValidPassword.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);

		this.usersRepository = new _UsersRepository2.default();
	}

	(0, _createClass3.default)(LoginController, [{
		key: 'handleValidMail',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
				var _this = this;

				var _getState, loading, auth, errors, response, user;

				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_getState = this.getState(), loading = _getState.loading, auth = _getState.auth, errors = _getState.errors;

								e.preventDefault();

								if (!loading) {
									_context.next = 4;
									break;
								}

								return _context.abrupt('return');

							case 4:
								this.setState({ loading: true });

								// Checking if the email field is empty

								if (auth.email) {
									_context.next = 8;
									break;
								}

								this.setState({ errors: (0, _extends3.default)({}, errors, { email: 'Por favor, preencha o campo email.' }) });
								return _context.abrupt('return');

							case 8:
								if (_ValidationHelper2.default.isEmail(auth.email)) {
									_context.next = 11;
									break;
								}

								this.setState({ errors: (0, _extends3.default)({}, errors, { email: 'Email é inválido, tente novamente.' }) });
								return _context.abrupt('return');

							case 11:
								_context.next = 13;
								return this.usersRepository.findOne(auth.email);

							case 13:
								response = _context.sent;

								if (response.user) {
									_context.next = 17;
									break;
								}

								setTimeout(function () {
									return _this.setState({
										errors: (0, _extends3.default)({}, errors, { email: messageEmailErrors[response.status] }),
										loading: false
									});
								}, 1200);

								return _context.abrupt('return');

							case 17:
								user = (0, _extends3.default)({}, auth, {
									first_name: response.user.firstName,
									last_name: response.user.lastName,
									id: response.user.id,
									role: response.user.role,
									email: response.email
								});


								setTimeout(function () {
									return _this.setState({ isValidMail: true, loading: false, auth: user });
								}, 1200);

							case 19:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function handleValidMail(_x) {
				return _ref.apply(this, arguments);
			}

			return handleValidMail;
		}()
	}, {
		key: 'handleValidPassword',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
				var _this2 = this;

				var _getState2, loading, auth, errors, response, user;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_getState2 = this.getState(), loading = _getState2.loading, auth = _getState2.auth, errors = _getState2.errors;

								e.preventDefault();

								if (!loading) {
									_context2.next = 4;
									break;
								}

								return _context2.abrupt('return');

							case 4:

								this.setState({ loading: true });

								// Checking if the password field is empty

								if (auth.password) {
									_context2.next = 8;
									break;
								}

								this.setState({ errors: (0, _extends3.default)({}, errors, { password: 'Por favor, preencha o campo de senha.' }) });
								return _context2.abrupt('return');

							case 8:
								_context2.next = 10;
								return this.usersRepository.verifyPassword(auth.id, auth.password);

							case 10:
								response = _context2.sent;

								if (!(response.status != 200)) {
									_context2.next = 14;
									break;
								}

								setTimeout(function () {
									return _this2.setState({
										errors: (0, _extends3.default)({}, errors, { password: messagePasswordErrors[response.status] }),
										loading: false
									});
								}, 1200);

								return _context2.abrupt('return');

							case 14:
								user = {
									first_name: auth.first_name,
									last_name: auth.last_name,
									id: auth.id,
									email: auth.email,
									role: auth.role
								};


								window.sessionStorage.setItem('id', user.id);
								window.sessionStorage.setItem('loggedIn', 'true');

								this.getProps().setAuthAction(user);
								this.getProps().history.push('/painel');

							case 19:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function handleValidPassword(_x2) {
				return _ref2.apply(this, arguments);
			}

			return handleValidPassword;
		}()
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(e) {
			var _e$target = e.target,
			    id = _e$target.id,
			    value = _e$target.value;

			var auth = (0, _extends3.default)({}, this.getState().auth);

			auth[id] = value;
			this.setState({ auth: auth });
		}
	}]);
	return LoginController;
}();

exports.default = LoginController;

/***/ }),

/***/ "./app/modules/login/index.js":
/*!************************************!*\
  !*** ./app/modules/login/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(/*! ./Login */ "./app/modules/login/Login.js");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Login).default;
  }
});

var _loginReducer = __webpack_require__(/*! ./loginReducer */ "./app/modules/login/loginReducer.js");

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_loginReducer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app/modules/login/login.styl":
/*!**************************************!*\
  !*** ./app/modules/login/login.styl ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/stylus-loader??ref--6-2!./login.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/login/login.styl");
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

/***/ "./app/modules/login/loginReducer.js":
/*!*******************************************!*\
  !*** ./app/modules/login/loginReducer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/input/input.styl":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/input/input.styl ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input {\n  display: block;\n  height: 40px;\n  padding: 5px 12px;\n  border-radius: 4px;\n  font-size: 1em;\n  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);\n}\n.input:focus {\n  padding: 5px 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/slim-button/slim-button.styl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/slim-button/slim-button.styl ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slim-button {\n  display: block;\n  height: 40px;\n  color: #a6a8ad;\n  border: solid 1px #a6a8ad;\n  background-color: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  transition-duration: 0.5s;\n  width: 100px;\n}\n.slim-button:hover {\n  background-color: #a6a8ad;\n  color: #fff;\n}\n.slim-button.-green {\n  color: #3eeeb0;\n  border: solid 1px #3eeeb0;\n}\n.slim-button.-green:hover {\n  background-color: #3eeeb0;\n  color: #fff;\n}\n.slim-button.-orange {\n  color: #e1a246;\n  border: solid 1px #e1a246;\n}\n.slim-button.-orange:hover {\n  background-color: #e1a246;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/login/login.styl":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/login/login.styl ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 500px auto;\n      grid-template-columns: 500px auto;\n  -ms-grid-rows: 100vh;\n      grid-template-rows: 100vh;\n}\n.login > section.aprensentation {\n  position: relative;\n}\n.login > section.aprensentation:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  transition-duration: 0.5s;\n  background-size: 110%;\n  background-repeat: no-repeat;\n  background-image: url(\"/imgs/login-background-2.png\");\n  opacity: 0.1;\n}\n.login > section.aprensentation.-valided:after {\n  background-color: transparent;\n}\n.login > .content > form.form {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  position: relative;\n  padding: 45px 60px;\n  z-index: 1;\n}\n.login > .content > form.form.-hide {\n  display: none;\n  animation: hiding 0.5s;\n}\n.login > .content > form.form.-show {\n  animation: showing 0.5s;\n}\n.login > .content > form.form > .title {\n  font-size: 2.4em;\n  font-weight: 400;\n  margin-bottom: 15px;\n}\n.login > .content > form.form > .description {\n  font-weight: 400;\n  font-size: 1em;\n  line-height: 1.2em;\n}\n.login > .content > form.form > .description > a {\n  color: #e1a246;\n}\n.login > .content > form.form > fieldset {\n  margin-top: 45px;\n  white-space: nowrap;\n}\n.login > .content > form.form > fieldset > .input {\n  display: inline-block;\n  width: 100%;\n  height: 55px;\n  vertical-align: bottom;\n}\n.login > .content > form.form > fieldset > .error {\n  margin-top: 15px;\n  color: #cc6c67;\n  font-size: 1em;\n}\n.login > .content > form.form > fieldset > .slim-button {\n  display: block;\n  width: 160px;\n  height: 55px;\n  margin-top: 30px;\n  font-size: 1em;\n  text-transform: uppercase;\n}\n.login > .content > form.form > fieldset > .slim-button > .loading {\n  width: 50px;\n  height: 50px;\n}\n@keyframes showing {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes hiding {\n  0% {\n    display: block;\n    opacity: 1;\n  }\n  99% {\n    opacity: 0;\n  }\n  100% {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=login.chunk.js.map