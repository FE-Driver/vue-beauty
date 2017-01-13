webpackJsonp([51,53],{

/***/ 227:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"markdown\">\n  <h1>Polyfill</h1>\n  <p>\n      vue-beauty使用了很多ES的最新语法进行开发，以下实例方法您可以直接在项目里使用。\n  </p>\n  <h2>Array</h2>\n  <ul>\n    <li>find</li>\n    <li>findIndex</li>\n    <li>values</li>\n    <li>keys</li>\n    <li>entries</li>\n    <li>includes</li>\n  </ul>\n  <h2>String</h2>\n  <ul>\n    <li>includes</li>\n    <li>startsWith</li>\n    <li>endsWith</li>\n    <li>repeat</li>\n    <li>padStart</li>\n    <li>padEnd</li>\n    <li>trimStart</li>\n    <li>trimEnd</li>\n    <li>at</li>\n  </ul>\n</div>    \n";

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(227)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ }

});