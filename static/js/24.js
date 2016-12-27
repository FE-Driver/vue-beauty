webpackJsonp([24,53],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n.markdown > table th {\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n  background: #f7f7f7;\n}\n.markdown > table td,\n.markdown > table th {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.markdown.api-container table {\n  font-family: Consolas,Menlo,Courier,monospace;\n  font-size: 13px;\n}\n", ""]);

	// exports


/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"markdown api-container\">\n  <h2>{{ title }}</h2>\n  <slot></slot>\n  <table>\n    <thead>\n      <tr>\n        <th v-for=\"text in head\" v-html=\"text\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in content\">\n        <td v-for=\"text in item\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n      <tr v-for=\"api in apis\">\n        <td v-for=\"text in api\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n";

/***/ },

/***/ 6:
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

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/apiTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(5)
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
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".code-box {\n  border: 1px solid #e9e9e9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: .5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box .collapse:hover {\n  opacity: 1;\n}\n.code-box:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 10;\n  background: #fff;\n}\n.code-box:hover .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n.code-box:hover .code-box-meta {\n  background: #fbfbfb;\n}\n.code-box .code-box-demo {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 42px 20px 50px;\n}\n.code-box .highlight-wrapper {\n  max-height: 0;\n  opacity: 0;\n  overflow: auto;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  border-radius: 0 0 6px 6px;\n}\n.code-box .highlight-wrapper-expand {\n  max-height: 500px;\n  opacity: 1;\n}\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #e9e9e9;\n}\n.code-box-meta {\n  position: relative;\n  padding: 16px;\n  border-radius: 0 0 6px 6px;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n  width: 100%;\n  font-size: 12px;\n}\n.code-box-meta p {\n  margin: 0;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E6D2\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  display: inline-block;\n}\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n  font-size: 14px;\n}\n.code-box .hljs {\n  background: none;\n}\n", ""]);

	// exports


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{{ describe }}}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\"><slot name=\"preCode\"></slot>{{ code }}<slot name=\"postCode\"></slot></code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _highlight = __webpack_require__(13);

	var _highlight2 = _interopRequireDefault(_highlight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	      _highlight2.default.highlightBlock(_this.$el.querySelector('pre code'));
	    });
	  },

	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	    }
	  }
	};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/codeBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
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

/***/ 220:
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n\n  <section class=\"markdown\">\n    <h1>Select选择器</h1>\n    <p>\n      类似 Select2 的选择器。\n    </p>\n    <h2>何时使用</h2>\n    <ul>\n      <li>弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。</li>\n      <li>当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。</li>\n    </ul>\n    <h2>组件演示</h2>\n  </section>\n  <v-Row :gutter=\"16\">\n    <v-Col span=\"12\">\n      <code-box\n        title=\"简单\"\n        describe=\"最简单的用法。\"\n      >\n        <v-Select placeholder=\"请选择人员\" style=\"width: 120px;\" :options=\"options\" value=\"\" @change=\"change\"></v-Select>\n        <v-Select placement=\"top\" style=\"width: 120px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n        <v-Select disabled style=\"width: 120px;\" value=\"\"></v-Select>\n      </code-box>\n      <code-box\n        title=\"带搜索框\"\n        describe=\"展开后可对选项进行搜索。\"\n      >\n        <v-Select search style=\"width: 120px;\" :options=\"options\" value=\"\"></v-Select><br><br>\n        <v-Select search multiple style=\"width: 100%\" :options=\"options\" :value=\"[]\"></v-Select>\n      </code-box>\n\n      <code-box\n        title=\"分组\"\n        describe=\"用嵌套的数据结构进行选项分组。\"\n      >\n        <v-Select style=\"width: 200px\" :options=\"groupOpt\" :value=\"'lp'\"></v-Select>\n        <v-Select style=\"width: 200px\" multiple :options=\"groupOpt\" :value=\"['lp']\"></v-Select>\n      </code-box>\n    </v-Col>\n    <v-Col span=\"12\">\n      <code-box\n        title=\"三种大小\"\n        describe=\"三种大小的选择框，当 size 分别为 lg 和 sm 时，输入框高度为 32px 和 22px ，默认高度为 28px\"\n      >\n        <v-Select size=\"lg\" style=\"width: 200px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n        <v-Select style=\"width: 200px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n        <v-Select size=\"sm\" style=\"width: 200px;\" :options=\"options\" :value.sync=\"value\"></v-Select>\n      </code-box>\n\n      <code-box\n        title=\"多选\"\n        describe=\"多选，从已有条目中选择（scroll the menu）\"\n      >\n        <v-Select style=\"width: 100%;\" multiple :options=\"options\" :value=\"['3']\"></v-Select>\n      </code-box>\n\n      <code-box\n        title=\"远程搜索\"\n        describe=\"从服务器搜索数据，输入关键字进行查找\"\n      >\n        <v-Select style=\"width: 200px\" search :loading=\"loading\" :remote-method=\"remoteMethod\" :options=\"remoteOption\"></v-Select><br><br>\n        <v-Select style=\"width: 100%\" search multiple :loading=\"loading2\" :remote-method=\"remoteMethod2\" :options=\"remoteOption\"></v-Select>\n      </code-box>\n    </v-Col>\n  </v-Row>\n\n\n  <api-table :content='content'></api-table>\n  <api-table\n    title=\"\"\n    type=\"events\"\n    :content='eventContent'\n  >\n    <h3>Select Events</h3>\n  </api-table>\n  <api-table\n    title=\"\"\n    :content='optionCont'\n  >\n    <h3>Options Attributes</h3>\n  </api-table>\n</div>\n\n";

/***/ },

/***/ 546:
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
	      options: [{ value: '1', text: 'lady' }, { value: '2', text: '小强', disabled: true }, { value: '3', text: '小明' }],
	      groupOpt: [{
	        label: '重庆',
	        data: [{
	          value: 'lp',
	          text: '梁平'
	        }, {
	          value: 'wz',
	          text: '万州',
	          disabled: true
	        }]
	      }, {
	        label: '四川',
	        data: [{
	          value: 'cd',
	          text: '成都'
	        }, {
	          value: 'dz',
	          text: '达州'
	        }]
	      }],
	      value: '3',
	      states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
	      list: [],
	      loading: false,
	      loading2: false,
	      remoteOption: [],
	      content: [['key', '选项的value', 'String', 'value'], ['label', '选项显示的文本', 'String', 'text'], ['multiple', '是否支持多选', 'Boolean', 'false'], ['notFoundContent', '当下拉列表为空时显示的内容', 'String', '没有找到'], ['placement', '下拉框出现的位置(top、bottom)', 'String', 'bottom'], ['search', '是否可以搜索', 'Boolean', 'false'], ['maxHeight', '下拉框的最大高度', 'Number', '300'], ['disabled', '控件是否禁用', 'Boolean', 'false'], ['allowClear', '支持清除, 单选模式有效', 'Boolean', 'false'], ['value', '指定默认选中的条目', 'String/Array', '-'], ['placeholder', '选择框默认文字', 'String', '请选择'], ['options', '下拉框的数据', 'Array', '[]'], ['size', '选择框大小，可选 lg sm', 'String', '-'], ['loading', '呈现加载样式（一般用于从远程获取数据）', 'Boolean', 'false'], ['loadingText', '加载时显示的文字', 'String', '加载中...'], ['remoteMethod', '远程搜索方法', 'Function', '-'], ['position', '下拉框的定位方式（absolute,fixed）', 'String', 'absolute'], ['popupContainer', '下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。', 'Function', '() => document.body']],
	      optionCont: [['label', '组名(有这个字段代表这是个分组数据，只支持一级)', 'String', '-'], ['data', '分组的数据', 'Array', '-'], ['disabled', '是否禁用', 'Boolean', 'false']],
	      eventContent: [['change', '选择的值发生变化的时候触发', 'value']]
	    };
	  },
	  ready: function ready() {
	    this.list = this.states.map(function (item) {
	      return { value: item, text: item };
	    });
	  },

	  methods: {
	    change: function change(val) {
	      console.log(val);
	    },
	    remoteMethod: function remoteMethod(query) {
	      var _this = this;

	      if (query !== '') {
	        this.loading = true;
	        setTimeout(function () {
	          _this.loading = false;
	          _this.remoteOption = _this.list.filter(function (item) {
	            return item.text.toLowerCase().indexOf(query.toLowerCase()) > -1;
	          });
	        }, 200);
	      } else {
	        this.remoteOption = [];
	      }
	    },
	    remoteMethod2: function remoteMethod2(query) {
	      var _this2 = this;

	      if (query !== '') {
	        this.loading2 = true;
	        setTimeout(function () {
	          _this2.loading2 = false;
	          _this2.remoteOption = _this2.list.filter(function (item) {
	            return item.text.toLowerCase().indexOf(query.toLowerCase()) > -1;
	          });
	        }, 200);
	      } else {
	        this.remoteOption = [];
	      }
	    }
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  }
	};

/***/ },

/***/ 673:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(546)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/select.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(220)
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