webpackJsonp([35,53],{

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

/***/ 207:
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n\n  <section class=\"markdown\">\n    <h1>Menu 导航菜单</h1>\n    <p>\n      为页面和功能提供导航的菜单列表。\n    </p>\n    <h2>何时使用</h2>\n    <ul>\n      <p>\n        导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。\n      </p>\n    </ul>\n    <h2>组件演示</h2>\n  </section>\n\n  <v-Row :gutter=\"16\">\n    <v-Col>\n      <code-box\n              title=\"顶部导航\"\n              describe=\"水平的顶部导航菜单。\"\n      >\n        <v-menu mode=\"horizontal\">\n          <v-menu-item><v-icon type='mail'></v-icon>导航一</v-menu-item>\n          <v-menu-item disabled><v-icon type='appstore'></v-icon>导航二</v-menu-item>\n          <v-sub-menu title=\"导航 - 子菜单\" icon=\"setting\">\n            <v-menu-item-group title=\"分组1\">\n              <v-menu-item>选项1</v-menu-item>\n              <v-menu-item>选项2</v-menu-item>\n            </v-menu-item-group>\n            <v-menu-item-group title=\"分组2\">\n              <v-menu-item>选项3</v-menu-item>\n              <v-menu-item>选项4</v-menu-item>\n            </v-menu-item-group>\n          </v-sub-menu>\n           <v-menu-item><a href=\"http://www.alipay.com/\" target=\"_blank\">导航四 - 链接</a></v-menu-item>\n        </v-menu>\n\n      </code-box>\n\n      <code-box\n              title=\"内嵌菜单\"\n              describe=\"垂直菜单，子菜单内嵌在菜单区域。\"\n      >\n        <v-menu mode=\"inline\" style=\"width:240px\">\n          <v-sub-menu title=\"导航一\" icon=\"mail\">\n            <v-menu-item-group title=\"分组1\">\n              <v-menu-item>选项1</v-menu-item>\n              <v-menu-item>选项2</v-menu-item>\n            </v-menu-item-group>\n            <v-menu-item-group title=\"分组2\">\n              <v-menu-item>选项3</v-menu-item>\n              <v-menu-item>选项4</v-menu-item>\n            </v-menu-item-group>\n          </v-sub-menu>\n          <v-sub-menu title=\"导航二\" icon=\"appstore\">\n            <v-menu-item>选项5</v-menu-item>\n            <v-menu-item>选项6</v-menu-item>\n            <v-sub-menu title=\"三级导航\">\n              <v-menu-item>选项7</v-menu-item>\n              <v-menu-item>选项8</v-menu-item>\n            </v-sub-menu>\n          </v-sub-menu>\n          <v-sub-menu title=\"导航三\" icon=\"setting\" disabled>\n            <v-menu-item>选项9</v-menu-item>\n            <v-menu-item>选项10</v-menu-item>\n            <v-menu-item>选项11</v-menu-item>\n            <v-menu-item>选项12</v-menu-item>\n          </v-sub-menu>\n        </v-menu>\n\n      </code-box>\n\n      <code-box\n              title=\"垂直菜单\"\n              describe=\"子菜单是弹出的形式。\"\n      >\n        <v-menu style=\"width:240px\">\n          <v-sub-menu title=\"导航一\" icon=\"mail\">\n            <v-menu-item-group title=\"分组1\">\n              <v-menu-item>选项1</v-menu-item>\n              <v-menu-item>选项2</v-menu-item>\n            </v-menu-item-group>\n            <v-menu-item-group title=\"分组2\">\n              <v-menu-item>选项3</v-menu-item>\n              <v-menu-item>选项4</v-menu-item>\n            </v-menu-item-group>\n          </v-sub-menu>\n          <v-sub-menu title=\"导航二\" icon=\"appstore\">\n            <v-menu-item>选项5</v-menu-item>\n            <v-menu-item>选项6</v-menu-item>\n            <v-sub-menu title=\"三级导航\">\n              <v-menu-item>选项7</v-menu-item>\n              <v-menu-item>选项8</v-menu-item>\n            </v-sub-menu>\n          </v-sub-menu>\n          <v-sub-menu title=\"导航三\" icon=\"setting\" disabled>\n            <v-menu-item>选项9</v-menu-item>\n            <v-menu-item>选项10</v-menu-item>\n            <v-menu-item>选项11</v-menu-item>\n            <v-menu-item>选项12</v-menu-item>\n          </v-sub-menu>\n        </v-menu>\n\n      </code-box>\n\n      <code-box\n              title=\"主题\"\n              describe=\"内建了两套主题 light|dark，默认 light。\"\n      >\n        <v-menu style=\"width:240px\" theme=\"dark\" mode=\"inline\">\n          <v-sub-menu title=\"导航一\" icon=\"mail\">\n            <v-menu-item>选项1</v-menu-item>\n            <v-menu-item>选项2</v-menu-item>\n            <v-menu-item>选项3</v-menu-item>\n            <v-menu-item>选项4</v-menu-item>\n          </v-sub-menu>\n          <v-sub-menu title=\"导航二\" icon=\"appstore\">\n            <v-menu-item>选项5</v-menu-item>\n            <v-menu-item>选项6</v-menu-item>\n            <v-sub-menu title=\"三级导航\">\n              <v-menu-item>选项7</v-menu-item>\n              <v-menu-item>选项8</v-menu-item>\n            </v-sub-menu>\n          </v-sub-menu>\n          <v-sub-menu title=\"导航三\" icon=\"setting\">\n            <v-menu-item>选项9</v-menu-item>\n            <v-menu-item>选项10</v-menu-item>\n            <v-menu-item>选项11</v-menu-item>\n            <v-menu-item>选项12</v-menu-item>\n          </v-sub-menu>\n        </v-menu>\n\n      </code-box>\n\n      <code-box\n              title=\"从数据直接生成\"\n              describe=\"使用data从json数据直接生成menu\"\n      >\n        <v-nav-menu style=\"width:240px\" :data=\"menuData\"></v-nav-menu>\n\n      </code-box>\n\n    </v-Col>\n\n  </v-Row>\n\n  <api-table\n    :content='content'\n  >\n    <h3>Menu props</h3>\n  </api-table>\n\n  <api-table\n    :content='content2'\n    title=\"\"\n  >\n    <h3>Menu.Item props</h3>\n  </api-table>\n\n  <api-table\n    :content='content3'\n    title=\"\"\n  >\n    <h3>Menu.SubMenu props</h3>\n  </api-table>\n\n  <api-table\n    :content='content4'\n    title=\"\"\n  >\n    <h3>Menu.ItemGroup props</h3>\n  </api-table>\n  <api-table\n    :content='content5'\n    title=\"\"\n  >\n    <h3>NavMenu props</h3>\n  </api-table>\n</div>\n\n";

/***/ },

/***/ 533:
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
	      menuData: [{
	        name: "首页",
	        icon: 'home',
	        selected: true,
	        link: {
	          name: 'card'
	        }
	      }, {
	        name: "安装指南",
	        icon: 'mail',
	        children: [{
	          link: {
	            name: 'menu',
	            query: {
	              src: 'http://test.api.g7s.chinawayltd.com/iframe.html#apilog/index.html'
	            }
	          },
	          name: "快速上手"
	        }, {
	          link: "/development",
	          name: "开发指南",
	          disabled: true
	        }]
	      }, {
	        name: "基础组件",
	        icon: 'folder',
	        disabled: true,
	        groups: [{
	          groupName: "Basic",
	          list: [{
	            link: "/layout",
	            name: "布局 (layout)"
	          }]
	        }, {
	          groupName: "Form",
	          list: [{
	            link: "/radio",
	            name: "按钮 (radio)"
	          }]
	        }]
	      }],
	      content: [['theme', '主题颜色', 'String: light dark', 'light'], ['mode', '菜单类型，现在支持垂直、水平、和内嵌模式三种', 'String: vertical horizontal inline', 'vertical'], ['expand', '定义下面所有子菜单的是否展开', 'Boolean', 'false']],
	      content2: [['disabled', '是否禁用', 'Boolean', 'false'], ['icon', '图标', 'String', '无'], ['selected', '选中效果', 'Boolean', 'false']],
	      content3: [['disabled', '是否禁用', 'Boolean', 'false'], ['title', '子菜单项值', 'String', '无'], ['icon', '图标', 'String', '无'], ['expand', '菜单是否展开', 'Boolean', 'false']],
	      content4: [['title', '分组标题', 'String', '无']],
	      content5: [['data', '可嵌套的节点属性的数组，生成menu的数据', 'array', '无'], ['aTag', '是否使用a标签', 'boolean', 'false'], ['theme', '主题颜色', 'String: light dark', 'light'], ['mode', '菜单类型，现在支持垂直、水平、和内嵌模式三种', 'String: vertical horizontal inline', 'vertical']]
	    };
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  }
	};

/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(533)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(207)
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