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

__webpack_require__(/*! ./task.styl */ "./app/modules/task/task.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var status = [{
	id: 'aaa',
	label: 'aaa'
}, {
	id: 'bbb',
	label: 'bbb'
}];

var Task = function (_Component) {
	(0, _inherits3.default)(Task, _Component);

	function Task(props) {
		(0, _classCallCheck3.default)(this, Task);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Task.__proto__ || (0, _getPrototypeOf2.default)(Task)).call(this, props));

		_this.state = {
			logTimeModalIsOpened: false
		};

		_this.handleToggleLogTimeModal = _this.handleToggleLogTimeModal.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Task, [{
		key: 'handleToggleLogTimeModal',
		value: function handleToggleLogTimeModal() {
			var _state = (0, _extends3.default)({}, this.state),
			    logTimeModalIsOpened = _state.logTimeModalIsOpened;

			this.setState({ logTimeModalIsOpened: !logTimeModalIsOpened });
		}
	}, {
		key: 'render',
		value: function render() {
			var _state2 = (0, _extends3.default)({}, this.state),
			    logTimeModalIsOpened = _state2.logTimeModalIsOpened;

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
							_inputGroup2.default,
							{ className: 'status-group', label: 'Status' },
							_react2.default.createElement(_select2.default, { options: status })
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
									_react2.default.createElement('img', { onClick: this.handleToggleLogTimeModal, src: '/icons/add.svg' })
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
							_react2.default.createElement('img', { src: _priorities2.default[0].icon }),
							_priorities2.default[0].label
						)
					)
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
exports.push([module.i, ".button {\n  display: block;\n  height: 40px;\n  color: #fff;\n  background-color: #a6a8ad;\n  border-radius: 4px;\n  cursor: pointer;\n  transition-duration: 0.5s;\n}\n.button.-green {\n  background-color: #3eeeb0;\n}\n.button.-green:hover {\n  background-color: #4f9488;\n}\n.button.-orange {\n  background-color: #e1a246;\n}\n.button.-orange:hover {\n  background-color: #c7903e;\n}\n", ""]);

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
exports.push([module.i, ".task {\n  display: -ms-grid;\n  display: grid;\n  width: 100%;\n  -ms-grid-columns: 200px auto;\n      grid-template-columns: 200px auto;\n  -ms-grid-rows: calc(100vh - 3px);\n      grid-template-rows: calc(100vh - 3px);\n}\n.task > .content {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.task > .content:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.task > .content .subtitle {\n  display: block;\n  font-size: 1em;\n  font-weight: 700;\n  width: 100%;\n  padding-bottom: 30px;\n}\n.task > .content > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 30px;\n  color: #a6a8ad;\n}\n.task > .content > .title > a {\n  color: #a6a8ad;\n  padding-right: 10px;\n}\n.task > .content > .title > a + a {\n  padding-left: 10px;\n}\n.task > .content > .title > .task-name {\n  display: inline;\n  color: #5d5e61;\n  padding: 10px;\n}\n.task > .content > .title > .task-name > .code {\n  margin-left: 3px;\n  margin-bottom: 60px;\n  font-size: 1em;\n  color: #a6a8ad;\n  text-transform: uppercase;\n  font-style: italic;\n}\n.task > .content > .description {\n  font-size: 1em;\n  line-height: 1.4em;\n  color: #a6a8ad;\n}\n.task > .content > .files {\n  margin-top: 30px;\n}\n.task > .content > .files > .uploader {\n  margin-bottom: 15px;\n}\n.task > .content > .files > .uploader > input {\n  display: none;\n}\n.task > .content > .files > .uploader > label {\n  display: inline-block;\n  color: #a6a8ad;\n  cursor: pointer;\n}\n.task > .content > .files > .uploader > label > img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task > .content > .files > .uploader:hover {\n  color: #6d53ee;\n}\n.task > .content > .files > .file-list > .not-found {\n  font-size: 0.9em;\n  color: #a6a8ad;\n}\n.task > .content > .comments {\n  width: calc(50% - 30px);\n  display: inline-block;\n  margin-top: 60px;\n  vertical-align: top;\n  margin-right: 60px;\n}\n.task > .content > .comments > .subtitle {\n  padding-bottom: 45px;\n}\n.task > .content > .comments > .list > .comment-card {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50px auto;\n      grid-template-columns: 50px auto;\n}\n.task > .content > .comments > .list > .comment-card + .comment-card {\n  margin-top: 45px;\n}\n.task > .content > .comments > .list > .comment-card > .avatar-wrapper {\n  padding-right: 10px;\n}\n.task > .content > .comments > .list > .comment-card > .avatar-wrapper > svg {\n  width: 100%;\n  height: auto;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header {\n  margin-bottom: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header > .name {\n  display: inline-block;\n  font-size: 1em;\n}\n.task > .content > .comments > .list > .comment-card > .content > .comment-header > .created-at {\n  color: #a6a8ad;\n  margin-left: 15px;\n}\n.task > .content > .comments > .list > .comment-card > .content > .text {\n  width: 100%;\n  line-height: 1.4em;\n}\n.task > .content > .comments > .list > .comment-input {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50px auto;\n      grid-template-columns: 50px auto;\n  margin-top: 45px;\n}\n.task > .content > .comments > .list > .comment-input > .avatar-wrapper {\n  padding-right: 10px;\n}\n.task > .content > .comments > .list > .comment-input > .avatar-wrapper > svg {\n  width: 100%;\n  height: auto;\n}\n.task > .content > .comments > .list > .comment-input > .content > .comment-header {\n  margin-bottom: 15px;\n}\n.task > .content > .comments > .list > .comment-input > .content > .comment-header > .name {\n  display: inline-block;\n  font-size: 1em;\n  color: #3eeeb0;\n}\n.task > .content > .comments > .list > .comment-input > .content > .text-area {\n  width: 100%;\n  height: 100px;\n  border-radius: 4px;\n  resize: none;\n  border: solid 1px #a6a8ad;\n  padding: 12px;\n}\n.task > .content > .comments > .list > .comment-input > .content > .actions {\n  margin-top: 15px;\n  text-align: right;\n}\n.task > .content > .comments > .list > .comment-input > .content > .actions > .send {\n  display: inline-block;\n  padding: 0px 15px;\n}\n.task > .content > .infos {\n  width: calc(50% - 30px);\n  display: inline-block;\n  margin-top: 60px;\n}\n.task > .content > .infos > .input-group > .label {\n  width: 100%;\n  height: 40px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.task > .content > .infos > .input-group + .input-group {\n  margin-top: 30px;\n}\n.task > .content > .infos > .input-group.status-group > .select {\n  width: 160px;\n}\n.task > .content > .infos > .log-time > .label span {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.task > .content > .infos > .log-time > .label span > img {\n  width: 40px;\n  cursor: pointer;\n}\n.task > .content > .infos > .log-time > .value {\n  font-style: italic;\n}\n.task > .content > .infos > .priority > img {\n  width: 30px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task > .add-log-time-modal > .modal > .title {\n  font-size: 1.2em;\n  margin-bottom: 45px;\n}\n.task > .add-log-time-modal > .modal > .input-group.time-group {\n  width: calc(50% - 5px);\n  display: inline-block;\n}\n.task > .add-log-time-modal > .modal > .input-group.time-group + .input-group {\n  margin-left: 10px;\n}\n.task > .add-log-time-modal > .modal > .input-group.time-group > .input {\n  width: 100%;\n}\n.task > .add-log-time-modal > .modal > .actions {\n  width: 100%;\n  margin-top: 45px;\n}\n.task > .add-log-time-modal > .modal > .actions > .save-action {\n  width: 100px;\n}\n", ""]);

// exports


/***/ })

}]);
//# sourceMappingURL=task.chunk.js.map