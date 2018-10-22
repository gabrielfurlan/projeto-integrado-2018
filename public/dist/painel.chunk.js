(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["painel"],{

/***/ "./app/commons/assets/userTypes.js":
/*!*****************************************!*\
  !*** ./app/commons/assets/userTypes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	id: 'analyst',
	label: 'Analista'
}, {
	id: 'manager',
	label: 'Gerente'
}];

/***/ }),

/***/ "./app/commons/components/client-card/ClientCard.js":
/*!**********************************************************!*\
  !*** ./app/commons/components/client-card/ClientCard.js ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

__webpack_require__(/*! ./client-card.styl */ "./app/commons/components/client-card/client-card.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientCard = function (_Component) {
	(0, _inherits3.default)(ClientCard, _Component);

	function ClientCard(props) {
		(0, _classCallCheck3.default)(this, ClientCard);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ClientCard.__proto__ || (0, _getPrototypeOf2.default)(ClientCard)).call(this, props));

		_this.toClient = _this.toClient.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ClientCard, [{
		key: 'toClient',
		value: function toClient() {
			var _props = this.props,
			    history = _props.history,
			    id = _props.id;

			history.push('/client/' + id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    name = _props2.name,
			    email = _props2.email,
			    phoneNumber = _props2.phoneNumber,
			    cnpj = _props2.cnpj,
			    sectorId = _props2.sectorId,
			    sectors = _props2.sectors;

			var sector = sectors.find(function (sector) {
				return sector.id === sectorId;
			});

			return _react2.default.createElement(
				'div',
				{ className: 'client-card', onClick: this.toClient },
				_react2.default.createElement(
					'h3',
					{ className: 'title' },
					name,
					' ',
					_react2.default.createElement(
						'span',
						null,
						'(',
						cnpj,
						')'
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'info' },
					_react2.default.createElement(
						'p',
						{ className: 'sector' },
						'Setor: ',
						sector.label
					),
					_react2.default.createElement(
						'p',
						{ className: 'email' },
						'Email: ',
						email
					),
					_react2.default.createElement(
						'p',
						{ className: 'phone' },
						'Phone: ',
						phoneNumber
					)
				)
			);
		}
	}]);
	return ClientCard;
}(_react.Component);

ClientCard.propTypes = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	email: _propTypes2.default.string.isRequired,
	sectors: _propTypes2.default.string.isRequired
};

ClientCard.defaultProps = {};

exports.default = (0, _reactRouterDom.withRouter)(ClientCard);

/***/ }),

/***/ "./app/commons/components/client-card/client-card.styl":
/*!*************************************************************!*\
  !*** ./app/commons/components/client-card/client-card.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./client-card.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/client-card/client-card.styl");
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

/***/ "./app/commons/components/client-card/index.js":
/*!*****************************************************!*\
  !*** ./app/commons/components/client-card/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ClientCard = __webpack_require__(/*! ./ClientCard */ "./app/commons/components/client-card/ClientCard.js");

var _ClientCard2 = _interopRequireDefault(_ClientCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ClientCard2.default;

/***/ }),

/***/ "./app/commons/components/link-button/LinkButton.js":
/*!**********************************************************!*\
  !*** ./app/commons/components/link-button/LinkButton.js ***!
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

__webpack_require__(/*! ./link-button.styl */ "./app/commons/components/link-button/link-button.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkButton = function (_Component) {
	(0, _inherits3.default)(LinkButton, _Component);

	function LinkButton() {
		(0, _classCallCheck3.default)(this, LinkButton);
		return (0, _possibleConstructorReturn3.default)(this, (LinkButton.__proto__ || (0, _getPrototypeOf2.default)(LinkButton)).apply(this, arguments));
	}

	(0, _createClass3.default)(LinkButton, [{
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
					className: 'link-button ' + className + ' ' + color,
					onClick: handleClick
				},
				children
			);
		}
	}]);
	return LinkButton;
}(_react.Component);

exports.default = LinkButton;


LinkButton.propTypes = {
	className: _propTypes2.default.string,
	children: _propTypes2.default.any,
	color: _propTypes2.default.string,
	handleClick: _propTypes2.default.func,
	type: _propTypes2.default.string
};

LinkButton.defaultProps = {
	className: '',
	children: 'LinkButton',
	color: '-green',
	handleClick: function handleClick() {
		return console.log('Not Implemented.');
	},
	type: 'button'
};

/***/ }),

/***/ "./app/commons/components/link-button/index.js":
/*!*****************************************************!*\
  !*** ./app/commons/components/link-button/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LinkButton = __webpack_require__(/*! ./LinkButton */ "./app/commons/components/link-button/LinkButton.js");

var _LinkButton2 = _interopRequireDefault(_LinkButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _LinkButton2.default;

/***/ }),

/***/ "./app/commons/components/link-button/link-button.styl":
/*!*************************************************************!*\
  !*** ./app/commons/components/link-button/link-button.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./link-button.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/link-button/link-button.styl");
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

/***/ "./app/commons/components/plus-button/PlusButton.js":
/*!**********************************************************!*\
  !*** ./app/commons/components/plus-button/PlusButton.js ***!
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

__webpack_require__(/*! ./plus-button.styl */ "./app/commons/components/plus-button/plus-button.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlusButton = function (_Component) {
	(0, _inherits3.default)(PlusButton, _Component);

	function PlusButton() {
		(0, _classCallCheck3.default)(this, PlusButton);
		return (0, _possibleConstructorReturn3.default)(this, (PlusButton.__proto__ || (0, _getPrototypeOf2.default)(PlusButton)).apply(this, arguments));
	}

	(0, _createClass3.default)(PlusButton, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    color = _props.color,
			    handleClick = _props.handleClick;

			return _react2.default.createElement(
				'button',
				{ type: 'button', className: 'plus-button ' + className + ' ' + color, onClick: handleClick },
				_react2.default.createElement(
					'span',
					null,
					'Novo'
				),
				_react2.default.createElement(
					'span',
					{ className: 'plus' },
					'+'
				)
			);
		}
	}]);
	return PlusButton;
}(_react.Component);

exports.default = PlusButton;


PlusButton.propTypes = {
	className: _propTypes2.default.string,
	color: _propTypes2.default.string,
	handleClick: _propTypes2.default.func,
	type: _propTypes2.default.string
};

PlusButton.defaultProps = {
	className: '',
	color: '-orange',
	handleClick: function handleClick() {
		return console.log('Not Implemented.');
	}
};

/***/ }),

/***/ "./app/commons/components/plus-button/index.js":
/*!*****************************************************!*\
  !*** ./app/commons/components/plus-button/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlusButton = __webpack_require__(/*! ./PlusButton */ "./app/commons/components/plus-button/PlusButton.js");

var _PlusButton2 = _interopRequireDefault(_PlusButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _PlusButton2.default;

/***/ }),

/***/ "./app/commons/components/plus-button/plus-button.styl":
/*!*************************************************************!*\
  !*** ./app/commons/components/plus-button/plus-button.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./plus-button.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/plus-button/plus-button.styl");
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

/***/ "./app/commons/components/project-card/ProjectCard.js":
/*!************************************************************!*\
  !*** ./app/commons/components/project-card/ProjectCard.js ***!
  \************************************************************/
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

__webpack_require__(/*! ./project-card.styl */ "./app/commons/components/project-card/project-card.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectCard = function (_Component) {
	(0, _inherits3.default)(ProjectCard, _Component);

	function ProjectCard(props) {
		(0, _classCallCheck3.default)(this, ProjectCard);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ProjectCard.__proto__ || (0, _getPrototypeOf2.default)(ProjectCard)).call(this, props));

		_this.toProject = _this.toProject.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ProjectCard, [{
		key: 'toProject',
		value: function toProject() {
			var _props = this.props,
			    history = _props.history,
			    id = _props.id;

			history.push('/projeto/' + id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    id = _props2.id,
			    name = _props2.name,
			    client = _props2.client,
			    description = _props2.description;


			return _react2.default.createElement(
				'div',
				{ className: 'project-card', onClick: this.toProject },
				_react2.default.createElement(
					'h3',
					{ className: 'title' },
					name
				),
				_react2.default.createElement(
					'div',
					{ className: 'info' },
					_react2.default.createElement(
						'p',
						{ className: 'id' },
						'ID: ',
						id
					),
					_react2.default.createElement(
						'p',
						{ className: 'client-name' },
						'Cliente: ',
						client.name
					)
				)
			);
		}
	}]);
	return ProjectCard;
}(_react.Component);

var clientShape = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired
};

ProjectCard.propTypes = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired,
	client: _propTypes2.default.shape(clientShape),
	description: _propTypes2.default.string.isRequired
};

ProjectCard.defaultProps = {
	client: {}
};

exports.default = (0, _reactRouterDom.withRouter)(ProjectCard);

/***/ }),

/***/ "./app/commons/components/project-card/index.js":
/*!******************************************************!*\
  !*** ./app/commons/components/project-card/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProjectCard = __webpack_require__(/*! ./ProjectCard */ "./app/commons/components/project-card/ProjectCard.js");

var _ProjectCard2 = _interopRequireDefault(_ProjectCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ProjectCard2.default;

/***/ }),

/***/ "./app/commons/components/project-card/project-card.styl":
/*!***************************************************************!*\
  !*** ./app/commons/components/project-card/project-card.styl ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./project-card.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/project-card/project-card.styl");
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
			this.props.history.push('/tarefa/' + e.currentTarget.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    priority = _props.priority,
			    name = _props.name,
			    small = _props.small;

			var priorityData = _priorities2.default.find(function (_ref) {
				var id = _ref.id;
				return priority === id;
			});

			return _react2.default.createElement(
				'div',
				{ id: id, className: 'task-card', onClick: this.handleClick },
				_react2.default.createElement(
					'h4',
					{ className: 'name' },
					name
				),
				_react2.default.createElement(
					'span',
					{ className: 'code' },
					id
				),
				_react2.default.createElement(
					'div',
					{ className: 'basic-infos' },
					_react2.default.createElement(
						'span',
						{ className: 'priority -' + priorityData.id },
						_react2.default.createElement('img', { src: priorityData.icon }),
						_react2.default.createElement(
							'span',
							{ className: small ? '-hide' : '' },
							priorityData.label,
							' Prioridade'
						)
					)
				)
			);
		}
	}]);
	return TaskCard;
}(_react.Component);

TaskCard.propTypes = {
	id: _propTypes2.default.string,
	name: _propTypes2.default.string,
	priority: _propTypes2.default.string,
	estimate_hours: _propTypes2.default.number,
	small: _propTypes2.default.bool
};

TaskCard.defaultProps = {
	id: 'XXX-X',
	name: 'Tarefa com um título padrão',
	priority: 'low',
	estimate_hours: 0,
	small: false
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

/***/ "./app/commons/components/text-area/TextArea.js":
/*!******************************************************!*\
  !*** ./app/commons/components/text-area/TextArea.js ***!
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

__webpack_require__(/*! ./text-area.styl */ "./app/commons/components/text-area/text-area.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function (_Component) {
	(0, _inherits3.default)(TextArea, _Component);

	function TextArea() {
		(0, _classCallCheck3.default)(this, TextArea);
		return (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || (0, _getPrototypeOf2.default)(TextArea)).apply(this, arguments));
	}

	(0, _createClass3.default)(TextArea, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    id = _props.id,
			    placeholder = _props.placeholder,
			    handleChange = _props.handleChange,
			    type = _props.type,
			    value = _props.value,
			    disabled = _props.disabled;

			return _react2.default.createElement('textarea', {
				className: 'text-area ' + className,
				placeholder: placeholder,
				onChange: handleChange,
				value: value,
				id: id,
				disabled: disabled
			});
		}
	}]);
	return TextArea;
}(_react.Component);

exports.default = TextArea;


TextArea.propTypes = {
	handleChange: _propTypes2.default.func.isRequired,
	value: _propTypes2.default.string.isRequired,
	id: _propTypes2.default.string.isRequired,
	placeholder: _propTypes2.default.string,
	className: _propTypes2.default.string,
	disabled: _propTypes2.default.bool
};

TextArea.defaultProps = {
	placeholder: '',
	className: '',
	disabled: false
};

/***/ }),

/***/ "./app/commons/components/text-area/index.js":
/*!***************************************************!*\
  !*** ./app/commons/components/text-area/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TextArea = __webpack_require__(/*! ./TextArea */ "./app/commons/components/text-area/TextArea.js");

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TextArea2.default;

/***/ }),

/***/ "./app/commons/components/text-area/text-area.styl":
/*!*********************************************************!*\
  !*** ./app/commons/components/text-area/text-area.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./text-area.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/text-area/text-area.styl");
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

/***/ "./app/commons/components/user-card/UserCard.js":
/*!******************************************************!*\
  !*** ./app/commons/components/user-card/UserCard.js ***!
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

__webpack_require__(/*! ./user-card.styl */ "./app/commons/components/user-card/user-card.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCard = function (_Component) {
	(0, _inherits3.default)(UserCard, _Component);

	function UserCard(props) {
		(0, _classCallCheck3.default)(this, UserCard);

		var _this = (0, _possibleConstructorReturn3.default)(this, (UserCard.__proto__ || (0, _getPrototypeOf2.default)(UserCard)).call(this, props));

		_this.toUser = _this.toUser.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(UserCard, [{
		key: 'toUser',
		value: function toUser() {
			var _props = this.props,
			    history = _props.history,
			    id = _props.id;

			history.push('/usuario/' + id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    firstName = _props2.firstName,
			    lastName = _props2.lastName,
			    id = _props2.id;

			return _react2.default.createElement(
				'div',
				{ className: 'user-card', onClick: this.toUser },
				_react2.default.createElement(
					'h3',
					{ className: 'title' },
					firstName,
					' ',
					lastName
				),
				_react2.default.createElement(
					'div',
					{ className: 'info-wrapper' },
					_react2.default.createElement(
						'p',
						{ className: 'id' },
						'ID: ',
						id
					)
				)
			);
		}
	}]);
	return UserCard;
}(_react.Component);

UserCard.propTypes = {
	id: _propTypes2.default.string.isRequired,
	firstName: _propTypes2.default.string.isRequired,
	lastName: _propTypes2.default.string.isRequired
};

UserCard.defaultProps = {};

exports.default = (0, _reactRouterDom.withRouter)(UserCard);

/***/ }),

/***/ "./app/commons/components/user-card/index.js":
/*!***************************************************!*\
  !*** ./app/commons/components/user-card/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _UserCard = __webpack_require__(/*! ./UserCard */ "./app/commons/components/user-card/UserCard.js");

var _UserCard2 = _interopRequireDefault(_UserCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _UserCard2.default;

/***/ }),

/***/ "./app/commons/components/user-card/user-card.styl":
/*!*********************************************************!*\
  !*** ./app/commons/components/user-card/user-card.styl ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./user-card.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/user-card/user-card.styl");
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

/***/ "./app/commons/helpers/DateHelper.js":
/*!*******************************************!*\
  !*** ./app/commons/helpers/DateHelper.js ***!
  \*******************************************/
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

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('PT-br');

var DateHelper = function () {
	function DateHelper() {
		(0, _classCallCheck3.default)(this, DateHelper);
	}

	(0, _createClass3.default)(DateHelper, null, [{
		key: 'months',
		value: function months() {
			return _moment2.default.months().map(function (month, key) {
				return { id: key + 1, label: month };
			});
		}
	}, {
		key: 'years',
		value: function years() {
			var count = new Date().getFullYear();
			var years = [];

			while (count > 1900) {
				years.push(count);
				count--;
			}

			return years.map(function (year) {
				return { id: year, label: year };
			});
		}
	}, {
		key: 'days',
		value: function days(month) {
			var count = 1;
			var days = [];
			switch (month) {
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					while (count <= 31) {
						days.push(count);
						count++;
					}
					break;
				case 2:
					while (count <= 28) {
						days.push(count);
						count++;
					}
					break;
				case 4:
				case 6:
				case 9:
				case 11:
					while (count <= 30) {
						days.push(count);
						count++;
					}
					break;
			}

			return days.map(function (day) {
				return { id: day, label: day };
			});
		}
	}]);
	return DateHelper;
}();

exports.default = DateHelper;

/***/ }),

/***/ "./app/commons/helpers/MaskHelper.js":
/*!*******************************************!*\
  !*** ./app/commons/helpers/MaskHelper.js ***!
  \*******************************************/
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

var MaskHelper = function () {
	function MaskHelper() {
		(0, _classCallCheck3.default)(this, MaskHelper);
	}

	(0, _createClass3.default)(MaskHelper, null, [{
		key: 'formatDate',
		value: function formatDate(date) {
			if (date.length > 2 && date[2] != '/') date = date.substring(0, 2) + '/' + date.substring(2, date.length);
			if (date.length > 5 && date[5] != '/') date = date.substring(0, 5) + '/' + date.substring(5, date.length);

			return date.substring(0, 10);
		}
	}, {
		key: 'formatRG',
		value: function formatRG(rg) {
			if (rg.length > 2 && rg[2] != '.') rg = rg.substring(0, 2) + '.' + rg.substring(2, rg.length);
			if (rg.length > 6 && rg[6] != '.') rg = rg.substring(0, 6) + '.' + rg.substring(6, rg.length);
			if (rg.length > 10 && rg[10] != '-') rg = rg.substring(0, 10) + '-' + rg.substring(10, rg.length);

			return rg.substring(0, 12);
		}
	}, {
		key: 'formatCPF',
		value: function formatCPF(cpf) {
			if (cpf.length > 3 && cpf[3] != '.') cpf = cpf.substring(0, 3) + '.' + cpf.substring(3, cpf.length);
			if (cpf.length > 7 && cpf[7] != '.') cpf = cpf.substring(0, 7) + '.' + cpf.substring(7, cpf.length);
			if (cpf.length > 11 && cpf[11] != '-') cpf = cpf.substring(0, 11) + '-' + cpf.substring(11, cpf.length);

			return cpf.substring(0, 14);
		}
	}, {
		key: 'formatPhone',
		value: function formatPhone(phone) {
			phone = this.extractNumbers(phone);
			if (phone.length > 0 && phone[0] != '(') phone = '(' + phone;
			if (phone.length > 3 && phone[3] != ')') phone = phone.substring(0, 3) + ')' + phone.substring(3, phone.length);
			if (phone.length > 4 && phone[4] != ' ') phone = phone.substring(0, 4) + ' ' + phone.substring(4, phone.length);

			phone = phone.replace(/[-]/g, '');
			if (phone.length > 13) phone = phone.substring(0, 10) + '-' + phone.substring(10, phone.length);else if (phone.length > 9) phone = phone.substring(0, 9) + '-' + phone.substring(9, phone.length);

			return phone.substring(0, 15);
		}
	}, {
		key: 'extractPhone',
		value: function extractPhone(phone) {
			return phone.replace('-', '').replace('(', '').replace(')', '').replace(' ', '');
		}
	}, {
		key: 'formatCEP',
		value: function formatCEP(cep) {
			var numbers = this.extractNumbers(cep);
			if (numbers.length > 5) numbers = numbers.substring(0, 5) + '-' + numbers.substring(5, numbers.length);

			return numbers.substring(0, 9);
		}
	}, {
		key: 'formatCNPJ',
		value: function formatCNPJ(cnpj) {
			var number = this.extractNumbers(cnpj);
			var parsed = '';

			for (var i in number) {
				if (i == 2 || i == 5) parsed += '.';
				if (i == 8) parsed += '/';
				if (i == 12) parsed += '-';
				parsed += number[i];
			}

			return parsed.substring(0, 18);
		}
	}, {
		key: 'formatStateName',
		value: function formatStateName(state, list) {
			var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'name';

			if (to == 'name') {
				for (var i in list) {
					var item = list[i];
					if (item.id == state) return item.name;
				}
				return 'XX';
			}
		}
	}, {
		key: 'numberWithDots',


		// ENTRAR COM STRING!!!
		value: function numberWithDots(value) {
			var number = this.extractNumbers(value).split('').reverse().join('');
			var withDots = '';
			for (var i in number) {
				if (i % 3 == 0 && i > 2) withDots += '.';
				withDots += number[i];
			}
			return withDots.split('').reverse().join('');
		}
	}, {
		key: 'firstName',
		value: function firstName(value) {
			var splited = value.split(' ');
			return splited[0];
		}
	}, {
		key: 'validateNumbers',
		value: function validateNumbers(value) {
			var onlyNumbers = value.replace(/[^0-9]/g, '');
			return onlyNumbers;
		}
	}, {
		key: 'extractNumbers',
		value: function extractNumbers(text) {
			var number = '';
			for (var i in text) {
				var n = text[i];
				if (parseInt(n) || parseInt(n) === 0) number += n;
			}
			return number;
		}
	}]);
	return MaskHelper;
}();

exports.default = MaskHelper;
;

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

/***/ "./app/commons/repositories/ClientsRepository.js":
/*!*******************************************************!*\
  !*** ./app/commons/repositories/ClientsRepository.js ***!
  \*******************************************************/
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

var ClientsRepository = function (_BaseRepository) {
	(0, _inherits3.default)(ClientsRepository, _BaseRepository);

	function ClientsRepository() {
		(0, _classCallCheck3.default)(this, ClientsRepository);
		return (0, _possibleConstructorReturn3.default)(this, (ClientsRepository.__proto__ || (0, _getPrototypeOf2.default)(ClientsRepository)).apply(this, arguments));
	}

	(0, _createClass3.default)(ClientsRepository, [{
		key: 'save',
		value: function save(client) {
			return this.post('/clients', client);
		}
	}, {
		key: 'findAll',
		value: function findAll() {
			return this.get('/clients');
		}
	}]);
	return ClientsRepository;
}(_BaseRepository3.default);

exports.default = ClientsRepository;

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
exports.Painel = exports.initial_project_errors = exports.initial_client_errors = exports.initial_user_errors = exports.initial_project = exports.initial_client = exports.initial_user = undefined;

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _PainelController = __webpack_require__(/*! ./controllers/PainelController */ "./app/modules/painel/controllers/PainelController.js");

var _PainelController2 = _interopRequireDefault(_PainelController);

var _UsersController = __webpack_require__(/*! ./controllers/UsersController */ "./app/modules/painel/controllers/UsersController.js");

var _UsersController2 = _interopRequireDefault(_UsersController);

var _ClientsController = __webpack_require__(/*! ./controllers/ClientsController */ "./app/modules/painel/controllers/ClientsController.js");

var _ClientsController2 = _interopRequireDefault(_ClientsController);

var _ProjectsController = __webpack_require__(/*! ./controllers/ProjectsController */ "./app/modules/painel/controllers/ProjectsController.js");

var _ProjectsController2 = _interopRequireDefault(_ProjectsController);

var _users = __webpack_require__(/*! ./components/users */ "./app/modules/painel/components/users/index.js");

var _users2 = _interopRequireDefault(_users);

var _clients = __webpack_require__(/*! ./components/clients */ "./app/modules/painel/components/clients/index.js");

var _clients2 = _interopRequireDefault(_clients);

var _home = __webpack_require__(/*! ./components/home */ "./app/modules/painel/components/home/index.js");

var _home2 = _interopRequireDefault(_home);

var _projects = __webpack_require__(/*! ./components/projects */ "./app/modules/painel/components/projects/index.js");

var _projects2 = _interopRequireDefault(_projects);

var _sideBar = __webpack_require__(/*! ../../commons/components/side-bar */ "./app/commons/components/side-bar/index.js");

var _sideBar2 = _interopRequireDefault(_sideBar);

var _userTypes = __webpack_require__(/*! ../../commons/assets/userTypes */ "./app/commons/assets/userTypes.js");

var _userTypes2 = _interopRequireDefault(_userTypes);

var _authActions = __webpack_require__(/*! ../../commons/actions/authActions */ "./app/commons/actions/authActions.js");

__webpack_require__(/*! ./painel.styl */ "./app/modules/painel/painel.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initial_user = exports.initial_user = {
	first_name: '',
	last_name: '',
	email: '',
	day: {},
	month: {},
	year: {},
	role: _userTypes2.default[0]
};

var initial_client = exports.initial_client = {
	email: '',
	cnpj: '',
	name: '',
	phone_number: '',
	sector: { id: null, label: '' }
};

var initial_project = exports.initial_project = {
	name: '',
	description: '',
	client: { id: null, label: '' }
};

var initial_user_errors = exports.initial_user_errors = {
	first_name: [],
	last_name: [],
	email: [],
	day: [],
	month: [],
	year: [],
	role: []
};

var initial_client_errors = exports.initial_client_errors = {
	email: [],
	cnpj: [],
	name: [],
	phone_number: [],
	sector: []
};

var initial_project_errors = exports.initial_project_errors = {
	name: [],
	description: [],
	client: []
};

var Painel = exports.Painel = function (_Component) {
	(0, _inherits3.default)(Painel, _Component);

	function Painel(props) {
		var _this$state;

		(0, _classCallCheck3.default)(this, Painel);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Painel.__proto__ || (0, _getPrototypeOf2.default)(Painel)).call(this, props));

		_this.state = (_this$state = {
			user: (0, _extends3.default)({}, initial_user),
			users: [],
			userError: (0, _extends3.default)({}, initial_user_errors),
			userStatus: null,
			clientsStatusLoading: 'loading',
			client: (0, _extends3.default)({}, initial_client),
			clients: []
		}, (0, _defineProperty3.default)(_this$state, 'clientsStatusLoading', 'loading'), (0, _defineProperty3.default)(_this$state, 'clientError', (0, _extends3.default)({}, initial_client_errors)), (0, _defineProperty3.default)(_this$state, 'clientStatus', null), (0, _defineProperty3.default)(_this$state, 'project', (0, _extends3.default)({}, initial_project)), (0, _defineProperty3.default)(_this$state, 'projectError', (0, _extends3.default)({}, initial_project_errors)), (0, _defineProperty3.default)(_this$state, 'projectStatus', null), (0, _defineProperty3.default)(_this$state, 'project_clients_data', []), (0, _defineProperty3.default)(_this$state, 'projects', []), _this$state);

		_this.renderHome = _this.renderHome.bind(_this);
		_this.renderProjects = _this.renderProjects.bind(_this);
		_this.renderClients = _this.renderClients.bind(_this);
		_this.renderUsers = _this.renderUsers.bind(_this);
		_this.handleLogout = _this.handleLogout.bind(_this);

		// instacing users controller 
		_this.usersController = new _UsersController2.default(function () {
			return _this.props;
		}, function () {
			return _this.state;
		}, function (state) {
			return _this.setState((0, _extends3.default)({}, _this.state, state));
		});

		// instacing clients controller 
		_this.clientsController = new _ClientsController2.default(function () {
			return _this.props;
		}, function () {
			return _this.state;
		}, function (state) {
			return _this.setState((0, _extends3.default)({}, _this.state, state));
		});

		// instacing projects controller 
		_this.projectsController = new _ProjectsController2.default(function () {
			return _this.props;
		}, function () {
			return _this.state;
		}, function (state) {
			return _this.setState((0, _extends3.default)({}, _this.state, state));
		});
		return _this;
	}

	(0, _createClass3.default)(Painel, [{
		key: 'renderHome',
		value: function renderHome() {
			return _react2.default.createElement(_home2.default, null);
		}
	}, {
		key: 'renderProjects',
		value: function renderProjects() {
			return _react2.default.createElement(_projects2.default, {
				projects: this.state.projects,
				sectors: this.props.sectors,
				controller: this.projectsController,
				clients: this.state.project_clients_data,
				project: this.state.project,
				errors: this.state.projectError,
				status: this.state.projectStatus,
				auth: this.props.auth
			});
		}
	}, {
		key: 'renderClients',
		value: function renderClients() {
			return _react2.default.createElement(_clients2.default, {
				controller: this.clientsController,
				sectors: this.props.sectors,
				client: this.state.client,
				clients: this.state.clients,
				statusLoading: this.state.clientsStatusLoading,
				errors: this.state.clientError,
				status: this.state.clientStatus
			});
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			return _react2.default.createElement(_users2.default, {
				controller: this.usersController,
				user: this.state.user,
				users: this.state.users,
				errors: this.state.userError,
				status: this.state.userStatus,
				statusLoading: this.state.usersStatusLoading
			});
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
		key: 'render',
		value: function render() {
			var auth = this.props.auth;


			return _react2.default.createElement(
				'div',
				{ className: 'painel' },
				_react2.default.createElement(_sideBar2.default, { auth: auth, handleLogout: this.handleLogout }),
				_react2.default.createElement(
					'main',
					{ className: 'content' },
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel', render: this.renderHome }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel/projetos', render: this.renderProjects }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel/clientes', render: this.renderClients }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel/users', render: this.renderUsers })
				)
			);
		}
	}]);
	return Painel;
}(_react.Component);

Painel.propTypes = {};

Painel.defualtProps = {};

var mapStateToProps = function mapStateToProps(state) {
	return {
		auth: state.auth,
		sectors: state.sectors
	};
};

var mapDispatchToProps = {
	resetAuthAction: _authActions.resetAuthAction
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Painel));

/***/ }),

/***/ "./app/modules/painel/components/clients/Clients.js":
/*!**********************************************************!*\
  !*** ./app/modules/painel/components/clients/Clients.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _button = __webpack_require__(/*! ../../../../commons/components/button */ "./app/commons/components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _clientCard = __webpack_require__(/*! ../../../../commons/components/client-card */ "./app/commons/components/client-card/index.js");

var _clientCard2 = _interopRequireDefault(_clientCard);

var _input = __webpack_require__(/*! ../../../../commons/components/input */ "./app/commons/components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _inputGroup = __webpack_require__(/*! ../../../../commons/components/input-group */ "./app/commons/components/input-group/index.js");

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _linkButton = __webpack_require__(/*! ../../../../commons/components/link-button */ "./app/commons/components/link-button/index.js");

var _linkButton2 = _interopRequireDefault(_linkButton);

var _modal = __webpack_require__(/*! ../../../../commons/components/modal */ "./app/commons/components/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _plusButton = __webpack_require__(/*! ../../../../commons/components/plus-button */ "./app/commons/components/plus-button/index.js");

var _plusButton2 = _interopRequireDefault(_plusButton);

var _select = __webpack_require__(/*! ../../../../commons/components/select */ "./app/commons/components/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _MaskHelper = __webpack_require__(/*! ../../../../commons/helpers/MaskHelper */ "./app/commons/helpers/MaskHelper.js");

var _MaskHelper2 = _interopRequireDefault(_MaskHelper);

var _ClientsController = __webpack_require__(/*! ../../controllers/ClientsController */ "./app/modules/painel/controllers/ClientsController.js");

var _ClientsController2 = _interopRequireDefault(_ClientsController);

__webpack_require__(/*! ./clients.styl */ "./app/modules/painel/components/clients/clients.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clients = function (_Component) {
	(0, _inherits3.default)(Clients, _Component);

	function Clients(props) {
		(0, _classCallCheck3.default)(this, Clients);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Clients.__proto__ || (0, _getPrototypeOf2.default)(Clients)).call(this, props));

		_this.state = {
			isOpenedNewClientModal: false
		};

		_this.handleToggleNewClientModal = _this.handleToggleNewClientModal.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Clients, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.controller.findAll();
		}
	}, {
		key: 'handleToggleNewClientModal',
		value: function handleToggleNewClientModal() {
			var _state = (0, _extends3.default)({}, this.state),
			    isOpenedNewClientModal = _state.isOpenedNewClientModal;

			isOpenedNewClientModal = !isOpenedNewClientModal;
			this.setState({ isOpenedNewClientModal: isOpenedNewClientModal });
		}
	}, {
		key: 'renderClients',
		value: function renderClients() {
			var _props = this.props,
			    clients = _props.clients,
			    sectors = _props.sectors;

			return clients.map(function (client) {
				return _react2.default.createElement(_clientCard2.default, (0, _extends3.default)({ key: client.id, sectors: sectors }, client));
			});
		}
	}, {
		key: 'renderAlert',
		value: function renderAlert() {
			switch (this.props.status) {
				case 'error':
					return _react2.default.createElement(
						'div',
						{ className: 'alert -error' },
						'Erro ao cadastrar o cliente! Por favor contate o administrador do sistema.'
					);
				case 'saved':
					return _react2.default.createElement(
						'div',
						{ className: 'alert -success' },
						'Cliente cadastrado com sucesso!'
					);
				default:
					return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var isOpenedNewClientModal = this.state.isOpenedNewClientModal;
			var _props2 = this.props,
			    sectors = _props2.sectors,
			    client = _props2.client,
			    errors = _props2.errors,
			    controller = _props2.controller,
			    clients = _props2.clients;


			return _react2.default.createElement(
				'section',
				{ className: 'clients' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'Clientes'
				),
				_react2.default.createElement(
					'div',
					{ className: 'clients-header' },
					_react2.default.createElement(_plusButton2.default, { handleClick: this.handleToggleNewClientModal })
				),
				_react2.default.createElement(
					'div',
					{ className: 'list' },
					this.renderClients()
				),
				_react2.default.createElement(
					_modal2.default,
					{ opened: isOpenedNewClientModal, className: 'client-modal', handleClose: this.handleToggleNewClientModal },
					_react2.default.createElement(
						'h2',
						{ className: 'title' },
						'Cadastre um novo cliente'
					),
					_react2.default.createElement(
						'form',
						{ className: 'client-form', onSubmit: controller.handleSave },
						this.renderAlert(),
						_react2.default.createElement(
							'div',
							{ className: 'row-1' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Nome da empresa', error: errors.name[0], className: 'name-ig' },
								_react2.default.createElement(_input2.default, { id: 'name', value: client.name, handleChange: controller.handleTextChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'CNPJ', error: errors.cnpj[0], className: 'cnpj-ig' },
								_react2.default.createElement(_input2.default, { id: 'cnpj', value: _MaskHelper2.default.formatCNPJ(client.cnpj), placeholder: '00.000.000/0000-00', handleChange: controller.handleTextChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row-1' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Setor', error: errors.sector[0], className: 'sector-ig' },
								_react2.default.createElement(_select2.default, { className: '-white', id: 'sector', options: sectors, value: client.sector, handleChange: controller.handleSelectChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row-1' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Email', error: errors.email[0], className: 'email-ig' },
								_react2.default.createElement(_input2.default, { id: 'email', value: client.email, placeholder: 'email@dominio.com', handleChange: controller.handleTextChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Telefone', error: errors.phone_number[0], className: 'phone-ig' },
								_react2.default.createElement(_input2.default, { id: 'phone_number', value: _MaskHelper2.default.formatPhone(client.phone_number), placeholder: '(00) 00000-0000', handleChange: controller.handleTextChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'actions' },
							_react2.default.createElement(
								_button2.default,
								{ color: '-orange', type: 'submit', handleClick: controller.handleSave },
								'Cadastrar'
							),
							_react2.default.createElement(
								_linkButton2.default,
								{ handleClick: this.handleToggleNewClientModal, color: '-orange' },
								'Cancelar'
							)
						)
					)
				)
			);
		}
	}]);
	return Clients;
}(_react.Component);

exports.default = Clients;


Clients.propTypes = {
	sectors: _propTypes2.default.array,
	clients: _propTypes2.default.array,
	statusLoading: _propTypes2.default.string.isRequired,
	status: _propTypes2.default.string.isRequired,
	controller: _propTypes2.default.instanceOf(_ClientsController2.default).isRequired,
	client: _propTypes2.default.object.isRequired,
	errors: _propTypes2.default.object.isRequired
};

Clients.defaultProps = {
	sectors: []
};

/***/ }),

/***/ "./app/modules/painel/components/clients/clients.styl":
/*!************************************************************!*\
  !*** ./app/modules/painel/components/clients/clients.styl ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./clients.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/clients/clients.styl");
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

/***/ "./app/modules/painel/components/clients/index.js":
/*!********************************************************!*\
  !*** ./app/modules/painel/components/clients/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Clients = __webpack_require__(/*! ./Clients */ "./app/modules/painel/components/clients/Clients.js");

var _Clients2 = _interopRequireDefault(_Clients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Clients2.default;

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

/***/ "./app/modules/painel/components/projects/Projects.js":
/*!************************************************************!*\
  !*** ./app/modules/painel/components/projects/Projects.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _button = __webpack_require__(/*! ../../../../commons/components/button */ "./app/commons/components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! ../../../../commons/components/input */ "./app/commons/components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _inputGroup = __webpack_require__(/*! ../../../../commons/components/input-group */ "./app/commons/components/input-group/index.js");

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _linkButton = __webpack_require__(/*! ../../../../commons/components/link-button */ "./app/commons/components/link-button/index.js");

var _linkButton2 = _interopRequireDefault(_linkButton);

var _modal = __webpack_require__(/*! ../../../../commons/components/modal */ "./app/commons/components/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _plusButton = __webpack_require__(/*! ../../../../commons/components/plus-button */ "./app/commons/components/plus-button/index.js");

var _plusButton2 = _interopRequireDefault(_plusButton);

var _projectCard = __webpack_require__(/*! ../../../../commons/components/project-card */ "./app/commons/components/project-card/index.js");

var _projectCard2 = _interopRequireDefault(_projectCard);

var _select = __webpack_require__(/*! ../../../../commons/components/select */ "./app/commons/components/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _textArea = __webpack_require__(/*! ../../../../commons/components/text-area */ "./app/commons/components/text-area/index.js");

var _textArea2 = _interopRequireDefault(_textArea);

var _ProjectsController = __webpack_require__(/*! ../../controllers/ProjectsController */ "./app/modules/painel/controllers/ProjectsController.js");

var _ProjectsController2 = _interopRequireDefault(_ProjectsController);

__webpack_require__(/*! ./projects.styl */ "./app/modules/painel/components/projects/projects.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projects = [{
	id: 'asdasdasd',
	name: 'Projeto Teste #1',
	client: {
		id: 'aushdashdajs',
		name: 'Client #1'
	}
}, {
	id: 'asassdasd',
	name: 'Projeto Teste #2',
	client: {
		id: 'aushdashdaja',
		name: 'Client #2'
	}
}];

var Projects = function (_Component) {
	(0, _inherits3.default)(Projects, _Component);

	function Projects(props) {
		(0, _classCallCheck3.default)(this, Projects);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Projects.__proto__ || (0, _getPrototypeOf2.default)(Projects)).call(this, props));

		_this.state = {
			isOpenedNewProjectModal: false
		};

		_this.handleToggleNewProjectModal = _this.handleToggleNewProjectModal.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Projects, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.controller.setInfo();
		}
	}, {
		key: 'handleToggleNewProjectModal',
		value: function handleToggleNewProjectModal() {
			var _state = (0, _extends3.default)({}, this.state),
			    isOpenedNewProjectModal = _state.isOpenedNewProjectModal;

			isOpenedNewProjectModal = !isOpenedNewProjectModal;
			this.setState({ isOpenedNewProjectModal: isOpenedNewProjectModal });
		}
	}, {
		key: 'renderProjects',
		value: function renderProjects() {
			var clients = this.props.clients.map(function (client) {
				return { id: client.id, name: client.label };
			});
			var projects = [].concat((0, _toConsumableArray3.default)(this.props.projects));

			projects = projects.map(function (project) {
				return (0, _extends3.default)({}, project, {
					client: clients.find(function (client) {
						return client.id === project.clientId;
					})
				});
			});

			return projects.map(function (project) {
				return _react2.default.createElement(_projectCard2.default, (0, _extends3.default)({ key: project.id }, project));
			});
		}
	}, {
		key: 'renderAlert',
		value: function renderAlert() {
			switch (this.props.status) {
				case 'error':
					return _react2.default.createElement(
						'div',
						{ className: 'alert -error' },
						'Erro ao cadastrar o projeto! Por favor contate o administrador do sistema.'
					);
				case 'saved':
					return _react2.default.createElement(
						'div',
						{ className: 'alert -success' },
						'Projeto cadastrado com sucesso!'
					);
				default:
					return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var isOpenedNewProjectModal = this.state.isOpenedNewProjectModal;
			var _props = this.props,
			    auth = _props.auth,
			    controller = _props.controller,
			    clients = _props.clients,
			    project = _props.project,
			    projects = _props.projects,
			    errors = _props.errors;


			return _react2.default.createElement(
				'section',
				{ className: 'projects' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'Projetos'
				),
				_react2.default.createElement(
					'div',
					{ className: 'projects-header' },
					auth.role === 'manager' ? _react2.default.createElement(_plusButton2.default, { handleClick: this.handleToggleNewProjectModal }) : null
				),
				_react2.default.createElement(
					'div',
					{ className: 'list' },
					this.renderProjects()
				),
				_react2.default.createElement(
					_modal2.default,
					{ opened: isOpenedNewProjectModal, className: 'projects-modal', handleClose: this.handleToggleNewProjectModal },
					_react2.default.createElement(
						'h2',
						{ className: 'title' },
						'Cadastre um novo projeto'
					),
					_react2.default.createElement(
						'form',
						{ className: 'project-form', onSubmit: controller.handleSave },
						this.renderAlert(),
						_react2.default.createElement(
							'div',
							{ className: 'row-1' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Nome do projeto', error: errors.name[0], className: 'name-ig' },
								_react2.default.createElement(_input2.default, { id: 'name', value: project.name, handleChange: controller.handleTextChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Cliente', error: errors.client[0], className: 'client-ig' },
								_react2.default.createElement(_select2.default, { className: '-white', id: 'client', options: clients, value: project.client, handleChange: controller.handleSelectChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row-2' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Descri\xE7\xE3o', error: errors.description[0], className: 'description-ig' },
								_react2.default.createElement(_textArea2.default, { id: 'description', value: project.description, handleChange: controller.handleTextChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'actions' },
							_react2.default.createElement(
								_button2.default,
								{ color: '-orange', type: 'submit', handleClick: controller.handleSave },
								'Cadastrar'
							),
							_react2.default.createElement(
								_linkButton2.default,
								{ handleClick: this.handleToggleNewProjectModal, color: '-orange' },
								'Cancelar'
							)
						)
					)
				)
			);
		}
	}]);
	return Projects;
}(_react.Component);

exports.default = Projects;


Projects.propTypes = {
	clients: _propTypes2.default.array,
	status: _propTypes2.default.string.isRequired,
	controller: _propTypes2.default.instanceOf(_ProjectsController2.default).isRequired,
	errors: _propTypes2.default.object.isRequired
};

Projects.defaultProps = {
	clients: []
};

/***/ }),

/***/ "./app/modules/painel/components/projects/index.js":
/*!*********************************************************!*\
  !*** ./app/modules/painel/components/projects/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Projects = __webpack_require__(/*! ./Projects */ "./app/modules/painel/components/projects/Projects.js");

var _Projects2 = _interopRequireDefault(_Projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Projects2.default;

/***/ }),

/***/ "./app/modules/painel/components/projects/projects.styl":
/*!**************************************************************!*\
  !*** ./app/modules/painel/components/projects/projects.styl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./projects.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/projects/projects.styl");
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

/***/ "./app/modules/painel/components/users/Users.js":
/*!******************************************************!*\
  !*** ./app/modules/painel/components/users/Users.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _button = __webpack_require__(/*! ../../../../commons/components/button */ "./app/commons/components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(/*! ../../../../commons/components/input */ "./app/commons/components/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _inputGroup = __webpack_require__(/*! ../../../../commons/components/input-group */ "./app/commons/components/input-group/index.js");

var _inputGroup2 = _interopRequireDefault(_inputGroup);

var _linkButton = __webpack_require__(/*! ../../../../commons/components/link-button */ "./app/commons/components/link-button/index.js");

var _linkButton2 = _interopRequireDefault(_linkButton);

var _modal = __webpack_require__(/*! ../../../../commons/components/modal */ "./app/commons/components/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _plusButton = __webpack_require__(/*! ../../../../commons/components/plus-button */ "./app/commons/components/plus-button/index.js");

var _plusButton2 = _interopRequireDefault(_plusButton);

var _select = __webpack_require__(/*! ../../../../commons/components/select */ "./app/commons/components/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _userCard = __webpack_require__(/*! ../../../../commons/components/user-card */ "./app/commons/components/user-card/index.js");

var _userCard2 = _interopRequireDefault(_userCard);

var _DateHelper = __webpack_require__(/*! ../../../../commons/helpers/DateHelper */ "./app/commons/helpers/DateHelper.js");

var _DateHelper2 = _interopRequireDefault(_DateHelper);

var _userTypes = __webpack_require__(/*! ../../../../commons/assets/userTypes */ "./app/commons/assets/userTypes.js");

var _userTypes2 = _interopRequireDefault(_userTypes);

var _UsersController = __webpack_require__(/*! ../../controllers/UsersController */ "./app/modules/painel/controllers/UsersController.js");

var _UsersController2 = _interopRequireDefault(_UsersController);

__webpack_require__(/*! ./users.styl */ "./app/modules/painel/components/users/users.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function (_Component) {
	(0, _inherits3.default)(Users, _Component);

	function Users(props) {
		(0, _classCallCheck3.default)(this, Users);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Users.__proto__ || (0, _getPrototypeOf2.default)(Users)).call(this, props));

		_this.state = {
			isOpenedNewUserModal: false
		};

		_this.handleToggleNewUserModal = _this.handleToggleNewUserModal.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Users, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.controller.findAll();
		}
	}, {
		key: 'handleToggleNewUserModal',
		value: function handleToggleNewUserModal() {
			var _state = (0, _extends3.default)({}, this.state),
			    isOpenedNewUserModal = _state.isOpenedNewUserModal;

			isOpenedNewUserModal = !isOpenedNewUserModal;
			this.setState({ isOpenedNewUserModal: isOpenedNewUserModal });
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			return this.props.users.map(function (user) {
				return _react2.default.createElement(_userCard2.default, (0, _extends3.default)({ key: user.id }, user));
			});
		}
	}, {
		key: 'renderAlert',
		value: function renderAlert() {
			switch (this.props.status) {
				case 'error':
					return _react2.default.createElement(
						'div',
						{ className: 'alert -error' },
						'Erro ao cadastrar o cliente! Por favor contate o administrador do sistema.'
					);
				case 'saved':
					return _react2.default.createElement(
						'div',
						{ className: 'alert -success' },
						'Cliente cadastrado com sucesso!'
					);
				default:
					return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var isOpenedNewUserModal = this.state.isOpenedNewUserModal;
			var _props = this.props,
			    errors = _props.errors,
			    user = _props.user,
			    controller = _props.controller;


			return _react2.default.createElement(
				'section',
				{ className: 'users' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'Usu\xE1rios'
				),
				_react2.default.createElement(
					'div',
					{ className: 'users-header' },
					_react2.default.createElement(_plusButton2.default, { handleClick: this.handleToggleNewUserModal })
				),
				_react2.default.createElement(
					'div',
					{ className: 'list' },
					this.renderUsers()
				),
				_react2.default.createElement(
					_modal2.default,
					{ opened: isOpenedNewUserModal, className: 'user-modal', handleClose: this.handleToggleNewUserModal },
					_react2.default.createElement(
						'h2',
						{ className: 'title' },
						'Cadastre um novo usu\xE1rio'
					),
					_react2.default.createElement(
						'form',
						{ className: 'user-form', onSubmit: controller.handleSave },
						this.renderAlert(),
						_react2.default.createElement(
							'div',
							{ className: 'row-1' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Nome', error: errors.first_name[0], className: 'first-name-ig' },
								_react2.default.createElement(_input2.default, { id: 'first_name', value: user.first_name, handleChange: controller.handleTextChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Sobrenome', error: errors.last_name[0], className: 'last-name-ig' },
								_react2.default.createElement(_input2.default, { id: 'last_name', value: user.last_name, handleChange: controller.handleTextChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row-2' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Email', error: errors.email[0], className: 'email-ig' },
								_react2.default.createElement(_input2.default, { id: 'email', value: user.email, handleChange: controller.handleTextChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Fun\xE7\xE3o', className: 'role-ig' },
								_react2.default.createElement(_select2.default, { className: '-white', id: 'role', options: _userTypes2.default, value: user.role, handleChange: controller.handleSelectChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'row-3' },
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: 'Data de nascimento', error: errors.day[0], className: 'month-ig' },
								_react2.default.createElement(_select2.default, { className: '-white', id: 'month', options: _DateHelper2.default.months(), value: user.month, placeholder: 'M\xEAs', handleChange: controller.handleSelectChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: '\xA0', error: errors.month[0], className: 'day-ig' },
								_react2.default.createElement(_select2.default, { disabled: !user.month.id, className: '-white', id: 'day', value: user.day, options: _DateHelper2.default.days(user.month.id), placeholder: 'Dia', handleChange: controller.handleSelectChange })
							),
							_react2.default.createElement(
								_inputGroup2.default,
								{ label: '\xA0', error: errors.year[0], className: 'year-ig' },
								_react2.default.createElement(_select2.default, { className: '-white', id: 'year', options: _DateHelper2.default.years(), value: user.year, placeholder: 'Ano', handleChange: controller.handleSelectChange })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'actions' },
							_react2.default.createElement(
								_button2.default,
								{ color: '-orange', type: 'submit' },
								'Cadastrar'
							),
							_react2.default.createElement(
								_linkButton2.default,
								{ handleClick: this.handleToggleNewUserModal, color: '-orange' },
								'Cancelar'
							)
						)
					)
				)
			);
		}
	}]);
	return Users;
}(_react.Component);

exports.default = Users;


Users.propTypes = {
	sectors: _propTypes2.default.array,
	users: _propTypes2.default.array,
	statusLoading: _propTypes2.default.string.isRequired,
	status: _propTypes2.default.string.isRequired,
	controller: _propTypes2.default.instanceOf(_UsersController2.default).isRequired,
	user: _propTypes2.default.object.isRequired,
	errors: _propTypes2.default.object.isRequired
};

Users.defaultProps = {
	sectors: []
};

/***/ }),

/***/ "./app/modules/painel/components/users/index.js":
/*!******************************************************!*\
  !*** ./app/modules/painel/components/users/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Users = __webpack_require__(/*! ./Users */ "./app/modules/painel/components/users/Users.js");

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Users2.default;

/***/ }),

/***/ "./app/modules/painel/components/users/users.styl":
/*!********************************************************!*\
  !*** ./app/modules/painel/components/users/users.styl ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./users.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/users/users.styl");
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

/***/ "./app/modules/painel/controllers/ClientsController.js":
/*!*************************************************************!*\
  !*** ./app/modules/painel/controllers/ClientsController.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _ClientsRepository = __webpack_require__(/*! ../../../commons/repositories/ClientsRepository */ "./app/commons/repositories/ClientsRepository.js");

var _ClientsRepository2 = _interopRequireDefault(_ClientsRepository);

var _ValidationHelper = __webpack_require__(/*! ../../../commons/helpers/ValidationHelper */ "./app/commons/helpers/ValidationHelper.js");

var _ValidationHelper2 = _interopRequireDefault(_ValidationHelper);

var _Painel = __webpack_require__(/*! ../Painel */ "./app/modules/painel/Painel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientsController = function () {
	function ClientsController(getProps, getState, setState) {
		(0, _classCallCheck3.default)(this, ClientsController);

		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;

		this.clientsRepository = new _ClientsRepository2.default();
		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	(0, _createClass3.default)(ClientsController, [{
		key: 'findAll',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var response;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.clientsRepository.findAll();

							case 2:
								response = _context.sent;

								this.setState({ clients: response });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function findAll() {
				return _ref.apply(this, arguments);
			}

			return findAll;
		}()
	}, {
		key: 'handleSave',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
				var _getState, client, _validate2, error, validated, response;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								e.preventDefault();
								_getState = this.getState(), client = _getState.client;

								this.setState((0, _defineProperty3.default)({ clientStatus: 'loading' }, 'clientStatus', ''));
								_validate2 = this._validate(), error = _validate2.error, validated = _validate2.validated;

								if (validated) {
									_context2.next = 6;
									break;
								}

								return _context2.abrupt('return', this.setState({ clientError: error }));

							case 6:
								_context2.next = 8;
								return this.clientsRepository.save(this.mapToApi(client));

							case 8:
								response = _context2.sent;

								if (!(response.status != 200)) {
									_context2.next = 12;
									break;
								}

								this.setState({ clientStatus: 'error' });
								return _context2.abrupt('return', false);

							case 12:

								this.setState({ clientStatus: 'saved', client: (0, _extends3.default)({}, _Painel.initial_client) });
								this.findAll();
								return _context2.abrupt('return', false);

							case 15:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function handleSave(_x) {
				return _ref2.apply(this, arguments);
			}

			return handleSave;
		}()
	}, {
		key: 'mapToApi',
		value: function mapToApi(client) {
			return {
				name: client.name,
				email: client.email,
				sectorId: client.sector.id,
				cnpj: client.cnpj,
				phoneNumber: client.phone_number
			};
		}
	}, {
		key: '_validate',
		value: function _validate() {
			var _getState2 = this.getState(),
			    client = _getState2.client;

			var error = {};

			var validated = true;

			error.name = [];
			if (!client.name) {
				validated = false;
				error.name.push('Por favor, preencha o campo nome da empresa.');
			}

			error.cnpj = [];
			if (!client.cnpj) {
				validated = false;
				error.cnpj.push('Por favor, preencha o campo cnpj.');
			}

			error.email = [];
			if (!client.email) {
				validated = false;
				error.email.push('Por favor, preencha o campo email.');
			}

			if (!_ValidationHelper2.default.isEmail(client.email)) {
				validated = false;
				error.email.push('Email inválido.');
			}

			error.phone_number = [];
			if (!client.phone_number) {
				validated = false;
				error.phone_number.push('Por favor, preencha o campo telefone.');
			}

			if (!client.sector.id) {
				validated = false;
				error.sector = [];
				error.sector.push('Por favor, selecione um setor.');
			}

			return { validated: validated, error: (0, _extends3.default)({}, _Painel.initial_client_errors, error) };
		}
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(e) {
			var _e$target = e.target,
			    value = _e$target.value,
			    id = _e$target.id;

			var client = (0, _extends3.default)({}, this.getState().client);
			client[id] = value;
			this.setState({ client: client });
		}
	}, {
		key: 'handleSelectChange',
		value: function handleSelectChange(ref, value) {
			var client = (0, _extends3.default)({}, this.getState().client);
			client[ref] = value;
			this.setState({ client: client });
		}
	}]);
	return ClientsController;
}();

exports.default = ClientsController;

/***/ }),

/***/ "./app/modules/painel/controllers/PainelController.js":
/*!************************************************************!*\
  !*** ./app/modules/painel/controllers/PainelController.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./app/modules/painel/controllers/ProjectsController.js":
/*!**************************************************************!*\
  !*** ./app/modules/painel/controllers/ProjectsController.js ***!
  \**************************************************************/
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

var _ProjectsRepository = __webpack_require__(/*! ../../../commons/repositories/ProjectsRepository */ "./app/commons/repositories/ProjectsRepository.js");

var _ProjectsRepository2 = _interopRequireDefault(_ProjectsRepository);

var _ClientsRepository = __webpack_require__(/*! ../../../commons/repositories/ClientsRepository */ "./app/commons/repositories/ClientsRepository.js");

var _ClientsRepository2 = _interopRequireDefault(_ClientsRepository);

var _ValidationHelper = __webpack_require__(/*! ../../../commons/helpers/ValidationHelper */ "./app/commons/helpers/ValidationHelper.js");

var _ValidationHelper2 = _interopRequireDefault(_ValidationHelper);

var _Painel = __webpack_require__(/*! ../Painel */ "./app/modules/painel/Painel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProjectsController = function () {
	function ProjectsController(getProps, getState, setState) {
		(0, _classCallCheck3.default)(this, ProjectsController);

		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;

		this.projectsRepository = new _ProjectsRepository2.default();
		this.clientsRepository = new _ClientsRepository2.default();
		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	(0, _createClass3.default)(ProjectsController, [{
		key: 'setInfo',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var clients, project_clients_data, projects;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.clientsRepository.findAll();

							case 2:
								clients = _context.sent;
								project_clients_data = clients.map(function (client) {
									return { id: client.id, label: client.name };
								});
								_context.next = 6;
								return this.projectsRepository.findAll();

							case 6:
								projects = _context.sent;

								projects = projects.map(function (project) {
									return (0, _extends3.default)({}, project, { client: clients.find(function (client) {
											return client.id == project.clientId;
										}) });
								});

								this.setState({ project_clients_data: project_clients_data, projects: projects });

							case 9:
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
		key: 'handleSave',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
				var _getState, project, _validate2, error, validated, response;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								e.preventDefault();
								_getState = this.getState(), project = _getState.project;


								this.setState({ projectStatus: 'loading' });
								_validate2 = this._validate(), error = _validate2.error, validated = _validate2.validated;

								if (validated) {
									_context2.next = 6;
									break;
								}

								return _context2.abrupt('return', this.setState({ projectError: error }));

							case 6:
								_context2.next = 8;
								return this.projectsRepository.save(this.mapToApi(project));

							case 8:
								response = _context2.sent;

								if (!(response.status != 200)) {
									_context2.next = 12;
									break;
								}

								this.setState({ projectStatus: 'error' });
								return _context2.abrupt('return', false);

							case 12:

								this.setState({ projectStatus: 'saved', project: (0, _extends3.default)({}, _Painel.initial_project) });
								this.setInfo();

								return _context2.abrupt('return', false);

							case 15:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function handleSave(_x) {
				return _ref2.apply(this, arguments);
			}

			return handleSave;
		}()
	}, {
		key: 'mapToApi',
		value: function mapToApi(project) {
			return {
				name: project.name,
				description: project.description,
				clientId: project.client.id
			};
		}
	}, {
		key: '_validate',
		value: function _validate() {
			var _getState2 = this.getState(),
			    project = _getState2.project;

			var error = {};
			var validated = true;

			error.name = [];
			if (!project.name) {
				validated = false;
				error.name.push('Por favor, preencha o campo nome da projeto.');
			}

			if (!project.client.id) {
				validated = false;
				error.client = [];
				error.client.push('Por favor, selecione um cliente.');
			}

			return { validated: validated, error: (0, _extends3.default)({}, _Painel.initial_project_errors, error) };
		}
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(e) {
			var _e$target = e.target,
			    value = _e$target.value,
			    id = _e$target.id;

			var project = (0, _extends3.default)({}, this.getState().project);
			project[id] = value;
			this.setState({ project: project });
		}
	}, {
		key: 'handleSelectChange',
		value: function handleSelectChange(ref, value) {
			var project = (0, _extends3.default)({}, this.getState().project);
			project[ref] = value;
			this.setState({ project: project });
		}
	}]);
	return ProjectsController;
}();

exports.default = ProjectsController;

/***/ }),

/***/ "./app/modules/painel/controllers/UsersController.js":
/*!***********************************************************!*\
  !*** ./app/modules/painel/controllers/UsersController.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _UsersRepository = __webpack_require__(/*! ../../../commons/repositories/UsersRepository */ "./app/commons/repositories/UsersRepository.js");

var _UsersRepository2 = _interopRequireDefault(_UsersRepository);

var _ValidationHelper = __webpack_require__(/*! ../../../commons/helpers/ValidationHelper */ "./app/commons/helpers/ValidationHelper.js");

var _ValidationHelper2 = _interopRequireDefault(_ValidationHelper);

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _Painel = __webpack_require__(/*! ../Painel */ "./app/modules/painel/Painel.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersController = function () {
	function UsersController(getProps, getState, setState) {
		(0, _classCallCheck3.default)(this, UsersController);

		this.getProps = getProps;
		this.getState = getState;
		this.setState = setState;

		this.usersRepository = new _UsersRepository2.default();
		this.handleSave = this.handleSave.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleSelectChange = this.handleSelectChange.bind(this);
	}

	(0, _createClass3.default)(UsersController, [{
		key: 'findAll',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var response;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return this.usersRepository.findAll();

							case 2:
								response = _context.sent;

								this.setState({ users: response });

							case 4:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function findAll() {
				return _ref.apply(this, arguments);
			}

			return findAll;
		}()
	}, {
		key: 'handleSave',
		value: function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(e) {
				var _getState, user, _validate2, error, validated, response, _error;

				return _regenerator2.default.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								e.preventDefault();

								_getState = this.getState(), user = _getState.user;
								_validate2 = this._validate(), error = _validate2.error, validated = _validate2.validated;

								if (validated) {
									_context2.next = 5;
									break;
								}

								return _context2.abrupt('return', this.setState({ userError: error }));

							case 5:
								_context2.next = 7;
								return this.usersRepository.save(this.mapToApi(user));

							case 7:
								response = _context2.sent;

								if (!(response.status == 406)) {
									_context2.next = 12;
									break;
								}

								_error = (0, _extends3.default)({}, _Painel.initial_user_errors);

								_error.email.push('Email já cadastrado.');
								return _context2.abrupt('return', this.setState({ userError: _error }));

							case 12:
								if (!(response.status != 200)) {
									_context2.next = 15;
									break;
								}

								this.setState({ userStatus: 'error' });
								return _context2.abrupt('return', false);

							case 15:

								this.setState({ userError: (0, _extends3.default)({}, _Painel.initial_user_errors), userStatus: 'saved', user: (0, _extends3.default)({}, _Painel.initial_user) });
								this.findAll();
								return _context2.abrupt('return', false);

							case 18:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function handleSave(_x) {
				return _ref2.apply(this, arguments);
			}

			return handleSave;
		}()
	}, {
		key: 'mapToApi',
		value: function mapToApi(user) {
			var birthday = new Date();
			birthday.setDate(user.day.id);
			birthday.setMonth(user.month.id - 1);
			birthday.setYear(user.year.id);

			return {
				firstName: user.first_name,
				lastName: user.last_name,
				email: user.email,
				birthday: (0, _moment2.default)(birthday).format('YYYY-MM-DD'),
				role: user.role.id
			};
		}
	}, {
		key: '_validate',
		value: function _validate() {
			var _getState2 = this.getState(),
			    user = _getState2.user;

			var error = (0, _extends3.default)({}, _Painel.initial_user_errors);
			var validated = true;

			var emailRxp = /asda/;

			if (!user.first_name) {
				validated = false;
				error.first_name.push('Por favor, preencha o campo nome.');
			}

			if (!user.last_name) {
				validated = false;
				error.last_name.push('Por favor, preencha o campo sobrenome.');
			}

			if (!user.email) {
				validated = false;
				error.email.push('Por favor, preencha o campo email.');
			}

			if (!_ValidationHelper2.default.isEmail(user.email)) {
				validated = false;
				error.email.push('Email inválido.');
			}

			if (!user.day.id) {
				validated = false;
				error.day.push('Por favor, selecione o dia de seu nascimento.');
			}

			if (!user.month.id) {
				validated = false;
				error.month.push('Por favor, selecione o mês de seu nascimento.');
			}

			if (!user.year.id) {
				validated = false;
				error.year.push('Por favor, selecione o ano de seu nascimento.');
			}

			return { validated: validated, error: error };
		}
	}, {
		key: 'handleTextChange',
		value: function handleTextChange(e) {
			var _e$target = e.target,
			    value = _e$target.value,
			    id = _e$target.id;

			var user = (0, _extends3.default)({}, this.getState().user);
			user[id] = value;
			this.setState({ user: user });
		}
	}, {
		key: 'handleSelectChange',
		value: function handleSelectChange(ref, value) {
			var user = (0, _extends3.default)({}, this.getState().user);
			user[ref] = value;
			this.setState({ user: user });
		}
	}]);
	return UsersController;
}();

exports.default = UsersController;

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

/***/ "./node_modules/babel-runtime/helpers/defineProperty.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/defineProperty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/client-card/client-card.styl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/client-card/client-card.styl ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".client-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.client-card > .title {\n  font-size: 1em;\n  font-weight: 700;\n}\n.client-card > .title > span {\n  font-weight: 400;\n  font-style: italic;\n}\n.client-card > .info > p {\n  font-size: 0.9em;\n}\n.client-card > .info > p + p {\n  margin-top: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/link-button/link-button.styl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/link-button/link-button.styl ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link-button {\n  display: block;\n  height: 40px;\n  color: #a6a8ad;\n  background-color: transparent;\n  cursor: pointer;\n  width: 100px;\n  border: none;\n}\n.link-button.-green {\n  color: #4f9488;\n}\n.link-button.-orange {\n  color: #e1a246;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/plus-button/plus-button.styl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/plus-button/plus-button.styl ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plus-button {\n  display: block;\n  width: 100px;\n  height: 45px;\n  color: #fff;\n  background-color: #a6a8ad;\n  border-radius: 4px;\n  cursor: pointer;\n  transition-duration: 0.5s;\n  border-radius: 40px;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n}\n.plus-button > span {\n  vertical-align: middle;\n}\n.plus-button > span.plus {\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 2em;\n}\n.plus-button.-green {\n  background-color: #4f9488;\n}\n.plus-button.-green:hover {\n  background-color: #4f9488;\n}\n.plus-button.-orange {\n  background-color: #e1a246;\n}\n.plus-button.-orange:hover {\n  background-color: #c7903e;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/project-card/project-card.styl":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/project-card/project-card.styl ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.project-card > .title {\n  font-size: 1em;\n  font-weight: 700;\n}\n.project-card > .title > span {\n  font-weight: 400;\n  font-style: italic;\n}\n.project-card > .info > p {\n  font-size: 0.9em;\n}\n.project-card > .info > p + p {\n  margin-top: 10px;\n}\n", ""]);

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
exports.push([module.i, ".task-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.task-card + .task-card {\n  margin-top: 15px;\n}\n.task-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n.task-card > .code {\n  color: #a6a8ad;\n  width: 100%;\n  display: block;\n  margin-top: 10px;\n  font-size: 0.8em;\n}\n.task-card > .basic-infos {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.task-card > .basic-infos > .priority {\n  margin-top: 5px;\n  font-size: 0.8em;\n}\n.task-card > .basic-infos > .priority > img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task-card > .basic-infos > .priority > .-hide {\n  display: none;\n}\n.task-card > .basic-infos > .priority.-high {\n  color: #cc6c67;\n}\n.task-card > .basic-infos > .priority.-low {\n  color: #4f9488;\n}\n.task-card > .basic-infos > .priority.-medium {\n  color: #ced481;\n}\n.task-card:hover > .title {\n  font-weight: 700;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/text-area/text-area.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/text-area/text-area.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-area {\n  display: block;\n  width: 100%;\n  height: 120px;\n  padding: 5px 12px;\n  border-radius: 4px;\n  font-size: 1em;\n  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);\n}\n.text-area:focus {\n  padding: 5px 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/user-card/user-card.styl":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/user-card/user-card.styl ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.user-card + .user-card {\n  margin-top: 15px;\n}\n.user-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/clients/clients.styl":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/painel/components/clients/clients.styl ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clients {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.clients:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.clients > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n.clients > .clients-header {\n  margin-bottom: 30px;\n  text-align: right;\n}\n.clients > .clients-header > .plus-button {\n  display: inline-block;\n}\n.clients > .clients-header > .plus-button > img {\n  padding: 5px;\n  width: 40px;\n}\n.clients > .list {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 15px;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.clients .client-modal .title {\n  padding-bottom: 15px;\n  border-bottom: solid 1px rgba(166,168,173,0.3);\n}\n.clients .client-modal .client-form {\n  margin-top: 45px;\n}\n.clients .client-modal .client-form > .alert {\n  padding: 15px;\n  margin-bottom: 30px;\n  border: solid 1px;\n  border-radius: 4px;\n}\n.clients .client-modal .client-form > .alert.-error {\n  border-color: #cc6c67;\n  background-color: rgba(204,108,103,0.4);\n}\n.clients .client-modal .client-form > .alert.-success {\n  border-color: #4f9488;\n  background-color: rgba(79,148,136,0.4);\n}\n.clients .client-modal .client-form > .row-1,\n.clients .client-modal .client-form > .row-2 {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 15px;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.clients .client-modal .client-form .input {\n  width: 100%;\n}\n.clients .client-modal .client-form .input-group {\n  margin-bottom: 15px;\n}\n.clients .client-modal .client-form > .actions {\n  margin-top: 45px;\n}\n.clients .client-modal .client-form > .actions > .button,\n.clients .client-modal .client-form > .actions > .link-button {\n  display: inline-block;\n  width: 120px;\n}\n", ""]);

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
exports.push([module.i, ".home {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.home:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.home > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n.home .subtitle {\n  display: block;\n  font-size: 1em;\n  font-weight: 700;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.home > .global-info {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 45px;\n  grid-template-areas: 'header header header' 'done todo hours';\n  padding-bottom: 30px;\n}\n.home > .global-info > .subtitle {\n  grid-area: header;\n}\n.home > .global-info > .info {\n  height: 150px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  border-bottom: solid 2px #e1a246;\n  padding: 30px;\n  text-align: right;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n}\n.home > .global-info > .info.-done-tasks {\n  grid-area: done;\n}\n.home > .global-info > .info.-todo {\n  grid-area: todo;\n}\n.home > .global-info > .info.-hours-worked {\n  grid-area: hours;\n}\n.home > .global-info > .info > .value {\n  font-size: 3em;\n  color: #e1a246;\n}\n.home > .assign-to-me,\n.home > .annotations {\n  width: calc(33% - 30px);\n  display: inline-block;\n  margin-top: 45px;\n}\n.home > .assign-to-me > .list,\n.home > .annotations > .list {\n  overflow: auto;\n  height: 350px;\n  padding-right: 30px;\n  padding-left: 3px;\n  padding-top: 3px;\n}\n.home > .assign-to-me > .list:after,\n.home > .annotations > .list:after {\n  content: '';\n  display: block;\n  height: 15px;\n}\n.home > .annotations {\n  margin-left: 60px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/projects/projects.styl":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/painel/components/projects/projects.styl ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projects {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.projects:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.projects > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n.projects > .projects-header {\n  margin-bottom: 30px;\n  text-align: right;\n}\n.projects > .projects-header > .plus-button {\n  display: inline-block;\n}\n.projects > .projects-header > .plus-button > img {\n  padding: 5px;\n  width: 40px;\n}\n.projects > .list {\n  display: -ms-grid;\n  display: grid;\n  grid-gap: 15px;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.projects .project-form {\n  margin-top: 45px;\n}\n.projects .project-form > .alert {\n  padding: 15px;\n  margin-bottom: 30px;\n  border: solid 1px;\n  border-radius: 4px;\n}\n.projects .project-form > .alert.-error {\n  border-color: #cc6c67;\n  background-color: rgba(204,108,103,0.4);\n}\n.projects .project-form > .alert.-success {\n  border-color: #4f9488;\n  background-color: rgba(79,148,136,0.4);\n}\n.projects .project-form > .row-1 {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 15px;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.projects .project-form > .row-2 {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 15px;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n}\n.projects .project-form .input {\n  width: 100%;\n}\n.projects .project-form .input-group {\n  margin-bottom: 15px;\n}\n.projects .project-form > .actions {\n  margin-top: 45px;\n}\n.projects .project-form > .actions > .button,\n.projects .project-form > .actions > .link-button {\n  display: inline-block;\n  width: 120px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/users/users.styl":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/painel/components/users/users.styl ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".users {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.users:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.users > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n.users > .users-header {\n  margin-bottom: 30px;\n  text-align: right;\n}\n.users > .users-header > .plus-button {\n  display: inline-block;\n}\n.users > .users-header > .plus-button > img {\n  padding: 5px;\n  width: 40px;\n}\n.users .user-modal .title {\n  padding-bottom: 15px;\n  border-bottom: solid 1px rgba(166,168,173,0.3);\n}\n.users .user-modal .user-form {\n  margin-top: 45px;\n}\n.users .user-modal .user-form > .alert {\n  padding: 15px;\n  margin-bottom: 30px;\n  border: solid 1px;\n  border-radius: 4px;\n}\n.users .user-modal .user-form > .alert.-error {\n  border-color: #cc6c67;\n  background-color: rgba(204,108,103,0.4);\n}\n.users .user-modal .user-form > .alert.-success {\n  border-color: #4f9488;\n  background-color: rgba(79,148,136,0.4);\n}\n.users .user-modal .user-form > .row-1 {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 15px;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n}\n.users .user-modal .user-form > .row-2 {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 15px;\n  -ms-grid-columns: 2fr 1fr;\n      grid-template-columns: 2fr 1fr;\n}\n.users .user-modal .user-form > .row-3 {\n  display: -ms-grid;\n  display: grid;\n  grid-column-gap: 15px;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n}\n.users .user-modal .user-form .input {\n  width: 100%;\n}\n.users .user-modal .user-form .input-group {\n  margin-bottom: 15px;\n}\n.users .user-modal .user-form > .actions {\n  margin-top: 45px;\n}\n.users .user-modal .user-form > .actions > .button,\n.users .user-modal .user-form > .actions > .link-button {\n  display: inline-block;\n  width: 120px;\n}\n", ""]);

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
exports.push([module.i, ".painel {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 200px auto;\n      grid-template-columns: 200px auto;\n  -ms-grid-rows: calc(100vh - 3px);\n      grid-template-rows: calc(100vh - 3px);\n}\n", ""]);

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
//# sourceMappingURL=painel.chunk.js.map