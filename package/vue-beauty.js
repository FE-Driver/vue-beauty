(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("vue-beauty", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-beauty"] = factory(require("vue"));
	else
		root["vue-beauty"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_444__) {
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
/******/ 	__webpack_require__.p = "/package/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _affix = __webpack_require__(88);

	var _affix2 = _interopRequireDefault(_affix);

	var _alert = __webpack_require__(93);

	var _alert2 = _interopRequireDefault(_alert);

	var _backTop = __webpack_require__(97);

	var _backTop2 = _interopRequireDefault(_backTop);

	var _badge = __webpack_require__(111);

	var _badge2 = _interopRequireDefault(_badge);

	var _breadcrumb = __webpack_require__(115);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	var _button = __webpack_require__(122);

	var _button2 = _interopRequireDefault(_button);

	var _card = __webpack_require__(151);

	var _card2 = _interopRequireDefault(_card);

	var _carousel = __webpack_require__(155);

	var _carousel2 = _interopRequireDefault(_carousel);

	var _cascader = __webpack_require__(166);

	var _cascader2 = _interopRequireDefault(_cascader);

	var _checkbox = __webpack_require__(215);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _collapse = __webpack_require__(222);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _datatable = __webpack_require__(229);

	var _datatable2 = _interopRequireDefault(_datatable);

	var _datePicker = __webpack_require__(273);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _form = __webpack_require__(282);

	var _form2 = _interopRequireDefault(_form);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	var _input = __webpack_require__(321);

	var _input2 = _interopRequireDefault(_input);

	var _inputNumber = __webpack_require__(325);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	var _layout = __webpack_require__(313);

	var _menu = __webpack_require__(329);

	var _menu2 = _interopRequireDefault(_menu);

	var _navMenu = __webpack_require__(342);

	var _navMenu2 = _interopRequireDefault(_navMenu);

	var _modal = __webpack_require__(345);

	var _modal2 = _interopRequireDefault(_modal);

	var _multiselect = __webpack_require__(354);

	var _multiselect2 = _interopRequireDefault(_multiselect);

	var _pagination = __webpack_require__(234);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _popconfirm = __webpack_require__(367);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	var _popover = __webpack_require__(374);

	var _popover2 = _interopRequireDefault(_popover);

	var _progress = __webpack_require__(375);

	var _queueAnim = __webpack_require__(382);

	var _queueAnim2 = _interopRequireDefault(_queueAnim);

	var _radio = __webpack_require__(264);

	var _radio2 = _interopRequireDefault(_radio);

	var _rate = __webpack_require__(392);

	var _rate2 = _interopRequireDefault(_rate);

	var _select = __webpack_require__(239);

	var _select2 = _interopRequireDefault(_select);

	var _slider = __webpack_require__(396);

	var _slider2 = _interopRequireDefault(_slider);

	var _spin = __webpack_require__(253);

	var _spin2 = _interopRequireDefault(_spin);

	var _steps = __webpack_require__(417);

	var _steps2 = _interopRequireDefault(_steps);

	var _switch2 = __webpack_require__(424);

	var _switch3 = _interopRequireDefault(_switch2);

	var _tabs = __webpack_require__(428);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _tag = __webpack_require__(435);

	var _tag2 = _interopRequireDefault(_tag);

	var _timeline = __webpack_require__(441);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _timePicker = __webpack_require__(449);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	var _transfer = __webpack_require__(453);

	var _transfer2 = _interopRequireDefault(_transfer);

	var _tree = __webpack_require__(474);

	var _tree2 = _interopRequireDefault(_tree);

	var _treeSelect = __webpack_require__(478);

	var _treeSelect2 = _interopRequireDefault(_treeSelect);

	var _upload = __webpack_require__(486);

	var _upload2 = _interopRequireDefault(_upload);

	var _message = __webpack_require__(499);

	var _message2 = _interopRequireDefault(_message);

	var _notification = __webpack_require__(507);

	var _notification2 = _interopRequireDefault(_notification);

	var _morePanel = __webpack_require__(515);

	var _morePanel2 = _interopRequireDefault(_morePanel);

	var _tooltip = __webpack_require__(407);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var compnents = {
	    affix: _affix2.default,
	    alert: _alert2.default,
	    backTop: _backTop2.default,
	    badge: _badge2.default,
	    breadcrumbs: _breadcrumb2.default,
	    breadcrumb: _breadcrumb2.default.Breadcrumb,
	    button: _button2.default,
	    buttonGroup: _button2.default.Group,
	    card: _card2.default,
	    carousel: _carousel2.default,
	    cascader: _cascader2.default,
	    checkbox: _checkbox2.default,
	    checkboxGroup: _checkbox2.default.Group,
	    collapse: _collapse2.default,
	    collapseItem: _collapse2.default.Item,
	    datatable: _datatable2.default,
	    datepicker: _datePicker2.default,
	    form: _form2.default,
	    formItem: _form2.default.Item,
	    icon: _iconfont2.default,
	    input: _input2.default,
	    inputNumber: _inputNumber2.default,
	    col: _layout.vCol,
	    row: _layout.vRow,
	    menu: _menu2.default,
	    subMenu: _menu2.default.subMenu,
	    menuItemGroup: _menu2.default.ItemGroup,
	    menuItem: _menu2.default.Item,
	    navMenu: _navMenu2.default,
	    modal: _modal2.default,
	    multiselect: _multiselect2.default,
	    pagination: _pagination2.default,
	    popconfirm: _popconfirm2.default,
	    popover: _popover2.default,
	    progressLine: _progress.vProgressLine,
	    progressCircle: _progress.vProgressCircle,
	    queueAnim: _queueAnim2.default,
	    radio: _radio2.default,
	    radioGroup: _radio2.default.Group,
	    rate: _rate2.default,
	    select: _select2.default,
	    slider: _slider2.default,
	    spin: _spin2.default,
	    steps: _steps2.default,
	    step: _steps2.default.Step,
	    _switch: _switch3.default,
	    tabs: _tabs2.default,
	    tabPane: _tabs2.default.TabPane,
	    tag: _tag2.default,
	    timeline: _timeline2.default,
	    timelineItem: _timeline2.default.Item,
	    timePicker: _timePicker2.default,
	    transfer: _transfer2.default,
	    tree: _tree2.default,
	    treeSelect: _treeSelect2.default,
	    upload: _upload2.default,
	    message: _message2.default,
	    notification: _notification2.default,
	    morePanel: _morePanel2.default,
	    tooltip: _tooltip2.default
	};

	_message2.default.install = function (Vue) {
	    Vue.$message = Vue.prototype.$message = _message2.default;
	};

	_notification2.default.install = function (Vue) {
	    Vue.$notification = Vue.prototype.$notification = _notification2.default;
	};

	var _loop = function _loop(k) {
	    if (!compnents[k].install && compnents[k].name) {
	        compnents[k].install = function (Vue) {
	            Vue.component(compnents[k].name, compnents[k]);
	        };
	    }
	};

	for (var k in compnents) {
	    _loop(k);
	}

	var install = function install(Vue) {
	    if (install.installed) return;

	    for (var _k in compnents) {
	        if (compnents[_k].install) {
	            Vue.use(compnents[_k]);
	        }
	    }
	};

	if (typeof window !== 'undefined' && window.Vue) {
	    install(window.Vue);
	};

	module.exports = _extends({
	    version: '0.0.1',
	    install: install
	}, compnents);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _affix = __webpack_require__(89);

	var _affix2 = _interopRequireDefault(_affix);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _affix2.default;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(90)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/affix/affix.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(92)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-dca75a6e/affix.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _func = __webpack_require__(91);

	exports.default = {
	    name: 'v-affix',
	    props: {
	        offsetTop: Number,
	        offsetBottom: Number
	    },
	    data: function data() {
	        return {
	            prefix: 'ant-affix',
	            isTop: true,
	            isAffix: false
	        };
	    },
	    ready: function ready() {
	        if (this.offsetTop === undefined) {
	            if (this.offsetBottom === undefined) {
	                this.offsetTop = 0;
	            } else {
	                this.isTop = false;
	            }
	        }
	        document.addEventListener('scroll', this.handleScroll);
	        document.addEventListener('resize', this.handleScroll);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('scroll', this.handleScroll);
	        document.removeEventListener('resize', this.handleScroll);
	    },
	    computed: {
	        placeholderStyle: function placeholderStyle() {
	            return this.isAffix ? {
	                width: this.$el.offsetWidth + 'px',
	                height: this.$el.offsetHeight + 'px'
	            } : null;
	        },
	        affixStyle: function affixStyle() {
	            var style = null;
	            if (this.isAffix) {
	                style = {
	                    position: 'fixed',
	                    left: (0, _func.getOffset)(this.$el).left + 'px',
	                    width: this.$el.offsetWidth + 'px'
	                };
	                if (this.isTop) {
	                    style.top = this.offsetTop + 'px';
	                } else {
	                    style.bottom = this.offsetBottom + 'px';
	                }
	            }
	            return style;
	        }
	    },
	    watch: {
	        isAffix: function isAffix(val) {
	            this.$emit('change', val);
	        }
	    },
	    methods: {
	        handleScroll: function handleScroll() {
	            var isAffix = false;
	            var scrollTop = (0, _func.getScroll)(true);
	            var fixedNode = this.$el.children[0];
	            var elemOffset = this.$el.getBoundingClientRect();

	            if (this.isTop) {
	                if (elemOffset.top < this.offsetTop) {
	                    isAffix = true;
	                }
	            } else {
	                var clientH = document.documentElement.clientHeight;
	                if (clientH - elemOffset.bottom < this.offsetBottom) {
	                    isAffix = true;
	                }
	            }
	            this.isAffix = isAffix;
	        }
	    }
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getScroll = getScroll;
	exports.getOffset = getOffset;
	exports.closeByElement = closeByElement;
	function getScroll(top) {
	  var ret = window['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = window.document;

	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}

	function getOffset(element) {
	  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

	  var el_rect = element.getBoundingClientRect();
	  var container_rect = container.getBoundingClientRect();
	  var clientTop = element.clientTop || container.clientTop || 0;
	  var clientLeft = element.clientLeft || container.clientLeft || 0;
	  var top = void 0,
	      left = void 0;

	  if (container === document.body) {
	    top = getScroll(true);
	    left = getScroll();
	  } else {
	    top = container.scrollTop - container_rect.top;
	    left = container.scrollLeft - container_rect.left;
	  }

	  return {
	    top: el_rect.top + top - clientTop,
	    left: el_rect.left + left - clientLeft,
	    right: el_rect.right + left - clientLeft,
	    bottom: el_rect.bottom + top - clientTop
	  };
	}

	var closest = function closest(elem, fn) {
	  return elem && elem !== document && (fn(elem) ? true : closest(elem.parentNode, fn));
	};
	function closeByElement(target, elem) {
	  if (!(elem instanceof Array)) {
	    elem = [elem];
	  }
	  return closest(target, function (el) {
	    return elem.some(function (d) {
	      return el === d;
	    });
	  });
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :style=\"placeholderStyle\">\n    <div :class=\"{[prefix]: isAffix}\" :style=\"affixStyle\">\n        <slot></slot>\n    </div>\n</div>\n\n";

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _alert = __webpack_require__(94);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _alert2.default;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(95)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/alert/alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(96)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-298c1ce1/alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 95 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-alert',
	  props: {
	    type: {
	      type: String,
	      require: true,
	      default: 'info'
	    },
	    closable: {
	      type: Boolean,
	      default: false
	    },
	    closeText: {
	      type: String,
	      require: false
	    },
	    message: {
	      type: String,
	      require: true
	    },
	    description: {
	      type: String,
	      require: false
	    },
	    showIcon: {
	      type: Boolean,
	      default: false
	    },
	    onClose: {
	      type: Function,
	      require: false,
	      default: function _default() {}
	    }
	  },
	  data: function data() {
	    return {
	      iconClass: ''
	    };
	  },

	  computed: {
	    iconClass: function iconClass() {
	      var iconClass = '';
	      switch (this.type) {
	        case 'success':
	          iconClass = 'check-circle';
	          break;
	        case 'info':
	          iconClass = 'info-circle';
	          break;
	        case 'warning':
	          iconClass = 'exclamation-circle';
	          break;
	        case 'error':
	          iconClass = 'cross-circle';
	          break;
	      }
	      if (this.description) {
	        iconClass += '-o';
	      }
	      return iconClass;
	    }
	  },
	  methods: {
	    handleClose: function handleClose(e) {
	      this.$remove();
	      this.onClose();
	    }
	  }
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	module.exports = "\n\n<div\n  class=\"ant-alert\"\n  :class=\"['ant-alert-'+type,{'ant-alert-with-description':description, 'ant-alert-no-icon':!showIcon}]\"\n  transition=\"bounce\"\n>\n  <i\n    class=\"ant-alert-icon anticon\"\n    :class=\"'anticon-'+iconClass\"\n    v-if=\"showIcon\"></i>\n  <span class=\"ant-alert-message\">{{message}}</span>\n  <span class=\"ant-alert-description\">{{description}}</span>\n  <a\n    class=\"ant-alert-close-icon\"\n    v-if=\"closable\"\n    @click=\"handleClose\">\n    {{closeText}}\n    <i class=\"anticon anticon-cross\" v-if=\"!closeText\"></i>\n  </a>\n</div>\n\n";

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _backTop = __webpack_require__(98);

	var _backTop2 = _interopRequireDefault(_backTop);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _backTop2.default;

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/backTop/backTop.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2b3b9676/backTop.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	exports.default = {
	    name: 'v-back-top',
	    data: function data() {
	        return {
	            prefix: 'ant-back-top',
	            visible: false
	        };
	    },
	    props: (0, _utils.defaultProps)({
	        visibilityHeight: 400,
	        onClick: function onClick() {}
	    }),
	    created: function created() {
	        window.addEventListener('scroll', this.handleScroll);
	    },

	    methods: {
	        handleScroll: function handleScroll() {
	            var scrollTop = this.getScroll(window, true);
	            this.visible = scrollTop > this.visibilityHeight;
	        },
	        getScroll: function getScroll(w, top) {
	            var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	            var method = 'scroll' + (top ? 'Top' : 'Left');
	            if (typeof ret !== 'number') {
	                var d = w.document;

	                ret = d.documentElement[method];
	                if (typeof ret !== 'number') {
	                    ret = d.body[method];
	                }
	            }
	            return ret;
	        },
	        scrollToTop: function scrollToTop() {
	            this.setScrollTop(0);
	            this.onClick();
	        },
	        setScrollTop: function setScrollTop(value) {
	            document.body.scrollTop = value;
	            document.documentElement.scrollTop = value;
	        }
	    }
	};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.slotMixin = exports.KeyCode = exports.cx = undefined;

	var _dom = __webpack_require__(101);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

	var _props = __webpack_require__(104);

	Object.keys(_props).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _props[key];
	    }
	  });
	});

	var _event = __webpack_require__(105);

	Object.keys(_event).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _event[key];
	    }
	  });
	});

	var _guid = __webpack_require__(106);

	Object.keys(_guid).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _guid[key];
	    }
	  });
	});
	exports.getPlainObject = getPlainObject;

	var _classnames = __webpack_require__(107);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _KeyCode2 = __webpack_require__(108);

	var _KeyCode3 = _interopRequireDefault(_KeyCode2);

	var _slotMixin2 = __webpack_require__(109);

	var _slotMixin3 = _interopRequireDefault(_slotMixin2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cx = exports.cx = _classnames2.default;
	var KeyCode = exports.KeyCode = _KeyCode3.default;
	var slotMixin = exports.slotMixin = _slotMixin3.default;

	function getPlainObject(vueObject) {
	  return JSON.parse(JSON.stringify(vueObject));
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.addStyle = addStyle;
	exports.insertBefore = insertBefore;
	exports.insertAfter = insertAfter;
	exports.contains = contains;
	exports.getTrustSlotNode = getTrustSlotNode;
	exports.isShow = isShow;

	var _env = __webpack_require__(102);

	var _lang = __webpack_require__(103);

	function setClass(el, cls) {
	  if (_env.isIE9 && el.hasOwnProperty('className')) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}

	function addClass(el, cls) {
	  if (el.classList) {
	    var clsArr = cls.split(' ');
	    clsArr.map(function (cl) {
	      return el.classList.add(cl);
	    });
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}

	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}

	function addStyle(el, clsObj) {
	  Object.keys(clsObj).forEach(function (name) {
	    el.style[(0, _lang.camelize)(name)] = clsObj[name];
	  });
	}

	function insertBefore(el, target) {
	  target.parentNode.insertBefore(el, target);
	}

	function insertAfter(el, target) {
	  if (target.nextSibling) {
	    insertBefore(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}

	function contains(root, node) {
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	  return false;
	}

	function getTrustSlotNode(node) {
	  var childNode = node.nextSibling;
	  if (childNode.nodeType !== 1) {
	    return getTrustSlotNode(childNode);
	  }
	  return childNode;
	}

	function isShow(node) {
	  return getComputedStyle(node).getPropertyValue('display') !== 'none';
	}

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

	var isIE9 = exports.isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

/***/ },
/* 103 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.camelcaseToHyphen = camelcaseToHyphen;
	exports.camelize = camelize;
	exports.strToObj = strToObj;
	exports.throttle = throttle;
	function camelcaseToHyphen(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	var camelizeRE = /-(\w)/g;
	var toUpper = function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	};

	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}

	function strToObj(str) {
	  var strArr = str.split(' ');
	  var obj = {};
	  strArr.forEach(function (item) {
	    obj[item] = 1;
	  });
	  return obj;
	}

	function throttle(func, wait, options) {
	  var context = void 0,
	      args = void 0,
	      result = void 0;
	  var timeout = null;
	  var previous = 0;
	  if (!options) options = {};
	  var later = function later() {
	    previous = options.leading === false ? 0 : Date.now();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;
	  };
	  return function () {
	    var now = Date.now();
	    if (!previous && options.leading === false) previous = now;
	    var remaining = wait - (now - previous);
	    context = this;
	    args = arguments;
	    if (remaining <= 0 || remaining > wait) {
	      if (timeout) {
	        clearTimeout(timeout);
	        timeout = null;
	      }
	      previous = now;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    } else if (!timeout && options.trailing !== false) {
	      timeout = setTimeout(later, remaining);
	    }
	    return result;
	  };
	}

/***/ },
/* 104 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultProps = defaultProps;
	exports.oneOfType = oneOfType;
	exports.oneOf = oneOf;
	var toString = Object.prototype.toString;

	if (!String.name) String.name = "String";
	if (!Number.name) Number.name = "Number";
	if (!Boolean.name) Boolean.name = "Boolean";
	if (!Object.name) Object.name = "Object";
	if (!Array.name) Array.name = "Array";

	function defaultProps(props) {
	  for (var i in props) {
	    if (props.hasOwnProperty(i)) {
	      var _ret = function () {
	        var defaultValue = props[i];

	        if (defaultValue && defaultValue.name && window[defaultValue.name] === defaultValue) {
	          props[i] = {
	            type: defaultValue,
	            default: null
	          };
	          return "continue";
	        }

	        var type = toString.call(defaultValue).replace('[object ', '').replace(']', '');

	        if (type === 'Object') {
	          if (defaultValue.type != null || defaultValue.default != null || defaultValue.validator != null || defaultValue.twoWay != null || defaultValue.required != null) {
	            return "continue";
	          }
	        }

	        if (type === 'Array' || type === 'Object') {
	          props[i] = {
	            type: window[type],
	            default: function _default() {
	              return defaultValue;
	            }
	          };
	          return "continue";
	        }

	        props[i] = {
	          type: window[type],
	          default: defaultValue
	        };
	      }();

	      if (_ret === "continue") continue;
	    }
	  }
	  return props;
	}

	function oneOfType(validList, defaultValue) {
	  var validaObj = {};

	  validaObj.default = defaultValue;
	  validaObj.validator = function (value) {
	    if (value == null) return true;

	    for (var j = 0; j < validList.length; j++) {
	      var currentValid = validList[j];
	      var validName = void 0;
	      if (typeof currentValid === 'string') {
	        validName = currentValid;
	      } else {
	        validName = currentValid.name;
	      }
	      if (toString.call(value).indexOf(validName) > -1) {
	        return true;
	      }
	    }
	    return false;
	  };

	  return validaObj;
	}

	function oneOf(validList, defaultValue) {
	  var validaObj = {};

	  validaObj.default = defaultValue;
	  validaObj.validator = function (value) {
	    if (value == null) return true;

	    for (var j = 0; j < validList.length; j++) {
	      if (value === validList[j]) {
	        return true;
	      }
	    }
	    return false;
	  };

	  return validaObj;
	}

	var any = exports.any = {
	  validator: function validator(value) {
	    return true;
	  }
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addEventListener = addEventListener;
	exports.addEndEventListener = addEndEventListener;
	exports.removeEndEventListener = removeEndEventListener;

	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },

	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};

	var endEvents = [];

	var detectEvents = function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	};

	if (typeof window !== 'undefined') {
	  detectEvents();
	}

	function addEventListener(target, eventName, eventListener) {
	  if (target.addEventListener) {
	    target.addEventListener(eventName, eventListener, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventName, eventListener, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventName, eventListener);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventName, eventListener);
	      }
	    };
	  }
	}

	var removeEventListener = function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	};

	function addEndEventListener(node, eventListener) {
	  if (endEvents.length === 0) {
	    window.setTimeout(eventListener, 0);
	    return;
	  }
	  endEvents.forEach(function (endEvent) {
	    addEventListener(node, endEvent, eventListener);
	  });
	}

	function removeEndEventListener(node, eventListener) {
	  if (endEvents.length === 0) {
	    return;
	  }
	  endEvents.forEach(function (endEvent) {
	    removeEventListener(node, endEvent, eventListener);
	  });
	}

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.guid = guid;
	var seed = 0;

	function guid() {
	  return Date.now() + '_' + seed++;
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});


	var KeyCode = {
	  MAC_ENTER: 3,

	  BACKSPACE: 8,

	  TAB: 9,

	  NUM_CENTER: 12,
	  ENTER: 13,

	  SHIFT: 16,

	  CTRL: 17,

	  ALT: 18,

	  PAUSE: 19,

	  CAPS_LOCK: 20,

	  ESC: 27,

	  SPACE: 32,

	  PAGE_UP: 33,
	  PAGE_DOWN: 34,
	  END: 35,
	  HOME: 36,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  PRINT_SCREEN: 44,

	  INSERT: 45,
	  DELETE: 46,
	  ZERO: 48,

	  ONE: 49,

	  TWO: 50,

	  THREE: 51,

	  FOUR: 52,

	  FIVE: 53,

	  SIX: 54,

	  SEVEN: 55,

	  EIGHT: 56,

	  NINE: 57,

	  QUESTION_MARK: 63,
	  A: 65,

	  B: 66,

	  C: 67,

	  D: 68,

	  E: 69,

	  F: 70,

	  G: 71,

	  H: 72,

	  I: 73,

	  J: 74,

	  K: 75,

	  L: 76,

	  M: 77,

	  N: 78,

	  O: 79,

	  P: 80,

	  Q: 81,

	  R: 82,

	  S: 83,

	  T: 84,

	  U: 85,

	  V: 86,

	  W: 87,

	  X: 88,

	  Y: 89,

	  Z: 90,

	  META: 91,
	  WIN_KEY_RIGHT: 92,

	  CONTEXT_MENU: 93,

	  NUM_ZERO: 96,

	  NUM_ONE: 97,

	  NUM_TWO: 98,

	  NUM_THREE: 99,

	  NUM_FOUR: 100,

	  NUM_FIVE: 101,

	  NUM_SIX: 102,

	  NUM_SEVEN: 103,

	  NUM_EIGHT: 104,

	  NUM_NINE: 105,

	  NUM_MULTIPLY: 106,

	  NUM_PLUS: 107,

	  NUM_MINUS: 109,

	  NUM_PERIOD: 110,

	  NUM_DIVISION: 111,

	  F1: 112,

	  F2: 113,

	  F3: 114,

	  F4: 115,

	  F5: 116,

	  F6: 117,

	  F7: 118,

	  F8: 119,

	  F9: 120,

	  F10: 121,

	  F11: 122,

	  F12: 123,

	  NUMLOCK: 144,

	  SEMICOLON: 186,
	  DASH: 189,
	  EQUALS: 187,
	  COMMA: 188,
	  PERIOD: 190,
	  SLASH: 191,
	  APOSTROPHE: 192,
	  SINGLE_QUOTE: 222,
	  OPEN_SQUARE_BRACKET: 219,
	  BACKSLASH: 220,
	  CLOSE_SQUARE_BRACKET: 221,
	  WIN_KEY: 224,

	  MAC_FF_META: 224,
	  WIN_IME: 229
	};

	KeyCode.isTextModifyingKeyEvent = function (e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey || keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }

	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};

	KeyCode.isCharacterKey = function (keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }

	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }

	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }

	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }

	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};

	exports.default = KeyCode;

/***/ },
/* 109 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function getSlotNode(el) {
	  if (!el) return null;
	  if (el.nodeType === 1 && el.getAttribute('slot') === 'trigger') {
	    return el;
	  }
	  return getSlotNode(el.nextSibling);
	}

	exports.default = {
	  ready: function ready() {
	    this._bindTriggerEvent();
	  },


	  methods: {
	    _getTriggerTarget: function _getTriggerTarget() {
	      var el = getSlotNode(this.$el);

	      var els = void 0;
	      if (el.getAttribute('slot') === 'trigger') {
	        els = [el];
	      } else {
	        els = getSlotNode(this.$el).querySelectorAll('[slot="trigger"]');
	      }

	      var len = els.length;
	      if (len) {
	        var currentWrap = els[len - 1];
	        var children = currentWrap.children;
	        if (children && children.length === 1) {
	          return children[children.length - 1];
	        } else {
	          return currentWrap;
	        }
	      }
	      return null;
	    },
	    _bindTriggerEvent: function _bindTriggerEvent() {
	      var el = this._getTriggerTarget();
	      if (el) {
	        el.addEventListener('blur', this._onBlur.bind(this), false);
	        el.addEventListener('click', this._onClick.bind(this), false);
	        el.addEventListener('focus', this._onFocus.bind(this), false);
	        el.addEventListener('mousedown', this._onMouseDown.bind(this), false);
	        el.addEventListener('mouseenter', this._onMouseEnter.bind(this), false);
	        el.addEventListener('mouseleave', this._onMouseLeave.bind(this), false);
	        el.addEventListener('touchstart', this._onTouchStart.bind(this), false);
	      }
	    }
	  }
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ant-back-top\" v-show=\"visible\" @click='scrollToTop'>\n    <slot>\n        <div class=\"ant-back-top-content\">\n            <i class=\"ant-back-top-icon anticon anticon-to-top\"></i>\n        </div>\n    </slot>\n</div>\n";

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _badge = __webpack_require__(112);

	var _badge2 = _interopRequireDefault(_badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _badge2.default;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(113)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/badge/badge.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(114)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b1264da2/badge.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 113 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-badge',
	  props: {
	    count: {
	      type: Number,
	      default: 1
	    },
	    overflowCount: {
	      type: Number,
	      default: 99
	    },
	    dot: {
	      type: Boolean,
	      default: false
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    styles: Object
	  },
	  ready: function ready() {
	    if (!this._slotContents) {
	      this.slot = false;
	    }
	  },

	  computed: {
	    num: function num() {
	      var num = void 0;
	      if (this.count > this.overflowCount) {
	        num = this.overflowCount + '+';
	      } else if (!this.dot) {
	        num = this.count;
	      }
	      return num;
	    }
	  },
	  data: function data() {
	    return {
	      slot: true
	    };
	  }
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "\n\n<span class=\"ant-badge\" :class=\"{'ant-badge-not-a-wrapper':!slot}\">\n  <slot></slot>\n  <sup class=\"ant-scroll-number\" :class=\"[ dot ? 'ant-badge-dot':'ant-badge-count']\" :style=\"styles\" v-if=\"show && count> 0\" transition=\"badge\">{{num}}</sup>\n</span>\n\n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _breadcrumbs = __webpack_require__(116);

	var _breadcrumbs2 = _interopRequireDefault(_breadcrumbs);

	var _breadcrumb = __webpack_require__(119);

	var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_breadcrumbs2.default.Breadcrumb = _breadcrumb2.default;

	exports.default = _breadcrumbs2.default;

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(117)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/breadcrumb/breadcrumbs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(118)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1ee0517c/breadcrumbs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 117 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'v-breadcrumbs',
	    computed: {
	        wrapClasses: function wrapClasses() {
	            return ['ant-breadcrumb'];
	        }
	    }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(120)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/breadcrumb/breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(121)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5bb76087/breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'v-breadcrumb',
	    props: {
	        name: String,
	        href: String,
	        separator: String,
	        icon: String
	    }
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = "\n<span>\n    <span class=\"ant-breadcrumb-link\" v-if=\"!(typeof this.href==='string')\"><i :class=\"'anticon anticon-'+icon\"></i>{{name}}</span>\n    <span class=\"ant-breadcrumb-link\" v-else><a href=\"{{href}}\"><i :class=\"'anticon anticon-'+icon\"></i>{{name}}</a></span>\n    <span class=\"ant-breadcrumb-separator\">{{separator?separator:'/'}}</span>\n</span>\n";

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _button = __webpack_require__(123);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(126);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_button2.default.Group = _buttonGroup2.default;

	exports.default = _button2.default;

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(124)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/button/button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(125)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5c5cb3a7/button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 124 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-button',
	  data: function data() {
	    return {
	      clicked: false,
	      clickTimer: null
	    };
	  },
	  props: {
	    type: {
	      type: String,
	      coerce: function coerce(val) {
	        return 'ant-btn-' + val;
	      }
	    },
	    htmlType: {
	      type: String,
	      default: 'button'
	    },
	    icon: String,
	    shape: {
	      type: String,
	      coerce: function coerce(val) {
	        return 'ant-btn-' + val;
	      }
	    },
	    size: {
	      type: String,
	      coerce: function coerce(val) {
	        var sizeClass = void 0;
	        switch (val) {
	          case 'large':
	            sizeClass = 'ant-btn-lg';
	            break;
	          case 'small':
	            sizeClass = 'ant-btn-sm';
	            break;
	          default:
	            sizeClass = '';
	        }
	        return sizeClass;
	      }
	    },
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  methods: {
	    _click: function _click() {
	      var _this = this;

	      this.clicked = true;

	      if (this.clickTimer) clearTimeout(this.clickTimer);

	      this.clickTimer = setTimeout(function () {
	        return _this.clicked = false;
	      }, 500);
	    }
	  }
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	module.exports = "\n<button :type=\"htmlType\" :class=\"['ant-btn', type, size, shape, {'ant-btn-loading': loading}, {'ant-btn-clicked': clicked}]\" disabled=\"{{disabled}}\" @click=\"_click\">\n  <i class=\"anticon anticon-spin anticon-loading\" v-if=\"loading\"></i>\n  <i class=\"anticon anticon-{{icon}}\" v-if=\"icon\"></i>\n  <slot></slot>\n</button>\n";

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(127)
	__vue_script__ = __webpack_require__(130)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/button/buttonGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(150)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4ce7c1c8/buttonGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(129)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./buttonGroup.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./buttonGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(87)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-button-group',
	  data: function data() {
	    return {
	      prefix: 'ant-btn-group'
	    };
	  },
	  props: {
	    size: String
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var size = { small: 'sm', large: 'lg' }[this.size];

	      return [this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-' + size, size)];
	    }
	  }
	};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(132);

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

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(133), __esModule: true };

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(134);
	var $Object = __webpack_require__(137).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(135);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(145), 'Object', {defineProperty: __webpack_require__(141).f});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(136)
	  , core      = __webpack_require__(137)
	  , ctx       = __webpack_require__(138)
	  , hide      = __webpack_require__(140)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 136 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 137 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(139);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(141)
	  , createDesc = __webpack_require__(149);
	module.exports = __webpack_require__(145) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(142)
	  , IE8_DOM_DEFINE = __webpack_require__(144)
	  , toPrimitive    = __webpack_require__(148)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(145) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(143);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(145) && !__webpack_require__(146)(function(){
	  return Object.defineProperty(__webpack_require__(147)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(146)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 146 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(143)
	  , document = __webpack_require__(136).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(143);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"wrapClasses\" >\n  <slot></slot>\n</div>\n\n";

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _card = __webpack_require__(152);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _card2.default;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(153)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/card/card.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(154)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-288599a7/card.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-card',
	  data: function data() {
	    return {
	      prefix: 'ant-card',
	      extra: false
	    };
	  },
	  props: {
	    title: String,
	    bordered: {
	      type: Boolean,
	      default: true
	    },
	    bodyStyle: Object
	  },
	  ready: function ready() {
	    if (this._slotContents && this._slotContents.extra) {
	      this.extra = true;
	    }
	  }
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-card\" :class=\"{'ant-card-bordered': bordered}\">\n  <div class=\"ant-card-head\" v-if=\"title\"><h3 class=\"ant-card-head-title\">{{title}}</h3></div>\n  <template v-if=\"extra\">\n    <div class=\"ant-card-extra\">\n      <slot name=\"extra\"></slot>\n    </div>\n  </template>\n  <div class=\"ant-card-body\" :style=\"bodyStyle\"><slot></slot></div>\n</div>\n\n";

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _carousel = __webpack_require__(156);

	var _carousel2 = _interopRequireDefault(_carousel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _carousel2.default;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(157)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/carousel/carousel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(165)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-05fdac27/carousel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _InnerSlider = __webpack_require__(158);

	var _InnerSlider2 = _interopRequireDefault(_InnerSlider);

	var _props = __webpack_require__(163);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	if (typeof window !== 'undefined') {
	    var matchMediaPolyfill = function matchMediaPolyfill() {
	        return {
	            matches: false,
	            addListener: function addListener() {},
	            removeListener: function removeListener() {}
	        };
	    };
	    window.matchMedia = window.matchMedia || matchMediaPolyfill;
	}
	exports.default = {
	    name: 'v-carousel',
	    props: _props2.default,
	    components: { InnerSlider: _InnerSlider2.default },
	    data: function data() {
	        return {};
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            return [this.prefixCls, _defineProperty({}, this.prefixCls + '-vertical', !!this.vertical)];
	        }
	    }
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(159)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/carousel/InnerSlider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(164)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-15ce5740/InnerSlider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	var _Track = __webpack_require__(160);

	var _Track2 = _interopRequireDefault(_Track);

	var _props = __webpack_require__(163);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var checkSpecKeys = function checkSpecKeys(spec, keysArray) {
	    return keysArray.reduce(function (value, key) {
	        return value && spec.hasOwnProperty(key);
	    }, true) ? null : console.error('Keys Missing', spec);
	};

	var getTrackCSS = function getTrackCSS(spec) {
	    checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

	    var trackWidth = void 0;

	    if (spec.variableWidth) {
	        trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth + 'px';
	    } else if (spec.centerMode) {
	        trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth + 'px';
	    } else {
	        trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth + 'px';
	    }

	    var style = {
	        opacity: 1,
	        width: trackWidth,
	        WebkitTransform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
	        transform: 'translate3d(' + spec.left + 'px, 0px, 0px)',
	        transition: '',
	        WebkitTransition: '',
	        msTransform: 'translateX(' + spec.left + 'px)'
	    };

	    if (!window.addEventListener && window.attachEvent) {
	        style.marginLeft = spec.left + 'px';
	    }

	    return style;
	};

	var getTrackAnimateCSS = function getTrackAnimateCSS(spec) {
	    checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth', 'speed', 'cssEase']);

	    var style = getTrackCSS(spec);

	    style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
	    style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
	    return style;
	};

	var getTrackLeft = function getTrackLeft(spec) {
	    checkSpecKeys(spec, ['slideIndex', 'trackRef', 'infinite', 'slideCount', 'slidesToShow', 'slidesToScroll', 'slideWidth', 'listWidth', 'variableWidth']);

	    var slideOffset = 0;
	    var targetLeft = void 0;
	    var targetSlide = void 0;

	    if (spec.fade) {
	        return 0;
	    }

	    if (spec.infinite) {
	        if (spec.slideCount > spec.slidesToShow) {
	            slideOffset = spec.slideWidth * spec.slidesToShow * -1;
	        }
	        if (spec.slideCount % spec.slidesToScroll !== 0) {
	            if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
	                if (spec.slideIndex > spec.slideCount) {
	                    slideOffset = (spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth * -1;
	                } else {
	                    slideOffset = spec.slideCount % spec.slidesToScroll * spec.slideWidth * -1;
	                }
	            }
	        }
	    }

	    if (spec.centerMode) {
	        if (spec.infinite) {
	            slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	        } else {
	            slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
	        }
	    }

	    targetLeft = spec.slideIndex * spec.slideWidth * -1 + slideOffset;

	    if (spec.variableWidth === true) {
	        var targetSlideIndex = void 0;
	        if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
	            targetSlide = spec.trackRef.childNodes[spec.slideIndex];
	        } else {
	            targetSlideIndex = spec.slideIndex + spec.slidesToShow;
	            targetSlide = spec.trackRef.childNodes[targetSlideIndex];
	        }
	        targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	        if (spec.centerMode === true) {
	            if (spec.infinite === false) {
	                targetSlide = spec.trackRef.children[spec.slideIndex];
	            } else {
	                targetSlide = spec.trackRef.children[spec.slideIndex + spec.slidesToShow + 1];
	            }

	            targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
	            targetLeft += (spec.listWidth - targetSlide.offsetWidth) / 2;
	        }
	    }

	    return targetLeft;
	};

	exports.default = {
	    props: _props2.default,
	    components: { vTrack: _Track2.default },
	    data: function data() {
	        return {
	            animating: false,
	            dragging: false,
	            autoPlayTimer: null,
	            currentDirection: 0,
	            currentLeft: null,
	            currentSlide: 0,
	            direction: 1,
	            slideCount: null,
	            slideWidth: null,
	            swipeLeft: null,
	            touchObject: {
	                startX: 0,
	                startY: 0,
	                curX: 0,
	                curY: 0
	            },
	            lazyLoadedList: [],
	            mounted: false,
	            initialized: false,
	            edgeDragged: false,
	            swiped: false,
	            trackStyle: {},
	            trackWidth: 0
	        };
	    },


	    computed: {
	        wrapClasses: function wrapClasses() {
	            return ['slick-initialized', 'slick-slider', _defineProperty({}, '' + this.className, !!this.className)];
	        },
	        dotsArray: function dotsArray() {
	            if (this.dots) {
	                var dotCount = Math.ceil(this.slideCount / this.slidesToScroll);
	                return Array.apply(null, Array(dotCount + 1).join('0').split(""));
	            } else {
	                return [];
	            }
	        }
	    },
	    ready: function ready() {
	        this.children = this.$refs.track.$el.children;
	        this._initialize();
	        var lazyLoadedList = [];
	        for (var i = 0; i < this.children.length; i++) {
	            if (i >= this.currentSlide && i < this.currentSlide + this.slidesToShow) {
	                lazyLoadedList.push(i);
	            }
	        }
	        if (this.lazyLoadedList && this.lazyLoadedList.length === 0) {
	            this.lazyLoadedList = lazyLoadedList;
	        }
	    },
	    beforeDestory: function beforeDestory() {
	        if (this.autoPlayTimer) {
	            window.clearTimeout(this.autoPlayTimer);
	        }
	    },


	    methods: {
	        _initialize: function _initialize() {
	            this.mounted = true;

	            var slideCount = this.children.length;

	            var listWidth = this._getWidth(this.$els.list);

	            var trackWidth = this._getWidth(this.$refs.track.$el);

	            var slideWidth = this._getWidth(this.$el) / this.slidesToShow;

	            var currentSlide = this.rtl ? slideCount - 1 - this.initialSlide : this.initialSlide;

	            this.slideWidth = slideWidth;
	            this.listWidth = listWidth;
	            this.trackWidth = trackWidth;
	            this.currentSlide = currentSlide;
	            Object.assign(this.$data, this);

	            var targetLeft = getTrackLeft(Object.assign({
	                slideIndex: this.currentSlide,
	                trackRef: this.$refs.track
	            }, this.$data));

	            var trackStyle = getTrackCSS(Object.assign({ left: targetLeft }, this));

	            this.trackStyle = trackStyle;
	            this._autoPlay();
	        },
	        _getWidth: function _getWidth(elem) {
	            return elem.getBoundingClientRect().width || elem.offsetWidth;
	        },
	        _slideHandler: function _slideHandler(index) {
	            var _this = this;

	            var targetSlide = void 0,
	                currentSlide = void 0;
	            var targetLeft = void 0,
	                currentLeft = void 0;
	            var _callback2 = void 0;

	            if (this.currentSlide === index) {
	                return;
	            }

	            if (this.fade) {
	                currentSlide = this.currentSlide;

	                if (index < 0) {
	                    targetSlide = index + this.slideCount;
	                } else if (index >= this.slideCount) {
	                    targetSlide = index - this.slideCount;
	                } else {
	                    targetSlide = index;
	                }
	                if (this.lazyLoad && this.lazyLoadedList.indexOf(targetSlide) < 0) {
	                    this.lazyLoadedList = this.lazyLoadedList.concat(targetSlide);
	                }

	                _callback2 = function callback() {
	                    _this.animating = false;
	                    if (_this.afterChange) {
	                        _this.afterChange(currentSlide);
	                    }
	                    (0, _utils.removeEndEventListener)(_this.$refs.track.$el.children[currentSlide], _callback2);
	                };

	                this.animating = true;
	                this.currentSlide = targetSlide;

	                (0, _utils.addEndEventListener)(this.$refs.track.$el.children[currentSlide], _callback2);

	                if (this.beforeChange) {
	                    this.beforeChange(this.currentSlide, currentSlide);
	                }

	                this._autoPlay();
	                return;
	            }

	            targetSlide = index;
	            if (targetSlide < 0) {
	                if (this.infinite === false) {
	                    currentSlide = 0;
	                } else if (this.slideCount % this.slidesToScroll !== 0) {
	                    currentSlide = this.slideCount - this.slideCount % this.slidesToScroll;
	                } else {
	                    currentSlide = this.slideCount + targetSlide;
	                }
	            } else if (targetSlide >= this.slideCount) {
	                if (this.infinite === false) {
	                    currentSlide = this.slideCount - this.slidesToShow;
	                } else if (this.slideCount % this.slidesToScroll !== 0) {
	                    currentSlide = 0;
	                } else {
	                    currentSlide = targetSlide - this.slideCount;
	                }
	            } else {
	                currentSlide = targetSlide;
	            }

	            targetLeft = getTrackLeft(Object.assign({
	                slideIndex: targetSlide,
	                trackRef: this.$refs.track
	            }, this.$data));

	            currentLeft = getTrackLeft(Object.assign({
	                slideIndex: currentSlide,
	                trackRef: this.$refs.track
	            }, this.$data));

	            if (this.infinite === false) {
	                targetLeft = currentLeft;
	            }
	            if (this.beforeChange) {
	                this.beforeChange(this.currentSlide, currentSlide);
	            }

	            if (this.lazyLoad) {
	                var loaded = true;
	                var slidesToLoad = [];
	                for (var i = targetSlide; i < targetSlide + this.slidesToShow; i++) {
	                    loaded = loaded && this.lazyLoadedList.indexOf(i) >= 0;
	                    if (!loaded) {
	                        slidesToLoad.push(i);
	                    }
	                }
	                if (!loaded) {
	                    this.lazyLoadedList = this.lazyLoadedList.concat(slidesToLoad);
	                }
	            }

	            if (this.useCSS === false) {
	                this.currentSlide = currentSlide;
	                this.trackStyle = getTrackCss(Object.assign({
	                    left: currentLeft
	                }, this.$data));
	                if (this.afterChange) {
	                    this.afterChange(currentSlide);
	                }
	            } else {
	                var nextStateChanges = {
	                    animating: false,
	                    currentSlide: currentSlide,
	                    trackStyle: getTrackCSS(Object.assign({ left: currentLeft }, this.$data)),
	                    swipeLeft: null
	                };
	                _callback2 = function _callback() {
	                    _this.animating = nextStateChanges.animating;
	                    _this.currentSlide = nextStateChanges.currentSlide;
	                    _this.trackStyle = nextStateChanges.trackStyle;
	                    _this.swipeLeft = nextStateChanges.swipeLeft;
	                    if (_this.afterChange) {
	                        _this.afterChange(currentSlide);
	                    }
	                    (0, _utils.removeEndEventListener)(_this.$refs.track.$el, _callback2);
	                };
	                this.animating = true;
	                this.currentSlide = targetSlide;
	                this.trackStyle = getTrackAnimateCSS(Object.assign({ left: targetLeft }, this.$data));
	                if (this.$refs.track.$el) {
	                    (0, _utils.addEndEventListener)(this.$refs.track.$el, _callback2);
	                }
	            }

	            this._autoPlay();
	        },
	        _swipeDirection: function _swipeDirection(touchObject) {
	            var xDist = void 0,
	                yDist = void 0,
	                r = void 0,
	                swipeAngle = void 0;
	            xDist = touchObject.startX - touchObject.curX;
	            yDist = touchObject.startY - touchObject.curY;
	            r = Math.atan2(yDist, xDist);
	            swipeAngle = Math.round(r * 180 / Math.PI);
	            if (swipeAngle < 0) {
	                swipeAngle = 360 - Math.abs(swipeAngle);
	            }
	            if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
	                return 'left';
	            }
	            if (swipeAngle >= 135 && swipeAngle <= 225) {
	                return 'right';
	            }
	            return 'vertical';
	        },
	        _autoPlay: function _autoPlay() {
	            var _this2 = this;

	            var play = function play() {
	                if (_this2.mounted) {
	                    _this2._slideHandler(_this2.currentSlide + _this2.slidesToScroll);
	                }
	            };

	            if (this.autoplay) {
	                window.clearTimeout(this.autoPlayTimer);
	                this.autoPlayTimer = window.setTimeout(play, this.autoplaySpeed);
	            }
	        },
	        _clickHandler: function _clickHandler(options, e) {
	            e && e.preventDefault();
	            this._changeSlide(options);
	            this.clickHandler(options, e);
	        },
	        _dotHandler: function _dotHandler(i) {
	            this._clickHandler({
	                message: 'dots',
	                index: i,
	                slidesToScroll: this.slidesToScroll,
	                currentSlide: this.currentSlide
	            });
	        },
	        _changeSlide: function _changeSlide(options) {
	            var indexOffset = void 0,
	                slideOffset = void 0,
	                unevenOffset = void 0,
	                targetSlide = void 0;
	            unevenOffset = this.slideCount % this.slidesToScroll !== 0;
	            indexOffset = unevenOffset ? 0 : (this.slideCount - this.currentSlide) % this.slidesToScroll;
	            if (options.message === 'dots') {
	                targetSlide = options.index * options.slidesToScroll;
	                if (targetSlide === options.currentSlide) {
	                    return;
	                }
	            }
	            this._slideHandler(targetSlide);
	        },
	        _swipeStart: function _swipeStart(e) {
	            var posX = void 0,
	                posY = void 0;

	            if (this.swipe === false || 'ontouchend' in document && this.swipe === false) {
	                return;
	            } else if (this.draggable === false && e.type.indexOf("mouse") !== -1) {
	                return;
	            }
	            posX = e.touches !== undefined ? e.touches[0].pageX : e.clientX;
	            posY = e.touches !== undefined ? e.touches[0].pageY : e.clientY;

	            this.dragging = true;
	            this.touchObject = {
	                startX: posX,
	                startY: posY,
	                curX: posX,
	                curY: posY
	            };
	        },
	        _swipeMove: function _swipeMove(e) {
	            if (!this.dragging) {
	                return;
	            }

	            if (this.animating) {
	                return;
	            }

	            var swipeLeft = void 0;
	            var curLeft = void 0,
	                positionOffset = void 0;
	            var touchObject = this.touchObject;

	            curLeft = getTrackLeft(Object.assign({
	                slideIndex: this.currentSlide,
	                trackRef: this.$refs.track
	            }, this.$data));

	            touchObject.curX = e.touches ? e.touches[0].pageX : e.clientX;
	            touchObject.curY = e.touches ? e.touches[0].pageY : e.clientY;
	            touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));

	            positionOffset = touchObject.curX > touchObject.startX ? 1 : -1;

	            var currentSlide = this.currentSlide;
	            var dotCount = Math.ceil(this.slideCount / this.slidesToScroll);
	            var swipeDirection = this._swipeDirection(this.touchObject);
	            var touchSwipeLength = touchObject.swipeLength;

	            if (this.infinite === false) {
	                if (currentSlide === 0 && swipeDirection === 'right' || currentSlide + 1 >= dotCount && swipeDirection === 'left') {
	                    touchSwipeLength = touchObject.swipeLength * this.edgeFriction;
	                }
	            }

	            if (this.swiped === false && this.swipeEvent) {
	                this.swipeEvent(swipeDirection);
	                this.swiped = true;
	            }

	            swipeLeft = curLeft + touchSwipeLength * positionOffset;
	            this.touchObject = touchObject;
	            this.swipeLeft = swipeLeft;
	            this.trackStyle = getTrackCSS(Object.assign({ left: swipeLeft }, this.$data));
	            if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
	                return;
	            }
	            if (touchObject.swipeLength > 4) {
	                e.preventDefault();
	            }
	        },
	        _swipeEnd: function _swipeEnd(e) {
	            if (!this.dragging) {
	                return;
	            }

	            var touchObject = this.touchObject;

	            var minSwipe = this.listWidth / this.touchThreshold;
	            var swipeDirection = this._swipeDirection(touchObject);

	            this.dragging = false;
	            this.edgeDragged = false;
	            this.swiped = false;
	            this.swipeLeft = null;
	            this.touchObject = {};

	            if (!touchObject.swipeLength) {
	                return;
	            }

	            if (touchObject.swipeLength > minSwipe) {
	                e.preventDefault();
	                if (swipeDirection === 'left') {
	                    this._slideHandler(this.currentSlide + this.slidesToScroll);
	                } else if (swipeDirection === 'right') {
	                    this._slideHandler(this.currentSlide - this.slidesToScroll);
	                } else {
	                    this._slideHandler(this.currentSlide);
	                }
	            } else {
	                var currentLeft = getTrackLeft(Object.assign({
	                    slideIndex: this.currentSlide,
	                    trackRef: this.$refs.track
	                }, this.$data));

	                this.trackStyle = getTrackAnimateCSS(Object.assign({ left: currentLeft }, this.$data));
	            }
	        }
	    }
	};

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(161)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/carousel/Track.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(162)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6dbc6474/Track.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	var strToObj = function strToObj(str) {
	    var strArr = str.split(' ');
	    var obj = {};
	    strArr.forEach(function (item) {
	        obj[item] = 1;
	    });
	    return obj;
	};
	var getSlideClasses = function getSlideClasses(spec) {
	    var slickActive = void 0,
	        slickCloned = void 0;
	    var index = spec.index;
	    slickCloned = index < 0 || index >= spec.slideCount;
	    slickActive = spec.currentSlide <= index && index < spec.currentSlide + spec.slidesToShow;

	    return (0, _utils.cx)({
	        'slick-slide': true,
	        'slick-active': slickActive,
	        'slick-cloned': slickCloned
	    });
	};
	var getSlideStyle = function getSlideStyle(spec) {
	    var style = {};
	    if (spec.variableWidth === undefined || spec.variableWidth === false) {
	        style.width = spec.slideWidth + 'px';
	    }
	    if (spec.fade) {
	        style.position = 'relative';
	        style.left = -spec.index * spec.slideWidth + 'px';
	        style.opacity = spec.currentSlide === spec.index ? 1 : 0;
	        style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	        style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
	    }
	    return style;
	};
	exports.default = {
	    props: ['fade', 'cssEase', 'speed', 'infinite', 'currentSlide', 'lazyLoad', 'lazyLoadedList', 'slideWidth', 'slidesToShow', 'slideCount', 'trackStyle', 'variableWidth'],
	    data: function data() {
	        return {
	            hasPreInit: false,
	            hasPostInit: false
	        };
	    },
	    ready: function ready() {
	        var _this = this;

	        this.children = [];
	        for (var i = 0; i < this.$el.children.length; i++) {
	            this.children.push(this.$el.children[i]);
	        }
	        this.preClone = this.children[0].cloneNode(true);
	        this.postClone = this.children[this.children.length - 1].cloneNode(true);

	        this.slideCount = this.children.length;

	        this._mapPropsToChild();
	        Object.keys(this.$data).map(function (item) {
	            _this.$watch(item, _this._mapPropsToChild);
	        });
	    },

	    methods: {
	        _mapPropsToChild: function _mapPropsToChild() {
	            var _this2 = this;

	            Object.assign(this.$data, this);
	            this.children.forEach(function (el, index) {
	                var child = void 0;
	                var key = void 0;
	                if (!_this2.lazyLoad | (_this2.lazyLoad && _this2.lazyLoadedList.indexOf(index) >= 0)) {
	                    child = el;
	                } else {
	                    child = document.createElement('div');
	                }
	                var childStyle = getSlideStyle(Object.assign({}, _this2.$data, { index: index }));
	                var slickClasses = getSlideClasses(Object.assign({ index: index }, _this2.$data));
	                var cssClasses = void 0;
	                (0, _utils.removeClass)(child, 'slick-active');
	                if (child.className) {
	                    cssClasses = (0, _utils.cx)(Object.assign(strToObj(slickClasses), strToObj(child.className)));
	                } else {
	                    cssClasses = slickClasses;
	                }
	                child.setAttribute('key', index);
	                child.setAttribute('data-index', index);
	                (0, _utils.addClass)(child, cssClasses);
	                (0, _utils.addStyle)(child, childStyle);
	            });
	            if (this.infinite && this.fade === false) {
	                var infiniteCount = this.variableWidth ? this.slidesToShow + 1 : this.slidesToShow;
	                ;(function () {
	                    (0, _utils.removeClass)(this.preClone, 'slick-active');
	                    var child = this.children[this.slideCount - 1];
	                    var key = this.slideCount;
	                    this.preClone.setAttribute('key', key);
	                    this.preClone.setAttribute('data-index', key);
	                    var childStyle = getSlideStyle(Object.assign({}, this.$data, { index: this.slideCount - 1 }));
	                    (0, _utils.addClass)(this.preClone, getSlideClasses(Object.assign({ index: key }, this)));
	                    (0, _utils.addStyle)(this.preClone, childStyle);
	                    if (!this.hasPreInit) {
	                        (0, _utils.insertAfter)(this.preClone, child);
	                        this.hasPreInit = true;
	                    }
	                }).bind(this)();
	                ;(function () {
	                    (0, _utils.removeClass)(this.postClone, 'slick-active');
	                    var child = this.children[0];
	                    var key = -1;
	                    this.postClone.setAttribute('key', key);
	                    this.postClone.setAttribute('data-index', key);
	                    var childStyle = getSlideStyle(Object.assign({}, this.$data, { index: 0 }));
	                    (0, _utils.addClass)(this.postClone, getSlideClasses(Object.assign({ index: key }, this)));
	                    (0, _utils.addStyle)(this.postClone, childStyle);
	                    if (!this.hasPostInit) {
	                        (0, _utils.insertBefore)(this.postClone, child);
	                        this.hasPostInit = true;
	                    }
	                }).bind(this)();
	            }
	        }
	    }
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "\n<div class='slick-track' :style=\"trackStyle\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	exports.default = (0, _utils.defaultProps)({
	    prefixCls: 'ant-carousel',
	    className: '',
	    autoplay: false,
	    autoplaySpeed: 3000,
	    centerPadding: '50px',
	    cssEase: 'ease',
	    dots: true,
	    dotsClass: 'slick-dots',
	    draggable: true,
	    effect: 'scrollx',
	    easing: 'linear',
	    edgeFriction: 0.35,
	    fade: false,
	    focusOnSelect: false,
	    infinite: true,
	    initialSlide: 0,
	    listWidth: null,
	    lazyLoad: false,
	    responsive: Array,
	    rtl: false,
	    slide: 'div',
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 500,
	    swipe: true,
	    swipeToSlide: false,
	    touchMove: true,
	    touchThreshold: 5,
	    useCSS: true,
	    variableWidth: false,
	    vertical: false,
	    edgeEvent: null,
	    swipeEvent: null,
	    beforeChange: function beforeChange() {},
	    afterChange: function afterChange() {},
	    clickHandler: function clickHandler() {}
	});

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div v-el:list class=\"slick-list\"\n         @mousedown=\"_swipeStart\"\n         @mousemove=\"_swipeMove\"\n         @mouseup=\"_swipeEnd\"\n         @mouseleave=\"_swipeEnd\"\n         @touchstart=\"_swipeStart\"\n         @touchmove=\"_swipeMove\"\n         @touchend=\"_swipeEnd\"\n         @touchcancel=\"_swipeEnd\">\n        <v-track\n            v-ref:track\n            :fade=\"fade\"\n            :css-ease=\"cssEase\"\n            :speed=\"speed\"\n            :infinite=\"infinite\"\n            :current-slide=\"currentSlide\"\n            :lazy-load=\"lazyLoad\"\n            :lazy-loaded-list=\"lazyLoadedList\"\n            :slide-width=\"slideWidth\"\n            :slides-to-show=\"slidesToShow\"\n            :slide-count.sync=\"slideCount\"\n            :track-style=\"trackStyle\"\n            :variable-width=\"variableWidth\">\n            <slot></slot>\n        </v-track>\n    </div>\n    <ul :class=\"dotsClass\" v-if=\"dots\" :style=\"{display: 'block'}\">\n        <li v-for=\"dot in dotsArray\" track-by=\"$index\" :key=\"$index\" :class=\"{'slick-active': currentSlide === $index * slidesToScroll}\">\n            <button @click=\"_dotHandler($index)\">{{$index}}</button>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 165 */
/***/ function(module, exports) {

	module.exports = "\n  <div :class=\"wrapClasses\">\n      <inner-slider\n          :dots=\"dots\"\n          :fade=\"fade\"\n          :autoplay=\"autoplay\"\n          :easing=\"easing\"\n          :draggable=\"draggable\"\n          :vertical=\"vertical\"\n          :before-change=\"beforeChange\"\n          :after-change=\"afterChange\">\n          <slot></slot>\n      </inner-slider>\n</div>\n";

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cascader = __webpack_require__(167);

	var _cascader2 = _interopRequireDefault(_cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _cascader2.default;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(168)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/cascader/cascader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(214)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2d86a5e7/cascader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray2 = __webpack_require__(169);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _menu = __webpack_require__(211);

	var _menu2 = _interopRequireDefault(_menu);

	var _func = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-cascader',
	    data: function data() {
	        return {
	            prefix: 'ant-cascader',
	            style: {},
	            container: null,
	            open: false,
	            label: '',
	            path: [-1]
	        };
	    },
	    props: {
	        popupContainer: {
	            type: Function,
	            default: function _default() {
	                return document.body;
	            }
	        },
	        position: {
	            type: String,
	            default: 'absolute'
	        },
	        options: Array,
	        value: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        placeholder: {
	            type: String,
	            default: '请选择'
	        },
	        size: String,
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        allowClear: {
	            type: Boolean,
	            default: true
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        this.init();
	        this.container = this.popupContainer();
	        this.$els.menu.style.position = this.position;
	        this.container.appendChild(this.$els.menu);

	        this.$nextTick(function () {
	            _this.setPosition();
	        });

	        window.addEventListener('resize', function () {
	            clearTimeout(_this.resizeTimer);
	            _this.resizeTimer = setTimeout(function () {
	                _this.setPosition();
	            }, 200);
	        });

	        this.clickListener = function () {
	            _this.setOpen(false);
	        };
	        window.addEventListener('click', this.clickListener);
	    },
	    beforeDestroy: function beforeDestroy() {
	        window.removeEventListener('click', this.clickListener);
	    },

	    watch: {
	        path: function path(val) {
	            var value = [],
	                label = [],
	                opt = this.options;

	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(val), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var i = _step.value;

	                    if (i < 0) break;
	                    value.push(opt[i].value);
	                    label.push(opt[i].label);
	                    opt = opt[i].children;
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.$set('value', value);
	            this.$set('label', label.join(' / '));
	        },
	        value: function value(val) {
	            this.$emit('change', val);
	        }
	    },
	    computed: {
	        pickerCls: function pickerCls() {
	            return [this.prefix + '-picker', (0, _defineProperty3.default)({}, this.prefix + '-picker-disabled', this.disabled)];
	        },
	        inpCls: function inpCls() {
	            var size = { large: 'lg', small: 'sm' }[this.size];

	            return ['ant-input', 'ant-cascader-input', (0, _defineProperty3.default)({}, 'ant-input-' + size, size)];
	        }
	    },
	    methods: {
	        init: function init() {
	            var res = [],
	                opt = this.options;
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = (0, _getIterator3.default)(this.value), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var val = _step2.value;
	                    var _iteratorNormalCompletion3 = true;
	                    var _didIteratorError3 = false;
	                    var _iteratorError3 = undefined;

	                    try {
	                        for (var _iterator3 = (0, _getIterator3.default)(opt.entries()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                            var _step3$value = (0, _slicedToArray3.default)(_step3.value, 2),
	                                i = _step3$value[0],
	                                item = _step3$value[1];

	                            if (item.value == val) {
	                                res.push(i);
	                                opt = opt[i].children;
	                                break;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError3 = true;
	                        _iteratorError3 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                _iterator3.return();
	                            }
	                        } finally {
	                            if (_didIteratorError3) {
	                                throw _iteratorError3;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            if (opt) res.push(-1);

	            this.$set('path', res);
	        },
	        clear: function clear() {
	            this.path = [-1];
	        },
	        setPosition: function setPosition() {
	            if (!this.$el) {
	                return;
	            }
	            var p = (0, _func.getOffset)(this.$el, this.container);

	            this.$set('style', {
	                top: p.bottom + 4 + 'px',
	                left: p.left + 'px'
	            });
	        },
	        getMenuData: function getMenuData(index) {
	            var res = this.options;
	            for (var i = 0; i < index; i++) {
	                var s = this.path[i];
	                if (res[s].children) {
	                    res = res[s].children;
	                } else {
	                    res = null;
	                    break;
	                }
	            }
	            return res;
	        },
	        setOpen: function setOpen(status) {
	            this.open = status;
	        },
	        toggleMenu: function toggleMenu() {
	            if (this.disabled) return;
	            this.open = !this.open;
	        },
	        changeMenuValue: function changeMenuValue(key, i) {
	            this.path.$set(key, i);
	            if (this.getMenuData(key + 1)) {
	                this.path.$set(key + 1, -1);
	                this.path.splice(key + 2, this.path.length - 1 - key - 1);
	            } else {
	                this.path.splice(key + 1, this.path.length - 1 - key);
	                this.open = false;
	            }
	        }
	    },
	    components: { menu: _menu2.default }
	};

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _isIterable2 = __webpack_require__(170);

	var _isIterable3 = _interopRequireDefault(_isIterable2);

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if ((0, _isIterable3.default)(Object(arr))) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(171), __esModule: true };

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(172);
	__webpack_require__(203);
	module.exports = __webpack_require__(205);

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(173);
	var global        = __webpack_require__(136)
	  , hide          = __webpack_require__(140)
	  , Iterators     = __webpack_require__(176)
	  , TO_STRING_TAG = __webpack_require__(200)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(174)
	  , step             = __webpack_require__(175)
	  , Iterators        = __webpack_require__(176)
	  , toIObject        = __webpack_require__(177);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(181)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(178)
	  , defined = __webpack_require__(180);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(179);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 179 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 180 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(182)
	  , $export        = __webpack_require__(135)
	  , redefine       = __webpack_require__(183)
	  , hide           = __webpack_require__(140)
	  , has            = __webpack_require__(184)
	  , Iterators      = __webpack_require__(176)
	  , $iterCreate    = __webpack_require__(185)
	  , setToStringTag = __webpack_require__(199)
	  , getPrototypeOf = __webpack_require__(201)
	  , ITERATOR       = __webpack_require__(200)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(140);

/***/ },
/* 184 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(186)
	  , descriptor     = __webpack_require__(149)
	  , setToStringTag = __webpack_require__(199)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(140)(IteratorPrototype, __webpack_require__(200)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(142)
	  , dPs         = __webpack_require__(187)
	  , enumBugKeys = __webpack_require__(197)
	  , IE_PROTO    = __webpack_require__(194)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(147)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(198).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(141)
	  , anObject = __webpack_require__(142)
	  , getKeys  = __webpack_require__(188);

	module.exports = __webpack_require__(145) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(189)
	  , enumBugKeys = __webpack_require__(197);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(184)
	  , toIObject    = __webpack_require__(177)
	  , arrayIndexOf = __webpack_require__(190)(false)
	  , IE_PROTO     = __webpack_require__(194)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(177)
	  , toLength  = __webpack_require__(191)
	  , toIndex   = __webpack_require__(193);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(192)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(192)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(195)('keys')
	  , uid    = __webpack_require__(196);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(136)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 197 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(136).document && document.documentElement;

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(141).f
	  , has = __webpack_require__(184)
	  , TAG = __webpack_require__(200)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(195)('wks')
	  , uid        = __webpack_require__(196)
	  , Symbol     = __webpack_require__(136).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(184)
	  , toObject    = __webpack_require__(202)
	  , IE_PROTO    = __webpack_require__(194)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(180);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(204)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(181)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(192)
	  , defined   = __webpack_require__(180);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(206)
	  , ITERATOR  = __webpack_require__(200)('iterator')
	  , Iterators = __webpack_require__(176);
	module.exports = __webpack_require__(137).isIterable = function(it){
	  var O = Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || Iterators.hasOwnProperty(classof(O));
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(179)
	  , TAG = __webpack_require__(200)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(172);
	__webpack_require__(203);
	module.exports = __webpack_require__(209);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(142)
	  , get      = __webpack_require__(210);
	module.exports = __webpack_require__(137).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(206)
	  , ITERATOR  = __webpack_require__(200)('iterator')
	  , Iterators = __webpack_require__(176);
	module.exports = __webpack_require__(137).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(212)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/cascader/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(213)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e7d1b9f0/menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            prefix: 'ant-cascader-menu'
	        };
	    },
	    props: {
	        key: Number,
	        value: {
	            type: Number,
	            default: -1
	        },
	        data: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        }
	    },
	    methods: {
	        select: function select(i, disabled) {
	            if (disabled) return;
	            this.value = i;
	            this.$emit('change', this.key, i);
	        }
	    }
	};

/***/ },
/* 213 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ant-cascader-menu\">\n    <li v-for=\"item in data\" :class=\"['ant-cascader-menu-item', {[prefix+'-item-expand']: item.children, },{[prefix+'-item-disabled']: item.disabled, }, {[prefix+'-item-active']: value == $index}]\" :title=\"item.label\" @click.stop=\"select($index,item.disabled)\">\n        {{item.label}}\n    </li>\n</ul>\n";

/***/ },
/* 214 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"pickerCls\">\n    <input type=\"text\" :placeholder=\"label?'':placeholder\" :class=\"inpCls\" value=\"\" readonly=\"\" autocomplete=\"off\" @click.stop=\"toggleMenu\">\n    <span class=\"ant-cascader-picker-label\">{{label}}</span>\n    <i v-if=\"allowClear && value.length\" class=\"anticon anticon-cross-circle ant-cascader-picker-clear\" @click.stop=\"clear\"></i>\n    <i class=\"anticon anticon-down ant-cascader-picker-arrow\"></i>\n    <div v-el:menu v-show=\"open\" transition=\"slide-up\" style=\"max-height: 300px; overflow: auto\" :style=\"style\" class=\"ant-cascader-menus ant-cascader-menus-placement-bottomLeft\">\n        <div>\n            <menu v-for=\"i in path\" :value=\"i\" :data=\"getMenuData($index)\" :key=\"$index\" @change=\"changeMenuValue\" track-by=\"$index\"></menu>\n        </div>\n    </div>\n</span>\n";

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _checkbox = __webpack_require__(216);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _checkboxGroup = __webpack_require__(219);

	var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_checkbox2.default.Group = _checkboxGroup2.default;

	exports.default = _checkbox2.default;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(217)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/checkbox/checkbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(218)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3cf208f2/checkbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 217 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-checkbox',
	  props: {
	    checked: {
	      tyle: Boolean,

	      default: false
	    },
	    disabled: {
	      tyle: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    },
	    value: String
	  },
	  methods: {
	    _check: function _check() {
	      if (this.disabled) return;
	      this.checked = !this.checked;
	      this.onChange(this);
	    }
	  }
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	module.exports = "\n<label class=\"ant-checkbox-wrapper\" >\n  <span class=\"ant-checkbox\" :class=\"{'ant-checkbox-checked': checked, 'ant-checkbox-disabled': disabled}\" @click=\"_check\">\n    <span class=\"ant-checkbox-inner\"></span>\n    <input type=\"checkbox\" class=\"ant-checkbox-input\">\n  </span>\n  <span \n    v-if=\"_slotContents && _slotContents.default\">\n    <slot></slot>\n  </span>\n</label>\n";

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(220)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/checkbox/checkboxGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(221)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-184f65e8/checkboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _checkbox = __webpack_require__(216);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-checkbox-group',
	  props: {
	    options: Array,
	    value: {
	      type: Array,
	      twoWay: true,
	      default: function _default() {
	        return [];
	      }
	    },
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	  data: function data() {
	    var _this = this;

	    return {
	      change: function change(e) {
	        var temp = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _getIterator3.default)(_this.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _e = _step.value;

	            if (_e.checked) {
	              temp.push(_e.value);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        _this.$set('value', temp);
	        _this.onChange(temp);
	      }
	    };
	  },
	  watch: {
	    value: function value() {
	      this.setChecked();
	    }
	  },
	  created: function created() {
	    if (this.value.length) {
	      this.setChecked();
	    }
	  },
	  methods: {
	    setChecked: function setChecked() {
	      for (var i = 0; i < this.options.length; i++) {
	        if (this.value.includes(this.options[i].value)) {
	          this.$set('options[' + i + '].checked', true);
	        } else {
	          this.$set('options[' + i + '].checked', false);
	        }
	      }
	    }
	  },
	  components: {
	    vCheckbox: _checkbox2.default
	  }
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ant-checkbox-group\" >\n  <v-checkbox\n    class = \"ant-checkbox-group-item\"\n    v-for=\"option in options\"\n    :disabled='option.disabled'\n    :checked.sync=\"option.checked\"\n    :on-change=\"change\"\n    :value=\"option.value\"\n    >\n    {{option.label}}\n  </v-checkbox>\n</div>\n";

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _collapse = __webpack_require__(223);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _item = __webpack_require__(225);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_collapse2.default.Item = _item2.default;

	exports.default = _collapse2.default;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(224)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/collapse/collapse.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(228)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-654aa2c7/collapse.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _item2 = __webpack_require__(225);

	var _item3 = _interopRequireDefault(_item2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-collapse',
	  props: {
	    accordion: {
	      type: Boolean,
	      default: false
	    },
	    activeKey: Array,
	    defaultActiveKey: String,
	    onChange: {
	      type: Function,
	      default: function _default(key) {}
	    }
	  },
	  events: {
	    'child-open': function childOpen(key) {
	      if (this.accordion) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _getIterator3.default)(this.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var _item = _step.value;

	            if (_item.key === key) {
	              _item.open = true;
	            } else {
	              _item.open = false;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }
	      }
	      this.onChange(key);
	    }
	  },
	  watch: {
	    'activeKey': function activeKey() {}
	  }
	};

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(226)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/collapse/item.vue: named exports in *.vue files are ignored.")}
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3db6afa6/item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-collapse-item',
	  data: function data() {
	    return {
	      prefix: 'ant-collapse',
	      open: false
	    };
	  },
	  props: {
	    key: String,
	    header: String
	  },
	  ready: function ready() {
	    var keyArray = this.$parent.activeKey;
	    if (keyArray) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(keyArray), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var key = _step.value;

	          if (this.key == key) {
	            this.open = true;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    } else {
	      if (this.$parent.defaultActiveKey && this.$parent.defaultActiveKey == this.key) {
	        this.open = true;
	      }
	    }
	  },

	  computed: {
	    h: function h() {
	      var h = void 0;
	      if (this.open) {
	        h = this.$el.children[1].children[0].clientHeight + 'px';
	      } else {
	        h = '0';
	      }
	      return h;
	    }
	  },
	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	      if (this.open) {
	        this.$dispatch('child-open', this.key);
	      }
	    }
	  }
	};

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-collapse-item\" :class=\"{'ant-collapse-item-active': open}\">\n  <div class=\"ant-collapse-header\" @click=\"handleOpen\"><i class=\"arrow\"></i>{{header}}</div>\n  <div class=\"ant-collapse-content\" :class=\"[prefix+'-anim-active',open ? 'ant-collapse-content-active': 'ant-collapse-content-inactive']\" :style=\"{height: h}\">\n    <div class=\"ant-collapse-content-box\">\n      <slot></slot>\n    </div>\n  </div>\n</div>\n\n";

/***/ },
/* 228 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-collapse\">\n  <slot></slot>\n</div>\n\n";

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _datatable = __webpack_require__(230);

	var _datatable2 = _interopRequireDefault(_datatable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _datatable2.default;

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(231)
	__vue_script__ = __webpack_require__(233)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/datatable/datatable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(272)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f14b671/datatable.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(232);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(129)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./datatable.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./datatable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(87)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _pagination = __webpack_require__(234);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _spin = __webpack_require__(253);

	var _spin2 = _interopRequireDefault(_spin);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	var _checkbox = __webpack_require__(215);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _radio = __webpack_require__(264);

	var _radio2 = _interopRequireDefault(_radio);

	var _domtastic = __webpack_require__(271);

	var _domtastic2 = _interopRequireDefault(_domtastic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-datatable',
	    props: {
	        size: {
	            type: String,
	            default: "middle"
	        },

	        dataSource: {
	            type: String,
	            required: true
	        },

	        columns: {
	            type: Array,
	            required: true
	        },
	        pagination: {
	            type: Boolean,
	            default: true
	        },

	        pageSize: {
	            type: Number,
	            default: 10
	        },

	        pageNum: {
	            type: Number,
	            default: 1
	        },
	        fuck: {
	            type: Number,
	            default: 10
	        },

	        formatter: {
	            type: Function
	        },
	        pageSizeOptions: {
	            type: Array,
	            default: function _default() {
	                return [10, 20, 30, 40, 50];
	            }
	        },

	        paramsName: {
	            type: Object,
	            default: function _default() {
	                return {
	                    pageNumber: 'pageNo',
	                    pageSize: 'pageSize',
	                    total: 'totalCount',
	                    results: 'result',
	                    sortColumns: 'sortColumns'
	                };
	            }
	        },

	        otherParams: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        },

	        rowSelection: {
	            type: Object,
	            validator: function validator(value) {
	                return value.type == "checkbox" || value.type == "radio";
	            }
	        },

	        emptyText: {
	            type: String,
	            default: "老板,没有找到你想要的信息......"
	        },

	        ghost: {
	            type: Object
	        },

	        bottomGap: {
	            type: Number,
	            default: ''
	        },

	        height: {
	            type: Number,
	            default: null
	        },

	        treeTable: {
	            type: Boolean,
	            default: false
	        },
	        treeTableOption: {
	            type: Object,
	            default: function _default() {
	                return {
	                    idKey: "id",
	                    pidKey: "pid",
	                    indent: 4,
	                    position: 0,
	                    sortKey: null,
	                    order: "asc",
	                    isAsync: false
	                };
	            }
	        }
	    },

	    data: function data() {
	        return {
	            current: [],

	            total: 0,

	            prefix: 'ant-table',
	            borderClass: "ant-table-bordered",
	            contentClass: "ant-table-content",

	            defaultCurrent: 1,

	            loading: false,
	            sortParams: {},

	            sortModel: 'single',
	            rowSelectionStates: [],
	            tableBodyScrollLeft: 0,
	            tableBodyWidth: "100%",
	            tableBodyHeight: null
	        };
	    },
	    created: function created() {
	        this.getSortParams();
	        this.loadData({ pageNum: this.pageNum });
	    },
	    ready: function ready() {
	        var self = this;

	        this.calculateSize();

	        if (!this.bindResize) {
	            window.addEventListener("resize", function () {
	                self.calculateSize();
	            }, false);
	            self.bindResize = true;
	        }
	    },
	    methods: {
	        clickCheck: function clickCheck(index, event) {
	            var item = this.items[index];
	            var msg = Object.assign({
	                index: index,
	                checked: event.target.checked
	            }, item);

	            this.$dispatch('select', msg);
	        },

	        pageChange: function pageChange(page) {
	            this.pageNum = page;

	            this.loadData({ pageNum: this.pageNum });
	        },

	        pageSizeChange: function pageSizeChange(current, pageSize) {
	            this.pageNum = current;
	            this.pageSize = pageSize;
	            this.loadData({ pageNum: this.pageNum });
	        },

	        sort: function sort(column, order) {
	            if (this.sortModel == "single") {
	                this.setCurrentSort(column, order);
	            } else {
	                this.setSortParams(column, order);
	            }

	            this.loadData();
	        },

	        setCurrentSort: function setCurrentSort(sortColumn, order) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {

	                for (var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var column = _step.value;

	                    if (typeof column.sort == 'string') {
	                        column.sort = true;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            this.currentSort = sortColumn;
	            sortColumn.sort = order;
	            var sortParams = {};
	            sortParams[this.paramsName.sortColumns] = sortColumn.field + ' ' + sortColumn.sort + ' ';
	            this.sortParams = sortParams;
	        },
	        setSortParams: function setSortParams(sortColumn, order) {
	            sortColumn.sort = order;

	            var sortStr = "";
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = this.columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var column = _step2.value;

	                    if (typeof column.sort == 'string') {
	                        sortStr += column.field + ' ' + column.sort + ' ';
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            var sortParams = {};
	            sortParams[this.paramsName.sortColumns] = sortStr;
	            this.sortParams = sortParams;
	        },
	        getSortParams: function getSortParams() {
	            var sortStr = "";
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = this.columns[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var column = _step3.value;

	                    if (typeof column.sort == 'string') {
	                        sortStr += column.field + ' ' + column.sort + ' ';
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            var sortParams = {};
	            sortParams[this.paramsName.sortColumns] = sortStr;
	            this.sortParams = sortParams;
	            return this.sortParams;
	        },

	        loadData: function loadData(params) {
	            params = Object.assign({}, params);
	            var self = this;
	            self.loading = true;

	            var url = this.dataSource;
	            var remoteParams = Object.assign({}, this.sortParams, this.otherParams);
	            remoteParams[this.paramsName.pageNumber] = params.pageNum || self.pageNum;
	            remoteParams[this.paramsName.pageSize] = this.pageSize;

	            this.$http.post(url, remoteParams, { emulateJSON: true }).then(function (response) {
	                var data = response.body.data;
	                var results = self.formatter ? self.formatter(data[self.paramsName.results]) : data[self.paramsName.results];

	                if (self.treeTable) {
	                    self.dealTreeData(results);
	                } else {
	                    self.current = results;
	                }

	                self.total = data[self.paramsName.total] * 1;
	                self.pageNum = data[self.paramsName.pageNumber] * 1;

	                self.rowSelectionStates = new Array(self.current.length || 0).fill(false);

	                self.loading = false;

	                self.calculateSize();
	            }, function (response) {
	                self.loading = false;
	            });
	        },
	        rowSelectionChange: function rowSelectionChange(index) {
	            if (this.rowSelection.onSelect) {
	                this.rowSelection.onSelect(index, this.rowSelectionStates[index], this.current[index]);
	            }
	        },
	        checkAllChange: function checkAllChange(e) {
	            this.rowSelectionStates = new Array(this.current.length || 0).fill(e.checked);
	            if (this.rowSelection.onSelectAll) {
	                this.rowSelection.onSelectAll(e.checked, this.current);
	            }
	        },
	        datatable: function datatable(fn) {
	            for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                rest[_key - 1] = arguments[_key];
	            }

	            this[fn].apply(this, rest);
	        },
	        reload: function reload(pageNum) {
	            this.loadData({ pageNum: pageNum || this.pageNum });
	        },

	        scrollTableBody: function scrollTableBody(e) {
	            var target = e.target || e.srcElement;
	            this.tableBodyScrollLeft = target.scrollLeft;
	        },

	        calculateSize: function calculateSize() {
	            if (!this.$el) {
	                return;
	            }

	            this.$nextTick(function () {
	                var footerHeight = 56;
	                if (this.height) {
	                    this.tableBodyHeight = this.height - footerHeight;
	                    this.getBodyWidth();
	                } else if (this.bottomGap) {
	                    this.fixGapHeight(footerHeight);
	                    this.getBodyWidth();
	                }
	            });
	        },
	        getBodyWidth: function getBodyWidth() {
	            var tbody = this.$els.tbody;
	            tbody && (this.tableBodyWidth = tbody.offsetWidth + "px");

	            this.fixHeaderWidth();
	        },
	        fixHeaderWidth: function fixHeaderWidth() {
	            var theader_ths = (0, _domtastic2.default)(this.$el).find("div.ant-table-header table>thead>tr>th");
	            var tbody_ths = (0, _domtastic2.default)(this.$el).find("div.ant-table-body table>thead>tr>th");
	            if (theader_ths.length && tbody_ths.length) {
	                theader_ths.each(function (el, index) {
	                    if (index != theader_ths.length - 1) {
	                        (0, _domtastic2.default)(el).css("width", tbody_ths[index].offsetWidth + 'px');
	                    }
	                });
	            }
	        },
	        fixGapHeight: function fixGapHeight(footerHeight) {
	            var self = this;

	            var rect = self.$el.getBoundingClientRect();
	            var winHeight = window.innerHeight;
	            var tableBodyHeight = winHeight - this.bottomGap * 1 - rect.top - footerHeight;

	            if (rect.top > 0 && tableBodyHeight >= 200) {
	                this.tableBodyHeight = tableBodyHeight;
	            }
	        },
	        dealTreeData: function dealTreeData(results) {
	            this.originData = results.slice();
	            this.newData = [];
	            var trData = this.transTreeData(0);
	            this.sortTrData(trData);
	            this.current = this.newData;
	        },

	        transTreeData: function transTreeData(pid) {
	            var self = this;
	            var TreeTableOpt = this.treeTableOption;
	            var results = [];
	            var children = this.findChildren(pid);
	            for (var i = 0; i < children.length; i++) {
	                var obj = children[i];
	                obj['children'] = self.transTreeData(obj[TreeTableOpt.idKey]);
	                obj['level'] = self.getLevel(obj.id);
	                obj.vshow = obj.level > 1 ? false : true;
	                obj.vopen = obj.level > 0 ? 'collapsed' : 'expanded';
	                obj.paddingLeft = (obj.level - 1) * 5 * self.treeTableOption.indent + "px";
	                results.push(obj);
	            }
	            TreeTableOpt.sortKey && results.sort(self.sortData);
	            return results;
	        },

	        sortTrData: function sortTrData(trData) {
	            var self = this;
	            for (var i = 0; i < trData.length; i++) {
	                var obj = trData[i];
	                var ch = obj.children;

	                if (!self.treeTableOption.isAsync) {
	                    obj.isparent = ch.length ? true : false;
	                }

	                self.newData.push(obj);

	                ch.length && self.sortTrData(ch);
	            }
	        },

	        sortData: function sortData(a, b) {
	            var name = this.treeTableOption.sortKey;
	            if (this.treeTableOption.order == "asc") {
	                return a[name] > b[name] ? 1 : -1;
	            } else {
	                return a[name] < b[name] ? 1 : -1;
	            }
	        },

	        findChildren: function findChildren(pid) {
	            var self = this;
	            var results = [];
	            var origindata = this.originData;
	            for (var i = 0; i < origindata.length; i++) {
	                if (origindata[i][self.treeTableOption.pidKey] == pid) {
	                    results.push(origindata[i]);
	                }
	            }
	            return results;
	        },

	        getLevel: function getLevel(id) {
	            var self = this;
	            var origindata = this.originData;
	            var TreeTableOpt = this.treeTableOption;
	            for (var i = 0; i < origindata.length; i++) {
	                var d = origindata[i];
	                var dataId = d[TreeTableOpt.idKey];
	                var dataPId = d[TreeTableOpt.pidKey];
	                if (d[TreeTableOpt.idKey] == id) {
	                    if (id == 0) {
	                        return 0;
	                    } else if (d[TreeTableOpt.pidKey] == 0) {
	                        return 1;
	                    } else {
	                        return self.getLevel(dataPId) + 1;
	                    }
	                }
	            }
	            return 0;
	        },

	        toggle: function toggle(item) {
	            var self = this;

	            if (item.vopen == "collapsed") {
	                this.expand(item);
	            } else if (item.vopen == "expanded") {
	                this.collapse(item);
	            }
	        },

	        expand: function expand(item) {
	            var self = this;

	            if (self.treeTableOption.isAsync && !item.loadChildren) {
	                self.loadChildren(item);
	            } else {
	                self.expandChildren(item);
	            }
	        },
	        collapse: function collapse(item) {
	            var self = this;
	            item.vopen = "collapsed";
	            var vshow = false;

	            var children = item.children || [];
	            for (var i = 0; i < children.length; i++) {

	                children[i].vshow = vshow;

	                self.collapse(children[i]);
	            }
	            this.calculateSize();
	        },
	        expandChildren: function expandChildren(item) {
	            var self = this;
	            item.vopen = "expanded";
	            var vshow = true;

	            var children = item.children || [];
	            for (var i = 0; i < children.length; i++) {
	                children[i].vshow = vshow;
	            }
	            this.calculateSize();
	        },
	        loadChildren: function loadChildren(item) {
	            var self = this;
	            self.loading = true;

	            var url = this.dataSource;
	            var remoteParams = Object.assign({ parentid: item.id }, this.sortParams, this.otherParams);

	            this.$http.post(url, remoteParams, { emulateJSON: true }).then(function (response) {
	                var data = response.body.data;
	                var results = self.formatter ? self.formatter(data[self.paramsName.results]) : data[self.paramsName.results];

	                if (results.length) {
	                    item.loadChildren = true;
	                    item.children = self.transAsyncTreeData(results, item.level);

	                    var pindex = self.current.findIndex(function (value, index, arr) {
	                        return value.id == item.id;
	                    }) + 1;

	                    if (pindex == 0) {
	                        return false;
	                    }

	                    var newCurrent = self.current.slice(0, pindex).concat(results, self.current.slice(pindex));
	                    self.current = newCurrent;

	                    var newRowSelectionStates = self.rowSelectionStates.slice(0, pindex).concat(new Array(results.length || 0).fill(false), self.rowSelectionStates.slice(pindex));
	                    self.rowSelectionStates = newRowSelectionStates;

	                    self.expandChildren(item);

	                    self.loading = false;

	                    self.calculateSize();
	                }
	            }, function (response) {
	                self.loading = false;
	            });
	        },
	        transAsyncTreeData: function transAsyncTreeData(results, level) {
	            var self = this;
	            for (var i = 0; i < results.length; i++) {
	                var obj = results[i];
	                obj['level'] = level + 1;
	                obj.vopen = 'collapsed';
	                obj.vshow = true;
	                obj.paddingLeft = (obj.level - 1) * 5 * self.treeTableOption.indent + "px";
	            }
	            return results;
	        }
	    },
	    events: {
	        reload: function reload(pageNum) {
	            this.reload(pageNum);
	        }
	    },
	    computed: {
	        sizeClass: function sizeClass() {
	            return this.prefix + "-" + this.size;
	        },
	        scrollClass: function scrollClass() {
	            if (this.tableBodyHeight) {
	                return this.prefix + "-scroll";
	            } else {
	                return "";
	            }
	        },
	        checkAllState: function checkAllState() {
	            var checkAllState = false;
	            for (var i = 0; i < this.rowSelectionStates.length; i++) {
	                if (this.rowSelectionStates[i] == false) {
	                    checkAllState = false;
	                    break;
	                } else {
	                    checkAllState = true;
	                }
	            }
	            return checkAllState;
	        }
	    },
	    components: {
	        vPagination: _pagination2.default,
	        vSpin: _spin2.default,
	        vIcon: _iconfont2.default,
	        vCheckbox: _checkbox2.default,
	        vRadio: _radio2.default
	    }
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pagination = __webpack_require__(235);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _pagination2.default;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(236)
	__vue_script__ = __webpack_require__(238)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/pagination/pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(252)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-40f287b2/pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(237);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(129)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(87)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(100);

	var _select = __webpack_require__(239);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-pagination',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-pagination',
	    current: {
	      type: Number,
	      default: 1
	    },
	    defaultCurrent: 1,
	    total: 0,
	    defaultPageSize: 10,
	    pageSize: {
	      type: Number,
	      default: 10
	    },
	    onChange: function onChange() {},
	    showSizeChanger: false,
	    pageSizeOptions: ['10', '20', '30', '40'],
	    onShowSizeChange: function onShowSizeChange() {},
	    showQuickJumper: false,
	    size: '',
	    simple: false,
	    showTotal: Function
	  }),
	  data: function data() {
	    return {
	      currentForSimple: 1,
	      totalText: '',
	      pageList: [],
	      allPages: 0,
	      showJumpPrev: false,
	      showJumpNext: false,
	      showFirstPager: false,
	      showLastPager: false,
	      pageLeft: 0,
	      pageRight: 0
	    };
	  },

	  watch: {
	    current: function current() {
	      this.onChange(this.current);
	    },
	    pageSize: function pageSize() {
	      var current = this.current;
	      var newCurrent = this.allPages;
	      current = current > newCurrent ? newCurrent : current;
	      this.current = current;
	      this.onShowSizeChange(current, Number(this.pageSize));
	    }
	  },
	  created: function created() {
	    this.current = this.current || this.defaultCurrent;
	    this.totalText = this.showTotal && this.showTotal(this.allPages);
	    this.options = this.pageSizeOptions.map(function (item, index) {
	      return {
	        value: item,
	        text: item + '\u6761/\u9875'
	      };
	    });
	  },

	  computed: {
	    allPages: function allPages() {
	      return Math.floor((this.total - 1) / Number(this.pageSize)) + 1;
	    },
	    pageList: function pageList() {
	      var biger = this.allPages <= 9;
	      var pageList = [];
	      var start = biger ? 1 : this.pageLeft;
	      var end = biger ? this.allPages : this.pageRight;
	      for (var i = start; i <= end; i++) {
	        pageList.push(i);
	      }
	      return pageList;
	    },
	    showJumpPrev: function showJumpPrev() {
	      return this.allPages > 9 && this.current - 1 >= 4;
	    },
	    showJumpNext: function showJumpNext() {
	      return this.allPages > 9 && this.allPages - this.current >= 4;
	    },
	    showFirstPager: function showFirstPager() {
	      return this.allPages > 9 && this.pageLeft !== 1;
	    },
	    showLastPager: function showLastPager() {
	      return this.allPages > 9 && this.pageRight !== this.allPages;
	    },
	    pageLeft: function pageLeft() {
	      var left = Math.max(1, this.current - 2);
	      if (this.allPages - this.current <= 2) {
	        left = this.allPages - 4;
	      }
	      return left;
	    },
	    pageRight: function pageRight() {
	      var right = Math.min(this.current + 2, this.allPages);
	      if (this.current - 1 <= 2) {
	        right = 1 + 4;
	      }
	      return right;
	    }
	  },
	  methods: {
	    _handleChange: function _handleChange(page) {
	      if (this._isValid(page)) {
	        if (page > this.allPages) {
	          page = this.allPages;
	        }
	        this.current = page;
	        if (this.simple) {
	          this.currentForSimple = page;
	        }
	      }
	    },
	    _prev: function _prev() {
	      if (this._hasPrev()) {
	        this._handleChange(this.current - 1);
	      }
	    },
	    _next: function _next() {
	      if (this._hasNext()) {
	        this._handleChange(this.current + 1);
	      }
	    },
	    _jumpPrev: function _jumpPrev() {
	      this._handleChange(Math.max(1, this.current - 5));
	    },
	    _jumpNext: function _jumpNext() {
	      this._handleChange(Math.max(this.allPages, this.current + 5));
	    },
	    _hasPrev: function _hasPrev() {
	      return this.current > 1;
	    },
	    _hasNext: function _hasNext() {
	      return this.current < this.allPages;
	    },
	    _isValid: function _isValid(page) {
	      return typeof page === 'number' && page >= 1 && page !== this.current;
	    },
	    _handleKeyUp: function _handleKeyUp(e) {
	      var _val = e.target.value;
	      var val = undefined;

	      if (_val === '') {
	        val = _val;
	      } else if (isNaN(Number(_val))) {
	        val = this.currentForSimple;
	      } else {
	        val = Number(_val);
	      }
	      this.currentForSimple = val;
	      if (e.keyCode === 13) {
	        this._handleChange(val);
	      } else if (e.keyCode === 38) {
	        this._handleChange(val - 1);
	      } else if (e.keyCode === 40) {
	        this._handleChange(val + 1);
	      }
	    },
	    _pageSizeChange: function _pageSizeChange() {}
	  },
	  components: {
	    vSelect: _select2.default
	  }
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _select = __webpack_require__(240);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _select2.default;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(241)
	__vue_script__ = __webpack_require__(243)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/select/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1b9f1c67/select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(129)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-1b9f1c67&scoped=true!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./select.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-1b9f1c67&scoped=true!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./select.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(87)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.ant-select-selection__choice__remove[_v-1b9f1c67]{\n    top: 0\n}\n", ""]);

	// exports


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _entries = __webpack_require__(244);

	var _entries2 = _interopRequireDefault(_entries);

	var _stringify = __webpack_require__(249);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _slicedToArray2 = __webpack_require__(169);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _func = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-select',
	    data: function data() {
	        return {
	            prefix: 'ant-select',
	            searchVal: '',
	            multipleSearchStyle: {},
	            searchFound: false,
	            show: false,
	            style: {},
	            label: '',
	            isSearchFocus: false,
	            dropdownHeight: 0,
	            container: null
	        };
	    },
	    props: {
	        multiple: {
	            type: Boolean,
	            default: false
	        },
	        notFoundContent: {
	            type: String,
	            default: '没有找到'
	        },
	        placement: {
	            type: String,
	            default: 'bottom'
	        },
	        search: {
	            type: Boolean,
	            default: false
	        },
	        maxHeight: {
	            type: Number,
	            default: 300
	        },
	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        allowClear: {
	            type: Boolean,
	            default: true
	        },
	        value: {
	            type: [Number, String, Array],
	            required: true
	        },
	        placeholder: {
	            type: String,
	            default: '请选择'
	        },
	        options: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        popupContainer: {
	            type: Function,
	            default: function _default() {
	                return document.body;
	            }
	        },
	        size: String,
	        position: {
	            type: String,
	            default: 'absolute'
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        this.init();
	        this.container = this.popupContainer();

	        this.$els.dropdown.style.position = this.position;
	        this.container.appendChild(this.$els.dropdown);

	        window.addEventListener('resize', function () {
	            clearTimeout(_this.resizeTimer);
	            _this.resizeTimer = setTimeout(function () {
	                _this.setPosition();
	            }, 200);
	        });
	        window.addEventListener('click', this.closeDropdown);
	    },
	    beforeDestroy: function beforeDestroy() {
	        window.removeEventListener('click', this.closeDropdown);
	    },

	    watch: {
	        searchVal: function searchVal(val) {
	            var _this2 = this;

	            if (val) {
	                (function () {
	                    _this2.searchFound = false;
	                    var show = false;
	                    _this2.mapOptions(function (_ref) {
	                        var _ref2 = (0, _slicedToArray3.default)(_ref, 3),
	                            type = _ref2[0],
	                            path = _ref2[1],
	                            item = _ref2[2];

	                        var isIncluded = item.text.includes(val);
	                        if (isIncluded) _this2.searchFound = true;

	                        if (type == 'item') {
	                            _this2.$set('options[' + path + '].show', isIncluded);
	                        } else {
	                            _this2.$set('options[' + path[0] + '].data[' + path[1] + '].show', isIncluded);
	                            if (isIncluded) show = true;
	                        }
	                    }, function (i, group) {
	                        _this2.$set('options[' + i + '].show', show);
	                        show = false;
	                    });
	                    _this2.multipleSearchStyle = { width: _this2.$els.searchMirror.offsetWidth + 'px' };
	                })();
	            } else {
	                this.setOptions({ show: true }, { show: true });
	                this.multipleSearchStyle = {};
	            }
	        }
	    },
	    computed: {
	        wrapCls: function wrapCls() {
	            return [this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-disabled', this.disabled), (0, _defineProperty3.default)({}, this.prefix + '-' + this.size, this.size)];
	        },
	        selectionCls: function selectionCls() {
	            return [this.prefix + '-selection', (0, _defineProperty3.default)({}, this.prefix + '-selection--single', !this.multiple), (0, _defineProperty3.default)({}, this.prefix + '-selection--multiple', this.multiple)];
	        },
	        dropdownCls: function dropdownCls() {
	            return [this.prefix + '-dropdown', this.prefix + '-dropdown-placement-bottomLeft', (0, _defineProperty3.default)({}, this.prefix + '-dropdown--single', !this.multiple), (0, _defineProperty3.default)({}, this.prefix + '-dropdown--multiple', this.multiple)];
	        }
	    },
	    methods: {
	        mapOptions: function mapOptions(callback, groupCallback) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(this.options.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
	                        i = _step$value[0],
	                        opt = _step$value[1];

	                    if (opt.label) {
	                        if (opt.data && opt.data.length) {
	                            var _iteratorNormalCompletion2 = true;
	                            var _didIteratorError2 = false;
	                            var _iteratorError2 = undefined;

	                            try {
	                                for (var _iterator2 = (0, _getIterator3.default)(opt.data.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                    var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),
	                                        j = _step2$value[0],
	                                        item = _step2$value[1];

	                                    var res = callback(['groupItem', [i, j], item]);
	                                    if (res) break;
	                                }
	                            } catch (err) {
	                                _didIteratorError2 = true;
	                                _iteratorError2 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                        _iterator2.return();
	                                    }
	                                } finally {
	                                    if (_didIteratorError2) {
	                                        throw _iteratorError2;
	                                    }
	                                }
	                            }

	                            groupCallback && groupCallback(i, opt);
	                        }
	                    } else {
	                        var _res = callback(['item', i, opt]);
	                        if (_res) break;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        },
	        init: function init() {
	            var _this3 = this;

	            this.options = JSON.parse((0, _stringify2.default)(this.options));
	            if (this.multiple) this.label = [];

	            this.mapOptions(function (_ref9) {
	                var _ref10 = (0, _slicedToArray3.default)(_ref9, 3),
	                    type = _ref10[0],
	                    path = _ref10[1],
	                    item = _ref10[2];

	                var selected = false;
	                if (_this3.multiple && _this3.value.includes(item.value)) {
	                    selected = true;
	                    _this3.label.push(item.text);
	                } else if (!_this3.multiple && _this3.value === item.value) {
	                    selected = true;
	                    _this3.label = item.text;
	                }
	                if (type == 'item') {
	                    _this3.$set('options[' + path + '].selected', selected);
	                    _this3.$set('options[' + path + '].show', true);
	                } else {
	                    _this3.$set('options[' + path[0] + '].data[' + path[1] + '].selected', selected);
	                    _this3.$set('options[' + path[0] + '].data[' + path[1] + '].show', true);
	                }
	            }, function (i, group) {
	                _this3.$set('options[' + i + '].show', true);
	            });
	        },
	        getDropdownHeight: function getDropdownHeight() {
	            this.dropdownHeight = parseFloat(getComputedStyle(this.$els.dropdown, null).height);
	        },
	        setOptions: function setOptions(opt, groupOpt) {
	            var _this4 = this;

	            this.mapOptions(function (_ref11) {
	                var _ref12 = (0, _slicedToArray3.default)(_ref11, 3),
	                    type = _ref12[0],
	                    path = _ref12[1],
	                    item = _ref12[2];

	                if (type == 'item') {
	                    var _iteratorNormalCompletion3 = true;
	                    var _didIteratorError3 = false;
	                    var _iteratorError3 = undefined;

	                    try {
	                        for (var _iterator3 = (0, _getIterator3.default)((0, _entries2.default)(opt)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                            var _step3$value = (0, _slicedToArray3.default)(_step3.value, 2),
	                                key = _step3$value[0],
	                                val = _step3$value[1];

	                            _this4.$set('options[' + path + '].' + key, val);
	                        }
	                    } catch (err) {
	                        _didIteratorError3 = true;
	                        _iteratorError3 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                _iterator3.return();
	                            }
	                        } finally {
	                            if (_didIteratorError3) {
	                                throw _iteratorError3;
	                            }
	                        }
	                    }
	                } else {
	                    var _iteratorNormalCompletion4 = true;
	                    var _didIteratorError4 = false;
	                    var _iteratorError4 = undefined;

	                    try {
	                        for (var _iterator4 = (0, _getIterator3.default)((0, _entries2.default)(opt)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                            var _step4$value = (0, _slicedToArray3.default)(_step4.value, 2),
	                                key = _step4$value[0],
	                                val = _step4$value[1];

	                            _this4.$set('options[' + path[0] + '].data[' + path[1] + '].' + key, val);
	                        }
	                    } catch (err) {
	                        _didIteratorError4 = true;
	                        _iteratorError4 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                                _iterator4.return();
	                            }
	                        } finally {
	                            if (_didIteratorError4) {
	                                throw _iteratorError4;
	                            }
	                        }
	                    }
	                }
	            }, function (i, group) {
	                if (groupOpt) {
	                    var _iteratorNormalCompletion5 = true;
	                    var _didIteratorError5 = false;
	                    var _iteratorError5 = undefined;

	                    try {
	                        for (var _iterator5 = (0, _getIterator3.default)((0, _entries2.default)(groupOpt)), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                            var _step5$value = (0, _slicedToArray3.default)(_step5.value, 2),
	                                key = _step5$value[0],
	                                val = _step5$value[1];

	                            _this4.$set('options[' + i + '].' + key, val);
	                        }
	                    } catch (err) {
	                        _didIteratorError5 = true;
	                        _iteratorError5 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                                _iterator5.return();
	                            }
	                        } finally {
	                            if (_didIteratorError5) {
	                                throw _iteratorError5;
	                            }
	                        }
	                    }
	                }
	            });
	        },
	        setPosition: function setPosition() {
	            if (!this.$el) return;
	            var p = (0, _func.getOffset)(this.$el, this.container);

	            this.$set('style', {
	                top: (this.placement == 'top' ? p.top - this.dropdownHeight - 4 : p.bottom + 4) + 'px',
	                left: p.left + 'px',
	                width: p.right - p.left + 'px',
	                maxHeight: this.maxHeight + 'px'
	            });
	        },
	        closeDropdown: function closeDropdown() {
	            this.show = false;
	        },
	        toggleDropdown: function toggleDropdown() {
	            var _this5 = this;

	            if (this.disabled) return;
	            if (this.search) {
	                this.show = true;
	                this.$els.searchInput.focus();
	            } else {
	                this.show = !this.show;
	            }
	            if (!this.dropdownHeight && this.show) {
	                this.$nextTick(function () {
	                    _this5.getDropdownHeight();
	                    _this5.setPosition();
	                });
	            }
	        },
	        searchBlur: function searchBlur() {
	            var _this6 = this;

	            this.isSearchFocus = false;
	            setTimeout(function () {
	                _this6.searchVal = '';
	            }, 300);
	        },
	        clear: function clear() {
	            this.value = '';
	            this.label = '';
	            this.setOptions({ selected: false });
	        },
	        remove: function remove(i, text) {
	            var _this7 = this;

	            this.label.splice(i, 1);
	            this.value.splice(i, 1);

	            this.mapOptions(function (_ref13) {
	                var _ref14 = (0, _slicedToArray3.default)(_ref13, 3),
	                    type = _ref14[0],
	                    path = _ref14[1],
	                    item = _ref14[2];

	                if (item.text == text) {
	                    if (type == 'item') {
	                        _this7.$set('options[' + path + '].selected', false);
	                    } else {
	                        _this7.$set('options[' + path[0] + '].data[' + path[1] + '].selected', false);
	                    }
	                    return true;
	                }
	            });
	        },
	        select: function select(path) {
	            var opt = void 0;
	            if (typeof path == 'number') {
	                opt = this.options[path];
	            } else {
	                opt = this.options[path[0]].data[path[1]];
	            }
	            if (opt.disabled) return;
	            this.searchVal = '';
	            if (!this.multiple) this.setOptions({ selected: false });
	            if (this.multiple) {
	                if (opt.selected) {
	                    var j = this.label.indexOf(opt.text);
	                    this.label.splice(j, 1);
	                    this.value.splice(j, 1);
	                } else {
	                    this.value.push(opt.value);
	                    this.label.push(opt.text);
	                }
	                opt.selected = !opt.selected;
	            } else {
	                opt.selected = true;
	                this.value = opt.value;
	                this.label = opt.text;
	            }
	        }
	    }
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(245), __esModule: true };

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(246);
	module.exports = __webpack_require__(137).Object.entries;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(135)
	  , $entries = __webpack_require__(247)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(188)
	  , toIObject = __webpack_require__(177)
	  , isEnum    = __webpack_require__(248).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(250), __esModule: true };

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(137)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapCls\" @click.stop=\"toggleDropdown\" _v-1b9f1c67=\"\">\n    <div :class=\"selectionCls\" role=\"combobox\" aria-autocomplete=\"list\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"0\" _v-1b9f1c67=\"\">\n        <div class=\"ant-select-selection__rendered\" _v-1b9f1c67=\"\">\n            <template v-if=\"label\">\n                <ul v-if=\"multiple\" _v-1b9f1c67=\"\">\n                    <li v-for=\"(i,text) in label\" unselectable=\"unselectable\" class=\"ant-select-selection__choice\" title=\"{{text}}\" style=\"user-select: none;\" _v-1b9f1c67=\"\">\n                        <div class=\"ant-select-selection__choice__content\" _v-1b9f1c67=\"\">{{text}}</div>\n                        <span class=\"ant-select-selection__choice__remove\" @click=\"remove(i,text)\" _v-1b9f1c67=\"\"></span>\n                    </li>\n                    <li v-if=\"search &amp;&amp; multiple\" class=\"ant-select-search ant-select-search--inline\" _v-1b9f1c67=\"\">\n                        <div class=\"ant-select-search__field__wrap\" _v-1b9f1c67=\"\">\n                            <input class=\"ant-select-search__field\" v-model=\"searchVal\" :style=\"multipleSearchStyle\" @focus=\"isSearchFocus = true\" @blur=\"searchBlur\" v-el:search-input=\"\" _v-1b9f1c67=\"\">\n                            <span class=\"ant-select-search__field__mirror\" v-el:search-mirror=\"\" _v-1b9f1c67=\"\">{{searchVal}}</span>\n                        </div>\n                    </li>\n                </ul>\n                <div v-else=\"\" class=\"ant-select-selection-selected-value\" title=\"Lucy\" :style=\"{opacity: isSearchFocus?0.4:1};\" _v-1b9f1c67=\"\">{{label}}</div>\n            </template>\n            <div v-show=\"((multiple &amp;&amp; !label.length) || (!multiple &amp;&amp; !label)) &amp;&amp; !searchVal\" unselectable=\"unselectable\" class=\"ant-select-selection__placeholder\" style=\"user-select: none;\" _v-1b9f1c67=\"\">{{placeholder}}</div>\n            <div v-if=\"search &amp;&amp; !multiple\" class=\"ant-select-search ant-select-search--inline\" _v-1b9f1c67=\"\">\n                <div class=\"ant-select-search__field__wrap\" _v-1b9f1c67=\"\">\n                    <input class=\"ant-select-search__field\" v-model=\"searchVal\" @focus=\"isSearchFocus = true\" @blur=\"searchBlur\" v-el:search-input=\"\" _v-1b9f1c67=\"\">\n                    <span class=\"ant-select-search__field__mirror\" _v-1b9f1c67=\"\"></span>\n                </div>\n            </div>\n        </div>\n        <span v-if=\"allowClear &amp;&amp; label &amp;&amp; !multiple\" unselectable=\"unselectable\" class=\"ant-select-selection__clear\" style=\"-webkit-user-select: none\" @click.stop=\"clear\" _v-1b9f1c67=\"\"></span>\n        <span v-if=\"!multiple\" class=\"ant-select-arrow\" unselectable=\"unselectable\" style=\"user-select: none;\" _v-1b9f1c67=\"\">\n            <b _v-1b9f1c67=\"\">\n            </b>\n        </span>\n    </div>\n    <div v-el:dropdown=\"\" v-show=\"show\" transition=\"slide-up\" style=\"overflow: auto\" :style=\"style\" :class=\"dropdownCls\" _v-1b9f1c67=\"\">\n        <div style=\"overflow: auto;\" _v-1b9f1c67=\"\">\n            <ul class=\"ant-select-dropdown-menu ant-select-dropdown-menu-vertical  ant-select-dropdown-menu-root\" role=\"menu\" aria-activedescendant=\"\" _v-1b9f1c67=\"\">\n                <li v-if=\"searchVal &amp;&amp; !searchFound\" unselectable=\"unselectable\" class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\" role=\"menuitem\" aria-selected=\"false\" style=\"user-select: none;\" _v-1b9f1c67=\"\">{{notFoundContent}}</li>\n                <template v-for=\"(i,option) in options\">\n                    <template v-if=\"option.label\">\n                        <li v-show=\"option.show\" class=\" ant-select-dropdown-menu-item-group\" _v-1b9f1c67=\"\">\n                            <div class=\"ant-select-dropdown-menu-item-group-title\" _v-1b9f1c67=\"\">\n                                {{option.label}}\n                            </div>\n                            <ul v-if=\"option.data &amp;&amp; option.data.length\" class=\"ant-select-dropdown-menu-item-group-list\" _v-1b9f1c67=\"\">\n                                <li v-show=\"option.show\" v-for=\"item in option.data\" unselectable=\"unselectable\" :class=\"['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': item.disabled}, {'ant-select-dropdown-menu-item-selected': item.selected}]\" role=\"menuitem\" aria-selected=\"false\" style=\"user-select: none;\" @click=\"select([i,$index])\" _v-1b9f1c67=\"\">\n                                    {{item.text}}\n                                </li>\n                            </ul>\n                        </li>\n                    </template>\n                    <template v-else=\"\">\n                        <li v-show=\"option.show\" unselectable=\"unselectable\" :class=\"['ant-select-dropdown-menu-item', {'ant-select-dropdown-menu-item-disabled': option.disabled}, {'ant-select-dropdown-menu-item-selected': option.selected}]\" role=\"menuitem\" aria-selected=\"false\" style=\"user-select: none;\" @click=\"select(i)\" _v-1b9f1c67=\"\">\n                            {{option.text}}\n                        </li>\n                    </template>\n                </template>\n            </ul>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 252 */
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\t\t<ul \n\t\t\tv-if=\"simple\"\n\t\t\t:class=\"[prefixCls, prefixCls + '-simple']\">\n\t  \t<li \n\t  \t\ttitle=\"上一页\" \n\t  \t\t@click=\"_handleChange(current - 1)\"\n\t  \t\t:class=\"prefixCls + '-prev'\">\n\t  \t\t<a></a>\n\t  \t</li>\n\n\t  \t<div \n\t  \t\ttitle=\"{{current}}/{{allPages}}\" \n\t  \t\t:class=\"prefixCls + `-simple-pager`\">\n\t  \t\t<input \n\t  \t\t\ttype=\"text\" \n\t  \t\t\tv-model=\"currentForSimple\"\n\t  \t\t\t@keyup.prevent=\"_handleKeyUp($event)\"\n\t  \t\t\t@keydown.down.up.prevent\n\t  \t\t\t@change=\"_handleKeyUp\">\n\t  \t\t<span class=\"ant-pagination-slash\">／</span>\n\t  \t\t{{allPages}}\n\t  \t</div>\n\n\t  \t<li \n\t  \t\ttitle=\"下一页\" \n\t  \t\t@click=\"_handleChange(current + 1)\"\n\t  \t\t:class=\"prefixCls + '-next'\">\n\t  \t\t<a></a>\n\t  \t</li>\n\t  </ul>\n\n\t  <ul \n\t  \tv-else\n\t  \t:class=\"[prefixCls, {'mini':!!size}]\">\n\t  \t<span :class=\"prefixCls + '-total-text'\">{{totalText}}</span>\n\t  \t<li \n\t  \t\ttitle=\"上一页\" \n\t  \t\t@click=\"_prev\"\n\t  \t\t:class=\"[\n\t  \t\t\tprefixCls + '-prev', \n\t  \t\t\t_hasPrev() ? '' : prefixCls + '-disabled'\n\t  \t\t]\">\n\t  \t\t<a></a>\n\t  \t</li>\n\n\t  \t<li \n\t  \t\tv-if=\"showFirstPager\" \n\t  \t\ttitle=\"1\" \n\t  \t\t@click=\"_handleChange(1)\"\n\t  \t\t:class=\"[\n\t  \t\t\tprefixCls + '-item', \n\t  \t\t\tprefixCls + '-item-1',\n\t  \t\t\tcurrent == 1 ? prefixCls + '-item-active' : ''\n\t  \t\t]\">\n\t  \t  <a>1</a>\n\t  \t</li>\n\n\t  \t<li \n\t  \t\tv-if=\"showJumpPrev\" \n\t  \t\ttitle=\"向前5页\" \n\t  \t\t@click=\"_jumpPrev\"\n\t  \t\t:class=\"prefixCls + '-jump-prev'\">\n\t  \t\t<a></a></li>\n\t  \t<li \n\t  \t\tv-for=\"index in pageList\" \n\t  \t\t@click=\"_handleChange(index)\" \n\t  \t\ttitle=\"{{index}}\"  \n\t  \t\t:class=\"[\n\t  \t\t\tprefixCls + '-item', \n\t  \t\t\tprefixCls + '-item-' + index, \n\t  \t\t\tcurrent == index ? prefixCls + '-item-active' : ''\n\t  \t\t]\">\n\t  \t  <a>{{index}}</a>\n\t  \t</li>\n\n\t  \t<li \n\t  \t\tv-if=\"showJumpNext\" \n\t  \t\ttitle=\"向后5页\" \n\t  \t\t@click=\"_jumpNext\"\n\t  \t\t:class=\"prefixCls + '-jump-next'\">\n\t  \t\t<a></a>\n\t  \t</li>\n\n\t  \t<li \n\t  \t\tv-if=\"showLastPager\" \n\t  \t\ttitle=\"{{allPages}}\"\n\t  \t\t@click=\"_handleChange(allPages)\"\n\t  \t\t:class=\"[\n\t  \t\t\tprefixCls + '-item', \n\t  \t\t\tprefixCls + '-item-' + allPages, \n\t  \t\t\tcurrent == allPages ? prefixCls + '-item-active' : ''\n\t  \t\t]\">\n\t  \t  <a>{{allPages}}</a>\n\t  \t</li>\n\n\t  \t<li \n\t  \t\ttitle=\"下一页\" \n\t  \t\t@click=\"_next\"\n\t  \t\t:class=\"[\n\t  \t\t\tprefixCls + '-next',\n\t  \t\t\t_hasNext() ? '' : prefixCls + '-disabled'\n\t  \t\t]\">\n\t  \t\t<a></a>\n\t  \t</li>\n\n\t  \t<div :class=\"prefixCls + '-options'\">\n\t  \t\t<div \n\t  \t\t\tv-if=\"showSizeChanger\"\n\t  \t\t\t:class=\"prefixCls + '-options-size-changer'\">\n          <v-Select\n            :size=\"!!size ? 'sm' : ''\"\n            :options=\"options\" \n            :value.sync=\"pageSize\"\n\t\t\t\t\t\t:allow-clear=\"false\"\n\t\t\t\t\t\tplacement=\"top\"\n\t\t\t\t\t></v-Select>\n\t  \t\t</div>\n        <div \n          v-if=\"showQuickJumper\" \n          :class=\"prefixCls + '-options-quick-jumper'\">\n        跳至\n        <input \n          type=\"text\" \n          :value=\"currentForSimple\"\n          @keyup=\"_handleKeyUp($event)\"\n          @change=\"_handleKeyUp\">\n        页\n        </div>\n\t  \t</div>\n\t  </ul>\n\t</div>\n";

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _spin = __webpack_require__(254);

	var _spin2 = _interopRequireDefault(_spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _spin2.default;

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(255)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/spin/spin.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(259)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5bb468e7/spin.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _spinInner = __webpack_require__(256);

	var _spinInner2 = _interopRequireDefault(_spinInner);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-spin',
	  data: function data() {
	    return {
	      prefix: 'ant-spin',
	      hasSlot: false
	    };
	  },
	  props: (0, _utils.defaultProps)({
	    size: String,
	    spinning: true,
	    tip: String
	  }),
	  ready: function ready() {
	    if (this._slotContents && this._slotContents.default) {
	      this.hasSlot = true;
	    }
	  },

	  computed: {
	    containerCls: function containerCls() {
	      return [this.prefix + '-container', (0, _defineProperty3.default)({}, this.prefix + '-blur', this.spinning)];
	    }
	  },
	  components: { spinInner: _spinInner2.default }
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(257)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/spin/spinInner.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-61882e42/spinInner.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: (0, _utils.defaultProps)({
	        prefix: 'ant-spin',
	        size: String,
	        spinning: true,
	        tip: String
	    }),
	    computed: {
	        wrapClasses: function wrapClasses() {
	            var _ref;

	            var size = { small: 'sm', large: 'lg' }[this.size];

	            return [this.prefix, (_ref = {}, (0, _defineProperty3.default)(_ref, this.prefix + '-spinning', this.spinning), (0, _defineProperty3.default)(_ref, this.prefix + '-show-text', this.tip), (0, _defineProperty3.default)(_ref, this.prefix + '-' + size, size), _ref)];
	        }
	    }
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <span class=\"{{prefix}}-dot\">\n        <i></i>\n        <i></i>\n        <i></i>\n        <i></i>\n    </span>\n    <div class=\"{{prefix}}-text\">{{tip}}</div>\n</div>\n";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "\n<template v-if=\"hasSlot\">\n  <div :class=\"{[`${prefix}-nested-loading`]:spinning}\">\n    <spin-inner :size=\"size\" :spinning=\"spinning\" :tip=\"tip\" :prefix=\"prefix\"></spin-inner>\n    <div :class=\"containerCls\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n<spin-inner v-else :size=\"size\" :spinning=\"spinning\" :tip=\"tip\" :prefix=\"prefix\"></spin-inner>\n";

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _iconfont = __webpack_require__(261);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _iconfont2.default;

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(262)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/iconfont/iconfont.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(263)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-10f81db2/iconfont.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-icon',
	  data: function data() {
	    return {
	      prefix: 'anticon'
	    };
	  },
	  props: {
	    type: {
	      type: String,
	      require: true
	    },
	    spin: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    iconClasses: function iconClasses() {
	      return [this.prefix, this.prefix + '-' + this.type, (0, _defineProperty3.default)({}, this.prefix + '-spin', this.spin)];
	    }
	  }
	};

/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"iconClasses\">\n  <slot></slot>\n</i>\n";

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _radio = __webpack_require__(265);

	var _radio2 = _interopRequireDefault(_radio);

	var _radioGroup = __webpack_require__(268);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_radio2.default.Group = _radioGroup2.default;

	exports.default = _radio2.default;

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(266)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/radio/radio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(267)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6db34fdf/radio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-radio',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-radio',
	    type: 'radio',
	    checked: Boolean,
	    defaultChecked: false,
	    value: (0, _utils.oneOfType)([String, Number, Boolean]),
	    onChange: function onChange() {},

	    disabled: Boolean,

	    style: {},
	    className: ''
	  }),

	  computed: {
	    wrapClasses: function wrapClasses() {
	      return [this.className, (0, _defineProperty3.default)({}, this.className + '-checked', this.checked), (0, _defineProperty3.default)({}, this.className + '-disabled', this.disabled)];
	    },
	    radioClasses: function radioClasses() {
	      return [this.prefixCls, (0, _defineProperty3.default)({}, this.prefixCls + '-checked', this.checked), (0, _defineProperty3.default)({}, this.prefixCls + '-checked-' + (this.checked ? 1 : 0), !!this.checked), (0, _defineProperty3.default)({}, this.prefixCls + '-disabled', this.disabled)];
	    }
	  },

	  compiled: function compiled() {
	    if (this.checked == null) {
	      this.checked = this.defaultChecked;
	    }
	    if (this.type === 'button') {
	      this.prefixCls = 'ant-radio-button';
	    }
	  },


	  methods: {
	    _handleChange: function _handleChange(e) {
	      this.checked = e.target.checked;
	      this.onChange(e);
	    }
	  }
	};

/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "\n<label :class=\"wrapClasses\">\n  <span :class=\"radioClasses\">\n    <span :class=\"prefixCls + '-inner'\"></span>\n    <input\n      type=\"radio\"\n      :disabled=\"disabled\"\n      :value=\"value\"\n      :checked=\"!!checked\"\n      :class=\"prefixCls + '-input'\"\n      @change=\"_handleChange\">\n  </span>\n  <slot>Radio</slot>\n</label>\n";

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(269)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/radio/radioGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(270)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-34e20890/radioGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	var _radio = __webpack_require__(265);

	var _radio2 = _interopRequireDefault(_radio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-radio-group',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-radio-group',
	    type: 'radio',
	    value: (0, _utils.oneOfType)([String, Number, Boolean]),
	    defaultValue: (0, _utils.oneOfType)([String, Number, Boolean]),
	    radios: [],
	    disabled: false,
	    size: String,
	    onChange: function onChange() {}
	  }),

	  components: { vRadio: _radio2.default },

	  computed: {
	    wrapClasses: function wrapClasses() {
	      var size = ['small', 'large'].indexOf(this.size) !== -1 ? this.size : '';

	      return [this.prefixCls, (0, _defineProperty3.default)({}, this.prefixCls + '-' + size, size)];
	    },
	    radioClasses: function radioClasses() {
	      return this.type === 'button' ? 'ant-radio-button-wrapper' : 'ant-radio-wrapper';
	    }
	  },

	  created: function created() {
	    if (this.value == null) {
	      this.value = this.defaultValue;
	    }
	    if (this.disabled) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.radios), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var radio = _step.value;

	          if (radio.hasOwnProperty('disabled') && radio.disabled === false) continue;
	          radio.disabled = true;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  },


	  methods: {
	    _onRadioChange: function _onRadioChange(index, e) {
	      e.target.name = this.radios[index].name;
	      this.value = e.target.value;
	      this.onChange(e);
	    }
	  }
	};

/***/ },
/* 270 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n  <v-radio v-for=\"radio in radios\" :type=\"type\" :class-name=\"radioClasses\" :disabled=\"radio.disabled\" :value=\"radio.value\" :on-change=\"_onRadioChange.bind(radio, $index)\" :checked=\"value == radio.value\"><span>{{radio.name}}</span></v-radio>\n</div>\n";

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.$ = factory());
	}(this, (function () { 'use strict';

	/*
	 * @module Util
	 */

	/*
	 * Reference to the global scope
	 * @private
	 */

	var global = new Function('return this')();

	/**
	 * Convert `NodeList` to `Array`.
	 *
	 * @param {NodeList|Array} collection
	 * @return {Array}
	 * @private
	 */

	var toArray = function (collection) {
	  var length = collection.length;
	  var result = new Array(length);
	  for (var i = 0; i < length; i++) {
	    result[i] = collection[i];
	  }
	  return result;
	};

	/**
	 * Faster alternative to [].forEach method
	 *
	 * @param {Node|NodeList|Array} collection
	 * @param {Function} callback
	 * @return {Node|NodeList|Array}
	 * @private
	 */

	var each = function (collection, callback, thisArg) {
	  var length = collection.length;
	  if (length !== undefined && collection.nodeType === undefined) {
	    for (var i = 0; i < length; i++) {
	      callback.call(thisArg, collection[i], i, collection);
	    }
	  } else {
	    callback.call(thisArg, collection, 0, collection);
	  }
	  return collection;
	};

	/**
	 * Assign enumerable properties from source object(s) to target object
	 *
	 * @method extend
	 * @param {Object} target Object to extend
	 * @param {Object} [source] Object to extend from
	 * @return {Object} Extended object
	 * @example
	 *     $.extend({a: 1}, {b: 2});
	 *     // {a: 1, b: 2}
	 * @example
	 *     $.extend({a: 1}, {b: 2}, {a: 3});
	 *     // {a: 3, b: 2}
	 */

	var extend = function (target) {
	  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    sources[_key - 1] = arguments[_key];
	  }

	  sources.forEach(function (src) {
	    for (var prop in src) {
	      target[prop] = src[prop];
	    }
	  });
	  return target;
	};

	/**
	 * Return the collection without duplicates
	 *
	 * @param collection Collection to remove duplicates from
	 * @return {Node|NodeList|Array}
	 * @private
	 */

	var uniq = function (collection) {
	  return collection.filter(function (item, index) {
	    return collection.indexOf(item) === index;
	  });
	};

	/**
	 * @module Selector
	 */

	var isPrototypeSet = false;

	var reFragment = /^\s*<(\w+|!)[^>]*>/;
	var reSingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
	var reSimpleSelector = /^[\.#]?[\w-]*$/;

	/*
	 * Versatile wrapper for `querySelectorAll`.
	 *
	 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
	 * @param {String|Node|NodeList} context=document The context for the selector to query elements.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     var $items = $(.items');
	 * @example
	 *     var $element = $(domElement);
	 * @example
	 *     var $list = $(nodeList, document.body);
	 * @example
	 *     var $element = $('<p>evergreen</p>');
	 */

	var $$2 = function (selector) {
	  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;


	  var collection = void 0;

	  if (!selector) {

	    collection = document.querySelectorAll(null);
	  } else if (selector instanceof Wrapper) {

	    return selector;
	  } else if (typeof selector !== 'string') {

	    collection = selector.nodeType || selector === window ? [selector] : selector;
	  } else if (reFragment.test(selector)) {

	    collection = createFragment(selector);
	  } else {

	    context = typeof context === 'string' ? document.querySelector(context) : context.length ? context[0] : context;

	    collection = querySelector(selector, context);
	  }

	  return wrap(collection);
	};

	/*
	 * Find descendants matching the provided `selector` for each element in the collection.
	 *
	 * @param {String|Node|NodeList|Array} selector Query selector, `Node`, `NodeList`, array of elements, or HTML fragment string.
	 * @return {Object} The wrapped collection
	 * @example
	 *     $('.selector').find('.deep').$('.deepest');
	 */

	var find = function (selector) {
	  var nodes = [];
	  each(this, function (node) {
	    return each(querySelector(selector, node), function (child) {
	      if (nodes.indexOf(child) === -1) {
	        nodes.push(child);
	      }
	    });
	  });
	  return $$2(nodes);
	};

	/*
	 * Returns `true` if the element would be selected by the specified selector string; otherwise, returns `false`.
	 *
	 * @param {Node} element Element to test
	 * @param {String} selector Selector to match against element
	 * @return {Boolean}
	 *
	 * @example
	 *     $.matches(element, '.match');
	 */

	var matches = function () {
	  var context = typeof Element !== 'undefined' ? Element.prototype : global;
	  var _matches = context.matches || context.matchesSelector || context.mozMatchesSelector || context.msMatchesSelector || context.oMatchesSelector || context.webkitMatchesSelector;
	  return function (element, selector) {
	    return _matches.call(element, selector);
	  };
	}();

	/*
	 * Use the faster `getElementById`, `getElementsByClassName` or `getElementsByTagName` over `querySelectorAll` if possible.
	 *
	 * @private
	 * @param {String} selector Query selector.
	 * @param {Node} context The context for the selector to query elements.
	 * @return {Object} NodeList, HTMLCollection, or Array of matching elements (depending on method used).
	 */

	var querySelector = function (selector, context) {

	  var isSimpleSelector = reSimpleSelector.test(selector);

	  if (isSimpleSelector) {
	    if (selector[0] === '#') {
	      var element = (context.getElementById ? context : document).getElementById(selector.slice(1));
	      return element ? [element] : [];
	    }
	    if (selector[0] === '.') {
	      return context.getElementsByClassName(selector.slice(1));
	    }
	    return context.getElementsByTagName(selector);
	  }

	  return context.querySelectorAll(selector);
	};

	/*
	 * Create DOM fragment from an HTML string
	 *
	 * @private
	 * @param {String} html String representing HTML.
	 * @return {NodeList}
	 */

	var createFragment = function (html) {

	  if (reSingleTag.test(html)) {
	    return [document.createElement(RegExp.$1)];
	  }

	  var elements = [];
	  var container = document.createElement('div');
	  var children = container.childNodes;

	  container.innerHTML = html;

	  for (var i = 0, l = children.length; i < l; i++) {
	    elements.push(children[i]);
	  }

	  return elements;
	};

	/*
	 * Calling `$(selector)` returns a wrapped collection of elements.
	 *
	 * @private
	 * @param {NodeList|Array} collection Element(s) to wrap.
	 * @return Object) The wrapped collection
	 */

	var wrap = function (collection) {

	  if (!isPrototypeSet) {
	    Wrapper.prototype = $$2.fn;
	    Wrapper.prototype.constructor = Wrapper;
	    isPrototypeSet = true;
	  }

	  return new Wrapper(collection);
	};

	/*
	 * Constructor for the Object.prototype strategy
	 *
	 * @constructor
	 * @private
	 * @param {NodeList|Array} collection Element(s) to wrap.
	 */

	var Wrapper = function (collection) {
	  var i = 0;
	  var length = collection.length;
	  for (; i < length;) {
	    this[i] = collection[i++];
	  }
	  this.length = length;
	};

	var selector = Object.freeze({
		$: $$2,
		find: find,
		matches: matches,
		Wrapper: Wrapper
	});

	/**
	 * @module Array
	 */

	var ArrayProto = Array.prototype;

	/**
	 * Checks if the given callback returns a true(-ish) value for each element in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Boolean} Whether each element passed the callback check.
	 * @example
	 *     $('.items').every(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 *     // true/false
	 */

	var every = ArrayProto.every;

	/**
	 * Filter the collection by selector or function, and return a new collection with the result.
	 *
	 * @param {String|Function} selector Selector or function to filter the collection.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Object} A new wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').filter('.active');
	 * @example
	 *     $('.items').filter(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 */

	var filter = function (selector, thisArg) {
	  var callback = typeof selector === 'function' ? selector : function (element) {
	    return matches(element, selector);
	  };
	  return $$2(ArrayProto.filter.call(this, callback, thisArg));
	};

	/**
	 * Execute a function for each element in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').forEach(function(element) {
	 *         element.style.color = 'evergreen';
	 *     );
	 */

	var forEach = function (callback, thisArg) {
	  return each(this, callback, thisArg);
	};

	var each$1 = forEach;

	/**
	 * Returns the index of an element in the collection.
	 *
	 * @param {Node} element
	 * @return {Number} The zero-based index, -1 if not found.
	 * @example
	 *     $('.items').indexOf(element);
	 *     // 2
	 */

	var indexOf = ArrayProto.indexOf;

	/**
	 * Create a new collection by executing the callback for each element in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @param {Object} [thisArg] Value to use as `this` when executing `callback`.
	 * @return {Array} Collection with the return value of the executed callback for each element.
	 * @example
	 *     $('.items').map(function(element) {
	 *         return element.getAttribute('name')
	 *     });
	 *     // ['ever', 'green']
	 */

	var map = ArrayProto.map;

	/**
	 * Removes the last element from the collection, and returns that element.
	 *
	 * @return {Object} The last element from the collection.
	 * @example
	 *     var lastElement = $('.items').pop();
	 */

	var pop = ArrayProto.pop;

	/**
	 * Adds one or more elements to the end of the collection, and returns the new length of the collection.
	 *
	 * @param {Object} element Element(s) to add to the collection
	 * @return {Number} The new length of the collection
	 * @example
	 *     $('.items').push(element);
	 */

	var push = ArrayProto.push;

	/**
	 * Apply a function against each element in the collection, and this accumulator function has to reduce it
	 * to a single value.
	 *
	 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
	 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
	 * @example
	 *     $('.items').reduce(function(previousValue, element, index, collection) {
	 *         return previousValue + element.clientHeight;
	 *     }, 0);
	 *     // [total height of elements]
	 */

	var reduce = ArrayProto.reduce;

	/**
	 * Apply a function against each element in the collection (from right-to-left), and this accumulator function has
	 * to reduce it to a single value.
	 *
	 * @param {Function} callback Function to execute on each value in the array, taking four arguments (see example).
	 * @param {Mixed} initialValue Object to use as the first argument to the first call of the callback.
	 * @example
	 *     $('.items').reduceRight(function(previousValue, element, index, collection) {
	 *         return previousValue + element.textContent;
	 *     }, '')
	 *     // [reversed text of elements]
	 */

	var reduceRight = ArrayProto.reduceRight;

	/**
	 * Reverses an array in place. The first array element becomes the last and the last becomes the first.
	 *
	 * @return {Object} The wrapped collection, reversed
	 * @chainable
	 * @example
	 *     $('.items').reverse();
	 */

	var reverse = function () {
	  return $$2(toArray(this).reverse());
	};

	/**
	 * Removes the first element from the collection, and returns that element.
	 *
	 * @return {Object} The first element from the collection.
	 * @example
	 *     var firstElement = $('.items').shift();
	 */

	var shift = ArrayProto.shift;

	/**
	 * Checks if the given callback returns a true(-ish) value for any of the elements in the collection.
	 *
	 * @param {Function} callback Function to execute for each element, invoked with `element` as argument.
	 * @return {Boolean} Whether any element passed the callback check.
	 * @example
	 *     $('.items').some(function(element) {
	 *         return element.hasAttribute('active')
	 *     });
	 *     // true/false
	 */

	var some = ArrayProto.some;

	/**
	 * Adds one or more elements to the beginning of the collection, and returns the new length of the collection.
	 *
	 * @param {Object} element Element(s) to add to the collection
	 * @return {Number} The new length of the collection
	 * @example
	 *     $('.items').unshift(element);
	 */

	var unshift = ArrayProto.unshift;

	var array = Object.freeze({
		every: every,
		filter: filter,
		forEach: forEach,
		each: each$1,
		indexOf: indexOf,
		map: map,
		pop: pop,
		push: push,
		reduce: reduce,
		reduceRight: reduceRight,
		reverse: reverse,
		shift: shift,
		some: some,
		unshift: unshift
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @module BaseClass
	 */

	var BaseClass = function (api) {

	  /**
	   * Provide subclass for classes or components to extend from.
	   * The opposite and successor of plugins (no need to extend `$.fn` anymore, complete control).
	   *
	   * @return {Class} The class to extend from, including all `$.fn` methods.
	   * @example
	   *     import { BaseClass } from  'domtastic';
	   *
	   *     class MyComponent extends BaseClass {
	   *         doSomething() {
	   *             return this.addClass('.foo');
	   *         }
	   *     }
	   *
	   *     let component = new MyComponent('body');
	   *     component.doSomething();
	   *
	   * @example
	   *     import $ from  'domtastic';
	   *
	   *     class MyComponent extends $.BaseClass {
	   *         progress(value) {
	   *             return this.attr('data-progress', value);
	   *         }
	   *     }
	   *
	   *     let component = new MyComponent(document.body);
	   *     component.progress('ive').append('<p>enhancement</p>');
	   */

	  var BaseClass = function BaseClass() {
	    _classCallCheck(this, BaseClass);

	    Wrapper.call(this, $$2.apply(undefined, arguments));
	  };

	  extend(BaseClass.prototype, api);
	  return BaseClass;
	}

	/**
	 * @module CSS
	 */

	var isNumeric = function (value) {
	  return !isNaN(parseFloat(value)) && isFinite(value);
	};

	var camelize = function (value) {
	  return value.replace(/-([\da-z])/gi, function (matches, letter) {
	    return letter.toUpperCase();
	  });
	};

	var dasherize = function (value) {
	  return value.replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase();
	};

	/**
	 * Get the value of a style property for the first element, or set one or more style properties for each element in the collection.
	 *
	 * @param {String|Object} key The name of the style property to get or set. Or an object containing key-value pairs to set as style properties.
	 * @param {String} [value] The value of the style property to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').css('padding-left'); // get
	 *     $('.item').css('color', '#f00'); // set
	 *     $('.item').css({'border-width': '1px', display: 'inline-block'}); // set multiple
	 */

	var css = function (key, value) {

	  var styleProps = void 0,
	      prop = void 0,
	      val = void 0;

	  if (typeof key === 'string') {
	    key = camelize(key);

	    if (typeof value === 'undefined') {
	      var element = this.nodeType ? this : this[0];
	      if (element) {
	        val = element.style[key];
	        return isNumeric(val) ? parseFloat(val) : val;
	      }
	      return undefined;
	    }

	    styleProps = {};
	    styleProps[key] = value;
	  } else {
	    styleProps = key;
	    for (prop in styleProps) {
	      val = styleProps[prop];
	      delete styleProps[prop];
	      styleProps[camelize(prop)] = val;
	    }
	  }

	  each(this, function (element) {
	    for (prop in styleProps) {
	      if (styleProps[prop] || styleProps[prop] === 0) {
	        element.style[prop] = styleProps[prop];
	      } else {
	        element.style.removeProperty(dasherize(prop));
	      }
	    }
	  });

	  return this;
	};

	var css$1 = Object.freeze({
		css: css
	});

	/**
	 * @module DOM
	 */

	var forEach$1 = Array.prototype.forEach;

	/**
	 * Append element(s) to each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to append to the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').append('<p>more</p>');
	 */

	var append = function (element) {
	  if (this instanceof Node) {
	    if (typeof element === 'string') {
	      this.insertAdjacentHTML('beforeend', element);
	    } else {
	      if (element instanceof Node) {
	        this.appendChild(element);
	      } else {
	        var elements = element instanceof NodeList ? toArray(element) : element;
	        forEach$1.call(elements, this.appendChild.bind(this));
	      }
	    }
	  } else {
	    _each(this, append, element);
	  }
	  return this;
	};

	/**
	 * Place element(s) at the beginning of each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place at the beginning of the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').prepend('<span>start</span>');
	 */

	var prepend = function (element) {
	  if (this instanceof Node) {
	    if (typeof element === 'string') {
	      this.insertAdjacentHTML('afterbegin', element);
	    } else {
	      if (element instanceof Node) {
	        this.insertBefore(element, this.firstChild);
	      } else {
	        var elements = element instanceof NodeList ? toArray(element) : element;
	        forEach$1.call(elements.reverse(), prepend.bind(this));
	      }
	    }
	  } else {
	    _each(this, prepend, element);
	  }
	  return this;
	};

	/**
	 * Place element(s) before each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place as sibling(s) before to the element(s).
	 * Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').before('<p>prefix</p>');
	 */

	var before = function (element) {
	  if (this instanceof Node) {
	    if (typeof element === 'string') {
	      this.insertAdjacentHTML('beforebegin', element);
	    } else {
	      if (element instanceof Node) {
	        this.parentNode.insertBefore(element, this);
	      } else {
	        var elements = element instanceof NodeList ? toArray(element) : element;
	        forEach$1.call(elements, before.bind(this));
	      }
	    }
	  } else {
	    _each(this, before, element);
	  }
	  return this;
	};

	/**
	 * Place element(s) after each element in the collection.
	 *
	 * @param {String|Node|NodeList|Object} element What to place as sibling(s) after to the element(s). Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').after('<span>suf</span><span>fix</span>');
	 */

	var after = function (element) {
	  if (this instanceof Node) {
	    if (typeof element === 'string') {
	      this.insertAdjacentHTML('afterend', element);
	    } else {
	      if (element instanceof Node) {
	        this.parentNode.insertBefore(element, this.nextSibling);
	      } else {
	        var elements = element instanceof NodeList ? toArray(element) : element;
	        forEach$1.call(elements.reverse(), after.bind(this));
	      }
	    }
	  } else {
	    _each(this, after, element);
	  }
	  return this;
	};

	/**
	 * Clone a wrapped object.
	 *
	 * @return {Object} Wrapped collection of cloned nodes.
	 * @example
	 *     $(element).clone();
	 */

	var clone = function () {
	  return $$2(_clone(this));
	};

	/**
	 * Clone an object
	 *
	 * @param {String|Node|NodeList|Array} element The element(s) to clone.
	 * @return {String|Node|NodeList|Array} The cloned element(s)
	 * @private
	 */

	var _clone = function (element) {
	  if (typeof element === 'string') {
	    return element;
	  } else if (element instanceof Node) {
	    return element.cloneNode(true);
	  } else if ('length' in element) {
	    return [].map.call(element, function (el) {
	      return el.cloneNode(true);
	    });
	  }
	  return element;
	};

	/**
	 * Specialized iteration, applying `fn` in reversed manner to a clone of each element, but the provided one.
	 *
	 * @param {NodeList|Array} collection
	 * @param {Function} fn
	 * @param {Node} element
	 * @private
	 */

	var _each = function (collection, fn, element) {
	  var l = collection.length;
	  while (l--) {
	    var elm = l === 0 ? element : _clone(element);
	    fn.call(collection[l], elm);
	  }
	};

	var dom = Object.freeze({
		append: append,
		prepend: prepend,
		before: before,
		after: after,
		clone: clone,
		_clone: _clone,
		_each: _each
	});

	/**
	 * @module Attr
	 */

	/**
	 * Get the value of an attribute for the first element, or set one or more attributes for each element in the collection.
	 *
	 * @param {String|Object} key The name of the attribute to get or set. Or an object containing key-value pairs to set as attributes.
	 * @param {String} [value] The value of the attribute to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').attr('attrName'); // get
	 *     $('.item').attr('attrName', 'attrValue'); // set
	 *     $('.item').attr({attr1: 'value1', 'attr-2': 'value2'}); // set multiple
	 */

	var attr = function (key, value) {

	  if (typeof key === 'string' && typeof value === 'undefined') {
	    var element = this.nodeType ? this : this[0];
	    return element ? element.getAttribute(key) : undefined;
	  }

	  return each(this, function (element) {
	    if (typeof key === 'object') {
	      for (var _attr in key) {
	        element.setAttribute(_attr, key[_attr]);
	      }
	    } else {
	      element.setAttribute(key, value);
	    }
	  });
	};

	/**
	 * Remove attribute from each element in the collection.
	 *
	 * @param {String} key Attribute name
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').removeAttr('attrName');
	 */

	var removeAttr = function (key) {
	  return each(this, function (element) {
	    return element.removeAttribute(key);
	  });
	};

	var dom_attr = Object.freeze({
		attr: attr,
		removeAttr: removeAttr
	});

	/**
	 * @module Class
	 */

	/**
	 * Add a class to the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to add to the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').addClass('bar');
	 *     $('.item').addClass('bar foo');
	 */

	var addClass = function (value) {
	  if (value && value.length) {
	    each(value.split(' '), _each$1.bind(this, 'add'));
	  }
	  return this;
	};

	/**
	 * Remove a class from the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to remove from the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').removeClass('bar');
	 *     $('.items').removeClass('bar foo');
	 */

	var removeClass = function (value) {
	  if (value && value.length) {
	    each(value.split(' '), _each$1.bind(this, 'remove'));
	  }
	  return this;
	};

	/**
	 * Toggle a class at the element(s)
	 *
	 * @param {String} value Space-separated class name(s) to toggle at the element(s).
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').toggleClass('bar');
	 *     $('.item').toggleClass('bar foo');
	 */

	var toggleClass = function (value) {
	  if (value && value.length) {
	    each(value.split(' '), _each$1.bind(this, 'toggle'));
	  }
	  return this;
	};

	/**
	 * Check if the element(s) have a class.
	 *
	 * @param {String} value Check if the DOM element contains the class name. When applied to multiple elements,
	 * returns `true` if _any_ of them contains the class name.
	 * @return {Boolean} Whether the element's class attribute contains the class name.
	 * @example
	 *     $('.item').hasClass('bar');
	 */

	var hasClass = function (value) {
	  return (this.nodeType ? [this] : this).some(function (element) {
	    return element.classList.contains(value);
	  });
	};

	/**
	 * Specialized iteration, applying `fn` of the classList API to each element.
	 *
	 * @param {String} fnName
	 * @param {String} className
	 * @private
	 */

	var _each$1 = function (fnName, className) {
	  return each(this, function (element) {
	    return element.classList[fnName](className);
	  });
	};

	var dom_class = Object.freeze({
		addClass: addClass,
		removeClass: removeClass,
		toggleClass: toggleClass,
		hasClass: hasClass
	});

	/**
	 * @module contains
	 */

	/**
	 * Test whether an element contains another element in the DOM.
	 *
	 * @param {Element} container The element that may contain the other element.
	 * @param {Element} element The element that may be a descendant of the other element.
	 * @return {Boolean} Whether the `container` element contains the `element`.
	 * @example
	 *     $.contains(parentElement, childElement);
	 *     // true/false
	 */

	var contains = function (container, element) {
	  if (!container || !element || container === element) {
	    return false;
	  } else if (container.contains) {
	    return container.contains(element);
	  } else if (container.compareDocumentPosition) {
	    return !(container.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_DISCONNECTED);
	  }
	  return false;
	};

	var dom_contains = Object.freeze({
		contains: contains
	});

	/**
	 * @module Data
	 */

	var DATAKEYPROP = '__DOMTASTIC_DATA__';

	/**
	 * Get data from first element, or set data for each element in the collection.
	 *
	 * @param {String} key The key for the data to get or set.
	 * @param {String} [value] The data to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').data('attrName'); // get
	 *     $('.item').data('attrName', {any: 'data'}); // set
	 */

	var data = function (key, value) {

	  if (typeof key === 'string' && typeof value === 'undefined') {
	    var element = this.nodeType ? this : this[0];
	    return element && element[DATAKEYPROP] ? element[DATAKEYPROP][key] : undefined;
	  }

	  return each(this, function (element) {
	    element[DATAKEYPROP] = element[DATAKEYPROP] || {};
	    element[DATAKEYPROP][key] = value;
	  });
	};

	/**
	 * Get property from first element, or set property on each element in the collection.
	 *
	 * @param {String} key The name of the property to get or set.
	 * @param {String} [value] The value of the property to set.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').prop('attrName'); // get
	 *     $('.item').prop('attrName', 'attrValue'); // set
	 */

	var prop = function (key, value) {

	  if (typeof key === 'string' && typeof value === 'undefined') {
	    var element = this.nodeType ? this : this[0];
	    return element && element ? element[key] : undefined;
	  }

	  return each(this, function (element) {
	    return element[key] = value;
	  });
	};

	var dom_data = Object.freeze({
		data: data,
		prop: prop
	});

	/**
	 * @module DOM (extra)
	 */

	/**
	 * Append each element in the collection to the specified element(s).
	 *
	 * @param {Node|NodeList|Object} element What to append the element(s) to. Clones elements as necessary.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').appendTo(container);
	 */

	var appendTo = function (element) {
	  var context = typeof element === 'string' ? $$2(element) : element;
	  append.call(context, this);
	  return this;
	};

	/*
	 * Empty each element in the collection.
	 *
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').empty();
	 */

	var empty = function () {
	  return each(this, function (element) {
	    return element.innerHTML = '';
	  });
	};

	/**
	 * Remove the collection from the DOM.
	 *
	 * @return {Array} Array containing the removed elements
	 * @example
	 *     $('.item').remove();
	 */

	var remove = function () {
	  return each(this, function (element) {
	    if (element.parentNode) {
	      element.parentNode.removeChild(element);
	    }
	  });
	};

	/**
	 * Replace each element in the collection with the provided new content, and return the array of elements that were replaced.
	 *
	 * @return {Array} Array containing the replaced elements
	 */

	var replaceWith = function () {
	  return before.apply(this, arguments).remove();
	};

	/**
	 * Get the `textContent` from the first, or set the `textContent` of each element in the collection.
	 *
	 * @param {String} [value]
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').text('New content');
	 */

	var text = function (value) {

	  if (value === undefined) {
	    return this[0].textContent;
	  }

	  return each(this, function (element) {
	    return element.textContent = '' + value;
	  });
	};

	/**
	 * Get the `value` from the first, or set the `value` of each element in the collection.
	 *
	 * @param {String} [value]
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('input.firstName').value('New value');
	 */

	var val = function (value) {

	  if (value === undefined) {
	    return this[0].value;
	  }

	  return each(this, function (element) {
	    return element.value = value;
	  });
	};

	var dom_extra = Object.freeze({
		appendTo: appendTo,
		empty: empty,
		remove: remove,
		replaceWith: replaceWith,
		text: text,
		val: val
	});

	/**
	 * @module HTML
	 */

	/*
	 * Get the HTML contents of the first element, or set the HTML contents for each element in the collection.
	 *
	 * @param {String} [fragment] HTML fragment to set for the element. If this argument is omitted, the HTML contents are returned.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').html();
	 *     $('.item').html('<span>more</span>');
	 */

	var html = function (fragment) {

	  if (typeof fragment !== 'string') {
	    var element = this.nodeType ? this : this[0];
	    return element ? element.innerHTML : undefined;
	  }

	  return each(this, function (element) {
	    return element.innerHTML = fragment;
	  });
	};

	var dom_html = Object.freeze({
		html: html
	});

	/**
	 * @module closest
	 */

	/**
	 * Return the closest element matching the selector (starting by itself) for each element in the collection.
	 *
	 * @param {String} selector Filter
	 * @param {Object} [context] If provided, matching elements must be a descendant of this element
	 * @return {Object} New wrapped collection (containing zero or one element)
	 * @chainable
	 * @example
	 *     $('.selector').closest('.container');
	 */

	var closest = function () {

	  var closest = function (selector, context) {
	    var nodes = [];
	    each(this, function (node) {
	      while (node && node !== context) {
	        if (matches(node, selector)) {
	          nodes.push(node);
	          break;
	        }
	        node = node.parentElement;
	      }
	    });
	    return $$2(uniq(nodes));
	  };

	  return typeof Element === 'undefined' || !Element.prototype.closest ? closest : function (selector, context) {
	    var _this = this;

	    if (!context) {
	      var _ret = function () {
	        var nodes = [];
	        each(_this, function (node) {
	          var n = node.closest(selector);
	          if (n) {
	            nodes.push(n);
	          }
	        });
	        return {
	          v: $$2(uniq(nodes))
	        };
	      }();

	      if (typeof _ret === "object") return _ret.v;
	    } else {
	      return closest.call(this, selector, context);
	    }
	  };
	}();

	var selector_closest = Object.freeze({
		closest: closest
	});

	var _this3 = undefined;

	/**
	 * @module Events
	 */

	/**
	 * Shorthand for `addEventListener`. Supports event delegation if a filter (`selector`) is provided.
	 *
	 * @param {String} eventNames List of space-separated event types to be added to the element(s)
	 * @param {String} [selector] Selector to filter descendants that delegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Boolean} useCapture=false
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').on('click', callback);
	 *     $('.container').on('click focus', '.item', handler);
	 */

	var on = function (eventNames, selector, handler, useCapture, once) {
	  var _this = this;

	  if (typeof selector === 'function') {
	    handler = selector;
	    selector = null;
	  }

	  var parts = void 0,
	      namespace = void 0,
	      eventListener = void 0;

	  eventNames.split(' ').forEach(function (eventName) {

	    parts = eventName.split('.');
	    eventName = parts[0] || null;
	    namespace = parts[1] || null;

	    eventListener = proxyHandler(handler);

	    each(_this, function (element) {

	      if (selector) {
	        eventListener = delegateHandler.bind(element, selector, eventListener);
	      }

	      if (once) {
	        (function () {
	          var listener = eventListener;
	          eventListener = function (event) {
	            off.call(element, eventNames, selector, handler, useCapture);
	            listener.call(element, event);
	          };
	        })();
	      }

	      element.addEventListener(eventName, eventListener, useCapture || false);

	      getHandlers(element).push({
	        eventName: eventName,
	        handler: handler,
	        eventListener: eventListener,
	        selector: selector,
	        namespace: namespace
	      });
	    });
	  }, this);

	  return this;
	};

	/**
	 * Shorthand for `removeEventListener`.
	 *
	 * @param {String} eventNames List of space-separated event types to be removed from the element(s)
	 * @param {String} [selector] Selector to filter descendants that undelegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Boolean} useCapture=false
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').off('click', callback);
	 *     $('#my-element').off('myEvent myOtherEvent');
	 *     $('.item').off();
	 */

	var off = function () {
	  var eventNames = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var selector = arguments[1];

	  var _this2 = this;

	  var handler = arguments[2];
	  var useCapture = arguments[3];


	  if (typeof selector === 'function') {
	    handler = selector;
	    selector = null;
	  }

	  var parts = void 0,
	      namespace = void 0,
	      handlers = void 0;

	  eventNames.split(' ').forEach(function (eventName) {

	    parts = eventName.split('.');
	    eventName = parts[0] || null;
	    namespace = parts[1] || null;

	    return each(_this2, function (element) {

	      handlers = getHandlers(element);

	      each(handlers.filter(function (item) {
	        return (!eventName || item.eventName === eventName) && (!namespace || item.namespace === namespace) && (!handler || item.handler === handler) && (!selector || item.selector === selector);
	      }), function (item) {
	        element.removeEventListener(item.eventName, item.eventListener, useCapture || false);
	        handlers.splice(handlers.indexOf(item), 1);
	      });

	      if (!eventName && !namespace && !selector && !handler) {
	        clearHandlers(element);
	      } else if (handlers.length === 0) {
	        clearHandlers(element);
	      }
	    });
	  }, this);

	  return this;
	};

	/**
	 * Add event listener and execute the handler at most once per element.
	 *
	 * @param eventNames
	 * @param selector
	 * @param handler
	 * @param useCapture
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').one('click', callback);
	 */

	var one = function (eventNames, selector, handler, useCapture) {
	  return on.call(this, eventNames, selector, handler, useCapture, 1);
	};

	/**
	 * Get event handlers from an element
	 *
	 * @private
	 * @param {Node} element
	 * @return {Array}
	 */

	var eventKeyProp = '__domtastic_event__';
	var id = 1;
	var handlers = {};
	var unusedKeys = [];

	var getHandlers = function (element) {
	  if (!element[eventKeyProp]) {
	    element[eventKeyProp] = unusedKeys.length === 0 ? ++id : unusedKeys.pop();
	  }
	  var key = element[eventKeyProp];
	  return handlers[key] || (handlers[key] = []);
	};

	/**
	 * Clear event handlers for an element
	 *
	 * @private
	 * @param {Node} element
	 */

	var clearHandlers = function (element) {
	  var key = element[eventKeyProp];
	  if (handlers[key]) {
	    handlers[key] = null;
	    element[eventKeyProp] = null;
	    unusedKeys.push(key);
	  }
	};

	/**
	 * Function to create a handler that augments the event object with some extra methods,
	 * and executes the callback with the event and the event data (i.e. `event.detail`).
	 *
	 * @private
	 * @param handler Callback to execute as `handler(event, data)`
	 * @return {Function}
	 */

	var proxyHandler = function (handler) {
	  return function (event) {
	    return handler.call(this, augmentEvent(event));
	  };
	};

	var eventMethods = {
	  preventDefault: 'isDefaultPrevented',
	  stopImmediatePropagation: 'isImmediatePropagationStopped',
	  stopPropagation: 'isPropagationStopped'
	};
	var returnTrue = function () {
	  return true;
	};
	var returnFalse = function () {
	  return false;
	};

	/**
	 * Attempt to augment events and implement something closer to DOM Level 3 Events.
	 *
	 * @private
	 * @param {Object} event
	 * @return {Function}
	 */

	var augmentEvent = function (event) {
	  if (!event.isDefaultPrevented || event.stopImmediatePropagation || event.stopPropagation) {
	    for (var methodName in eventMethods) {
	      (function (methodName, testMethodName, originalMethod) {
	        event[methodName] = function () {
	          this[testMethodName] = returnTrue;
	          return originalMethod && originalMethod.apply(this, arguments);
	        };
	        event[testMethodName] = returnFalse;
	      })(methodName, eventMethods[methodName], event[methodName]);
	    }
	    if (event._preventDefault) {
	      event.preventDefault();
	    }
	  }
	  return event;
	};

	/**
	 * Function to test whether delegated events match the provided `selector` (filter),
	 * if the event propagation was stopped, and then actually call the provided event handler.
	 * Use `this` instead of `event.currentTarget` on the event object.
	 *
	 * @private
	 * @param {String} selector Selector to filter descendants that undelegate the event to this element.
	 * @param {Function} handler Event handler
	 * @param {Event} event
	 */

	var delegateHandler = function (selector, handler, event) {
	  var eventTarget = event._target || event.target;
	  var currentTarget = closest.call([eventTarget], selector, _this3)[0];
	  if (currentTarget && currentTarget !== _this3) {
	    if (currentTarget === eventTarget || !(event.isPropagationStopped && event.isPropagationStopped())) {
	      handler.call(currentTarget, event);
	    }
	  }
	};

	var bind = on;
	var unbind = off;

	var event = Object.freeze({
		on: on,
		off: off,
		one: one,
		getHandlers: getHandlers,
		clearHandlers: clearHandlers,
		proxyHandler: proxyHandler,
		delegateHandler: delegateHandler,
		bind: bind,
		unbind: unbind
	});

	/**
	 * @module trigger
	 */

	var reMouseEvent = /^(?:mouse|pointer|contextmenu)|click/;
	var reKeyEvent = /^key/;

	/**
	 * Trigger event at element(s)
	 *
	 * @param {String} type Type of the event
	 * @param {Object} data Data to be sent with the event (`params.detail` will be set to this).
	 * @param {Object} [params] Event parameters (optional)
	 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
	 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
	 * @param {Mixed} params.detail=undefined Additional information about the event.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $('.item').trigger('anyEventType');
	 */

	var trigger = function (type, data) {
	  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  var _ref$bubbles = _ref.bubbles;
	  var bubbles = _ref$bubbles === undefined ? true : _ref$bubbles;
	  var _ref$cancelable = _ref.cancelable;
	  var cancelable = _ref$cancelable === undefined ? true : _ref$cancelable;
	  var _ref$preventDefault = _ref.preventDefault;
	  var preventDefault = _ref$preventDefault === undefined ? false : _ref$preventDefault;


	  var EventConstructor = getEventConstructor(type);
	  var event = new EventConstructor(type, {
	    bubbles: bubbles,
	    cancelable: cancelable,
	    preventDefault: preventDefault,
	    detail: data
	  });

	  event._preventDefault = preventDefault;

	  return each(this, function (element) {
	    if (!bubbles || isEventBubblingInDetachedTree || isAttachedToDocument(element)) {
	      dispatchEvent(element, event);
	    } else {
	      triggerForPath(element, type, {
	        bubbles: bubbles,
	        cancelable: cancelable,
	        preventDefault: preventDefault,
	        detail: data
	      });
	    }
	  });
	};

	var getEventConstructor = function (type) {
	  return supportsOtherEventConstructors ? reMouseEvent.test(type) ? MouseEvent : reKeyEvent.test(type) ? KeyboardEvent : CustomEvent : CustomEvent;
	};

	/**
	 * Trigger event at first element in the collection. Similar to `trigger()`, except:
	 *
	 * - Event does not bubble
	 * - Default event behavior is prevented
	 * - Only triggers handler for first matching element
	 *
	 * @param {String} type Type of the event
	 * @param {Object} data Data to be sent with the event
	 * @example
	 *     $('form').triggerHandler('submit');
	 */

	var triggerHandler = function (type, data) {
	  if (this[0]) {
	    trigger.call(this[0], type, data, {
	      bubbles: false,
	      preventDefault: true
	    });
	  }
	};

	/**
	 * Check whether the element is attached to or detached from) the document
	 *
	 * @private
	 * @param {Node} element Element to test
	 * @return {Boolean}
	 */

	var isAttachedToDocument = function (element) {
	  if (element === window || element === document) {
	    return true;
	  }
	  return contains(element.ownerDocument.documentElement, element);
	};

	/**
	 * Dispatch the event at the element and its ancestors.
	 * Required to support delegated events in browsers that don't bubble events in detached DOM trees.
	 *
	 * @private
	 * @param {Node} element First element to dispatch the event at
	 * @param {String} type Type of the event
	 * @param {Object} [params] Event parameters (optional)
	 * @param {Boolean} params.bubbles=true Does the event bubble up through the DOM or not.
	 * Will be set to false (but shouldn't matter since events don't bubble anyway).
	 * @param {Boolean} params.cancelable=true Is the event cancelable or not.
	 * @param {Mixed} params.detail=undefined Additional information about the event.
	 */

	var triggerForPath = function (element, type) {
	  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	  params.bubbles = false;
	  var event = new CustomEvent(type, params);
	  event._target = element;
	  do {
	    dispatchEvent(element, event);
	  } while (element = element.parentNode);
	};

	/**
	 * Dispatch event to element, but call direct event methods instead if available
	 * (e.g. "blur()", "submit()") and if the event is non-cancelable.
	 *
	 * @private
	 * @param {Node} element Element to dispatch the event at
	 * @param {Object} event Event to dispatch
	 */

	var directEventMethods = ['blur', 'focus', 'select', 'submit'];

	var dispatchEvent = function (element, event) {
	  if (directEventMethods.indexOf(event.type) !== -1 && typeof element[event.type] === 'function' && !event._preventDefault && !event.cancelable) {
	    element[event.type]();
	  } else {
	    element.dispatchEvent(event);
	  }
	};

	/**
	 * Polyfill for CustomEvent, borrowed from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill).
	 * Needed to support IE (9, 10, 11) & PhantomJS
	 */

	(function () {
	  var CustomEvent = function (event) {
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	      bubbles: false,
	      cancelable: false,
	      detail: undefined
	    };

	    var customEvent = document.createEvent('CustomEvent');
	    customEvent.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	    return customEvent;
	  };

	  CustomEvent.prototype = global.CustomEvent && global.CustomEvent.prototype;
	  global.CustomEvent = CustomEvent;
	})();

	/*
	 * Are events bubbling in detached DOM trees?
	 * @private
	 */

	var isEventBubblingInDetachedTree = function () {
	  var isBubbling = false;
	  var doc = global.document;
	  if (doc) {
	    var parent = doc.createElement('div');
	    var child = parent.cloneNode();
	    parent.appendChild(child);
	    parent.addEventListener('e', function () {
	      isBubbling = true;
	    });
	    child.dispatchEvent(new CustomEvent('e', { bubbles: true }));
	  }
	  return isBubbling;
	}();

	var supportsOtherEventConstructors = function () {
	  try {
	    new window.MouseEvent('click');
	  } catch (e) {
	    return false;
	  }
	  return true;
	}();

	var event_trigger = Object.freeze({
		trigger: trigger,
		triggerHandler: triggerHandler
	});

	/**
	 * @module Ready
	 */

	/**
	 * Execute callback when `DOMContentLoaded` fires for `document`, or immediately if called afterwards.
	 *
	 * @param handler Callback to execute when initial DOM content is loaded.
	 * @return {Object} The wrapped collection
	 * @chainable
	 * @example
	 *     $(document).ready(callback);
	 */

	var ready = function (handler) {
	  if (/complete|loaded|interactive/.test(document.readyState) && document.body) {
	    handler();
	  } else {
	    document.addEventListener('DOMContentLoaded', handler, false);
	  }
	  return this;
	};

	var event_ready = Object.freeze({
		ready: ready
	});

	/**
	 * @module noConflict
	 */

	/*
	 * Save the previous value of the global `$` variable, so that it can be restored later on.
	 * @private
	 */

	var previousLib = global.$;

	/**
	 * In case another library sets the global `$` variable before DOMtastic does,
	 * this method can be used to return the global `$` to that other library.
	 *
	 * @return {Object} Reference to DOMtastic.
	 * @example
	 *     var domtastic = $.noConflict();
	 */

	var noConflict = function () {
	  global.$ = previousLib;
	  return this;
	};

	var noconflict = Object.freeze({
		noConflict: noConflict
	});

	/**
	 * @module Selector (extra)
	 */

	/**
	 * Return children of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').children();
	 *     $('.selector').children('.filter');
	 */

	var children = function (selector) {
	  var nodes = [];
	  each(this, function (element) {
	    if (element.children) {
	      each(element.children, function (child) {
	        if (!selector || selector && matches(child, selector)) {
	          nodes.push(child);
	        }
	      });
	    }
	  });
	  return $$2(nodes);
	};

	/**
	 * Return child nodes of each element in the collection, including text and comment nodes.
	 *
	 * @return {Object} New wrapped collection
	 * @example
	 *     $('.selector').contents();
	 */

	var contents = function () {
	  var nodes = [];
	  each(this, function (element) {
	    return nodes.push.apply(nodes, toArray(element.childNodes));
	  });
	  return $$2(nodes);
	};

	/**
	 * Return a collection containing only the one at the specified index.
	 *
	 * @param {Number} index
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.items').eq(1)
	 *     // The second item; result is the same as doing $($('.items')[1]);
	 */

	var eq = function (index) {
	  return slice.call(this, index, index + 1);
	};

	/**
	 * Return the DOM element at the specified index.
	 *
	 * @param {Number} index
	 * @return {Node} Element at the specified index
	 * @example
	 *     $('.items').get(1)
	 *     // The second element; result is the same as doing $('.items')[1];
	 */

	var get = function (index) {
	  return this[index];
	};

	/**
	 * Return the parent elements of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').parent();
	 *     $('.selector').parent('.filter');
	 */

	var parent = function (selector) {
	  var nodes = [];
	  each(this, function (element) {
	    if (!selector || selector && matches(element.parentNode, selector)) {
	      nodes.push(element.parentNode);
	    }
	  });
	  return $$2(nodes);
	};

	/**
	 * Return the sibling elements of each element in the collection, optionally filtered by a selector.
	 *
	 * @param {String} [selector] Filter
	 * @return {Object} New wrapped collection
	 * @chainable
	 * @example
	 *     $('.selector').siblings();
	 *     $('.selector').siblings('.filter');
	 */

	var siblings = function (selector) {
	  var nodes = [];
	  each(this, function (element) {
	    return each(element.parentNode.children, function (sibling) {
	      if (sibling !== element && (!selector || selector && matches(sibling, selector))) {
	        nodes.push(sibling);
	      }
	    });
	  });
	  return $$2(nodes);
	};

	/**
	 * Create a new, sliced collection.
	 *
	 * @param {Number} start
	 * @param {Number} end
	 * @return {Object} New wrapped collection
	 * @example
	 *     $('.items').slice(1, 3)
	 *     // New wrapped collection containing the second, third, and fourth element.
	 */

	var slice = function (start, end) {
	  return $$2([].slice.apply(this, arguments));
	};

	var selector_extra = Object.freeze({
		children: children,
		contents: contents,
		eq: eq,
		get: get,
		parent: parent,
		siblings: siblings,
		slice: slice
	});

	/**
	 * @module Type
	 */

	/*
	 * Determine if the argument passed is a Javascript function object.
	 *
	 * @param {Object} [obj] Object to test whether or not it is a function.
	 * @return {boolean}
	 * @example
	 *     $.isFunction(function(){});
	 *     // true
	 * @example
	 *     $.isFunction({});
	 *     // false
	 */

	var isFunction = function (obj) {
	  return typeof obj === 'function';
	};

	/*
	 * Determine whether the argument is an array.
	 *
	 * @param {Object} [obj] Object to test whether or not it is an array.
	 * @return {boolean}
	 * @example
	 *     $.isArray([]);
	 *     // true
	 * @example
	 *     $.isArray({});
	 *     // false
	 */

	var isArray = Array.isArray;

	var type = Object.freeze({
		isFunction: isFunction,
		isArray: isArray
	});

	/**
	 * @module API
	 */

	var api = {};
	var $$$1 = {};

	// Import modules to build up the API

	if (typeof selector !== 'undefined') {
	  $$$1 = $$2;
	  $$$1.matches = matches;
	  api.find = find;
	}

	extend($$$1, dom_contains, noconflict, type);
	extend(api, array, css$1, dom_attr, dom, dom_class, dom_data, dom_extra, dom_html, event, event_trigger, event_ready, selector_closest, selector_extra);

	$$$1.fn = api;

	// Version

	$$$1.version = '0.12.3';

	// Util

	$$$1.extend = extend;

	// Provide base class to extend from

	if (typeof BaseClass !== 'undefined') {
	  $$$1.BaseClass = BaseClass($$$1.fn);
	}

	// Export interface

	var $$1 = $$$1;

	return $$1;

	})));
	//# sourceMappingURL=domtastic.js.map


/***/ },
/* 272 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"[prefix, sizeClass, borderClass]\">\n    <div :class=\"[contentClass, scrollClass]\">\n\n        <div v-if=\"tableBodyHeight\" class=\"{{prefix}}-header\" :style=\"{left:-tableBodyScrollLeft+'px',width:tableBodyWidth}\">\n            <table :style=\"{width:tableBodyWidth}\">\n                <thead class=\"{{prefix}}-thead\">\n                    <tr>\n                        <th v-if=\"rowSelection\" class=\"{{prefix}}-selection-column\">\n                            <v-checkbox v-if=\"rowSelection.type=='checkbox'\" :checked.sync=\"checkAllState\" :on-change=\"checkAllChange\"></v-checkbox>\n                            <!--<v-radio v-if=\"rowSelection.type=='radio'\" :on-change=\"rowSelectionChange\"></v-radio>-->\n                        </th>\n                        <template v-for=\"column in columns\">\n                            <th :style=\"{width:column.width}\" class=\"{{column.className}}\">\n                                {{column.title}}\n                                <template v-if=\"column.sort\">\n                                    <div class=\"{{prefix}}-column-sorter\">\n                                        <span @click=\"sort(column,'asc')\" class=\"{{prefix}}-column-sorter-up {{column.sort == 'asc' ? 'on' : 'off' }}\" title=\"↑\"><v-icon type=\"caret-up\"></v-icon></span>\n                                        <span @click=\"sort(column,'desc')\" class=\"{{prefix}}-column-sorter-down {{column.sort == 'desc' ? 'on' : 'off' }}\" title=\"↓\"><v-icon type=\"caret-down\"></v-icon></span>\n                                    </div>\n                                </template>\n                            </th>\n                        </template>\n                    </tr>\n                </thead>\n            </table>\n        </div>\n\n        <div class=\"{{prefix}}-body\" :style=\"{height:tableBodyHeight+'px'}\" @scroll=\"scrollTableBody\">\n            <v-spin :spinning=\"loading\">\n                <table v-el:tbody>\n                    <thead class=\"{{prefix}}-thead\">\n                    <tr>\n                        <th v-if=\"rowSelection\" class=\"{{prefix}}-selection-column\">\n                            <v-checkbox v-if=\"rowSelection.type=='checkbox'\" :checked.sync=\"checkAllState\" :on-change=\"checkAllChange\"></v-checkbox>\n                            <!--<v-radio v-if=\"rowSelection.type=='radio'\" :on-change=\"rowSelectionChange\"></v-radio>-->\n                        </th>\n                        <template v-for=\"column in columns\">\n                            <th :style=\"{width:column.width}\" class=\"{{column.className}}\">\n                                {{column.title}}\n                                <template v-if=\"column.sort\">\n                                    <div class=\"{{prefix}}-column-sorter\">\n                                        <span @click=\"sort(column,'asc')\" class=\"{{prefix}}-column-sorter-up {{column.sort == 'asc' ? 'on' : 'off' }}\" title=\"↑\"><v-icon type=\"caret-up\"></v-icon></span>\n                                        <span @click=\"sort(column,'desc')\" class=\"{{prefix}}-column-sorter-down {{column.sort == 'desc' ? 'on' : 'off' }}\" title=\"↓\"><v-icon type=\"caret-down\"></v-icon></span>\n                                    </div>\n                                </template>\n                            </th>\n                        </template>\n                    </tr>\n                    </thead>\n                    <tbody class=\"{{prefix}}-tbody\" v-show=\"current.length\">\n                        <template v-for=\"(index, item) in current\">\n                            <tr v-show=\"!treeTable || item.vshow\">\n                                <td v-if=\"rowSelection\" class=\"{{prefix}}-selection-column\">\n                                    <v-checkbox v-if=\"rowSelection.type=='checkbox'\" :checked.sync=\"rowSelectionStates[index]\" @click=\"rowSelectionChange(index)\"></v-checkbox>\n                                    <!--<v-radio v-if=\"rowSelection.type=='radio'\" :on-change=\"rowSelectionChange\"></v-radio>-->\n                                </td>\n                                <td v-for=\"(cindex,column) in columns\">\n                                    <template v-if=\"treeTable && cindex==treeTableOption.position\">\n                                        <span class=\"{{prefix}}-row-indent indent-level-{{item.level}}\" :style=\"{'padding-left':item.paddingLeft}\"></span>\n                                        <span v-if=\"item.isparent\" @click=\"toggle(item)\" class=\"{{prefix}}-row-expand-icon {{prefix}}-row-{{item.vopen}}\"></span>\n                                    </template>\n                                    <template v-if=\"column.component\">\n                                        <component :is=\"ghost[column.component]\" :index=\"index\" :value=\"item[column.field]\" :item=\"item\" @datatable=\"datatable\"></component>\n                                    </template>\n                                    <template v-else>\n                                        <template v-if=\"column.render\">\n                                            {{{column.render(item[column.field],item,index)}}}\n                                        </template>\n                                        <template v-else>\n                                            {{{item[column.field]}}}\n                                        </template>\n                                    </template>\n                                </td>\n                            </tr>\n                        </template>\n\n                    </tbody>\n\n                    <tbody class=\"{{prefix}}-tbody\" v-if=\"current.length==0\">\n                        <tr>\n                            <td v-else colspan=\"{{rowSelection ? columns.length+1 : columns.length}}\" style=\"text-align:center\">\n                                {{emptyText}}\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </v-spin>\n        </div>\n    </div>\n\n    <div v-if=\"pagination && total\" class=\"{{prefix}}-footer\">\n        <div class=\"{{prefix}}-pagination\">\n            <!--todo select组件有bug,导致自定义pageSizeOptions修改每页条数时报错,修改分页重发请求功能后续开发-->\n            <v-pagination\n                          :default-current=\"defaultCurrent\"\n                          :current=\"pageNum\"\n                          :total=\"total\"\n                          :on-change=\"pageChange\"\n                          :show-size-changer=\"true\"\n                          :on-show-size-change=\"pageSizeChange\"\n                          :page-size-options=\"pageSizeOptions\"\n                          :page-size=\"pageSize\"\n            ></v-pagination>\n        </div>\n        <div class=\"{{prefix}}-description\">\n            共有{{total}}条数据\n        </div>\n        <div class=\"clearfix\"></div>\n    </div>\n\n\n</div>\n\n\n";

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _datepicker = __webpack_require__(274);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _datepicker2.default;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(275)
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/datePicker/datepicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(281)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59e23a72/datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(276);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(129)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-59e23a72&scoped=true!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-59e23a72&scoped=true!./../../../node_modules/.2.2.3@less-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./datepicker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(87)();
	// imports


	// module
	exports.push([module.id, ".ant-calendar .ant-calendar-year-panel[_v-59e23a72],\n.ant-calendar .ant-calendar-month-panel[_v-59e23a72] {\n  top: 34px;\n}\n.ant-calendar .ant-calendar-month-panel-table[_v-59e23a72] {\n  height: 208px;\n}\n.ant-calendar-range.ant-calendar-time .ant-calendar-time-picker[_v-59e23a72] {\n  top: 34px;\n}\n.ant-calendar-top[_v-59e23a72] {\n  color: #616161;\n  padding: 8px;\n  border-bottom: 1px solid #f3f3f3;\n}\n.ant-calendar-top a[_v-59e23a72] {\n  display: inline-block;\n  vertical-align: middle;\n  height: 16px;\n  cursor: pointer;\n}\n.ant-calendar-top a[_v-59e23a72]:hover {\n  color: #77BDFB;\n}\n.ant-calendar-top a.on[_v-59e23a72] {\n  font-weight: bold;\n  color: #1284e7;\n}\n.ant-calendar-top i[_v-59e23a72] {\n  content: '|';\n  display: inline-block;\n  width: 1px;\n  margin: 0 10px;\n  height: 16px;\n  background: #616161;\n  vertical-align: middle;\n}\n.ant-calendar-year-panel-prev[_v-59e23a72],\n.ant-calendar-year-panel-next[_v-59e23a72] {\n  display: block;\n  height: 20px;\n  text-align: center;\n}\n.ant-calendar-year-panel-prev a[_v-59e23a72],\n.ant-calendar-year-panel-next a[_v-59e23a72] {\n  color: #666;\n}\n.ant-calendar-year-panel-prev[_v-59e23a72]:hover,\n.ant-calendar-year-panel-next[_v-59e23a72]:hover {\n  background-color: #eaf8fe;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _func = __webpack_require__(91);

	var _timePickerOption = __webpack_require__(278);

	var _timePickerOption2 = _interopRequireDefault(_timePickerOption);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-datepicker',
	    components: { timePickerPanel: _timePickerOption2.default },
	    props: {
	        placeholder: {
	            type: String,
	            default: '请选择日期'
	        },

	        range: {
	            type: Boolean,
	            default: false
	        },

	        style: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        },
	        size: {
	            type: String,
	            coerce: function coerce(val) {
	                return { large: 'lg', small: 'sm' }[val];
	            }
	        },

	        time: {
	            twoWay: true
	        },
	        position: {
	            type: String,
	            default: 'absolute'
	        },
	        popupContainer: {
	            type: Function,
	            default: function _default() {
	                return document.body;
	            }
	        },
	        showTime: {
	            type: Boolean,
	            default: false
	        },

	        startTime: {
	            twoWay: true
	        },

	        endTime: {
	            twoWay: true
	        },

	        maxRange: {
	            coerce: function coerce(val) {
	                return +val;
	            }
	        },

	        clearable: {
	            type: Boolean,
	            default: false
	        },

	        format: {
	            type: String,
	            default: 'yyyy-MM-dd'
	        },

	        disabled: {
	            type: Boolean,
	            default: false
	        },
	        disabledDate: Function,

	        en: {
	            type: Boolean,
	            default: false
	        },
	        disabledTime: {
	            type: Array,
	            default: function _default() {
	                return [{}, {}];
	            }
	        }
	    },
	    data: function data() {
	        return {
	            prefix: 'ant-calendar',
	            container: null,
	            timeSelected: false,
	            timeBtnEnable: false,
	            containerStyle: {},
	            show: false,
	            showYear1: false,
	            showYear2: false,
	            showMonth1: false,
	            showMonth2: false,
	            prevYearTitle: this.en ? 'last year' : '上一年',
	            prevMonthTitle: this.en ? 'last month' : '上个月',
	            selectYearTitle: this.en ? 'select year' : '选择年份',
	            selectMonthTitle: this.en ? 'select month' : '选择月份',
	            nextMonthTitle: this.en ? 'next month' : '下个月',
	            nextYearTitle: this.en ? 'next year' : '下一年',
	            toTitle: this.en ? 'TO' : '至',
	            confirmTitle: this.en ? 'OK' : '确定',
	            left: false,
	            ranges: [],
	            days: this.en ? ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] : ['一', '二', '三', '四', '五', '六', '日'],
	            months: this.en ? ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	            years1: [],
	            years2: [],
	            months1: [],
	            months2: [],
	            date1: null,
	            date2: null,
	            time1: this.parse(this.startTime, false) || this.parse(this.time, false),
	            time2: this.parse(this.endTime, true),
	            now1: this.parse(new Date(), false),
	            now2: this.parse(new Date(), true),
	            timeVal: ['00:00', '00:00'],
	            count: this.range ? 2 : 1 };
	    },
	    computed: {
	        value: function value() {
	            var val = '';
	            if (this.range) {
	                var startTime = '',
	                    endTime = '';
	                if (this.startTime && this.endTime) {
	                    startTime = this.stringify(this.parse(this.startTime, false));
	                    endTime = this.stringify(this.parse(this.endTime, false));

	                    if (this.showTime) {
	                        startTime = startTime + ' ' + this.timeVal[0];
	                        endTime = endTime + ' ' + this.timeVal[1];
	                    }
	                    val = startTime + ' ~ ' + endTime;
	                }
	            } else {
	                if (this.time) {
	                    val = this.stringify(this.parse(this.time, false));

	                    if (this.showTime) {
	                        val = val + ' ' + this.timeVal[0];
	                    }
	                }
	            }
	            return val;
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        this.container = this.popupContainer();
	        this.$els.container.style.position = this.position;
	        this.container.appendChild(this.$els.container);
	        this.$nextTick(function () {
	            _this.setPosition();
	        });

	        window.addEventListener('resize', function () {
	            clearTimeout(_this.resizeTimer);
	            _this.resizeTimer = setTimeout(function () {
	                _this.setPosition();
	            }, 200);
	        });
	        if (this.range && !this.style.width) {
	            this.$set('style.width', '240px');
	        }
	        if (this.showTime) {
	            var temp = ['00:00', '00:00'];
	            if (this.range) {
	                if (this.startTime) {
	                    var start = this.startTime.split(' ')[1];
	                    if (start) temp[0] = start;
	                }
	                if (this.endTime) {
	                    var end = this.endTime.split(' ')[1];
	                    if (end) temp[1] = end;
	                }
	            } else {
	                if (this.time) {
	                    var time = this.time.split(' ')[1];
	                    if (time) temp[0] = time;
	                }
	            }
	        }
	    },

	    watch: {
	        show: function show(val) {
	            this.hidePanel();
	            val && this.$els.container.focus();
	        },
	        now1: function now1() {
	            this.updateAll();
	        },
	        now2: function now2() {
	            this.updateAll();
	        },
	        value: function value(val) {
	            this.timeBtnEnable = val ? true : false;

	            if (this.range) {
	                var time = val.split(' ~ ');
	                this.$emit('change', time[0], time[1] || '');
	            } else {
	                this.$emit('change', val);
	            }
	        }
	    },
	    methods: {
	        selectTime: function selectTime() {
	            if (!this.timeBtnEnable) return;
	            this.timeSelected = !this.timeSelected;
	        },
	        setPosition: function setPosition() {
	            if (!this.$el) {
	                return;
	            }
	            var p = (0, _func.getOffset)(this.$el, this.container);

	            this.$set('containerStyle', {
	                top: p.bottom + 'px',
	                left: p.left + 'px'
	            });
	        },
	        parse: function parse(time, isLast) {
	            if (time) {
	                var tmpTime = new Date(time);
	                if (isLast === undefined) {
	                    return tmpTime;
	                } else if (isLast) {
	                    return new Date(tmpTime.getFullYear(), tmpTime.getMonth(), tmpTime.getDate(), 23, 59, 59, 999);
	                } else {
	                    return new Date(tmpTime.getFullYear(), tmpTime.getMonth(), tmpTime.getDate());
	                }
	            }
	            return null;
	        },
	        initRanges: function initRanges() {
	            var time = new Date(),
	                ranges = [];
	            ranges.push({
	                name: '今天',
	                start: this.parse(time, false),
	                end: this.parse(time, true),
	                active: true
	            });
	            time.setDate(time.getDate() - 1);
	            ranges.push({
	                name: '昨天',
	                start: this.parse(time, false),
	                end: this.parse(time, true)
	            });
	            time = new Date();
	            time.setDate(time.getDate() - 6);
	            ranges.push({
	                name: '最近7天',
	                start: this.parse(time, false),
	                end: this.parse(new Date(), true)
	            });
	            time = new Date();
	            time.setMonth(time.getMonth() + 1, 0);
	            ranges.push({
	                name: '本月',
	                start: new Date(time.getFullYear(), time.getMonth(), 1),
	                end: this.parse(time, true)
	            });
	            time = new Date();
	            time.setMonth(time.getMonth(), 0);
	            ranges.push({
	                name: '上个月',
	                start: new Date(time.getFullYear(), time.getMonth(), 1),
	                end: this.parse(time, true)
	            });
	            time = new Date();
	            time.setDate(time.getDate() - 29);
	            ranges.push({
	                name: '最近一个月',
	                start: this.parse(time, false),
	                end: this.parse(new Date(), true)
	            });
	            time = new Date();
	            time.setDate(time.getDate() - 365);
	            ranges.push({
	                name: '最近一年',
	                start: this.parse(time, false),
	                end: this.parse(new Date(), true)
	            });
	            this.ranges = ranges;
	        },
	        updateAll: function updateAll() {
	            this.update(new Date(this.now1), 1);
	            this.range && this.update(new Date(this.now2), 2);
	        },
	        click: function click() {
	            this.time1 = this.parse(this.startTime) || this.parse(this.time);
	            this.now1 = this.parse(this.startTime) || this.parse(this.time) || new Date();
	            if (this.range) {
	                this.initRanges();
	                this.time2 = this.parse(this.endTime);
	                this.now2 = this.parse(this.endTime) || new Date();
	            }
	            var rect = this.$el.getBoundingClientRect(),
	                right = document.documentElement.clientWidth - rect.left;
	            right < (this.range ? 441 : 214) && right < rect.left ? this.left = true : this.left = false;
	            this.show = !this.show;
	        },
	        select: function select(item, no) {
	            this.hidePanel();

	            if (item.status.indexOf('ant-calendar-disabled-cell') !== -1) {
	                return;
	            }
	            this['now' + no] = new Date(item.time);
	            this['time' + no] = new Date(item.time);

	            if (this.range) {
	                this[no === 1 ? 'startTime' : 'endTime'] = this.getOutTime(item.time);
	            } else {
	                this.time = this.getOutTime(item.time);

	                if (!this.showTime) this.show = false;
	            }
	        },
	        confirm: function confirm() {
	            this.show = false;
	            this.$emit('confirm');
	        },
	        selectRange: function selectRange(index) {
	            var item = this.ranges[index];

	            for (var i = 0; i < this.ranges.length; i++) {
	                this.$set('ranges[' + i + '].active', false);
	            }
	            this.$set('ranges[' + index + '].active', true);
	            this.now1 = new Date(item.start);
	            this.now2 = new Date(item.end);
	            this.time1 = new Date(item.start);
	            this.time2 = new Date(item.end);
	            this.startTime = this.getOutTime(item.start);
	            this.endTime = this.getOutTime(item.end);
	            this.hidePanel();
	        },
	        getOutTime: function getOutTime(time) {
	            var type = this.time ? _typeof(this.time) : _typeof(this.startTime);
	            if (type === 'number') {
	                return time.getTime();
	            } else if (type === 'object') {
	                return new Date(time);
	            } else {
	                return this.stringify(time);
	            }
	        },
	        update: function update(time, no) {
	            var i,
	                tmpTime,
	                curFirstDay,
	                lastDay,
	                curDay,
	                day,
	                arr = [];
	            time.setDate(0);
	            curFirstDay = time.getDay();
	            lastDay = time.getDate();
	            for (i = curFirstDay; i > 0; i--) {
	                day = lastDay - i + 1;
	                tmpTime = new Date(time.getFullYear(), time.getMonth(), day);
	                tmpTime = this.parse(tmpTime, no === 2);
	                arr.push({
	                    status: this.getTimeStatus(tmpTime, no) || 'ant-calendar-last-month-cell',
	                    title: this.stringify(tmpTime),
	                    text: day,
	                    time: tmpTime
	                });
	            }
	            time.setMonth(time.getMonth() + 2, 0);
	            curDay = time.getDate();
	            time.setDate(1);
	            for (i = 1; i <= curDay; i++) {
	                tmpTime = new Date(time.getFullYear(), time.getMonth(), i);
	                tmpTime = this.parse(tmpTime, no === 2);
	                arr.push({
	                    status: this.getTimeStatus(tmpTime, no),
	                    title: this.stringify(tmpTime),
	                    text: i,
	                    time: tmpTime
	                });
	            }

	            for (i = 1; arr.length < 42; i++) {
	                tmpTime = new Date(time.getFullYear(), time.getMonth() + 1, i);
	                tmpTime = this.parse(tmpTime, no === 2);
	                arr.push({
	                    status: this.getTimeStatus(tmpTime, no) || 'ant-calendar-next-month-btn-day',
	                    title: this.stringify(tmpTime),
	                    text: i,
	                    time: tmpTime
	                });
	            }
	            this['date' + no] = arr;
	        },
	        getTimeStatus: function getTimeStatus(time, no, format) {
	            var status = '',
	                curTime = new Date(),
	                selTime = this['time' + no],
	                tmpTimeVal = this.stringify(time, format || 'yyyy-MM-dd'),
	                curTimeVal = this.stringify(curTime, format || 'yyyy-MM-dd'),
	                selTimeVal = this.stringify(selTime, format || 'yyyy-MM-dd');
	            if (tmpTimeVal === selTimeVal) {
	                status = this.prefix + '-selected-day';
	            } else if (tmpTimeVal === curTimeVal) {
	                status = this.prefix + '-today';
	            }
	            if (this.time1 && this.time2 && time >= this.time1 && time <= this.time2) {
	                status += ' ' + this.prefix + '-inrange';
	            }
	            if (no == 1 && this.time2) {
	                var minTime = new Date(this.time2);
	                if (this.maxRange) {
	                    minTime.setDate(minTime.getDate() - this.maxRange);
	                    if (format === 'yyyy') {
	                        minTime = new Date(minTime.getFullYear(), 0, 1);
	                    }
	                    if (format === 'yyyy-MM') {
	                        minTime = new Date(minTime.getFullYear(), 0, 1);
	                    }
	                    if (time < minTime || time > this.time2) {
	                        status += ' ' + this.prefix + '-disabled-cell';
	                    }
	                } else if (time > this.time2) {
	                    status += ' ' + this.prefix + '-disabled-cell';
	                }
	                if (time > this.time2) {
	                    status += ' ' + this.prefix + '-disabled-cell';
	                }
	            }
	            if (no == 2 && this.time1) {
	                var maxTime = new Date(this.time1);
	                if (this.maxRange) {
	                    maxTime.setDate(maxTime.getDate() + this.maxRange);
	                    if (format === 'yyyy') {
	                        maxTime = new Date(maxTime.getFullYear(), 11, 1);
	                    }
	                    if (format === 'yyyy-MM') {
	                        maxTime = new Date(maxTime.getFullYear(), maxTime.getMonth() + 1, 1);
	                    }
	                    if (time > maxTime || time < this.time1) {
	                        status += ' ' + this.prefix + '-disabled-cell';
	                    }
	                } else if (time < this.time1) {
	                    status += ' ' + this.prefix + '-disabled-cell';
	                }
	            }
	            if (this.disabledDate && this.disabledDate(time)) {
	                status += ' ' + this.prefix + '-disabled-cell';
	            }
	            return status;
	        },
	        stringify: function stringify(time, format) {
	            if (!time) {
	                return '';
	            }
	            format = format || this.format;
	            var year = time.getFullYear(),
	                month = time.getMonth() + 1,
	                day = time.getDate(),
	                hours24 = time.getHours(),
	                hours = hours24 % 12 === 0 ? 12 : hours24 % 12,
	                minutes = time.getMinutes(),
	                seconds = time.getSeconds(),
	                milliseconds = time.getMilliseconds();
	            var map = {
	                yyyy: year,
	                MM: ('0' + month).slice(-2),
	                M: month,
	                dd: ('0' + day).slice(-2),
	                d: day,
	                HH: ('0' + hours24).slice(-2),
	                H: hours24,
	                hh: ('0' + hours).slice(-2),
	                h: hours,
	                mm: ('0' + minutes).slice(-2),
	                m: minutes,
	                ss: ('0' + seconds).slice(-2),
	                s: seconds,
	                S: milliseconds
	            };
	            return format.replace(/y+|M+|d+|H+|h+|m+|s+|S+/g, function (str) {
	                return map[str];
	            });
	        },
	        showYear: function showYear(no) {
	            var name = 'showYear' + no;
	            this.hidePanel(name);
	            this[name] = !this[name];
	            var time = new Date(this['now' + no] || new Date()),
	                selectedYear = time.getFullYear(),
	                num = Math.floor(selectedYear % 10),
	                arr = [];
	            time.setDate(1);
	            time.setFullYear(selectedYear - num);
	            while (arr.length < 12) {
	                no === 2 && time.setMonth(time.getMonth() + 1, 0);
	                arr.push({
	                    year: time.getFullYear(),
	                    status: time.getFullYear() == selectedYear ? 'ant-calendar-year-panel-selected-cell' : ''
	                });
	                time.setDate(1);
	                time.setFullYear(time.getFullYear() + 1);
	            }
	            this['years' + no] = arr;
	        },
	        showMonth: function showMonth(no) {
	            var name = 'showMonth' + no;
	            this.hidePanel(name);
	            this[name] = !this[name];
	            var time = new Date(this['now' + no] || new Date()),
	                selectedMonth = time.getMonth(),
	                arr = [];
	            while (arr.length < 12) {
	                time.setDate(1);
	                time.setMonth(arr.length);
	                no === 2 && time.setMonth(time.getMonth() + 1, 0);
	                arr.push({
	                    month: arr.length + 1,
	                    status: arr.length == selectedMonth ? 'ant-calendar-month-panel-selected-cell' : ''
	                });
	            }
	            this['months' + no] = arr;
	        },
	        changeYearRange: function changeYearRange(no, flag) {
	            var arr = this['years' + no],
	                time = new Date(this['time' + no] || new Date());
	            for (var i in arr) {
	                var item = arr[i],
	                    year = item.year + 12 * flag;
	                time.setDate(1);
	                time.setFullYear(year);
	                no === 2 && time.setMonth(time.getMonth() + 1, 0);
	                item.year = year;
	                item.status = year == new Date(this['now' + no] || new Date()).getFullYear() ? 'ant-calendar-year-panel-selected-cell' : '';
	            }
	        },
	        changeYear: function changeYear(flag, no) {
	            var now = this['now' + no];
	            now.setDate(1);
	            now.setFullYear(now.getFullYear() + flag);
	            no === 2 && now.setMonth(now.getMonth() + 1, 0);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        changeMonth: function changeMonth(flag, no) {
	            var now = this['now' + no];
	            now.setDate(1);
	            now.setMonth(now.getMonth() + flag);
	            no === 2 && now.setMonth(now.getMonth() + 1, 0);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        selectYear: function selectYear(index, no) {
	            if (this['years' + no][index].status.indexOf('ant-calendar-disabled-cell') !== -1) {
	                return;
	            }
	            for (var i = 0; i < this['years' + no].length; i++) {
	                if (this['years' + no][i].status == 'ant-calendar-year-panel-selected-cell') {
	                    this.$set('years' + no + '[' + i + '].status', '');
	                }
	            }
	            this.$set('years' + no + '[' + index + '].status', 'ant-calendar-year-panel-selected-cell');
	            var now = this['now' + no];
	            now.setFullYear(this['years' + no][index].year);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        selectMonth: function selectMonth(index, no) {
	            if (this['months' + no][index].status.indexOf('ant-calendar-disabled-cell') !== -1) {
	                return;
	            }
	            for (var i = 0; i < this['months' + no].length; i++) {
	                if (this['months' + no][i].status == 'ant-calendar-month-panel-selected-cell') {
	                    this.$set('years' + no + '[' + i + '].status', '');
	                }
	            }
	            this.$set('months' + no + '[' + index + '].status', 'ant-calendar-month-panel-selected-cell');
	            var now = this['now' + no];
	            now.setMonth(this['months' + no][index].month - 1);
	            this['now' + no] = new Date(now);
	            this.hidePanel();
	        },
	        hidePanel: function hidePanel(name) {
	            ['showYear1', 'showYear2', 'showMonth1', 'showMonth2'].map(function (item) {
	                if (item !== name) {
	                    this[item] = false;
	                }
	            }.bind(this));
	        },
	        clear: function clear() {
	            this.time1 = this.time2 = this.startTime = this.endTime = this.time = null;
	            this.timeVal = ["00:00", "00:00"];
	            this.timeSelected = false;
	            this.now1 = new Date();
	            this.now2 = new Date();
	        }
	    }
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(279)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/timePicker/timePickerOption.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(280)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2a19df48/timePickerOption.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            H: '00',
	            M: '00',
	            S: '00',
	            hasSeconds: true
	        };
	    },
	    props: {
	        prefix: {
	            type: String,
	            default: 'ant-time-picker-panel'
	        },
	        selected: Boolean,
	        localFormat: {
	            type: String,
	            default: 'HH:mm:ss'
	        },
	        value: String,
	        hideDisabled: {
	            type: Boolean,
	            default: false
	        },
	        timeValue: String,
	        disabledH: Function,
	        disabledM: Function,
	        disabledS: Function
	    },
	    computed: {
	        wrapClasses: function wrapClasses() {
	            return ['' + this.prefix + (this.prefix.includes('-panel') ? '' : '-panel'), this.prefix + '-placement-bottomLeft', (0, _defineProperty3.default)({}, this.prefix + '-narrow', !this.hasSeconds)];
	        }
	    },
	    watch: {
	        selected: function selected(Boolean) {
	            if (Boolean) {
	                if (!this.timeValue) {
	                    var curDate = new Date();
	                    this.$set('H', this.dealTime(curDate.getHours()));
	                    this.$set('M', this.dealTime(curDate.getMinutes()));
	                    this.$set('S', this.dealTime(curDate.getSeconds()));
	                } else {
	                    var tArr = this.timeValue.split(':');
	                    tArr[0] && this.$set('H', tArr[0]);
	                    tArr[1] && this.$set('M', tArr[1]);
	                    tArr[2] && this.$set('S', tArr[2]);
	                }
	                this.$nextTick(function () {
	                    var t = document.getElementsByClassName(this.prefix + '-select-option-selected');
	                    for (var i in t) {
	                        this.setScrollTop(t[i]);
	                    }
	                });
	                if (this.localFormat === 'HH:mm') {
	                    this.$set('hasSeconds', false);
	                }
	                this.createSelection(this.$els.timePickerPanel);
	            }
	        }
	    },
	    methods: {
	        timePicker: function timePicker(type, e) {
	            if (e.target.classList.contains(this.prefix + '-select-option-disabled')) return;
	            this.setScrollTop(e.target);
	            this.$set(type, e.target.textContent);
	            if (this.hasSeconds) {
	                this.$set('timeValue', this.H + ':' + this.M + ':' + this.S);
	            } else {
	                this.$set('timeValue', this.H + ':' + this.M);
	            }
	        },
	        setScrollTop: function setScrollTop(elem) {
	            var top = elem.offsetTop;
	            elem.parentElement && (elem.parentElement.parentElement.scrollTop = top);
	        },
	        selectedCls: function selectedCls(Num, curNum, type) {
	            var _ref2;

	            return _ref2 = {}, (0, _defineProperty3.default)(_ref2, this.prefix + '-select-option-selected', curNum * 1 === Num * 1), (0, _defineProperty3.default)(_ref2, this.prefix + '-select-option-disabled', this['disabled' + type] && this['disabled' + type](curNum * 1)), _ref2;
	        },
	        showLi: function showLi(curNum, type) {
	            var show = true;
	            if (this.hideDisabled && this['disabled' + type] && this['disabled' + type](curNum * 1)) show = false;
	            return show;
	        },
	        clearTime: function clearTime() {
	            this.$set('timeValue', '');
	            this.$set('selected', false);
	        },
	        dealTime: function dealTime(num) {
	            var t = num;
	            if (num < 10) {
	                t = '0' + t;
	            }
	            return t;
	        },
	        createSelection: function createSelection(field, start, end) {
	            if (field.createTextRange) {
	                var selRange = field.createTextRange();
	                selRange.collapse(true);
	                selRange.moveStart('character', start);
	                selRange.moveEnd('character', end);
	                selRange.select();
	                field.focus();
	            } else if (field.setSelectionRange) {
	                field.focus();
	                field.setSelectionRange(start, end);
	            } else if (typeof field.selectionStart !== 'undefined') {
	                field.selectionStart = start;
	                field.selectionEnd = end;
	                field.focus();
	            }
	        }
	    }
	};

/***/ },
/* 280 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n    <div :class=\"[prefix+'-inner',{[prefix+'-2-columns']: !hasSeconds}]\">\n        <div :class=\"prefix+'-input-wrap'\">\n            <input :class=\"prefix+'-input'\" placeholder=\"请选择时间\" v-el:time-picker-panel v-model=\"timeValue\">\n            <a :class=\"prefix+'-clear-btn'\" role=\"button\" title=\"清除\" @click=\"clearTime\"></a>\n        </div>\n        <div :class=\"prefix+'-combobox'\">\n            <div :class=\"prefix+'-select'\">\n                <ul @mouseover=\"createSelection($els.timePickerPanel, 0, 2)\">\n                    <template v-for=\"$index in 24\">\n                        <li v-if=\"showLi($index, 'H')\" @click=\"timePicker('H', $event)\" :class=\"selectedCls(H, $index, 'H')\" v-text=\"($index<10?'0':'')+$index\"></li>\n                    </template>\n                </ul>\n            </div>\n            <div :class=\"prefix+'-select'\">\n                <ul @mouseover=\"createSelection($els.timePickerPanel, 3, 5)\">\n                    <template v-for=\"$index in 60\">\n                        <li v-if=\"showLi($index, 'M')\" @click=\"timePicker('M', $event)\" :class=\"selectedCls(M, $index, 'M')\" v-text=\"($index<10?'0':'')+$index\"></li>\n                    </template>\n                </ul>\n            </div>\n            <div :class=\"prefix+'-select'\" v-if=\"hasSeconds\">\n                <ul @mouseover=\"createSelection($els.timePickerPanel, 6, 8)\">\n                    <template v-for=\"$index in 60\">\n                        <li v-if=\"showLi($index, 'S')\" @click=\"timePicker('S', $event)\" :class=\"selectedCls(S, $index, 'S')\" v-text=\"($index<10?'0':'')+$index\"></li>\n                    </template>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 281 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"prefix+'-picker'\" :style=\"style\" _v-59e23a72=\"\">\n    <span _v-59e23a72=\"\">\n        <input :value=\"value\" :placeholder=\"placeholder\" readonly=\"\" :disabled=\"disabled\" :class=\"['ant-calendar-range-picker','ant-input',{['ant-input-'+size]:size},{focus:show}]\" @click=\"click\" @mousedown=\"$event.preventDefault()\" _v-59e23a72=\"\">\n        <i v-if=\"clearable&amp;&amp;value\" @click.stop=\"clear\" class=\"anticon anticon-cross-circle ant-calendar-picker-clear\" _v-59e23a72=\"\"></i>\n        <span class=\"ant-calendar-picker-icon\" _v-59e23a72=\"\"></span>\n    </span>\n    <div class=\"ant-calendar-picker-container\" :class=\"{'ant-calendar-picker-container-placement-bottomLeft':left}\" v-show=\"show\" transition=\"slide-up\" tabindex=\"-1\" @blur=\"show = false\" @mousedown=\"$event.preventDefault()\" @keyup.up=\"changeMonth(-1,1)\" @keyup.down=\"changeMonth(1,1)\" @keyup.left=\"changeYear(-1,1)\" @keyup.right=\"changeYear(1,1)\" :style=\"containerStyle\" v-el:container=\"\" _v-59e23a72=\"\">\n        <div :class=\"[prefix,{[prefix+'-range']:range},{[prefix+'-time']:showTime}]\" _v-59e23a72=\"\">\n            <div class=\"ant-calendar-top\" v-if=\"range&amp;&amp;!en\" _v-59e23a72=\"\">\n                <template v-for=\"item in ranges\">\n                    <i v-if=\"$index\" _v-59e23a72=\"\"></i><a v-text=\"item.name\" :class=\"item.active?'on':''\" @click=\"selectRange($index)\" _v-59e23a72=\"\"></a>\n                </template>\n            </div>\n            <div class=\"ant-calendar-date-panel\" _v-59e23a72=\"\">\n                <template v-for=\"no in count\">\n                    <div :class=\"range?'ant-calendar-range-part ant-calendar-range-left':''\" _v-59e23a72=\"\">\n                        <div class=\"ant-calendar-header\" _v-59e23a72=\"\">\n                            <a class=\"ant-calendar-prev-year-btn\" :title=\"prevYearTitle\" @click=\"changeYear(-1,no+1)\" _v-59e23a72=\"\"></a>\n                            <a class=\"ant-calendar-prev-month-btn\" :title=\"prevMonthTitle\" @click=\"changeMonth(-1,no+1)\" _v-59e23a72=\"\"></a>\n                            <span class=\"ant-calendar-my-select\" _v-59e23a72=\"\">\n                                <a v-if=\"!en\" class=\"ant-calendar-year-select\" :title=\"selectYearTitle\" @click=\"showYear(no+1)\" _v-59e23a72=\"\">{{this['now'+(no+1)].getFullYear()+(en?\"\":\"年\")}}</a>\n                                <a v-if=\"!en\" class=\"ant-calendar-month-select\" :title=\"selectMonthTitle\" @click=\"showMonth(no+1)\" _v-59e23a72=\"\">{{months[this['now'+(no+1)].getMonth()]}}</a>\n                                <a v-if=\"en\" class=\"ant-calendar-month-select\" :title=\"selectMonthTitle\" @click=\"showMonth(no+1)\" _v-59e23a72=\"\">{{months[this['now'+(no+1)].getMonth()]}}</a>\n                                <a v-if=\"en\" class=\"ant-calendar-year-select\" :title=\"selectYearTitle\" @click=\"showYear(no+1)\" _v-59e23a72=\"\">{{this['now'+(no+1)].getFullYear()+(en?\"\":\"年\")}}</a>\n                            </span>\n                            <a class=\"ant-calendar-next-month-btn\" :title=\"nextMonthTitle\" @click=\"changeMonth(1,no+1)\" _v-59e23a72=\"\"></a>\n                            <a class=\"ant-calendar-next-year-btn\" :title=\"nextYearTitle\" @click=\"changeYear(1,no+1)\" _v-59e23a72=\"\"></a>\n                        </div>\n                        <div class=\"ant-calendar-body\" _v-59e23a72=\"\">\n                            <table class=\"ant-calendar-table\" cellspacing=\"0\" role=\"grid\" _v-59e23a72=\"\">\n                                <thead _v-59e23a72=\"\">\n                                    <tr _v-59e23a72=\"\">\n                                        <th v-for=\"day in days\" class=\"ant-calendar-column-header\" _v-59e23a72=\"\">\n                                            <span class=\"ant-calendar-column-header-inner\" v-text=\"day\" _v-59e23a72=\"\"></span>\n                                        </th>\n                                    </tr>\n                                </thead>\n                                <template v-if=\"this['date'+(no+1)]\">\n                                    <tbody class=\"ant-calendar-tbody\" _v-59e23a72=\"\">\n                                        <tr v-for=\"i in 6\" _v-59e23a72=\"\">\n                                            <td v-for=\"j in 7\" :title=\"this['date'+(no+1)][i * 7 + j].title\" :class=\"[prefix+'-cell',this['date'+(no+1)][i * 7 + j].status]\" @click=\"select(this['date'+(no+1)][i * 7 + j], no+1)\" _v-59e23a72=\"\">\n                                                <div v-text=\"this['date'+(no+1)][i * 7 + j].text\" :class=\"prefix+'-date'\" aria-selected=\"false\" aria-disabled=\"false\" _v-59e23a72=\"\">18</div>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </template>\n                            </table>\n                        </div>\n                        <div v-if=\"showTime\" v-show=\"timeSelected\" transition=\"fade\" :class=\"prefix+'-time-picker'\" _v-59e23a72=\"\">\n                            <time-picker-panel prefix=\"ant-calendar-time-picker\" :time-value.sync=\"timeVal[no]\" :selected.sync=\"timeSelected\" :disabled-h=\"disabledTime[no].disabledHours\" :disabled-m=\"disabledTime[no].disabledMinutes\" local-format=\"HH:mm\" _v-59e23a72=\"\"></time-picker-panel>\n                        </div>\n                        <div class=\"ant-calendar-year-panel\" transition=\"fade\" v-if=\"this['showYear'+(no+1)]\" _v-59e23a72=\"\">\n                            <span class=\"ant-calendar-year-panel-prev\" @click=\"changeYearRange(no+1,-1)\" _v-59e23a72=\"\"><a class=\"anticon anticon-up\" _v-59e23a72=\"\"></a></span>\n                            <span class=\"ant-calendar-year-panel-cell\" v-for=\"item in this['years'+(no+1)]\" :class=\"item.status\" @click=\"selectYear($index,no+1)\" style=\"width:33.33%; display:inline-block;padding:9px 0\" _v-59e23a72=\"\">\n                                <a class=\"ant-calendar-year-panel-year\" _v-59e23a72=\"\">{{item.year+(en?\"\":\"年\")}}</a>\n                            </span>\n                            <span class=\"ant-calendar-year-panel-next\" @click=\"changeYearRange(no+1,1)\" _v-59e23a72=\"\"><a class=\"anticon anticon-down\" _v-59e23a72=\"\"></a></span>\n                        </div>\n                        <div class=\"ant-calendar-month-panel\" transition=\"fade\" v-if=\"this['showMonth'+(no+1)]\" _v-59e23a72=\"\">\n                            <div class=\"ant-calendar-month-panel-body\" _v-59e23a72=\"\">\n                                <table class=\"ant-calendar-month-panel-table\" _v-59e23a72=\"\">\n                                    <tbody class=\"ant-calendar-month-panel-tbody\" _v-59e23a72=\"\">\n                                        <tr v-for=\"n in 4\" _v-59e23a72=\"\">\n                                            <td class=\"ant-calendar-month-panel-cell\" v-for=\"m in 3\" :class=\"this['months'+(no+1)][3*n+m].status\" _v-59e23a72=\"\">\n                                                <a class=\"ant-calendar-month-panel-month\" @click=\"selectMonth(3*n+m,no+1)\" _v-59e23a72=\"\">{{months[this['months'+(no+1)][3*n+m].month-1].substr(0,3)}}</a>\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </template>\n            </div>\n            <div v-if=\"range || showTime\" :class=\"[prefix+'-footer',{[prefix+'-range-bottom']:range}]\" _v-59e23a72=\"\">\n                <div class=\"ant-calendar-footer-btn\" _v-59e23a72=\"\">\n                    <a v-if=\"showTime\" :class=\"[prefix+'-time-picker-btn', {[prefix+'-time-picker-btn-disabled']: !timeBtnEnable}]\" role=\"button\" @click=\"selectTime\" _v-59e23a72=\"\">{{timeSelected?'选择日期':'选择时间'}}</a>\n                    <a :class=\"{[prefix+'-ok-btn']: showTime}\" role=\"button\" @click=\"confirm\" _v-59e23a72=\"\">{{confirmTitle}}</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</span>\n";

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _form = __webpack_require__(283);

	var _form2 = _interopRequireDefault(_form);

	var _formItem = __webpack_require__(286);

	var _formItem2 = _interopRequireDefault(_formItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_form2.default.Item = _formItem2.default;

	exports.default = _form2.default;

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(284)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/form/form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(285)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-13144a27/form.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(249);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-form',
	  data: function data() {
	    return {
	      prefix: 'ant-form',
	      fields: {},
	      initModel: {},
	      fieldLength: 0
	    };
	  },
	  props: {
	    model: Object,
	    rules: Object,
	    direction: {
	      type: String,
	      default: 'inline'
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.$on('form.addField', function (field) {
	      _this.fields[field.prop] = field;
	      _this.fieldLength++;
	    });
	    this.$on('form.removeField', function (field) {
	      delete _this.fields[field.prop];
	      _this.fieldLength--;
	    });
	  },
	  ready: function ready() {
	    if (this.model) this.initModel = JSON.parse((0, _stringify2.default)(this.model));
	  },

	  computed: {
	    wrapClasses: function wrapClasses() {
	      return this.prefix + ' ' + this.prefix + '-' + this.direction;
	    }
	  },
	  methods: {
	    resetFields: function resetFields() {
	      var all = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      if (all) {
	        var temp = JSON.parse((0, _stringify2.default)(this.initModel));
	        for (var key in this.model) {
	          if (this.fields[key]) {
	            this.fields[key].resetField();
	          } else {
	            this.model[key] = temp[key];
	          }
	        }
	      } else {
	        for (var prop in this.fields) {
	          this.fields[prop].resetField();
	        }
	      }
	    },
	    validate: function validate(callback) {
	      var _this2 = this;

	      var count = 0;
	      var valid = true;

	      for (var prop in this.fields) {
	        var field = this.fields[prop];
	        field.validate('', function (errors) {
	          if (errors) {
	            valid = false;
	          }

	          if (++count === _this2.fieldLength) {
	            callback(valid);
	          }
	        });
	      }
	    },
	    validateField: function validateField(prop, cb) {
	      var field = this.fields[prop];
	      if (!field) {
	        throw new Error('must call validateField with valid prop string!');
	      }

	      field.validate('', cb);
	    }
	  }
	};

/***/ },
/* 285 */
/***/ function(module, exports) {

	module.exports = "\n<form :class=\"wrapClasses\">\n    <slot></slot>\n</form>\n";

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(287)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/form/formItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(320)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-239bef4c/formItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(249);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _asyncValidator = __webpack_require__(288);

	var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

	var _layout = __webpack_require__(313);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-form-item',
	    data: function data() {
	        return {
	            prefix: 'ant-form-item',
	            valid: true,
	            validateDisabled: false,
	            initialValue: null
	        };
	    },
	    props: (0, _utils.defaultProps)({
	        prefixCls: 'ant-form',
	        prop: String,
	        test: (0, _utils.oneOfType)([String, Number, Boolean, Object, Array]),
	        label: String,
	        labelCol: {},
	        wrapperCol: {},
	        help: String,
	        validateStatus: String,
	        hasFeedback: false,
	        required: false,
	        rules: (0, _utils.oneOfType)([Object, Array])
	    }),
	    watch: {
	        fieldValue: function fieldValue() {
	            if (!this.reset) this.validate();
	        }
	    },
	    components: { vRow: _layout.vRow, vCol: _layout.vCol },
	    computed: {
	        itemCls: function itemCls() {
	            return ['ant-row', this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-with-help', this.help)];
	        },
	        labelCls: function labelCls() {
	            return this.prefix + '-label';
	        },
	        controlCls: function controlCls() {
	            var status = { error: 'has-error', warning: 'has-warning', success: 'has-success', validating: 'is-validating' }[this.validateStatus];

	            return [this.prefix + '-control', { 'has-feedback': this.hasFeedback }, (0, _defineProperty3.default)({}, status, status)];
	        },
	        form: function form() {
	            var parent = this.$parent;
	            while (parent.$options.name !== 'v-form') {
	                parent = parent.$parent;
	            }
	            return parent;
	        },

	        fieldValue: {
	            cache: false,
	            get: function get() {
	                var model = this.form.model;
	                if (!model || !this.prop) {
	                    return;
	                }

	                var temp = this.prop.split(':');

	                return temp.length > 1 ? model[temp[0]][temp[1]] : model[this.prop];
	            }
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        if (this.prop) {
	            this.$dispatch('form.addField', this);

	            this.initialValue = this.getInitialValue();
	            var rules = this.getRules();

	            if (rules.length) {
	                rules.every(function (rule) {
	                    if (rule.required) {
	                        _this.required = true;
	                        return false;
	                    }
	                });
	            }
	        }
	    },
	    beforeDestroy: function beforeDestroy() {
	        this.$dispatch('form.removeField', this);
	    },

	    methods: {
	        validate: function validate(trigger, cb) {
	            var _this2 = this;

	            var rules = this.getFilteredRule(trigger);
	            if (!rules || rules.length === 0) {
	                cb && cb();
	                return true;
	            }

	            this.validateStatus = 'validating';

	            var descriptor = {};
	            descriptor[this.prop] = rules;

	            var validator = new _asyncValidator2.default(descriptor);
	            var model = {};

	            model[this.prop] = this.fieldValue;

	            validator.validate(model, { firstFields: true }, function (errors, fields) {
	                _this2.valid = !errors;
	                _this2.help = errors ? errors[0].message : '';

	                cb && cb(errors);
	                _this2.validateStatus = _this2.help ? 'error' : 'success';
	            });
	        },
	        resetField: function resetField() {
	            var _this3 = this;

	            this.validateStatus = "";
	            this.valid = true;
	            this.help = '';
	            this.reset = true;

	            var model = this.form.model;
	            var value = this.fieldValue;

	            if (Array.isArray(value) && value.length) {
	                this.validateDisabled = true;
	                model[this.prop] = [];
	            } else if (value) {
	                this.validateDisabled = true;
	                model[this.prop] = this.initialValue;
	            }
	            this.$nextTick(function () {
	                _this3.reset = false;
	            });
	        },
	        getFilteredRule: function getFilteredRule(trigger) {
	            var rules = this.getRules();

	            return rules.filter(function (rule) {
	                return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
	            });
	        },
	        getRules: function getRules() {
	            var formRules = this.form.rules;
	            var selfRuels = this.rules;

	            formRules = formRules ? formRules[this.prop] : [];

	            return [].concat(selfRuels || formRules || []);
	        },
	        getInitialValue: function getInitialValue() {
	            var value = this.form.model[this.prop];
	            if (value === undefined) {
	                return value;
	            } else {
	                return JSON.parse((0, _stringify2.default)(value));
	            }
	        }
	    }
	};

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(289);

	var _validator = __webpack_require__(290);

	var _validator2 = _interopRequireDefault(_validator);

	var _messages2 = __webpack_require__(312);

	var _rule = __webpack_require__(292);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Encapsulates a validation schema.
	 *
	 *  @param descriptor An object declaring validation rules
	 *  for this schema.
	 */
	function Schema(descriptor) {
	  this.rules = null;
	  this._messages = _messages2.messages;
	  this.define(descriptor);
	}

	Schema.prototype = {
	  messages: function messages(_messages) {
	    if (_messages) {
	      this._messages = (0, _util.deepMerge)((0, _messages2.newMessages)(), _messages);
	    }
	    return this._messages;
	  },
	  define: function define(rules) {
	    if (!rules) {
	      throw new Error('Cannot configure a schema with no rules');
	    }
	    if ((typeof rules === 'undefined' ? 'undefined' : _typeof(rules)) !== 'object' || Array.isArray(rules)) {
	      throw new Error('Rules must be an object');
	    }
	    this.rules = {};
	    var z = void 0;
	    var item = void 0;
	    for (z in rules) {
	      if (rules.hasOwnProperty(z)) {
	        item = rules[z];
	        this.rules[z] = Array.isArray(item) ? item : [item];
	      }
	    }
	  },
	  validate: function validate(source_) {
	    var _this = this;

	    var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var oc = arguments[2];

	    var source = source_;
	    var options = o;
	    var callback = oc;
	    if (typeof options === 'function') {
	      callback = options;
	      options = {};
	    }
	    if (!this.rules || Object.keys(this.rules).length === 0) {
	      if (callback) {
	        callback();
	      }
	      return;
	    }
	    function complete(results) {
	      var i = void 0;
	      var field = void 0;
	      var errors = [];
	      var fields = {};

	      function add(e) {
	        if (Array.isArray(e)) {
	          errors = errors.concat.apply(errors, e);
	        } else {
	          errors.push(e);
	        }
	      }

	      for (i = 0; i < results.length; i++) {
	        add(results[i]);
	      }
	      if (!errors.length) {
	        errors = null;
	        fields = null;
	      } else {
	        for (i = 0; i < errors.length; i++) {
	          field = errors[i].field;
	          fields[field] = fields[field] || [];
	          fields[field].push(errors[i]);
	        }
	      }
	      callback(errors, fields);
	    }

	    if (options.messages) {
	      var messages = this.messages();
	      if (messages === _messages2.messages) {
	        messages = (0, _messages2.newMessages)();
	      }
	      (0, _util.deepMerge)(messages, options.messages);
	      options.messages = messages;
	    } else {
	      options.messages = this.messages();
	    }

	    options.error = _rule.error;
	    var arr = void 0;
	    var value = void 0;
	    var series = {};
	    var keys = options.keys || Object.keys(this.rules);
	    keys.forEach(function (z) {
	      arr = _this.rules[z];
	      value = source[z];
	      arr.forEach(function (r) {
	        var rule = r;
	        if (typeof rule.transform === 'function') {
	          if (source === source_) {
	            source = _extends({}, source);
	          }
	          value = source[z] = rule.transform(value);
	        }
	        if (typeof rule === 'function') {
	          rule = {
	            validator: rule
	          };
	        } else {
	          rule = _extends({}, rule);
	        }
	        rule.validator = _this.getValidationMethod(rule);
	        rule.field = z;
	        rule.fullField = rule.fullField || z;
	        rule.type = _this.getType(rule);
	        if (!rule.validator) {
	          return;
	        }
	        series[z] = series[z] || [];
	        series[z].push({
	          rule: rule,
	          value: value,
	          source: source,
	          field: z
	        });
	      });
	    });
	    var errorFields = {};
	    (0, _util.asyncMap)(series, options, function (data, doIt) {
	      var rule = data.rule;
	      var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof(rule.fields) === 'object' || _typeof(rule.defaultField) === 'object');
	      deep = deep && (rule.required || !rule.required && data.value);
	      rule.field = data.field;
	      function addFullfield(key, schema) {
	        return _extends({}, schema, {
	          fullField: rule.fullField + '.' + key
	        });
	      }

	      function cb() {
	        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	        var errors = e;
	        if (!Array.isArray(errors)) {
	          errors = [errors];
	        }
	        if (errors.length) {
	          (0, _util.warning)('async-validator:', errors);
	        }
	        if (errors.length && rule.message) {
	          errors = [].concat(rule.message);
	        }

	        errors = errors.map((0, _util.complementError)(rule));

	        if ((options.first || options.fieldFirst) && errors.length) {
	          errorFields[rule.field] = 1;
	          return doIt(errors);
	        }
	        if (!deep) {
	          doIt(errors);
	        } else {
	          // if rule is required but the target object
	          // does not exist fail at the rule level and don't
	          // go deeper
	          if (rule.required && !data.value) {
	            if (rule.message) {
	              errors = [].concat(rule.message).map((0, _util.complementError)(rule));
	            } else {
	              errors = [options.error(rule, (0, _util.format)(options.messages.required, rule.field))];
	            }
	            return doIt(errors);
	          }

	          var fieldsSchema = {};
	          if (rule.defaultField) {
	            for (var k in data.value) {
	              if (data.value.hasOwnProperty(k)) {
	                fieldsSchema[k] = rule.defaultField;
	              }
	            }
	          }
	          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
	          for (var f in fieldsSchema) {
	            if (fieldsSchema.hasOwnProperty(f)) {
	              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
	              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
	            }
	          }
	          var schema = new Schema(fieldsSchema);
	          schema.messages(options.messages);
	          if (data.rule.options) {
	            data.rule.options.messages = options.messages;
	            data.rule.options.error = options.error;
	          }
	          schema.validate(data.value, data.rule.options || options, function (errs) {
	            doIt(errs && errs.length ? errors.concat(errs) : errs);
	          });
	        }
	      }

	      rule.validator(rule, data.value, cb, data.source, options);
	    }, function (results) {
	      complete(results);
	    });
	  },
	  getType: function getType(rule) {
	    if (rule.type === undefined && rule.pattern instanceof RegExp) {
	      rule.type = 'pattern';
	    }
	    if (typeof rule.validator !== 'function' && rule.type && !_validator2["default"].hasOwnProperty(rule.type)) {
	      throw new Error((0, _util.format)('Unknown rule type %s', rule.type));
	    }
	    return rule.type || 'string';
	  },
	  getValidationMethod: function getValidationMethod(rule) {
	    if (typeof rule.validator === 'function') {
	      return rule.validator;
	    }
	    var keys = Object.keys(rule);
	    var messageIndex = keys.indexOf('message');
	    if (messageIndex !== -1) {
	      keys.splice(messageIndex, 1);
	    }
	    if (keys.length === 1 && keys[0] === 'required') {
	      return _validator2["default"].required;
	    }
	    return _validator2["default"][this.getType(rule)] || false;
	  }
	};

	Schema.register = function register(type, validator) {
	  if (typeof validator !== 'function') {
	    throw new Error('Cannot register a validator by type, validator is not a function');
	  }
	  _validator2["default"][type] = validator;
	};

	Schema.messages = _messages2.messages;

	exports["default"] = Schema;
	module.exports = exports['default'];

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.warning = warning;
	exports.format = format;
	exports.isEmptyValue = isEmptyValue;
	exports.isEmptyObject = isEmptyObject;
	exports.asyncMap = asyncMap;
	exports.complementError = complementError;
	exports.deepMerge = deepMerge;
	var formatRegExp = /%[sdj%]/g;

	var warning2 = function warning2() {};

	if (true) {
	  warning2 = function warning2(type, message) {
	    if (typeof console !== 'undefined' && console.warn) {
	      console.warn(type, message);
	    }
	  };
	}

	function warning(type, errors) {
	  // only warn native warning, default type is string, confuses many people...
	  if (errors.every(function (e) {
	    return typeof e === 'string';
	  })) {
	    warning2(type, errors);
	  }
	}

	function format() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  var i = 1;
	  var f = args[0];
	  var len = args.length;
	  if (typeof f === 'function') {
	    return f.apply(null, args.slice(1));
	  }
	  if (typeof f === 'string') {
	    var str = String(f).replace(formatRegExp, function (x) {
	      if (x === '%%') {
	        return '%';
	      }
	      if (i >= len) {
	        return x;
	      }
	      switch (x) {
	        case '%s':
	          return String(args[i++]);
	        case '%d':
	          return Number(args[i++]);
	        case '%j':
	          try {
	            return JSON.stringify(args[i++]);
	          } catch (_) {
	            return '[Circular]';
	          }
	          break;
	        default:
	          return x;
	      }
	    });
	    for (var arg = args[i]; i < len; arg = args[++i]) {
	      str += ' ' + arg;
	    }
	    return str;
	  }
	  return f;
	}

	function isNativeStringType(type) {
	  return type === 'string' || type === 'url' || type === 'hex' || type === 'email';
	}

	function isEmptyValue(value, type) {
	  if (value === undefined || value === null) {
	    return true;
	  }
	  if (type === 'array' && Array.isArray(value) && !value.length) {
	    return true;
	  }
	  if (isNativeStringType(type) && typeof value === 'string' && !value) {
	    return true;
	  }
	  return false;
	}

	function isEmptyObject(obj) {
	  return Object.keys(obj).length === 0;
	}

	function asyncParallelArray(arr, func, callback) {
	  var results = [];
	  var total = 0;
	  var arrLength = arr.length;

	  function count(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === arrLength) {
	      callback(results);
	    }
	  }

	  arr.forEach(function (a) {
	    func(a, count);
	  });
	}

	function asyncSerialArray(arr, func, callback) {
	  var index = 0;
	  var arrLength = arr.length;

	  function next(errors) {
	    if (errors && errors.length) {
	      callback(errors);
	      return;
	    }
	    var original = index;
	    index = index + 1;
	    if (original < arrLength) {
	      func(arr[original], next);
	    } else {
	      callback([]);
	    }
	  }

	  next([]);
	}

	function flattenObjArr(objArr) {
	  var ret = [];
	  Object.keys(objArr).forEach(function (k) {
	    ret.push.apply(ret, objArr[k]);
	  });
	  return ret;
	}

	function asyncMap(objArr, option, func, callback) {
	  if (option.first) {
	    var flattenArr = flattenObjArr(objArr);
	    return asyncSerialArray(flattenArr, func, callback);
	  }
	  var firstFields = option.firstFields || [];
	  if (firstFields === true) {
	    firstFields = Object.keys(objArr);
	  }
	  var objArrKeys = Object.keys(objArr);
	  var objArrLength = objArrKeys.length;
	  var total = 0;
	  var results = [];
	  var next = function next(errors) {
	    results.push.apply(results, errors);
	    total++;
	    if (total === objArrLength) {
	      callback(results);
	    }
	  };
	  objArrKeys.forEach(function (key) {
	    var arr = objArr[key];
	    if (firstFields.indexOf(key) !== -1) {
	      asyncSerialArray(arr, func, next);
	    } else {
	      asyncParallelArray(arr, func, next);
	    }
	  });
	}

	function complementError(rule) {
	  return function (oe) {
	    if (oe && oe.message) {
	      oe.field = oe.field || rule.fullField;
	      return oe;
	    }
	    return {
	      message: oe,
	      field: oe.field || rule.fullField
	    };
	  };
	}

	function deepMerge(target, source) {
	  if (source) {
	    for (var s in source) {
	      if (source.hasOwnProperty(s)) {
	        var value = source[s];
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && _typeof(target[s]) === 'object') {
	          target[s] = _extends({}, target[s], value);
	        } else {
	          target[s] = value;
	        }
	      }
	    }
	  }
	  return target;
	}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  string: __webpack_require__(291),
	  method: __webpack_require__(299),
	  number: __webpack_require__(300),
	  "boolean": __webpack_require__(301),
	  regexp: __webpack_require__(302),
	  integer: __webpack_require__(303),
	  "float": __webpack_require__(304),
	  array: __webpack_require__(305),
	  object: __webpack_require__(306),
	  "enum": __webpack_require__(307),
	  pattern: __webpack_require__(308),
	  email: __webpack_require__(309),
	  url: __webpack_require__(309),
	  date: __webpack_require__(310),
	  hex: __webpack_require__(309),
	  required: __webpack_require__(311)
	};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Performs validation for string types.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function string(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'string');
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	      _rule2["default"].pattern(rule, value, source, errors, options);
	      if (rule.whitespace === true) {
	        _rule2["default"].whitespace(rule, value, source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = string;
	module.exports = exports['default'];

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = {
	  required: __webpack_require__(293),
	  whitespace: __webpack_require__(294),
	  type: __webpack_require__(295),
	  range: __webpack_require__(296),
	  "enum": __webpack_require__(297),
	  pattern: __webpack_require__(298)
	};
	module.exports = exports['default'];

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(289);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating required fields.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function required(rule, value, source, errors, options, type) {
	  if (rule.required && (!source.hasOwnProperty(rule.field) || util.isEmptyValue(value, type))) {
	    errors.push(util.format(options.messages.required, rule.fullField));
	  }
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(289);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating whitespace.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function whitespace(rule, value, source, errors, options) {
	  if (/^\s+$/.test(value) || value === '') {
	    errors.push(util.format(options.messages.whitespace, rule.fullField));
	  }
	}

	exports["default"] = whitespace;
	module.exports = exports['default'];

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _util = __webpack_require__(289);

	var util = _interopRequireWildcard(_util);

	var _required = __webpack_require__(293);

	var _required2 = _interopRequireDefault(_required);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/* eslint max-len:0 */

	var pattern = {
	  email: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	  url: new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i'),
	  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	};

	var types = {
	  integer: function integer(value) {
	    return types.number(value) && parseInt(value, 10) === value;
	  },
	  "float": function float(value) {
	    return types.number(value) && !types.integer(value);
	  },
	  array: function array(value) {
	    return Array.isArray(value);
	  },
	  regexp: function regexp(value) {
	    if (value instanceof RegExp) {
	      return true;
	    }
	    try {
	      return !!new RegExp(value);
	    } catch (e) {
	      return false;
	    }
	  },
	  date: function date(value) {
	    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
	  },
	  number: function number(value) {
	    if (isNaN(value)) {
	      return false;
	    }
	    return typeof value === 'number';
	  },
	  object: function object(value) {
	    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !types.array(value);
	  },
	  method: function method(value) {
	    return typeof value === 'function';
	  },
	  email: function email(value) {
	    return typeof value === 'string' && !!value.match(pattern.email);
	  },
	  url: function url(value) {
	    return typeof value === 'string' && !!value.match(pattern.url);
	  },
	  hex: function hex(value) {
	    return typeof value === 'string' && !!value.match(pattern.hex);
	  }
	};

	/**
	 *  Rule for validating the type of a value.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function type(rule, value, source, errors, options) {
	  if (rule.required && value === undefined) {
	    (0, _required2["default"])(rule, value, source, errors, options);
	    return;
	  }
	  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
	  var ruleType = rule.type;
	  if (custom.indexOf(ruleType) > -1) {
	    if (!types[ruleType](value)) {
	      errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	    }
	    // straight typeof check
	  } else if (ruleType && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== rule.type) {
	    errors.push(util.format(options.messages.types[ruleType], rule.fullField, rule.type));
	  }
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(289);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating minimum and maximum allowed values.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function range(rule, value, source, errors, options) {
	  var len = typeof rule.len === 'number';
	  var min = typeof rule.min === 'number';
	  var max = typeof rule.max === 'number';
	  var val = value;
	  var key = null;
	  var num = typeof value === 'number';
	  var str = typeof value === 'string';
	  var arr = Array.isArray(value);
	  if (num) {
	    key = 'number';
	  } else if (str) {
	    key = 'string';
	  } else if (arr) {
	    key = 'array';
	  }
	  // if the value is not of a supported type for range validation
	  // the validation rule rule should use the
	  // type property to also test for a particular type
	  if (!key) {
	    return false;
	  }
	  if (str || arr) {
	    val = value.length;
	  }
	  if (len) {
	    if (val !== rule.len) {
	      errors.push(util.format(options.messages[key].len, rule.fullField, rule.len));
	    }
	  } else if (min && !max && val < rule.min) {
	    errors.push(util.format(options.messages[key].min, rule.fullField, rule.min));
	  } else if (max && !min && val > rule.max) {
	    errors.push(util.format(options.messages[key].max, rule.fullField, rule.max));
	  } else if (min && max && (val < rule.min || val > rule.max)) {
	    errors.push(util.format(options.messages[key].range, rule.fullField, rule.min, rule.max));
	  }
	}

	exports["default"] = range;
	module.exports = exports['default'];

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(289);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var ENUM = 'enum';

	/**
	 *  Rule for validating a value exists in an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, source, errors, options) {
	  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
	  if (rule[ENUM].indexOf(value) === -1) {
	    errors.push(util.format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
	  }
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(289);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	/**
	 *  Rule for validating a regular expression pattern.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param source The source object being validated.
	 *  @param errors An array of errors that this rule may add
	 *  validation errors to.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, source, errors, options) {
	  if (rule.pattern instanceof RegExp) {
	    if (!rule.pattern.test(value)) {
	      errors.push(util.format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
	    }
	  }
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a function.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function method(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = method;
	module.exports = exports['default'];

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function number(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = number;
	module.exports = exports['default'];

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _util = __webpack_require__(289);

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a boolean.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function boolean(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = boolean;
	module.exports = exports['default'];

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates the regular expression type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function regexp(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = regexp;
	module.exports = exports['default'];

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is an integer.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function integer(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = integer;
	module.exports = exports['default'];

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a number is a floating point number.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function floatFn(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = floatFn;
	module.exports = exports['default'];

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an array.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function array(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'array') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, 'array');
	    if (!(0, _util.isEmptyValue)(value, 'array')) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      _rule2["default"].range(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = array;
	module.exports = exports['default'];

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates an object.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function object(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value !== undefined) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = object;
	module.exports = exports['default'];

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var ENUM = 'enum';

	/**
	 *  Validates an enumerable list.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function enumerable(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (value) {
	      _rule2["default"][ENUM](rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = enumerable;
	module.exports = exports['default'];

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 *  Validates a regular expression pattern.
	 *
	 *  Performs validation when a rule only contains
	 *  a pattern property but is not declared as a string type.
	 *
	 *  @param rule The validation rule.
	 *  @param value The value of the field on the source object.
	 *  @param callback The callback function.
	 *  @param source The source object being validated.
	 *  @param options The validation options.
	 *  @param options.messages The validation messages.
	 */
	function pattern(rule, value, callback, source, options) {
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, 'string') && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value, 'string')) {
	      _rule2["default"].pattern(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = pattern;
	module.exports = exports['default'];

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function type(rule, value, callback, source, options) {
	  var ruleType = rule.type;
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value, ruleType) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options, ruleType);
	    if (!(0, _util.isEmptyValue)(value, ruleType)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	    }
	  }
	  callback(errors);
	}

	exports["default"] = type;
	module.exports = exports['default'];

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	var _util = __webpack_require__(289);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function date(rule, value, callback, source, options) {
	  // console.log('integer rule called %j', rule);
	  var errors = [];
	  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
	  // console.log('validate on %s value', value);
	  if (validate) {
	    if ((0, _util.isEmptyValue)(value) && !rule.required) {
	      return callback();
	    }
	    _rule2["default"].required(rule, value, source, errors, options);
	    if (!(0, _util.isEmptyValue)(value)) {
	      _rule2["default"].type(rule, value, source, errors, options);
	      if (value) {
	        _rule2["default"].range(rule, value.getTime(), source, errors, options);
	      }
	    }
	  }
	  callback(errors);
	}

	exports["default"] = date;
	module.exports = exports['default'];

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _rule = __webpack_require__(292);

	var _rule2 = _interopRequireDefault(_rule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function required(rule, value, callback, source, options) {
	  var errors = [];
	  var type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  _rule2["default"].required(rule, value, source, errors, options, type);
	  callback(errors);
	}

	exports["default"] = required;
	module.exports = exports['default'];

/***/ },
/* 312 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.newMessages = newMessages;
	function newMessages() {
	  return {
	    "default": 'Validation error on field %s',
	    required: '%s is required',
	    "enum": '%s must be one of %s',
	    whitespace: '%s cannot be empty',
	    date: {
	      format: '%s date %s is invalid for format %s',
	      parse: '%s date could not be parsed, %s is invalid ',
	      invalid: '%s date %s is invalid'
	    },
	    types: {
	      string: '%s is not a %s',
	      method: '%s is not a %s (function)',
	      array: '%s is not an %s',
	      object: '%s is not an %s',
	      number: '%s is not a %s',
	      date: '%s is not a %s',
	      "boolean": '%s is not a %s',
	      integer: '%s is not an %s',
	      "float": '%s is not a %s',
	      regexp: '%s is not a valid %s',
	      email: '%s is not a valid %s',
	      url: '%s is not a valid %s',
	      hex: '%s is not a valid %s'
	    },
	    string: {
	      len: '%s must be exactly %s characters',
	      min: '%s must be at least %s characters',
	      max: '%s cannot be longer than %s characters',
	      range: '%s must be between %s and %s characters'
	    },
	    number: {
	      len: '%s must equal %s',
	      min: '%s cannot be less than %s',
	      max: '%s cannot be greater than %s',
	      range: '%s must be between %s and %s'
	    },
	    array: {
	      len: '%s must be exactly %s in length',
	      min: '%s cannot be less than %s in length',
	      max: '%s cannot be greater than %s in length',
	      range: '%s must be between %s and %s in length'
	    },
	    pattern: {
	      mismatch: '%s value %s does not match pattern %s'
	    },
	    clone: function clone() {
	      var cloned = JSON.parse(JSON.stringify(this));
	      cloned.clone = this.clone;
	      return cloned;
	    }
	  };
	}

	var messages = exports.messages = newMessages();

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.vRow = exports.vCol = undefined;

	var _row = __webpack_require__(314);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(317);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.vCol = _col2.default;
	exports.vRow = _row2.default;

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(315)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/layout/row.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(316)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-341084a6/row.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-row',
	  props: (0, _utils.defaultProps)({
	    gutter: Number,
	    pack: String,
	    display: String,
	    align: String
	  }),
	  ready: function ready() {
	    if (this.gutter) {
	      var half = this.gutter / 2;
	      this.$el.style.marginLeft = -half + 'px';
	      this.$el.style.marginRight = -half + 'px';

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.$children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var $child = _step.value;

	          $child.$el.style.paddingLeft = half + 'px';
	          $child.$el.style.paddingRight = half + 'px';
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  },

	  computed: {
	    classes: function classes() {
	      return [this.display ? 'ant-row-' + this.display : '', this.pack ? 'ant-row-flex-' + this.pack : '', this.align ? 'ant-row-flex-' + this.align : ''];
	    }
	  }

	};

/***/ },
/* 316 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ant-row\" :class=\"classes\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(318)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/layout/col.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(319)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-68417b5a/col.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 318 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-col',
	  props: {
	    span: [String, Number],
	    offset: [String, Number],
	    push: [String, Number],
	    pull: [String, Number],
	    order: [String, Number]
	  },
	  computed: {
	    classes: function classes() {
	      return [this.span ? 'ant-col-' + this.span : '', this.offset ? 'ant-col-offset-' + this.offset : '', this.push ? 'ant-col-push-' + this.push : '', this.pull ? 'ant-col-pull-' + this.pull : '', this.order ? 'ant-col-order-' + this.order : ''];
	    }
	  }
	};

/***/ },
/* 319 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 320 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"itemCls\">\n    <v-col :class=\"labelCls\" v-if=\"label\" :span=\"labelCol.span\" :offset=\"labelCol.offset\">\n        <label for=\"userName\" :class=\"[{'ant-form-item-required':required}]\" v-text=\"label\"></label>\n    </v-col>\n    <v-col :span=\"wrapperCol.span\" :offset=\"wrapperCol.offset\">\n        <div :class=\"controlCls\">\n\t\t\t<slot></slot>\n            <div v-if=\"help\" v-text=\"help\" class=\"{{this.prefixCls}}-explain\"></div>\n\t\t</div>\n    </v-col>\n</div>\n";

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _input = __webpack_require__(322);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _input2.default;

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(323)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/input/input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(324)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-607bbd86/input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-input',
	  data: function data() {
	    return {
	      prefix: 'ant-input',
	      hasslot: false,
	      hasbefore: false,
	      hasafter: false
	    };
	  },
	  props: (0, _utils.defaultProps)({
	    debounce: 0,
	    type: 'text',
	    id: (0, _utils.oneOfType)([Number, String]),
	    value: null,
	    placeholder: '',
	    defaultValue: null,
	    size: 'default',
	    disabled: false,
	    onPressEnter: function onPressEnter() {},

	    autosize: (0, _utils.oneOfType)([Boolean, Object], false)
	  }),
	  computed: {
	    wrapClasses: function wrapClasses() {
	      return [this.prefix + '-wrapper', (0, _defineProperty3.default)({}, this.prefix + '-group', this.hasslot)];
	    },
	    inpClasses: function inpClasses() {
	      var size = { small: 'sm', large: 'lg' }[this.size];

	      return [this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-' + size, size)];
	    }
	  },
	  ready: function ready() {
	    if (this._slotContents) {

	      this.hasslot = true;

	      if (this._slotContents.before) {

	        this.hasbefore = true;
	      }

	      if (this._slotContents.after) {

	        this.hasafter = true;
	      }
	    }
	  },

	  methods: {
	    blur: function blur() {
	      this.$emit('blur', this.value);
	    }
	  }
	};

/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\">\n  <span v-if=\"hasbefore\" class=\"ant-input-group-addon\"><slot name=\"before\"><slot></span>\n  <textarea v-if=\"type ==='textarea'\" type=\"textarea\" :class=\"inpClasses\" :placeholder=\"placeholder\" :disabled=\"disabled\" v-model=\"value\" :debounce=\"debounce\" @blur=\"blur\"></textarea>\n  <input v-else :type=\"type\" :class=\"inpClasses\" :placeholder=\"placeholder\" :disabled=\"disabled\" v-model=\"value\" autocomplete=\"off\" @blur=\"blur\" :debounce=\"debounce\"/>\n  <span v-if=\"hasafter\" class=\"ant-input-group-addon\"><slot name=\"after\"></slot></span>\n</span>\n";

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inputNumber = __webpack_require__(326);

	var _inputNumber2 = _interopRequireDefault(_inputNumber);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _inputNumber2.default;

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(327)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/inputNumber/inputNumber.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(328)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f60cab62/inputNumber.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValueNumber(value) {
	  return !isNaN(Number(value));
	}

	function calNum(num1, num2, symb) {
	  var sq1, sq2, m;
	  try {
	    sq1 = num1.toString().split(".")[1].length;
	  } catch (e) {
	    sq1 = 0;
	  }
	  try {
	    sq2 = num2.toString().split(".")[1].length;
	  } catch (e) {
	    sq2 = 0;
	  }
	  m = Math.pow(10, Math.max(sq1, sq2));
	  if (symb === '+') {
	    return (num1 * m + num2 * m) / m;
	  } else if (symb === '-') {
	    return (num1 * m - num2 * m) / m;
	  }
	}

	function preventDefault(e) {
	  e.preventDefault();
	}

	exports.default = {
	  name: 'v-input-number',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-input-number',
	    max: (0, _utils.oneOfType)([Number, String], Infinity),
	    min: (0, _utils.oneOfType)([Number, String], -Infinity),
	    size: (0, _utils.oneOfType)([Number, String]),
	    value: (0, _utils.oneOfType)([Number, String]),
	    step: (0, _utils.oneOfType)([Number, String], 1),
	    defaultValue: (0, _utils.oneOfType)([Number, String], ''),
	    autoFocus: false,
	    onChange: function onChange() {},
	    readOnly: false,
	    disabled: false
	  }),

	  data: function data() {
	    return {
	      sizeClass: '',
	      noop: function noop() {},
	      preventDefault: preventDefault,
	      upDisabledClass: '',
	      downDisabledClass: ''
	    };
	  },


	  computed: {
	    sizeClass: function sizeClass() {
	      if (this.size === 'large') {
	        return 'ant-input-number-lg';
	      } else if (this.size === 'small') {
	        return 'ant-input-number-sm';
	      }
	    },
	    wrapClasses: function wrapClasses() {
	      return [this.prefixCls, (0, _defineProperty3.default)({}, this.sizeClass, !!this.sizeClass), (0, _defineProperty3.default)({}, this.prefixCls + "-disabled", this.disabled), (0, _defineProperty3.default)({}, this.prefixCls + "-focused", this.focused)];
	    }
	  },

	  watch: {
	    value: function value(val) {
	      if (isValueNumber(val)) {
	        val = Number(val);
	        if (val >= this.max) {
	          this.upDisabledClass = this.prefixCls + "-handler-up-disabled";
	        } else if (val <= this.min) {
	          this.downDisabledClass = this.prefixCls + "-handler-down-disabled";
	        } else {
	          this.upDisabledClass = '';
	          this.downDisabledClass = '';
	        }
	      } else {
	        this.upDisabledClass = this.prefixCls + "-handler-up-disabled";
	        this.downDisabledClass = this.prefixCls + "-handler-down-disabled";
	      }
	    }
	  },
	  compiled: function compiled() {
	    if (!this.defaultValu) {
	      this.defaultValue = this.min;
	    }
	    if (this.value == null) {
	      this.value = this.defaultValue;
	    }
	    this.focused = this.autoFocus;
	  },


	  methods: {
	    _setValue: function _setValue(value) {
	      this.value = value;
	      this.onChange(value);
	    },
	    _onChange: function _onChange(event) {
	      var val = event.target.value.trim();

	      if (!val) {
	        this._setValue(val);
	      } else if (isValueNumber(val)) {
	        val = Number(val);
	        if (val < this.min) return;
	        if (val > this.max) return;
	        this._setValue(val);
	      } else if (val === '-') {
	        if (this.min >= 0) return;
	        this.value = val;
	      }
	    },
	    _onKeyDown: function _onKeyDown(e) {
	      if (e.keyCode === 38) {
	        this._up(e);
	      } else if (e.keyCode === 40) {
	        this._down(e);
	      }
	    },
	    _onFocus: function _onFocus() {
	      this.focused = true;
	    },
	    _onBlur: function _onBlur() {
	      this.focused = false;
	      if (this.value === '-') {
	        this._setValue('');
	      }
	    },
	    _step: function _step(type, e) {
	      var _this = this;

	      if (this.disabled) return;

	      var value = Number(this.value);
	      var stepNum = Number(this.step);

	      if (isNaN(value)) return;
	      if (type == 'down') value = calNum(value, stepNum, '-');else if (type === 'up') value = calNum(value, stepNum, '+');

	      if (value > this.max || value < this.min) return;

	      this._setValue(value, function () {
	        _this.$els.input.focus();
	      });
	    },
	    _down: function _down(e) {
	      if (this.downDisabledClass) {
	        return;
	      }
	      this._step('down', e);
	    },
	    _up: function _up(e) {
	      if (this.upDisabledClass) {
	        return;
	      }
	      this._step('up', e);
	    }
	  }
	};

/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\" style=\"width: 90px\">\n  <div :class=\"prefixCls + '-handler-wrap'\">\n    <a unselectable=\"unselectable\"\n       ref=\"up\"\n       @click=\"_up\"\n       @mouse.down=\"preventDefault\"\n       :class=\"prefixCls + '-handler ' + prefixCls + '-handler-up ' + upDisabledClass\">\n        <span unselectable=\"unselectable\"\n            :class=\"prefixCls + '-handler-up-inner'\"\n            @click=\"preventDefault\"></span>\n    </a>\n    <a unselectable=\"unselectable\"\n       ref=\"down\"\n       @mouse.down=\"preventDefault\"\n       @click=\"_down\"\n       :class=\"prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass\">\n      <span unselectable=\"unselectable\"\n            :class=\"prefixCls + '-handler-down-inner'\"\n            @click=\"preventDefault\"></span>\n    </a>\n  </div>\n  <div :class=\"prefixCls + '-input-wrap'\">\n    <input v-el:input\n           ref=\"input\"\n           autoComplete=\"off\"\n           @focus=\"_onFocus\"\n           @blur=\"_onBlur\"\n           @keydown.stop=\"_onKeyDown\"\n           @change=\"_onChange\"\n           :class=\"prefixCls + '-input'\"\n           :autoFocus=\"autoFocus\"\n           :readOnly=\"readOnly\"\n           :disabled=\"disabled\"\n           :max=\"max\"\n           :min=\"min\"\n           :name=\"name\"\n           :value=\"value\"/>\n  </div>\n</div>\n";

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _menu = __webpack_require__(330);

	var _menu2 = _interopRequireDefault(_menu);

	var _subMenu = __webpack_require__(333);

	var _subMenu2 = _interopRequireDefault(_subMenu);

	var _menuItemGroup = __webpack_require__(336);

	var _menuItemGroup2 = _interopRequireDefault(_menuItemGroup);

	var _menuItem = __webpack_require__(339);

	var _menuItem2 = _interopRequireDefault(_menuItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_menu2.default.Item = _menuItem2.default;
	_menu2.default.ItemGroup = _menuItemGroup2.default;
	_menu2.default.subMenu = _subMenu2.default;

	exports.default = _menu2.default;

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(331)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/menu/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(332)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5a390307/menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 331 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-menu',
	  props: {
	    title: String,
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    theme: {
	      type: String,
	      default: 'light'
	    },
	    expand: {
	      type: Boolean,
	      default: false
	    }
	  },
	  ready: function ready() {
	    var _this = this;

	    this.$on('nodeSelected', function (ori) {
	      _this.$broadcast('cancelSelected', ori);
	    });
	  },

	  watch: {
	    mode: function mode() {
	      this.expand = false;
	      this.$broadcast('modeChange', this.mode);
	    },
	    expand: function expand() {
	      this.$broadcast('expandChange', this.expand);
	    }
	  }
	};

/***/ },
/* 332 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"ant-menu ant-menu-{{mode}} ant-menu-{{theme}} ant-menu-root\" :title=\"title\">\n  <slot></slot>\n</ul>\n";

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(334)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/menu/subMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(335)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-33cf1647/subMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 334 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-sub-menu',
	  props: {
	    title: String,
	    icon: String,
	    expand: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      level: 0,
	      mode: 'vertical',
	      timer: null
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    this.initProp();
	    this.$on('modeChange', function (val) {
	      _this.mode = val;
	      _this.$broadcast('modeChange', val);
	    });
	    this.$on('cancelSelected', function (ori) {
	      _this.$broadcast('cancelSelected', ori);
	    });
	    this.$on('expandChange', function (val) {
	      _this.expand = val;
	    });
	  },

	  computed: {
	    subMenuCls: function subMenuCls() {
	      return ['ant-menu-submenu', 'ant-menu-submenu-' + this.mode, { 'ant-menu-submenu-open': this.expand }];
	    },
	    titleCls: function titleCls() {
	      return ['ant-menu-submenu-title', { 'ant-menu-submenu-disabled': this.disabled }];
	    },
	    itemCls: function itemCls() {
	      return ['ant-menu', 'ant-menu-' + this.mode, 'ant-menu-sub'];
	    },
	    titleSty: function titleSty() {
	      return this.mode == 'inline' ? {
	        paddingLeft: 24 * this.level + 'px'
	      } : {};
	    }
	  },
	  methods: {
	    initProp: function initProp() {
	      var index = 1;
	      var parent = this.$parent;

	      while (parent.$options.name !== 'v-menu') {
	        if (parent.$options.name == 'v-sub-menu') index++;
	        parent = parent.$parent;
	      }
	      this.expand = parent.expand;
	      this.mode = parent.mode;
	      this.level = index;
	    },
	    clickTriggerOpen: function clickTriggerOpen() {
	      if (!this.disabled && this.mode == 'inline') {
	        this.setOpen(!this.expand);
	      }
	    },
	    mouseTriggerOpen: function mouseTriggerOpen(status) {
	      var _this2 = this;

	      if (!this.disabled && this.mode != 'inline') {
	        if (this.timer) clearTimeout(this.timer);
	        this.timer = setTimeout(function () {
	          return _this2.setOpen(status);
	        }, 300);
	      }
	    },
	    setOpen: function setOpen(status) {
	      this.expand = status;
	    }
	  }
	};

/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = "\n\n<li :class=\"subMenuCls\" @mouseover=\"mouseTriggerOpen(true)\" @mouseout=\"mouseTriggerOpen(false)\">\n  <div :class=\"titleCls\" @click=\"clickTriggerOpen\" :style=\"titleSty\" :title=\"title\">\n    <span>\n      <i v-if=\"icon\" class=\"anticon anticon-{{icon}}\"></i>\n      <span>{{title}}</span>\n    </span>\n  </div>\n  <ul :class=\"itemCls\" :transition=\"mode=='inline'?'slide-up':'fade'\" v-show=\"expand\">\n    <slot></slot>\n  </ul>\n</li>\n\n";

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(337)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/menu/menuItemGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(338)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2ba7a815/menuItemGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 337 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: 'v-menu-item-group',
	    props: {
	        title: String
	    },
	    ready: function ready() {
	        var _this = this;

	        this.$on('modeChange', function (val) {
	            _this.$broadcast('modeChange', val);
	        });
	        this.$on('cancelSelected', function (ori) {
	            _this.$broadcast('cancelSelected', ori);
	        });
	    }
	};

/***/ },
/* 338 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"ant-menu-item-group\">\n    <div class=\"ant-menu-item-group-title\">\n        {{title}}\n    </div>\n    <ul class=\"ant-menu-item-group-list\">\n        <slot></slot>\n    </ul>\n</li>\n";

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(340)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/menu/menuItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(341)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-308f513a/menuItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 340 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-menu-item',
	  data: function data() {
	    return {
	      level: 0,
	      mode: 'vertical'
	    };
	  },
	  props: {
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    selected: {
	      type: Boolean,
	      default: false
	    },
	    icon: String,
	    link: String
	  },
	  ready: function ready() {
	    var _this = this;

	    this.setLevelAndMode();
	    this.$on('modeChange', function (val) {
	      _this.mode = val;
	    });
	    this.$on('cancelSelected', function (ori) {
	      if (_this === ori) return;
	      _this.selected = false;
	    });
	  },

	  computed: {
	    itemCls: function itemCls() {
	      return ['ant-menu-item', {
	        'ant-menu-item-disabled': this.disabled,
	        'ant-menu-item-selected': this.selected
	      }];
	    },
	    itemSty: function itemSty() {
	      return this.mode == 'inline' ? {
	        paddingLeft: 24 * this.level + 'px'
	      } : {};
	    }
	  },
	  methods: {
	    setLevelAndMode: function setLevelAndMode() {
	      var index = 1;
	      var parent = this.$parent;

	      while (parent.$options.name !== 'v-menu') {
	        if (parent.$options.name == 'v-sub-menu') index++;
	        parent = parent.$parent;
	      }
	      this.mode = parent.mode;
	      this.level = index;
	    },
	    select: function select() {
	      if (this.selected) return;
	      this.selected = true;
	      this.$dispatch('nodeSelected', this);
	    }
	  }
	};

/***/ },
/* 341 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"itemCls\" :style=\"itemSty\" @click=\"select\">\n  <i v-if=\"icon\" class=\"anticon anticon-{{icon}}\"></i>\n  <a :href=\"'#!'+link\" style=\"display:inline\" v-if=\"link\"><slot></slot></a>\n  <slot v-else></slot>\n</li>\n";

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(343)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/menu/navMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(344)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6a1923ac/navMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-nav-menu',
	  data: function data() {
	    return {
	      prefix: 'ant-menu',
	      timer: []
	    };
	  },
	  props: {
	    type: {
	      type: String,
	      default: 'root'
	    },
	    isItemGroup: {
	      type: Boolean,
	      default: false
	    },
	    data: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    mode: {
	      type: String,
	      default: 'vertical'
	    },
	    theme: {
	      type: String,
	      default: 'light'
	    },
	    aTag: {
	      type: Boolean,
	      default: false
	    },
	    level: {
	      type: Number,
	      default: 1
	    }
	  },
	  ready: function ready() {
	    var _this = this;

	    this.$on('nodeSelected', function (ori) {
	      if (_this.type !== 'root') return true;
	      if (_this !== ori) {
	        _this.setAllSelected(false);
	      }
	      _this.$broadcast('cancelSelected', ori);
	    });
	    this.$on('cancelSelected', function (ori) {
	      _this.$broadcast('cancelSelected', ori);
	      if (_this !== ori) {
	        _this.setAllSelected(false);
	      }
	    });
	  },

	  computed: {
	    menuCls: function menuCls() {
	      if (this.type == 'root' || this.type == 'sub') {
	        return [this.prefix, this.prefix + '-' + this.type, this.prefix + '-' + this.mode, (0, _defineProperty3.default)({}, this.prefix + '-' + this.theme, this.type == 'root')];
	      } else if (this.type == 'item-group-list') {
	        return this.prefix + '-item-group-list';
	      }
	    },
	    paddingSty: function paddingSty() {
	      return this.mode == 'inline' ? {
	        paddingLeft: 24 * this.level + 'px'
	      } : {};
	    }
	  },
	  watch: {
	    mode: function mode() {
	      for (var i = 0; i < this.data.length; i++) {
	        this.$set('data[' + i + '].open', false);
	      }
	    }
	  },
	  methods: {
	    setAllSelected: function setAllSelected(status) {
	      for (var i = 0; i < this.data.length; i++) {
	        this.$set('data[' + i + '].selected', status);
	      }
	    },
	    clickTriggerOpen: function clickTriggerOpen(disabled, index) {
	      if (!disabled && this.mode == 'inline') {
	        this.setOpen(index, !this.data[index].open);
	      }
	    },
	    mouseTriggerOpen: function mouseTriggerOpen(disabled, index, status) {
	      var _this2 = this;

	      if (!disabled && this.mode != 'inline') {
	        if (this.timer[index]) clearTimeout(this.timer[index]);
	        this.timer[index] = setTimeout(function () {
	          return _this2.setOpen(index, status);
	        }, 300);
	      }
	    },
	    setOpen: function setOpen(index, status) {
	      this.$set('data[' + index + '].open', status);
	    },
	    select: function select(index) {
	      for (var i = 0; i < this.data.length; i++) {
	        if (i == index) {
	          this.$set('data[' + i + '].selected', true);
	        } else {
	          this.$set('data[' + i + '].selected', false);
	        }
	      }
	      this.$dispatch('nodeSelected', this);
	    }
	  }
	};

/***/ },
/* 344 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"menuCls\">\n  <template v-if=\"isItemGroup\">\n    <li v-for=\"item in data\" class=\"{{prefix}}-item-group\">\n      <div class=\"{{prefix}}-item-group-title\">\n          {{item.groupName}}\n      </div>\n      <v-nav-menu :data=\"item.list\" type=\"item-group-list\" :mode=\"mode\" :a-tag=\"aTag\" :level=\"level\"></v-nav-menu>\n    </li>\n  </template>\n  <template v-else>\n    <template v-for=\"item in data\">\n      <li v-if=\"!item.children && !item.groups\" :class=\"[prefix+'-item',{[prefix+'-item-disabled']: item.disabled,[prefix+'-item-selected']: item.selected}]\" :style=\"paddingSty\" v-link=\"item.link\" @click=\"select($index)\">\n        <i v-if=\"item.icon\" class=\"anticon anticon-{{item.icon}}\"></i>\n        <a v-if=\"aTag\" :href=\"'#!'+item.link\" style=\"display:inline\">{{item.name}}</a>\n        <template v-else>{{item.name}}</template>\n      </li>\n      <li v-else :class=\"[prefix+'-submenu',prefix+'-submenu-'+mode,{[prefix+'-submenu-open']: item.open}]\" @mouseover=\"mouseTriggerOpen(item.disabled,$index,true)\" @mouseout=\"mouseTriggerOpen(item.disabled,$index,false)\">\n        <div :class=\"[prefix+'-submenu-title',{[prefix+'-submenu-disabled']: item.disabled}]\" :style=\"paddingSty\" :title=\"item.name\" @click=\"clickTriggerOpen(item.disabled,$index)\">\n          <span>\n            <i v-if=\"item.icon\" class=\"anticon anticon-{{item.icon}}\"></i>\n            <span>{{item.name}}</span>\n          </span>\n        </div>\n        <v-nav-menu v-if=\"item.children\" :data=\"item.children\" type=\"sub\" :mode=\"mode\" :a-tag=\"aTag\" :level=\"level+1\" :transition=\"mode=='inline'?'slide-up':'fade'\" v-show=\"item.open\"></v-nav-menu>\n        <v-nav-menu v-else :is-item-group=\"true\" :data=\"item.groups\" type=\"sub\" :mode=\"mode\" :a-tag=\"aTag\" :level=\"level+1\" :transition=\"mode=='inline'?'slide-up':'fade'\" v-show=\"item.open\"></v-nav-menu>\n      </li>\n    </template>\n  </template>\n</ul>\n\n";

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _modal = __webpack_require__(346);

	var _modal2 = _interopRequireDefault(_modal);

	var _confirm2 = __webpack_require__(352);

	var _confirm3 = _interopRequireDefault(_confirm2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_modal2.default.install = function (Vue) {
	  Vue.component(_modal2.default.name, _modal2.default);
	  Vue.$modal = Vue.prototype.$modal = {
	    confirm: function confirm(props) {
	      var config = _extends({
	        type: 'confirm',
	        okCancel: true
	      }, props);
	      return _confirm3.default.call(Vue, config);
	    },
	    info: function info(props) {
	      var config = _extends({
	        type: 'info',
	        iconType: 'info-circle',
	        okCancel: false
	      }, props);
	      return _confirm3.default.call(Vue, config);
	    },
	    success: function success(props) {
	      var config = _extends({
	        type: 'success',
	        iconType: 'check-circle',
	        okCancel: false
	      }, props);
	      return _confirm3.default.call(Vue, config);
	    },
	    error: function error(props) {
	      var config = _extends({
	        type: 'error',
	        iconType: 'exclamation-circle',
	        okCancel: false
	      }, props);
	      return _confirm3.default.call(Vue, config);
	    }
	  };
	};

	exports.default = _modal2.default;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(347)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/modal/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(351)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-750d847a/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(100);

	var _dialog = __webpack_require__(348);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _button = __webpack_require__(122);

	var _button2 = _interopRequireDefault(_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mousePosition = void 0;
	var mousePositionEventBinded = void 0;

	document.addEventListener('click', function (e) {
	  mousePosition = {
	    x: e.pageX,
	    y: e.pageY
	  };
	  setTimeout(function () {
	    return mousePosition = null;
	  }, 20);
	}, true);

	exports.default = {
	  name: 'v-modal',
	  props: (0, _utils.defaultProps)({
	    visible: false,
	    confirmLoading: false,
	    title: String,
	    closable: true,
	    onOk: function onOk() {},
	    onCancel: function onCancel() {},
	    modalWidth: 520,
	    okText: '确 定',
	    cancelText: '取 消',
	    maskClosable: true,
	    prefixCls: 'ant-modal',
	    modalStyle: {},
	    hasFooter: true,
	    wrapClassName: String
	  }),

	  data: function data() {
	    return {
	      mousePosition: {}
	    };
	  },


	  watch: {
	    visible: function visible() {
	      this.mousePosition = mousePosition;
	    }
	  },

	  methods: {
	    _handleCancel: function _handleCancel() {
	      this.onCancel();
	    },
	    _handleOk: function _handleOk() {
	      this.onOk();
	    }
	  },

	  components: { Dialog: _dialog2.default, vButton: _button2.default }
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(349)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/modal/dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(350)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-203e06bc/dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(100);

	exports.default = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'vc-dialog',
	    modalStyle: {},
	    wrapClassName: String,
	    onClose: function onClose() {},
	    modalWidth: Number,
	    mask: true,
	    title: String,
	    closable: true,
	    maskClosable: true,
	    hasFooter: true,
	    visible: Boolean,
	    zIndex: Number,
	    mousePosition: Object
	  }),
	  watch: {
	    mousePosition: function mousePosition(value) {
	      if (this.visible && value) {
	        this._startAnimation(this.$el.querySelector('.' + this.prefixCls + '-wrap'));
	        this._setScrollbar();
	      }
	    }
	  },
	  transitions: {
	    zoom: {
	      afterLeave: function afterLeave(el) {
	        this._resetScrollbar();
	      }
	    }
	  },
	  methods: {
	    _onMaskClick: function _onMaskClick() {
	      if (this.maskClosable) {
	        this._close();
	      }
	      this.$els.dialog.focus();
	    },
	    _onKeyDown: function _onKeyDown(e) {
	      if (this.closable) {
	        if (e.keyCode === _utils.KeyCode.ESC) {
	          this._close();
	        }
	      }
	      if (this.visible) {
	        if (e.keyCode === _utils.KeyCode.TAB) {
	          var activeElement = document.activeElement;
	          var dialogRoot = this.$els.dialog;
	          var sentinel = this.$els.sentinel;
	          if (e.shiftKey) {
	            if (activeElement === dialogRoot) {
	              sentinel.focus();
	            }
	          } else if (activeElement === sentinel) {
	            dialogRoot.focus();
	          }
	        }
	      }
	    },
	    _startAnimation: function _startAnimation(dialogNode) {
	      var mousePosition = this.mousePosition;
	      if (this.visible) {
	        if (mousePosition) {
	          var scroll = getScroll(this.$el);
	          setTransformOrigin(dialogNode, mousePosition.x - scroll.x + 'px ' + (mousePosition.y - scroll.y) + 'px');
	        } else {
	          setTransformOrigin(dialogNode, '');
	        }
	      }
	    },
	    _setScrollbar: function _setScrollbar() {
	      document.body.style.paddingRight = getScrollbarWidth() + 'px';
	      document.body.style.overflow = 'hidden';
	    },
	    _resetScrollbar: function _resetScrollbar() {
	      document.body.style.paddingRight = '';
	      document.body.style.overflow = '';
	    },
	    _close: function _close() {
	      this.onClose();
	    }
	  }
	};

	var scrollbarWidth = void 0;
	var bodyIsOverflowing = void 0;
	var scrollbarMeasure = {
	  position: 'absolute',
	  top: '-9999px',
	  width: '50px',
	  height: '50px',
	  overflow: 'scroll'
	};

	function getScroll(el) {
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  var ret = {
	    x: w.pageXOffset,
	    y: w.pageYOffset
	  };
	  return ret;
	}

	function getScrollbarWidth() {
	  if (!hasScrollbar()) return;

	  if (scrollbarWidth !== undefined) {
	    return scrollbarWidth;
	  }
	  var scrollDiv = document.createElement('div');
	  for (var scrollProp in scrollbarMeasure) {
	    if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
	      scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
	    }
	  }
	  document.body.appendChild(scrollDiv);
	  var _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  scrollbarWidth = _scrollbarWidth;
	  return scrollbarWidth;
	}

	function hasScrollbar() {
	  return document.body.clientHeight < document.body.scrollHeight;
	}

	function setTransformOrigin(node, value) {
	  var style = node.style;
	  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
	    style[prefix + 'TransformOrigin'] = value;
	  });
	  style['transformOrigin'] = value;
	}

/***/ },
/* 350 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div\n  v-if=\"visible\"\n  :class=\"prefixCls + '-mask'\"\n  transition=\"fade\"\n  ></div>\n  <div \n    :class=\"[prefixCls + '-wrap', wrapClassName]\" \n    v-if=\"visible\"\n    tabindex=\"-1\"\n    @click.stop=\"_onMaskClick\"\n    transition=\"zoom\">\n      <div\n        v-el:dialog\n        role=\"dialog\"\n        :style=\"[modalStyle, {width: modalWidth +'px'}]\"\n        :class=\"prefixCls\"\n        @keydown=\"_onKeyDown\"\n        @click.stop>\n        <div :class=\"prefixCls + '-content'\">\n          <a v-if=\"closable\" tabIndex=\"0\" @click=\"_close\" :class=\"prefixCls + '-close'\">\n            <span :class=\"prefixCls + '-close-x'\"></span>\n          </a>\n          <div v-if=\"title\" :class=\"prefixCls + '-header'\">\n            <div :class=\"prefixCls + '-title'\">{{title}}</div>\n          </div>\n          <div :class=\"prefixCls + '-body'\">\n            <slot></slot>\n          </div>\n          <div v-show=\"hasFooter\" :class=\"prefixCls + '-footer'\">\n            <slot name=\"footer\"></slot>\n          </div>\n        </div>\n        <div tabIndex=\"0\" v-el:sentinel :style=\"{width: 0, height: 0, overflow: 'hidden'}\">\n          sentinel\n        </div>\n      </div>\n  </div>\n</div>\n";

/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = "\n<dialog\n  :visible=\"visible\"\n  :title=\"title\"\n  :closable=\"closable\"\n  :mask-closable=\"maskClosable\"\n  :on-close=\"_handleCancel\"\n  :modal-width=\"modalWidth\"\n  :prefix-cls=\"prefixCls\"\n  :modal-style=\"modalStyle\"\n  :has-footer=\"hasFooter\"\n  :wrap-class-name=\"wrapClassName\"\n  :mouse-position=\"mousePosition\">\n  <slot></slot>\n  <div slot=\"footer\">\n    <slot name=\"footer\">\n        <v-button key=\"cancel\" type=\"ghost\" size=\"large\"\n        @click=\"_handleCancel\">\n        {{cancelText}}\n      </v-button>\n      <v-button key=\"confirm\" type=\"primary\" size=\"large\" :loading=\"confirmLoading\"\n        @click=\"_handleOk\">\n        {{okText}}\n      </v-button>\n    </slot>\n  </div>\n</dialog>\n";

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = function () {
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  var runtimeLocale = (0, _locale.getConfirmLocale)();
	  var props = _extends({
	    iconType: 'question-circle',
	    width: 416,
	    visible: false
	  }, config);

	  props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
	  props.cancelText = props.cancelText || runtimeLocale.cancelText;

	  if (!('okCancel' in props)) {
	    props.okCancel = true;
	  }

	  var instance = void 0;
	  function _close() {
	    instance.visible = false;
	    setTimeout(function () {
	      instance.$destroy(true);
	    }, 350);
	  }

	  var _Dialog = this.extend({
	    template: '\n      <div>\n        <dialog\n          title=""\n          :wrap-class-name="wrapClasses"\n          :visible="visible"\n          :closable="false"\n          :has-footer="false"\n          :modal-width="width">\n          <div style="zoom: 1; overflow: hidden">\n            <div class="ant-confirm-body">\n              <v-icon :type="iconType"></v-icon>\n              <span class="ant-confirm-title">{{title}}</span>\n              <div class="ant-confirm-content">{{content}}</div>\n            </div>\n            <span> </span>\n            <div class="ant-confirm-btns" v-if="!okCancel">\n              <v-button :type="\'primary\'" :size="\'large\'" @click="_onOk">{{ okText }}</v-button>\n            </div>\n            <div class="ant-confirm-btns" v-else>\n              <v-button :type="\'ghost\'" :size="\'large\'" @click="_onCancel">{{ cancelText }}</v-button>\n              <v-button :type="\'primary\'" :size="\'large\'" @click="_onOk">{{ okText }}</v-button>\n            </div>\n          </div>\n        </dialog>\n      </div>\n    ',

	    components: { Dialog: _modal2.default, vIcon: _iconfont2.default, vButton: _button2.default }
	  });

	  var div = document.createElement('div');
	  document.body.appendChild(div);

	  new _Dialog({
	    el: div,
	    data: props,
	    methods: {
	      _onOk: function _onOk() {
	        var okFn = this.onOk;

	        if (okFn) {
	          var ret = okFn();
	          if (ret && ret.then) {
	            ret.then(_close);
	          } else {
	            _close();
	          }
	        } else {
	          _close();
	        }
	      },
	      _onCancel: function _onCancel() {
	        var cancelFn = this.onCancel;

	        if (cancelFn) {
	          var ret = cancelFn();
	          if (ret && ret.then) {
	            ret.then(_close);
	          } else {
	            _close();
	          }
	        } else {
	          _close();
	        }
	      }
	    },
	    compiled: function compiled() {
	      instance = this;
	      this.visible = true;
	    },

	    computed: {
	      wrapClasses: function wrapClasses() {
	        return 'ant-confirm ant-confirm-' + this.type;
	      }
	    }
	  });

	  return {
	    destroy: _close
	  };
	};

	var _modal = __webpack_require__(346);

	var _modal2 = _interopRequireDefault(_modal);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	var _button = __webpack_require__(122);

	var _button2 = _interopRequireDefault(_button);

	var _locale = __webpack_require__(353);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 353 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.changeConfirmLocale = changeConfirmLocale;
	exports.getConfirmLocale = getConfirmLocale;
	var defaultLocale = {
	  okText: '确定',
	  cancelText: '取消',
	  justOkText: '知道了'
	};

	var runtimeLocale = Object.assign({}, defaultLocale);

	function changeConfirmLocale(newLocale) {
	  if (newLocale) {
	    runtimeLocale = Object.assign({}, runtimeLocale, newLocale);
	  } else {
	    runtimeLocale = Object.assign({}, defaultLocale);
	  }
	}

	function getConfirmLocale() {
	  return runtimeLocale;
	}

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _multiselect = __webpack_require__(355);

	var _multiselect2 = _interopRequireDefault(_multiselect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _multiselect2.default;

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(356)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/multiselect/multiselect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(366)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2663ecd3/multiselect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(357);

	var _extends3 = _interopRequireDefault(_extends2);

	var _multiselectMixin = __webpack_require__(363);

	var _multiselectMixin2 = _interopRequireDefault(_multiselectMixin);

	var _pointerMixin = __webpack_require__(365);

	var _pointerMixin2 = _interopRequireDefault(_pointerMixin);

	var _func = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-multiselect',
	  mixins: [_multiselectMixin2.default, _pointerMixin2.default],
	  data: function data() {
	    return {
	      style: {},
	      container: null
	    };
	  },
	  props: {
	    popupContainer: {
	      type: Function,
	      default: function _default() {
	        return document.body;
	      }
	    },
	    size: String,
	    position: {
	      type: String,
	      default: 'absolute'
	    },

	    optionPartial: {
	      type: String,
	      default: ''
	    },

	    selectLabel: {
	      type: String,
	      default: '回车选择'
	    },

	    selectedLabel: {
	      type: String,
	      default: '已选择'
	    },

	    deselectLabel: {
	      type: String,
	      default: '回车删除一个标签'
	    },

	    showLabels: {
	      type: Boolean,
	      default: true
	    },

	    limit: {
	      type: Number,
	      default: 99999
	    },

	    limitText: {
	      type: Function,
	      default: function _default(count) {
	        return 'and ' + count + ' more';
	      }
	    },

	    loading: {
	      type: Boolean,
	      default: false
	    },

	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    visibleValue: function visibleValue() {
	      return this.multiple ? this.value.slice(0, this.limit) : [];
	    },
	    listSty: function listSty() {
	      return (0, _extends3.default)({
	        maxHeight: this.maxHeight + 'px'
	      }, this.style);
	    }
	  },
	  ready: function ready() {
	    var _this = this;

	    this.container = this.popupContainer();

	    if (!this.showLabels) {
	      this.deselectLabel = this.selectedLabel = this.selectLabel = '';
	    }
	    this.$els.list.style.position = this.position;
	    this.container.appendChild(this.$els.list);
	    this.$nextTick(function () {
	      _this.setPosition();
	    });

	    window.addEventListener('resize', function () {
	      clearTimeout(_this.resizeTimer);
	      _this.resizeTimer = setTimeout(function () {
	        _this.setPosition();
	      }, 200);
	    });
	  },

	  methods: {
	    setPosition: function setPosition() {
	      if (!this.$el) {
	        return;
	      }
	      var p = (0, _func.getOffset)(this.$el, this.container);

	      this.$set('style', {
	        top: p.bottom + 'px',
	        left: p.left + 'px',
	        width: p.right - p.left + 'px'
	      });
	    }
	  }
	};

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(358);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(359), __esModule: true };

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(360);
	module.exports = __webpack_require__(137).Object.assign;

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(135);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(361)});

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(188)
	  , gOPS     = __webpack_require__(362)
	  , pIE      = __webpack_require__(248)
	  , toObject = __webpack_require__(202)
	  , IObject  = __webpack_require__(178)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(146)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 362 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _utils = __webpack_require__(364);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  data: function data() {
	    return {
	      search: '',
	      isOpen: false,
	      value: this.selected ? (0, _utils2.default)(this.selected) : this.multiple ? [] : null
	    };
	  },

	  props: {
	    localSearch: {
	      type: Boolean,
	      default: true
	    },

	    options: {
	      type: Array,
	      required: true
	    },

	    multiple: {
	      type: Boolean,
	      default: false
	    },

	    selected: {},

	    key: {
	      type: String,
	      default: false
	    },

	    label: {
	      type: String,
	      default: false
	    },

	    searchable: {
	      type: Boolean,
	      default: true
	    },

	    clearOnSelect: {
	      type: Boolean,
	      default: true
	    },

	    hideSelected: {
	      type: Boolean,
	      default: false
	    },

	    placeholder: {
	      type: String,
	      default: '请选择'
	    },

	    maxHeight: {
	      type: Number,
	      default: 300
	    },

	    allowEmpty: {
	      type: Boolean,
	      default: true
	    },

	    resetAfter: {
	      type: Boolean,
	      default: false
	    },

	    closeOnSelect: {
	      type: Boolean,
	      default: true
	    },

	    customLabel: {
	      type: Function,
	      default: function _default(option, label) {
	        if (option && option.isTag) return option.label;
	        return label ? option[label] : option;
	      }
	    },

	    taggable: {
	      type: Boolean,
	      default: false
	    },

	    tagPlaceholder: {
	      type: String,
	      default: '回车创建一个标签'
	    },

	    max: {
	      type: Number,
	      default: 0
	    },

	    id: {
	      default: null
	    },

	    optionsLimit: {
	      type: Number,
	      default: 1000
	    }
	  },
	  created: function created() {
	    if (this.searchable) this.adjustSearch();
	  },

	  computed: {
	    filteredOptions: function filteredOptions() {
	      var search = this.search || '';
	      var options = this.hideSelected ? this.options.filter(this.isNotSelected) : this.options;
	      if (this.localSearch) options = this.$options.filters.filterBy(options, this.search);
	      if (this.taggable && search.length && !this.isExistingOption(search)) {
	        options.unshift({ isTag: true, label: search });
	      }
	      return options.slice(0, this.optionsLimit);
	    },
	    valueKeys: function valueKeys() {
	      var _this = this;

	      if (this.key) {
	        return this.multiple ? this.value.map(function (element) {
	          return element[_this.key];
	        }) : this.value[this.key];
	      } else {
	        return this.value;
	      }
	    },
	    optionKeys: function optionKeys() {
	      var _this2 = this;

	      return this.label ? this.options.map(function (element) {
	        return element[_this2.label];
	      }) : this.options;
	    },
	    currentOptionLabel: function currentOptionLabel() {
	      var label = this.getOptionLabel(this.value);
	      return label ? label.toString() : '';
	    }
	  },
	  watch: {
	    'value': function value() {
	      if (this.resetAfter) {
	        this.$set('value', null);
	        this.$set('search', null);
	        this.$set('selected', null);
	      }
	      this.adjustSearch();
	    },
	    'search': function search() {
	      if (this.search !== this.currentOptionLabel) {
	        this.$emit('search-change', this.search, this.id);
	      }
	    },
	    'selected': function selected(newVal, oldVal) {
	      this.value = (0, _utils2.default)(this.selected);
	    }
	  },
	  methods: {
	    isExistingOption: function isExistingOption(query) {
	      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
	    },
	    isSelected: function isSelected(option) {
	      if (!this.value && this.value !== 0) return false;
	      var opt = this.key ? option[this.key] : option;

	      if (this.multiple) {
	        return this.valueKeys.indexOf(opt) > -1;
	      } else {
	        return this.valueKeys === opt;
	      }
	    },
	    isNotSelected: function isNotSelected(option) {
	      return !this.isSelected(option);
	    },
	    getOptionLabel: function getOptionLabel(option) {
	      if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option !== null) {
	        return this.customLabel(option, this.label);
	      } else {
	        return option ? this.customLabel(option) : '';
	      }
	    },
	    select: function select(option) {
	      if (this.max !== 0 && this.multiple && this.value.length === this.max) return;
	      if (option.isTag) {
	        this.$emit('tag', option.label, this.id);
	        this.search = '';
	      } else {
	        if (this.multiple) {
	          if (this.isSelected(option)) {
	            this.removeElement(option);
	            return;
	          } else {
	            this.value.push(option);
	          }
	        } else {
	          var isSelected = this.isSelected(option);

	          if (isSelected && !this.allowEmpty) return;

	          this.value = isSelected ? null : option;
	        }
	        this.$emit('select', (0, _utils2.default)(option), this.id);
	        this.$emit('update', (0, _utils2.default)(this.value), this.id);

	        if (this.closeOnSelect) this.deactivate();
	      }
	    },
	    removeElement: function removeElement(option) {
	      if (!this.allowEmpty && this.value.length <= 1) return;

	      if (this.multiple && (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object') {
	        var index = this.valueKeys.indexOf(option[this.key]);
	        this.value.splice(index, 1);
	      } else {
	        this.value.$remove(option);
	      }
	      this.$emit('remove', (0, _utils2.default)(option), this.id);
	      this.$emit('update', (0, _utils2.default)(this.value), this.id);
	    },
	    removeLastElement: function removeLastElement() {
	      if (this.search.length === 0 && Array.isArray(this.value)) {
	        this.removeElement(this.value[this.value.length - 1]);
	      }
	    },
	    activate: function activate() {
	      if (this.isOpen) return;

	      this.isOpen = true;

	      if (this.searchable) {
	        this.search = '';
	        this.$els.search.focus();
	      } else {
	        this.$el.focus();
	      }
	      this.$emit('open', this.id);
	    },
	    deactivate: function deactivate() {
	      if (!this.isOpen) return;

	      this.isOpen = false;

	      if (this.searchable) {
	        this.$els.search.blur();
	        this.adjustSearch();
	      } else {
	        this.$el.blur();
	      }
	      this.$emit('close', (0, _utils2.default)(this.value), this.id);
	    },
	    adjustSearch: function adjustSearch() {
	      var _this3 = this;

	      if (!this.searchable || !this.clearOnSelect) return;

	      this.$nextTick(function () {
	        _this3.search = _this3.multiple ? '' : _this3.currentOptionLabel;
	      });
	    },
	    toggle: function toggle() {
	      this.isOpen ? this.deactivate() : this.activate();
	    }
	  }
	};

/***/ },
/* 364 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var deepClone = function deepClone(obj) {
	  if (Array.isArray(obj)) {
	    return obj.map(deepClone);
	  } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
	    var cloned = {};
	    var keys = Object.keys(obj);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      cloned[key] = deepClone(obj[key]);
	    }
	    return cloned;
	  } else {
	    return obj;
	  }
	};

	module.exports = deepClone;

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  data: function data() {
	    return {
	      pointer: 0,
	      visibleElements: this.maxHeight / this.optionHeight
	    };
	  },

	  props: {
	    showPointer: {
	      type: Boolean,
	      default: true
	    },

	    optionHeight: {
	      type: Number,
	      default: 40
	    }
	  },
	  computed: {
	    pointerPosition: function pointerPosition() {
	      return this.pointer * this.optionHeight;
	    }
	  },
	  watch: {
	    'filteredOptions': function filteredOptions() {
	      this.pointerAdjust();
	    }
	  },
	  methods: {
	    addPointerElement: function addPointerElement() {
	      if (this.filteredOptions.length > 0) {
	        this.select(this.filteredOptions[this.pointer]);
	      }
	      this.pointerReset();
	    },
	    pointerForward: function pointerForward() {
	      if (this.pointer < this.filteredOptions.length - 1) {
	        this.pointer++;
	        if (this.$els.list.scrollTop <= this.pointerPosition - this.visibleElements * this.optionHeight) {
	          this.$els.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
	        }
	      }
	    },
	    pointerBackward: function pointerBackward() {
	      if (this.pointer > 0) {
	        this.pointer--;
	        if (this.$els.list.scrollTop >= this.pointerPosition) {
	          this.$els.list.scrollTop = this.pointerPosition;
	        }
	      }
	    },
	    pointerReset: function pointerReset() {
	      if (!this.closeOnSelect) return;

	      this.pointer = 0;
	      if (this.$els.list) {
	        this.$els.list.scrollTop = 0;
	      }
	    },
	    pointerAdjust: function pointerAdjust() {
	      if (this.pointer >= this.filteredOptions.length - 1) {
	        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
	      }
	    },
	    pointerSet: function pointerSet(index) {
	      this.pointer = index;
	    }
	  }
	};

/***/ },
/* 366 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  tabindex=\"0\"\n  :class=\"{ 'multiselect--active': isOpen, 'multiselect--disabled': disabled, ['multiselect-'+size]: size }\"\n  @focus=\"activate()\"\n  @blur=\"searchable ? false : deactivate()\"\n  @keydown.self.down.prevent=\"pointerForward()\"\n  @keydown.self.up.prevent=\"pointerBackward()\"\n  @keydown.enter.stop.prevent.self=\"addPointerElement()\"\n  @keydown.tab.stop=\"addPointerElement()\"\n  @keyup.esc=\"deactivate()\"\n  class=\"multiselect\">\n    <div @mousedown.prevent=\"toggle()\" class=\"multiselect__select\"></div>\n    <div v-el:tags class=\"multiselect__tags\">\n      <span\n        v-for=\"option in visibleValue\"\n        track-by=\"$index\"\n        onmousedown=\"event.preventDefault()\"\n        class=\"multiselect__tag\">\n          <span v-text=\"getOptionLabel(option)\"></span>\n          <i\n            aria-hidden=\"true\"\n            tabindex=\"1\"\n            @keydown.enter.prevent=\"removeElement(option)\"\n            @mousedown.prevent=\"removeElement(option)\"\n            class=\"multiselect__tag-icon\">\n          </i>\n      </span>\n      <template v-if=\"value && value.length > limit\">\n        <strong v-text=\"limitText(value.length - limit)\"></strong>\n      </template>\n      <div v-show=\"loading\" transition=\"multiselect__loading\" class=\"multiselect__spinner\"></div>\n      <input\n        name=\"search\"\n        type=\"text\"\n        autocomplete=\"off\"\n        :placeholder=\"placeholder\"\n        v-el:search\n        v-if=\"searchable\"\n        v-model=\"search\"\n        :disabled=\"disabled\"\n        @focus.prevent=\"activate()\"\n        @blur.prevent=\"deactivate()\"\n        @keyup.esc=\"deactivate()\"\n        @keyup.down=\"pointerForward()\"\n        @keyup.up=\"pointerBackward()\"\n        @keydown.enter.stop.prevent.self=\"addPointerElement()\"\n        @keydown.tab.stop=\"addPointerElement()\"\n        @keydown.delete=\"removeLastElement()\"\n        class=\"multiselect__input\"/>\n        <span\n          v-if=\"!searchable && !multiple\"\n          class=\"multiselect__single\"\n          v-text=\"currentOptionLabel || placeholder\">\n        </span>\n    </div>\n    <ul\n      transition=\"multiselect\"\n      :style=\"listSty\"\n      v-el:list\n      v-show=\"isOpen\"\n      @mousedown.stop.prevent=\"\"\n      class=\"multiselect__content\">\n      <slot name=\"beforeList\"></slot>\n      <li v-if=\"multiple && max !== 0 && max === value.length\">\n        <span class=\"multiselect__option\">\n          <slot name=\"maxElements\">Maximum of {{ max }} options selected. First remove a selected option to select another.</slot>\n        </span>\n      </li>\n      <template v-if=\"!max || value.length < max\">\n        <li\n          v-for=\"option in filteredOptions\"\n          track-by=\"$index\"\n          tabindex=\"0\"\n          :class=\"{ 'multiselect__option--highlight': $index === pointer && this.showPointer, 'multiselect__option--selected': !isNotSelected(option) }\"\n          class=\"multiselect__option\"\n          @mousedown.prevent=\"select(option)\"\n          @mouseenter=\"pointerSet($index)\"\n          :data-select=\"option.isTag ? tagPlaceholder : selectLabel\"\n          :data-selected=\"selectedLabel\"\n          :data-deselect=\"deselectLabel\">\n          <partial :name=\"optionPartial\" v-if=\"optionPartial.length\"></partial>\n          <span v-else v-text=\"getOptionLabel(option)\"></span>\n        </li>\n      </template>\n      <li v-show=\"filteredOptions.length === 0 && search\">\n        <span class=\"multiselect__option\">\n          <slot name=\"noResult\">No elements found. Consider changing the search query.</slot>\n        </span>\n      </li>\n      <slot name=\"afterList\"></slot>\n  </ul>\n</div>\n";

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popconfirm = __webpack_require__(368);

	var _popconfirm2 = _interopRequireDefault(_popconfirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _popconfirm2.default;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(369)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/popconfirm/popconfirm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(373)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-62b3d907/popconfirm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	var _popover = __webpack_require__(370);

	var _popover2 = _interopRequireDefault(_popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-popconfirm',
	    props: (0, _utils.defaultProps)({
	        title: '',
	        okText: '确 定',
	        cancelText: '取 消',
	        onConfirm: function onConfirm() {},
	        onCancel: function onCancel() {},
	        openClassName: '',
	        visible: false,
	        placement: 'top',
	        skip: false }),
	    data: function data() {
	        return {};
	    },
	    methods: {
	        doCancel: function doCancel() {
	            this.onCancel();
	            if (this.visible) {
	                this.visible = false;
	            }
	        },
	        doConfirm: function doConfirm() {
	            this.onConfirm();
	            if (this.visible) {
	                this.visible = false;
	            }
	        }
	    },
	    components: {
	        vPopover: _popover2.default
	    }
	};

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(371)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/popover/popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(372)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1f39d633/popover.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	var $body = document.body;

	exports.default = {
	    name: 'v-popover',
	    props: (0, _utils.defaultProps)({
	        title: '',
	        clazz: '',
	        placement: 'bottom',
	        visible: false,
	        trigger: 'click',
	        content: '',
	        onVisibleChange: function onVisibleChange() {},
	        openClassName: '',
	        disabled: false,
	        skip: false,
	        skipFunc: function skipFunc() {} }),
	    data: function data() {
	        return {};
	    },
	    ready: function ready() {
	        var _this = this;
	        var $trigger = this.$el.nextElementSibling;
	        var $popover = $trigger.nextElementSibling;
	        var getOffset = function getOffset(el) {
	            var box = el.getBoundingClientRect();
	            var docElem = document.documentElement;
	            var scrollTop = window.pageYOffset || docElem.scrollTop || $body.scrollTop;
	            var scrollLeft = window.pageXOffset || docElem.scrollLeft || $body.scrollLeft;
	            var clientTop = docElem.clientTop || $body.clientTop;
	            var clientLeft = docElem.clientLeft || $body.clientLeft;
	            return {
	                top: Math.round(box.top + scrollTop - clientTop),
	                left: Math.round(box.left + scrollLeft - clientLeft)
	            };
	        };
	        _this.popShow = function () {
	            var leftFactor = 0.5;
	            var topFactor = 0.5;
	            var offset = getOffset($trigger);

	            var eleWidth = $trigger.offsetWidth;
	            var eleHeight = $trigger.offsetHeight;
	            if (_this.placement.toUpperCase().includes('LEFT')) {
	                leftFactor = 0;
	            } else if (_this.placement.toUpperCase().includes('RIGHT')) {
	                leftFactor = 1;
	            }

	            if (_this.placement.toUpperCase().includes('TOP')) {
	                topFactor = 0;
	            } else if (this.placement.toUpperCase().includes('BOTTOM')) {
	                topFactor = 1;
	            }

	            (0, _utils.addStyle)($popover, {
	                left: offset.left + eleWidth * leftFactor + 'px',
	                top: offset.top + eleHeight * topFactor + 'px'
	            });
	            _this.visible = true;
	            if (_this.openClassName) {
	                (0, _utils.addClass)($trigger, _this.openClassName);
	            }
	        };
	        _this.popHide = function () {
	            _this.visible = false;
	            if (_this.openClassName) {
	                (0, _utils.removeClass)($trigger, _this.openClassName);
	            }
	        };

	        if (_this.trigger === 'click') {
	            $trigger.addEventListener('click', function (e) {
	                e.stopPropagation();
	                if (_this.disabled) {
	                    return;
	                }
	                if (_this.skip) {
	                    try {
	                        _this.skipFunc();
	                    } catch (e) {
	                        console && console.log(e);
	                    }
	                    return;
	                }
	                _this.visible = !_this.visible;
	            }, false);
	            _this.bodyClick = function () {
	                _this.visible = false;
	            };
	            $body.addEventListener('click', _this.bodyClick, false);
	        }
	        if (_this.trigger === 'hover') {
	            (function () {
	                var hover_timer = null;
	                var delay = 200;
	                $trigger.addEventListener('mouseover', function (e) {
	                    if (_this.disabled) {
	                        return;
	                    }
	                    clearTimeout(hover_timer);
	                    if (_this.skip) {
	                        try {
	                            _this.skipFunc();
	                        } catch (e) {
	                            console && console.log(e);
	                        }
	                        return;
	                    }
	                    if (!_this.visible) {
	                        _this.visible = true;
	                    }
	                }, false);
	                $trigger.addEventListener('mouseout', function (e) {
	                    hover_timer = setTimeout(function () {
	                        _this.visible = false;
	                    }, delay);
	                }, false);
	                $popover.addEventListener('mouseover', function () {
	                    clearTimeout(hover_timer);
	                }, false);
	                $popover.addEventListener('mouseout', function () {
	                    hover_timer = setTimeout(function () {
	                        _this.visible = false;
	                    }, delay);
	                }, false);
	            })();
	        }

	        if (_this.trigger === 'focus') {
	            $trigger.addEventListener('focus', function (e) {
	                if (_this.disabled) {
	                    return;
	                }
	                _this.visible = true;
	            }, false);
	            $trigger.addEventListener('blur', function (e) {
	                if (_this.disabled) {
	                    return;
	                }
	                _this.visible = false;
	            }, false);
	        }

	        _this.$nextTick(function () {
	            if (_this.disabled) {
	                return;
	            }
	            _this.visible ? _this.popShow() : _this.popHide();
	        });

	        $body.appendChild($popover);
	    },
	    watch: {
	        'visible': function visible(val) {
	            if (val === true) {
	                this.popShow();
	            } else {
	                this.popHide();
	            }
	            this.onVisibleChange(this.visible);
	        }
	    },
	    destroyed: function destroyed() {
	        if (this.trigger === 'click') {
	            $body.removeEventListener('click', this.bodyClick);
	        }
	    }
	};

/***/ },
/* 372 */
/***/ function(module, exports) {

	module.exports = "\n<slot name=\"trigger\"></slot>\n<div class=\"ant-popover ant-popover-placement-{{ placement }} {{clazz}}\" @click.stop transition=\"fade\" v-show=\"visible\">\n    <div class=\"ant-popover-content\">\n        <div class=\"ant-popover-arrow\"></div>\n        <div class=\"ant-popover-inner\">\n            <div class=\"ant-popover-title\" v-if=\"title != ''\">{{ title }}</div>\n            <div class=\"ant-popover-inner-content\">\n                <template v-if=\"content\">{{ content }}</template>\n                <template v-else>\n                    <slot name=\"content\"></slot>\n                </template>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 373 */
/***/ function(module, exports) {

	module.exports = "\n<v-popover :open-class-name=\"openClassName\" :visible.sync=\"visible\" :placement=\"placement\" :skip-func=\"onConfirm\" :skip.sync=\"skip\">\n    <template slot=\"trigger\"><slot></slot></template>\n    <template slot=\"content\">\n        <div class=\"ant-popover-message\">\n            <i class=\"anticon anticon-exclamation-circle\"></i>\n            <div class=\"ant-popover-message-title\">{{ title }}</div>\n        </div>\n        <div class=\"ant-popover-buttons\">\n            <button type=\"button\" class=\"ant-btn ant-btn-ghost ant-btn-sm\" @click.stop=\"doCancel\"><span>{{ cancelText }}</span></button>\n            <button type=\"button\" class=\"ant-btn ant-btn-primary ant-btn-sm\" @click.stop=\"doConfirm\"><span>{{ okText }}</span></button>\n        </div>\n    </template>\n</v-popover>\n";

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popover = __webpack_require__(370);

	var _popover2 = _interopRequireDefault(_popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _popover2.default;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.vProgressCircle = exports.vProgressLine = undefined;

	var _ProgressLine = __webpack_require__(376);

	var _ProgressLine2 = _interopRequireDefault(_ProgressLine);

	var _ProgressCircle = __webpack_require__(379);

	var _ProgressCircle2 = _interopRequireDefault(_ProgressCircle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.vProgressLine = _ProgressLine2.default;
	exports.vProgressCircle = _ProgressCircle2.default;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(377)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/progress/ProgressLine.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(378)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2713817b/ProgressLine.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-progress-line',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-progress',

	    status: (0, _utils.oneOf)(['normal', 'exception', 'active', 'success'], 'normal'),
	    progressStatus: 'normal',
	    showInfo: true,
	    percent: 0,
	    strokeWidth: 10
	  }),

	  components: { vIcon: _iconfont2.default },

	  computed: {
	    wrapClasses: function wrapClasses() {
	      return [this.prefixCls + '-line-wrap', 'clearfix', (0, _defineProperty3.default)({}, 'status-' + this.progressStatus, this.progressStatus), (0, _defineProperty3.default)({}, this.prefixCls + '-line-wrap-full', !this.showInfo)];
	    }
	  },

	  compiled: function compiled() {
	    this._handleStatus();
	  },


	  watch: {
	    percent: function percent() {
	      this._handleStatus();
	    }
	  },

	  methods: {
	    _handleStatus: function _handleStatus() {
	      if (parseInt(this.percent, 10) === 100) {
	        this.progressStatus = 'success';
	      } else {
	        this.progressStatus = this.status || 'normal';
	      }
	    }
	  }
	};

/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n  <span v-if=\"showInfo === true\" >\n    <span v-if=\"progressStatus === 'exception' || progressStatus === 'success'\" :class=\"prefixCls + '-line-text'\">\n      <v-icon :type=\"progressStatus === 'exception' ? 'exclamation-circle' : 'check-circle' \"></v-icon>\n    </span>\n    <span v-else :class=\"prefixCls + '-line-text'\">\n      {{ percent }}%\n    </span>\n  </span>\n\n  <div :class=\"prefixCls + '-line-outer'\">\n    <div :class=\"prefixCls + '-line-inner'\">\n      <div :class=\"prefixCls + '-line-bg'\" :style=\"{width: percent + '%', height: strokeWidth + 'px'}\"></div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(380)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/progress/ProgressCircle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(381)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-8fcd7ed2/ProgressCircle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(100);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var statusColorMap = {
	  'normal': '#2db7f5',
	  'exception': '#ff6600',
	  'success': '#87d068'
	};

	exports.default = {
	  name: 'v-progress-circle',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-progress',

	    status: (0, _utils.oneOf)(['normal', 'exception', 'success'], 'normal'),
	    progressStatus: 'normal',
	    width: 132,
	    percent: 0,
	    trailWidth: 6,
	    strokeWidth: 6,
	    trailColor: '#e9e9e9'
	  }),

	  components: { vIcon: _iconfont2.default },

	  computed: {
	    strokeColor: function strokeColor() {
	      return statusColorMap[this.progressStatus];
	    },
	    radius: function radius() {
	      return 50 - this.strokeWidth / 2;
	    },
	    pathString: function pathString() {
	      return 'M 50,50 m 0,-' + this.radius + '\n              a ' + this.radius + ',' + this.radius + ' 0 1 1 0,' + 2 * this.radius + '\n              a ' + this.radius + ',' + this.radius + ' 0 1 1 0,-' + 2 * this.radius;
	    },
	    pathStyle: function pathStyle() {
	      var len = Math.PI * 2 * this.radius;
	      return {
	        'strokeDasharray': len + 'px ' + len + 'px',
	        'strokeDashoffset': (100 - this.percent) / 100 * len + 'px',
	        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	      };
	    }
	  },

	  compiled: function compiled() {
	    this._handleStatus();
	  },


	  watch: {
	    percent: function percent() {
	      this._handleStatus();
	    }
	  },

	  methods: {
	    _handleStatus: function _handleStatus() {
	      if (parseInt(this.percent, 10) === 100) {
	        this.progressStatus = 'success';
	      } else {
	        this.progressStatus = this.status || 'normal';
	      }
	    }
	  }
	};

/***/ },
/* 381 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"prefixCls + '-circle-wrap status-' + progressStatus\" >\n  <div\n    :class=\"prefixCls + '-circle-inner'\"\n    :style=\"{\n      'width': width + 'px',\n      'height': width + 'px',\n      'fontSize': width * 0.16 + 6 + 'px'\n    }\">\n\n    <svg viewBox='0 0 100 100'>\n      <path :d=\"pathString\" :stroke=\"trailColor\"\n        :stroke-width=\"trailWidth\" fill-opacity='0'/>\n      <path :d=\"pathString\" stroke-linecap='round'\n        :stroke=\"strokeColor\" :stroke-width=\"strokeWidth\" fill-opacity='0' :style=\"pathStyle\" />\n    </svg>\n\n    <span v-if=\"progressStatus === 'exception'\" :class=\"prefixCls + '-circle-text'\"><v-icon type=\"exclamation\"></v-icon></span>\n    <span v-if=\"progressStatus === 'success'\" :class=\"prefixCls + '-circle-text'\"><v-icon type=\"check\"></v-icon></span>\n    <span v-if=\"progressStatus !== 'exception' && progressStatus !== 'success'\" :class=\"prefixCls + '-circle-text'\">{{ percent }}%</span>\n  </div>\n</div>\n";

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _queueAnim = __webpack_require__(383);

	var _queueAnim2 = _interopRequireDefault(_queueAnim);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _queueAnim2.default;

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(384)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/queueAnim/queueAnim.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(391)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1d1be8a6/queueAnim.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(385);

	var _keys2 = _interopRequireDefault(_keys);

	var _utils = __webpack_require__(100);

	var _velocityAnimate = __webpack_require__(389);

	var _velocityAnimate2 = _interopRequireDefault(_velocityAnimate);

	var _animTypes = __webpack_require__(390);

	var _animTypes2 = _interopRequireDefault(_animTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackEase = {
	  easeInBack: [0.6, -0.28, 0.735, 0.045],
	  easeOutBack: [0.175, 0.885, 0.32, 1.275],
	  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
	};

	function transformArguments(arg) {
	  if (Array.isArray(arg) && arg.length === 2) {
	    return arg;
	  }
	  return [arg, arg];
	}

	exports.default = {
	  name: 'v-queue-anim',
	  props: (0, _utils.defaultProps)({
	    show: true,
	    interval: (0, _utils.oneOfType)([Number, Array], 100),
	    duration: (0, _utils.oneOfType)([Number, Array], 500),
	    delay: (0, _utils.oneOfType)([Number, Array], 0),
	    type: (0, _utils.oneOfType)([String, Array], 'right'),
	    animConfig: (0, _utils.oneOfType)([String, Array]),
	    ease: (0, _utils.oneOfType)([String, Array], 'easeOutQuart'),
	    animatingClassName: Array,
	    watchValue: (0, _utils.oneOfType)([String, Array]),
	    leaveReverse: false
	  }),

	  data: function data() {
	    return {
	      originChildren: [],
	      children: [],
	      childrenShow: {}
	    };
	  },
	  compiled: function compiled() {
	    this.animatingClassName = this.animatingClassName || ['queue-anim-entering', 'queue-anim-leaving'];
	  },
	  ready: function ready() {
	    var _this = this;

	    this.keysAnimating = [];

	    var freeChild = this._getFreeKeysAndChild();
	    this.keysAnimating = (0, _keys2.default)(freeChild);
	    this.children = freeChild;
	    this.originChildren = freeChild;

	    this.$on('queue-anim-hidden', function () {
	      _this._hiddenVelocityNode();
	      return true;
	    });

	    if (this.show) {
	      this._animateEnter();
	    } else {
	      this._hiddenVelocityNode();
	      this.$broadcast('queue-anim-hidden');
	    }
	  },
	  beforeDestory: function beforeDestory() {
	    if (this.originChildren && this.originChildren.length > 0) {
	      this.originChildren.forEach(function (child) {
	        (0, _velocityAnimate2.default)(child, 'stop');
	      });
	    }
	  },


	  isActHideAnimate: false,

	  watch: {
	    show: function show(value) {
	      var _this2 = this;

	      if (value) {
	        this.isActHideAnimate = true;
	        this.$nextTick(function () {
	          _this2.$broadcast('queue-anim-hidden');
	          setTimeout(function () {
	            _this2._animateEnter();
	            _this2.isActHideAnimate = false;
	          }, 50);
	        });
	      } else {
	        this._animateLeave(function () {
	          if (!_this2.isActHideAnimate) {
	            _this2.$broadcast('queue-anim-hidden');
	          }
	        });
	      }
	    },
	    watchValue: function watchValue(newValue, oldValue) {
	      var _this3 = this;

	      this.$nextTick(function () {
	        var shouldEnterChild = [];
	        var shouldLeaveChild = [];

	        var newChild = _this3._getKeysChild();
	        var nodeMap = {};

	        for (var i = 0; i < _this3.children.length; i++) {
	          var curChild = _this3.children[i];
	          var hasRemove = true;
	          for (var j = 0; j < newChild.length; j++) {
	            if (curChild.key === newChild[j].key) {
	              hasRemove = false;
	            }
	          }
	          if (hasRemove) {
	            shouldLeaveChild.push(curChild);
	          }
	        }

	        for (var _i = 0; _i < newChild.length; _i++) {
	          var _curChild = newChild[_i];
	          var hasAdd = true;
	          for (var _j = 0; _j < _this3.children.length; _j++) {
	            if (_curChild.key === _this3.children[_j].key) {
	              hasAdd = false;
	            }
	          }
	          if (hasAdd) {
	            shouldEnterChild.push(_curChild);
	          }
	        }

	        shouldEnterChild.forEach(_this3._performEnter);
	        shouldLeaveChild.forEach(_this3._performLeave);

	        _this3.children = newChild;
	      });
	    }
	  },

	  methods: {
	    _getKeysChild: function _getKeysChild() {
	      var ret = [];
	      var keyNodes = Array.prototype.slice.call(this.$el.querySelectorAll('[key]'));
	      keyNodes.forEach(function (child) {
	        if (!child) {
	          return;
	        }

	        child.setAttribute('__scope_key__', 1);

	        var key = child.getAttribute('key');

	        if (!key) {
	          return;
	        }

	        ret.push({
	          key: key,
	          el: child
	        });
	      });

	      return ret;
	    },
	    _getFreeKeysAndChild: function _getFreeKeysAndChild() {
	      var ret = [];
	      var keyNodes = Array.prototype.slice.call(this.$el.querySelectorAll('[key]:not([__scope_key__])'));
	      keyNodes.forEach(function (child) {
	        if (!child) {
	          return;
	        }

	        child.setAttribute('__scope_key__', 1);

	        var key = child.getAttribute('key');

	        if (!key) {
	          return;
	        }

	        ret.push({
	          key: key,
	          el: child
	        });
	      });

	      return ret;
	    },
	    _getVelocityConfig: function _getVelocityConfig(index) {
	      if (this.animConfig) {
	        return transformArguments(this.animConfig)[index];
	      }
	      return _animTypes2.default[transformArguments(this.type)[index]];
	    },
	    _getVelocityEnterConfig: function _getVelocityEnterConfig() {
	      return this._getVelocityConfig(0);
	    },
	    _getVelocityLeaveConfig: function _getVelocityLeaveConfig() {
	      var config = this._getVelocityConfig(1);
	      var ret = {};
	      (0, _keys2.default)(config).forEach(function (key) {
	        if (Array.isArray(config[key])) {
	          ret[key] = Array.prototype.slice.call(config[key]).reverse();
	        } else {
	          ret[key] = config[key];
	        }
	      });
	      return ret;
	    },
	    _getVelocityEasing: function _getVelocityEasing() {
	      return transformArguments(this.ease).map(function (easeName) {
	        if (typeof easeName === 'string') {
	          return BackEase[easeName] || easeName;
	        }
	      });
	    },
	    _hiddenVelocityNode: function _hiddenVelocityNode() {
	      this.children.forEach(function (item, i) {
	        var node = item.el;
	        if (!node) {
	          return;
	        }
	        node.style.visibility = 'hidden';
	        (0, _velocityAnimate2.default)(node, 'stop');
	      });
	    },
	    _animateEnter: function _animateEnter() {
	      this.children.forEach(this._performEnter);
	    },
	    _performEnter: function _performEnter(item, i) {
	      var _this4 = this;

	      var node = item.el;
	      var key = item.key;

	      if (!node) {
	        return;
	      }
	      var interval = transformArguments(this.interval)[0];
	      var delay = transformArguments(this.delay)[0];
	      var duration = transformArguments(this.duration)[0];
	      node.style.visibility = 'hidden';
	      (0, _velocityAnimate2.default)(node, 'stop');
	      (0, _velocityAnimate2.default)(node, this._getVelocityEnterConfig('enter'), {
	        delay: interval * i + delay,
	        duration: duration,
	        easing: this._getVelocityEasing()[0],
	        visibility: 'visible',
	        begin: function begin(elements) {
	          _this4._enterBegin(key, elements);
	          if (node.__vue__) {
	            var _enterFn = node.__vue__._animateEnter;
	            _enterFn && _enterFn();

	            var children = node.__vue__.$children;
	            children.forEach(function (item) {
	              item._animateEnter && item._animateEnter();
	            });
	          }
	        },
	        complete: this._enterComplete.bind(this, key)
	      });
	    },
	    _animateLeave: function _animateLeave(done) {
	      var _this5 = this;

	      this.children.forEach(function (item, i) {
	        _this5._performLeave(item, i, done);
	      });
	    },
	    _performLeave: function _performLeave(item, i, done) {
	      var _this6 = this;

	      var node = item.el;
	      var key = item.key;
	      if (!node) {
	        return;
	      }
	      var interval = transformArguments(this.interval)[1];
	      var delay = transformArguments(this.delay)[1];
	      var duration = transformArguments(this.duration)[1];
	      var order = this.leaveReverse ? this.children.length - i - 1 : i;
	      (0, _velocityAnimate2.default)(node, 'stop');
	      (0, _velocityAnimate2.default)(node, this._getVelocityLeaveConfig('leave'), {
	        delay: interval * order + delay,
	        duration: duration,
	        easing: this._getVelocityEasing()[1],
	        begin: this._leaveBegin.bind(this),
	        complete: function complete(elements) {
	          _this6._leaveComplete(key, elements);
	          var len = _this6.children.length;
	          if (i === len - 1) {
	            done && typeof done === 'function' && done();
	          }
	        }
	      });
	    },
	    _enterBegin: function _enterBegin(key, elements) {
	      var self = this;
	      if (this.keysAnimating.indexOf(key) >= 0) {
	        this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
	      }
	      elements.forEach(function (elem) {
	        elem.className = elem.className.replace(self.animatingClassName[1], '').trim();
	        elem.className += ' ' + self.animatingClassName[0];
	      });
	    },
	    _enterComplete: function _enterComplete(key, elements) {
	      var self = this;
	      if (this.keysAnimating.indexOf(key) >= 0) {
	        this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
	      }
	      elements.forEach(function (elem) {
	        elem.className = elem.className.replace(self.animatingClassName[0], '').trim();
	      });
	    },
	    _leaveBegin: function _leaveBegin(elements) {
	      var self = this;
	      elements.forEach(function (elem) {
	        elem.className = elem.className.replace(self.animatingClassName[0], '').trim();
	        elem.className += ' ' + self.animatingClassName[1];
	      });
	    },
	    _leaveComplete: function _leaveComplete(key, elements) {
	      var self = this;
	      if (this.keysAnimating.indexOf(key) < 0) {
	        return;
	      }
	      this.keysAnimating.splice(this.keysAnimating.indexOf(key), 1);
	      elements.forEach(function (elem) {
	        elem.className = elem.className.replace(self.animatingClassName[1], '').trim();
	      });
	    }
	  }
	};

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(386), __esModule: true };

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(387);
	module.exports = __webpack_require__(137).Object.keys;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(202)
	  , $keys    = __webpack_require__(188);

	__webpack_require__(388)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(135)
	  , core    = __webpack_require__(137)
	  , fails   = __webpack_require__(146);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 389 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! VelocityJS.org (1.4.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */

	/*************************
	 Velocity jQuery Shim
	 *************************/

	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

	/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
	/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
	/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */

	(function(window) {
		"use strict";
		/***************
		 Setup
		 ***************/

		/* If jQuery is already loaded, there's no point in loading this shim. */
		if (window.jQuery) {
			return;
		}

		/* jQuery base. */
		var $ = function(selector, context) {
			return new $.fn.init(selector, context);
		};

		/********************
		 Private Methods
		 ********************/

		/* jQuery */
		$.isWindow = function(obj) {
			/* jshint eqeqeq: false */
			return obj && obj === obj.window;
		};

		/* jQuery */
		$.type = function(obj) {
			if (!obj) {
				return obj + "";
			}

			return typeof obj === "object" || typeof obj === "function" ?
					class2type[toString.call(obj)] || "object" :
					typeof obj;
		};

		/* jQuery */
		$.isArray = Array.isArray || function(obj) {
			return $.type(obj) === "array";
		};

		/* jQuery */
		function isArraylike(obj) {
			var length = obj.length,
					type = $.type(obj);

			if (type === "function" || $.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
		}

		/***************
		 $ Methods
		 ***************/

		/* jQuery: Support removed for IE<9. */
		$.isPlainObject = function(obj) {
			var key;

			if (!obj || $.type(obj) !== "object" || obj.nodeType || $.isWindow(obj)) {
				return false;
			}

			try {
				if (obj.constructor &&
						!hasOwn.call(obj, "constructor") &&
						!hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}
			} catch (e) {
				return false;
			}

			for (key in obj) {
			}

			return key === undefined || hasOwn.call(obj, key);
		};

		/* jQuery */
		$.each = function(obj, callback, args) {
			var value,
					i = 0,
					length = obj.length,
					isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						if (!obj.hasOwnProperty(i)) {
							continue;
						}
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		};

		/* Custom */
		$.data = function(node, key, value) {
			/* $.getData() */
			if (value === undefined) {
				var getId = node[$.expando],
						store = getId && cache[getId];

				if (key === undefined) {
					return store;
				} else if (store) {
					if (key in store) {
						return store[key];
					}
				}
				/* $.setData() */
			} else if (key !== undefined) {
				var setId = node[$.expando] || (node[$.expando] = ++$.uuid);

				cache[setId] = cache[setId] || {};
				cache[setId][key] = value;

				return value;
			}
		};

		/* Custom */
		$.removeData = function(node, keys) {
			var id = node[$.expando],
					store = id && cache[id];

			if (store) {
				// Cleanup the entire store if no keys are provided.
				if (!keys) {
					delete cache[id];
				} else {
					$.each(keys, function(_, key) {
						delete store[key];
					});
				}
			}
		};

		/* jQuery */
		$.extend = function() {
			var src, copyIsArray, copy, name, options, clone,
					target = arguments[0] || {},
					i = 1,
					length = arguments.length,
					deep = false;

			if (typeof target === "boolean") {
				deep = target;

				target = arguments[i] || {};
				i++;
			}

			if (typeof target !== "object" && $.type(target) !== "function") {
				target = {};
			}

			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				if ((options = arguments[i])) {
					for (name in options) {
						if (!options.hasOwnProperty(name)) {
							continue;
						}
						src = target[name];
						copy = options[name];

						if (target === copy) {
							continue;
						}

						if (deep && copy && ($.isPlainObject(copy) || (copyIsArray = $.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && $.isArray(src) ? src : [];

							} else {
								clone = src && $.isPlainObject(src) ? src : {};
							}

							target[name] = $.extend(deep, clone, copy);

						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			return target;
		};

		/* jQuery 1.4.3 */
		$.queue = function(elem, type, data) {
			function $makeArray(arr, results) {
				var ret = results || [];

				if (arr) {
					if (isArraylike(Object(arr))) {
						/* $.merge */
						(function(first, second) {
							var len = +second.length,
									j = 0,
									i = first.length;

							while (j < len) {
								first[i++] = second[j++];
							}

							if (len !== len) {
								while (second[j] !== undefined) {
									first[i++] = second[j++];
								}
							}

							first.length = i;

							return first;
						})(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						[].push.call(ret, arr);
					}
				}

				return ret;
			}

			if (!elem) {
				return;
			}

			type = (type || "fx") + "queue";

			var q = $.data(elem, type);

			if (!data) {
				return q || [];
			}

			if (!q || $.isArray(data)) {
				q = $.data(elem, type, $makeArray(data));
			} else {
				q.push(data);
			}

			return q;
		};

		/* jQuery 1.4.3 */
		$.dequeue = function(elems, type) {
			/* Custom: Embed element iteration. */
			$.each(elems.nodeType ? [elems] : elems, function(i, elem) {
				type = type || "fx";

				var queue = $.queue(elem, type),
						fn = queue.shift();

				if (fn === "inprogress") {
					fn = queue.shift();
				}

				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					fn.call(elem, function() {
						$.dequeue(elem, type);
					});
				}
			});
		};

		/******************
		 $.fn Methods
		 ******************/

		/* jQuery */
		$.fn = $.prototype = {
			init: function(selector) {
				/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
				if (selector.nodeType) {
					this[0] = selector;

					return this;
				} else {
					throw new Error("Not a DOM node.");
				}
			},
			offset: function() {
				/* jQuery altered code: Dropped disconnected DOM node checking. */
				var box = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};

				return {
					top: box.top + (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
					left: box.left + (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
				};
			},
			position: function() {
				/* jQuery */
				function offsetParentFn(elem) {
					var offsetParent = elem.offsetParent;

					while (offsetParent && offsetParent.nodeName.toLowerCase() !== "html" && offsetParent.style && offsetParent.style.position === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || document;
				}

				/* Zepto */
				var elem = this[0],
						offsetParent = offsetParentFn(elem),
						offset = this.offset(),
						parentOffset = /^(?:body|html)$/i.test(offsetParent.nodeName) ? {top: 0, left: 0} : $(offsetParent).offset();

				offset.top -= parseFloat(elem.style.marginTop) || 0;
				offset.left -= parseFloat(elem.style.marginLeft) || 0;

				if (offsetParent.style) {
					parentOffset.top += parseFloat(offsetParent.style.borderTopWidth) || 0;
					parentOffset.left += parseFloat(offsetParent.style.borderLeftWidth) || 0;
				}

				return {
					top: offset.top - parentOffset.top,
					left: offset.left - parentOffset.left
				};
			}
		};

		/**********************
		 Private Variables
		 **********************/

		/* For $.data() */
		var cache = {};
		$.expando = "velocity" + (new Date().getTime());
		$.uuid = 0;

		/* For $.queue() */
		var class2type = {},
				hasOwn = class2type.hasOwnProperty,
				toString = class2type.toString;

		var types = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
		for (var i = 0; i < types.length; i++) {
			class2type["[object " + types[i] + "]"] = types[i].toLowerCase();
		}

		/* Makes $(node) possible, without having to call init. */
		$.fn.init.prototype = $.fn;

		/* Globalize Velocity onto the window, and assign its Utilities property. */
		window.Velocity = {Utilities: $};
	})(window);

	/******************
	 Velocity.js
	 ******************/

	(function(factory) {
		"use strict";
		/* CommonJS module. */
		if (typeof module === "object" && typeof module.exports === "object") {
			module.exports = factory();
			/* AMD module. */
		} else if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			/* Browser globals. */
		} else {
			factory();
		}
	}(function() {
		"use strict";
		return function(global, window, document, undefined) {

			/***************
			 Summary
			 ***************/

			/*
			 - CSS: CSS stack that works independently from the rest of Velocity.
			 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
			 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
			 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
			 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
			 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
			 - completeCall(): Handles the cleanup process for each Velocity call.
			 */

			/*********************
			 Helper Functions
			 *********************/

			/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
			var IE = (function() {
				if (document.documentMode) {
					return document.documentMode;
				} else {
					for (var i = 7; i > 4; i--) {
						var div = document.createElement("div");

						div.innerHTML = "<!--[if IE " + i + "]><span></span><![endif]-->";

						if (div.getElementsByTagName("span").length) {
							div = null;

							return i;
						}
					}
				}

				return undefined;
			})();

			/* rAF shim. Gist: https://gist.github.com/julianshapiro/9497513 */
			var rAFShim = (function() {
				var timeLast = 0;

				return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
					var timeCurrent = (new Date()).getTime(),
							timeDelta;

					/* Dynamically set delay on a per-tick basis to match 60fps. */
					/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
					timeDelta = Math.max(0, 16 - (timeCurrent - timeLast));
					timeLast = timeCurrent + timeDelta;

					return setTimeout(function() {
						callback(timeCurrent + timeDelta);
					}, timeDelta);
				};
			})();

			var performance = (function() {
				var perf = window.performance || {};

				if (!perf.hasOwnProperty("now")) {
					var nowOffset = perf.timing && perf.timing.domComplete ? perf.timing.domComplete : (new Date()).getTime();

					perf.now = function() {
						return (new Date()).getTime() - nowOffset;
					};
				}
				return perf;
			})();

			/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
			function compactSparseArray(array) {
				var index = -1,
						length = array ? array.length : 0,
						result = [];

				while (++index < length) {
					var value = array[index];

					if (value) {
						result.push(value);
					}
				}

				return result;
			}

			function sanitizeElements(elements) {
				/* Unwrap jQuery/Zepto objects. */
				if (Type.isWrapped(elements)) {
					elements = [].slice.call(elements);
					/* Wrap a single element in an array so that $.each() can iterate with the element instead of its node's children. */
				} else if (Type.isNode(elements)) {
					elements = [elements];
				}

				return elements;
			}

			var Type = {
				isNumber: function(variable) {
					return (typeof variable === "number");
				},
				isString: function(variable) {
					return (typeof variable === "string");
				},
				isArray: Array.isArray || function(variable) {
					return Object.prototype.toString.call(variable) === "[object Array]";
				},
				isFunction: function(variable) {
					return Object.prototype.toString.call(variable) === "[object Function]";
				},
				isNode: function(variable) {
					return variable && variable.nodeType;
				},
				/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
				isNodeList: function(variable) {
					return typeof variable === "object" &&
							/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(variable)) &&
							variable.length !== undefined &&
							(variable.length === 0 || (typeof variable[0] === "object" && variable[0].nodeType > 0));
				},
				/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element. */
				isWrapped: function(variable) {
					return variable && (Type.isArray(variable) || (Type.isNumber(variable.length) && !Type.isString(variable) && !Type.isFunction(variable)));
				},
				isSVG: function(variable) {
					return window.SVGElement && (variable instanceof window.SVGElement);
				},
				isEmptyObject: function(variable) {
					for (var name in variable) {
						if (variable.hasOwnProperty(name)) {
							return false;
						}
					}

					return true;
				}
			};

			/*****************
			 Dependencies
			 *****************/

			var $,
					isJQuery = false;

			if (global.fn && global.fn.jquery) {
				$ = global;
				isJQuery = true;
			} else {
				$ = window.Velocity.Utilities;
			}

			if (IE <= 8 && !isJQuery) {
				throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
			} else if (IE <= 7) {
				/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
				jQuery.fn.velocity = jQuery.fn.animate;

				/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
				return;
			}

			/*****************
			 Constants
			 *****************/

			var DURATION_DEFAULT = 400,
					EASING_DEFAULT = "swing";

			/*************
			 State
			 *************/

			var Velocity = {
				/* Container for page-wide Velocity state data. */
				State: {
					/* Detect mobile devices to determine if mobileHA should be turned on. */
					isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
					/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
					isAndroid: /Android/i.test(navigator.userAgent),
					isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
					isChrome: window.chrome,
					isFirefox: /Firefox/i.test(navigator.userAgent),
					/* Create a cached element for re-use when checking for CSS property prefixes. */
					prefixElement: document.createElement("div"),
					/* Cache every prefix match to avoid repeating lookups. */
					prefixMatches: {},
					/* Cache the anchor used for animating window scrolling. */
					scrollAnchor: null,
					/* Cache the browser-specific property names associated with the scroll anchor. */
					scrollPropertyLeft: null,
					scrollPropertyTop: null,
					/* Keep track of whether our RAF tick is running. */
					isTicking: false,
					/* Container for every in-progress call to Velocity. */
					calls: [],
					delayedElements: {
						count: 0
					}
				},
				/* Velocity's custom CSS stack. Made global for unit testing. */
				CSS: {/* Defined below. */},
				/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
				Utilities: $,
				/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
				Redirects: {/* Manually registered by the user. */},
				Easings: {/* Defined below. */},
				/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
				Promise: window.Promise,
				/* Velocity option defaults, which can be overriden by the user. */
				defaults: {
					queue: "",
					duration: DURATION_DEFAULT,
					easing: EASING_DEFAULT,
					begin: undefined,
					complete: undefined,
					progress: undefined,
					display: undefined,
					visibility: undefined,
					loop: false,
					delay: false,
					mobileHA: true,
					/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
					_cacheValues: true,
					/* Advanced: Set to false if the promise should always resolve on empty element lists. */
					promiseRejectEmpty: true
				},
				/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
				init: function(element) {
					$.data(element, "velocity", {
						/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
						isSVG: Type.isSVG(element),
						/* Keep track of whether the element is currently being animated by Velocity.
						 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
						isAnimating: false,
						/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
						computedStyle: null,
						/* Tween data is cached for each animation on the element so that data can be passed across calls --
						 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
						tweensContainer: null,
						/* The full root property values of each CSS hook being animated on this element are cached so that:
						 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
						 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
						rootPropertyValueCache: {},
						/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
						transformCache: {}
					});
				},
				/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
				hook: null, /* Defined below. */
				/* Velocity-wide animation time remapping for testing purposes. */
				mock: false,
				version: {major: 1, minor: 4, patch: 0},
				/* Set to 1 or 2 (most verbose) to output debug info to console. */
				debug: false,
				/* Use rAF high resolution timestamp when available */
				timestamp: true,
				/* Pause all animations */
				pauseAll: function(queueName) {
					var currentTime = (new Date()).getTime();

					$.each(Velocity.State.calls, function(i, activeCall) {

						if (activeCall) {

							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}

							/* Set call to paused */
							activeCall[5] = {
								resume: false
							};
						}
					});

					/* Pause timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						pauseDelayOnElement(element, currentTime);
					});
				},
				/* Resume all animations */
				resumeAll: function(queueName) {
					var currentTime = (new Date()).getTime();

					$.each(Velocity.State.calls, function(i, activeCall) {

						if (activeCall) {

							/* If we have a queueName and this call is not on that queue, skip */
							if (queueName !== undefined && ((activeCall[2].queue !== queueName) || (activeCall[2].queue === false))) {
								return true;
							}

							/* Set call to resumed if it was paused */
							if (activeCall[5]) {
								activeCall[5].resume = true;
							}
						}
					});
					/* Resume timers on any currently delayed calls */
					$.each(Velocity.State.delayedElements, function(k, element) {
						if (!element) {
							return;
						}
						resumeDelayOnElement(element, currentTime);
					});
				}
			};

			/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
			if (window.pageYOffset !== undefined) {
				Velocity.State.scrollAnchor = window;
				Velocity.State.scrollPropertyLeft = "pageXOffset";
				Velocity.State.scrollPropertyTop = "pageYOffset";
			} else {
				Velocity.State.scrollAnchor = document.documentElement || document.body.parentNode || document.body;
				Velocity.State.scrollPropertyLeft = "scrollLeft";
				Velocity.State.scrollPropertyTop = "scrollTop";
			}

			/* Shorthand alias for jQuery's $.data() utility. */
			function Data(element) {
				/* Hardcode a reference to the plugin name. */
				var response = $.data(element, "velocity");

				/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
				return response === null ? undefined : response;
			}

			/**************
			 Delay Timer
			 **************/

			function pauseDelayOnElement(element, currentTime) {
				/* Check for any delay timers, and pause the set timeouts (while preserving time data)
				 to be resumed when the "resume" command is issued */
				var data = Data(element);
				if (data && data.delayTimer && !data.delayPaused) {
					data.delayRemaining = data.delay - currentTime + data.delayBegin;
					data.delayPaused = true;
					clearTimeout(data.delayTimer.setTimeout);
				}
			}

			function resumeDelayOnElement(element, currentTime) {
				/* Check for any paused timers and resume */
				var data = Data(element);
				if (data && data.delayTimer && data.delayPaused) {
					/* If the element was mid-delay, re initiate the timeout with the remaining delay */
					data.delayPaused = false;
					data.delayTimer.setTimeout = setTimeout(data.delayTimer.next, data.delayRemaining);
				}
			}



			/**************
			 Easing
			 **************/

			/* Step easing generator. */
			function generateStep(steps) {
				return function(p) {
					return Math.round(p * steps) * (1 / steps);
				};
			}

			/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			function generateBezier(mX1, mY1, mX2, mY2) {
				var NEWTON_ITERATIONS = 4,
						NEWTON_MIN_SLOPE = 0.001,
						SUBDIVISION_PRECISION = 0.0000001,
						SUBDIVISION_MAX_ITERATIONS = 10,
						kSplineTableSize = 11,
						kSampleStepSize = 1.0 / (kSplineTableSize - 1.0),
						float32ArraySupported = "Float32Array" in window;

				/* Must contain four arguments. */
				if (arguments.length !== 4) {
					return false;
				}

				/* Arguments must be numbers. */
				for (var i = 0; i < 4; ++i) {
					if (typeof arguments[i] !== "number" || isNaN(arguments[i]) || !isFinite(arguments[i])) {
						return false;
					}
				}

				/* X values must be in the [0, 1] range. */
				mX1 = Math.min(mX1, 1);
				mX2 = Math.min(mX2, 1);
				mX1 = Math.max(mX1, 0);
				mX2 = Math.max(mX2, 0);

				var mSampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

				function A(aA1, aA2) {
					return 1.0 - 3.0 * aA2 + 3.0 * aA1;
				}
				function B(aA1, aA2) {
					return 3.0 * aA2 - 6.0 * aA1;
				}
				function C(aA1) {
					return 3.0 * aA1;
				}

				function calcBezier(aT, aA1, aA2) {
					return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
				}

				function getSlope(aT, aA1, aA2) {
					return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
				}

				function newtonRaphsonIterate(aX, aGuessT) {
					for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
						var currentSlope = getSlope(aGuessT, mX1, mX2);

						if (currentSlope === 0.0) {
							return aGuessT;
						}

						var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
						aGuessT -= currentX / currentSlope;
					}

					return aGuessT;
				}

				function calcSampleValues() {
					for (var i = 0; i < kSplineTableSize; ++i) {
						mSampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
					}
				}

				function binarySubdivide(aX, aA, aB) {
					var currentX, currentT, i = 0;

					do {
						currentT = aA + (aB - aA) / 2.0;
						currentX = calcBezier(currentT, mX1, mX2) - aX;
						if (currentX > 0.0) {
							aB = currentT;
						} else {
							aA = currentT;
						}
					} while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

					return currentT;
				}

				function getTForX(aX) {
					var intervalStart = 0.0,
							currentSample = 1,
							lastSample = kSplineTableSize - 1;

					for (; currentSample !== lastSample && mSampleValues[currentSample] <= aX; ++currentSample) {
						intervalStart += kSampleStepSize;
					}

					--currentSample;

					var dist = (aX - mSampleValues[currentSample]) / (mSampleValues[currentSample + 1] - mSampleValues[currentSample]),
							guessForT = intervalStart + dist * kSampleStepSize,
							initialSlope = getSlope(guessForT, mX1, mX2);

					if (initialSlope >= NEWTON_MIN_SLOPE) {
						return newtonRaphsonIterate(aX, guessForT);
					} else if (initialSlope === 0.0) {
						return guessForT;
					} else {
						return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize);
					}
				}

				var _precomputed = false;

				function precompute() {
					_precomputed = true;
					if (mX1 !== mY1 || mX2 !== mY2) {
						calcSampleValues();
					}
				}

				var f = function(aX) {
					if (!_precomputed) {
						precompute();
					}
					if (mX1 === mY1 && mX2 === mY2) {
						return aX;
					}
					if (aX === 0) {
						return 0;
					}
					if (aX === 1) {
						return 1;
					}

					return calcBezier(getTForX(aX), mY1, mY2);
				};

				f.getControlPoints = function() {
					return [{x: mX1, y: mY1}, {x: mX2, y: mY2}];
				};

				var str = "generateBezier(" + [mX1, mY1, mX2, mY2] + ")";
				f.toString = function() {
					return str;
				};

				return f;
			}

			/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
			/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
			 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
			var generateSpringRK4 = (function() {
				function springAccelerationForState(state) {
					return (-state.tension * state.x) - (state.friction * state.v);
				}

				function springEvaluateStateWithDerivative(initialState, dt, derivative) {
					var state = {
						x: initialState.x + derivative.dx * dt,
						v: initialState.v + derivative.dv * dt,
						tension: initialState.tension,
						friction: initialState.friction
					};

					return {dx: state.v, dv: springAccelerationForState(state)};
				}

				function springIntegrateState(state, dt) {
					var a = {
						dx: state.v,
						dv: springAccelerationForState(state)
					},
							b = springEvaluateStateWithDerivative(state, dt * 0.5, a),
							c = springEvaluateStateWithDerivative(state, dt * 0.5, b),
							d = springEvaluateStateWithDerivative(state, dt, c),
							dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
							dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

					state.x = state.x + dxdt * dt;
					state.v = state.v + dvdt * dt;

					return state;
				}

				return function springRK4Factory(tension, friction, duration) {

					var initState = {
						x: -1,
						v: 0,
						tension: null,
						friction: null
					},
							path = [0],
							time_lapsed = 0,
							tolerance = 1 / 10000,
							DT = 16 / 1000,
							have_duration, dt, last_state;

					tension = parseFloat(tension) || 500;
					friction = parseFloat(friction) || 20;
					duration = duration || null;

					initState.tension = tension;
					initState.friction = friction;

					have_duration = duration !== null;

					/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
					if (have_duration) {
						/* Run the simulation without a duration. */
						time_lapsed = springRK4Factory(tension, friction);
						/* Compute the adjusted time delta. */
						dt = time_lapsed / duration * DT;
					} else {
						dt = DT;
					}

					while (true) {
						/* Next/step function .*/
						last_state = springIntegrateState(last_state || initState, dt);
						/* Store the position. */
						path.push(1 + last_state.x);
						time_lapsed += 16;
						/* If the change threshold is reached, break. */
						if (!(Math.abs(last_state.x) > tolerance && Math.abs(last_state.v) > tolerance)) {
							break;
						}
					}

					/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
					 computed path and returns a snapshot of the position according to a given percentComplete. */
					return !have_duration ? time_lapsed : function(percentComplete) {
						return path[ (percentComplete * (path.length - 1)) | 0 ];
					};
				};
			}());

			/* jQuery easings. */
			Velocity.Easings = {
				linear: function(p) {
					return p;
				},
				swing: function(p) {
					return 0.5 - Math.cos(p * Math.PI) / 2;
				},
				/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
				spring: function(p) {
					return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
				}
			};

			/* CSS3 and Robert Penner easings. */
			$.each(
					[
						["ease", [0.25, 0.1, 0.25, 1.0]],
						["ease-in", [0.42, 0.0, 1.00, 1.0]],
						["ease-out", [0.00, 0.0, 0.58, 1.0]],
						["ease-in-out", [0.42, 0.0, 0.58, 1.0]],
						["easeInSine", [0.47, 0, 0.745, 0.715]],
						["easeOutSine", [0.39, 0.575, 0.565, 1]],
						["easeInOutSine", [0.445, 0.05, 0.55, 0.95]],
						["easeInQuad", [0.55, 0.085, 0.68, 0.53]],
						["easeOutQuad", [0.25, 0.46, 0.45, 0.94]],
						["easeInOutQuad", [0.455, 0.03, 0.515, 0.955]],
						["easeInCubic", [0.55, 0.055, 0.675, 0.19]],
						["easeOutCubic", [0.215, 0.61, 0.355, 1]],
						["easeInOutCubic", [0.645, 0.045, 0.355, 1]],
						["easeInQuart", [0.895, 0.03, 0.685, 0.22]],
						["easeOutQuart", [0.165, 0.84, 0.44, 1]],
						["easeInOutQuart", [0.77, 0, 0.175, 1]],
						["easeInQuint", [0.755, 0.05, 0.855, 0.06]],
						["easeOutQuint", [0.23, 1, 0.32, 1]],
						["easeInOutQuint", [0.86, 0, 0.07, 1]],
						["easeInExpo", [0.95, 0.05, 0.795, 0.035]],
						["easeOutExpo", [0.19, 1, 0.22, 1]],
						["easeInOutExpo", [1, 0, 0, 1]],
						["easeInCirc", [0.6, 0.04, 0.98, 0.335]],
						["easeOutCirc", [0.075, 0.82, 0.165, 1]],
						["easeInOutCirc", [0.785, 0.135, 0.15, 0.86]]
					], function(i, easingArray) {
				Velocity.Easings[easingArray[0]] = generateBezier.apply(null, easingArray[1]);
			});

			/* Determine the appropriate easing type given an easing input. */
			function getEasing(value, duration) {
				var easing = value;

				/* The easing option can either be a string that references a pre-registered easing,
				 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
				if (Type.isString(value)) {
					/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
					if (!Velocity.Easings[value]) {
						easing = false;
					}
				} else if (Type.isArray(value) && value.length === 1) {
					easing = generateStep.apply(null, value);
				} else if (Type.isArray(value) && value.length === 2) {
					/* springRK4 must be passed the animation's duration. */
					/* Note: If the springRK4 array contains non-numbers, generateSpringRK4() returns an easing
					 function generated with default tension and friction values. */
					easing = generateSpringRK4.apply(null, value.concat([duration]));
				} else if (Type.isArray(value) && value.length === 4) {
					/* Note: If the bezier array contains non-numbers, generateBezier() returns false. */
					easing = generateBezier.apply(null, value);
				} else {
					easing = false;
				}

				/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
				 if the Velocity-wide default has been incorrectly modified. */
				if (easing === false) {
					if (Velocity.Easings[Velocity.defaults.easing]) {
						easing = Velocity.defaults.easing;
					} else {
						easing = EASING_DEFAULT;
					}
				}

				return easing;
			}

			/*****************
			 CSS Stack
			 *****************/

			/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
			 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
			/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
			var CSS = Velocity.CSS = {
				/*************
				 RegEx
				 *************/

				RegEx: {
					isHex: /^#([A-f\d]{3}){1,2}$/i,
					/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
					valueUnwrap: /^[A-z]+\((.*)\)$/i,
					wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
					/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
					valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/ig
				},
				/************
				 Lists
				 ************/

				Lists: {
					colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
					transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
					transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"],
					units: [
						"%", // relative
						"em", "ex", "ch", "rem", // font relative
						"vw", "vh", "vmin", "vmax", // viewport relative
						"cm", "mm", "Q", "in", "pc", "pt", "px", // absolute lengths
						"deg", "grad", "rad", "turn", // angles
						"s", "ms" // time
					],
					colorNames: {
						"aliceblue": "240,248,255",
						"antiquewhite": "250,235,215",
						"aquamarine": "127,255,212",
						"aqua": "0,255,255",
						"azure": "240,255,255",
						"beige": "245,245,220",
						"bisque": "255,228,196",
						"black": "0,0,0",
						"blanchedalmond": "255,235,205",
						"blueviolet": "138,43,226",
						"blue": "0,0,255",
						"brown": "165,42,42",
						"burlywood": "222,184,135",
						"cadetblue": "95,158,160",
						"chartreuse": "127,255,0",
						"chocolate": "210,105,30",
						"coral": "255,127,80",
						"cornflowerblue": "100,149,237",
						"cornsilk": "255,248,220",
						"crimson": "220,20,60",
						"cyan": "0,255,255",
						"darkblue": "0,0,139",
						"darkcyan": "0,139,139",
						"darkgoldenrod": "184,134,11",
						"darkgray": "169,169,169",
						"darkgrey": "169,169,169",
						"darkgreen": "0,100,0",
						"darkkhaki": "189,183,107",
						"darkmagenta": "139,0,139",
						"darkolivegreen": "85,107,47",
						"darkorange": "255,140,0",
						"darkorchid": "153,50,204",
						"darkred": "139,0,0",
						"darksalmon": "233,150,122",
						"darkseagreen": "143,188,143",
						"darkslateblue": "72,61,139",
						"darkslategray": "47,79,79",
						"darkturquoise": "0,206,209",
						"darkviolet": "148,0,211",
						"deeppink": "255,20,147",
						"deepskyblue": "0,191,255",
						"dimgray": "105,105,105",
						"dimgrey": "105,105,105",
						"dodgerblue": "30,144,255",
						"firebrick": "178,34,34",
						"floralwhite": "255,250,240",
						"forestgreen": "34,139,34",
						"fuchsia": "255,0,255",
						"gainsboro": "220,220,220",
						"ghostwhite": "248,248,255",
						"gold": "255,215,0",
						"goldenrod": "218,165,32",
						"gray": "128,128,128",
						"grey": "128,128,128",
						"greenyellow": "173,255,47",
						"green": "0,128,0",
						"honeydew": "240,255,240",
						"hotpink": "255,105,180",
						"indianred": "205,92,92",
						"indigo": "75,0,130",
						"ivory": "255,255,240",
						"khaki": "240,230,140",
						"lavenderblush": "255,240,245",
						"lavender": "230,230,250",
						"lawngreen": "124,252,0",
						"lemonchiffon": "255,250,205",
						"lightblue": "173,216,230",
						"lightcoral": "240,128,128",
						"lightcyan": "224,255,255",
						"lightgoldenrodyellow": "250,250,210",
						"lightgray": "211,211,211",
						"lightgrey": "211,211,211",
						"lightgreen": "144,238,144",
						"lightpink": "255,182,193",
						"lightsalmon": "255,160,122",
						"lightseagreen": "32,178,170",
						"lightskyblue": "135,206,250",
						"lightslategray": "119,136,153",
						"lightsteelblue": "176,196,222",
						"lightyellow": "255,255,224",
						"limegreen": "50,205,50",
						"lime": "0,255,0",
						"linen": "250,240,230",
						"magenta": "255,0,255",
						"maroon": "128,0,0",
						"mediumaquamarine": "102,205,170",
						"mediumblue": "0,0,205",
						"mediumorchid": "186,85,211",
						"mediumpurple": "147,112,219",
						"mediumseagreen": "60,179,113",
						"mediumslateblue": "123,104,238",
						"mediumspringgreen": "0,250,154",
						"mediumturquoise": "72,209,204",
						"mediumvioletred": "199,21,133",
						"midnightblue": "25,25,112",
						"mintcream": "245,255,250",
						"mistyrose": "255,228,225",
						"moccasin": "255,228,181",
						"navajowhite": "255,222,173",
						"navy": "0,0,128",
						"oldlace": "253,245,230",
						"olivedrab": "107,142,35",
						"olive": "128,128,0",
						"orangered": "255,69,0",
						"orange": "255,165,0",
						"orchid": "218,112,214",
						"palegoldenrod": "238,232,170",
						"palegreen": "152,251,152",
						"paleturquoise": "175,238,238",
						"palevioletred": "219,112,147",
						"papayawhip": "255,239,213",
						"peachpuff": "255,218,185",
						"peru": "205,133,63",
						"pink": "255,192,203",
						"plum": "221,160,221",
						"powderblue": "176,224,230",
						"purple": "128,0,128",
						"red": "255,0,0",
						"rosybrown": "188,143,143",
						"royalblue": "65,105,225",
						"saddlebrown": "139,69,19",
						"salmon": "250,128,114",
						"sandybrown": "244,164,96",
						"seagreen": "46,139,87",
						"seashell": "255,245,238",
						"sienna": "160,82,45",
						"silver": "192,192,192",
						"skyblue": "135,206,235",
						"slateblue": "106,90,205",
						"slategray": "112,128,144",
						"snow": "255,250,250",
						"springgreen": "0,255,127",
						"steelblue": "70,130,180",
						"tan": "210,180,140",
						"teal": "0,128,128",
						"thistle": "216,191,216",
						"tomato": "255,99,71",
						"turquoise": "64,224,208",
						"violet": "238,130,238",
						"wheat": "245,222,179",
						"whitesmoke": "245,245,245",
						"white": "255,255,255",
						"yellowgreen": "154,205,50",
						"yellow": "255,255,0"
					}
				},
				/************
				 Hooks
				 ************/

				/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
				 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
				/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
				 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
				Hooks: {
					/********************
					 Registration
					 ********************/

					/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
					/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
					templates: {
						"textShadow": ["Color X Y Blur", "black 0px 0px 0px"],
						"boxShadow": ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
						"clip": ["Top Right Bottom Left", "0px 0px 0px 0px"],
						"backgroundPosition": ["X Y", "0% 0%"],
						"transformOrigin": ["X Y Z", "50% 50% 0px"],
						"perspectiveOrigin": ["X Y", "50% 50%"]
					},
					/* A "registered" hook is one that has been converted from its template form into a live,
					 tweenable property. It contains data to associate it with its root property. */
					registered: {
						/* Note: A registered hook looks like this ==> textShadowBlur: [ "textShadow", 3 ],
						 which consists of the subproperty's name, the associated root property's name,
						 and the subproperty's position in the root's value. */
					},
					/* Convert the templates into individual hooks then append them to the registered object above. */
					register: function() {
						/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
						 currently set to "transparent" default to their respective template below when color-animated,
						 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
						 which is almost always set closer to black than white. */
						for (var i = 0; i < CSS.Lists.colors.length; i++) {
							var rgbComponents = (CSS.Lists.colors[i] === "color") ? "0 0 0 1" : "255 255 255 1";
							CSS.Hooks.templates[CSS.Lists.colors[i]] = ["Red Green Blue Alpha", rgbComponents];
						}

						var rootProperty,
								hookTemplate,
								hookNames;

						/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
						 Thus, we re-arrange the templates accordingly. */
						if (IE) {
							for (rootProperty in CSS.Hooks.templates) {
								if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
									continue;
								}
								hookTemplate = CSS.Hooks.templates[rootProperty];
								hookNames = hookTemplate[0].split(" ");

								var defaultValues = hookTemplate[1].match(CSS.RegEx.valueSplit);

								if (hookNames[0] === "Color") {
									/* Reposition both the hook's name and its default value to the end of their respective strings. */
									hookNames.push(hookNames.shift());
									defaultValues.push(defaultValues.shift());

									/* Replace the existing template for the hook's root property. */
									CSS.Hooks.templates[rootProperty] = [hookNames.join(" "), defaultValues.join(" ")];
								}
							}
						}

						/* Hook registration. */
						for (rootProperty in CSS.Hooks.templates) {
							if (!CSS.Hooks.templates.hasOwnProperty(rootProperty)) {
								continue;
							}
							hookTemplate = CSS.Hooks.templates[rootProperty];
							hookNames = hookTemplate[0].split(" ");

							for (var j in hookNames) {
								if (!hookNames.hasOwnProperty(j)) {
									continue;
								}
								var fullHookName = rootProperty + hookNames[j],
										hookPosition = j;

								/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
								 and the hook's position in its template's default value string. */
								CSS.Hooks.registered[fullHookName] = [rootProperty, hookPosition];
							}
						}
					},
					/*****************************
					 Injection and Extraction
					 *****************************/

					/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
					/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
					getRoot: function(property) {
						var hookData = CSS.Hooks.registered[property];

						if (hookData) {
							return hookData[0];
						} else {
							/* If there was no hook match, return the property name untouched. */
							return property;
						}
					},
					getUnit: function(str, start) {
						var unit = (str.substr(start || 0, 5).match(/^[a-z%]+/) || [])[0] || "";

						if (unit && CSS.Lists.units.indexOf(unit) >= 0) {
							return unit;
						}
						return "";
					},
					fixColors: function(str) {
						return str.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g, function($0, $1, $2) {
							if (CSS.Lists.colorNames.hasOwnProperty($2)) {
								return ($1 ? $1 : "rgba(") + CSS.Lists.colorNames[$2] + ($1 ? "" : ",1)");
							}
							return $1 + $2;
						});
					},
					/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
					 the targeted hook can be injected or extracted at its standard position. */
					cleanRootPropertyValue: function(rootProperty, rootPropertyValue) {
						/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
						if (CSS.RegEx.valueUnwrap.test(rootPropertyValue)) {
							rootPropertyValue = rootPropertyValue.match(CSS.RegEx.valueUnwrap)[1];
						}

						/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
						 default to the root's default value as defined in CSS.Hooks.templates. */
						/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
						 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
						if (CSS.Values.isCSSNullValue(rootPropertyValue)) {
							rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
						}

						return rootPropertyValue;
					},
					/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
					extractValue: function(fullHookName, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];

						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1];

							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

							/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
							return rootPropertyValue.toString().match(CSS.RegEx.valueSplit)[hookPosition];
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					},
					/* Inject the hook's value into its root property's value. This is used to piece back together the root property
					 once Velocity has updated one of its individually hooked values through tweening. */
					injectValue: function(fullHookName, hookValue, rootPropertyValue) {
						var hookData = CSS.Hooks.registered[fullHookName];

						if (hookData) {
							var hookRoot = hookData[0],
									hookPosition = hookData[1],
									rootPropertyValueParts,
									rootPropertyValueUpdated;

							rootPropertyValue = CSS.Hooks.cleanRootPropertyValue(hookRoot, rootPropertyValue);

							/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
							 then reconstruct the rootPropertyValue string. */
							rootPropertyValueParts = rootPropertyValue.toString().match(CSS.RegEx.valueSplit);
							rootPropertyValueParts[hookPosition] = hookValue;
							rootPropertyValueUpdated = rootPropertyValueParts.join(" ");

							return rootPropertyValueUpdated;
						} else {
							/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
							return rootPropertyValue;
						}
					}
				},
				/*******************
				 Normalizations
				 *******************/

				/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
				 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
				Normalizations: {
					/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
					 the targeted element (which may need to be queried), and the targeted property value. */
					registered: {
						clip: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return "clip";
									/* Clip needs to be unwrapped and stripped of its commas during extraction. */
								case "extract":
									var extracted;

									/* If Velocity also extracted this value, skip extraction. */
									if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
										extracted = propertyValue;
									} else {
										/* Remove the "rect()" wrapper. */
										extracted = propertyValue.toString().match(CSS.RegEx.valueUnwrap);

										/* Strip off commas. */
										extracted = extracted ? extracted[1].replace(/,(\s+)?/g, " ") : propertyValue;
									}

									return extracted;
									/* Clip needs to be re-wrapped during injection. */
								case "inject":
									return "rect(" + propertyValue + ")";
							}
						},
						blur: function(type, element, propertyValue) {
							switch (type) {
								case "name":
									return Velocity.State.isFirefox ? "filter" : "-webkit-filter";
								case "extract":
									var extracted = parseFloat(propertyValue);

									/* If extracted is NaN, meaning the value isn't already extracted. */
									if (!(extracted || extracted === 0)) {
										var blurComponent = propertyValue.toString().match(/blur\(([0-9]+[A-z]+)\)/i);

										/* If the filter string had a blur component, return just the blur value and unit type. */
										if (blurComponent) {
											extracted = blurComponent[1];
											/* If the component doesn't exist, default blur to 0. */
										} else {
											extracted = 0;
										}
									}

									return extracted;
									/* Blur needs to be re-wrapped during injection. */
								case "inject":
									/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
									if (!parseFloat(propertyValue)) {
										return "none";
									} else {
										return "blur(" + propertyValue + ")";
									}
							}
						},
						/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
						opacity: function(type, element, propertyValue) {
							if (IE <= 8) {
								switch (type) {
									case "name":
										return "filter";
									case "extract":
										/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
										 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
										var extracted = propertyValue.toString().match(/alpha\(opacity=(.*)\)/i);

										if (extracted) {
											/* Convert to decimal value. */
											propertyValue = extracted[1] / 100;
										} else {
											/* When extracting opacity, default to 1 since a null value means opacity hasn't been set. */
											propertyValue = 1;
										}

										return propertyValue;
									case "inject":
										/* Opacified elements are required to have their zoom property set to a non-zero value. */
										element.style.zoom = 1;

										/* Setting the filter property on elements with certain font property combinations can result in a
										 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
										 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
										if (parseFloat(propertyValue) >= 1) {
											return "";
										} else {
											/* As per the filter property's spec, convert the decimal value to a whole number and wrap the value. */
											return "alpha(opacity=" + parseInt(parseFloat(propertyValue) * 100, 10) + ")";
										}
								}
								/* With all other browsers, normalization is not required; return the same values that were passed in. */
							} else {
								switch (type) {
									case "name":
										return "opacity";
									case "extract":
										return propertyValue;
									case "inject":
										return propertyValue;
								}
							}
						}
					},
					/*****************************
					 Batched Registrations
					 *****************************/

					/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
					register: function() {

						/*****************
						 Transforms
						 *****************/

						/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
						 so that they can be referenced in a properties map by their individual names. */
						/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
						 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
						 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
						 once when multiple transform subproperties are being animated simultaneously. */
						/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
						 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
						 from being normalized for these browsers so that tweening skips these properties altogether
						 (since it will ignore them as being unsupported by the browser.) */
						if ((!IE || IE > 9) && !Velocity.State.isGingerbread) {
							/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
							 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
							CSS.Lists.transformsBase = CSS.Lists.transformsBase.concat(CSS.Lists.transforms3D);
						}

						for (var i = 0; i < CSS.Lists.transformsBase.length; i++) {
							/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
							 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
							(function() {
								var transformName = CSS.Lists.transformsBase[i];

								CSS.Normalizations.registered[transformName] = function(type, element, propertyValue) {
									switch (type) {
										/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
										case "name":
											return "transform";
											/* Transform values are cached onto a per-element transformCache object. */
										case "extract":
											/* If this transform has yet to be assigned a value, return its null value. */
											if (Data(element) === undefined || Data(element).transformCache[transformName] === undefined) {
												/* Scale CSS.Lists.transformsBase default to 1 whereas all other transform properties default to 0. */
												return /^scale/i.test(transformName) ? 1 : 0;
												/* When transform values are set, they are wrapped in parentheses as per the CSS spec.
												 Thus, when extracting their values (for tween calculations), we strip off the parentheses. */
											}
											return Data(element).transformCache[transformName].replace(/[()]/g, "");
										case "inject":
											var invalid = false;

											/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
											 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
											/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
											switch (transformName.substr(0, transformName.length - 1)) {
												/* Whitelist unit types for each transform. */
												case "translate":
													invalid = !/(%|px|em|rem|vw|vh|\d)$/i.test(propertyValue);
													break;
													/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
												case "scal":
												case "scale":
													/* Chrome on Android has a bug in which scaled elements blur if their initial scale
													 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
													 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
													if (Velocity.State.isAndroid && Data(element).transformCache[transformName] === undefined && propertyValue < 1) {
														propertyValue = 1;
													}

													invalid = !/(\d)$/i.test(propertyValue);
													break;
												case "skew":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
												case "rotate":
													invalid = !/(deg|\d)$/i.test(propertyValue);
													break;
											}

											if (!invalid) {
												/* As per the CSS spec, wrap the value in parentheses. */
												Data(element).transformCache[transformName] = "(" + propertyValue + ")";
											}

											/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
											return Data(element).transformCache[transformName];
									}
								};
							})();
						}

						/*************
						 Colors
						 *************/

						/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
						 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
						for (var j = 0; j < CSS.Lists.colors.length; j++) {
							/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
							 (Otherwise, all functions would take the final for loop's colorName.) */
							(function() {
								var colorName = CSS.Lists.colors[j];

								/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
								CSS.Normalizations.registered[colorName] = function(type, element, propertyValue) {
									switch (type) {
										case "name":
											return colorName;
											/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
										case "extract":
											var extracted;

											/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
											if (CSS.RegEx.wrappedValueAlreadyExtracted.test(propertyValue)) {
												extracted = propertyValue;
											} else {
												var converted,
														colorNames = {
															black: "rgb(0, 0, 0)",
															blue: "rgb(0, 0, 255)",
															gray: "rgb(128, 128, 128)",
															green: "rgb(0, 128, 0)",
															red: "rgb(255, 0, 0)",
															white: "rgb(255, 255, 255)"
														};

												/* Convert color names to rgb. */
												if (/^[A-z]+$/i.test(propertyValue)) {
													if (colorNames[propertyValue] !== undefined) {
														converted = colorNames[propertyValue];
													} else {
														/* If an unmatched color name is provided, default to black. */
														converted = colorNames.black;
													}
													/* Convert hex values to rgb. */
												} else if (CSS.RegEx.isHex.test(propertyValue)) {
													converted = "rgb(" + CSS.Values.hexToRgb(propertyValue).join(" ") + ")";
													/* If the provided color doesn't match any of the accepted color formats, default to black. */
												} else if (!(/^rgba?\(/i.test(propertyValue))) {
													converted = colorNames.black;
												}

												/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
												 repeated spaces (in case the value included spaces to begin with). */
												extracted = (converted || propertyValue).toString().match(CSS.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
											}

											/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											if ((!IE || IE > 8) && extracted.split(" ").length === 3) {
												extracted += " 1";
											}

											return extracted;
										case "inject":
											/* If we have a pattern then it might already have the right values */
											if (/^rgb/.test(propertyValue)) {
												return propertyValue;
											}

											/* If this is IE<=8 and an alpha component exists, strip it off. */
											if (IE <= 8) {
												if (propertyValue.split(" ").length === 4) {
													propertyValue = propertyValue.split(/\s+/).slice(0, 3).join(" ");
												}
												/* Otherwise, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
											} else if (propertyValue.split(" ").length === 3) {
												propertyValue += " 1";
											}

											/* Re-insert the browser-appropriate wrapper("rgb/rgba()"), insert commas, and strip off decimal units
											 on all values but the fourth (R, G, and B only accept whole numbers). */
											return (IE <= 8 ? "rgb" : "rgba") + "(" + propertyValue.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
									}
								};
							})();
						}

						/**************
						 Dimensions
						 **************/
						function augmentDimension(name, element, wantInner) {
							var isBorderBox = CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() === "border-box";

							if (isBorderBox === (wantInner || false)) {
								/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
								var i,
										value,
										augment = 0,
										sides = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"],
										fields = ["padding" + sides[0], "padding" + sides[1], "border" + sides[0] + "Width", "border" + sides[1] + "Width"];

								for (i = 0; i < fields.length; i++) {
									value = parseFloat(CSS.getPropertyValue(element, fields[i]));
									if (!isNaN(value)) {
										augment += value;
									}
								}
								return wantInner ? -augment : augment;
							}
							return 0;
						}
						function getDimension(name, wantInner) {
							return function(type, element, propertyValue) {
								switch (type) {
									case "name":
										return name;
									case "extract":
										return parseFloat(propertyValue) + augmentDimension(name, element, wantInner);
									case "inject":
										return (parseFloat(propertyValue) - augmentDimension(name, element, wantInner)) + "px";
								}
							};
						}
						CSS.Normalizations.registered.innerWidth = getDimension("width", true);
						CSS.Normalizations.registered.innerHeight = getDimension("height", true);
						CSS.Normalizations.registered.outerWidth = getDimension("width");
						CSS.Normalizations.registered.outerHeight = getDimension("height");
					}
				},
				/************************
				 CSS Property Names
				 ************************/

				Names: {
					/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
					 Camelcasing is used to normalize property names between and across calls. */
					camelCase: function(property) {
						return property.replace(/-(\w)/g, function(match, subMatch) {
							return subMatch.toUpperCase();
						});
					},
					/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
					SVGAttribute: function(property) {
						var SVGAttributes = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";

						/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
						if (IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) {
							SVGAttributes += "|transform";
						}

						return new RegExp("^(" + SVGAttributes + ")$", "i").test(property);
					},
					/* Determine whether a property should be set with a vendor prefix. */
					/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
					 If the property is not at all supported by the browser, return a false flag. */
					prefixCheck: function(property) {
						/* If this property has already been checked, return the cached value. */
						if (Velocity.State.prefixMatches[property]) {
							return [Velocity.State.prefixMatches[property], true];
						} else {
							var vendors = ["", "Webkit", "Moz", "ms", "O"];

							for (var i = 0, vendorsLength = vendors.length; i < vendorsLength; i++) {
								var propertyPrefixed;

								if (i === 0) {
									propertyPrefixed = property;
								} else {
									/* Capitalize the first letter of the property to conform to JavaScript vendor prefix notation (e.g. webkitFilter). */
									propertyPrefixed = vendors[i] + property.replace(/^\w/, function(match) {
										return match.toUpperCase();
									});
								}

								/* Check if the browser supports this property as prefixed. */
								if (Type.isString(Velocity.State.prefixElement.style[propertyPrefixed])) {
									/* Cache the match. */
									Velocity.State.prefixMatches[property] = propertyPrefixed;

									return [propertyPrefixed, true];
								}
							}

							/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
							return [property, false];
						}
					}
				},
				/************************
				 CSS Property Values
				 ************************/

				Values: {
					/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
					hexToRgb: function(hex) {
						var shortformRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
								longformRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
								rgbParts;

						hex = hex.replace(shortformRegex, function(m, r, g, b) {
							return r + r + g + g + b + b;
						});

						rgbParts = longformRegex.exec(hex);

						return rgbParts ? [parseInt(rgbParts[1], 16), parseInt(rgbParts[2], 16), parseInt(rgbParts[3], 16)] : [0, 0, 0];
					},
					isCSSNullValue: function(value) {
						/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
						 Thus, we check for both falsiness and these special strings. */
						/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
						 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
						/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
						return (!value || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(value));
					},
					/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
					getUnitType: function(property) {
						if (/^(rotate|skew)/i.test(property)) {
							return "deg";
						} else if (/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(property)) {
							/* The above properties are unitless. */
							return "";
						} else {
							/* Default to px for all other properties. */
							return "px";
						}
					},
					/* HTML elements default to an associated display type when they're not set to display:none. */
					/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
					getDisplayType: function(element) {
						var tagName = element && element.tagName.toString().toLowerCase();

						if (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(tagName)) {
							return "inline";
						} else if (/^(li)$/i.test(tagName)) {
							return "list-item";
						} else if (/^(tr)$/i.test(tagName)) {
							return "table-row";
						} else if (/^(table)$/i.test(tagName)) {
							return "table";
						} else if (/^(tbody)$/i.test(tagName)) {
							return "table-row-group";
							/* Default to "block" when no match is found. */
						} else {
							return "block";
						}
					},
					/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
					addClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.add(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								element.className += (element.className.length ? " " : "") + className;
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

								element.setAttribute("class", currentClass + (currentClass ? " " : "") + className);
							}
						}
					},
					removeClass: function(element, className) {
						if (element) {
							if (element.classList) {
								element.classList.remove(className);
							} else if (Type.isString(element.className)) {
								// Element.className is around 15% faster then set/getAttribute
								// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
								element.className = element.className.toString().replace(new RegExp("(^|\\s)" + className.split(" ").join("|") + "(\\s|$)", "gi"), " ");
							} else {
								// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
								var currentClass = element.getAttribute(IE <= 7 ? "className" : "class") || "";

								element.setAttribute("class", currentClass.replace(new RegExp("(^|\s)" + className.split(" ").join("|") + "(\s|$)", "gi"), " "));
							}
						}
					}
				},
				/****************************
				 Style Getting & Setting
				 ****************************/

				/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				getPropertyValue: function(element, property, rootPropertyValue, forceStyleLookup) {
					/* Get an element's computed property value. */
					/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
					 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
					 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
					function computePropertyValue(element, property) {
						/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
						 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
						 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
						 We subtract border and padding to get the sum of interior + scrollbar. */
						var computedValue = 0;

						/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
						 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
						 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
						 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
						if (IE <= 8) {
							computedValue = $.css(element, property); /* GET */
							/* All other browsers support getComputedStyle. The returned live object reference is cached onto its
							 associated element so that it does not need to be refetched upon every GET. */
						} else {
							/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
							 toggle display to the element type's default value. */
							var toggleDisplay = false;

							if (/^(width|height)$/.test(property) && CSS.getPropertyValue(element, "display") === 0) {
								toggleDisplay = true;
								CSS.setPropertyValue(element, "display", CSS.Values.getDisplayType(element));
							}

							var revertDisplay = function() {
								if (toggleDisplay) {
									CSS.setPropertyValue(element, "display", "none");
								}
							};

							if (!forceStyleLookup) {
								if (property === "height" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxHeight = element.offsetHeight - (parseFloat(CSS.getPropertyValue(element, "borderTopWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderBottomWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingTop")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingBottom")) || 0);
									revertDisplay();

									return contentBoxHeight;
								} else if (property === "width" && CSS.getPropertyValue(element, "boxSizing").toString().toLowerCase() !== "border-box") {
									var contentBoxWidth = element.offsetWidth - (parseFloat(CSS.getPropertyValue(element, "borderLeftWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "borderRightWidth")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingLeft")) || 0) - (parseFloat(CSS.getPropertyValue(element, "paddingRight")) || 0);
									revertDisplay();

									return contentBoxWidth;
								}
							}

							var computedStyle;

							/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
							 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
							if (Data(element) === undefined) {
								computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If the computedStyle object has yet to be cached, do so now. */
							} else if (!Data(element).computedStyle) {
								computedStyle = Data(element).computedStyle = window.getComputedStyle(element, null); /* GET */
								/* If computedStyle is cached, use it. */
							} else {
								computedStyle = Data(element).computedStyle;
							}

							/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
							 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
							 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
							if (property === "borderColor") {
								property = "borderTopColor";
							}

							/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
							 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
							if (IE === 9 && property === "filter") {
								computedValue = computedStyle.getPropertyValue(property); /* GET */
							} else {
								computedValue = computedStyle[property];
							}

							/* Fall back to the property's style value (if defined) when computedValue returns nothing,
							 which can happen when the element hasn't been painted. */
							if (computedValue === "" || computedValue === null) {
								computedValue = element.style[property];
							}

							revertDisplay();
						}

						/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
						 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
						 effect as being set to 0, so no conversion is necessary.) */
						/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
						 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
						 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
						if (computedValue === "auto" && /^(top|right|bottom|left)$/i.test(property)) {
							var position = computePropertyValue(element, "position"); /* GET */

							/* For absolute positioning, jQuery's $.position() only returns values for top and left;
							 right and bottom will have their "auto" value reverted to 0. */
							/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
							 Not a big deal since we're currently in a GET batch anyway. */
							if (position === "fixed" || (position === "absolute" && /top|left/i.test(property))) {
								/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
								computedValue = $(element).position()[property] + "px"; /* GET */
							}
						}

						return computedValue;
					}

					var propertyValue;

					/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
					 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
					if (CSS.Hooks.registered[property]) {
						var hook = property,
								hookRoot = CSS.Hooks.getRoot(hook);

						/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
						 query the DOM for the root property's value. */
						if (rootPropertyValue === undefined) {
							/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
							rootPropertyValue = CSS.getPropertyValue(element, CSS.Names.prefixCheck(hookRoot)[0]); /* GET */
						}

						/* If this root has a normalization registered, peform the associated normalization extraction. */
						if (CSS.Normalizations.registered[hookRoot]) {
							rootPropertyValue = CSS.Normalizations.registered[hookRoot]("extract", element, rootPropertyValue);
						}

						/* Extract the hook's value. */
						propertyValue = CSS.Hooks.extractValue(hook, rootPropertyValue);

						/* If this is a normalized property (e.g. "opacity" becomes "filter" in <=IE8) or "translateX" becomes "transform"),
						 normalize the property's name and value, and handle the special case of transforms. */
						/* Note: Normalizing a property is mutually exclusive from hooking a property since hook-extracted values are strictly
						 numerical and therefore do not require normalization extraction. */
					} else if (CSS.Normalizations.registered[property]) {
						var normalizedPropertyName,
								normalizedPropertyValue;

						normalizedPropertyName = CSS.Normalizations.registered[property]("name", element);

						/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
						 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
						 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
						 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
						if (normalizedPropertyName !== "transform") {
							normalizedPropertyValue = computePropertyValue(element, CSS.Names.prefixCheck(normalizedPropertyName)[0]); /* GET */

							/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
							if (CSS.Values.isCSSNullValue(normalizedPropertyValue) && CSS.Hooks.templates[property]) {
								normalizedPropertyValue = CSS.Hooks.templates[property][1];
							}
						}

						propertyValue = CSS.Normalizations.registered[property]("extract", element, normalizedPropertyValue);
					}

					/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
					if (!/^[\d-]/.test(propertyValue)) {
						/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
						 their HTML attribute values instead of their CSS style values. */
						var data = Data(element);

						if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
							/* Since the height/width attribute values must be set manually, they don't reflect computed values.
							 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
							if (/^(height|width)$/i.test(property)) {
								/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
								try {
									propertyValue = element.getBBox()[property];
								} catch (error) {
									propertyValue = 0;
								}
								/* Otherwise, access the attribute value directly. */
							} else {
								propertyValue = element.getAttribute(property);
							}
						} else {
							propertyValue = computePropertyValue(element, CSS.Names.prefixCheck(property)[0]); /* GET */
						}
					}

					/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
					 convert CSS null-values to an integer of value 0. */
					if (CSS.Values.isCSSNullValue(propertyValue)) {
						propertyValue = 0;
					}

					if (Velocity.debug >= 2) {
						console.log("Get " + property + ": " + propertyValue);
					}

					return propertyValue;
				},
				/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
				setPropertyValue: function(element, property, propertyValue, rootPropertyValue, scrollData) {
					var propertyName = property;

					/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
					if (property === "scroll") {
						/* If a container option is present, scroll the container instead of the browser window. */
						if (scrollData.container) {
							scrollData.container["scroll" + scrollData.direction] = propertyValue;
							/* Otherwise, Velocity defaults to scrolling the browser window. */
						} else {
							if (scrollData.direction === "Left") {
								window.scrollTo(propertyValue, scrollData.alternateValue);
							} else {
								window.scrollTo(scrollData.alternateValue, propertyValue);
							}
						}
					} else {
						/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
						 Thus, for now, we merely cache transforms being SET. */
						if (CSS.Normalizations.registered[property] && CSS.Normalizations.registered[property]("name", element) === "transform") {
							/* Perform a normalization injection. */
							/* Note: The normalization logic handles the transformCache updating. */
							CSS.Normalizations.registered[property]("inject", element, propertyValue);

							propertyName = "transform";
							propertyValue = Data(element).transformCache[property];
						} else {
							/* Inject hooks. */
							if (CSS.Hooks.registered[property]) {
								var hookName = property,
										hookRoot = CSS.Hooks.getRoot(property);

								/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
								rootPropertyValue = rootPropertyValue || CSS.getPropertyValue(element, hookRoot); /* GET */

								propertyValue = CSS.Hooks.injectValue(hookName, propertyValue, rootPropertyValue);
								property = hookRoot;
							}

							/* Normalize names and values. */
							if (CSS.Normalizations.registered[property]) {
								propertyValue = CSS.Normalizations.registered[property]("inject", element, propertyValue);
								property = CSS.Normalizations.registered[property]("name", element);
							}

							/* Assign the appropriate vendor prefix before performing an official style update. */
							propertyName = CSS.Names.prefixCheck(property)[0];

							/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
							 Try/catch is avoided for other browsers since it incurs a performance overhead. */
							if (IE <= 8) {
								try {
									element.style[propertyName] = propertyValue;
								} catch (error) {
									if (Velocity.debug) {
										console.log("Browser does not support [" + propertyValue + "] for [" + propertyName + "]");
									}
								}
								/* SVG elements have their dimensional properties (width, height, x, y, cx, etc.) applied directly as attributes instead of as styles. */
								/* Note: IE8 does not support SVG elements, so it's okay that we skip it for SVG animation. */
							} else {
								var data = Data(element);

								if (data && data.isSVG && CSS.Names.SVGAttribute(property)) {
									/* Note: For SVG attributes, vendor-prefixed property names are never used. */
									/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
									element.setAttribute(property, propertyValue);
								} else {
									element.style[propertyName] = propertyValue;
								}
							}

							if (Velocity.debug >= 2) {
								console.log("Set " + property + " (" + propertyName + "): " + propertyValue);
							}
						}
					}

					/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
					return [propertyName, propertyValue];
				},
				/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
				/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
				flushTransformCache: function(element) {
					var transformString = "",
							data = Data(element);

					/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
					 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
					if ((IE || (Velocity.State.isAndroid && !Velocity.State.isChrome)) && data && data.isSVG) {
						/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
						 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
						var getTransformFloat = function(transformProperty) {
							return parseFloat(CSS.getPropertyValue(element, transformProperty));
						};

						/* Create an object to organize all the transforms that we'll apply to the SVG element. To keep the logic simple,
						 we process *all* transform properties -- even those that may not be explicitly applied (since they default to their zero-values anyway). */
						var SVGTransforms = {
							translate: [getTransformFloat("translateX"), getTransformFloat("translateY")],
							skewX: [getTransformFloat("skewX")], skewY: [getTransformFloat("skewY")],
							/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
							 (this behavior mimics the result of animating all these properties at once on HTML elements). */
							scale: getTransformFloat("scale") !== 1 ? [getTransformFloat("scale"), getTransformFloat("scale")] : [getTransformFloat("scaleX"), getTransformFloat("scaleY")],
							/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
							 defining the rotation's origin point. We ignore the origin values (default them to 0). */
							rotate: [getTransformFloat("rotateZ"), 0, 0]
						};

						/* Iterate through the transform properties in the user-defined property map order.
						 (This mimics the behavior of non-SVG transform animation.) */
						$.each(Data(element).transformCache, function(transformName) {
							/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
							 properties so that they match up with SVG's accepted transform properties. */
							if (/^translate/i.test(transformName)) {
								transformName = "translate";
							} else if (/^scale/i.test(transformName)) {
								transformName = "scale";
							} else if (/^rotate/i.test(transformName)) {
								transformName = "rotate";
							}

							/* Check that we haven't yet deleted the property from the SVGTransforms container. */
							if (SVGTransforms[transformName]) {
								/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
								transformString += transformName + "(" + SVGTransforms[transformName].join(" ") + ")" + " ";

								/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
								 re-insert the same master property if we encounter another one of its axis-specific properties. */
								delete SVGTransforms[transformName];
							}
						});
					} else {
						var transformValue,
								perspective;

						/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
						$.each(Data(element).transformCache, function(transformName) {
							transformValue = Data(element).transformCache[transformName];

							/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
							if (transformName === "transformPerspective") {
								perspective = transformValue;
								return true;
							}

							/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
							if (IE === 9 && transformName === "rotateZ") {
								transformName = "rotate";
							}

							transformString += transformName + transformValue + " ";
						});

						/* If present, set the perspective subproperty first. */
						if (perspective) {
							transformString = "perspective" + perspective + " " + transformString;
						}
					}

					CSS.setPropertyValue(element, "transform", transformString);
				}
			};

			/* Register hooks and normalizations. */
			CSS.Hooks.register();
			CSS.Normalizations.register();

			/* Allow hook setting in the same fashion as jQuery's $.css(). */
			Velocity.hook = function(elements, arg2, arg3) {
				var value;

				elements = sanitizeElements(elements);

				$.each(elements, function(i, element) {
					/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
					if (Data(element) === undefined) {
						Velocity.init(element);
					}

					/* Get property value. If an element set was passed in, only return the value for the first element. */
					if (arg3 === undefined) {
						if (value === undefined) {
							value = CSS.getPropertyValue(element, arg2);
						}
						/* Set property value. */
					} else {
						/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
						var adjustedSet = CSS.setPropertyValue(element, arg2, arg3);

						/* Transform properties don't automatically set. They have to be flushed to the DOM. */
						if (adjustedSet[0] === "transform") {
							Velocity.CSS.flushTransformCache(element);
						}

						value = adjustedSet;
					}
				});

				return value;
			};

			/*****************
			 Animation
			 *****************/

			var animate = function() {
				var opts;

				/******************
				 Call Chain
				 ******************/

				/* Logic for determining what to return to the call stack when exiting out of Velocity. */
				function getChain() {
					/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
					 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
					if (isUtility) {
						return promiseData.promise || null;
						/* Otherwise, if we're using $.fn, return the jQuery-/Zepto-wrapped element set. */
					} else {
						return elementsWrapped;
					}
				}

				/*************************
				 Arguments Assignment
				 *************************/

				/* To allow for expressive CoffeeScript code, Velocity supports an alternative syntax in which "elements" (or "e"), "properties" (or "p"), and "options" (or "o")
				 objects are defined on a container object that's passed in as Velocity's sole argument. */
				/* Note: Some browsers automatically populate arguments with a "properties" object. We detect it by checking for its default "names" property. */
				var syntacticSugar = (arguments[0] && (arguments[0].p || (($.isPlainObject(arguments[0].properties) && !arguments[0].properties.names) || Type.isString(arguments[0].properties)))),
						/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
						isUtility,
						/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
						 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
						elementsWrapped,
						argumentIndex;

				var elements,
						propertiesMap,
						options;

				/* Detect jQuery/Zepto elements being animated via the $.fn method. */
				if (Type.isWrapped(this)) {
					isUtility = false;

					argumentIndex = 0;
					elements = this;
					elementsWrapped = this;
					/* Otherwise, raw elements are being animated via the utility function. */
				} else {
					isUtility = true;

					argumentIndex = 1;
					elements = syntacticSugar ? (arguments[0].elements || arguments[0].e) : arguments[0];
				}

				/***************
				 Promises
				 ***************/

				var promiseData = {
					promise: null,
					resolver: null,
					rejecter: null
				};

				/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
				 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
				 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
				 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
				/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
				 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
				 grouped together for the purposes of resolving and rejecting a promise. */
				if (isUtility && Velocity.Promise) {
					promiseData.promise = new Velocity.Promise(function(resolve, reject) {
						promiseData.resolver = resolve;
						promiseData.rejecter = reject;
					});
				}

				if (syntacticSugar) {
					propertiesMap = arguments[0].properties || arguments[0].p;
					options = arguments[0].options || arguments[0].o;
				} else {
					propertiesMap = arguments[argumentIndex];
					options = arguments[argumentIndex + 1];
				}

				elements = sanitizeElements(elements);

				if (!elements) {
					if (promiseData.promise) {
						if (!propertiesMap || !options || options.promiseRejectEmpty !== false) {
							promiseData.rejecter();
						} else {
							promiseData.resolver();
						}
					}
					return;
				}

				/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
				 single raw DOM element is passed in (which doesn't contain a length property). */
				var elementsLength = elements.length,
						elementsIndex = 0;

				/***************************
				 Argument Overloading
				 ***************************/

				/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
				 Overloading is detected by checking for the absence of an object being passed into options. */
				/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
				if (!/^(stop|finish|finishAll|pause|resume)$/i.test(propertiesMap) && !$.isPlainObject(options)) {
					/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
					var startingArgumentPosition = argumentIndex + 1;

					options = {};

					/* Iterate through all options arguments */
					for (var i = startingArgumentPosition; i < arguments.length; i++) {
						/* Treat a number as a duration. Parse it out. */
						/* Note: The following RegEx will return true if passed an array with a number as its first item.
						 Thus, arrays are skipped from this check. */
						if (!Type.isArray(arguments[i]) && (/^(fast|normal|slow)$/i.test(arguments[i]) || /^\d/.test(arguments[i]))) {
							options.duration = arguments[i];
							/* Treat strings and arrays as easings. */
						} else if (Type.isString(arguments[i]) || Type.isArray(arguments[i])) {
							options.easing = arguments[i];
							/* Treat a function as a complete callback. */
						} else if (Type.isFunction(arguments[i])) {
							options.complete = arguments[i];
						}
					}
				}

				/*********************
				 Action Detection
				 *********************/

				/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
				 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
				 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
				 instead of a properties map. */
				var action;

				switch (propertiesMap) {
					case "scroll":
						action = "scroll";
						break;

					case "reverse":
						action = "reverse";
						break;

					case "pause":

						/*******************
						 Action: Pause
						 *******************/

						var currentTime = (new Date()).getTime();

						/* Handle delay timers */
						$.each(elements, function(i, element) {
							pauseDelayOnElement(element, currentTime);
						});

						/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */

						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {

							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {

											/* Set call to paused */
											activeCall[5] = {
												resume: false
											};

											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});

									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}

						});

						/* Since pause creates no new tweens, exit out of Velocity. */
						return getChain();

					case "resume":

						/*******************
						 Action: Resume
						 *******************/

						/* Handle delay timers */
						$.each(elements, function(i, element) {
							resumeDelayOnElement(element, currentTime);
						});

						/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
						 single element will cause any calls that containt tweens for that element to be paused/resumed
						 as well. */

						/* Iterate through all calls and pause any that contain any of our elements */
						$.each(Velocity.State.calls, function(i, activeCall) {
							var found = false;
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Skip any calls that have never been paused */
									if (!activeCall[5]) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {

											/* Flag a pause object to be resumed, which will occur during the next tick. In
											 addition, the pause object will at that time be deleted */
											activeCall[5].resume = true;

											/* Once we match an element, we can bounce out to the next call entirely */
											found = true;
											return false;
										}
									});

									/* Proceed to check next call if we have already matched */
									if (found) {
										return false;
									}
								});
							}

						});

						/* Since resume creates no new tweens, exit out of Velocity. */
						return getChain();

					case "finish":
					case "finishAll":
					case "stop":
						/*******************
						 Action: Stop
						 *******************/

						/* Clear the currently-active delay on each targeted element. */
						$.each(elements, function(i, element) {
							if (Data(element) && Data(element).delayTimer) {
								/* Stop the timer from triggering its cached next() function. */
								clearTimeout(Data(element).delayTimer.setTimeout);

								/* Manually call the next() function so that the subsequent queue items can progress. */
								if (Data(element).delayTimer.next) {
									Data(element).delayTimer.next();
								}

								delete Data(element).delayTimer;
							}

							/* If we want to finish everything in the queue, we have to iterate through it
							 and call each function. This will make them active calls below, which will
							 cause them to be applied via the duration setting. */
							if (propertiesMap === "finishAll" && (options === true || Type.isString(options))) {
								/* Iterate through the items in the element's queue. */
								$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
									/* The queue array can contain an "inprogress" string, which we skip. */
									if (Type.isFunction(item)) {
										item();
									}
								});

								/* Clearing the $.queue() array is achieved by resetting it to []. */
								$.queue(element, Type.isString(options) ? options : "", []);
							}
						});

						var callsToStop = [];

						/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
						 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
						 is stopped, the next item in its animation queue is immediately triggered. */
						/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
						 or a custom queue string can be passed in. */
						/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
						 regardless of the element's current queue state. */

						/* Iterate through every active call. */
						$.each(Velocity.State.calls, function(i, activeCall) {
							/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
							if (activeCall) {
								/* Iterate through the active call's targeted elements. */
								$.each(activeCall[1], function(k, activeElement) {
									/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
									 clear calls associated with the relevant queue. */
									/* Call stopping logic works as follows:
									 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
									 - options === undefined --> stop current queue:"" call and all queue:false calls.
									 - options === false --> stop only queue:false calls.
									 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
									var queueName = (options === undefined) ? "" : options;

									if (queueName !== true && (activeCall[2].queue !== queueName) && !(options === undefined && activeCall[2].queue === false)) {
										return true;
									}

									/* Iterate through the calls targeted by the stop command. */
									$.each(elements, function(l, element) {
										/* Check that this call was applied to the target element. */
										if (element === activeElement) {
											/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
											 due to the queue-clearing above. */
											if (options === true || Type.isString(options)) {
												/* Iterate through the items in the element's queue. */
												$.each($.queue(element, Type.isString(options) ? options : ""), function(_, item) {
													/* The queue array can contain an "inprogress" string, which we skip. */
													if (Type.isFunction(item)) {
														/* Pass the item's callback a flag indicating that we want to abort from the queue call.
														 (Specifically, the queue will resolve the call's associated promise then abort.)  */
														item(null, true);
													}
												});

												/* Clearing the $.queue() array is achieved by resetting it to []. */
												$.queue(element, Type.isString(options) ? options : "", []);
											}

											if (propertiesMap === "stop") {
												/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
												 changed to reflect the final value that the elements were actually tweened to. */
												/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
												 object. Also, queue:false animations can't be reversed. */
												var data = Data(element);
												if (data && data.tweensContainer && queueName !== false) {
													$.each(data.tweensContainer, function(m, activeTween) {
														activeTween.endValue = activeTween.currentValue;
													});
												}

												callsToStop.push(i);
											} else if (propertiesMap === "finish" || propertiesMap === "finishAll") {
												/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
												 they finish upon the next rAf tick then proceed with normal call completion logic. */
												activeCall[2].duration = 1;
											}
										}
									});
								});
							}
						});

						/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
						 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
						if (propertiesMap === "stop") {
							$.each(callsToStop, function(i, j) {
								completeCall(j, true);
							});

							if (promiseData.promise) {
								/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
								promiseData.resolver(elements);
							}
						}

						/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
						return getChain();

					default:
						/* Treat a non-empty plain object as a literal properties map. */
						if ($.isPlainObject(propertiesMap) && !Type.isEmptyObject(propertiesMap)) {
							action = "start";

							/****************
							 Redirects
							 ****************/

							/* Check if a string matches a registered redirect (see Redirects above). */
						} else if (Type.isString(propertiesMap) && Velocity.Redirects[propertiesMap]) {
							opts = $.extend({}, options);

							var durationOriginal = opts.duration,
									delayOriginal = opts.delay || 0;

							/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
							if (opts.backwards === true) {
								elements = $.extend(true, [], elements).reverse();
							}

							/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
							$.each(elements, function(elementIndex, element) {
								/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
								if (parseFloat(opts.stagger)) {
									opts.delay = delayOriginal + (parseFloat(opts.stagger) * elementIndex);
								} else if (Type.isFunction(opts.stagger)) {
									opts.delay = delayOriginal + opts.stagger.call(element, elementIndex, elementsLength);
								}

								/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
								 the duration of each element's animation, using floors to prevent producing very short durations. */
								if (opts.drag) {
									/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
									opts.duration = parseFloat(durationOriginal) || (/^(callout|transition)/.test(propertiesMap) ? 1000 : DURATION_DEFAULT);

									/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
									 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
									 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
									opts.duration = Math.max(opts.duration * (opts.backwards ? 1 - elementIndex / elementsLength : (elementIndex + 1) / elementsLength), opts.duration * 0.75, 200);
								}

								/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
								 reduce the opts checking logic required inside the redirect. */
								Velocity.Redirects[propertiesMap].call(element, element, opts || {}, elementIndex, elementsLength, elements, promiseData.promise ? promiseData : undefined);
							});

							/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
							 (The performance overhead up to this point is virtually non-existant.) */
							/* Note: The jQuery call chain is kept intact by returning the complete element set. */
							return getChain();
						} else {
							var abortError = "Velocity: First argument (" + propertiesMap + ") was not a property map, a known action, or a registered redirect. Aborting.";

							if (promiseData.promise) {
								promiseData.rejecter(new Error(abortError));
							} else {
								console.log(abortError);
							}

							return getChain();
						}
				}

				/**************************
				 Call-Wide Variables
				 **************************/

				/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
				 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
				 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
				 conversion metrics across Velocity animations that are not immediately consecutively chained. */
				var callUnitConversionData = {
					lastParent: null,
					lastPosition: null,
					lastFontSize: null,
					lastPercentToPxWidth: null,
					lastPercentToPxHeight: null,
					lastEmToPx: null,
					remToPx: null,
					vwToPx: null,
					vhToPx: null
				};

				/* A container for all the ensuing tween data and metadata associated with this call. This container gets pushed to the page-wide
				 Velocity.State.calls array that is processed during animation ticking. */
				var call = [];

				/************************
				 Element Processing
				 ************************/

				/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
				 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
				 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
				 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
				 `elementArrayIndex` allows passing index of the element in the original array to value functions.
				 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
				 */
				function processElement(element, elementArrayIndex) {

					/*************************
					 Part I: Pre-Queueing
					 *************************/

					/***************************
					 Element-Wide Variables
					 ***************************/

					var /* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
							opts = $.extend({}, Velocity.defaults, options),
							/* A container for the processed data associated with each property in the propertyMap.
							 (Each property in the map produces its own "tween".) */
							tweensContainer = {},
							elementUnitConversionData;

					/******************
					 Element Init
					 ******************/

					if (Data(element) === undefined) {
						Velocity.init(element);
					}

					/******************
					 Option: Delay
					 ******************/

					/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
					/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
					 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
					if (parseFloat(opts.delay) && opts.queue !== false) {
						$.queue(element, opts.queue, function(next) {
							/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;

							/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
							 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
							 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */

							/* Temporarily store delayed elements to facilite access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;

							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;

									/* Finally, issue the call */
									next();
								};
							})(callIndex);


							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(next, parseFloat(opts.delay)),
								next: delayComplete
							};
						});
					}

					/*********************
					 Option: Duration
					 *********************/

					/* Support for jQuery's named durations. */
					switch (opts.duration.toString().toLowerCase()) {
						case "fast":
							opts.duration = 200;
							break;

						case "normal":
							opts.duration = DURATION_DEFAULT;
							break;

						case "slow":
							opts.duration = 600;
							break;

						default:
							/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
							opts.duration = parseFloat(opts.duration) || 1;
					}

					/************************
					 Global Option: Mock
					 ************************/

					if (Velocity.mock !== false) {
						/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
						 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
						if (Velocity.mock === true) {
							opts.duration = opts.delay = 1;
						} else {
							opts.duration *= parseFloat(Velocity.mock) || 1;
							opts.delay *= parseFloat(Velocity.mock) || 1;
						}
					}

					/*******************
					 Option: Easing
					 *******************/

					opts.easing = getEasing(opts.easing, opts.duration);

					/**********************
					 Option: Callbacks
					 **********************/

					/* Callbacks must functions. Otherwise, default to null. */
					if (opts.begin && !Type.isFunction(opts.begin)) {
						opts.begin = null;
					}

					if (opts.progress && !Type.isFunction(opts.progress)) {
						opts.progress = null;
					}

					if (opts.complete && !Type.isFunction(opts.complete)) {
						opts.complete = null;
					}

					/*********************************
					 Option: Display & Visibility
					 *********************************/

					/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
					/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
					if (opts.display !== undefined && opts.display !== null) {
						opts.display = opts.display.toString().toLowerCase();

						/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
						if (opts.display === "auto") {
							opts.display = Velocity.CSS.Values.getDisplayType(element);
						}
					}

					if (opts.visibility !== undefined && opts.visibility !== null) {
						opts.visibility = opts.visibility.toString().toLowerCase();
					}

					/**********************
					 Option: mobileHA
					 **********************/

					/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
					 on animating elements. HA is removed from the element at the completion of its animation. */
					/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
					/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
					opts.mobileHA = (opts.mobileHA && Velocity.State.isMobile && !Velocity.State.isGingerbread);

					/***********************
					 Part II: Queueing
					 ***********************/

					/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
					 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
					/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
					 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
					function buildQueue(next) {
						var data, lastTweensContainer;

						/*******************
						 Option: Begin
						 *******************/

						/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
						if (opts.begin && elementsIndex === 0) {
							/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
							try {
								opts.begin.call(elements, elements);
							} catch (error) {
								setTimeout(function() {
									throw error;
								}, 1);
							}
						}

						/*****************************************
						 Tween Data Construction (for Scroll)
						 *****************************************/

						/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
						if (action === "scroll") {
							/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
							var scrollDirection = (/^x$/i.test(opts.axis) ? "Left" : "Top"),
									scrollOffset = parseFloat(opts.offset) || 0,
									scrollPositionCurrent,
									scrollPositionCurrentAlternate,
									scrollPositionEnd;

							/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
							 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
							if (opts.container) {
								/* Ensure that either a jQuery object or a raw DOM element was passed in. */
								if (Type.isWrapped(opts.container) || Type.isNode(opts.container)) {
									/* Extract the raw DOM element from the jQuery wrapper. */
									opts.container = opts.container[0] || opts.container;
									/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
									 (due to the user's natural interaction with the page). */
									scrollPositionCurrent = opts.container["scroll" + scrollDirection]; /* GET */

									/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
									 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
									 the scroll container's current scroll position. */
									scrollPositionEnd = (scrollPositionCurrent + $(element).position()[scrollDirection.toLowerCase()]) + scrollOffset; /* GET */
									/* If a value other than a jQuery object or a raw DOM element was passed in, default to null so that this option is ignored. */
								} else {
									opts.container = null;
								}
							} else {
								/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
								 the appropriate cached property names (which differ based on browser type). */
								scrollPositionCurrent = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + scrollDirection]]; /* GET */
								/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
								scrollPositionCurrentAlternate = Velocity.State.scrollAnchor[Velocity.State["scrollProperty" + (scrollDirection === "Left" ? "Top" : "Left")]]; /* GET */

								/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
								 and therefore end values do not need to be compounded onto current values. */
								scrollPositionEnd = $(element).offset()[scrollDirection.toLowerCase()] + scrollOffset; /* GET */
							}

							/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
							tweensContainer = {
								scroll: {
									rootPropertyValue: false,
									startValue: scrollPositionCurrent,
									currentValue: scrollPositionCurrent,
									endValue: scrollPositionEnd,
									unitType: "",
									easing: opts.easing,
									scrollData: {
										container: opts.container,
										direction: scrollDirection,
										alternateValue: scrollPositionCurrentAlternate
									}
								},
								element: element
							};

							if (Velocity.debug) {
								console.log("tweensContainer (scroll): ", tweensContainer.scroll, element);
							}

							/******************************************
							 Tween Data Construction (for Reverse)
							 ******************************************/

							/* Reverse acts like a "start" action in that a property map is animated toward. The only difference is
							 that the property map used for reverse is the inverse of the map used in the previous call. Thus, we manipulate
							 the previous call to construct our new map: use the previous map's end values as our new map's start values. Copy over all other data. */
							/* Note: Reverse can be directly called via the "reverse" parameter, or it can be indirectly triggered via the loop option. (Loops are composed of multiple reverses.) */
							/* Note: Reverse calls do not need to be consecutively chained onto a currently-animating element in order to operate on cached values;
							 there is no harm to reverse being called on a potentially stale data cache since reverse's behavior is simply defined
							 as reverting to the element's values as they were prior to the previous *Velocity* call. */
						} else if (action === "reverse") {
							data = Data(element);

							/* Abort if there is no prior animation data to reverse to. */
							if (!data) {
								return;
							}

							if (!data.tweensContainer) {
								/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
								$.dequeue(element, opts.queue);

								return;
							} else {
								/*********************
								 Options Parsing
								 *********************/

								/* If the element was hidden via the display option in the previous call,
								 revert display to "auto" prior to reversal so that the element is visible again. */
								if (data.opts.display === "none") {
									data.opts.display = "auto";
								}

								if (data.opts.visibility === "hidden") {
									data.opts.visibility = "visible";
								}

								/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
								 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
								data.opts.loop = false;
								data.opts.begin = null;
								data.opts.complete = null;

								/* Since we're extending an opts object that has already been extended with the defaults options object,
								 we remove non-explicitly-defined properties that are auto-assigned values. */
								if (!options.easing) {
									delete opts.easing;
								}

								if (!options.duration) {
									delete opts.duration;
								}

								/* The opts object used for reversal is an extension of the options object optionally passed into this
								 reverse call plus the options used in the previous Velocity call. */
								opts = $.extend({}, data.opts, opts);

								/*************************************
								 Tweens Container Reconstruction
								 *************************************/

								/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
								lastTweensContainer = $.extend(true, {}, data ? data.tweensContainer : null);

								/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
								for (var lastTween in lastTweensContainer) {
									/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
									if (lastTweensContainer.hasOwnProperty(lastTween) && lastTween !== "element") {
										var lastStartValue = lastTweensContainer[lastTween].startValue;

										lastTweensContainer[lastTween].startValue = lastTweensContainer[lastTween].currentValue = lastTweensContainer[lastTween].endValue;
										lastTweensContainer[lastTween].endValue = lastStartValue;

										/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
										 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
										 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
										if (!Type.isEmptyObject(options)) {
											lastTweensContainer[lastTween].easing = opts.easing;
										}

										if (Velocity.debug) {
											console.log("reverse tweensContainer (" + lastTween + "): " + JSON.stringify(lastTweensContainer[lastTween]), element);
										}
									}
								}

								tweensContainer = lastTweensContainer;
							}

							/*****************************************
							 Tween Data Construction (for Start)
							 *****************************************/

						} else if (action === "start") {

							/*************************
							 Value Transferring
							 *************************/

							/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
							 while the element was in the process of being animated by Velocity, then this current call is safe to use
							 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
							 process whenever possible in order to avoid requerying the DOM. */
							/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
							 then the DOM is queried for the element's current values as a last resort. */
							/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */

							data = Data(element);

							/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
							 to transfer over end values to use as start values. If it's set to true and there is a previous
							 Velocity call to pull values from, do so. */
							if (data && data.tweensContainer && data.isAnimating === true) {
								lastTweensContainer = data.tweensContainer;
							}

							/***************************
							 Tween Data Calculation
							 ***************************/

							/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
							/* Property map values can either take the form of 1) a single value representing the end value,
							 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
							 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
							 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
							var parsePropertyValue = function(valueData, skipResolvingEasing) {
								var endValue, easing, startValue;

								/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
								if (Type.isFunction(valueData)) {
									valueData = valueData.call(element, elementArrayIndex, elementsLength);
								}

								/* Handle the array format, which can be structured as one of three potential overloads:
								 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
								if (Type.isArray(valueData)) {
									/* endValue is always the first item in the array. Don't bother validating endValue's value now
									 since the ensuing property cycling logic does that. */
									endValue = valueData[0];

									/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
									 start value since easings can only be non-hex strings or arrays. */
									if ((!Type.isArray(valueData[1]) && /^[\d-]/.test(valueData[1])) || Type.isFunction(valueData[1]) || CSS.RegEx.isHex.test(valueData[1])) {
										startValue = valueData[1];
										/* Two or three-item array: If the second item is a non-hex string easing name or an array, treat it as an easing. */
									} else if ((Type.isString(valueData[1]) && !CSS.RegEx.isHex.test(valueData[1]) && Velocity.Easings[valueData[1]]) || Type.isArray(valueData[1])) {
										easing = skipResolvingEasing ? valueData[1] : getEasing(valueData[1], opts.duration);

										/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
										startValue = valueData[2];
									} else {
										startValue = valueData[1] || valueData[2];
									}
									/* Handle the single-value format. */
								} else {
									endValue = valueData;
								}

								/* Default to the call's easing if a per-property easing type was not defined. */
								if (!skipResolvingEasing) {
									easing = easing || opts.easing;
								}

								/* If functions were passed in as values, pass the function the current element as its context,
								 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
								if (Type.isFunction(endValue)) {
									endValue = endValue.call(element, elementArrayIndex, elementsLength);
								}

								if (Type.isFunction(startValue)) {
									startValue = startValue.call(element, elementArrayIndex, elementsLength);
								}

								/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
								return [endValue || 0, easing, startValue];
							};

							var fixPropertyValue = function(property, valueData) {
								/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
								var rootProperty = CSS.Hooks.getRoot(property),
										rootPropertyValue = false,
										/* Parse out endValue, easing, and startValue from the property's data. */
										endValue = valueData[0],
										easing = valueData[1],
										startValue = valueData[2],
										pattern;

								/**************************
								 Start Value Sourcing
								 **************************/

								/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
								 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
								 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
								/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
								 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
								if ((!data || !data.isSVG) && rootProperty !== "tween" && CSS.Names.prefixCheck(rootProperty)[1] === false && CSS.Normalizations.registered[rootProperty] === undefined) {
									if (Velocity.debug) {
										console.log("Skipping [" + rootProperty + "] due to a lack of browser support.");
									}
									return;
								}

								/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
								 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
								 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
								if (((opts.display !== undefined && opts.display !== null && opts.display !== "none") || (opts.visibility !== undefined && opts.visibility !== "hidden")) && /opacity|filter/.test(property) && !startValue && endValue !== 0) {
									startValue = 0;
								}

								/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
								 for all of the current call's properties that were *also* animated in the previous call. */
								/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
								if (opts._cacheValues && lastTweensContainer && lastTweensContainer[property]) {
									if (startValue === undefined) {
										startValue = lastTweensContainer[property].endValue + lastTweensContainer[property].unitType;
									}

									/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
									 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
									 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
									rootPropertyValue = data.rootPropertyValueCache[rootProperty];
									/* If values were not transferred from a previous Velocity call, query the DOM as needed. */
								} else {
									/* Handle hooked properties. */
									if (CSS.Hooks.registered[property]) {
										if (startValue === undefined) {
											rootPropertyValue = CSS.getPropertyValue(element, rootProperty); /* GET */
											/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
											 getPropertyValue() will extract the hook from rootPropertyValue. */
											startValue = CSS.getPropertyValue(element, property, rootPropertyValue);
											/* If startValue is already defined via forcefeeding, do not query the DOM for the root property's value;
											 just grab rootProperty's zero-value template from CSS.Hooks. This overwrites the element's actual
											 root property value (if one is set), but this is acceptable since the primary reason users forcefeed is
											 to avoid DOM queries, and thus we likewise avoid querying the DOM for the root property's value. */
										} else {
											/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
											rootPropertyValue = CSS.Hooks.templates[rootProperty][1];
										}
										/* Handle non-hooked properties that haven't already been defined via forcefeeding. */
									} else if (startValue === undefined) {
										startValue = CSS.getPropertyValue(element, property); /* GET */
									}
								}

								/**************************
								 Value Data Extraction
								 **************************/

								var separatedValue,
										endValueUnitType,
										startValueUnitType,
										operator = false;

								/* Separates a property value into its numeric value and its unit type. */
								var separateValue = function(property, value) {
									var unitType,
											numericValue;

									numericValue = (value || "0")
											.toString()
											.toLowerCase()
											/* Match the unit type at the end of the value. */
											.replace(/[%A-z]+$/, function(match) {
												/* Grab the unit type. */
												unitType = match;

												/* Strip the unit type off of value. */
												return "";
											});

									/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
									if (!unitType) {
										unitType = CSS.Values.getUnitType(property);
									}

									return [numericValue, unitType];
								};

								if (startValue !== endValue && Type.isString(startValue) && Type.isString(endValue)) {
									pattern = "";
									var iStart = 0, // index in startValue
											iEnd = 0, // index in endValue
											aStart = [], // array of startValue numbers
											aEnd = [], // array of endValue numbers
											inCalc = 0, // Keep track of being inside a "calc()" so we don't duplicate it
											inRGB = 0, // Keep track of being inside an RGB as we can't use fractional values
											inRGBA = 0; // Keep track of being inside an RGBA as we must pass fractional for the alpha channel

									startValue = CSS.Hooks.fixColors(startValue);
									endValue = CSS.Hooks.fixColors(endValue);
									while (iStart < startValue.length && iEnd < endValue.length) {
										var cStart = startValue[iStart],
												cEnd = endValue[iEnd];

										if (/[\d\.]/.test(cStart) && /[\d\.]/.test(cEnd)) {
											var tStart = cStart, // temporary character buffer
													tEnd = cEnd, // temporary character buffer
													dotStart = ".", // Make sure we can only ever match a single dot in a decimal
													dotEnd = "."; // Make sure we can only ever match a single dot in a decimal

											while (++iStart < startValue.length) {
												cStart = startValue[iStart];
												if (cStart === dotStart) {
													dotStart = ".."; // Can never match two characters
												} else if (!/\d/.test(cStart)) {
													break;
												}
												tStart += cStart;
											}
											while (++iEnd < endValue.length) {
												cEnd = endValue[iEnd];
												if (cEnd === dotEnd) {
													dotEnd = ".."; // Can never match two characters
												} else if (!/\d/.test(cEnd)) {
													break;
												}
												tEnd += cEnd;
											}
											var uStart = CSS.Hooks.getUnit(startValue, iStart), // temporary unit type
													uEnd = CSS.Hooks.getUnit(endValue, iEnd); // temporary unit type

											iStart += uStart.length;
											iEnd += uEnd.length;
											if (uStart === uEnd) {
												// Same units
												if (tStart === tEnd) {
													// Same numbers, so just copy over
													pattern += tStart + uStart;
												} else {
													// Different numbers, so store them
													pattern += "{" + aStart.length + (inRGB ? "!" : "") + "}" + uStart;
													aStart.push(parseFloat(tStart));
													aEnd.push(parseFloat(tEnd));
												}
											} else {
												// Different units, so put into a "calc(from + to)" and animate each side to/from zero
												var nStart = parseFloat(tStart),
														nEnd = parseFloat(tEnd);

												pattern += (inCalc < 5 ? "calc" : "") + "("
														+ (nStart ? "{" + aStart.length + (inRGB ? "!" : "") + "}" : "0") + uStart
														+ " + "
														+ (nEnd ? "{" + (aStart.length + 1) + (inRGB ? "!" : "") + "}" : "0") + uEnd
														+ ")";
												if (nStart) {
													aStart.push(parseFloat(tStart));
													aStart.push(parseFloat(0));
												}
												if (nEnd) {
													aEnd.push(parseFloat(0));
													aEnd.push(parseFloat(tEnd));
												}
											}
										} else if (cStart === cEnd) {
											pattern += cStart;
											iStart++;
											iEnd++;
											// Keep track of being inside a calc()
											if (inCalc === 0 && cStart === "c"
													|| inCalc === 1 && cStart === "a"
													|| inCalc === 2 && cStart === "l"
													|| inCalc === 3 && cStart === "c"
													|| inCalc >= 4 && cStart === "("
													) {
												inCalc++;
											} else if ((inCalc && inCalc < 5)
													|| inCalc >= 4 && cStart === ")" && --inCalc < 5) {
												inCalc = 0;
											}
											// Keep track of being inside an rgb() / rgba()
											if (inRGB === 0 && cStart === "r"
													|| inRGB === 1 && cStart === "g"
													|| inRGB === 2 && cStart === "b"
													|| inRGB === 3 && cStart === "a"
													|| inRGB >= 3 && cStart === "("
													) {
												if (inRGB === 3 && cStart === "a") {
													inRGBA = 1;
												}
												inRGB++;
											} else if (inRGBA && cStart === ",") {
												if (++inRGBA > 3) {
													inRGB = inRGBA = 0;
												}
											} else if ((inRGBA && inRGB < (inRGBA ? 5 : 4))
													|| inRGB >= (inRGBA ? 4 : 3) && cStart === ")" && --inRGB < (inRGBA ? 5 : 4)) {
												inRGB = inRGBA = 0;
											}
										} else {
											inCalc = 0;
											// TODO: changing units, fixing colours
											break;
										}
									}
									if (iStart !== startValue.length || iEnd !== endValue.length) {
										if (Velocity.debug) {
											console.error("Trying to pattern match mis-matched strings [\"" + endValue + "\", \"" + startValue + "\"]");
										}
										pattern = undefined;
									}
									if (pattern) {
										if (aStart.length) {
											if (Velocity.debug) {
												console.log("Pattern found \"" + pattern + "\" -> ", aStart, aEnd, "[" + startValue + "," + endValue + "]");
											}
											startValue = aStart;
											endValue = aEnd;
											endValueUnitType = startValueUnitType = "";
										} else {
											pattern = undefined;
										}
									}
								}

								if (!pattern) {
									/* Separate startValue. */
									separatedValue = separateValue(property, startValue);
									startValue = separatedValue[0];
									startValueUnitType = separatedValue[1];

									/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
									separatedValue = separateValue(property, endValue);
									endValue = separatedValue[0].replace(/^([+-\/*])=/, function(match, subMatch) {
										operator = subMatch;

										/* Strip the operator off of the value. */
										return "";
									});
									endValueUnitType = separatedValue[1];

									/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
									startValue = parseFloat(startValue) || 0;
									endValue = parseFloat(endValue) || 0;

									/***************************************
									 Property-Specific Value Conversion
									 ***************************************/

									/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
									if (endValueUnitType === "%") {
										/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
										 which is identical to the em unit's behavior, so we piggyback off of that. */
										if (/^(fontSize|lineHeight)$/.test(property)) {
											/* Convert % into an em decimal value. */
											endValue = endValue / 100;
											endValueUnitType = "em";
											/* For scaleX and scaleY, convert the value into its decimal format and strip off the unit type. */
										} else if (/^scale/.test(property)) {
											endValue = endValue / 100;
											endValueUnitType = "";
											/* For RGB components, take the defined percentage of 255 and strip off the unit type. */
										} else if (/(Red|Green|Blue)$/i.test(property)) {
											endValue = (endValue / 100) * 255;
											endValueUnitType = "";
										}
									}
								}

								/***************************
								 Unit Ratio Calculation
								 ***************************/

								/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
								 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
								 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
								 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
								 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
								 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
								/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
								 setting values with the target unit type then comparing the returned pixel value. */
								/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
								 of batching the SETs and GETs together upfront outweights the potential overhead
								 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
								/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
								var calculateUnitRatios = function() {

									/************************
									 Same Ratio Checks
									 ************************/

									/* The properties below are used to determine whether the element differs sufficiently from this call's
									 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
									 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
									 this is done to minimize DOM querying. */
									var sameRatioIndicators = {
										myParent: element.parentNode || document.body, /* GET */
										position: CSS.getPropertyValue(element, "position"), /* GET */
										fontSize: CSS.getPropertyValue(element, "fontSize") /* GET */
									},
											/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
											samePercentRatio = ((sameRatioIndicators.position === callUnitConversionData.lastPosition) && (sameRatioIndicators.myParent === callUnitConversionData.lastParent)),
											/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
											sameEmRatio = (sameRatioIndicators.fontSize === callUnitConversionData.lastFontSize);

									/* Store these ratio indicators call-wide for the next element to compare against. */
									callUnitConversionData.lastParent = sameRatioIndicators.myParent;
									callUnitConversionData.lastPosition = sameRatioIndicators.position;
									callUnitConversionData.lastFontSize = sameRatioIndicators.fontSize;

									/***************************
									 Element-Specific Units
									 ***************************/

									/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
									 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
									var measurement = 100,
											unitRatios = {};

									if (!sameEmRatio || !samePercentRatio) {
										var dummy = data && data.isSVG ? document.createElementNS("http://www.w3.org/2000/svg", "rect") : document.createElement("div");

										Velocity.init(dummy);
										sameRatioIndicators.myParent.appendChild(dummy);

										/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
										 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
										/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
										$.each(["overflow", "overflowX", "overflowY"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, "hidden");
										});
										Velocity.CSS.setPropertyValue(dummy, "position", sameRatioIndicators.position);
										Velocity.CSS.setPropertyValue(dummy, "fontSize", sameRatioIndicators.fontSize);
										Velocity.CSS.setPropertyValue(dummy, "boxSizing", "content-box");

										/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
										$.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(i, property) {
											Velocity.CSS.setPropertyValue(dummy, property, measurement + "%");
										});
										/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
										Velocity.CSS.setPropertyValue(dummy, "paddingLeft", measurement + "em");

										/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth = (parseFloat(CSS.getPropertyValue(dummy, "width", null, true)) || 1) / measurement; /* GET */
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight = (parseFloat(CSS.getPropertyValue(dummy, "height", null, true)) || 1) / measurement; /* GET */
										unitRatios.emToPx = callUnitConversionData.lastEmToPx = (parseFloat(CSS.getPropertyValue(dummy, "paddingLeft")) || 1) / measurement; /* GET */

										sameRatioIndicators.myParent.removeChild(dummy);
									} else {
										unitRatios.emToPx = callUnitConversionData.lastEmToPx;
										unitRatios.percentToPxWidth = callUnitConversionData.lastPercentToPxWidth;
										unitRatios.percentToPxHeight = callUnitConversionData.lastPercentToPxHeight;
									}

									/***************************
									 Element-Agnostic Units
									 ***************************/

									/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
									 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
									 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
									 so we calculate it now. */
									if (callUnitConversionData.remToPx === null) {
										/* Default to browsers' default fontSize of 16px in the case of 0. */
										callUnitConversionData.remToPx = parseFloat(CSS.getPropertyValue(document.body, "fontSize")) || 16; /* GET */
									}

									/* Similarly, viewport units are %-relative to the window's inner dimensions. */
									if (callUnitConversionData.vwToPx === null) {
										callUnitConversionData.vwToPx = parseFloat(window.innerWidth) / 100; /* GET */
										callUnitConversionData.vhToPx = parseFloat(window.innerHeight) / 100; /* GET */
									}

									unitRatios.remToPx = callUnitConversionData.remToPx;
									unitRatios.vwToPx = callUnitConversionData.vwToPx;
									unitRatios.vhToPx = callUnitConversionData.vhToPx;

									if (Velocity.debug >= 1) {
										console.log("Unit ratios: " + JSON.stringify(unitRatios), element);
									}
									return unitRatios;
								};

								/********************
								 Unit Conversion
								 ********************/

								/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
								if (/[\/*]/.test(operator)) {
									endValueUnitType = startValueUnitType;
									/* If startValue and endValue differ in unit type, convert startValue into the same unit type as endValue so that if endValueUnitType
									 is a relative unit (%, em, rem), the values set during tweening will continue to be accurately relative even if the metrics they depend
									 on are dynamically changing during the course of the animation. Conversely, if we always normalized into px and used px for setting values, the px ratio
									 would become stale if the original unit being animated toward was relative and the underlying metrics change during the animation. */
									/* Since 0 is 0 in any unit type, no conversion is necessary when startValue is 0 -- we just start at 0 with endValueUnitType. */
								} else if ((startValueUnitType !== endValueUnitType) && startValue !== 0) {
									/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
									/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
									 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
									 which remains past the point of the animation's completion. */
									if (endValue === 0) {
										endValueUnitType = startValueUnitType;
									} else {
										/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
										 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
										elementUnitConversionData = elementUnitConversionData || calculateUnitRatios();

										/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
										/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
										var axis = (/margin|padding|left|right|width|text|word|letter/i.test(property) || /X$/.test(property) || property === "x") ? "x" : "y";

										/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
										 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
										switch (startValueUnitType) {
											case "%":
												/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
												 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
												 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
												startValue *= (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;

											case "px":
												/* px acts as our midpoint in the unit conversion process; do nothing. */
												break;

											default:
												startValue *= elementUnitConversionData[startValueUnitType + "ToPx"];
										}

										/* Invert the px ratios to convert into to the target unit. */
										switch (endValueUnitType) {
											case "%":
												startValue *= 1 / (axis === "x" ? elementUnitConversionData.percentToPxWidth : elementUnitConversionData.percentToPxHeight);
												break;

											case "px":
												/* startValue is already in px, do nothing; we're done. */
												break;

											default:
												startValue *= 1 / elementUnitConversionData[endValueUnitType + "ToPx"];
										}
									}
								}

								/*********************
								 Relative Values
								 *********************/

								/* Operator logic must be performed last since it requires unit-normalized start and end values. */
								/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
								 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
								 50 points is added on top of the current % value. */
								switch (operator) {
									case "+":
										endValue = startValue + endValue;
										break;

									case "-":
										endValue = startValue - endValue;
										break;

									case "*":
										endValue = startValue * endValue;
										break;

									case "/":
										endValue = startValue / endValue;
										break;
								}

								/**************************
								 tweensContainer Push
								 **************************/

								/* Construct the per-property tween object, and push it to the element's tweensContainer. */
								tweensContainer[property] = {
									rootPropertyValue: rootPropertyValue,
									startValue: startValue,
									currentValue: startValue,
									endValue: endValue,
									unitType: endValueUnitType,
									easing: easing
								};
								if (pattern) {
									tweensContainer[property].pattern = pattern;
								}

								if (Velocity.debug) {
									console.log("tweensContainer (" + property + "): " + JSON.stringify(tweensContainer[property]), element);
								}
							};

							/* Create a tween out of each property, and append its associated data to tweensContainer. */
							for (var property in propertiesMap) {

								if (!propertiesMap.hasOwnProperty(property)) {
									continue;
								}
								/* The original property name's format must be used for the parsePropertyValue() lookup,
								 but we then use its camelCase styling to normalize it for manipulation. */
								var propertyName = CSS.Names.camelCase(property),
										valueData = parsePropertyValue(propertiesMap[property]);

								/* Find shorthand color properties that have been passed a hex string. */
								/* Would be quicker to use CSS.Lists.colors.includes() if possible */
								if (CSS.Lists.colors.indexOf(propertyName) >= 0) {
									/* Parse the value data for each shorthand. */
									var endValue = valueData[0],
											easing = valueData[1],
											startValue = valueData[2];

									if (CSS.RegEx.isHex.test(endValue)) {
										/* Convert the hex strings into their RGB component arrays. */
										var colorComponents = ["Red", "Green", "Blue"],
												endValueRGB = CSS.Values.hexToRgb(endValue),
												startValueRGB = startValue ? CSS.Values.hexToRgb(startValue) : undefined;

										/* Inject the RGB component tweens into propertiesMap. */
										for (var i = 0; i < colorComponents.length; i++) {
											var dataArray = [endValueRGB[i]];

											if (easing) {
												dataArray.push(easing);
											}

											if (startValueRGB !== undefined) {
												dataArray.push(startValueRGB[i]);
											}

											fixPropertyValue(propertyName + colorComponents[i], dataArray);
										}
										/* If we have replaced a shortcut color value then don't update the standard property name */
										continue;
									}
								}
								fixPropertyValue(propertyName, valueData);
							}

							/* Along with its property data, store a reference to the element itself onto tweensContainer. */
							tweensContainer.element = element;
						}

						/*****************
						 Call Push
						 *****************/

						/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
						 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
						if (tweensContainer.element) {
							/* Apply the "velocity-animating" indicator class. */
							CSS.Values.addClass(element, "velocity-animating");

							/* The call array houses the tweensContainers for each element being animated in the current call. */
							call.push(tweensContainer);

							data = Data(element);

							if (data) {
								/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
								if (opts.queue === "") {

									data.tweensContainer = tweensContainer;
									data.opts = opts;
								}

								/* Switch on the element's animating flag. */
								data.isAnimating = true;
							}

							/* Once the final element in this call's element set has been processed, push the call array onto
							 Velocity.State.calls for the animation tick to immediately begin processing. */
							if (elementsIndex === elementsLength - 1) {
								/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
								 Anything on this call container is subjected to tick() processing. */
								Velocity.State.calls.push([call, elements, opts, null, promiseData.resolver, null, 0]);

								/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
								if (Velocity.State.isTicking === false) {
									Velocity.State.isTicking = true;

									/* Start the tick loop. */
									tick();
								}
							} else {
								elementsIndex++;
							}
						}
					}

					/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
					if (opts.queue === false) {
						/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
						 we manually inject the delay property here with an explicit setTimeout. */
						if (opts.delay) {

							/* Temporarily store delayed elements to facilitate access for global pause/resume */
							var callIndex = Velocity.State.delayedElements.count++;
							Velocity.State.delayedElements[callIndex] = element;

							var delayComplete = (function(index) {
								return function() {
									/* Clear the temporary element */
									Velocity.State.delayedElements[index] = false;

									/* Finally, issue the call */
									buildQueue();
								};
							})(callIndex);

							Data(element).delayBegin = (new Date()).getTime();
							Data(element).delay = parseFloat(opts.delay);
							Data(element).delayTimer = {
								setTimeout: setTimeout(buildQueue, parseFloat(opts.delay)),
								next: delayComplete
							};
						} else {
							buildQueue();
						}
						/* Otherwise, the call undergoes element queueing as normal. */
						/* Note: To interoperate with jQuery, Velocity uses jQuery's own $.queue() stack for queuing logic. */
					} else {
						$.queue(element, opts.queue, function(next, clearQueue) {
							/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
							 so it's fine if this is repeatedly triggered for each element in the associated call.) */
							if (clearQueue === true) {
								if (promiseData.promise) {
									promiseData.resolver(elements);
								}

								/* Do not continue with animation queueing. */
								return true;
							}

							/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
							 See completeCall() for further details. */
							Velocity.velocityQueueEntryFlag = true;

							buildQueue(next);
						});
					}

					/*********************
					 Auto-Dequeuing
					 *********************/

					/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
					 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
					 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
					 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
					 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
					/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
					 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
					/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
					 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
					if ((opts.queue === "" || opts.queue === "fx") && $.queue(element)[0] !== "inprogress") {
						$.dequeue(element);
					}
				}

				/**************************
				 Element Set Iteration
				 **************************/

				/* If the "nodeType" property exists on the elements variable, we're animating a single element.
				 Place it in an array so that $.each() can iterate over it. */
				$.each(elements, function(i, element) {
					/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
					if (Type.isNode(element)) {
						processElement(element, i);
					}
				});

				/******************
				 Option: Loop
				 ******************/

				/* The loop option accepts an integer indicating how many times the element should loop between the values in the
				 current call's properties map and the element's property values prior to this call. */
				/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
				 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
				 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
				opts = $.extend({}, Velocity.defaults, options);
				opts.loop = parseInt(opts.loop, 10);
				var reverseCallsCount = (opts.loop * 2) - 1;

				if (opts.loop) {
					/* Double the loop count to convert it into its appropriate number of "reverse" calls.
					 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
					for (var x = 0; x < reverseCallsCount; x++) {
						/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
						 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
						 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
						var reverseOptions = {
							delay: opts.delay,
							progress: opts.progress
						};

						/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
						 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
						if (x === reverseCallsCount - 1) {
							reverseOptions.display = opts.display;
							reverseOptions.visibility = opts.visibility;
							reverseOptions.complete = opts.complete;
						}

						animate(elements, "reverse", reverseOptions);
					}
				}

				/***************
				 Chaining
				 ***************/

				/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
				return getChain();
			};

			/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
			Velocity = $.extend(animate, Velocity);
			/* For legacy support, also expose the literal animate method. */
			Velocity.animate = animate;

			/**************
			 Timing
			 **************/

			/* Ticker function. */
			var ticker = window.requestAnimationFrame || rAFShim;

			/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
			 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
			 devices to avoid wasting battery power on inactive tabs. */
			/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
			if (!Velocity.State.isMobile && document.hidden !== undefined) {
				var updateTicker = function() {
					/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
					if (document.hidden) {
						ticker = function(callback) {
							/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
							return setTimeout(function() {
								callback(true);
							}, 16);
						};

						/* The rAF loop has been paused by the browser, so we manually restart the tick. */
						tick();
					} else {
						ticker = window.requestAnimationFrame || rAFShim;
					}
				};

				/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
				updateTicker();

				/* And then run check again every time visibility changes */
				document.addEventListener("visibilitychange", updateTicker);
			}

			/************
			 Tick
			 ************/

			/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
			function tick(timestamp) {
				/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
				 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
				 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
				 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
				 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
				 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
				if (timestamp) {
					/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
					 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
					 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
					var timeCurrent = Velocity.timestamp && timestamp !== true ? timestamp : performance.now();

					/********************
					 Call Iteration
					 ********************/

					var callsLength = Velocity.State.calls.length;

					/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
					 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
					 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
					if (callsLength > 10000) {
						Velocity.State.calls = compactSparseArray(Velocity.State.calls);
						callsLength = Velocity.State.calls.length;
					}

					/* Iterate through each active call. */
					for (var i = 0; i < callsLength; i++) {
						/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
						if (!Velocity.State.calls[i]) {
							continue;
						}

						/************************
						 Call-Wide Variables
						 ************************/

						var callContainer = Velocity.State.calls[i],
								call = callContainer[0],
								opts = callContainer[2],
								timeStart = callContainer[3],
								firstTick = !!timeStart,
								tweenDummyValue = null,
								pauseObject = callContainer[5],
								millisecondsEllapsed = callContainer[6];



						/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
						 We assign timeStart now so that its value is as close to the real animation start time as possible.
						 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
						 between that time and now would cause the first few frames of the tween to be skipped since
						 percentComplete is calculated relative to timeStart.) */
						/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
						 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
						 same style value as the element's current value. */
						if (!timeStart) {
							timeStart = Velocity.State.calls[i][3] = timeCurrent - 16;
						}

						/* If a pause object is present, skip processing unless it has been set to resume */
						if (pauseObject) {
							if (pauseObject.resume === true) {
								/* Update the time start to accomodate the paused completion amount */
								timeStart = callContainer[3] = Math.round(timeCurrent - millisecondsEllapsed - 16);

								/* Remove pause object after processing */
								callContainer[5] = null;
							} else {
								continue;
							}
						}

						millisecondsEllapsed = callContainer[6] = timeCurrent - timeStart;

						/* The tween's completion percentage is relative to the tween's start time, not the tween's start value
						 (which would result in unpredictable tween durations since JavaScript's timers are not particularly accurate).
						 Accordingly, we ensure that percentComplete does not exceed 1. */
						var percentComplete = Math.min((millisecondsEllapsed) / opts.duration, 1);

						/**********************
						 Element Iteration
						 **********************/

						/* For every call, iterate through each of the elements in its set. */
						for (var j = 0, callLength = call.length; j < callLength; j++) {
							var tweensContainer = call[j],
									element = tweensContainer.element;

							/* Check to see if this element has been deleted midway through the animation by checking for the
							 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
							if (!Data(element)) {
								continue;
							}

							var transformPropertyExists = false;

							/**********************************
							 Display & Visibility Toggling
							 **********************************/

							/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
							 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
							if (opts.display !== undefined && opts.display !== null && opts.display !== "none") {
								if (opts.display === "flex") {
									var flexValues = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];

									$.each(flexValues, function(i, flexValue) {
										CSS.setPropertyValue(element, "display", flexValue);
									});
								}

								CSS.setPropertyValue(element, "display", opts.display);
							}

							/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
							if (opts.visibility !== undefined && opts.visibility !== "hidden") {
								CSS.setPropertyValue(element, "visibility", opts.visibility);
							}

							/************************
							 Property Iteration
							 ************************/

							/* For every element, iterate through each property. */
							for (var property in tweensContainer) {
								/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
								if (tweensContainer.hasOwnProperty(property) && property !== "element") {
									var tween = tweensContainer[property],
											currentValue,
											/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
											 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
											easing = Type.isString(tween.easing) ? Velocity.Easings[tween.easing] : tween.easing;

									/******************************
									 Current Value Calculation
									 ******************************/

									if (Type.isString(tween.pattern)) {
										var patternReplace = percentComplete === 1 ?
												function($0, index, round) {
													var result = tween.endValue[index];

													return round ? Math.round(result) : result;
												} :
												function($0, index, round) {
													var startValue = tween.startValue[index],
															tweenDelta = tween.endValue[index] - startValue,
															result = startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));

													return round ? Math.round(result) : result;
												};

										currentValue = tween.pattern.replace(/{(\d+)(!)?}/g, patternReplace);
									} else if (percentComplete === 1) {
										/* If this is the last tick pass (if we've reached 100% completion for this tween),
										 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
										currentValue = tween.endValue;
									} else {
										/* Otherwise, calculate currentValue based on the current delta from startValue. */
										var tweenDelta = tween.endValue - tween.startValue;

										currentValue = tween.startValue + (tweenDelta * easing(percentComplete, opts, tweenDelta));
										/* If no value change is occurring, don't proceed with DOM updating. */
									}
									if (!firstTick && (currentValue === tween.currentValue)) {
										continue;
									}

									tween.currentValue = currentValue;

									/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
									 it can be passed into the progress callback. */
									if (property === "tween") {
										tweenDummyValue = currentValue;
									} else {
										/******************
										 Hooks: Part I
										 ******************/
										var hookRoot;

										/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
										 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
										 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
										 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
										 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
										if (CSS.Hooks.registered[property]) {
											hookRoot = CSS.Hooks.getRoot(property);

											var rootPropertyValueCache = Data(element).rootPropertyValueCache[hookRoot];

											if (rootPropertyValueCache) {
												tween.rootPropertyValue = rootPropertyValueCache;
											}
										}

										/*****************
										 DOM Update
										 *****************/

										/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
										/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
										var adjustedSetData = CSS.setPropertyValue(element, /* SET */
												property,
												tween.currentValue + (IE < 9 && parseFloat(currentValue) === 0 ? "" : tween.unitType),
												tween.rootPropertyValue,
												tween.scrollData);

										/*******************
										 Hooks: Part II
										 *******************/

										/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
										if (CSS.Hooks.registered[property]) {
											/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
											if (CSS.Normalizations.registered[hookRoot]) {
												Data(element).rootPropertyValueCache[hookRoot] = CSS.Normalizations.registered[hookRoot]("extract", null, adjustedSetData[1]);
											} else {
												Data(element).rootPropertyValueCache[hookRoot] = adjustedSetData[1];
											}
										}

										/***************
										 Transforms
										 ***************/

										/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
										if (adjustedSetData[0] === "transform") {
											transformPropertyExists = true;
										}

									}
								}
							}

							/****************
							 mobileHA
							 ****************/

							/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
							 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
							if (opts.mobileHA) {
								/* Don't set the null transform hack if we've already done so. */
								if (Data(element).transformCache.translate3d === undefined) {
									/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
									Data(element).transformCache.translate3d = "(0px, 0px, 0px)";

									transformPropertyExists = true;
								}
							}

							if (transformPropertyExists) {
								CSS.flushTransformCache(element);
							}
						}

						/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
						 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
						if (opts.display !== undefined && opts.display !== "none") {
							Velocity.State.calls[i][2].display = false;
						}
						if (opts.visibility !== undefined && opts.visibility !== "hidden") {
							Velocity.State.calls[i][2].visibility = false;
						}

						/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
						if (opts.progress) {
							opts.progress.call(callContainer[1],
									callContainer[1],
									percentComplete,
									Math.max(0, (timeStart + opts.duration) - timeCurrent),
									timeStart,
									tweenDummyValue);
						}

						/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
						if (percentComplete === 1) {
							completeCall(i);
						}
					}
				}

				/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
				if (Velocity.State.isTicking) {
					ticker(tick);
				}
			}

			/**********************
			 Call Completion
			 **********************/

			/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
			function completeCall(callIndex, isStopped) {
				/* Ensure the call exists. */
				if (!Velocity.State.calls[callIndex]) {
					return false;
				}

				/* Pull the metadata from the call. */
				var call = Velocity.State.calls[callIndex][0],
						elements = Velocity.State.calls[callIndex][1],
						opts = Velocity.State.calls[callIndex][2],
						resolver = Velocity.State.calls[callIndex][4];

				var remainingCallsExist = false;

				/*************************
				 Element Finalization
				 *************************/

				for (var i = 0, callLength = call.length; i < callLength; i++) {
					var element = call[i].element;

					/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
					/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
					/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
					if (!isStopped && !opts.loop) {
						if (opts.display === "none") {
							CSS.setPropertyValue(element, "display", opts.display);
						}

						if (opts.visibility === "hidden") {
							CSS.setPropertyValue(element, "visibility", opts.visibility);
						}
					}

					/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
					 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
					 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
					 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
					 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
					var data = Data(element);

					if (opts.loop !== true && ($.queue(element)[1] === undefined || !/\.velocityQueueEntryFlag/i.test($.queue(element)[1]))) {
						/* The element may have been deleted. Ensure that its data cache still exists before acting on it. */
						if (data) {
							data.isAnimating = false;
							/* Clear the element's rootPropertyValueCache, which will become stale. */
							data.rootPropertyValueCache = {};

							var transformHAPropertyExists = false;
							/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
							$.each(CSS.Lists.transforms3D, function(i, transformName) {
								var defaultValue = /^scale/.test(transformName) ? 1 : 0,
										currentValue = data.transformCache[transformName];

								if (data.transformCache[transformName] !== undefined && new RegExp("^\\(" + defaultValue + "[^.]").test(currentValue)) {
									transformHAPropertyExists = true;

									delete data.transformCache[transformName];
								}
							});

							/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
							if (opts.mobileHA) {
								transformHAPropertyExists = true;
								delete data.transformCache.translate3d;
							}

							/* Flush the subproperty removals to the DOM. */
							if (transformHAPropertyExists) {
								CSS.flushTransformCache(element);
							}

							/* Remove the "velocity-animating" indicator class. */
							CSS.Values.removeClass(element, "velocity-animating");
						}
					}

					/*********************
					 Option: Complete
					 *********************/

					/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
					/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
					if (!isStopped && opts.complete && !opts.loop && (i === callLength - 1)) {
						/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
						try {
							opts.complete.call(elements, elements);
						} catch (error) {
							setTimeout(function() {
								throw error;
							}, 1);
						}
					}

					/**********************
					 Promise Resolving
					 **********************/

					/* Note: Infinite loops don't return promises. */
					if (resolver && opts.loop !== true) {
						resolver(elements);
					}

					/****************************
					 Option: Loop (Infinite)
					 ****************************/

					if (data && opts.loop === true && !isStopped) {
						/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
						 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
						$.each(data.tweensContainer, function(propertyName, tweenContainer) {
							if (/^rotate/.test(propertyName) && ((parseFloat(tweenContainer.startValue) - parseFloat(tweenContainer.endValue)) % 360 === 0)) {
								var oldStartValue = tweenContainer.startValue;

								tweenContainer.startValue = tweenContainer.endValue;
								tweenContainer.endValue = oldStartValue;
							}

							if (/^backgroundPosition/.test(propertyName) && parseFloat(tweenContainer.endValue) === 100 && tweenContainer.unitType === "%") {
								tweenContainer.endValue = 0;
								tweenContainer.startValue = 100;
							}
						});

						Velocity(element, "reverse", {loop: true, delay: opts.delay});
					}

					/***************
					 Dequeueing
					 ***************/

					/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
					 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
					 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
					if (opts.queue !== false) {
						$.dequeue(element, opts.queue);
					}
				}

				/************************
				 Calls Array Cleanup
				 ************************/

				/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
				 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
				Velocity.State.calls[callIndex] = false;

				/* Iterate through the calls array to determine if this was the final in-progress animation.
				 If so, set a flag to end ticking and clear the calls array. */
				for (var j = 0, callsLength = Velocity.State.calls.length; j < callsLength; j++) {
					if (Velocity.State.calls[j] !== false) {
						remainingCallsExist = true;

						break;
					}
				}

				if (remainingCallsExist === false) {
					/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
					Velocity.State.isTicking = false;

					/* Clear the calls array so that its length is reset. */
					delete Velocity.State.calls;
					Velocity.State.calls = [];
				}
			}

			/******************
			 Frameworks
			 ******************/

			/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
			 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
			 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
			 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
			 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
			global.Velocity = Velocity;

			if (global !== window) {
				/* Assign the element function to Velocity's core animate() method. */
				global.fn.velocity = animate;
				/* Assign the object function's defaults to Velocity's global defaults object. */
				global.fn.velocity.defaults = Velocity.defaults;
			}

			/***********************
			 Packaged Redirects
			 ***********************/

			/* slideUp, slideDown */
			$.each(["Down", "Up"], function(i, direction) {
				Velocity.Redirects["slide" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							begin = opts.begin,
							complete = opts.complete,
							inlineValues = {},
							computedValues = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""};

					if (opts.display === undefined) {
						/* Show the element before slideDown begins and hide the element after slideUp completes. */
						/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
						opts.display = (direction === "Down" ? (Velocity.CSS.Values.getDisplayType(element) === "inline" ? "inline-block" : "block") : "none");
					}

					opts.begin = function() {
						/* If the user passed in a begin callback, fire it now. */
						if (elementsIndex === 0 && begin) {
							begin.call(elements, elements);
						}

						/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
						for (var property in computedValues) {
							if (!computedValues.hasOwnProperty(property)) {
								continue;
							}
							inlineValues[property] = element.style[property];

							/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
							 use forcefeeding to start from computed values and animate down to 0. */
							var propertyValue = CSS.getPropertyValue(element, property);
							computedValues[property] = (direction === "Down") ? [propertyValue, 0] : [0, propertyValue];
						}

						/* Force vertical overflow content to clip so that sliding works as expected. */
						inlineValues.overflow = element.style.overflow;
						element.style.overflow = "hidden";
					};

					opts.complete = function() {
						/* Reset element to its pre-slide inline values once its slide animation is complete. */
						for (var property in inlineValues) {
							if (inlineValues.hasOwnProperty(property)) {
								element.style[property] = inlineValues[property];
							}
						}

						/* If the user passed in a complete callback, fire it now. */
						if (elementsIndex === elementsSize - 1) {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						}
					};

					Velocity(element, computedValues, opts);
				};
			});

			/* fadeIn, fadeOut */
			$.each(["In", "Out"], function(i, direction) {
				Velocity.Redirects["fade" + direction] = function(element, options, elementsIndex, elementsSize, elements, promiseData) {
					var opts = $.extend({}, options),
							complete = opts.complete,
							propertiesMap = {opacity: (direction === "In") ? 1 : 0};

					/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
					 callbacks by firing them only when the final element has been reached. */
					if (elementsIndex !== 0) {
						opts.begin = null;
					}
					if (elementsIndex !== elementsSize - 1) {
						opts.complete = null;
					} else {
						opts.complete = function() {
							if (complete) {
								complete.call(elements, elements);
							}
							if (promiseData) {
								promiseData.resolver(elements);
							}
						};
					}

					/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
					/* Note: We allow users to pass in "null" to skip display setting altogether. */
					if (opts.display === undefined) {
						opts.display = (direction === "In" ? "auto" : "none");
					}

					Velocity(this, propertiesMap, opts);
				};
			});

			return Velocity;
		}((window.jQuery || window.Zepto || window), window, (window ? window.document : undefined));
	}));

	/******************
	 Known Issues
	 ******************/

	/* The CSS spec mandates that the translateX/Y/Z transforms are %-relative to the element itself -- not its parent.
	 Velocity, however, doesn't make this distinction. Thus, converting to or from the % unit with these subproperties
	 will produce an inaccurate conversion value. The same issue exists with the cx/cy attributes of SVG circles and ellipses. */


/***/ },
/* 390 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  left: {
	    opacity: [1, 0],
	    translateX: [0, -30]
	  },
	  top: {
	    opacity: [1, 0],
	    translateY: [0, -30]
	  },
	  right: {
	    opacity: [1, 0],
	    translateX: [0, 30]
	  },
	  bottom: {
	    opacity: [1, 0],
	    translateY: [0, 30]
	  },
	  alpha: {
	    opacity: [1, 0]
	  },
	  scale: {
	    opacity: [1, 0],
	    scale: [1, 0]
	  },
	  scaleBig: {
	    opacity: [1, 0],
	    scale: [1, 2]
	  },
	  scaleX: {
	    opacity: [1, 0],
	    scaleX: [1, 0]
	  },
	  scaleY: {
	    opacity: [1, 0],
	    scaleY: [1, 0]
	  }
	};

/***/ },
/* 391 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <slot></slot>\n</div>\n";

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _rate = __webpack_require__(393);

	var _rate2 = _interopRequireDefault(_rate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _rate2.default;

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(394)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/rate/rate.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(395)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-59ef3ba7/rate.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 394 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'v-rate',
	  data: function data() {
	    return {
	      prefix: 'ant-rate',
	      value: 0
	    };
	  },
	  props: {
	    count: {
	      type: Number,
	      default: 5,
	      coerce: function coerce(val) {
	        return Math.round(val);
	      }
	    },
	    defaultValue: {
	      type: Number,
	      default: 0
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    },
	    allowHalf: {
	      type: Boolean,
	      default: false
	    }
	  },
	  computed: {
	    lightArr: function lightArr() {
	      var arr = new Array(this.count);
	      for (var i = 0; i < parseInt(this.value); i++) {
	        arr[i] = this.prefix + '-star-full';
	      }
	      if (parseInt(this.value) !== this.value) {
	        arr[i] = this.prefix + '-star-half';
	      }
	      return arr;
	    }
	  },
	  methods: {
	    recovery: function recovery() {
	      this.value = this.defaultValue;
	    },
	    allLight: function allLight(index) {
	      if (this.disabled) return;
	      this.value = index + 1;
	    },
	    halfLight: function halfLight(index, e) {
	      if (this.disabled) return;
	      if (this.allowHalf) {
	        this.value = index + 0.5;
	        e.stopPropagation();
	      }
	    },
	    selected: function selected() {
	      if (this.disabled) return;
	      this.defaultValue = this.value;
	      this.onChange(this.value);
	    },
	    valueHandle: function valueHandle(val) {
	      if (val > this.count) {
	        return this.count;
	      }
	      if (this.allowHalf) {
	        var _v = parseInt(val);
	        if (_v !== val) {
	          val = _v + 0.5;
	        }
	        return val;
	      } else {
	        return Math.round(val);
	      }
	    }
	  },
	  created: function created() {
	    this.value = this.defaultValue = this.valueHandle(this.defaultValue);
	  }
	};

/***/ },
/* 395 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"[prefix,{[prefix+'-disabled']: disabled}]\" @mouseout=\"recovery\">\n  <li class=\"{{prefix}}-star {{item}}\" v-for=\"item in lightArr\" track-by=\"$index\" @mouseover=\"allLight($index)\" @click=\"selected\">\n    <div :class=\"prefix+'-star-content'\"  @mouseover=\"halfLight($index,$event)\"></div>\n  </li>\n</ul>\n";

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slider = __webpack_require__(397);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _slider2.default;

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(398)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/slider/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(416)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6d1c9e72/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slider = __webpack_require__(399);

	var _slider2 = _interopRequireDefault(_slider);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-slider',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-slider',
	    tipTransitionName: 'zoom-down',
	    min: 0,
	    max: 100,
	    step: 1,
	    range: false,
	    marks: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    defaultValue: (0, _utils.oneOfType)([Number, Array], 0),
	    value: (0, _utils.oneOfType)([Number, Array]),
	    included: true,
	    disabled: false,
	    onChange: function onChange() {},

	    tipFormatter: function tipFormatter(value) {
	      return value;
	    }
	  }),

	  components: { Slider: _slider2.default }
	};

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slider = __webpack_require__(400);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _slider2.default;

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(401)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/base/slider/slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(415)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2d66c56e/slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(385);

	var _keys2 = _interopRequireDefault(_keys);

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _defaultProps;

	var _utils = __webpack_require__(100);

	var _track = __webpack_require__(402);

	var _track2 = _interopRequireDefault(_track);

	var _handle = __webpack_require__(405);

	var _handle2 = _interopRequireDefault(_handle);

	var _dots = __webpack_require__(409);

	var _dots2 = _interopRequireDefault(_dots);

	var _marks = __webpack_require__(412);

	var _marks2 = _interopRequireDefault(_marks);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isNotTouchEvent = function isNotTouchEvent(e) {
	  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
	};

	var getTouchPosition = function getTouchPosition(e) {
	  return e.touches[0].pageX;
	};

	var getMousePosition = function getMousePosition(e) {
	  return e.pageX;
	};

	var pauseEvent = function pauseEvent(e) {
	  e.stopPropagation();
	  e.preventDefault();
	};

	exports.default = {
	  props: (0, _utils.defaultProps)((_defaultProps = {
	    prefixCls: 'vc-slider',
	    className: '',
	    tipTransitionName: '',
	    min: 0,
	    max: 100,
	    step: 1,
	    value: (0, _utils.oneOfType)([Number, Array]),
	    defaultValue: (0, _utils.oneOfType)([Number, Array], 0),
	    marks: {},
	    included: true,
	    disabled: false,
	    dots: false,
	    range: false
	  }, (0, _defineProperty3.default)(_defaultProps, 'tipTransitionName', String), (0, _defineProperty3.default)(_defaultProps, 'tipFormatter', function tipFormatter(value) {
	    return value;
	  }), (0, _defineProperty3.default)(_defaultProps, 'onBeforeChange', function onBeforeChange() {}), (0, _defineProperty3.default)(_defaultProps, 'onChange', function onChange() {}), (0, _defineProperty3.default)(_defaultProps, 'onAfterChange', function onAfterChange() {}), _defaultProps)),

	  data: function data() {
	    return {
	      handle: null,
	      recent: null,
	      lowerBound: null,
	      upperBound: null
	    };
	  },


	  components: { Track: _track2.default, Handle: _handle2.default, Dots: _dots2.default, Marks: _marks2.default },

	  compiled: function compiled() {
	    var _$data = this.$data,
	        range = _$data.range,
	        min = _$data.min,
	        max = _$data.max;

	    var initialValue = range ? [min, min] : min;
	    var defaultValue = this.defaultValue != null ? this.defaultValue : initialValue;
	    var value = this.value != null ? this.value : defaultValue;

	    var upperBound = void 0;
	    var lowerBound = void 0;
	    if (this.range) {
	      lowerBound = this._trimAlignValue(value[0]);
	      upperBound = this._trimAlignValue(value[1]);
	    } else {
	      upperBound = this._trimAlignValue(value);
	    }

	    var recent = void 0;
	    if (this.range && upperBound === lowerBound) {
	      if (lowerBound === max) {
	        recent = 'lowerBound';
	      }
	      if (upperBound === min) {
	        recent = 'upperBound';
	      }
	    } else {
	      recent = 'upperBound';
	    }

	    this.recent = recent, this.upperBound = upperBound, this.lowerBound = lowerBound || min;
	  },


	  computed: {
	    sliderClasses: function sliderClasses() {
	      return [this.prefixCls, (0, _defineProperty3.default)({}, this.prefixCls + '-disabled', this.disabled), (0, _defineProperty3.default)({}, this.className, !!this.className)];
	    },
	    isNoTip: function isNoTip() {
	      return this.step === null && !this.tipFormatter;
	    },
	    upperOffset: function upperOffset() {
	      return this._calcOffset(this.upperBound);
	    },
	    lowerOffset: function lowerOffset() {
	      return this._calcOffset(this.lowerBound);
	    }
	  },

	  methods: {
	    _onChange: function _onChange(handle, value) {
	      var isNotControlled = this.value == null;
	      if (isNotControlled) {
	        this.$set(handle, value);
	      }

	      var data = {
	        upperBound: this.upperBound,
	        lowerBound: this.lowerBound
	      };
	      data[handle] = value;
	      var changedValue = this.range ? [data.lowerBound, data.upperBound] : data.upperBound;
	      this.onChange(changedValue);
	    },
	    _onTouchStart: function _onTouchStart(e) {
	      if (this.disabled) {
	        return;
	      }
	      if (isNotTouchEvent(e)) {
	        return;
	      }

	      var position = getTouchPosition(e);
	      this._onStart(position);
	      this._addDocumentEvents('touch');
	      pauseEvent(e);
	    },
	    _onTouchMove: function _onTouchMove(e) {
	      if (isNotTouchEvent(e)) {
	        this._end('touch');
	        return;
	      }

	      var position = getTouchPosition(e);
	      this._onMove(e, position);
	    },
	    _onMouseDown: function _onMouseDown(e) {
	      if (this.disabled) {
	        return;
	      }
	      var position = getMousePosition(e);
	      this._onStart(position);
	      this._addDocumentEvents('mouse');
	      pauseEvent(e);
	    },
	    _onMouseMove: function _onMouseMove(e) {
	      var position = getMousePosition(e);
	      this._onMove(e, position);
	    },
	    _onStart: function _onStart(position) {
	      this.onBeforeChange(this._getValue());

	      var value = this._calcValueByPos(position);
	      this.startValue = value;
	      this.startPosition = position;

	      var upperBound = this.upperBound,
	          lowerBound = this.lowerBound;


	      var valueNeedChanging = 'upperBound';
	      if (this.range) {
	        var isLowerBoundCloser = Math.abs(upperBound - value) > Math.abs(lowerBound - value);
	        if (isLowerBoundCloser) {
	          valueNeedChanging = 'lowerBound';
	        }

	        var isAtTheSamePoint = upperBound === lowerBound;
	        if (isAtTheSamePoint) {
	          valueNeedChanging = this.recent;
	        }

	        if (isAtTheSamePoint && value !== upperBound) {
	          valueNeedChanging = value < upperBound ? 'lowerBound' : 'upperBound';
	        }
	      }

	      this.handle = valueNeedChanging;
	      this.recent = valueNeedChanging;

	      var oldValue = this[valueNeedChanging];
	      if (value === oldValue) return;

	      this._onChange(valueNeedChanging, value);
	    },
	    _onMove: function _onMove(e, position) {
	      pauseEvent(e);
	      var diffPosition = position - this.startPosition;
	      var diffValue = diffPosition / this._getSliderLength() * (this.max - this.min);

	      var value = this._trimAlignValue(this.startValue + diffValue);
	      var oldValue = this[this.handle];
	      if (value === oldValue) return;

	      this._onChange(this.handle, value);
	    },
	    _addDocumentEvents: function _addDocumentEvents(type) {
	      if (type === 'touch') {
	        this.onTouchMoveListener = (0, _utils.addEventListener)(document, 'touchmove', this._onTouchMove.bind(this));
	        this.onTouchUpListener = (0, _utils.addEventListener)(document, 'touchend', this._end.bind(this, 'touch'));
	      } else if (type === 'mouse') {
	        this.onMouseMoveListener = (0, _utils.addEventListener)(document, 'mousemove', this._onMouseMove.bind(this));
	        this.onMouseUpListener = (0, _utils.addEventListener)(document, 'mouseup', this._end.bind(this, 'mouse'));
	      }
	    },
	    _removeEvents: function _removeEvents(type) {
	      if (type === 'touch') {
	        this.onTouchMoveListener.remove();
	        this.onTouchUpListener.remove();
	      } else if (type === 'mouse') {
	        this.onMouseMoveListener.remove();
	        this.onMouseUpListener.remove();
	      }
	    },
	    _end: function _end(type) {
	      this._removeEvents(type);
	      this.onAfterChange(this._getValue());
	      this.handle = null;
	    },
	    _getValue: function _getValue() {
	      var lowerBound = this.lowerBound,
	          upperBound = this.upperBound;

	      return this.range ? [lowerBound, upperBound] : upperBound;
	    },
	    _getSliderLength: function _getSliderLength() {
	      var slider = this.$el;
	      if (!slider) {
	        return 0;
	      }

	      return slider.clientWidth;
	    },
	    _getSliderStart: function _getSliderStart() {
	      var slider = this.$el;
	      var rect = slider.getBoundingClientRect();

	      return rect.left;
	    },
	    _getPrecision: function _getPrecision() {
	      var stepString = this.step.toString();
	      var precision = 0;
	      if (stepString.indexOf('.') >= 0) {
	        precision = stepString.length - stepString.indexOf('.') - 1;
	      }
	      return precision;
	    },
	    _trimAlignValue: function _trimAlignValue(v) {
	      var handle = this.handle,
	          lowerBound = this.lowerBound,
	          upperBound = this.upperBound,
	          marks = this.marks,
	          step = this.step,
	          min = this.min,
	          max = this.max;


	      var val = v;
	      if (val <= min) {
	        val = min;
	      }
	      if (val >= max) {
	        val = max;
	      }
	      if (handle === 'upperBound' && val <= lowerBound) {
	        val = lowerBound;
	      }
	      if (handle === 'lowerBound' && val >= upperBound) {
	        val = upperBound;
	      }

	      var points = (0, _keys2.default)(marks).map(parseFloat);
	      if (step !== null) {
	        var closestStep = Math.round(val / step) * step;
	        points.push(closestStep);
	      }

	      var diffs = points.map(function (point) {
	        return Math.abs(val - point);
	      });
	      var closestPoint = points[diffs.indexOf(Math.min.apply(Math, diffs))];

	      return step !== null ? parseFloat(closestPoint.toFixed(this._getPrecision())) : closestPoint;
	    },
	    _calcOffset: function _calcOffset(value) {
	      var min = this.min,
	          max = this.max;

	      var ratio = (value - min) / (max - min);
	      return ratio * 100;
	    },
	    _calcValue: function _calcValue(offset) {
	      var min = this.min,
	          max = this.max;

	      var ratio = offset / this._getSliderLength();
	      return ratio * (max - min) + min;
	    },
	    _calcValueByPos: function _calcValueByPos(position) {
	      var pixelOffset = position - this._getSliderStart();
	      var nextValue = this._trimAlignValue(this._calcValue(pixelOffset));
	      return nextValue;
	    }
	  }
	};

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(403)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/base/slider/track.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(404)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-30d5b213/track.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 403 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ['offset', 'length', 'included', 'className'],
	  computed: {
	    wrapStyle: function wrapStyle() {
	      return {
	        left: this.offset + '%',
	        width: this.length + '%',
	        visibility: this.included ? 'visible' : 'hidden'
	      };
	    }
	  }
	};

/***/ },
/* 404 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"className\" :style=\"wrapStyle\"></div>\n";

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(406)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/base/slider/handle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(408)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1dd49710/handle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tooltip = __webpack_require__(407);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['className', 'offset', 'tipTransitionName', 'tipFormatter', 'value', 'dragging', 'noTip'],

	  directive: { vTooltip: _tooltip2.default },

	  data: function data() {
	    return {
	      isTooltipVisible: false
	    };
	  },


	  computed: {
	    tipValue: function tipValue() {
	      return this.tipFormatter ? this.tipFormatter(this.value) : this.value;
	    }
	  },

	  methods: {
	    _showTooltip: function _showTooltip() {
	      this.isTooltipVisible = true;
	    },
	    _hideTooltip: function _hideTooltip() {
	      this.isTooltipVisible = false;
	    }
	  }
	};

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _dom = __webpack_require__(101);

	var tipVm = void 0;

	exports.default = {
	    install: function install(Vue, options) {
	        var TipComponent = Vue.extend({
	            template: '\n                <div class="ant-tooltip ant-tooltip-placement-{{place}}" v-if="show" transition="fade">\n                    <div class="ant-tooltip-content">\n                            <div class="ant-tooltip-arrow"></div>\n                            <div class="ant-tooltip-inner"><span>{{{tip}}}</span></div>\n                    </div>\n                </div>'
	        });

	        var tooltip = Vue.directive('tooltip', {
	            openTrigger: 'mouseenter',
	            closeTrigger: 'mouseleave',
	            leftFactor: 0.5,
	            topFactor: 0.5,
	            bind: function bind() {
	                if (this.arg === 'focus') {
	                    this.openTrigger = 'focus';
	                    this.closeTrigger = 'blur';
	                }

	                this.place = Object.keys(this.modifiers)[0] || 'top';

	                if (this.place.toUpperCase().includes('LEFT')) {
	                    this.leftFactor = 0;
	                } else if (this.place.toUpperCase().includes('RIGHT')) {
	                    this.leftFactor = 1;
	                }
	                if (this.place.toUpperCase().includes('TOP')) {
	                    this.topFactor = 0;
	                } else if (this.place.toUpperCase().includes('BOTTOM')) {
	                    this.topFactor = 1;
	                }

	                this.el.addEventListener(this.openTrigger, this.open.bind(this));
	                this.el.addEventListener(this.closeTrigger, this.close.bind(this));
	                this.el.addEventListener('click', this.close.bind(this));
	            },
	            update: function update(value) {
	                this.value = value;
	            },
	            unbind: function unbind() {
	                this.el.removeEventListener(this.openTrigger, this.open);
	                this.el.removeEventListener(this.closeTrigger, this.close);
	            },

	            getOffset: function getOffset(el) {
	                var x = 0;
	                var y = 0;
	                var ele = el;
	                while (ele) {
	                    x += parseInt(ele.offsetLeft, 10);
	                    y += parseInt(ele.offsetTop, 10);
	                    ele = ele.offsetParent;
	                }
	                return { top: y, left: x };
	            },

	            open: function open() {
	                var _this = this;

	                setTimeout(function () {
	                    if (!_this.el) return;
	                    var offset = _this.getOffset(_this.el);
	                    var eleWidth = _this.el.offsetWidth;
	                    var eleHeight = _this.el.offsetHeight;

	                    tipVm = _this.vm = new TipComponent({
	                        data: {
	                            tip: _this.value,
	                            show: true,
	                            place: _this.place
	                        }
	                    }).$mount().$appendTo('body');

	                    _this.tooltip = _this.vm.$el.nextElementSibling;

	                    _this.tooltip.addEventListener('mouseover', function () {
	                        clearTimeout(_this.closeTimer);
	                    });
	                    _this.tooltip.addEventListener('mouseout', _this.close.bind(_this));
	                    _this.tooltip.addEventListener('click', _this.close.bind(_this));

	                    (0, _dom.addStyle)(_this.tooltip, {
	                        left: offset.left + eleWidth * _this.leftFactor + 'px',
	                        top: offset.top + eleHeight * _this.topFactor + 'px'
	                    });
	                }, 100);
	            },

	            close: function close() {
	                if (this.vm) {
	                    this.closeTimer = setTimeout(function () {
	                        tipVm.show = false;
	                    }, 100);
	                }
	            }
	        });
	    }
	};

/***/ },
/* 408 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"noTip\"\n  :class=\"className\"\n  :style=\"{left: offset + '%'}\"\n  @mouseup=\"_showTooltip\"\n  @mouseenter=\"_showTooltip\"\n  @mouseleave=\"_hideTooltip\"></div>\n<div v-else\n     v-tooltip='tipValue'\n     :class=\"className\"\n     :style=\"{left: offset + '%'}\"\n     @mouseup=\"_showTooltip\"\n     @mouseenter=\"_showTooltip\"\n     @mouseleave=\"_hideTooltip\"></div>\n";

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(410)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/base/slider/dots.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(411)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-db387f9c/dots.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _keys = __webpack_require__(385);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var calcPoints = function calcPoints(marks, dots, step, min, max) {
	  var points = (0, _keys2.default)(marks).map(parseFloat);
	  if (dots) {
	    for (var i = min; i <= max; i = i + step) {
	      points.push(i);
	    }
	  }
	  return points;
	};

	exports.default = {
	  props: ['prefixCls', 'marks', 'dots', 'step', 'included', 'lowerBound', 'upperBound', 'max', 'min'],

	  computed: {
	    dotsArr: function dotsArr() {
	      var _this = this;

	      calcPoints(this.marks, this.dots, this.step, this.min, this.max).map(function (point) {
	        var res = {};
	        var offset = (point - _this.min) / _this.range * 100 + '%';
	        res.point = point;
	        res.style = { left: offset };
	        res.isActived = !_this.included && point === _this.upperBound || _this.included && point <= _this.upperBound && point >= _this.lowerBound;
	        res.pointClass = [prefixCls + '-dot', (0, _defineProperty3.default)({}, prefixCls + '-dot-active', res.isActived)];
	        return res;
	      });
	    }
	  }
	};

/***/ },
/* 411 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"prefixCls + '-step'\">\n  <span v-for=\"item in dotsArr\" :class=\"item.pointClass\" :style=\"item.style\" :key=\"item.point\"></span>\n</div>\n";

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(413)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/base/slider/marks.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(414)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6337c2e4/marks.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _keys = __webpack_require__(385);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['className', 'marks', 'included', 'upperBound', 'lowerBound', 'max', 'min'],

	  computed: {
	    marksKeys: function marksKeys() {
	      return (0, _keys2.default)(this.marks);
	    },
	    marksArr: function marksArr() {
	      var _this = this;

	      return this.marksKeys.map(parseFloat).map(function (point) {
	        var res = {};
	        res.point = point;
	        res.isActived = !_this.included && point === _this.upperBound || _this.included && point <= _this.upperBound && point >= _this.lowerBound;
	        res.className = [_this.className + '-text', (0, _defineProperty3.default)({}, _this.className + '-text-active', res.isActived)];
	        res.style = { width: _this.markWidth + '%', left: (point - _this.min) / _this.range * 100 - _this.markWidth / 2 + '%' };
	      });
	    },
	    markWidth: function markWidth() {
	      return 100 / (this.marksKeys.length - 1) * 0.9;
	    }
	  }
	};

/***/ },
/* 414 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"className\">\n  <span\n    v-for=\"item in marksArr\"\n    :class=\"item.className\"\n    :style=\"item.style\"\n    :key=\"item.point\">\n   {{marks[item.point]}}\n  </span>\n</div>\n";

/***/ },
/* 415 */
/***/ function(module, exports) {

	module.exports = "\n<div\n  :class=\"sliderClasses\"\n  @touchstart=\"_onTouchStart\"\n  @mousedown=\"_onMouseDown\">\n  <handle\n    :class-name=\"prefixCls + '-handle'\"\n    :no-tip=\"isNoTip\"\n    :tip-transition-name=\"tipTransitionName\"\n    :tip-formatter=\"tipFormatter\"\n    :offset=\"upperOffset\"\n    :value=\"upperBound\"\n    :dragging=\"handle === 'upperBound'\"></handle>\n  <handle\n    v-if=\"range\"\n    :class-name=\"prefixCls + '-handle'\"\n    :no-tip=\"isNoTip\"\n    :tip-transition-name=\"tipTransitionName\"\n    :tip-formatter=\"tipFormatter\"\n    :offset=\"lowerOffset\"\n    :value=\"lowerBound\"\n    :dragging=\"handle === 'lowerBound'\"></handle>\n  <track\n    :class=\"prefixCls + '-track'\"\n    :included=\"included\"\n    :offset=\"lowerOffset\"\n    :length=\"upperOffset - lowerOffset\"></track>\n  <dots\n    :prefix-cls=\"prefixCls\"\n    :marks=\"marks\"\n    :dots=\"dots\"\n    :step=\"step\"\n    :included=\"included\"\n    :lower-bound=\"lowerBound\"\n    :upper-bound=\"upperBound\"\n    :max=\"max\"\n    :min=\"min\"></dots>\n  <marks\n    :class=\"prefixCls + '-mark'\"\n    :marks=\"marks\"\n    :included=\"included\"\n    :lower-bound=\"lowerBound\"\n    :upper-bound=\"upperBound\"\n    :max=\"max\"\n    :min=\"min\"></marks>\n  <slot></slot>\n</div>\n";

/***/ },
/* 416 */
/***/ function(module, exports) {

	module.exports = "\n<slider\n  :prefix-cls=\"prefixCls\"\n  :tip-transition-name=\"tipTransitionName\"\n  :min=\"min\"\n  :max=\"max\"\n  :step=\"step\"\n  :marks=\"marks\"\n  :default-value=\"defaultValue\"\n  :value=\"value\"\n  :range=\"range\"\n  :included=\"included\"\n  :disabled=\"disabled\"\n  :on-change=\"onChange\"\n  :tip-formatter=\"tipFormatter\"></slider>\n";

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _steps = __webpack_require__(418);

	var _steps2 = _interopRequireDefault(_steps);

	var _step = __webpack_require__(421);

	var _step2 = _interopRequireDefault(_step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_steps2.default.Step = _step2.default;

	exports.default = _steps2.default;

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(419)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/steps/steps.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(420)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e3fd5d92/steps.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-steps',
	  props: {
	    current: {
	      type: Number,
	      default: 0
	    },
	    status: String,
	    size: {
	      type: String,
	      default: 'process'
	    },
	    direction: String
	  },
	  data: function data() {
	    return {
	      prefixCls: 'ant-steps',
	      maxDescriptionWidth: '100px'
	    };
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      return ['ant-steps', (0, _defineProperty3.default)({}, 'ant-steps-small', this.size === 'small'), (0, _defineProperty3.default)({}, 'ant-steps-vertical', this.direction === 'vertical')];
	    }
	  },
	  watch: {
	    current: function current() {
	      this.handStatus();
	    }
	  },
	  ready: function ready() {
	    if (this.direction === 'vertical') {
	      this.maxDescriptionWidth = 'auto';
	    }
	    this.handStatus(true);
	    this.handleTailWidth();
	  },
	  attached: function attached() {},
	  methods: {
	    handStatus: function handStatus(isInit) {
	      var _this = this;

	      var len = this.$children.length - 1;
	      this.$children.forEach(function (child, index) {
	        child.maxDescriptionWidth = _this.maxDescriptionWidth;
	        child.stepNumber = (index + 1).toString();
	        child.stepLast = index === len;

	        if (isInit && child.status) {
	          return;
	        }

	        if (_this.status) {
	          if (index === _this.current) {
	            _this.$children[index - 1].rootStatus = _this.status;
	            child.status = _this.status;
	          } else if (index < _this.current) {
	            child.status = 'finish';
	          } else {
	            child.status = 'wait';
	          }
	        } else {
	          if (index === _this.current) {
	            child.status = 'process';
	          } else if (index < _this.current) {
	            child.status = 'finish';
	          } else {
	            child.status = 'wait';
	          }
	        }
	      });
	    },
	    handleTailWidth: function handleTailWidth() {
	      if (this.direction === 'vertical') {
	        return;
	      }
	      var dom = this.$el;
	      var len = this.$el.children.length - 1;
	      if (len < 0) return;
	      var width = this.$children[len].$el.offsetWidth;

	      this.$children.forEach(function (child, index) {

	        if (index == len) {
	          child.tailWidth = 'auto';
	        } else {
	          child.tailWidth = Math.floor((dom.offsetWidth - width - 1) / len) + 'px';
	        }
	      });
	    }
	  }
	};

/***/ },
/* 420 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"wrapClasses\">\n   <slot></slot>\n</div>\n\n";

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(422)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/steps/step.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(423)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5a2c0528/step.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-step',
	  props: {
	    status: String,
	    title: String,
	    description: String,
	    icon: String
	  },
	  data: function data() {
	    return {
	      stepLast: Boolean,
	      stepNumber: 1,
	      iconPrefix: '',
	      maxDescriptionWidth: '',
	      tailWidth: String,
	      rootStatus: false
	    };
	  },
	  computed: {
	    iconName: function iconName() {
	      return this.icon ? this.icon : 'check';
	    },
	    wrapClasses: function wrapClasses() {
	      return ['ant-steps-item', 'ant-steps-status-' + this.status, (0, _defineProperty3.default)({}, 'ant-steps-item-last', this.stepLast), (0, _defineProperty3.default)({}, 'ant-steps-next-' + this.rootStatus, this.rootStatus), (0, _defineProperty3.default)({}, 'ant-steps-custom', this.icon)];
	    }
	  }
	};

/***/ },
/* 423 */
/***/ function(module, exports) {

	module.exports = "\n\n<div :class=\"wrapClasses\" :style=\"{'width': tailWidth}\">\n  <div class=\"ant-steps-tail\" v-if=\"!stepLast\"><i></i></div>\n  <div class=\"ant-steps-head\">\n    <div class=\"ant-steps-head-inner\">\n      <span v-if=\"!icon && status !== 'finish'\" class=\"ant-steps-icon\">{{stepNumber}}</span>\n      <span v-else :class=\"'ant-steps-icon anticon anticon-' + iconName\"></span>\n    </div>\n  </div>\n\n  <div class=\"ant-steps-main\" :style=\"{'maxWidth': maxDescriptionWidth}\">\n    <div class=\"ant-steps-title\">{{title}}</div>\n    <div v-if=\"description\" class=\"ant-steps-description\">{{description}}</div>\n  </div>\n\n</div>\n\n";

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _switch = __webpack_require__(425);

	var _switch2 = _interopRequireDefault(_switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _switch2.default;

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(426)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/switch/switch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(427)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-17fa2d67/switch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 426 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-switch',
	  data: function data() {
	    return {
	      prefix: 'ant-switch'
	    };
	  },
	  props: {
	    size: {
	      type: String
	    },
	    checked: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    },
	    onChange: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	  computed: {
	    wrapClasses: function wrapClasses() {
	      var size = ['small'].indexOf(this.size) !== -1 ? this.size : '';

	      return [this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-checked', this.checked), (0, _defineProperty3.default)({}, this.prefix + '-disabled', this.disabled), (0, _defineProperty3.default)({}, this.prefix + '-' + size, size)];
	    }
	  },
	  methods: {
	    _toggle: function _toggle() {
	      if (this.disabled) return;
	      this.checked = !this.checked;
	      this.onChange(this.checked);
	    }
	  }
	};

/***/ },
/* 427 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\" @click=\"_toggle\">\n  <span :class=\"prefix + '-inner'\">\n    <slot v-if=\"checked\" name=\"checkedChildren\"></slot>\n    <slot v-if=\"!checked\" name=\"unCheckedChildren\"></slot>\n  </span>\n</span>\n";

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tabs = __webpack_require__(429);

	var _tabs2 = _interopRequireDefault(_tabs);

	var _tabPane = __webpack_require__(432);

	var _tabPane2 = _interopRequireDefault(_tabPane);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_tabs2.default.TabPane = _tabPane2.default;

	exports.default = _tabs2.default;

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(430)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/tabs/tabs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(431)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66956332/tabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray2 = __webpack_require__(169);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _entries = __webpack_require__(244);

	var _entries2 = _interopRequireDefault(_entries);

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-tabs',
	    data: function data() {
	        return {
	            prefix: 'ant-tabs',
	            activeIndex: 0,
	            tabs: [],
	            tabWidth: 0,
	            tabMarginRight: 0,
	            isScroll: false,
	            nav_w: 0,
	            navScroll_w: 0
	        };
	    },
	    props: (0, _utils.defaultProps)({
	        activeKey: String
	    }),
	    ready: function ready() {
	        var _this = this;

	        var temp_tabs = [];
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = (0, _getIterator3.default)((0, _entries2.default)(this.$children)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
	                    index = _step$value[0],
	                    child = _step$value[1];

	                var temp = {};
	                temp.tab = child.tab;
	                temp.key = child.key;
	                temp.disabled = child.disabled;
	                temp_tabs.push(temp);

	                if (this.activeKey === child.key) {
	                    this.activeIndex = index;
	                    this.$broadcast('activeKey', this.activeKey);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }

	        this.$set('tabs', temp_tabs);

	        this.$nextTick(function () {
	            var tab = _this.$el.querySelector('.ant-tabs-tab');
	            _this.tabWidth = tab.offsetWidth;
	            _this.tabMarginRight = parseInt(getComputedStyle(tab, false).marginRight);

	            _this.nav_w = _this.$els.nav.offsetWidth;
	            _this.navScroll_w = _this.$els.navScroll.offsetWidth;

	            if (_this.navScroll_w < _this.nav_w) _this.isScroll = true;
	        });
	    },

	    methods: {
	        selectTab: function selectTab(index) {
	            this.activeIndex = index;
	            this.activeKey = this.tabs[index].key;
	            this.$broadcast('activeKey', this.activeKey);
	        },
	        next: function next() {
	            var now = getComputedStyle(this.$els.nav, false).transform;
	            console.log(now);
	        }
	    },
	    computed: {
	        containerCls: function containerCls() {
	            return ['ant-tabs-nav-container', { 'ant-tabs-nav-container-scrolling': this.isScroll }];
	        },
	        barSty: function barSty() {
	            return {
	                transform: 'translate3d(' + (this.tabWidth + this.tabMarginRight) * this.activeIndex + 'px, 0px, 0px)',
	                width: this.tabWidth + 'px'
	            };
	        },
	        contentSty: function contentSty() {
	            return {
	                'margin-left': -100 * this.activeIndex + '%'
	            };
	        }
	    }
	};

/***/ },
/* 431 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ant-tabs ant-tabs-top ant-tabs-line\">\n    <div role=\"tablist\" class=\"ant-tabs-bar\" tabindex=\"0\">\n        <div :class=\"containerCls\">\n            <span v-if=\"isScroll\" unselectable=\"unselectable\" class=\"ant-tabs-tab-prev ant-tabs-tab-btn-disabled\"><span class=\"ant-tabs-tab-prev-icon\"></span></span>\n            <span v-if=\"isScroll\" unselectable=\"unselectable\" class=\"ant-tabs-tab-next\" @click=\"next\"><span class=\"ant-tabs-tab-next-icon\"></span></span>\n            <div class=\"ant-tabs-nav-wrap\">\n                <div class=\"ant-tabs-nav-scroll\" v-el:nav-scroll>\n                    <div class=\"ant-tabs-nav\" v-el:nav style=\"transform:translate3d(0px, 0px, 0px)\">\n                        <div class=\"ant-tabs-ink-bar ant-tabs-ink-bar-transition-forward\" :style=\"barSty\"></div>\n                        <div role=\"tab\" aria-disabled=\"false\" aria-selected=\"false\" :class=\"['ant-tabs-tab',{'ant-tabs-tab-active': $index == activeIndex},{'ant-tabs-tab-disabled':tab.disabled}]\" v-for=\"tab in tabs\" @click=\"selectTab($index)\">\n                            <div class=\"ant-tabs-tab-inner\">\n                                {{tab.tab}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"ant-tabs-content ant-tabs-content-animated\" :style=\"contentSty\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(433)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/tabs/tabPane.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(434)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6643fbc4/tabPane.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-tab-pane',
	    data: function data() {
	        return {
	            prefix: 'ant-tabs-tabpane',
	            selected: false
	        };
	    },
	    props: (0, _utils.defaultProps)({
	        key: String,
	        disabled: false,
	        tab: String
	    }),
	    ready: function ready() {
	        var _this = this;

	        this.$on('activeKey', function (key) {
	            _this.selected = key === _this.key;
	        });
	    },

	    computed: {
	        wrapCls: function wrapCls() {
	            return [this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-active', this.selected), (0, _defineProperty3.default)({}, this.prefix + '-inactive', !this.selected)];
	        }
	    }
	};

/***/ },
/* 434 */
/***/ function(module, exports) {

	module.exports = "\n<div role=\"tabpanel\" aria-hidden=\"false\" :class=\"wrapCls\">\n    <slot></slot>\n</div>\n";

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tag = __webpack_require__(436);

	var _tag2 = _interopRequireDefault(_tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tag2.default;

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(437)
	__vue_script__ = __webpack_require__(439)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/tag/tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(440)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a17328c6/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(438);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(129)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./tag.vue", function() {
				var newContent = require("!!./../../../node_modules/.0.26.1@css-loader/index.js!./../../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(87)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n", ""]);

	// exports


/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-tag',
	  props: {
	    color: {
	      type: String
	    },
	    closable: {
	      type: Boolean,
	      default: false
	    }
	  },
	  data: function data() {
	    return {
	      prefix: 'ant-tag',
	      show: true
	    };
	  },

	  computed: {
	    wrapClasses: function wrapClasses() {
	      return [this.prefix, (0, _defineProperty3.default)({}, this.prefix + '-' + this.color, this.color)];
	    }
	  },
	  methods: {
	    remove: function remove() {
	      this.show = false;
	      this.$emit('close');
	    }
	  }
	};

/***/ },
/* 440 */
/***/ function(module, exports) {

	module.exports = "\n<div v-if=\"show\" :class=\"wrapClasses\" transition=\"fade\">\n  <span class=\"ant-tag-text\"><slot></slot></span>\n  <i class=\"anticon anticon-cross\" v-if=\"closable\" @click=\"remove\"></i>\n</div>\n";

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _timeline = __webpack_require__(442);

	var _timeline2 = _interopRequireDefault(_timeline);

	var _timelineItem = __webpack_require__(445);

	var _timelineItem2 = _interopRequireDefault(_timelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_timeline2.default.Item = _timelineItem2.default;

	exports.default = _timeline2.default;

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(443)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/timeline/timeline.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(448)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a3e26d72/timeline.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(100);

	var _vue = __webpack_require__(444);

	var _vue2 = _interopRequireDefault(_vue);

	var _timelineItem = __webpack_require__(445);

	var _timelineItem2 = _interopRequireDefault(_timelineItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	    name: 'v-timeline',
	    props: (0, _utils.defaultProps)({
	        prefixCls: 'ant-timeline',
	        pending: (0, _utils.oneOfType)([Boolean, String])
	    }),
	    ready: function ready() {
	        this._mapPropsToChildComponent();
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            return ['' + this.prefixCls, _defineProperty({}, this.prefixCls + '-pending', !!this.pending)];
	        }
	    },
	    methods: {
	        _mapPropsToChildComponent: function _mapPropsToChildComponent() {
	            var len = this.$children.length;
	            this.$children.forEach(function (child, index) {
	                child.last = index === len - 1;
	            });

	            if (this.pending) {
	                var pendingNode = typeof this.pending === 'boolean' ? '' : this.pending;

	                var _TimelineItem = _vue2.default.extend({
	                    template: '<v-timeline-item :pending="true">' + pendingNode + '</v-timeline-item>',
	                    components: { vTimelineItem: _timelineItem2.default }
	                });

	                new _TimelineItem().$mount().$appendTo(this.$el);
	            }
	        }
	    }
	};

/***/ },
/* 444 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_444__;

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(446)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/timeline/timelineItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(447)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7b97f77a/timelineItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-timeline-item',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-timeline',
	    color: 'blue',
	    last: false,
	    pending: Boolean,
	    dot: String
	  }),
	  computed: {
	    itemClassName: function itemClassName() {
	      return [this.prefixCls + '-item', (0, _defineProperty3.default)({}, this.prefixCls + '-item-last', this.last), (0, _defineProperty3.default)({}, this.prefixCls + '-item-pending', this.pending)];
	    },
	    dotClassName: function dotClassName() {
	      return [this.prefixCls + '-item-head', this.prefixCls + '-item-head-' + this.color, (0, _defineProperty3.default)({}, this.prefixCls + '-item-head-custom', this.dot)];
	    }
	  },
	  methods: {
	    compile: function compile(elem) {
	      if (elem) {
	        return elem;
	      }
	    }
	  }
	};

/***/ },
/* 447 */
/***/ function(module, exports) {

	module.exports = "\n<li :class=\"itemClassName\">\n  <div :class=\"prefixCls + '-item-tail'\"></div>\n  <div :class=\"dotClassName\" :style=\"{ borderColor: 'blue|red|green'.indexOf(color) > -1 ? null : color }\">{{{ compile(dot) }}}</div>\n  <div class=\"ant-timeline-item-content\">\n    <slot></slot>\n  </div>\n</li>\n";

/***/ },
/* 448 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"wrapClasses\">\n    <slot></slot>\n</ul>\n";

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _timePicker = __webpack_require__(450);

	var _timePicker2 = _interopRequireDefault(_timePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _timePicker2.default;

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(451)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/timePicker/timePicker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(452)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-7c9fc4f2/timePicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _timePickerOption = __webpack_require__(278);

	var _timePickerOption2 = _interopRequireDefault(_timePickerOption);

	var _func = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-time-picker',
	    data: function data() {
	        return {
	            prefix: 'ant-time-picker',
	            style: {},
	            dropDown: false,
	            container: null,
	            selected: false
	        };
	    },
	    props: {
	        popupContainer: {
	            type: Function,
	            default: function _default() {
	                return document.body;
	            }
	        },
	        position: {
	            type: String,
	            default: 'absolute'
	        },
	        size: String,
	        format: String,
	        disabled: Boolean,
	        value: String,
	        hideDisabledOptions: {
	            type: Boolean,
	            default: false
	        },
	        disabledHours: Function,
	        disabledMinutes: Function,
	        disabledSeconds: Function
	    },
	    created: function created() {
	        document.addEventListener('click', this.backdrop);
	    },

	    computed: {
	        wrapClasses: function wrapClasses() {
	            return [this.prefix, this.prefix + '-' + this.size];
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        this.container = this.popupContainer();
	        this.$els.timePickerOption.style.position = this.position;
	        this.container.appendChild(this.$els.timePickerOption);

	        this.$nextTick(function () {
	            _this.setPosition();
	        });
	        var timer = null;
	        window.addEventListener('resize', function () {
	            clearTimeout(timer);
	            timer = setTimeout(function () {
	                if (!_this.disabled) {
	                    _this.setPosition();
	                }
	            }, 200);
	        });
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.backdrop);
	        window.removeEventListener('resize', this.backdrop);
	        var node = this.$els.timePickerOption;
	        node && document.body.removeChild(node);
	    },

	    methods: {
	        timePicker: function timePicker() {
	            this.selected = !this.selected;
	        },
	        setPosition: function setPosition() {
	            if (!this.$el) {
	                return;
	            }
	            var p = (0, _func.getOffset)(this.$els.timePicker, this.container);

	            this.$set('style', {
	                top: p.top + 'px',
	                left: p.left + 'px'
	            });
	        },
	        backdrop: function backdrop(e) {
	            if (!(0, _func.closeByElement)(e.target, [this.$els.timePicker, this.$els.timePickerOption])) {
	                this.$set('selected', false);
	            }
	        }
	    },
	    components: {
	        timePickerNode: _timePickerOption2.default
	    }
	};

/***/ },
/* 452 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"wrapClasses\">\n    <input type=\"text\" class=\"ant-time-picker-input\" placeholder=\"请选择时间\" @click=\"timePicker\" v-model=\"value\" v-el:time-picker readonly disabled=\"{{disabled}}\">\n    <span class=\"ant-time-picker-icon\"></span>\n    <time-picker-node transition=\"fade\" v-show=\"selected\" :selected.sync=\"selected\" :hide-disabled=\"hideDisabledOptions\" :style=\"style\" :time-value.sync=\"value\" :local-format=\"format\" :disabled-h=\"disabledHours\" :disabled-m=\"disabledMinutes\" :disabled-s=\"disabledSeconds\" v-el:time-picker-option></time-picker-node>\n</span>\n";

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _transfer = __webpack_require__(454);

	var _transfer2 = _interopRequireDefault(_transfer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _transfer2.default;

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(455)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/transfer/transfer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(473)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-2031a887/transfer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _toConsumableArray2 = __webpack_require__(456);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _utils = __webpack_require__(100);

	var _list = __webpack_require__(464);

	var _list2 = _interopRequireDefault(_list);

	var _operation = __webpack_require__(470);

	var _operation2 = _interopRequireDefault(_operation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}
	exports.default = {
		name: 'v-transfer',
		props: (0, _utils.defaultProps)({
			prefixCls: 'ant-transfer',
			dataSource: [],
			render: noop,
			targetKeys: [],
			onChange: noop,
			listStyle: Object,
			className: String,
			titles: ['源列表', '目的列表'],
			operations: [],
			showSearch: false,
			filterOption: Function,
			searchPlaceholder: '请输入搜索内容',
			notFoundContent: '列表为空',
			footer: noop
		}),
		data: function data() {
			return {
				leftCheckedKeys: [],
				rightCheckedKeys: [],
				leftDataSource: [],
				rightDataSource: [],
				leftActive: false,
				rightActive: false,
				leftFilter: '',
				rightFilter: '',
				hasFooter: false
			};
		},
		ready: function ready() {
			this.hasFooter = !!this._slotContents && !!this._slotContents.default;
		},

		watch: {
			leftCheckedKeys: function leftCheckedKeys() {
				this.leftActive = this.leftCheckedKeys.length > 0;
			},
			rightCheckedKeys: function rightCheckedKeys() {
				this.rightActive = this.rightCheckedKeys.length > 0;
			},
			targetKeys: function targetKeys() {
				this.splitDataSource();
			}
		},
		created: function created() {
			var _this = this;

			this.leftCheckedKeys = this.leftCheckedKeys.filter(function (data) {
				return _this.dataSource.filter(function (item) {
					return item.key === data;
				}).length;
			}).filter(function (data) {
				return _this.targetKeys.filter(function (key) {
					return key === data;
				}).length === 0;
			});

			this.rightCheckedKeys = this.rightCheckedKeys.filter(function (data) {
				return _this.dataSource.filter(function (item) {
					return item.key === data;
				}).length;
			}).filter(function (data) {
				return _this.targetKeys.filter(function (key) {
					return key === data;
				}).length > 0;
			});
			this.splitDataSource();
		},

		methods: {
			splitDataSource: function splitDataSource() {
				var _this2 = this;

				this.leftDataSource = [].concat((0, _toConsumableArray3.default)(this.dataSource));
				this.rightDataSource = [];
				if (this.targetKeys.length > 0) {
					this.targetKeys.forEach(function (targetKey) {
						_this2.rightDataSource.push(_this2.leftDataSource.filter(function (data, index) {
							if (data.key === targetKey) {
								_this2.leftDataSource.splice(index, 1);
								return true;
							}
							return false;
						})[0]);
					});
				}
			},
			handleLeftSelect: function handleLeftSelect(selectedItem, checked) {
				this.handleSelect('left', selectedItem, checked);
			},
			handleRightSelect: function handleRightSelect(selectedItem, checked) {
				this.handleSelect('right', selectedItem, checked);
			},
			handleSelect: function handleSelect(direction, selectedItem, checked) {
				var leftCheckedKeys = this.leftCheckedKeys;
				var rightCheckedKeys = this.rightCheckedKeys;
				var holder = direction === 'left' ? [].concat((0, _toConsumableArray3.default)(leftCheckedKeys)) : [].concat((0, _toConsumableArray3.default)(rightCheckedKeys));
				var index = void 0;
				holder.forEach(function (key, i) {
					if (key === selectedItem.key) {
						index = i;
					}
				});
				if (index > -1) {
					holder.splice(index, 1);
				}
				if (checked) {
					holder.push(selectedItem.key);
				}
				this[direction + 'CheckedKeys'] = holder;
			},
			handleSelectAll: function handleSelectAll(direction, filteredDataSource, checkAll) {
				var holder = checkAll ? [] : filteredDataSource.map(function (item) {
					return item.key;
				});
				this[direction + 'CheckedKeys'] = holder;
			},
			handleLeftSelectAll: function handleLeftSelectAll() {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				this.handleSelectAll.apply(this, ['left'].concat(args));
			},
			handleRightSelectAll: function handleRightSelectAll() {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				this.handleSelectAll.apply(this, ['right'].concat(args));
			},
			moveTo: function moveTo(direction) {
				var targetKeys = this.targetKeys;
				var key = direction === 'right' ? 'leftCheckedKeys' : 'rightCheckedKeys';
				var moveKeys = this[key];
				var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
					return !moveKeys.some(function (checkedKey) {
						return targetKey === checkedKey;
					});
				});
				this[key] = [];
				this.onChange(newTargetKeys, direction, moveKeys);
			},
			moveToLeft: function moveToLeft() {
				this.moveTo('left');
			},
			moveToRight: function moveToRight() {
				this.moveTo('right');
			},
			handleLeftClear: function handleLeftClear() {
				this.leftFilter = '';
			},
			handleRightClear: function handleRightClear() {
				this.rightFilter = '';
			},
			handleLeftFilter: function handleLeftFilter(value) {
				this.leftFilter = value;
			},
			handleRightFilter: function handleRightFilter(value) {
				this.rightFilter = value;
			}
		},
		components: {
			list: _list2.default,
			operation: _operation2.default
		}
	};

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(457);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 457 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(458), __esModule: true };

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(203);
	__webpack_require__(459);
	module.exports = __webpack_require__(137).Array.from;

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(138)
	  , $export        = __webpack_require__(135)
	  , toObject       = __webpack_require__(202)
	  , call           = __webpack_require__(460)
	  , isArrayIter    = __webpack_require__(461)
	  , toLength       = __webpack_require__(191)
	  , createProperty = __webpack_require__(462)
	  , getIterFn      = __webpack_require__(210);

	$export($export.S + $export.F * !__webpack_require__(463)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(142);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 461 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(176)
	  , ITERATOR   = __webpack_require__(200)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(141)
	  , createDesc      = __webpack_require__(149);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(200)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 464 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(465)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/transfer/list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(469)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e4171c8c/list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils = __webpack_require__(100);

	var _checkbox = __webpack_require__(215);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _search = __webpack_require__(466);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}
	exports.default = {
		props: (0, _utils.defaultProps)({
			prefixCls: '',
			dataSource: [],
			handleSelect: noop,
			handleSelectAll: noop,
			checkedKeys: [],
			render: noop,
			filter: '',
			titleText: '',
			handleFilter: noop,
			handleClear: noop,
			style: Object,
			className: '',
			showSearch: false,
			searchPlaceholder: '',
			notFoundContent: '',
			filterOption: Function,
			hasFooter: false
		}),
		data: function data() {
			return {
				checkAll: false,
				checkPart: false,
				disabled: false,
				filteredDataSource: [],
				showItems: []
			};
		},
		created: function created() {
			this.setFilteredDataSource();
		},

		watch: {
			checkedKeys: function checkedKeys() {
				var checkStatus = this.getCheckStatus(this.filteredDataSource);
				this.checkAll = checkStatus === 'all';
				this.checkPart = checkStatus === 'part';
			},
			dataSource: function dataSource() {
				this.setFilteredDataSource();
			},
			filter: function filter() {
				this.setFilteredDataSource();
			}
		},
		methods: {
			showLabel: function showLabel(item) {
				var result = this.render(item);
				return result.label ? result.label : result;
			},
			setFilteredDataSource: function setFilteredDataSource() {
				var _this = this;

				this.filteredDataSource = [];
				this.showItems = this.dataSource.map(function (item) {
					var renderResult = _this.render(item);
					var renderedText = void 0;
					var renderedEl = void 0;
					if (renderResult.value) {
						renderedText = renderResult.value;
						renderedEl = renderResult.label;
					} else {
						renderedText = renderResult;
						renderedEl = renderResult;
					}
					if (_this.filter && _this.filter.trim() && !_this.matchFilter(item, renderedText, _this.filter)) {
						return null;
					}
					_this.filteredDataSource.push(item);
					return item;
				}).filter(function (item) {
					return !!item;
				});
			},
			isCheck: function isCheck(item) {
				return this.checkedKeys.some(function (key) {
					return key === item.key;
				});
			},
			select: function select(selectedItem) {
				var result = this.checkedKeys.some(function (key) {
					return key === selectedItem.key;
				});
				this.handleSelect(selectedItem, !result);
			},
			selectAll: function selectAll() {
				this.handleSelectAll(this.filteredDataSource, this.checkAll);
			},
			getCheckStatus: function getCheckStatus(filteredDataSource) {
				var _this2 = this;

				if (this.checkedKeys.length === 0) {
					return 'none';
				} else if (filteredDataSource.every(function (item) {
					return _this2.checkedKeys.indexOf(item.key) >= 0;
				})) {
					return 'all';
				}
				return 'part';
			},
			matchFilter: function matchFilter(result, text, filterText) {
				if (this.filterOption) {
					return this.filterOption(filterText, result);
				}
				return text.indexOf(filterText) >= 0;
			}
		},
		components: {
			vCheckbox: _checkbox2.default,
			vSearch: _search2.default
		}
	};

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(467)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/transfer/search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(468)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3d0d7e78/search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 467 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils = __webpack_require__(100);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {};
	exports.default = {
		props: (0, _utils.defaultProps)({
			prefixCls: '',
			placeholder: [],
			onChange: noop,
			handleClear: noop,
			value: '',
			searchPlaceholder: ''
		}),
		data: function data() {
			return {};
		},

		methods: {
			handleChange: function handleChange() {
				this.onChange(this.value);
			},
			clear: function clear(e) {
				e.preventDefault();
				this.handleClear();
			}
		},
		components: {
			vIcon: _iconfont2.default
		}
	};

/***/ },
/* 468 */
/***/ function(module, exports) {

	module.exports = "\n\t<div>\n\t\t<input \n\t\t\tplaceholder=\"{{searchPlaceholder}}\"\n\t\t\t:class=\"[prefixCls, 'ant-input']\"\n\t\t\t@input=\"handleChange\"\n\t\t\tv-model=\"value\">\n\t\t<a href=\"#\" \n\t\t\tv-if=\"value && value.length > 0\"\n\t\t\t:class=\"`${prefixCls}-action`\" \n\t\t\t@click=\"clear($event)\">\n      <v-icon type=\"cross-circle\"></v-icon>\n    </a>\n    <span\n    \tv-else\n    \t:class=\"prefixCls + '-action'\">\n    \t<v-icon type=\"search\"></v-icon>\n    </span>\n\t</div>\n";

/***/ },
/* 469 */
/***/ function(module, exports) {

	module.exports = "\n<div \n\t:class=\"[\n\t\tprefixCls, \n\t\tclassName ? className : '',\n\t\thasFooter ? prefixCls + '-with-footer' : ''\n\t]\"\n\t:style=\"style\">\n\t<div \n\t  :class=\"prefixCls + '-header'\">\n\t  <span \n\t  \t:class=\"[\n\t  \t\t'ant-transfer-checkbox',\n\t  \t\t{'ant-transfer-checkbox-indeterminate': checkPart},\n\t  \t\t{'ant-transfer-checkbox-checked': checkAll},\n\t  \t\t{'ant-transfer-checkbox-disabled': disabled}\n\t  \t]\" \n\t  \t@click=\"selectAll\">\n      <span class=\"ant-transfer-checkbox-inner\"></span>\n      <input type=\"checkbox\" class=\"ant-checkbox-input\">\n    </span>\n\t  <span \n\t    :class=\"prefixCls + '-header-selected'\">\n\t    <span>\n\t    {{(checkedKeys.length > 0 ? `${checkedKeys.length}/` : '') + dataSource.length + '条'}}\n\t    </span>\n\t  \t<span :class=\"prefixCls + '-header-title'\">{{titleText}}</span>\n\t  </span>\n\t</div>\n\t<div \n\t  :class=\"[\n\t  \tprefixCls + '-body',\n\t  \t{'ant-transfer-list-body-with-search': showSearch}\n\t  ]\">\n\t  <div\n\t  \tv-if=\"showSearch\"\n\t  \t:class=\"prefixCls + '-body-search-wrapper'\">\n\t  \t<v-search\n\t\t  \t:prefix-cls=\"prefixCls + '-search'\"\n\t\t  \t:value.sync=\"filter\"\n\t\t  \t:on-change=\"handleFilter\"\n\t\t  \t:search-placeholder=\"searchPlaceholder\"\n\t\t  \t:handle-clear=\"handleClear\"\n\t    ></v-search>\n\t  </div>\n\t  <ul class=\"ant-transfer-list-content\" v-if=\"showItems.length\">\n\t  \t<li \n\t  \t\tv-for=\"item in showItems\" track-by=\"key\"\n\t\t\t\tclass=\"ant-transfer-list-content-item\"\n\t  \t\t:transition=\"prefixCls + '-highlight'\"\n\t  \t\t@click=\"select(item)\">\n\t  \t\t<v-checkbox :checked=\"isCheck(item)\"></v-checkbox>\n\t  \t\t<span>{{ showLabel(item) }}</span>\n\t  \t</li>\n\t  </ul>\n\t  <div \n\t  \tv-else\n\t  \t:class=\"prefixCls + '-body-not-found'\"\n\t  \t>{{notFoundContent || '列表为空'}}</div>\n\t</div>\n\t<div \n\t\tv-if=\"hasFooter\"\n\t  :class=\"prefixCls + '-footer'\">\n\t  <slot></slot>\n\t</div>\n</div>\n";

/***/ },
/* 470 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(471)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/transfer/operation.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(472)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6629c17b/operation.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils = __webpack_require__(100);

	var _button = __webpack_require__(122);

	var _button2 = _interopRequireDefault(_button);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {};
	exports.default = {
		props: (0, _utils.defaultProps)({
			prefixCls: '',
			operations: [],
			leftActive: false,
			rightActive: false,
			moveToLeft: noop,
			moveToRight: noop
		}),
		data: function data() {
			return {};
		},

		components: {
			vButton: _button2.default,
			vIcon: _iconfont2.default
		}
	};

/***/ },
/* 472 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"prefixCls + '-operation'\">\n\t<v-button \n\t\ttype=\"primary\" \n\t\tsize=\"small\" \n\t\t:disabled=\"!rightActive\"\n\t\t@click=\"moveToLeft\"\n\t\t>\n    <span><v-icon type=\"left\"></v-icon>{{operations[0]}}</span>\n  </v-button>\n  <v-button \n\t\ttype=\"primary\" \n\t\tsize=\"small\" \n\t\t:disabled=\"!leftActive\"\n\t\t@click=\"moveToRight\"\n\t\t>\n    <span>{{operations[1]}}<v-icon type=\"right\"></v-icon>\n    </span>\n  </v-button>\n</div>\n";

/***/ },
/* 473 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"prefixCls\">\n\t<list\n\t\t:filter=\"leftFilter\"\n\t\t:handle-filter = \"handleLeftFilter\"\n\t\t:handle-clear=\"handleLeftClear\"\n\t  :prefix-cls=\"prefixCls + '-list'\"\n\t  :data-source=\"leftDataSource\"\n\t  :handle-select=\"handleLeftSelect\"\n\t  :handle-select-all=\"handleLeftSelectAll\"\n\t  :checked-keys=\"leftCheckedKeys\"\n\t  :render=\"render\"\n\t  :title-text=\"titles[0]\"\n\t  :style=\"listStyle\"\n\t  :class-name=\"className\"\n\t  :show-search=\"showSearch\"\n\t  :search-placeholder=\"searchPlaceholder\"\n\t  :not-found-content=\"notFoundContent\"\n\t  :filter-option=\"filterOption\"\n\t  :has-footer=\"hasFooter\"\n\t ><slot></slot></list>\n\t<operation\n\t  :prefix-cls=\"prefixCls\"\n\t  :operations=\"operations\"\n\t  :left-active=\"leftActive\"\n\t  :right-active=\"rightActive\"\n\t  :move-to-left = \"moveToLeft\"\n\t  :move-to-Right = \"moveToRight\"\n\t ></operation>\n\t<list\n\t\t:filter=\"rightFilter\"\n\t\t:handle-filter = \"handleRightFilter\"\n\t\t:handle-clear=\"handleRightClear\"\n\t  :prefix-cls=\"prefixCls + '-list'\"\n\t  :data-source=\"rightDataSource\"\n\t  :handle-select=\"handleRightSelect\"\n\t  :handle-select-all=\"handleRightSelectAll\"\n\t  :checked-keys=\"rightCheckedKeys\"\n\t  :render=\"render\"\n\t  :title-text=\"titles[1]\"\n\t  :style=\"listStyle\"\n\t  :class-name=\"className\"\n\t  :show-search=\"showSearch\"\n\t  :search-placeholder=\"searchPlaceholder\"\n\t  :not-found-content=\"notFoundContent\"\n\t  :filter-option=\"filterOption\"\n\t  :has-footer=\"hasFooter\"\n\t ><slot></slot></list>\n</div>\n";

/***/ },
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tree = __webpack_require__(475);

	var _tree2 = _interopRequireDefault(_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _tree2.default;

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(476)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/tree/tree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(477)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-39ce6267/tree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _entries = __webpack_require__(244);

	var _entries2 = _interopRequireDefault(_entries);

	var _slicedToArray2 = __webpack_require__(169);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'v-tree',
	  data: function data() {
	    return {
	      prefix: 'ant-tree'
	    };
	  },
	  props: {
	    key: {
	      type: String,
	      default: '0'
	    },
	    dataSource: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    checkable: {
	      type: Boolean,
	      default: false
	    },
	    onSelect: Function,
	    onCheck: Function
	  },
	  computed: {
	    treeCls: function treeCls() {
	      if (this.key === '0') {
	        return this.prefix;
	      } else {
	        return this.prefix + '-child-tree';
	      }
	    }
	  },
	  watch: {
	    dataSource: function dataSource() {
	      if (this.key === '0') {
	        this.setKey();
	        this.preHandle();
	      }
	    }
	  },
	  ready: function ready() {
	    var _this = this;

	    this.setKey();
	    this.preHandle();

	    this.$on('nodeSelected', function (ori, selected) {
	      if (_this.key !== '0') return true;
	      if (!_this.multiple && selected) {
	        if (_this !== ori) {
	          for (var i = 0; i < _this.dataSource.length; i++) {
	            _this.$set('dataSource[' + i + '].selected', false);
	          }
	        }
	        _this.$broadcast('cancelSelected', ori);
	      }
	      if (_this.onSelect) {
	        _this.$nextTick(function () {
	          _this.onSelect(_this.getSelectedNodes());
	        });
	      }
	    });
	    this.$on('cancelSelected', function (ori) {
	      _this.$broadcast('cancelSelected', ori);
	      if (_this !== ori) {
	        for (var i = 0; i < _this.dataSource.length; i++) {
	          _this.$set('dataSource[' + i + '].selected', false);
	        }
	      }
	    });
	    this.$on('parentChecked', function (status, key) {
	      if (_this.key == key || _this.key.startsWith(key + '.')) {
	        for (var i = 0; i < _this.dataSource.length; i++) {
	          _this.$set('dataSource[' + i + '].checked', status);
	          _this.$set('dataSource[' + i + '].childrenCheckedStatus', status ? 2 : 0);
	        }
	        _this.$broadcast('parentChecked', status, key);
	      }
	    });
	    this.$on('childChecked', function (ori, key) {
	      if (_this.key === '0' && _this.onCheck) {
	        _this.$nextTick(function () {
	          _this.onCheck(_this.getCheckedNodes());
	        });
	      }
	      if (_this === ori) return;
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(_this.dataSource.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
	              i = _step$value[0],
	              item = _step$value[1];

	          if (_this.key + '.' + i == key) {
	            var temp = _this.getChildrenCheckedStatus(item.node);
	            if (temp != item.childrenCheckedStatus) {
	              _this.$set('dataSource[' + i + '].checked', temp ? true : false);
	              _this.$set('dataSource[' + i + '].childrenCheckedStatus', temp);
	              if (_this.key !== '0') _this.$dispatch('childChecked', _this, _this.key);
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    });
	  },

	  methods: {
	    setKey: function setKey() {
	      for (var i = 0; i < this.dataSource.length; i++) {
	        this.dataSource[i].key = this.key + '.' + i;
	      }
	    },
	    preHandle: function preHandle() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(this.dataSource.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),
	              i = _step2$value[0],
	              item = _step2$value[1];

	          if (!item.node || !item.node.length) {
	            this.$set('dataSource[' + i + '].isLeaf', true);
	            this.$set('dataSource[' + i + '].childrenCheckedStatus', 2);
	            continue;
	          }
	          if (item.checked && !item.childrenCheckedStatus) {
	            this.$set('dataSource[' + i + '].childrenCheckedStatus', 2);
	            this.$broadcast('parentChecked', true, this.key + '.' + i);
	          } else {
	            var status = this.getChildrenCheckedStatus(item.node);
	            this.$set('dataSource[' + i + '].childrenCheckedStatus', status);
	            if (status !== 0) this.$set('dataSource[' + i + '].checked', true);
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    },
	    setExpand: function setExpand(disabled, index) {
	      if (!disabled) {
	        this.$set('dataSource[' + index + '].expand', !this.dataSource[index].expand);
	      }
	    },
	    setSelect: function setSelect(disabled, index) {
	      if (!disabled) {
	        var selected = !this.dataSource[index].selected;
	        if (this.multiple || !selected) {
	          this.$set('dataSource[' + index + '].selected', selected);
	        } else {
	          for (var i = 0; i < this.dataSource.length; i++) {
	            if (i == index) {
	              this.$set('dataSource[' + i + '].selected', true);
	            } else {
	              this.$set('dataSource[' + i + '].selected', false);
	            }
	          }
	        }
	        this.$dispatch('nodeSelected', this, selected);
	      }
	    },
	    setCheck: function setCheck(disabled, index) {
	      if (disabled) return;
	      var checked = !this.dataSource[index].checked;
	      this.$set('dataSource[' + index + '].checked', checked);
	      this.$set('dataSource[' + index + '].childrenCheckedStatus', checked ? 2 : 0);
	      this.$dispatch('childChecked', this, this.key);
	      this.$broadcast('parentChecked', checked, this.key + '.' + index);
	    },
	    getNodes: function getNodes(data, opt) {
	      data = data || this.dataSource;
	      var res = [];
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(data), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var node = _step3.value;

	          var tmp = true;
	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = (0, _getIterator3.default)((0, _entries2.default)(opt)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var _step4$value = (0, _slicedToArray3.default)(_step4.value, 2),
	                  key = _step4$value[0],
	                  value = _step4$value[1];

	              if (node[key] != value) {
	                tmp = false;
	                break;
	              }
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }

	          if (tmp) {
	            res.push(node);
	          }
	          if (node.node && node.node.length) {
	            res = res.concat(this.getNodes(node.node, opt));
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      return res;
	    },
	    getSelectedNodes: function getSelectedNodes() {
	      return this.getNodes(this.dataSource, { selected: true });
	    },
	    getCheckedNodes: function getCheckedNodes() {
	      return this.getNodes(this.dataSource, { checked: true, childrenCheckedStatus: 2 });
	    },
	    getChildrenCheckedStatus: function getChildrenCheckedStatus(children) {
	      var checkNum = 0,
	          child_childrenAllChecked = true;
	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = (0, _getIterator3.default)(children), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var child = _step5.value;

	          if (child.checked) {
	            checkNum++;
	          }
	          if (child.childrenCheckedStatus !== 2) {
	            child_childrenAllChecked = false;
	          }
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }

	      if (checkNum == children.length) {
	        return child_childrenAllChecked ? 2 : 1;
	      } else if (checkNum > 0) {
	        return 1;
	      } else {
	        return 0;
	      }
	    }
	  }
	};

/***/ },
/* 477 */
/***/ function(module, exports) {

	module.exports = "\n<ul :class=\"treeCls\">\n  <li v-for=\"item in dataSource\" :class=\"[{[prefix+'-treenode-disabled']: item.disabled}]\">\n    <span :class=\"[prefix+'-switcher',{[prefix+'-switcher-disabled']: item.disabled,[prefix+'-noline_close']: !item.expand && !item.isLeaf,[prefix+'-noline_open']: item.expand && !item.isLeaf,[prefix+'-switcher-noop']: item.isLeaf}]\" @click=\"setExpand(item.disabled,$index)\"></span>\n    <span v-if=\"checkable\" :class=\"[prefix+'-checkbox',{[prefix+'-checkbox-disabled']: item.disabled || item.disableCheckbox,[prefix+'-checkbox-checked']: item.checked && item.childrenCheckedStatus == 2, [prefix+'-checkbox-indeterminate']: item.checked && item.childrenCheckedStatus == 1}]\" @click=\"setCheck(item.disabled||item.disableCheckbox,$index)\">\n        <span :class=\"prefix+'-checkbox-inner'\"></span>\n    </span>\n    <a :title=\"item.title\" :class=\"[{[prefix+'-node-selected']: item.selected}]\" @click=\"setSelect(item.disabled,$index)\">\n        <span :class=\"prefix+'-title'\" v-html=\"item.title\"></span>\n    </a>\n    <v-tree v-if=\"!item.isLeaf\" :data-source.sync=\"item.node\" :key=\"this.key+'.'+$index\" :multiple=\"multiple\" :checkable=\"checkable\" :class=\"{[prefix+'-child-tree-open']: item.expand}\" v-show=\"item.expand\" transition=\"slide-up\"></v-tree>\n  </li>\n</ul>\n";

/***/ },
/* 478 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _treeSelect = __webpack_require__(479);

	var _treeSelect2 = _interopRequireDefault(_treeSelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _treeSelect2.default;

/***/ },
/* 479 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(480)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/treeSelect/treeSelect.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(485)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a8314fb2/treeSelect.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _select = __webpack_require__(481);

	var _select2 = _interopRequireDefault(_select);

	var _tree = __webpack_require__(474);

	var _tree2 = _interopRequireDefault(_tree);

	var _utils = __webpack_require__(100);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-tree-select',
	    props: (0, _utils.defaultProps)({
	        data: [],
	        open: false,
	        popupContainer: function popupContainer() {
	            return document.body;
	        },
	        position: 'absolute',
	        value: [],
	        multiple: false,
	        treeCheckable: false,
	        allowClear: false,
	        onSelect: function onSelect() {}
	    }),
	    ready: function ready() {
	        var _this = this;

	        document.addEventListener('click', function () {
	            return _this.open = false;
	        });
	        if (this.multiple) {
	            this.setValueByCheck(this.data);
	            this.treeCheckable = true;
	        } else {
	            this.setValueBySelect(this.data);
	        }
	    },

	    methods: {
	        setValueBySelect: function setValueBySelect(data) {
	            var res = false;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	                for (var _iterator = (0, _getIterator3.default)(data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var item = _step.value;

	                    if (item.selected) {
	                        var arr = [{ text: item.title, uid: item.key }];
	                        this.value = arr;
	                        res = true;
	                        break;
	                    } else if (item.node) {
	                        if (this.setValueBySelect(item.node)) {
	                            res = true;
	                            break;
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }

	            return res;
	        },
	        setValueByCheck: function setValueByCheck(data) {
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = (0, _getIterator3.default)(data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var item = _step2.value;

	                    if (item.checked && item.childrenCheckedStatus == 2) {
	                        this.value.push({ text: item.title, uid: item.key });
	                    } else if (item.node) {
	                        this.setValueByCheck(item.node);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	        },
	        select: function select(data) {
	            if (this.multiple) return;

	            var val = [];
	            if (data[0]) {
	                val.push({ text: data[0].title, uid: data[0].key });
	            }
	            this.value = val;
	            this.onSelect(data[0]);
	            this.$refs.select.openDropdown();
	        },
	        check: function check(data) {
	            if (!this.multiple) return;
	            var temp = [];
	            for (var i = 0; i < data.length; i++) {
	                temp.push(data[i].key);
	            }
	            var val = [],
	                res = [];

	            var _loop = function _loop(_i) {
	                if (temp.some(function (key) {
	                    return key !== data[_i].key && data[_i].key.startsWith(key);
	                })) return 'continue';
	                val.push({ text: data[_i].title, uid: data[_i].key });
	                res.push(data[_i]);
	            };

	            for (var _i = 0; _i < data.length; _i++) {
	                var _ret = _loop(_i);

	                if (_ret === 'continue') continue;
	            }
	            this.value = val;
	            this.onSelect(res);
	        },
	        clear: function clear(value) {
	            var uids = [];
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;

	            try {
	                for (var _iterator3 = (0, _getIterator3.default)(value), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var item = _step3.value;

	                    uids.push(item.uid);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }

	            this.resetTreeData(uids, this.data);
	        },
	        resetTreeData: function resetTreeData(uids, data) {
	            for (var i = 0; i < data.length; i++) {
	                var index = uids.indexOf(data[i].key);
	                if (index !== -1) {
	                    if (this.multiple) {
	                        this.setCheck(data[i].key);
	                    } else {
	                        data[i].selected = false;
	                    }
	                    uids.splice(index, 1);
	                }
	                if (data[i].node) {
	                    this.resetTreeData(uids, data[i].node);
	                }
	            }
	        },
	        setCheck: function setCheck(key) {
	            var route = key.split('.');
	            var node = this.$refs.tree;
	            for (var i = 1; i < route.length - 1; i++) {
	                node = node.$children[route[i]];
	            }
	            var item = node.dataSource[route[i]];
	            node.setCheck(item.disabled, route[i]);
	        }
	    },
	    components: { baseSelect: _select2.default, vTree: _tree2.default }
	};

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _select = __webpack_require__(482);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _select2.default;

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(483)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/base/select/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(484)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3b7a08e9/select.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	var _func = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            prefix: 'ant-select',
	            style: {},
	            container: null
	        };
	    },
	    props: (0, _utils.defaultProps)({
	        popupContainer: function popupContainer() {
	            return document.body;
	        },
	        position: 'absolute',
	        multiple: false,
	        allowClear: false,
	        open: false,
	        onClear: function onClear() {},

	        value: []
	    }),
	    ready: function ready() {
	        var _this = this;

	        this.container = this.popupContainer();
	        this.$els.dropdown.style.position = this.position;
	        this.container.appendChild(this.$els.dropdown);

	        this.$nextTick(function () {
	            _this.setPosition();
	        });

	        window.addEventListener('resize', function () {
	            clearTimeout(_this.resizeTimer);
	            _this.resizeTimer = setTimeout(function () {
	                _this.setPosition();
	            }, 200);
	        });
	    },

	    computed: {
	        wrapCls: function wrapCls() {
	            return [this.prefix, this.prefix + '-enabled', (0, _defineProperty3.default)({}, this.prefix + '-open', this.open)];
	        },
	        selectionCls: function selectionCls() {
	            var multiple = this.multiple ? 'multiple' : 'single';

	            return [this.prefix + '-selection', this.prefix + '-selection--' + multiple];
	        },
	        placeholderCls: function placeholderCls() {
	            return [(0, _defineProperty3.default)({}, this.prefix + '-selection__placeholder', !this.value.length)];
	        },
	        dropdownCls: function dropdownCls() {
	            var multiple = this.multiple ? 'multiple' : 'single';

	            return [this.prefix + '-dropdown', this.prefix + '-dropdown--' + multiple, this.prefix + '-dropdown-placement-bottomLeft'];
	        }
	    },
	    methods: {
	        setPosition: function setPosition() {
	            if (!this.$el) {
	                return;
	            }
	            var p = (0, _func.getOffset)(this.$els.inputArea, this.container);

	            this.$set('style', {
	                top: p.bottom + 4 + 'px',
	                left: p.left + 'px',
	                minWidth: p.right - p.left + 'px'
	            });
	        },
	        openDropdown: function openDropdown() {
	            this.open = !this.open;
	        },
	        clearSelected: function clearSelected() {
	            this.onClear(this.value);
	            this.value = [];
	        },
	        clearSingle: function clearSingle(index) {
	            var deleteEle = this.value.splice(index, 1);
	            this.onClear(deleteEle);
	        },
	        hide: function hide(event) {
	            event.stopPropagation();
	        }
	    }
	};

/***/ },
/* 484 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapCls\" style=\"width: 120px;\" @click.stop=\"openDropdown\" v-el:input-area>\n    <span :class=\"selectionCls\" role=\"combobox\" aria-autocomplete=\"list\" aria-haspopup=\"true\" aria-expanded=\"true\" tabindex=\"0\">\n        <ul v-if=\"multiple\" class=\"ant-select-selection__rendered\">\n            <li v-for=\"item in value\" unselectable=\"unselectable\" class=\"ant-select-selection__choice\" title=\"{{item.text}}\" style=\"-webkit-user-select: none;\">\n                <span class=\"ant-select-selection__choice__remove\" @click=\"clearSingle($index)\"></span>\n                <span class=\"ant-select-selection__choice__content\" v-text=\"item.text\"></span>\n            </li>\n            <li class=\"ant-select-search ant-select-search--inline\">\n                <span class=\"ant-select-search__field__wrap\">\n                    <input value=\"\" class=\"ant-select-search__field\" role=\"textbox\">\n                </span>\n            </li>\n        </ul>\n        <div v-else class=\"ant-select-selection__rendered\">\n            <span v-show=\"value.length\" v-text=\"value.length?value[0].text:''\"></span>\n        </div>\n        <span class=\"ant-select-search__field__placeholder\" v-show=\"!value.length\" style=\"padding-left:8px\">请选择</span>\n        <span v-if=\"allowClear && value.length\" class=\"ant-select-selection__clear\" @click.stop=\"clearSelected\"></span>\n        <span class=\"ant-select-arrow\" unselectable=\"unselectable\" style=\"-webkit-user-select: none;\"><b></b></span>\n    </span>\n    <div :class=\"dropdownCls\" style=\"max-height: 300px; overflow: auto\" :style=\"style\" transition=\"slide-up\" v-show=\"open\" @click='hide' v-el:dropdown>\n        <div>\n            <slot></slot>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 485 */
/***/ function(module, exports) {

	module.exports = "\n<span style=\"display:inline-block;position:relative\">\n    <base-select :value=\"value\" :popup-container=\"popupContainer\" :open.sync=\"open\" :position=\"position\" :multiple=\"multiple\" :allow-clear=\"allowClear\" :on-clear=\"clear\" v-ref:select>\n        <v-tree :data-source=\"data\" :on-select=\"select\" :on-check=\"check\" :multiple=\"multiple\" :checkable=\"treeCheckable\" v-ref:tree></v-tree>\n    </base-select>\n</span>\n";

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _uploads = __webpack_require__(487);

	var _uploads2 = _interopRequireDefault(_uploads);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _uploads2.default;

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(488)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/upload/uploads.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(498)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-65a98d3c/uploads.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(131);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _utils = __webpack_require__(100);

	var _ajaxUploader = __webpack_require__(489);

	var _ajaxUploader2 = _interopRequireDefault(_ajaxUploader);

	var _uploadList = __webpack_require__(494);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _getFileItem = __webpack_require__(497);

	var _getFileItem2 = _interopRequireDefault(_getFileItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function fileToObject(file) {
	  return {
	    lastModified: file.lastModified,
	    lastModifiedDate: file.lastModifiedDate,
	    name: file.filename || file.name,
	    size: file.size,
	    type: file.type,
	    uid: file.uid,
	    response: file.response,
	    error: file.error
	  };
	}

	exports.default = {
	  name: 'v-upload',
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-upload',

	    type: 'select',
	    name: '',
	    forceAjax: false,
	    multipart: false,
	    action: '',
	    data: {},
	    accept: '',
	    multiple: false,
	    fileList: Array,
	    defaultFileList: Array,
	    beforeUpload: function beforeUpload() {},
	    onChange: function onChange() {}
	  }),

	  components: { AjaxUpload: _ajaxUploader2.default, UploadList: _uploadList2.default },

	  computed: {
	    isDrag: function isDrag() {
	      return this.type === 'drag';
	    },
	    wrapClasses: function wrapClasses() {
	      return [this.prefixCls, (0, _defineProperty3.default)({}, this.prefixCls + '-drag', this.isDrag), (0, _defineProperty3.default)({}, this.prefixCls + '-select', !this.isDrag)];
	    },
	    containerClasses: function containerClasses() {
	      return (0, _defineProperty3.default)({}, this.prefixCls + '-drag-container', this.isDrag);
	    }
	  },

	  beforeCompile: function beforeCompile() {
	    this.$set('fileList', this.fileList || this.defaultFileList || []);
	  },


	  methods: {
	    _onStart: function _onStart(file) {
	      var targetItem = void 0;
	      var nextFileList = this.fileList.concat();
	      if (file.length > 0) {
	        targetItem = file.map(function (f) {
	          f = fileToObject(f);
	          f.status = 'uploading';
	          return f;
	        });
	        nextFileList = nextFileList.concat(file);
	      } else {
	        targetItem = fileToObject(file);
	        targetItem.status = 'uploading';
	        nextFileList.push(targetItem);
	      }

	      this._onChange({
	        file: targetItem,
	        fileList: nextFileList
	      });
	    },
	    _onProgress: function _onProgress(e, file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2.default)(file, fileList);

	      if (targetItem) {
	        this._onChange({
	          event: e,
	          file: file,
	          fileList: this.fileList
	        });
	      }
	    },
	    _onSuccess: function _onSuccess(response, file) {
	      try {
	        if (typeof response === 'string') {
	          JSON.parse(response);
	        }
	      } catch (e) {
	        this._onError(new Error('No response'), response, file);
	        return;
	      }

	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2.default)(file, fileList);

	      if (targetItem) {
	        targetItem.status = 'done';
	        targetItem.response = response;

	        this._onChange({
	          file: targetItem,
	          fileList: fileList
	        });
	      }
	    },
	    _onError: function _onError(error, response, file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2.default)(file, fileList);
	      targetItem.error = error;
	      targetItem.response = response;
	      targetItem.status = 'error';

	      this._handleRemove(targetItem);
	    },
	    _removeFile: function _removeFile(file) {
	      var fileList = this.fileList;
	      var targetItem = (0, _getFileItem2.default)(file, fileList);
	      var index = fileList.indexOf(targetItem);

	      if (index !== -1) {
	        fileList.splice(index, 1);
	        return fileList;
	      }

	      return null;
	    },
	    _handleRemove: function _handleRemove(file) {
	      var fileList = this._removeFile(file);

	      if (fileList) {
	        this._onChange({
	          file: file,
	          fileList: fileList
	        });
	      }
	    },
	    _handleManualRemove: function _handleManualRemove(file) {
	      file.status = 'removed';
	      this._handleRemove(file);
	    },
	    _getFilePlainObject: function _getFilePlainObject(fileList) {
	      var arr = [];
	      fileList.forEach(function (item) {
	        arr.push({
	          name: item.name,
	          size: item.size,
	          status: item.status,
	          type: item.type,
	          uid: item.uid,
	          response: item.response
	        });
	      });
	      return arr;
	    },
	    _onChange: function _onChange(info) {
	      if (info.fileList) {
	        var fileList = info.fileList;

	        fileList = this._getFilePlainObject(fileList);
	        this.$set('fileList', fileList);
	      }
	      this.onChange(info);
	    }
	  }
	};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(490)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/upload/ajaxUploader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(493)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-44905a74/ajaxUploader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(100);

	var _request = __webpack_require__(491);

	var _request2 = _interopRequireDefault(_request);

	var _uid = __webpack_require__(492);

	var _uid2 = _interopRequireDefault(_uid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: (0, _utils.defaultProps)({
	    action: String,
	    name: String,
	    multiple: Boolean,
	    data: Object,
	    onStart: function onStart() {},
	    onProgress: function onProgress() {},
	    onSuccess: function onSuccess() {},
	    onError: function onError() {},
	    beforeUpload: function beforeUpload() {}
	  }),

	  methods: {
	    _onChange: function _onChange(e) {
	      var files = e.target.files;
	      this._uploadFiles(files);
	    },
	    _onClick: function _onClick() {
	      var el = this.$els.file;
	      if (!el) return;

	      el.click();
	      el.value = '';
	    },
	    _onKeyDown: function _onKeyDown(e) {
	      if (e.key === 'Enter') {
	        this._onClick();
	      }
	    },
	    _onFileDrop: function _onFileDrop(e) {
	      if (e.type === 'dragover') {
	        return e.preventDefault();
	      }

	      var files = e.dataTransfer.files;
	      this._uploadFiles(files);

	      e.preventDefault();
	    },
	    _uploadFiles: function _uploadFiles(files) {
	      var len = files.length;
	      if (len > 0) {
	        for (var i = 0; i < len; i++) {
	          var file = files.item(i);
	          file.uid = (0, _uid2.default)();
	          this._upload(file);
	        }

	        if (this.multiple) {
	          this.onStart(Array.prototype.slice.call(files));
	        } else {
	          this.onStart(Array.prototype.slice.call(files)[0]);
	        }
	      }
	    },
	    _upload: function _upload(file) {
	      var _this = this;

	      if (!this.beforeUpload) {
	        return this._post(file);
	      }

	      var before = this.beforeUpload(file);
	      if (before && before.then) {
	        before.then(function () {
	          _this._post(file);
	        });
	      } else if (before !== false) {
	        this._post(file);
	      }
	    },
	    _post: function _post(file) {
	      var _this2 = this;

	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data();
	      }

	      (0, _request2.default)({
	        action: this.action,
	        filename: this.name,
	        file: file,
	        data: data,
	        onProgress: function onProgress(e) {
	          _this2.onProgress(e, file);
	        },
	        onSuccess: function onSuccess(ret) {
	          _this2.onSuccess(ret, file);
	        },
	        onError: function onError(err, ret) {
	          _this2.onError(err, ret, file);
	        }
	      });
	    }
	  }
	};

/***/ },
/* 491 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = upload;
	function getError(option, xhr) {
	  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = option.action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	function upload(option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }

	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
	    xhr.upload.onprogress = function (e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();
	  formData.append(option.filename, option.file);
	  if (option.data) {
	    for (var key in option.data) {
	      formData.append(key, option.data[key]);
	    }
	  }

	  xhr.onerror = function (e) {
	    option.onError(e);
	  };

	  xhr.onload = function () {
	    if (xhr.status !== 200) {
	      return option.onError(getError(option, xhr), getBody(xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };
	  xhr.open('post', option.action, true);

	  xhr.send(formData);
	}

/***/ },
/* 492 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = uid;
	var now = +new Date();
	var index = 0;

	function uid() {
	  return 'ant-upload-' + now + '-' + ++index;
	}

/***/ },
/* 493 */
/***/ function(module, exports) {

	module.exports = "\n<span role=\"button\"\n  tabIndex=\"0\"\n  class=\"ant-upload-btn\"\n  @click=\"_onClick\"\n  @keydown=\"_onKeyDown\"\n  @drop=\"_onFileDrop\"\n  @dragover=\"_onFileDrop\">\n  <input v-el:file\n    type=\"file\"\n    style=\"display: none\"\n    :accept=\"accept\"\n    :multiple=\"multiple\"\n    @change=\"_onChange\">\n  <slot></slot>\n</span>\n";

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(495)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/upload/uploadList.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(496)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-332ed9f6/uploadList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 495 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(100);

	var _iconfont = __webpack_require__(260);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: (0, _utils.defaultProps)({
	    prefixCls: 'ant-upload',

	    items: [],
	    onRemove: function onRemove() {}
	  }),

	  components: { vIcon: _iconfont2.default },

	  methods: {
	    _handleClose: function _handleClose(file) {
	      this.onRemove(file);
	    }
	  }
	};

/***/ },
/* 496 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"prefixCls + '-list'\">\n  <div v-for=\"file in items\" :class=\"prefixCls + '-list-item'\" :key=\"file.uid\">\n    <v-icon v-if=\"file.status === 'done'\" type=\"check\" :class=\"prefixCls + '-success-icon'\"></v-icon>\n    <v-icon v-if=\"file.status !== 'done'\" type=\"loading\"></v-icon>\n\n    <a v-if=\"file.url\" :class=\"prefixCls + '-item-name'\" :href=\"file.url\" target=\"_blank\">{{file.name}}</a>\n    <b v-if=\"!file.url\" :class=\"prefixCls + '-item-name'\">{{file.name}}</b>\n\n    <v-icon type=\"cross\" @click=\"_handleClose(file)\"></v-icon>\n  </div>\n</div>\n";

/***/ },
/* 497 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getFileItem;
	function getFileItem(file, fileList) {
	  var matchWay = !file.uid ? 'byName' : 'byUid';

	  var target = fileList.filter(function (item) {
	    if (matchWay === 'byName') {
	      return item.name === file.name;
	    } else {
	      return item.uid === file.uid;
	    }
	  })[0];

	  return target;
	}

/***/ },
/* 498 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"wrapClasses\">\n  <ajax-upload\n    :action=\"action\"\n    :name=\"name\"\n    :data=\"data\"\n    :multiple=\"multiple\"\n    :on-start=\"_onStart\"\n    :on-progress=\"_onProgress\"\n    :on-success=\"_onSuccess\"\n    :on-error=\"_onError\"\n    :before-upload=\"beforeUpload\">\n    <div :class=\"containerClasses\">\n      <slot></slot>\n    </div>\n  </ajax-upload>\n</div>\n<upload-list :items=\"fileList\" :on-remove=\"_handleManualRemove\" ></upload-list>\n";

/***/ },
/* 499 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _message = __webpack_require__(500);

	var _message2 = _interopRequireDefault(_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultDuration = 1.5;

	var top = void 0;
	var messageInstance = void 0;
	var key = 1;

	function getMessageInstance() {
	  messageInstance = messageInstance || _message2.default.newInstance({
	    top: top
	  });

	  return messageInstance;
	}

	function notice(content) {
	  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
	  var type = arguments[2];


	  var instance = getMessageInstance();

	  instance.notice({
	    key: key,
	    duration: duration,
	    content: content,
	    type: type,
	    show: true
	  });

	  return function () {
	    var target = key++;

	    return {
	      remove: function remove() {
	        instance.removeNotice(target);
	      },
	      setContent: function setContent(cont) {
	        instance.setContent(target, cont);
	      }
	    };
	  }();
	}

	function noticeMove() {

	  var instance = getMessageInstance();
	  instance.removeNotice(key - 1);
	}

	exports.default = {
	  info: function info(content, duration) {
	    return notice(content, duration, 'info');
	  },
	  success: function success(content, duration) {
	    return notice(content, duration, 'success');
	  },
	  error: function error(content, duration) {
	    return notice(content, duration, 'error');
	  },
	  warning: function warning(content, duration) {
	    return notice(content, duration, 'warning');
	  },
	  loading: function loading(content, duration) {
	    return notice(content, duration, 'loading');
	  },
	  loaded: function loaded() {
	    return noticeMove();
	  },
	  config: function config(options) {
	    if (options.top) {
	      top = options.top;
	    }
	  }
	};

/***/ },
/* 500 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _message = __webpack_require__(501);

	var _message2 = _interopRequireDefault(_message);

	var _vue = __webpack_require__(444);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_message2.default.newInstance = function () {

	  var div = document.createElement('div');
	  div.innerHTML = '<v-message></v-message>';
	  document.body.appendChild(div);

	  var message = new _vue2.default({
	    el: div,
	    data: {},
	    components: { vMessage: _message2.default }
	  }).$children[0];

	  return {
	    notice: function notice(noticeProps) {
	      message.add(noticeProps);
	    },
	    removeNotice: function removeNotice(key) {
	      message.remove(key);
	    },
	    setContent: function setContent(key, cont) {
	      message.setContent(key, cont);
	    },

	    component: message,

	    destory: function destory() {
	      document.body.removeChild(div);
	    }
	  };
	};

	exports.default = _message2.default;

/***/ },
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(502)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/message/message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(506)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-f112d612/message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 502 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getIterator2 = __webpack_require__(207);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _assign = __webpack_require__(358);

	var _assign2 = _interopRequireDefault(_assign);

	var _notice3 = __webpack_require__(503);

	var _notice4 = _interopRequireDefault(_notice3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var seed = 0;

	exports.default = {
	  props: {
	    top: ''
	  },
	  data: function data() {
	    return {
	      notices: []
	    };
	  },
	  computed: {},
	  ready: function ready() {},
	  attached: function attached() {},
	  methods: {
	    add: function add(notice) {
	      var self = this;
	      var key = notice.key = notice.key || seed++;
	      var notices = this.notices;

	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        var _notice = (0, _assign2.default)({
	          show: true,
	          content: '',
	          duration: 0.5
	        }, notice);
	        this.notices = notices.concat(notice);
	      }
	    },
	    setContent: function setContent(key, cont) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.notices), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var _notice2 = _step.value;

	          if (_notice2.key === key) {
	            _notice2.content = cont;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    },
	    remove: function remove(key) {
	      this.notices.map(function (notice) {
	        if (notice.key === key) {
	          notice.show = false;
	        }
	      });
	    }
	  },
	  components: {
	    notice: _notice4.default
	  }
	};

/***/ },
/* 503 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(504)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/message/notice.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(505)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-ddec76d0/notice.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 504 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    content: '',
	    duration: '',
	    type: String,
	    show: {
	      type: Boolean,
	      twoWay: true
	    }
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    icon: function icon() {
	      var iconClass = {
	        'info': 'info-circle',
	        'success': 'check-circle',
	        'warning': 'exclamation-circle',
	        'error': 'exclamation-circle',
	        'loading': 'loading'
	      }[this.type];
	      return iconClass;
	    }
	  },
	  compiled: function compiled() {
	    var _this = this;

	    this._clearCloseTimer();
	    if (this.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this._close();
	      }, this.duration * 1000);
	    }
	  },
	  beforeDestory: function beforeDestory() {
	    this._clearCloseTimer();
	  },

	  methods: {
	    _clearCloseTimer: function _clearCloseTimer() {
	      if (this.closeTimer) {
	        clearTimeout(this.closeTimer);
	        this.closeTimer = null;
	      }
	    },
	    _close: function _close() {
	      this._clearCloseTimer();
	      this.show = false;
	    }
	  }
	};

/***/ },
/* 505 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-message-notice\" v-if=\"show\" transition=\"message\">\n  <div class=\"ant-message-notice-content\">\n    <div class=\"ant-message-custom-content ant-message-{{type}}\">\n      <i :class=\"['anticon','anticon-'+icon,{'anticon-spin': icon=='loading'}]\"></i>\n      <span v-text=\"content\"></span>\n    </div>\n  </div>\n</div>\n\n";

/***/ },
/* 506 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-message\" :style=\"{ top: top + 'px' }\" v-el:content>\n  <span>\n    <notice\n      v-for=\"notice in notices\"\n      :content=\"notice.content\"\n      :duration=\"notice.duration\"\n      :type=\"notice.type\"\n      :show.sync=\"notice.show\"\n    ><notice>\n  </span>\n</div>\n\n";

/***/ },
/* 507 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _notification = __webpack_require__(508);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var defaultDuration = 4.5;

	var top = 24;
	var duration = 4.5;
	var natificationInstance = void 0;
	var key = 1;

	function getNotificationInstance() {
	  natificationInstance = natificationInstance || _notification2.default.newInstance({
	    top: top,
	    duration: duration
	  });

	  return natificationInstance;
	}

	function notice(message, description) {
	  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDuration;
	  var type = arguments[3];


	  var instance = getNotificationInstance();

	  instance.notice({
	    key: key,
	    duration: duration,
	    message: message,
	    description: description,
	    type: type,
	    show: true
	  });

	  return function () {
	    var target = key++;

	    return function () {
	      instance.removeNotice(target);
	    };
	  }();
	}

	exports.default = {
	  info: function info(config) {
	    return notice(config.message, config.description, config.duration, 'info');
	  },
	  success: function success(config) {
	    return notice(config.message, config.description, config.duration, 'success');
	  },
	  error: function error(config) {
	    return notice(config.message, config.description, config.duration, 'error');
	  },
	  warning: function warning(config) {
	    return notice(config.message, config.description, config.duration, 'warning');
	  },
	  open: function open(config) {
	    return notice(config.message, config.description, config.duration, 'open');
	  },
	  config: function config(options) {
	    if (options.top) {
	      top = options.top;
	    }
	    if (options.duration) {
	      duration = options.duration;
	    }
	  }
	};

/***/ },
/* 508 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _notification = __webpack_require__(509);

	var _notification2 = _interopRequireDefault(_notification);

	var _vue = __webpack_require__(444);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_notification2.default.newInstance = function (data) {
	  var div = document.createElement('div');
	  div.innerHTML = '<v-notification :top=\'' + data.top + '\'></v-notification>';
	  document.body.appendChild(div);

	  var notification = new _vue2.default({
	    el: div,
	    data: {},
	    components: { vNotification: _notification2.default }
	  }).$children[0];

	  return {
	    notice: function notice(noticeProps) {
	      notification.add(noticeProps);
	    },
	    removeNotice: function removeNotice(key) {
	      notification.remove(key);
	    },


	    component: notification,

	    destory: function destory() {
	      document.body.removeChild(div);
	    }
	  };
	};

	exports.default = _notification2.default;

/***/ },
/* 509 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(510)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/notification/notification.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(514)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e5ea12f2/notification.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 510 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(358);

	var _assign2 = _interopRequireDefault(_assign);

	var _notice2 = __webpack_require__(511);

	var _notice3 = _interopRequireDefault(_notice2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var seed = 0;

	exports.default = {
	  props: {
	    top: ''
	  },
	  data: function data() {
	    return {
	      notices: []
	    };
	  },
	  computed: {},
	  attached: function attached() {},
	  methods: {
	    add: function add(notice) {
	      var self = this;
	      var key = notice.key = notice.key || seed++;
	      var notices = this.notices;

	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        var _notice = (0, _assign2.default)({
	          show: true,
	          content: '',
	          duration: 0.5
	        }, notice);
	        this.notices = notices.concat(notice);
	      }
	    },
	    remove: function remove(key) {
	      this.notices.map(function (notice) {
	        if (notice.key === key) {
	          notice.show = false;
	        }
	      });
	    }
	  },
	  components: {
	    notice: _notice3.default
	  }
	};

/***/ },
/* 511 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(512)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/notification/notice.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(513)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-a1a20e18/notice.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 512 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    message: {
	      type: String,
	      required: true
	    },
	    description: {
	      type: String,
	      required: true
	    },
	    type: String,
	    show: {
	      type: Boolean,
	      twoWay: true
	    },
	    duration: Number
	  },
	  data: function data() {
	    return {};
	  },
	  computed: {
	    icon: function icon() {
	      var iconClass = {
	        'info': 'info-circle-o',
	        'success': 'check-circle-o',
	        'error': 'cross-circle-o',
	        'warning': 'exclamation-circle-o'
	      }[this.type];
	      return iconClass;
	    }
	  },
	  compiled: function compiled() {
	    var _this = this;

	    this._clearCloseTimer();
	    if (this.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this._close();
	      }, this.duration * 1000);
	    }
	  },
	  beforeDestory: function beforeDestory() {
	    this._clearCloseTimer();
	  },

	  methods: {
	    _clearCloseTimer: function _clearCloseTimer() {
	      if (this.closeTimer) {
	        clearTimeout(this.closeTimer);
	        this.closeTimer = null;
	      }
	    },
	    _close: function _close() {
	      this._clearCloseTimer();
	      this.show = false;
	    }
	  }
	};

/***/ },
/* 513 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-notification-notice ant-notification-notice-closable\" v-if=\"show\" transition=\"notification\">\n  <div class=\"ant-notification-notice-content\">\n    <div class=\"ant-notification-notice-content\" :class=\"{'ant-notification-notice-with-icon': type != 'open'}\">\n      <i class=\"ant-notification-notice-icon ant-notification-notice-icon-{{type}} anticon anticon-{{icon}}\" v-if=\"type != 'open'\"></i>\n      <div class=\"ant-notification-notice-message\" v-text=\"message\"></div>\n      <div class=\"ant-notification-notice-description\" v-text=\"description\"></div>\n    </div>\n  </div>\n  <a class=\"ant-notification-notice-close\" @click=\"_close\">\n    <span class=\"ant-notification-notice-close-x\"></span>\n  </a>\n</div>\n\n";

/***/ },
/* 514 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"ant-notification\" :style=\"{ top: top + 'px' }\">\n  <span>\n    <notice\n      v-for=\"notice in notices\"\n      :message=\"notice.message\"\n      :description=\"notice.description\"\n      :duration=\"notice.duration\"\n      :type=\"notice.type\"\n      :show.sync=\"notice.show\"\n    ><notice>\n  </span>\n</div>\n\n";

/***/ },
/* 515 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _morePanel = __webpack_require__(516);

	var _morePanel2 = _interopRequireDefault(_morePanel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _morePanel2.default;

/***/ },
/* 516 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(517)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] vb/components/morePanel/morePanel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(518)
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
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66727772/morePanel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 517 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _card = __webpack_require__(151);

	var _card2 = _interopRequireDefault(_card);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'v-more-panel',
	    data: function data() {
	        return {
	            prefix: 'ant-more-panel',
	            collapse: true,
	            bindResize: false,
	            showBtn: false,
	            panelPR: 0
	        };
	    },
	    props: {
	        originalHeight: {
	            type: [Number, String],
	            default: 34
	        },
	        controlStyle: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        }
	    },
	    watch: {
	        showBtn: function showBtn() {
	            this.panelPR = this.$els.panelControl.offsetWidth + 'px';
	        }
	    },
	    computed: {
	        height: function height() {
	            return this.collapse ? this.originalHeight + 'px' : 'auto';
	        },
	        btnIcon: function btnIcon() {
	            return this.collapse ? 'down' : 'up';
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        this.panelPR = this.$els.panelControl.offsetWidth + 'px';
	        this.ifShowBtn();

	        if (!this.bindResize) {
	            window.addEventListener("resize", function () {
	                _this.ifShowBtn();
	            }, false);
	            this.bindResize = true;
	        }
	    },

	    methods: {
	        ifShowBtn: function ifShowBtn() {
	            var _this2 = this;

	            if (!this.$el) return;

	            this.$nextTick(function () {
	                _this2.showBtn = _this2.$els.panelForm.offsetHeight > _this2.originalHeight;
	            });
	        },
	        click: function click() {
	            this.collapse = !this.collapse;
	        }
	    },
	    components: { card: _card2.default }
	};

/***/ },
/* 518 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"prefix\">\n    <div :class=\"prefix+'-body'\" :style=\"{height:height}\">\n        <div :class=\"prefix+'-form'\" v-el:panel-form :style=\"{paddingRight: panelPR}\">\n            <slot name=\"form\"></slot>\n            <div :class=\"prefix+'-control'\" :style=\"controlStyle\" v-el:panel-control>\n                <slot name=\"control\"></slot>\n            </div>\n        </div>\n    </div>\n    <slot></slot>\n    <div href=\"javascript:;\" :class=\"prefix+'-btn'\" @click=\"click\" v-show=\"showBtn\">\n        <span class=\"anticon\" :class=\"'anticon-'+btnIcon\"></span>\n    </div>\n</div>\n";

/***/ }
/******/ ])
});
;