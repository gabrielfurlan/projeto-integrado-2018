(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task"],{

/***/ "./app/commons/components/button/Button.js":
/*!*************************************************!*\
  !*** ./app/commons/components/button/Button.js ***!
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

__webpack_require__(/*! ./button.styl */ "./app/commons/components/button/button.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_Component) {
	(0, _inherits3.default)(Button, _Component);

	function Button() {
		(0, _classCallCheck3.default)(this, Button);
		return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || (0, _getPrototypeOf2.default)(Button)).apply(this, arguments));
	}

	(0, _createClass3.default)(Button, [{
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
					className: 'button ' + className + ' ' + color,
					onClick: handleClick
				},
				children
			);
		}
	}]);
	return Button;
}(_react.Component);

exports.default = Button;


Button.propTypes = {
	className: _propTypes2.default.string,
	children: _propTypes2.default.any,
	color: _propTypes2.default.string,
	handleClick: _propTypes2.default.func,
	type: _propTypes2.default.string
};

Button.defaultProps = {
	className: '',
	children: 'Button',
	color: '-green',
	handleClick: function handleClick() {
		return console.log('Not Implemented.');
	},
	type: 'button'
};

/***/ }),

/***/ "./app/commons/components/button/button.styl":
/*!***************************************************!*\
  !*** ./app/commons/components/button/button.styl ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./button.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/button/button.styl");
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

/***/ "./app/commons/components/button/index.js":
/*!************************************************!*\
  !*** ./app/commons/components/button/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = __webpack_require__(/*! ./Button */ "./app/commons/components/button/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Button2.default;

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

var _button = __webpack_require__(/*! ../../commons/components/button */ "./app/commons/components/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _sideBar = __webpack_require__(/*! ../../commons/components/side-bar */ "./app/commons/components/side-bar/index.js");

var _sideBar2 = _interopRequireDefault(_sideBar);

__webpack_require__(/*! ./task.styl */ "./app/modules/task/task.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Task = function (_Component) {
	(0, _inherits3.default)(Task, _Component);

	function Task() {
		(0, _classCallCheck3.default)(this, Task);
		return (0, _possibleConstructorReturn3.default)(this, (Task.__proto__ || (0, _getPrototypeOf2.default)(Task)).apply(this, arguments));
	}

	(0, _createClass3.default)(Task, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'task' },
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
							_reactRouterDom.Link,
							{ to: '/' },
							'Nome do Projeto'
						),
						' /',
						_react2.default.createElement(
							'div',
							{ className: 'task-name' },
							'Nome da task vai aqui ',
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
						{ className: 'files' },
						_react2.default.createElement(
							'div',
							{ className: 'uploader' },
							_react2.default.createElement('input', { type: 'file', id: 'file' }),
							_react2.default.createElement(
								'label',
								{ className: 'icon', htmlFor: 'file' },
								_react2.default.createElement('img', { src: '/icons/file-upload.svg' }),
								'Anexar'
							)
						),
						_react2.default.createElement(
							'ul',
							{ className: 'file-list' },
							_react2.default.createElement(
								'span',
								{ className: 'not-found' },
								'Nenhum arquivo anexado.'
							)
						)
					),
					_react2.default.createElement(
						'section',
						{ className: 'comments' },
						_react2.default.createElement(
							'h2',
							{ className: 'subtitle' },
							'Coment\xE1rios'
						),
						_react2.default.createElement(
							'ul',
							{ className: 'list' },
							_react2.default.createElement(
								'li',
								{ className: 'comment-card' },
								_react2.default.createElement(
									'figure',
									{ className: 'avatar-wrapper' },
									_react2.default.createElement(_avataaars2.default, {
										avatarStyle: 'Circle',
										topType: 'WinterHat3',
										accessoriesType: 'Blank',
										hatColor: 'Black',
										facialHairType: 'BeardLight',
										facialHairColor: 'Black',
										clotheType: 'BlazerSweater',
										eyeType: 'Wink',
										eyebrowType: 'SadConcernedNatural',
										mouthType: 'Smile',
										skinColor: 'Brown'
									})
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
											'Rafael Silva'
										),
										_react2.default.createElement(
											'span',
											{ className: 'created-at' },
											'1 minuto atr\xE1s'
										)
									),
									_react2.default.createElement(
										'p',
										{ className: 'text' },
										'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl'
									)
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'comment-card' },
								_react2.default.createElement(
									'figure',
									{ className: 'avatar-wrapper' },
									_react2.default.createElement(_avataaars2.default, {
										avatarStyle: 'Circle',
										topType: 'ShortHairShortCurly',
										accessoriesType: 'Prescription01',
										hatColor: 'Red',
										hairColor: 'Black',
										facialHairType: 'MoustacheFancy',
										facialHairColor: 'BrownDark',
										clotheType: 'BlazerShirt',
										clotheColor: 'Blue02',
										graphicType: 'Cumbia',
										eyeType: 'Close',
										eyebrowType: 'RaisedExcited',
										mouthType: 'Sad',
										skinColor: 'Light'
									})
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
											'Arthur'
										),
										_react2.default.createElement(
											'span',
											{ className: 'created-at' },
											'1 minuto atr\xE1s'
										)
									),
									_react2.default.createElement(
										'p',
										{ className: 'text' },
										'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Em p\xE9 sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Detraxit consequat et quo num tendi nada. Delegadis gente finis, bibendum egestas augue arcu ut est. '
									)
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'comment-card' },
								_react2.default.createElement(
									'figure',
									{ className: 'avatar-wrapper' },
									_react2.default.createElement(_avataaars2.default, {
										avatarStyle: 'Circle',
										topType: 'WinterHat3',
										accessoriesType: 'Blank',
										hatColor: 'Black',
										facialHairType: 'BeardLight',
										facialHairColor: 'Black',
										clotheType: 'BlazerSweater',
										eyeType: 'Wink',
										eyebrowType: 'SadConcernedNatural',
										mouthType: 'Smile',
										skinColor: 'Brown'
									})
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
											'Rafael Silva'
										),
										_react2.default.createElement(
											'span',
											{ className: 'created-at' },
											'1 minuto atr\xE1s'
										)
									),
									_react2.default.createElement(
										'p',
										{ className: 'text' },
										'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl'
									)
								)
							),
							_react2.default.createElement(
								'li',
								{ className: 'comment-input' },
								_react2.default.createElement(
									'figure',
									{ className: 'avatar-wrapper' },
									_react2.default.createElement(_avataaars2.default, {
										avatarStyle: 'Circle',
										topType: 'WinterHat3',
										accessoriesType: 'Blank',
										hatColor: 'Black',
										facialHairType: 'BeardLight',
										facialHairColor: 'Black',
										clotheType: 'BlazerSweater',
										eyeType: 'Wink',
										eyebrowType: 'SadConcernedNatural',
										mouthType: 'Smile',
										skinColor: 'Brown'
									})
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
											'Rafael Silva'
										)
									),
									_react2.default.createElement('textarea', { placeholder: 'Adiocione um coment\xE1rio...', className: 'text-area' }),
									_react2.default.createElement(
										'div',
										{ className: 'actions' },
										_react2.default.createElement(
											_button2.default,
											{ className: 'send' },
											'Enviar'
										)
									)
								)
							)
						)
					),
					_react2.default.createElement(
						'section',
						{ className: 'infos' },
						_react2.default.createElement(
							'h2',
							{ className: 'subtitle' },
							'Gerais'
						),
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'Status'
						),
						_react2.default.createElement(
							'select',
							{ className: 'select' },
							_react2.default.createElement(
								'option',
								null,
								'A fazer'
							),
							_react2.default.createElement(
								'option',
								null,
								'Em progresso'
							),
							_react2.default.createElement(
								'option',
								null,
								'Feito'
							)
						),
						_react2.default.createElement(
							'label',
							{ className: 'label' },
							'Log time'
						)
					)
				)
			);
		}
	}]);
	return Task;
}(_react.Component);

exports.default = Task;


Task.propTypes = {};

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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/button/button.styl":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/button/button.styl ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n  display: block;\n  height: 40px;\n  color: #fff;\n  background-color: #a6a8ad;\n  border-radius: 4px;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n.button.-green {\n  background-color: #5dae9f;\n}\n.button.-green:hover {\n  background-color: #4f9488;\n}\n.button.-purple {\n  background-color: #de8ee1;\n}\n.button.-purple:hover {\n  background-color: #c57ec7;\n}\n", ""]);

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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/task/task.styl":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/task/task.styl ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 55px auto;\n      grid-template-columns: 55px auto;\n  -ms-grid-rows: calc(100vh - 3px);\n      grid-template-rows: calc(100vh - 3px);\n  border-top: solid 3px #4e82a1;\n}\n.task > .content {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.task > .content:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.task > .content .subtitle {\n  display: block;\n  font-size: 1em;\n  font-weight: 700;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.task > .content > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 30px;\n  color: #a6a8ad;\n}\n.task > .content > .title > a {\n  color: #4e82a1;\n  padding-right: 10px;\n}\n.task > .content > .title > a + a {\n  padding-left: 10px;\n}\n.task > .content > .title > .task-name {\n  display: inline;\n  color: #5d5e61;\n  padding: 10px;\n}\n.task > .content > .title > .task-name > .code {\n  margin-left: 3px;\n  margin-bottom: 60px;\n  font-size: 1em;\n  color: #a6a8ad;\n  text-transform: uppercase;\n  font-style: italic;\n}\n.task > .content > .description {\n  font-size: 1em;\n  line-height: 1.4em;\n  color: #a6a8ad;\n}\n.task > .content > .files {\n  margin-top: 30px;\n}\n.task > .content > .files > .uploader {\n  margin-bottom: 15px;\n}\n.task > .content > .files > .uploader > input {\n  display: none;\n}\n.task > .content > .files > .uploader > label {\n  display: inline-block;\n  color: #a6a8ad;\n  cursor: pointer;\n}\n.task > .content > .files > .uploader > label > img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task > .content > .files > .uploader:hover {\n  color: #4e82a1;\n}\n.task > .content > .files > .file-list > .not-found {\n  font-size: 0.9em;\n  color: #a6a8ad;\n}\n.task > .content > .comments {\n  width: calc(50% - 30px);\n  display: inline-block;\n  margin-top: 60px;\n  vertical-align: top;\n  margin-right: 30px;\n}\n.task > .content > .comments > .subtitle {\n  padding-bottom: 45px;\n}\n.task > .content > .comments > .list > .comment-card {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50px auto;\n      grid-template-columns: 50px auto;\n}\n.task > .content > .comments > .list > .comment-card + .comment-card {\n  margin-top: 45px;\n}\n.task > .content > .comments > .list > .comment-card > .avatar-wrapper {\n  padding-right: 10px;\n}\n.task > .content > .comments > .list > .comment-card > .avatar-wrapper > svg {\n  width: 100%;\n  height: auto;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header {\n  margin-bottom: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header > .name {\n  display: inline-block;\n  font-size: 1em;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header > .created-at {\n  color: #a6a8ad;\n  margin-left: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .content > .text {\n  width: 100%;\n  line-height: 1.4em;\n}\n.task > .content > .comments > .list > .comment-input {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50px auto;\n      grid-template-columns: 50px auto;\n  margin-top: 45px;\n}\n.task > .content > .comments > .list > .comment-input > .avatar-wrapper {\n  padding-right: 10px;\n}\n.task > .content > .comments > .list > .comment-input > .avatar-wrapper > svg {\n  width: 100%;\n  height: auto;\n}\n.task > .content > .comments > .list > .comment-input > .content > .comment-header {\n  margin-bottom: 15px;\n}\n.task > .content > .comments > .list > .comment-input > .content > .comment-header > .name {\n  display: inline-block;\n  font-size: 1em;\n  color: #5dae9f;\n}\n.task > .content > .comments > .list > .comment-input > .content > .text-area {\n  width: 100%;\n  height: 100px;\n  border-radius: 4px;\n  resize: none;\n  border: solid 1px #a6a8ad;\n  padding: 12px;\n}\n.task > .content > .comments > .list > .comment-input > .content > .actions {\n  margin-top: 15px;\n  text-align: right;\n}\n.task > .content > .comments > .list > .comment-input > .content > .actions > .send {\n  display: inline-block;\n  padding: 0px 15px;\n}\n.task > .content > .infos {\n  width: calc(50% - 30px);\n  display: inline-block;\n  margin-top: 60px;\n}\n.task > .content > .infos > .label {\n  display: block;\n  margin-bottom: 10px;\n}\n.task > .content > .infos > .select {\n  width: 160px;\n  height: 40px;\n  padding: 12px 7px;\n  background-color: transparent;\n  border: solid 1px #a6a8ad;\n  color: #a6a8ad;\n  margin-bottom: 30px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=task.chunk.js.map