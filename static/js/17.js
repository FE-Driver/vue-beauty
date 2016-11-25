webpackJsonp([17,50],{

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

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{{ describe }}}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\"><slot name=\"preCode\"></slot>{{ code }}<slot name=\"postCode\"></slot></code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

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

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				dataSource1: [],
				targetKeys1: [],
				dataSource2: [],
				targetKeys2: [],
				dataSource3: [],
				targetKeys3: [],
				dataSource4: [],
				targetKeys4: [],
				apis: [{ "parameter": "dataSource", "explain": "数据源", "type": "Array", "default": "[]" }, { "parameter": "render", "explain": "每行数据渲染函数", "type": "Function(record)", "default": "" }, { "parameter": "targetKeys", "explain": "显示在右侧框数据的key集合", "type": "Array", "default": "[]" }, { "parameter": "onChange", "explain": "变化时回调函数", "type": "Function(targetKeys, direction, moveKeys)", "default": "" }, { "parameter": "listStyle", "explain": "两个穿梭框的自定义样式", "type": "Object", "default": "" }, { "parameter": "className", "explain": "自定义类", "type": "String", "default": "" }, { "parameter": "titles", "explain": "标题集合,顺序从左至右", "type": "Array", "default": "['源列表', '目的列表']" }, { "parameter": "operations", "explain": "操作文案集合,顺序从上至下", "type": "Array", "default": "[]" }, { "parameter": "showSearch", "explain": "是否显示搜索框", "type": "Boolean", "default": "false" }, { "parameter": "filterOption", "explain": "接收 inputValue option 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false。", "type": "Function(inputValue, option)", "default": "" }, { "parameter": "searchPlaceholder", "explain": "搜索框的默认值", "type": "String", "default": "'请输入搜索内容'" }, { "parameter": "notFoundContent", "explain": "当列表为空时显示的内容", "type": "React.node", "default": "'列表为空'" }, { "parameter": "footer", "explain": "组件底部挂载点(例3)", "type": "slot", "default": "" }]
			};
		},
		created: function created() {
			this.getMock();
		},

		methods: {
			getMock: function getMock() {
				for (var num = 0; num < 4; num++) {
					var targetKeys = [];
					var mockData = [];
					for (var i = 0; i < 20; i++) {
						var data = {
							key: i,
							title: '内容' + (i + 1),
							description: '内容' + (i + 1) + '的描述',
							chosen: Math.random() * 2 > 1
						};
						if (data.chosen) {
							targetKeys.push(data.key);
						}
						mockData.push(data);
					}
					this['dataSource' + (num + 1)] = mockData;
					this['targetKeys' + (num + 1)] = targetKeys;
				}
			},
			render: function render(recoder) {
				return recoder.title;
			},
			render2: function render2(recoder) {
				return {
					label: recoder.title + ' - ' + recoder.description,
					value: recoder.title
				};
			},
			handleChange1: function handleChange1(targetKeys, direction, moveKeys) {
				this.targetKeys1 = targetKeys;
			},
			handleChange2: function handleChange2(targetKeys, direction, moveKeys) {
				this.targetKeys2 = targetKeys;
			},
			handleChange3: function handleChange3(targetKeys, direction, moveKeys) {
				this.targetKeys3 = targetKeys;
			},
			handleChange4: function handleChange4(targetKeys, direction, moveKeys) {
				this.targetKeys4 = targetKeys;
			},
			filterOption: function filterOption(inputValue, option) {
				return option.description.indexOf(inputValue) > -1;
			}
		},
		components: {
			codeBox: _codeBox2.default,
			apiTable: _apiTable2.default
		}
	};

/***/ },

/***/ 463:
/***/ function(module, exports) {

	module.exports = "\n\t<section class=\"markdown\">\n      <h1>Transfer  穿梭框</h1>\n      <p>\n        双栏穿梭选择框。\n      </p>\n      <h2>何时使用</h2>\n      <ul>\n        <li>用直观的方式在两栏中移动元素，完成选择行为。</li>\n      </ul>\n      <h2>组件演示</h2>\n  </section>\n\t<div class=\"ant-col-24 code-boxes-col-1-1\">\n    \t<code-box\n        title=\"基本用法\"\n        describe=\"最基本的用法。\"\n        code=''> \n        <v-transfer\n\t\t\t\t :data-source=\"dataSource1\"\n\t\t\t\t :target-keys=\"targetKeys1\"\n\t\t\t\t :on-change=\"handleChange1\"\n\t\t\t\t :render=\"render\">\n\t\t\t\t </v-transfer>\n      </code-box>\n\n      <code-box\n        title=\"带搜索框\"\n        describe=\"带搜索框的穿梭框，可以自定义搜索函数。\"\n        code=''> \n        <v-transfer\n\t\t\t\t :data-source=\"dataSource2\"\n\t\t\t\t :target-keys=\"targetKeys2\"\n\t\t\t\t :on-change=\"handleChange2\"\n\t\t\t\t :show-search=\"true\"\n\t\t\t\t :filter-option=\"filterOption\"\n\t\t\t\t :render=\"render\">\n\t\t\t\t </v-transfer>\n      </code-box>\n\n      <code-box\n        title=\"高级用法\"\n        describe=\"穿梭框高级用法，可配置操作文案，可定制宽高，可对底部进行自定义渲染。\"\n        code=''> \n        <v-transfer\n\t\t\t\t :data-source=\"dataSource3\"\n\t\t\t\t :target-keys=\"targetKeys3\"\n\t\t\t\t :on-change=\"handleChange3\"\n\t\t\t\t :list-style=\"{width: '250px', height: '300px'}\"\n\t\t\t\t :show-search=\"true\"\n\t\t\t\t :operations=\"['向右操作文案', '向左操作文案']\"\n\t\t\t\t :filter-option=\"filterOption\"\n\t\t\t\t :render=\"render\">\n\t\t\t\t \t<div :style=\"{float: 'right', margin: '5px'}\">\n\t\t\t\t \t\t<v-button \n\t\t\t\t \t\ttype=\"ghost\" \n\t\t\t\t \t\tsize=\"small\"\n\t\t\t\t \t\t@click=\"getMock\"\n\t\t\t\t \t\t>刷新</v-button>\n\t\t\t\t \t</div>\n\t\t\t\t </v-transfer>\n      </code-box>\n\n      <code-box\n        title=\"自定义渲染行数据\"\n        describe=\"自定义渲染每一个 Transfer Item，可用于渲染复杂数据。\"\n        code=''> \n        <v-transfer\n\t\t\t\t :data-source=\"dataSource4\"\n\t\t\t\t :target-keys=\"targetKeys4\"\n\t\t\t\t :on-change=\"handleChange4\"\n\t\t\t\t :list-style=\"{width: '300px', height: '300px'}\"\n\t\t\t\t :render=\"render2\">\n\t\t\t\t </v-transfer>\n      </code-box>\n  </div>\n  <api-table :apis=\"apis\"></api-table>\n";

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(231)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\transfer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(463)
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