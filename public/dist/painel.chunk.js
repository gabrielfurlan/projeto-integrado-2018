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

/***/ "./app/commons/components/analyst-card/AnalystCard.js":
/*!************************************************************!*\
  !*** ./app/commons/components/analyst-card/AnalystCard.js ***!
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

__webpack_require__(/*! ./analyst-card.styl */ "./app/commons/components/analyst-card/analyst-card.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AnalystCard = function (_Component) {
	(0, _inherits3.default)(AnalystCard, _Component);

	function AnalystCard(props) {
		(0, _classCallCheck3.default)(this, AnalystCard);

		var _this = (0, _possibleConstructorReturn3.default)(this, (AnalystCard.__proto__ || (0, _getPrototypeOf2.default)(AnalystCard)).call(this, props));

		_this.toAnalyst = _this.toAnalyst.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(AnalystCard, [{
		key: 'toAnalyst',
		value: function toAnalyst() {
			var _props = this.props,
			    history = _props.history,
			    id = _props.id;

			history.push('/analista/' + id);
		}
	}, {
		key: 'render',
		value: function render() {
			var name = this.props.name;


			return _react2.default.createElement(
				'div',
				{ className: 'analyst-card', onClick: this.toAnalyst },
				_react2.default.createElement(
					'h3',
					{ className: 'title' },
					name
				)
			);
		}
	}]);
	return AnalystCard;
}(_react.Component);

AnalystCard.propTypes = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired
};

AnalystCard.defaultProps = {};

exports.default = (0, _reactRouterDom.withRouter)(AnalystCard);

/***/ }),

/***/ "./app/commons/components/analyst-card/analyst-card.styl":
/*!***************************************************************!*\
  !*** ./app/commons/components/analyst-card/analyst-card.styl ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./analyst-card.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/analyst-card/analyst-card.styl");
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

/***/ "./app/commons/components/analyst-card/index.js":
/*!******************************************************!*\
  !*** ./app/commons/components/analyst-card/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AnalystCard = __webpack_require__(/*! ./AnalystCard */ "./app/commons/components/analyst-card/AnalystCard.js");

var _AnalystCard2 = _interopRequireDefault(_AnalystCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AnalystCard2.default;

/***/ }),

/***/ "./app/commons/components/brand/Brand.js":
/*!***********************************************!*\
  !*** ./app/commons/components/brand/Brand.js ***!
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

__webpack_require__(/*! ./brand.styl */ "./app/commons/components/brand/brand.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Brand = function (_Component) {
	(0, _inherits3.default)(Brand, _Component);

	function Brand() {
		(0, _classCallCheck3.default)(this, Brand);
		return (0, _possibleConstructorReturn3.default)(this, (Brand.__proto__ || (0, _getPrototypeOf2.default)(Brand)).apply(this, arguments));
	}

	(0, _createClass3.default)(Brand, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'span',
				{ className: 'brand' },
				'loop'
			);
		}
	}]);
	return Brand;
}(_react.Component);

exports.default = Brand;

/***/ }),

/***/ "./app/commons/components/brand/brand.styl":
/*!*************************************************!*\
  !*** ./app/commons/components/brand/brand.styl ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/stylus-loader??ref--6-2!./brand.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/brand/brand.styl");
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

/***/ "./app/commons/components/brand/index.js":
/*!***********************************************!*\
  !*** ./app/commons/components/brand/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Brand = __webpack_require__(/*! ./Brand */ "./app/commons/components/brand/Brand.js");

var _Brand2 = _interopRequireDefault(_Brand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Brand2.default;

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
			var name = this.props.name;


			return _react2.default.createElement(
				'div',
				{ className: 'client-card', onClick: this.toClient },
				_react2.default.createElement(
					'h3',
					{ className: 'title' },
					name
				)
			);
		}
	}]);
	return ClientCard;
}(_react.Component);

var clientShape = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired
};

ClientCard.propTypes = {
	id: _propTypes2.default.string.isRequired,
	name: _propTypes2.default.string.isRequired
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
			var name = this.props.name;


			return _react2.default.createElement(
				'div',
				{ className: 'project-card', onClick: this.toProject },
				_react2.default.createElement(
					'h3',
					{ className: 'title' },
					name
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
	client: _propTypes2.default.shape(clientShape).isRequired
};

ProjectCard.defaultProps = {};

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

var _avataaars = __webpack_require__(/*! avataaars */ "./node_modules/avataaars/dist/index.js");

var _avataaars2 = _interopRequireDefault(_avataaars);

var _brand = __webpack_require__(/*! ../brand */ "./app/commons/components/brand/index.js");

var _brand2 = _interopRequireDefault(_brand);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _links = __webpack_require__(/*! ./links */ "./app/commons/components/side-bar/links.js");

var _links2 = _interopRequireDefault(_links);

__webpack_require__(/*! ./side-bar.styl */ "./app/commons/components/side-bar/side-bar.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SideBar = function (_Component) {
	(0, _inherits3.default)(SideBar, _Component);

	function SideBar() {
		(0, _classCallCheck3.default)(this, SideBar);
		return (0, _possibleConstructorReturn3.default)(this, (SideBar.__proto__ || (0, _getPrototypeOf2.default)(SideBar)).apply(this, arguments));
	}

	(0, _createClass3.default)(SideBar, [{
		key: 'renderLinks',
		value: function renderLinks() {
			return _links2.default.map(function (_ref) {
				var icon = _ref.icon,
				    label = _ref.label,
				    to = _ref.to;
				return _react2.default.createElement(
					_reactRouterDom.NavLink,
					{ exact: true, title: label, className: 'link', to: to },
					_react2.default.createElement('img', { src: icon, alt: label }),
					label
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'side-bar' },
				_react2.default.createElement(_brand2.default, null),
				_react2.default.createElement(
					'div',
					{ className: 'user-info' },
					_react2.default.createElement(
						'figure',
						{ className: 'avatar' },
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
						'span',
						{ className: 'name' },
						'Gabriel Furlan'
					)
				),
				_react2.default.createElement(
					'nav',
					{ className: 'navigation' },
					this.renderLinks()
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

/***/ "./app/commons/components/side-bar/links.js":
/*!**************************************************!*\
  !*** ./app/commons/components/side-bar/links.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [{
	icon: '/icons/dashboard.svg',
	label: 'Home',
	to: '/painel'
}, {
	icon: '/icons/puzzle.svg',
	label: 'Projects',
	to: '/painel/projetos'
}, {
	icon: '/icons/conversation.svg',
	label: 'Clientes',
	to: '/painel/clientes'
}, {
	icon: '/icons/user.svg',
	label: 'Analistas',
	to: '/painel/analistas'
}, {
	icon: '/icons/configuration.svg',
	label: 'Configuração',
	to: '/painel/configuracao'
}];

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
			this.props.history.push('/tarefa/' + e.currentTarget.id);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    id = _props.id,
			    priority = _props.priority,
			    title = _props.title,
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
						_react2.default.createElement(
							'span',
							{ className: small ? '-hide' : '' },
							priorityData.label,
							' Prioridade'
						)
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
	estimate_hours: _propTypes2.default.number,
	small: _propTypes2.default.bool
};

TaskCard.defaultProps = {
	id: 'XXX-X',
	title: 'Tarefa com um título padrão',
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

var _analysts = __webpack_require__(/*! ./components/analysts */ "./app/modules/painel/components/analysts/index.js");

var _analysts2 = _interopRequireDefault(_analysts);

var _clients = __webpack_require__(/*! ./components/clients */ "./app/modules/painel/components/clients/index.js");

var _clients2 = _interopRequireDefault(_clients);

var _home = __webpack_require__(/*! ./components/home */ "./app/modules/painel/components/home/index.js");

var _home2 = _interopRequireDefault(_home);

var _projects = __webpack_require__(/*! ./components/projects */ "./app/modules/painel/components/projects/index.js");

var _projects2 = _interopRequireDefault(_projects);

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
		_this.renderProjects = _this.renderProjects.bind(_this);
		_this.renderClients = _this.renderClients.bind(_this);
		_this.renderAnalysts = _this.renderAnalysts.bind(_this);
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
			return _react2.default.createElement(_projects2.default, null);
		}
	}, {
		key: 'renderClients',
		value: function renderClients() {
			return _react2.default.createElement(_clients2.default, null);
		}
	}, {
		key: 'renderAnalysts',
		value: function renderAnalysts() {
			return _react2.default.createElement(_analysts2.default, null);
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
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel', render: this.renderHome }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel/projetos', render: this.renderProjects }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel/clientes', render: this.renderClients }),
					_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/painel/analistas', render: this.renderAnalysts })
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

/***/ "./app/modules/painel/components/analysts/Analysts.js":
/*!************************************************************!*\
  !*** ./app/modules/painel/components/analysts/Analysts.js ***!
  \************************************************************/
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

var _analystCard = __webpack_require__(/*! ../../../../commons/components/analyst-card */ "./app/commons/components/analyst-card/index.js");

var _analystCard2 = _interopRequireDefault(_analystCard);

__webpack_require__(/*! ./analysts.styl */ "./app/modules/painel/components/analysts/analysts.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var analysts = [{
	id: 'asdasdasd',
	name: 'Analista Teste #1'
}, {
	id: 'asassdasd',
	name: 'Analista Teste #2'
}];

var Analysts = function (_Component) {
	(0, _inherits3.default)(Analysts, _Component);

	function Analysts() {
		(0, _classCallCheck3.default)(this, Analysts);
		return (0, _possibleConstructorReturn3.default)(this, (Analysts.__proto__ || (0, _getPrototypeOf2.default)(Analysts)).apply(this, arguments));
	}

	(0, _createClass3.default)(Analysts, [{
		key: 'renderAnalysts',
		value: function renderAnalysts() {
			return analysts.map(function (analyst) {
				return _react2.default.createElement(_analystCard2.default, (0, _extends3.default)({ key: analyst.id }, analyst));
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'analysts' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'Analistas'
				),
				_react2.default.createElement(
					'div',
					{ className: 'list' },
					this.renderAnalysts()
				)
			);
		}
	}]);
	return Analysts;
}(_react.Component);

exports.default = Analysts;


Analysts.propTypes = {};

Analysts.defaultProps = {};

/***/ }),

/***/ "./app/modules/painel/components/analysts/analysts.styl":
/*!**************************************************************!*\
  !*** ./app/modules/painel/components/analysts/analysts.styl ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/stylus-loader??ref--6-2!./analysts.styl */ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/analysts/analysts.styl");
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

/***/ "./app/modules/painel/components/analysts/index.js":
/*!*********************************************************!*\
  !*** ./app/modules/painel/components/analysts/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Analysts = __webpack_require__(/*! ./Analysts */ "./app/modules/painel/components/analysts/Analysts.js");

var _Analysts2 = _interopRequireDefault(_Analysts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Analysts2.default;

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

var _clientCard = __webpack_require__(/*! ../../../../commons/components/client-card */ "./app/commons/components/client-card/index.js");

var _clientCard2 = _interopRequireDefault(_clientCard);

__webpack_require__(/*! ./clients.styl */ "./app/modules/painel/components/clients/clients.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clients = [{
	id: 'asdasdasd',
	name: 'Cliente Teste #1'
}, {
	id: 'asassdasd',
	name: 'Cliente Teste #2'
}];

var Clients = function (_Component) {
	(0, _inherits3.default)(Clients, _Component);

	function Clients() {
		(0, _classCallCheck3.default)(this, Clients);
		return (0, _possibleConstructorReturn3.default)(this, (Clients.__proto__ || (0, _getPrototypeOf2.default)(Clients)).apply(this, arguments));
	}

	(0, _createClass3.default)(Clients, [{
		key: 'renderClients',
		value: function renderClients() {
			return clients.map(function (client) {
				return _react2.default.createElement(_clientCard2.default, (0, _extends3.default)({ key: client.id }, client));
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'section',
				{ className: 'clients' },
				_react2.default.createElement(
					'h1',
					{ className: 'title' },
					'Cliente'
				),
				_react2.default.createElement(
					'div',
					{ className: 'list' },
					this.renderClients()
				)
			);
		}
	}]);
	return Clients;
}(_react.Component);

exports.default = Clients;


Clients.propTypes = {};

Clients.defaultProps = {};

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

var _projectCard = __webpack_require__(/*! ../../../../commons/components/project-card */ "./app/commons/components/project-card/index.js");

var _projectCard2 = _interopRequireDefault(_projectCard);

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

	function Projects() {
		(0, _classCallCheck3.default)(this, Projects);
		return (0, _possibleConstructorReturn3.default)(this, (Projects.__proto__ || (0, _getPrototypeOf2.default)(Projects)).apply(this, arguments));
	}

	(0, _createClass3.default)(Projects, [{
		key: 'renderProjects',
		value: function renderProjects() {
			return projects.map(function (project) {
				return _react2.default.createElement(_projectCard2.default, (0, _extends3.default)({ key: project.id }, project));
			});
		}
	}, {
		key: 'render',
		value: function render() {
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
					{ className: 'list' },
					this.renderProjects()
				)
			);
		}
	}]);
	return Projects;
}(_react.Component);

exports.default = Projects;


Projects.propTypes = {};

Projects.defaultProps = {};

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

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/analyst-card/analyst-card.styl":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/analyst-card/analyst-card.styl ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".analyst-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.analyst-card + .analyst-card {\n  margin-top: 15px;\n}\n.analyst-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/commons/components/brand/brand.styl":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/commons/components/brand/brand.styl ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand {\n  font-family: 'Pacifico', cursive;\n  font-size: 2.4em;\n  color: $dark-gray;\n}\n.brand.-white {\n  color: #fff;\n}\n", ""]);

// exports


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
exports.push([module.i, ".client-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.client-card + .client-card {\n  margin-top: 15px;\n}\n.client-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n", ""]);

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
exports.push([module.i, ".project-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.project-card + .project-card {\n  margin-top: 15px;\n}\n.project-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n", ""]);

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
exports.push([module.i, ".side-bar {\n  border-radius: 4px;\n  text-align: center;\n  padding-top: 45px;\n  padding-bottom: 30px;\n  position: -webkit-sticky;\n  position: sticky;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n}\n.side-bar > .user-info {\n  width: 100%;\n  text-align: center;\n  margin-top: 60px;\n}\n.side-bar > .user-info > .avatar {\n  display: block;\n  margin-bottom: 15px;\n}\n.side-bar > .user-info > .avatar > svg {\n  width: 80px;\n  height: 80px;\n}\n.side-bar > .user-info > .name {\n  color: #a6a8ad;\n  font-weight: 500;\n}\n.side-bar > img.logo {\n  width: 35px;\n  padding-bottom: 45px;\n  border-bottom: solid 1px rgba(166,168,173,0.3);\n}\n.side-bar > .navigation {\n  margin-top: 60px;\n  text-align: left;\n}\n.side-bar > .navigation > a.link {\n  display: block;\n  color: #a6a8ad;\n  padding: 15px;\n  font-size: 1em;\n}\n.side-bar > .navigation > a.link.active {\n  box-shadow: 3px 0px 0px 0px #e1a246 inset;\n  color: #000;\n  font-weight: 500;\n}\n.side-bar > .navigation > a.link > img {\n  vertical-align: middle;\n  margin-right: 10px;\n  display: inline-block;\n  width: 20px;\n}\n.side-bar > .navigation > a.link + a.link {\n  margin-top: 5px;\n}\n", ""]);

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
exports.push([module.i, ".task-card {\n  height: 120px;\n  background-color: #fff;\n  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.1);\n  border-radius: 5px;\n  padding: 15px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  cursor: pointer;\n}\n.task-card + .task-card {\n  margin-top: 15px;\n}\n.task-card > .title {\n  font-size: 1em;\n  font-weight: 400;\n}\n.task-card > .basic-infos {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n.task-card > .basic-infos > .code {\n  color: #a6a8ad;\n}\n.task-card > .basic-infos > .priority {\n  font-size: 0.8em;\n}\n.task-card > .basic-infos > .priority > img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.task-card > .basic-infos > .priority > .-hide {\n  display: none;\n}\n.task-card > .basic-infos > .priority.-high {\n  color: #cc6c67;\n}\n.task-card > .basic-infos > .priority.-low {\n  color: #3eeeb0;\n}\n.task-card > .basic-infos > .priority.-medium {\n  color: #d4f841;\n}\n.task-card:hover > .title {\n  font-weight: 700;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--6-1!./node_modules/stylus-loader/index.js??ref--6-2!./app/modules/painel/components/analysts/analysts.styl":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/stylus-loader??ref--6-2!./app/modules/painel/components/analysts/analysts.styl ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".analysts {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.analysts:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.analysts > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n", ""]);

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
exports.push([module.i, ".clients {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.clients:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.clients > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n", ""]);

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
exports.push([module.i, ".projects {\n  padding: 40px 80px;\n  overflow: auto;\n  height: calc(100vh - 3px);\n}\n.projects:after {\n  content: '';\n  display: block;\n  height: 40px;\n}\n.projects > .title {\n  font-size: 1.4em;\n  font-weight: 400;\n  margin-bottom: 60px;\n}\n", ""]);

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


/***/ })

}]);
//# sourceMappingURL=painel.chunk.js.map