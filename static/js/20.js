webpackJsonp([20,49],{

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

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{ describe }}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\">\n          <slot name=\"preCode\"></slot>\n          {{ code }}\n          <slot name=\"postCode\">\n          </slot>\n        </code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

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

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _layout = __webpack_require__(25);

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      apis: [{
	        parameter: 'span',
	        explain: '栅格系统（列）元素，row的直接元素，其值1到24来表示其跨越row的范围。例如，三个等宽d的列可以使用.col-8来创建，将一行整分割成3份同样大小的区域',
	        type: 'String,Number',
	        default: '无'
	      }, {
	        parameter: 'push',
	        explain: '栅格系统内子元素默认是左浮动，push的作用设置子元素基于自己原来浮动的位置的向右移动的距离',
	        type: 'String,Number',
	        default: '无'
	      }, {
	        parameter: 'pull',
	        explain: '栅格系统内子元素默认是左浮动，pull的作用设置子元素基于自己原来浮动的位置的向左移动的距离',
	        type: 'String,Number',
	        default: '无'
	      }, {
	        parameter: 'offset',
	        explain: '栅格系统内子元素默认是左浮动，offset的作用设置子元素的margin-left的值',
	        type: 'String,Number',
	        default: '无'
	      }, {
	        parameter: 'display',
	        explain: '栅格系统（行）区域，规定外层元素应该生成的框的类型，可用值 "flex"',
	        type: 'String',
	        default: "block"
	      }, {
	        parameter: 'pack',
	        explain: '栅格系统（行）区域，规定display="flex"类型的外层元素内部元素的排列模式，可选值["start","center","end","space-between","space-around"]，声明该值的时候display="flex"是必须的',
	        type: 'String',
	        default: 'start'
	      }, {
	        parameter: 'align',
	        explain: '栅格系统（行）区域，规定display="flex"类型的外层元素内部元素的对齐模式，可选值["top","middle","bottom"]，声明该值的时候display="flex"是必须的',
	        type: 'Array',
	        default: '无'
	      }, {
	        parameter: 'order',
	        explain: '栅格化系统支持 Flex 布局，支持使用 order 来定义子元素的排列顺序。',
	        type: 'String,Number',
	        default: '无'
	      }]
	    };
	  },
	  components: { vRow: _layout.vRow, vCol: _layout.vCol, codeBox: _codeBox2.default, apiTable: _apiTable2.default }
	};

/***/ },

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".global .code-box:hover {\n  box-shadow: none;\n}\n.global .highlight pre code {\n  background: #f7f7f7;\n}\n.global .ant-row .paragraph-14px {\n  font-size: 14px;\n}\n.global .ant-row .paragraph-12px {\n  font-size: 12px;\n}\n.global .demo-row {\n  margin-bottom: 20px;\n}\n.global .demo-ant-row-col .ant-row,\n.global .demo-row {\n  background-image: -webkit-linear-gradient(left, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);\n  background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);\n  overflow: hidden;\n}\n.global .row-flex {\n  background: #F5F5F5;\n}\n.global .demo-ant-row-col .ant-row div,\n.global .demo-row div,\n.global .row-flex div {\n  padding: 5px 0;\n  background: rgba(24, 115, 216, 0.7);\n  text-align: center;\n  min-height: 28px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  margin-top: 10px;\n  margin-bottom: 10px;\n  color: #fff;\n}\n.global .demo-row .demo-col {\n  text-align: center;\n  padding: 40px 0;\n  color: #fff;\n  font-size: 18px;\n  border: none;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.global .demo-row .demo-col-1 {\n  background: rgba(24, 115, 216, 0.7);\n}\n.global .demo-row .demo-col-2 {\n  background: rgba(24, 115, 216, 0.5);\n}\n.global .demo-row .demo-col-3 {\n  background: rgba(255, 255, 255, 0.2);\n  color: #999;\n}\n.global .demo-row .demo-col-4 {\n  background: rgba(24, 115, 216, 0.6);\n}\n.global .demo-row .demo-col-5 {\n  background: rgba(255, 255, 255, 0.5);\n  color: #999;\n}\n.global .hight-100 {\n  height: 100px;\n}\n.global .hight-50 {\n  height: 50px;\n}\n.global .hight-120 {\n  height: 120px;\n}\n.global .hight-80 {\n  height: 80px;\n}\n.global .testRowClassName {\n  background: #f0f0f0;\n}\n.global div.testColClassName {\n  background: rgba(24, 115, 216, 0.9);\n}\n", ""]);

	// exports


/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(380);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./layout.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./layout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 569:
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"markdown global\">\n\n  <h2>栅格设计理念</h2>\n  <p>在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题，因此在12栅格系统的基础上，我们将整个设计建议区域按照24等分的原则进行划分。\n划分之后的信息区块我们称之为“盒子”。\n建议横向排列的盒子数量最多四个，最少一个。“盒子”在整个屏幕上占比见下图。\n设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。\n  </p>\n\n  <v-row class=\"demo-row\">\n    <v-col class=\"demo-col demo-col-1\" span=\"24\">\n      100%\n    </v-col>\n  </v-row>\n\n  <v-row class=\"demo-row\">\n    <v-col class=\"demo-col demo-col-2\" span=\"6\">25%</v-col>\n    <v-col class=\"demo-col demo-col-3\" span=\"6\">25%</v-col>\n    <v-col class=\"demo-col demo-col-2\" span=\"6\">25%</v-col>\n    <v-col class=\"demo-col demo-col-3\" span=\"6\">25%</v-col>\n  </v-row>\n\n  <v-row class=\"demo-row\">\n    <v-col class=\"demo-col demo-col-4\" span=\"8\">33.33%</v-col>\n    <v-col class=\"demo-col demo-col-5\" span=\"8\">33.33%</v-col>\n    <v-col class=\"demo-col demo-col-4\" span=\"8\">33.33%</v-col>\n  </v-row>\n\n  <v-row class=\"demo-row\">\n    <v-col class=\"demo-col demo-col-1\" span=\"12\">50%</v-col>\n    <v-col class=\"demo-col demo-col-3\" span=\"12\">50%</v-col>\n  </v-row>\n\n  <v-row class=\"demo-row\">\n    <v-col class=\"demo-col demo-col-4\" span=\"16\">66.66%</v-col>\n    <v-col class=\"demo-col demo-col-5\" span=\"8\">33.33%</v-col>\n  </v-row>\n\n  <h2>概述</h2>\n  <p>\n  布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>\n  <ul>\n    <li>通过row在水平方向建立一组column（简写col）</li>\n    <li>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li>\n    <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽d的列可以使用.ant-col-8来创建</li>\n    <li>如果一个row中的col总和超过24，那么多余的col会作为一个整体另起一行排列</li>\n  </ul>\n\n  <h2>组件演示</h2>\n  <div class=\"ant-row\">\n    <div class=\"ant-col-11\">\n      <code-box\n        title=\"基本布局演示\"\n        describe=\"点击戳开代码\"\n        code='\n          <v-row><v-col span=\"24\">100%</v-col></v-row>\n          <v-row>\n            <v-col span=\"6\">25%</v-col>\n            <v-col span=\"6\">25%</v-col>\n            <v-col span=\"6\">25%</v-col>\n            <v-col span=\"6\">25%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"8\">33.33%</v-col>\n            <v-col span=\"8\">33.33%</v-col>\n            <v-col span=\"8\">33.33%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"12\">50%</v-col>\n            <v-col span=\"12\">50%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"16\">66.66%</v-col>\n            <v-col span=\"8\">33.33%</v-col>\n          </v-row>'>\n        <div class=\"demo-ant-row-col\">\n          <v-row><v-col span=\"24\">100%</v-col></v-row>\n          <v-row>\n            <v-col span=\"6\">25%</v-col>\n            <v-col span=\"6\">25%</v-col>\n            <v-col span=\"6\">25%</v-col>\n            <v-col span=\"6\">25%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"8\">33.33%</v-col>\n            <v-col span=\"8\">33.33%</v-col>\n            <v-col span=\"8\">33.33%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"12\">50%</v-col>\n            <v-col span=\"12\">50%</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"16\">66.66%</v-col>\n            <v-col span=\"8\">33.33%</v-col>\n          </v-row>\n\n        </div>\n      </code-box>\n\n    </div>\n\n    <div class=\"ant-col-2\">\n\n    </div>\n\n    <div class=\"ant-col-11\">\n      <code-box\n        title=\"可以左右偏移的布局\"\n        describe=\"ant-col-offset-n n为想要margin-left多少个栅格的距离\"\n        code='\n          <v-row>\n            <v-col span=\"8\">.ant-col-8</v-col>\n            <v-col span=\"8\" offset=\"8\">.ant-col-8 ant-col-offset-8</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"6\" offset=\"6\">.ant-col-6 .ant-col-offset-6</v-col>\n            <v-col span=\"6\" offset=\"6\">.ant-col-6 .ant-col-offset-6</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"12\" offset=\"6\">.ant-col-12 .ant-col-offset-6</v-col>\n          </v-row>'>\n        <div class=\"demo-ant-row-col\">\n\n          <v-row>\n            <v-col span=\"8\">.ant-col-8</v-col>\n            <v-col span=\"8\" offset=\"8\">.ant-col-8 ant-col-offset-8</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"6\" offset=\"6\">.ant-col-6 .ant-col-offset-6</v-col>\n            <v-col span=\"6\" offset=\"6\">.ant-col-6 .ant-col-offset-6</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"12\" offset=\"6\">.ant-col-12 .ant-col-offset-6</v-col>\n          </v-row>\n\n        </div>\n\n      </code-box>\n    </div>\n\n  </div>\n\n  <br/>\n\n  <div class=\"ant-row\">\n    <div class=\"ant-col-11\">\n      <code-box\n        title=\"布局排序\"\n        describe=\"栅格系统内子元素默认是左浮动，push的作用设置子元素基于自己原来浮动的位置的向右移动的距离，pull的作用设置子元素基于自己原来浮动的位置的向左移动的距离\"\n        code='\n          <v-row>\n            <v-col span=\"18\" push=\"6\">.ant-col-18 .ant-col-push-6</v-col>\n            <v-col span=\"6\" pull=\"18\">.ant-col-6 .ant-col-pull-18</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"12\" push=\"12\">.ant-col-push-12 .ant-col-12</v-col>\n            <v-col span=\"12\" pull=\"12\">.ant-col-pull-12 .ant-col-12</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"6\" push=\"12\">.ant-col-push-12 .ant-col-6 1</v-col>\n            <v-col span=\"6\" push=\"12\">.ant-col-push-6 .ant-col-6 2</v-col>\n            <v-col span=\"12\" pull=\"12\">.ant-col-pull-6 .ant-col-12</v-col>\n          </v-row>\n        '>\n        <div class=\"demo-ant-row-col\">\n\n          <v-row>\n            <v-col span=\"18\" push=\"6\">.ant-col-18 .ant-col-push-6</v-col>\n            <v-col span=\"6\" pull=\"18\">.ant-col-6 .ant-col-pull-18</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"12\" push=\"12\">.ant-col-push-12 .ant-col-12</v-col>\n            <v-col span=\"12\" pull=\"12\">.ant-col-pull-12 .ant-col-12</v-col>\n          </v-row>\n\n          <v-row>\n            <v-col span=\"6\" push=\"12\">.ant-col-push-12 .ant-col-6 1</v-col>\n            <v-col span=\"6\" push=\"12\">.ant-col-push-6 .ant-col-6 2</v-col>\n            <v-col span=\"12\" pull=\"12\">.ant-col-pull-6 .ant-col-12</v-col>\n          </v-row>\n        </div>\n      </code-box>\n    </div>\n  </div>\n\n  <h2>Flex 布局</h2>\n  <p>\n    我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。\n    Flex 布局是基于 24 栅格来定义每一个“盒子”的宽度，但排版则不拘泥于栅格。\n  </p>\n\n  <div class=\"ant-row\">\n    <div class=\"ant-col-11\">\n      <h3>Flex布局</h3>\n      <code-box\n        title=\"Flex布局：排列\"\n        describe=\"点击戳开代码 关键词：start, center, end, space-between, space-around\"\n        code='\n        <p>子元素居左排列（默认）.ant-row-flex-start .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"start\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素居中排列 .ant-row-flex-center .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"center\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素居右排列 .ant-row-flex-end .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"end\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素等宽排列 .ant-row-flex-space-between .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"space-between\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素分散对齐 .ant-row-flex-space-around .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"space-around\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>'>\n        <div class=\"demo-ant-row-col\">\n          <p>子元素居左排列（默认）.ant-row-flex-start .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"start\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素居中排列 .ant-row-flex-center .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"center\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素居右排列 .ant-row-flex-end .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"end\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素等宽排列 .ant-row-flex-space-between .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"space-between\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n          <p>子元素分散对齐 .ant-row-flex-space-around .ant-row-flex .ant-row</p>\n          <v-row display=\"flex\" pack=\"space-around\">\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n            <v-col span=\"4\">.ant-col-4</v-col>\n          </v-row>\n        </div>\n      </code-box>\n\n      <h3>Flex排序</h3>\n      <code-box\n        title=\"Flex排序\"\n        describe=\"点击戳开代码 关键词：ant-col-order-n n为想要的顺序\"\n        code='\n          <v-row display=\"flex\">\n            <v-col order=\"4\" span=\"6\">1 ant-col-order-4</v-col>\n            <v-col order=\"3\" span=\"6\">2 ant-col-order-3</v-col>\n            <v-col order=\"2\" span=\"6\">3 ant-col-order-2</v-col>\n            <v-col order=\"1\" span=\"6\">4 ant-col-order-1</v-col>\n          </v-row>'>\n        <div class=\"demo-ant-row-col\">\n          <v-row display=\"flex\">\n            <v-col order=\"4\" span=\"6\">1 ant-col-order-4</v-col>\n            <v-col order=\"3\" span=\"6\">2 ant-col-order-3</v-col>\n            <v-col order=\"2\" span=\"6\">3 ant-col-order-2</v-col>\n            <v-col order=\"1\" span=\"6\">4 ant-col-order-1</v-col>\n          </v-row>\n        </div>\n      </code-box>\n\n    </div>\n    <div class=\"ant-col-2\"></div>\n    <div class=\"ant-col-11\">\n      <h3>Flex对齐</h3>\n      <code-box\n        title=\"Flex对齐：配合排列方式的对齐方式\"\n        describe=\"点击戳开代码 关键词：flex-top, flex-middle, flex-bottom\"\n        code='<p>顶部对齐</p>\n        <div class=\"ant-row-flex-center ant-row-flex-top ant-row-flex ant-row\">\n          <div class=\"ant-col-4\"><p style=\"height: 100px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 50px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 120px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 80px\">.ant-col-4</p></div>\n        </div>\n        <p>居中对齐</p>\n        <div class=\"ant-row-flex-space-around ant-row-flex-middle ant-row-flex ant-row\">\n          <div class=\"ant-col-4\"><p style=\"height: 100px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 50px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 120px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 80px\">.ant-col-4</p></div>\n        </div>\n        <p>底部对齐</p>\n        <div class=\"ant-row-flex-space-between ant-row-flex-bottom ant-row-flex ant-row\">\n          <div class=\"ant-col-4\"><p style=\"height: 100px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 50px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 120px\">.ant-col-4</p></div>\n          <div class=\"ant-col-4\"><p style=\"height: 80px\">.ant-col-4</p></div>\n        </div>\n        '>\n        <div class=\"demo-ant-row-col\">\n          <p>顶部对齐 .ant-row-flex-center .ant-row-flex-top .ant-row-flex .ant-row</p>\n          <v-row pack=\"center\" display=\"flex\" align=\"top\">\n            <v-col span=\"4\"><p style=\"height: 100px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 50px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 120px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 80px\">.ant-col-4</p></v-col>\n          </v-row>\n\n          <p>居中对齐 .ant-row-flex-space-around .ant-row-flex-middle .ant-row-flex .ant-row</p>\n          <v-row pack=\"space-around\" display=\"flex\" align=\"middle\">\n            <v-col span=\"4\"><p style=\"height: 100px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 50px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 120px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 80px\">.ant-col-4</p></v-col>\n          </v-row>\n          <p>底部对齐 .ant-row-flex-space-between .ant-row-flex-bottom .ant-row-flex .ant-row</p>\n          <v-row pack=\"space-between\" display=\"flex\" align=\"bottom\">\n            <v-col span=\"4\"><p style=\"height: 100px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 50px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 120px\">.ant-col-4</p></v-col>\n            <v-col span=\"4\"><p style=\"height: 80px\">.ant-col-4</p></v-col>\n          </v-row>\n        </div>\n      </code-box>\n    </div>\n  </div>\n\n  <api-table\n    :apis='apis'\n  ></api-table>\n\n</div>\n\n";

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(437)
	__vue_script__ = __webpack_require__(282)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\layout.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(569)
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