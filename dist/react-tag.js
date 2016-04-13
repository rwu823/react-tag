(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactTag"] = factory(require("React"));
	else
		root["ReactTag"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _tags = __webpack_require__(3);

	var _tags2 = _interopRequireDefault(_tags);

	var _Tag = __webpack_require__(4);

	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tag = Object.create(null);
	var createTag = function createTag(tagname) {
	  return function (Compo) {
	    return function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
	      }

	      _createClass(_class, [{
	        key: 'render',
	        value: function render() {
	          return React.createElement(Compo, _extends({}, this.props, this.state, { tagName: tagname }));
	        }
	      }]);

	      return _class;
	    }(_react.Component);
	  };
	};

	_tags2.default.forEach(function (tagname) {
	  tag[tagname.charAt(0).toUpperCase() + tagname.slice(1)] = createTag(tagname)(_Tag2.default);
	});

	module.exports = tag;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * @ Reference
	 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element
	 */

	module.exports = ['img', 'iframe',

	// Content sectioning
	'address', 'article', 'footer', 'header', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup', 'nav', 'section',

	// Inline text semantics
	'dd', 'div', 'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'main', 'ol', 'p', 'pre', 'ul',

	// Image and multimedia
	'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn', 'em', 'i', 'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr',

	// Embedded content
	'embed', 'object', 'param', 'source',

	// Scripting
	'canvas', 'noscript', 'script',

	// Demarcating
	'del', 'ins',

	// Table
	'caption', 'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr',

	// Forms
	'button', 'datalist', 'fieldset', 'form', 'input', 'label', 'legend', 'meter', 'optgroup', 'option', 'output', 'progress', 'select', 'textarea',

	// Interactive elements
	'details', 'dialog', 'menu', 'menuitem', 'summary'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Tag.propTypes = {
	  css: _react.PropTypes.object,
	  style: _react.PropTypes.object,
	  show: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
	  hide: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),
	  className: _react.PropTypes.string,
	  tagName: _react.PropTypes.string
	};

	Tag.defaultProps = {
	  css: {},
	  style: {},
	  show: true,
	  hide: false,
	  className: '',
	  tagName: 'div'
	};

	function Tag(props) {
	  var css = props.css;
	  var show = props.show;
	  var style = props.style;
	  var hide = props.hide;
	  var tagName = props.tagName;
	  var className = props.className;

	  var classList = (className.trim() + ' ' + Object.keys(css).filter(function (name) {
	    return css[name];
	  }).join(' ')).trim() || null;
	  var styleList = Object.assign({}, style, {
	    display: show ? '' : 'none'
	  });

	  var extendProps = Object.assign({}, props, { style: styleList, className: classList });

	  return hide ? null : (0, _react.createElement)(tagName, extendProps);
	}

	module.exports = Tag;

/***/ }
/******/ ])
});
;