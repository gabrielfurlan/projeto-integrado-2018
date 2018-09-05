(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel"],{

/***/ "./app/commons/assets/priorities.js":
/*!******************************************!*\
  !*** ./app/commons/assets/priorities.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	id: 'high',
	label: 'Alta',
	icon: '/icons/high-priority.svg'
}, {
	id: 'medium',
	label: 'Média',
	icon: '/icons/medium-priority.svg'
}, {
	id: 'low',
	label: 'Baixa',
	icon: '/icons/low-priority.svg'
}];

/***/ }),

/***/ "./app/commons/components/side-bar/SideBar.js":
/*!****************************************************!*\
  !*** ./app/commons/components/side-bar/SideBar.js ***!
  \****************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

__webpack_require__(/*! ./side-bar.styl */ "./app/commons/components/side-bar/side-bar.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBar = function (_Component) {
	(0, _inherits3.default)(SideBar, _Component);

	function SideBar() {
		(0, _classCallCheck3.default)(this, SideBar);
		return (0, _possibleConstructorReturn3.default)(this, (SideBar.__proto__ || (0, _getPrototypeOf2.default)(SideBar)).apply(this, arguments));
	}

	(0, _createClass3.default)(SideBar, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'side-bar' },
				_react2.default.createElement('img', { className: 'logo', src: '/icons/logo.svg', alt: 'Logo' }),
				_react2.default.createElement(
					'nav',
					{ className: 'navigation' },
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ exact: true, title: 'Home', className: 'link', to: '/painel' },
						_react2.default.createElement('img', { src: '/icons/global.svg', alt: 'Home' })
					),
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ title: 'Projetos', className: 'link', to: '/painel/projetos' },
						_react2.default.createElement('img', { src: '/icons/projects.svg', alt: 'Projetos' })
					),
					_react2.default.createElement(
						_reactRouterDom.NavLink,
						{ title: 'Configura\xE7\xE3o', className: 'link', to: '/painel/config' },
						_react2.default.createElement('img', { src: '/icons/user-config.svg', alt: 'Configura\xE7\xE3o' })
					)
				)
			);
		}
	}]);
	return SideBar;
}(_react.Component);

exports.default = SideBar;


SideBar.propTypes = {};

SideBar.defualtProps = {};

/***/ }),

/***/ "./app/commons/components/side-bar/index.js":
/*!**************************************************!*\
  !*** ./app/commons/components/side-bar/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SideBar = __webpack_require__(/*! ./SideBar */ "./app/commons/components/side-bar/SideBar.js");

var _SideBar2 = _interopRequireDefault(_SideBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SideBar2.default;

/***/ }),

/***/ "./app/commons/components/side-bar/side-bar.styl":
/*!*******************************************************!*\
  !*** ./app/commons/components/side-bar/side-bar.styl ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./side-bar.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/side-bar/side-bar.styl");
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

/***/ "./app/commons/components/task-card/TaskCard.js":
/*!******************************************************!*\
  !*** ./app/commons/components/task-card/TaskCard.js ***!
  \******************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _priorities = __webpack_require__(/*! ../../assets/priorities */ "./app/commons/assets/priorities.js");

var _priorities2 = _interopRequireDefault(_priorities);

__webpack_require__(/*! ./task-card.styl */ "./app/commons/components/task-card/task-card.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskCard = function (_Component) {
	(0, _inherits3.default)(TaskCard, _Component);

	function TaskCard(props) {
		(0, _classCallCheck3.default)(this, TaskCard);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TaskCard.__proto__ || (0, _getPrototypeOf2.default)(TaskCard)).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(TaskCard, [{
		key: 'handleClick',
		value: function handleClick(e) {
			this.props.history.push('/tarefa/' + e.target.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    priority = _props.priority,
			    title = _props.title;

			var priorityData = _priorities2.default.find(function (_ref) {
				var id = _ref.id;
				return priority === id;
			});

			return _react2.default.createElement(
				'div',
				{ id: id, className: 'task-card', onClick: this.handleClick },
				_react2.default.createElement(
					'h4',
					{ className: 'title' },
					title
				),
				_react2.default.createElement(
					'div',
					{ className: 'basic-infos' },
					_react2.default.createElement(
						'span',
						{ className: 'priority -' + priorityData.id },
						_react2.default.createElement('img', { src: priorityData.icon }),
						priorityData.label,
						' Prioridade'
					),
					_react2.default.createElement(
						'span',
						{ className: 'code' },
						id
					)
				)
			);
		}
	}]);
	return TaskCard;
}(_react.Component);

TaskCard.propTypes = {
	id: _propTypes2.default.string,
	title: _propTypes2.default.string,
	priority: _propTypes2.default.string,
	estimate_hours: _propTypes2.default.number
};

TaskCard.defaultProps = {
	id: 'XXX-X',
	title: 'Tarefa com um título padrão',
	priority: 'low',
	estimate_hours: 0
};

exports.default = (0, _reactRouterDom.withRouter)(TaskCard);

/***/ }),

/***/ "./app/commons/components/task-card/index.js":
/*!***************************************************!*\
  !*** ./app/commons/components/task-card/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TaskCard = __webpack_require__(/*! ./TaskCard */ "./app/commons/components/task-card/TaskCard.js");

var _TaskCard2 = _interopRequireDefault(_TaskCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TaskCard2.default;

/***/ }),

/***/ "./app/commons/components/task-card/task-card.styl":
/*!*********************************************************!*\
  !*** ./app/commons/components/task-card/task-card.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./task-card.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/task-card/task-card.styl");
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

/***/ "./app/modules/painel/Painel.js":
/*!**************************************!*\
  !*** ./app/modules/painel/Painel.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Painel = undefined;

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _PainelController = __webpack_require__(/*! ./PainelController */ "./app/modules/painel/PainelController.js");

var _PainelController2 = _interopRequireDefault(_PainelController);

var _home = __webpack_require__(/*! ./components/home */ "./app/modules/painel/components/home/index.js");

var _home2 = _interopRequireDefault(_home);

var _sideBar = __webpack_require__(/*! ../../commons/components/side-bar */ "./app/commons/components/side-bar/index.js");

var _sideBar2 = _interopRequireDefault(_sideBar);

__webpack_require__(/*! ./painel.styl */ "./app/modules/painel/painel.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Painel = exports.Painel = function (_Component) {
	(0, _inherits3.default)(Painel, _Component);

	function Painel(props) {
		(0, _classCallCheck3.default)(this, Painel);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Painel.__proto__ || (0, _getPrototypeOf2.default)(Painel)).call(this, props));

		_this.renderHome = _this.renderHome.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Painel, [{
		key: 'renderHome',
		value: function renderHome() {
			return _react2.default.createElement(_home2.default, null);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'painel' },
				_react2.default.createElement(_sideBar2.default, null),
				_react2.default.createElement(
					'main',
					{ className: 'content' },
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel', render: this.renderHome })
				)
			);
		}
	}]);
	return Painel;
}(_react.Component);

Painel.propTypes = {};

Painel.defualtProps = {};

var mapStateToProps = function mapStateToProps(state) {
	return {};
};

var mapDispatchToProps = {};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Painel));

/***/ }),

/***/ "./app/modules/painel/PainelController.js":
/*!************************************************!*\
  !*** ./app/modules/painel/PainelController.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./app/modules/painel/components/home/Home.js":
/*!****************************************************!*\
  !*** ./app/modules/painel/components/home/Home.js ***!
  \****************************************************/
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

var _taskCard = __webpack_require__(/*! ../../../../commons/components/task-card */ "./app/commons/components/task-card/index.js");

var _taskCard2 = _interopRequireDefault(_taskCard);

__webpack_require__(/*! ./home.styl */ "./app/modules/painel/components/home/home.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tasks = [{
	id: 'e23qwe22ds',
	title: 'Titulo da tarefa #00',
	priority: 'high',
	estimate_hours: 5
}, {
	id: 'ersfd343ds',
	title: 'Titulo da tarefa #01',
	priority: 'low',
	estimate_hours: 2
}];

var Home = function (_Component) {
	(0, _inherits3.default)(Home, _Component);

	function Home() {
		(0, _classCallCheck3.default)(this, Home);
		return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
	}

	(0, _createClass3.default)(Home, [{
		key: 'renderTasks',
		value: function renderTasks() {
			return tasks.map(function (task) {
				return _react2.default.createElement(_taskCard2.default, task);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'home' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'Home'
				),
				_react2.default.createElement(
					'section',
					{ className: 'global-info' },
					_react2.default.createElement(
						'h2',
						{ className: 'subtitle' },
						'Informa\xE7\xF5es Gerais: '
					),
					_react2.default.createElement(
						'div',
						{ className: 'info -done-tasks' },
						_react2.default.createElement(
							'span',
							{ className: 'value' },
							'0'
						),
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'tarefas realizadas'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'info -todo' },
						_react2.default.createElement(
							'span',
							{ className: 'value' },
							'0'
						),
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'tarefas a fazer'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'info -hours-worked' },
						_react2.default.createElement(
							'span',
							{ className: 'value' },
							'0:00'
						),
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'horas trabalhada'
						)
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'assign-to-me' },
					_react2.default.createElement(
						'h2',
						{ className: 'subtitle' },
						'Tarefas atribuidas a mim:'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						this.renderTasks()
					)
				),
				_react2.default.createElement(
					'section',
					{ className: 'annotations' },
					_react2.default.createElement(
						'h2',
						{ className: 'subtitle' },
						'Minhas anota\xE7\xF5es:'
					),
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						_react2.default.createElement(
							'span',
							null,
							'Nenhuma anota\xE7\xE3o cadastrada'
						)
					)
				)
			);
		}
	}]);
	return Home;
}(_react.Component);

exports.default = Home;


Home.propTypes = {};

Home.defualtProps = {};

/***/ }),

/***/ "./app/modules/painel/components/home/home.styl":
/*!******************************************************!*\
  !*** ./app/modules/painel/components/home/home.styl ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./home.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/home/home.styl");
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

/***/ "./app/modules/painel/components/home/index.js":
/*!*****************************************************!*\
  !*** ./app/modules/painel/components/home/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = __webpack_require__(/*! ./Home */ "./app/modules/painel/components/home/Home.js");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Home2.default;

/***/ }),

/***/ "./app/modules/painel/index.js":
/*!*************************************!*\
  !*** ./app/modules/painel/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Painel = __webpack_require__(/*! ./Painel */ "./app/modules/painel/Painel.js");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Painel).default;
  }
});

var _painelReducer = __webpack_require__(/*! ./painelReducer */ "./app/modules/painel/painelReducer.js");

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_painelReducer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app/modules/painel/painel.styl":
/*!****************************************!*\
  !*** ./app/modules/painel/painel.styl ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/stylus-loader??ref--6-2!./painel.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/painel.styl");
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

/***/ "./app/modules/painel/painelReducer.js":
/*!*********************************************!*\
  !*** ./app/modules/painel/painelReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/side-bar/side-bar.styl":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/side-bar/side-bar.styl ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-bar {\n  border-radius: 4px;\n  text-align: center;\n  padding-top: 45px;\n  padding-bottom: 30px;\n  position: -webkit-sticky;\n  position: sticky;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n}\n.side-bar > img.logo {\n  width: 35px;\n  padding-bottom: 45px;\n  border-bottom: solid 1px rgba(166,168,173,0.3);\n}\n.side-bar > .navigation {\n  margin-top: 45px;\n}\n.side-bar > .navigation > a.link {\n  display: block;\n  text-align: center;\n  color: #5d5e61;\n  padding: 15px;\n  font-size: 1em;\n}\n.side-bar > .navigation > a.link.active {\n  box-shadow: 3px 0px 0px 0px #426d87 inset;\n  color: #426d87;\n  background-color: rgba(66,109,135,0.1);\n}\n.side-bar > .navigation > a.link:hover {\n  color: #426d87;\n}\n.side-bar > .navigation > a.link > img {\n  vertical-align: middle;\n  margin-right: 10px;\n  display: inline-block;\n  width: 100%;\n}\n.side-bar > .navigation > a.link + a.link {\n  margin-top: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/task-card/task-card.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/task-card/task-card.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.task-card + .task-card {\n  margin-top: 15px;\n}\n.task-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n.task-card > .basic-infos {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.task-card > .basic-infos > .code {\n  color: #a6a8ad;\n}\n.task-card > .basic-infos > .priority {\n  font-size: 0.8em;\n}\n.task-card > .basic-infos > .priority > img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task-card > .basic-infos > .priority.-high {\n  color: #cc6c67;\n}\n.task-card > .basic-infos > .priority.-low {\n  color: #5dae9f;\n}\n.task-card > .basic-infos > .priority.-medium {\n  color: #f4ff5f;\n}\n.task-card:hover > .title {\n  font-weight: 700;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/home/home.styl":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/painel/components/home/home.styl ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.home:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.home > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n.home .subtitle {\n  display: block;\n  font-size: 1em;\n  font-weight: 700;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.home > .global-info {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 45px;\n  grid-template-areas: 'header header header' 'done todo hours';\n  padding-bottom: 30px;\n}\n.home > .global-info > .subtitle {\n  grid-area: header;\n}\n.home > .global-info > .info {\n  height: 150px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  border-bottom: solid 2px #4e82a1;\n  padding: 30px;\n  text-align: right;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n}\n.home > .global-info > .info.-done-tasks {\n  grid-area: done;\n}\n.home > .global-info > .info.-todo {\n  grid-area: todo;\n}\n.home > .global-info > .info.-hours-worked {\n  grid-area: hours;\n}\n.home > .global-info > .info > .value {\n  font-size: 3em;\n  color: #4e82a1;\n}\n.home > .assign-to-me,\n.home > .annotations {\n  width: calc(33% - 30px);\n  display: inline-block;\n  margin-top: 45px;\n}\n.home > .assign-to-me > .list,\n.home > .annotations > .list {\n  overflow: auto;\n  height: 350px;\n  padding-right: 30px;\n  padding-left: 3px;\n  padding-top: 3px;\n}\n.home > .assign-to-me > .list:after,\n.home > .annotations > .list:after {\n  content: '';\n  display: block;\n  height: 15px;\n}\n.home > .annotations {\n  margin-left: 60px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/painel.styl":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/painel/painel.styl ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".painel {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 55px auto;\n      grid-template-columns: 55px auto;\n  -ms-grid-rows: calc(100vh - 3px);\n      grid-template-rows: calc(100vh - 3px);\n  border-top: solid 3px #4e82a1;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=painel.chunk.js.map