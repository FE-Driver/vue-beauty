webpackJsonp([42,49],{

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

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    title: String,
	    describe: String,
	    code: String
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    var children = this._slotContents.default.childNodes;

	    children = Array.prototype.filter.call(children, function (node) {
	      return node.nodeType === 1;
	    });

	    if (!this.code) {
	      this.code = children.map(function (dom) {
	        return dom.outerHTML.replace(/\t| {4}/g, '');
	      }).join('\n');
	    }

	    this.$nextTick(function () {
	      hljs.highlightBlock(_this.$el.querySelector('pre code'));
	    });
	  },

	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	    }
	  }
	};

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".code-box {\n  border: 1px solid #e9e9e9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: .5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box .collapse:hover {\n  opacity: 1;\n}\n.code-box:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 10;\n  background: #fff;\n}\n.code-box:hover .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n.code-box:hover .code-box-meta {\n  background: #fbfbfb;\n}\n.code-box .code-box-demo {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 42px 20px 50px;\n}\n.code-box .highlight-wrapper {\n  max-height: 0;\n  opacity: 0;\n  overflow: auto;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  border-radius: 0 0 6px 6px;\n}\n.code-box .highlight-wrapper-expand {\n  max-height: 500px;\n  opacity: 1;\n}\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #e9e9e9;\n}\n.code-box-meta {\n  position: relative;\n  padding: 16px;\n  border-radius: 0 0 6px 6px;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n  width: 100%;\n  font-size: 12px;\n}\n.code-box-meta p {\n  margin: 0;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E6D2\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  display: inline-block;\n}\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n  font-size: 14px;\n}\n.highlight {\n  line-height: 1.5;\n}\n.highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  width: auto;\n}\n.highlight pre code {\n  display: block;\n  color: #666;\n  line-height: 1.7;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n  border-radius: 6px;\n  font-size: 13px;\n  border: none;\n  background: #fff;\n}\n.hljs {\n  background: none;\n}\n", ""]);

	// exports


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{ describe }}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\"><slot name=\"preCode\"></slot>{{ code }}<slot name=\"postCode\"></slot></code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\codeBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(11)
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

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _progress = __webpack_require__(85);

	var _button = __webpack_require__(117);

	var _button2 = _interopRequireDefault(_button);

	var _buttonGroup = __webpack_require__(118);

	var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

	var _iconfont = __webpack_require__(22);

	var _iconfont2 = _interopRequireDefault(_iconfont);

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      percentLine: 10,
	      percentCircle: 10,
	      progressBarApis: [{
	        parameter: 'percent',
	        explain: '百分比',
	        type: 'Number',
	        default: 0
	      }, {
	        parameter: 'status',
	        explain: '状态，有normal、exception、active、success四个状态值',
	        type: 'String',
	        default: 'normal'
	      }, {
	        parameter: 'strokeWidth',
	        explain: '进度条线的宽度，单位是px',
	        type: 'Number',
	        default: 1
	      }, {
	        parameter: 'showInfo',
	        explain: '是否显示进度数值和状态图标',
	        type: 'Boolean',
	        default: true
	      }],
	      progressCircleApis: [{
	        parameter: 'percent',
	        explain: '百分比',
	        type: 'Number',
	        default: 0
	      }, {
	        parameter: 'status',
	        explain: '状态，有normal、exception、success三个状态值',
	        type: 'String',
	        default: 'normal'
	      }, {
	        parameter: 'strokeWidth',
	        explain: '进度圈线的宽度，单位是进度圈画布宽度的百分比',
	        type: 'Number',
	        default: 1
	      }, {
	        parameter: 'width',
	        explain: '必填，进度圈画布宽度，单位px。这里没有提供height属性设置，Line型高度就是strokeWidth，Circle型高度等于width',
	        type: 'Number',
	        default: 'null'
	      }]
	    };
	  },


	  components: {
	    vProgressLine: _progress.vProgressLine,
	    vProgressCircle: _progress.vProgressCircle,
	    vButtonGroup: _buttonGroup2.default,
	    vButton: _button2.default,
	    vIcon: _iconfont2.default,
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  },

	  methods: {
	    _declineLine: function _declineLine() {
	      var percent = this.percentLine - 10;
	      if (percent < 0) {
	        percent = 0;
	      }
	      this.percentLine = percent;
	    },
	    _increaseLine: function _increaseLine() {
	      var percent = this.percentLine + 10;
	      if (percent > 100) {
	        percent = 100;
	      }
	      this.percentLine = percent;
	    },
	    _declineCircle: function _declineCircle() {
	      var percent = this.percentCircle - 10;
	      if (percent < 0) {
	        percent = 0;
	      }
	      this.percentCircle = percent;
	    },
	    _increaseCircle: function _increaseCircle() {
	      var percent = this.percentCircle + 10;
	      if (percent > 100) {
	        percent = 100;
	      }
	      this.percentCircle = percent;
	    }
	  }

	};

/***/ },

/***/ 578:
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <section class=\"markdown\">\n    <h1>Progress 进度条</h1>\n    <p>\n      进度条，展示操作的当前进度。\n    </p>\n    <h2>何时使用</h2>\n    <p>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</p>\n    <ul>\n      <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>\n      <li>当需要显示一个操作完成的百分比时。</li>\n    </ul>\n    <h2>组件演示</h2>\n  </section>\n\n  <div class=\"ant-row\" style=\"margin-left: -8px; margin-right: -8px;\">\n    <div class=\"ant-col-lg-12 code-boxes-col-2-1\">\n      <code-box title=\"进度条\" describe=\"有normal、exception、active、success四个样式的进度条,默认为normal值,当进度为100时自动设置为success\">\n        <v-progress-line :percent=\"30\" description=\"普通的进度条\"></v-progress-line>\n        <v-progress-line :percent=\"50\" status=\"active\"></v-progress-line>\n        <v-progress-line :percent=\"70\" status=\"exception\"></v-progress-line>\n        <v-progress-line :percent=\"100\"></v-progress-line>\n        <v-progress-line :percent=\"50\" :show-info=\"false\"></v-progress-line>\n      </code-box>\n\n      <code-box title=\"小型进度条\" describe=\"通过设置strokeWidth,可以更灵活地使用进度条\">\n        <v-progress-line :percent=\"30\"  :stroke-width=\"5\"></v-progress-line>\n        <v-progress-line :percent=\"50\"  :stroke-width=\"5\" status=\"active\"></v-progress-line>\n        <v-progress-line :percent=\"70\"  :stroke-width=\"5\" status=\"exception\"></v-progress-line>\n        <v-progress-line :percent=\"100\" :stroke-width=\"5\"></v-progress-line>\n      </code-box>\n\n      <code-box title=\"动态展示\" describe=\"通过动态的改变进度,可以让进度条更有趣\">\n        <v-progress-line :percent=\"percentLine\"></v-progress-line>\n        <v-button-group>\n          <v-button type=\"ghost\" @click=\"_declineLine\">\n            <v-icon type=\"minus\"></v-icon>\n          </v-button>\n          <v-button type=\"ghost\" @click=\"_increaseLine\">\n            <v-icon type=\"plus\"></v-icon>\n          </v-button>\n        </v-button-group>\n      </code-box>\n\n    </div>\n    <div class=\"ant-col-lg-12 code-boxes-col-2-1\">\n\n      <code-box title=\"进度圈\" describe=\"有normal、exception、success三个样式的进度条,默认为normal值,当进度为100时自动设置为success\">\n        <v-progress-circle :percent=\"30\"></v-progress-circle>\n        <v-progress-circle :percent=\"70\" status=\"exception\"></v-progress-circle>\n        <v-progress-circle :percent=\"100\"></v-progress-circle>\n      </code-box>\n\n      <code-box title=\"小型进度圈\" describe=\"通过设置width,可以更灵活地使用进度圈\">\n        <v-progress-circle :percent=\"30\"  :width=\"80\"></v-progress-circle>\n        <v-progress-circle :percent=\"70\"  :width=\"80\" status=\"exception\"></v-progress-circle>\n        <v-progress-circle :percent=\"100\" :width=\"80\"></v-progress-circle>\n      </code-box>\n\n      <code-box title=\"进度圈动态展示\" describe=\"通过动态的改变进度,可以让进度圈更有趣\">\n        <v-progress-circle :percent=\"percentCircle\"></v-progress-circle>\n        <v-button-group>\n          <v-button type=\"ghost\" @click=\"_declineCircle\">\n            <v-icon type=\"minus\"></v-icon>\n          </v-button>\n          <v-button type=\"ghost\" @click=\"_increaseCircle\">\n            <v-icon type=\"plus\"></v-icon>\n          </v-button>\n        </v-button-group>\n      </code-box>\n\n    </div>\n  </div>\n\n  <api-table\n    title=\"Progress Bar API\"\n    :apis='progressBarApis'\n  ></api-table>\n\n  <api-table\n    title=\"Progress Circle API\"\n    :apis='progressCircleApis'\n  ></api-table>\n</div>\n";

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(291)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\progress.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(578)
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