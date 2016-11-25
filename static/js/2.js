webpackJsonp([2,50],{

/***/ 3:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'props'
	    },
	    head: Array,
	    content: Array,
	    apis: Array,
	    title: {
	      type: String,
	      default: "API"
	    }
	  },
	  ready: function ready() {
	    if (!this.head) {
	      switch (this.type) {
	        case 'props':
	          this.$set('head', ['参数', '说明', '类型', '默认值']);break;
	        case 'events':
	          this.$set('head', ['事件名', '说明', '参数']);break;
	        case 'methods':
	          this.$set('head', ['方法名', '说明', '参数', '返回值']);break;
	      }
	    }
	  }
	};

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n.markdown > table th {\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n  background: #f7f7f7;\n}\n.markdown > table td,\n.markdown > table th {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.markdown.api-container table {\n  font-family: Consolas,Menlo,Courier,monospace;\n  font-size: 13px;\n}\n", ""]);

	// exports


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"markdown api-container\">\n  <h2>{{ title }}</h2>\n  <slot></slot>\n  <table>\n    <thead>\n      <tr>\n        <th v-for=\"text in head\" v-html=\"text\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in content\">\n        <td v-for=\"text in item\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n      <tr v-for=\"api in apis\">\n        <td v-for=\"text in api\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n";

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(5)
	__vue_script__ = __webpack_require__(3)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\apiTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(6)
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


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	try {
	  var query = __webpack_require__(74);
	} catch (err) {
	  var query = __webpack_require__(74);
	}

	/**
	 * Element prototype.
	 */

	var proto = Element.prototype;

	/**
	 * Vendor function.
	 */

	var vendor = proto.matches
	  || proto.webkitMatchesSelector
	  || proto.mozMatchesSelector
	  || proto.msMatchesSelector
	  || proto.oMatchesSelector;

	/**
	 * Expose `match()`.
	 */

	module.exports = match;

	/**
	 * Match `el` to `selector`.
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @return {Boolean}
	 * @api public
	 */

	function match(el, selector) {
	  if (!el || el.nodeType !== 1) return false;
	  if (vendor) return vendor.call(el, selector);
	  var nodes = query.all(selector, el.parentNode);
	  for (var i = 0; i < nodes.length; ++i) {
	    if (nodes[i] == el) return true;
	  }
	  return false;
	}


/***/ },

/***/ 74:
/***/ function(module, exports) {

	function one(selector, el) {
	  return el.querySelector(selector);
	}

	exports = module.exports = function(selector, el){
	  el = el || document;
	  return one(selector, el);
	};

	exports.all = function(selector, el){
	  el = el || document;
	  return el.querySelectorAll(selector);
	};

	exports.engine = function(obj){
	  if (!obj.one) throw new Error('.one callback required');
	  if (!obj.all) throw new Error('.all callback required');
	  one = obj.one;
	  exports.all = obj.all;
	  return exports;
	};


/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	var _clipboard = __webpack_require__(314);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      icons1: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrow-salt', 'down', 'up', 'left', 'right', 'caret-down', 'caret-up', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'up-circle-o', 'down-circle-o', 'left-circle-o', 'right-circle-o', 'double-right', 'double-left', 'verticle-right', 'verticle-left', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'play-circle', 'play-circle-o', 'up-square', 'down-square', 'left-square', 'right-square', 'up-square-o', 'down-square-o', 'left-square-o', 'right-square-o'],
	      icons2: ['question', 'question-circle-o', 'question-circle', 'plus', 'plus-circle-o', 'plus-circle', 'pause', 'pause-circle-o', 'pause-circle', 'minus', 'minus-circle-o', 'minus-circle', 'plus-square', 'plus-square-o', 'minus-square', 'minus-square-o', 'info', 'info-circle-o', 'info-circle', 'exclamation', 'exclamation-circle-o', 'exclamation-circle', 'close', 'close-circle', 'close-circle-o', 'close-square', 'close-square-o', 'check', 'check-circle', 'check-circle-o', 'check-square', 'check-square-o', 'clock-circle-o', 'clock-circle'],
	      icons3: ['lock', 'unlock', 'android', 'apple', 'apple-o', 'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'bars', 'book', 'calendar', 'cloud', 'cloud-download', 'code', 'code-o', 'copy', 'credit-card', 'delete', 'desktop', 'download', 'edit', 'ellipsis', 'file', 'file-text', 'file-unknown', 'file-pdf', 'file-excel', 'file-jpg', 'file-ppt', 'folder', 'folder-open', 'github', 'hdd', 'frown', 'frown-o', 'meh', 'meh-o', 'smile', 'smile-o', 'inbox', 'laptop', 'appstore-o', 'appstore', 'line-chart', 'link', 'logout', 'mail', 'menu-fold', 'menu-unfold', 'mobile', 'notification', 'paper-clip', 'picture', 'poweroff', 'reload', 'search', 'setting', 'share-alt', 'shopping-cart', 'tablet', 'tag', 'tag-o', 'tags', 'tags-o', 'to-top', 'upload', 'user', 'video-camera', 'windows', 'windows-o', 'ie', 'chrome', 'home', 'loading', 'cloud-upload-o', 'cloud-download-o', 'cloud-upload', 'cloud-o', 'star-o', 'star', 'heart-o', 'heart', 'environment', 'environment-o', 'eye', 'eye-o', 'camera', 'camera-o', 'aliwangwang', 'aliwangwang-o', 'save', 'team', 'solution', 'phone', 'filter', 'exception', 'export', 'customer-service', 'qrcode', 'scan', 'like', 'like-o', 'dislike', 'dislike-o', 'message', 'pay-circle', 'pay-circle-o', 'calculator', 'pushpin', 'pushpin-o', 'bulb', 'select'],
	      Copied: false,
	      type: String,
	      content: [['type', '图标类型', 'String', '-'], ['spin', '是否有旋转动画', 'Boolean', 'false']]
	    };
	  },

	  components: {
	    apiTable: _apiTable2.default
	  },

	  computed: {
	    icons1Obj: function icons1Obj() {
	      return this.icons1.map(function (name) {
	        return { name: name, justCopied: false };
	      });
	    },
	    icons2Obj: function icons2Obj() {
	      return this.icons2.map(function (name) {
	        return { name: name, justCopied: false };
	      });
	    },
	    icons3Obj: function icons3Obj() {
	      return this.icons3.map(function (name) {
	        return { name: name, justCopied: false };
	      });
	    }
	  },

	  ready: function ready() {

	    var clipboard = new _clipboard2.default('.anticons-list li');
	    var that = this;
	    clipboard.on('success', function (e) {
	      var target = e.trigger;

	      target.className = 'icon-item copied';

	      setTimeout(function () {
	        target.className = 'icon-item';
	      }, 1000);
	    });
	  },


	  methods: {
	    _getCopyCode: function _getCopyCode(type) {
	      return '<v-icon type="' + type + '"></v-icon>';
	    },
	    clickfunc: function clickfunc(event) {
	      console.log(this);
	      console.log(event);
	    }
	  }

	};

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(414)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';

	    var _select2 = _interopRequireDefault(_select);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	    };

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }

	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();

	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */

	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);

	            this.resolveOptions(options);
	            this.initSelection();
	        }

	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */


	        ClipboardAction.prototype.resolveOptions = function resolveOptions() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            this.action = options.action;
	            this.emitter = options.emitter;
	            this.target = options.target;
	            this.text = options.text;
	            this.trigger = options.trigger;

	            this.selectedText = '';
	        };

	        ClipboardAction.prototype.initSelection = function initSelection() {
	            if (this.text) {
	                this.selectFake();
	            } else if (this.target) {
	                this.selectTarget();
	            }
	        };

	        ClipboardAction.prototype.selectFake = function selectFake() {
	            var _this = this;

	            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

	            this.removeFake();

	            this.fakeHandlerCallback = function () {
	                return _this.removeFake();
	            };
	            this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;

	            this.fakeElem = document.createElement('textarea');
	            // Prevent zooming on iOS
	            this.fakeElem.style.fontSize = '12pt';
	            // Reset box model
	            this.fakeElem.style.border = '0';
	            this.fakeElem.style.padding = '0';
	            this.fakeElem.style.margin = '0';
	            // Move element out of screen horizontally
	            this.fakeElem.style.position = 'absolute';
	            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	            // Move element to the same position vertically
	            this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
	            this.fakeElem.setAttribute('readonly', '');
	            this.fakeElem.value = this.text;

	            document.body.appendChild(this.fakeElem);

	            this.selectedText = (0, _select2.default)(this.fakeElem);
	            this.copyText();
	        };

	        ClipboardAction.prototype.removeFake = function removeFake() {
	            if (this.fakeHandler) {
	                document.body.removeEventListener('click', this.fakeHandlerCallback);
	                this.fakeHandler = null;
	                this.fakeHandlerCallback = null;
	            }

	            if (this.fakeElem) {
	                document.body.removeChild(this.fakeElem);
	                this.fakeElem = null;
	            }
	        };

	        ClipboardAction.prototype.selectTarget = function selectTarget() {
	            this.selectedText = (0, _select2.default)(this.target);
	            this.copyText();
	        };

	        ClipboardAction.prototype.copyText = function copyText() {
	            var succeeded = undefined;

	            try {
	                succeeded = document.execCommand(this.action);
	            } catch (err) {
	                succeeded = false;
	            }

	            this.handleResult(succeeded);
	        };

	        ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
	            if (succeeded) {
	                this.emitter.emit('success', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            } else {
	                this.emitter.emit('error', {
	                    action: this.action,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        };

	        ClipboardAction.prototype.clearSelection = function clearSelection() {
	            if (this.target) {
	                this.target.blur();
	            }

	            window.getSelection().removeAllRanges();
	        };

	        ClipboardAction.prototype.destroy = function destroy() {
	            this.removeFake();
	        };

	        _createClass(ClipboardAction, [{
	            key: 'action',
	            set: function set() {
	                var action = arguments.length <= 0 || arguments[0] === undefined ? 'copy' : arguments[0];

	                this._action = action;

	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }

	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }

	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);

	        return ClipboardAction;
	    }();

	    module.exports = ClipboardAction;
	});

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(313), __webpack_require__(415), __webpack_require__(413)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';

	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

	    var _goodListener2 = _interopRequireDefault(_goodListener);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }

	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }

	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);

	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */

	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);

	            var _this = _possibleConstructorReturn(this, _Emitter.call(this));

	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }

	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */


	        Clipboard.prototype.resolveOptions = function resolveOptions() {
	            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	        };

	        Clipboard.prototype.listenClick = function listenClick(trigger) {
	            var _this2 = this;

	            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                return _this2.onClick(e);
	            });
	        };

	        Clipboard.prototype.onClick = function onClick(e) {
	            var trigger = e.delegateTarget || e.currentTarget;

	            if (this.clipboardAction) {
	                this.clipboardAction = null;
	            }

	            this.clipboardAction = new _clipboardAction2.default({
	                action: this.action(trigger),
	                target: this.target(trigger),
	                text: this.text(trigger),
	                trigger: trigger,
	                emitter: this
	            });
	        };

	        Clipboard.prototype.defaultAction = function defaultAction(trigger) {
	            return getAttributeValue('action', trigger);
	        };

	        Clipboard.prototype.defaultTarget = function defaultTarget(trigger) {
	            var selector = getAttributeValue('target', trigger);

	            if (selector) {
	                return document.querySelector(selector);
	            }
	        };

	        Clipboard.prototype.defaultText = function defaultText(trigger) {
	            return getAttributeValue('text', trigger);
	        };

	        Clipboard.prototype.destroy = function destroy() {
	            this.listener.destroy();

	            if (this.clipboardAction) {
	                this.clipboardAction.destroy();
	                this.clipboardAction = null;
	            }
	        };

	        return Clipboard;
	    }(_tinyEmitter2.default);

	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;

	        if (!element.hasAttribute(attribute)) {
	            return;
	        }

	        return element.getAttribute(attribute);
	    }

	    module.exports = Clipboard;
	});

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module Dependencies
	 */

	try {
	  var matches = __webpack_require__(73)
	} catch (err) {
	  var matches = __webpack_require__(73)
	}

	/**
	 * Export `closest`
	 */

	module.exports = closest

	/**
	 * Closest
	 *
	 * @param {Element} el
	 * @param {String} selector
	 * @param {Element} scope (optional)
	 */

	function closest (el, selector, scope) {
	  scope = scope || document.documentElement;

	  // walk up the dom
	  while (el && el !== scope) {
	    if (matches(el, selector)) return el;
	    el = el.parentNode;
	  }

	  // check scope for match
	  return matches(el, selector) ? el : null;
	}


/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".markdown > ul li[_v-022d174b] {\n  list-style: circle;\n  margin-left: 20px;\n}\n.markdown pre[_v-022d174b] {\n  background: #F7F7F7;\n  border-radius: 6px;\n}\n.markdown pre[_v-022d174b] {\n  margin: 1.2em 0;\n  padding: 1em;\n}\n.markdown code[_v-022d174b] {\n  margin: 0 3px;\n}\nul.anticons-list[_v-022d174b] {\n  margin: 20px 0;\n  list-style: none;\n  overflow: hidden;\n}\nul.anticons-list li[_v-022d174b] {\n  float: left;\n  margin: 5px 5px 5px 0;\n  width: 155px;\n  text-align: center;\n  list-style: none;\n  cursor: pointer;\n  height: 110px;\n  color: #5C6B77;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  position: relative;\n  padding-top: 10px;\n}\nul.anticons-list li[_v-022d174b]:hover {\n  background-color: #4BB8FF;\n  color: #fff;\n  border-radius: 4px;\n}\nul.anticons-list li.copied[_v-022d174b]:hover {\n  color: rgba(255, 255, 255, 0.2);\n}\nul.anticons-list li[_v-022d174b]:after {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  content: \"Copied!\";\n  text-align: center;\n  line-height: 110px;\n  color: #fff;\n  -webkit-transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);\n  opacity: 0;\n}\nul.anticons-list li.copied[_v-022d174b]:after {\n  opacity: 1;\n  top: 0;\n}\n.anticon[_v-022d174b] {\n  font-size: 26px;\n  margin: 12px 0 16px;\n}\n.anticon-class[_v-022d174b] {\n  display: block;\n  text-align: center;\n  word-wrap: break-word;\n}\n", ""]);

	// exports


/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(315);

	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);

	    element.addEventListener(type, listenerFn, useCapture);

	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}

	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector, true);

	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}

	module.exports = delegate;


/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(374);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js?id=_v-022d174b&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./font.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js?id=_v-022d174b&scoped=true!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./font.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 412:
/***/ function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};

	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);

	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};

	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};

	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);

	    return type === '[object Function]';
	};


/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(412);
	var delegate = __webpack_require__(376);

	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }

	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }

	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }

	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}

	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);

	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}

	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });

	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}

	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}

	module.exports = listen;


/***/ },

/***/ 414:
/***/ function(module, exports) {

	function select(element) {
	    var selectedText;

	    if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        element.focus();
	        element.setSelectionRange(0, element.value.length);

	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }

	        var selection = window.getSelection();
	        var range = document.createRange();

	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);

	        selectedText = selection.toString();
	    }

	    return selectedText;
	}

	module.exports = select;


/***/ },

/***/ 415:
/***/ function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };

	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },

	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];

	    return this;
	  }
	};

	module.exports = E;


/***/ },

/***/ 546:
/***/ function(module, exports) {

	module.exports = "\n\n<div _v-022d174b=\"\">\n  <section class=\"markdown\" _v-022d174b=\"\">\n    <h1 _v-022d174b=\"\">Iconfont</h1>\n    <p _v-022d174b=\"\">\n      语义化的矢量图形。\n    </p>\n    <h2 _v-022d174b=\"\">图标的命名规范</h2>\n    <p _v-022d174b=\"\">\n      我们为每个图标赋予了语义化的命名，命名规则如下:\n    </p>\n    <ul _v-022d174b=\"\">\n      <li _v-022d174b=\"\">\n        实心和描线图标保持同名，用 -o 来区分，比如 question-circle(实心) 和 question-circle-o(描线)；\n      </li>\n      <li _v-022d174b=\"\">\n        命名顺序：[icon名]-[形状可选]-[描线与否]-[方向可选]。\n      </li>\n    </ul>\n\n    <h2 _v-022d174b=\"\">如何使用</h2>\n    <p _v-022d174b=\"\">使用 <v-icon _v-022d174b=\"\"></v-icon>标签声明组件，指定图标对应的 type 属性，示例代码如下:</p>\n    <pre _v-022d174b=\"\"><code class=\"lang-html\" _v-022d174b=\"\">&lt;v-icon type=\"link\"&gt;&lt;/v-icon&gt;</code></pre>\n\n    <p _v-022d174b=\"\">最终会渲染为：</p>\n\n    <pre _v-022d174b=\"\"><code class=\"lang-html\" _v-022d174b=\"\">&lt;i class=\"anticon anticon-link\"&gt;&lt;/i&gt;</code></pre>\n    <h2 _v-022d174b=\"\">本地部署</h2>\n    <p _v-022d174b=\"\">图标组件使用 <a href=\"http://www.iconfont.cn/\" target=\"blank\" _v-022d174b=\"\">iconfont.cn</a>，默认公网可访问。如需本地部署，可参考 <a href=\"https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont\" target=\"blank\" _v-022d174b=\"\">示例</a>。</p>\n    <p style=\"color:#ff7800\" _v-022d174b=\"\">* 点击下面的图标即可复制标签</p>\n    \n    <api-table :content=\"content\" _v-022d174b=\"\">\n      <h3 _v-022d174b=\"\">Icon</h3>\n    </api-table>\n\n    <h2 _v-022d174b=\"\">图标列表</h2>\n    <h3 _v-022d174b=\"\">方向性图标</h3>\n\n    <ul class=\"anticons-list\" _v-022d174b=\"\">\n      <li class=\"icon-item\" v-for=\"icon in icons1Obj\" :class=\"{copied: Copied}\" :data-clipboard-text=\"_getCopyCode(icon.name)\" _v-022d174b=\"\">\n        <span class=\"anticon anticon-{{icon.name}}\" _v-022d174b=\"\"></span>\n        <span class=\"anticon-class\" _v-022d174b=\"\">{{icon.name}}</span>\n      </li>\n    </ul>\n\n    <h3 _v-022d174b=\"\">提示建议性图标</h3>\n\n    <ul class=\"anticons-list\" _v-022d174b=\"\">\n      <li class=\"icon-item\" v-for=\"icon in icons2Obj\" :class=\"{copied: Copied}\" :data-clipboard-text=\"_getCopyCode(icon.name)\" _v-022d174b=\"\">\n        <span class=\"anticon anticon-{{icon.name}}\" _v-022d174b=\"\"></span>\n        <span class=\"anticon-class\" _v-022d174b=\"\">{{icon.name}}</span>\n      </li>\n    </ul>\n\n    <h3 _v-022d174b=\"\">网站通用图标</h3>\n\n    <ul class=\"anticons-list\" _v-022d174b=\"\">\n      <li class=\"icon-item\" v-for=\"icon in icons3Obj\" :class=\"{copied: Copied}\" :data-clipboard-text=\"_getCopyCode(icon.name)\" _v-022d174b=\"\">\n        <span class=\"anticon anticon-{{icon.name}}\" _v-022d174b=\"\"></span>\n        <span class=\"anticon-class\" _v-022d174b=\"\">{{icon.name}}</span>\n      </li>\n    </ul>\n\n  </section>\n</div>\n\n";

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(409)
	__vue_script__ = __webpack_require__(204)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\font.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(546)
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