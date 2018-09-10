(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-view"],{

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

/***/ "./app/commons/components/input-group/InputGroup.js":
/*!**********************************************************!*\
  !*** ./app/commons/components/input-group/InputGroup.js ***!
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

__webpack_require__(/*! ./input-group.styl */ "./app/commons/components/input-group/input-group.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputGroup = function (_Component) {
	(0, _inherits3.default)(InputGroup, _Component);

	function InputGroup() {
		(0, _classCallCheck3.default)(this, InputGroup);
		return (0, _possibleConstructorReturn3.default)(this, (InputGroup.__proto__ || (0, _getPrototypeOf2.default)(InputGroup)).apply(this, arguments));
	}

	(0, _createClass3.default)(InputGroup, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    className = _props.className,
			    error = _props.error,
			    label = _props.label;

			return _react2.default.createElement(
				'div',
				{ className: 'input-group ' + className + ' ' + (error ? '-with-error' : '') },
				_react2.default.createElement(
					'label',
					{ className: 'label' },
					label
				),
				children,
				_react2.default.createElement(
					'p',
					{ className: 'error-text' },
					error
				)
			);
		}
	}]);
	return InputGroup;
}(_react.Component);

exports.default = InputGroup;


InputGroup.propTypes = {
	children: _propTypes2.default.any,
	className: _propTypes2.default.string,
	error: _propTypes2.default.string,
	label: _propTypes2.default.string
};

InputGroup.defaultProps = {
	className: '',
	error: '',
	label: '&nbsp;'
};

/***/ }),

/***/ "./app/commons/components/input-group/index.js":
/*!*****************************************************!*\
  !*** ./app/commons/components/input-group/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InputGroup = __webpack_require__(/*! ./InputGroup */ "./app/commons/components/input-group/InputGroup.js");

var _InputGroup2 = _interopRequireDefault(_InputGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _InputGroup2.default;

/***/ }),

/***/ "./app/commons/components/input-group/input-group.styl":
/*!*************************************************************!*\
  !*** ./app/commons/components/input-group/input-group.styl ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./input-group.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/input-group/input-group.styl");
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

/***/ "./app/commons/components/modal/Modal.js":
/*!***********************************************!*\
  !*** ./app/commons/components/modal/Modal.js ***!
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

__webpack_require__(/*! ./modal.styl */ "./app/commons/components/modal/modal.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
	(0, _inherits3.default)(Modal, _Component);

	function Modal() {
		(0, _classCallCheck3.default)(this, Modal);
		return (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).apply(this, arguments));
	}

	(0, _createClass3.default)(Modal, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    className = _props.className,
			    opened = _props.opened,
			    handleClose = _props.handleClose;


			return _react2.default.createElement(
				'div',
				{ className: 'modal-wrapper ' + className + ' ' + (opened ? '' : '-hide'), onClick: handleClose },
				_react2.default.createElement(
					'div',
					{ className: 'modal', onClick: function onClick(e) {
							return e.stopPropagation();
						} },
					children
				)
			);
		}
	}]);
	return Modal;
}(_react.Component);

exports.default = Modal;


Modal.propTypes = {
	children: _propTypes2.default.any,
	className: _propTypes2.default.string,
	handleClose: _propTypes2.default.func,
	opened: _propTypes2.default.bool
};

Modal.defaultProps = {
	className: '',
	handleClose: function handleClose() {
		return console.log('Not Implemented');
	},
	opened: false
};

/***/ }),

/***/ "./app/commons/components/modal/index.js":
/*!***********************************************!*\
  !*** ./app/commons/components/modal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(/*! ./Modal */ "./app/commons/components/modal/Modal.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Modal2.default;

/***/ }),

/***/ "./app/commons/components/modal/modal.styl":
/*!*************************************************!*\
  !*** ./app/commons/components/modal/modal.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./modal.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/modal/modal.styl");
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

/***/ "./app/commons/components/select/Select.js":
/*!*************************************************!*\
  !*** ./app/commons/components/select/Select.js ***!
  \*************************************************/
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

__webpack_require__(/*! ./select.styl */ "./app/commons/components/select/select.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_Component) {
	(0, _inherits3.default)(Select, _Component);

	function Select(props) {
		(0, _classCallCheck3.default)(this, Select);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

		_this.state = {
			isOpened: false
		};

		_this.handleToggleClick = _this.handleToggleClick.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Select, [{
		key: 'renderOptions',
		value: function renderOptions() {
			var _this2 = this;

			var _props = this.props,
			    options = _props.options,
			    id = _props.id;

			return options.map(function (option, i) {
				return _react2.default.createElement(
					'li',
					{ key: i, id: id, onClick: function onClick(e) {
							return _this2.handleChange(id, option);
						}, className: 'option' },
					option.label
				);
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(reference, option) {
			this.props.handleChange(reference, option);
		}
	}, {
		key: 'handleToggleClick',
		value: function handleToggleClick() {
			this.setState({ isOpened: !this.state.isOpened });
		}
	}, {
		key: 'render',
		value: function render() {
			var isOpened = this.state.isOpened,
			    _props2 = this.props,
			    options = _props2.options,
			    value = _props2.value,
			    placeholder = _props2.placeholder,
			    disabled = _props2.disabled;

			return _react2.default.createElement(
				'div',
				{ className: 'select ' + (disabled ? '-disabled' : ''), onClick: disabled ? null : this.handleToggleClick },
				_react2.default.createElement(
					'label',
					{ className: value.label ? '' : 'placeholder' },
					value.label ? value.label : placeholder
				),
				_react2.default.createElement('img', { className: 'icon', src: '/icons/dropdown.svg' }),
				_react2.default.createElement(
					'ul',
					{ className: 'select-dropdown ' + (isOpened && options.length ? '-show' : '') },
					this.renderOptions()
				)
			);
		}
	}]);
	return Select;
}(_react.Component);

exports.default = Select;


Select.propTypes = {
	id: _propTypes2.default.string,
	options: _propTypes2.default.array.isRequired,
	handleChange: _propTypes2.default.func.isRequired,
	value: _propTypes2.default.object,
	placeholder: _propTypes2.default.string,
	disabled: _propTypes2.default.bool
};

Select.defaultProps = {
	id: '',
	options: [],
	placeholder: 'Selecione',
	value: {},
	disabled: false
};

/***/ }),

/***/ "./app/commons/components/select/index.js":
/*!************************************************!*\
  !*** ./app/commons/components/select/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Select = __webpack_require__(/*! ./Select */ "./app/commons/components/select/Select.js");

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Select2.default;

/***/ }),

/***/ "./app/commons/components/select/select.styl":
/*!***************************************************!*\
  !*** ./app/commons/components/select/select.styl ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./select.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/select/select.styl");
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

/***/ "./app/modules/project-view/ProjectView.js":
/*!*************************************************!*\
  !*** ./app/modules/project-view/ProjectView.js ***!
  \*************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _avataaars = __webpack_require__(/*! avataaars */ "./node_modules/avataaars/dist/index.js");

var _avataaars2 = _interopRequireDefault(_avataaars);

var _slimButton = __webpack_require__(/*! ../../commons/components/slim-button */ "./app/commons/components/slim-button/index.js");

var _slimButton2 = _interopRequireDefault(_slimButton);

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

var _taskCard = __webpack_require__(/*! ../../commons/components/task-card */ "./app/commons/components/task-card/index.js");

var _taskCard2 = _interopRequireDefault(_taskCard);

var _priorities = __webpack_require__(/*! ../../commons/assets/priorities */ "./app/commons/assets/priorities.js");

var _priorities2 = _interopRequireDefault(_priorities);

__webpack_require__(/*! ./project-view.styl */ "./app/modules/project-view/project-view.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toDoTasks = [{
	id: 'e23qwe22ds',
	title: 'Titulo da tarefa #00',
	priority: 'low',
	estimate_hours: 5
}, {
	id: 'ersfd343ds',
	title: 'Titulo da tarefa #01',
	priority: 'low',
	estimate_hours: 2
}];

var inProgressTasks = [{
	id: 'e23qwedsds',
	title: 'Titulo da tarefa #04',
	priority: 'high',
	estimate_hours: 5
}, {
	id: 'ersas343ds',
	title: 'Titulo da tarefa #02',
	priority: 'medium',
	estimate_hours: 6
}, {
	id: 'ersas343ds',
	title: 'Titulo da tarefa #07',
	priority: 'high',
	estimate_hours: 6
}];

var doneTasks = [{
	id: 'as3qwedsds',
	title: 'Titulo da tarefa #03',
	priority: 'high',
	estimate_hours: 5
}];

var ProjectView = function (_Component) {
	(0, _inherits3.default)(ProjectView, _Component);

	function ProjectView(props) {
		(0, _classCallCheck3.default)(this, ProjectView);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ProjectView.__proto__ || (0, _getPrototypeOf2.default)(ProjectView)).call(this, props));

		_this.state = {
			isOpenedNewTaskModal: false
		};

		_this.handleToggleNewTaskModal = _this.handleToggleNewTaskModal.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ProjectView, [{
		key: 'renderToDoTasks',
		value: function renderToDoTasks() {
			return toDoTasks.map(function (task) {
				return _react2.default.createElement(_taskCard2.default, task);
			});
		}
	}, {
		key: 'renderInProgressTasks',
		value: function renderInProgressTasks() {
			return inProgressTasks.map(function (task) {
				return _react2.default.createElement(_taskCard2.default, task);
			});
		}
	}, {
		key: 'renderDoneTasks',
		value: function renderDoneTasks() {
			return doneTasks.map(function (task) {
				return _react2.default.createElement(_taskCard2.default, task);
			});
		}
	}, {
		key: 'handleToggleNewTaskModal',
		value: function handleToggleNewTaskModal() {
			var _state = (0, _extends3.default)({}, this.state),
			    isOpenedNewTaskModal = _state.isOpenedNewTaskModal;

			isOpenedNewTaskModal = !isOpenedNewTaskModal;
			this.setState({ isOpenedNewTaskModal: isOpenedNewTaskModal });
		}
	}, {
		key: 'render',
		value: function render() {
			var isOpenedNewTaskModal = this.state.isOpenedNewTaskModal;


			return _react2.default.createElement(
				'div',
				{ className: 'project-view' },
				_react2.default.createElement(_sideBar2.default, null),
				_react2.default.createElement(
					'main',
					{ className: 'content' },
					_react2.default.createElement(
						'h1',
						{ className: 'title' },
						_react2.default.createElement(
							_reactRouterDom.Link,
							{ to: '/' },
							'Projetos'
						),
						' /',
						_react2.default.createElement(
							'div',
							{ className: 'project-name' },
							'Nome do projeto vai aqui ',
							_react2.default.createElement(
								'span',
								{ className: 'code' },
								'(e23qwe22ds)'
							)
						)
					),
					_react2.default.createElement(
						'p',
						{ className: 'description' },
						'Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. N\xE3o sou faixa preta cumpadi, sou preto inteiris, inteiris. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. '
					),
					_react2.default.createElement(
						'div',
						{ className: 'project-view-header' },
						_react2.default.createElement(
							_slimButton2.default,
							{ color: '', handleClick: this.handleToggleNewTaskModal },
							_react2.default.createElement('img', {
								src: '/icons/add.svg',
								onMouseOver: function onMouseOver(e) {
									return e.currentTarget.src = '/icons/add-white.svg';
								},
								onMouseOut: function onMouseOut(e) {
									return e.currentTarget.src = '/icons/add.svg';
								}
							})
						)
					),
					_react2.default.createElement(
						'section',
						{ className: 'kanban' },
						_react2.default.createElement(
							'div',
							{ className: 'state' },
							_react2.default.createElement(
								'h3',
								{ className: 'title' },
								'A fazer'
							),
							_react2.default.createElement(
								'ul',
								{ className: 'list' },
								this.renderToDoTasks()
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'state' },
							_react2.default.createElement(
								'h3',
								{ className: 'title' },
								'Fazendo'
							),
							_react2.default.createElement(
								'ul',
								{ className: 'list' },
								this.renderInProgressTasks()
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'state' },
							_react2.default.createElement(
								'h3',
								{ className: 'title' },
								'Feito'
							),
							_react2.default.createElement(
								'ul',
								{ className: 'list' },
								this.renderDoneTasks()
							)
						)
					)
				),
				_react2.default.createElement(_modal2.default, { opened: isOpenedNewTaskModal, className: 'new-task-modal', handleClose: this.handleToggleNewTaskModal })
			);
		}
	}]);
	return ProjectView;
}(_react.Component);

exports.default = ProjectView;


ProjectView.propTypes = {};

/***/ }),

/***/ "./app/modules/project-view/index.js":
/*!*******************************************!*\
  !*** ./app/modules/project-view/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ProjectView = __webpack_require__(/*! ./ProjectView */ "./app/modules/project-view/ProjectView.js");

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ProjectView).default;
  }
});

var _projectViewReducer = __webpack_require__(/*! ./projectViewReducer */ "./app/modules/project-view/projectViewReducer.js");

Object.defineProperty(exports, 'reducer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_projectViewReducer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./app/modules/project-view/project-view.styl":
/*!****************************************************!*\
  !*** ./app/modules/project-view/project-view.styl ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/stylus-loader??ref--6-2!./project-view.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/project-view/project-view.styl");
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

/***/ "./app/modules/project-view/projectViewReducer.js":
/*!********************************************************!*\
  !*** ./app/modules/project-view/projectViewReducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/input-group/input-group.styl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/input-group/input-group.styl ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group {\n  width: 100%;\n}\n.input-group > .label {\n  display: block;\n  margin-bottom: 10px;\n}\n", ""]);

// exports


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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/modal/modal.styl":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/modal/modal.styl ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0,0,0,0.8);\n  padding: 60px;\n}\n.modal-wrapper.-hide {\n  display: none;\n}\n.modal-wrapper > .modal {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 768px;\n  background-color: #fafafa;\n  border-radius: 4px;\n  animation: show;\n  animation-duration: 0.2s;\n  will-change: transform;\n  padding: 30px;\n}\n@keyframes show {\n  from {\n    transform: translateY(-100%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/select/select.styl":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/select/select.styl ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select {\n  position: relative;\n  height: 40px;\n  background-color: transparent;\n  border: solid 1px #a6a8ad;\n  cursor: pointer;\n}\n.select > label {\n  display: inline-block;\n  padding: 12px 7px;\n  width: calc(100% - 30px);\n  height: 100%;\n  cursor: pointer;\n  use-select: none;\n}\n.select > .icon {\n  width: 30px;\n  vertical-align: middle;\n  use-select: none;\n}\n.select > .select-dropdown {\n  display: none;\n  position: absolute;\n  width: 100%;\n  max-height: 120px;\n  overflow-y: auto;\n  background-color: #fff;\n  margin-top: 15px;\n  box-shadow: 0px 1px 2px 1px rgba(0,0,0,0.1);\n}\n.select > .select-dropdown.-show {\n  display: block;\n}\n.select > .select-dropdown > li {\n  padding: 12px 7px;\n}\n.select > .select-dropdown > li:hover {\n  background-color: #fafafa;\n}\n", ""]);

// exports


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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/slim-button/slim-button.styl":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/slim-button/slim-button.styl ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slim-button {\n  display: block;\n  height: 40px;\n  color: #a6a8ad;\n  border: solid 1px #a6a8ad;\n  background-color: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  transition-duration: 0.5s;\n  width: 100px;\n}\n.slim-button:hover {\n  background-color: #a6a8ad;\n  color: #fff;\n}\n.slim-button.-green {\n  color: #5dae9f;\n  border: solid 1px #5dae9f;\n}\n.slim-button.-green:hover {\n  background-color: #5dae9f;\n  color: #fff;\n}\n.slim-button.-purple {\n  color: #de8ee1;\n  border: solid 1px #de8ee1;\n}\n.slim-button.-purple:hover {\n  background-color: #de8ee1;\n  color: #fff;\n}\n", ""]);

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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/project-view/project-view.styl":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/project-view/project-view.styl ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-view {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 55px auto;\n      grid-template-columns: 55px auto;\n  -ms-grid-rows: calc(100vh - 3px);\n      grid-template-rows: calc(100vh - 3px);\n  border-top: solid 3px #4e82a1;\n}\n.project-view > .content {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.project-view > .content:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.project-view > .content .subtitle {\n  display: block;\n  font-size: 1em;\n  font-weight: 700;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.project-view > .content > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 30px;\n  color: #a6a8ad;\n}\n.project-view > .content > .title > a {\n  color: #4e82a1;\n  padding-right: 10px;\n}\n.project-view > .content > .title > a + a {\n  padding-left: 10px;\n}\n.project-view > .content > .title > .project-name {\n  display: inline;\n  color: #5d5e61;\n  padding: 10px;\n}\n.project-view > .content > .title > .project-name > .code {\n  margin-left: 3px;\n  margin-bottom: 60px;\n  font-size: 1em;\n  color: #a6a8ad;\n  text-transform: uppercase;\n  font-style: italic;\n}\n.project-view > .content > .project-view-header {\n  margin-bottom: 30px;\n  text-align: right;\n}\n.project-view > .content > .project-view-header > .slim-button {\n  display: inline-block;\n  width: auto;\n  height: auto;\n  padding: 0;\n}\n.project-view > .content > .project-view-header > .slim-button > img {\n  padding: 5px;\n  width: 40px;\n}\n.project-view > .content > .description {\n  font-size: 1em;\n  line-height: 1.4em;\n  color: #a6a8ad;\n  margin-bottom: 30px;\n}\n.project-view > .content > .kanban {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  grid-gap: 30px;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr;\n  -ms-grid-rows: 100vh;\n      grid-template-rows: 100vh;\n}\n.project-view > .content > .kanban > .state > .title {\n  text-align: center;\n  padding: 15px;\n  font-weight: 400;\n  background-color: rgba(166,168,173,0.4);\n  border-radius: 5px 5px 0px 0px;\n  font-size: 1em;\n}\n.project-view > .content > .kanban > .state > .list {\n  background-color: rgba(166,168,173,0.4);\n  width: 100%;\n  height: 100%;\n  border-radius: 0px 0px 5px 5px;\n  padding: 15px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=project-view.chunk.js.map