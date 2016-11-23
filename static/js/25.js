webpackJsonp([25,50],{

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

/***/ 277:
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
	            apis: []
	        };
	    },
	    components: {
	        codeBox: _codeBox2.default,
	        apiTable: _apiTable2.default
	    }
	};

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(378);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./css.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./css.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 566:
/***/ function(module, exports) {

	module.exports = "\n\n  <div>\n\n      <section class=\"markdown\">\n          <h1>全局CSS样式</h1>\n          <p>\n              和Bootstrap一样，为了增强跨浏览器表现的一致性，Vue Beauty也对浏览器默认样式做了重置和全局设置。同时我们也提供了很多有助于Web开发的工具类，你可以在需要的时候直接使用。\n          </p>\n\n          <h2>概览</h2>\n          <p>深入了解 Bootstrap 底层结构的关键部分，包括我们让 web 开发变得更好、更快、更强壮的最佳实践。</p>\n\n          <h4>HTML5 文档类型</h4>\n          <p>Bootstrap 使用到的某些 HTML 元素和 CSS 属性需要将页面设置为 HTML5 文档类型。在你项目中的每个页面都要参照下面的格式进行设置。</p>\n          <div class=\"highlight\">\n<pre>\n  <span class=\"cp\">&lt;!DOCTYPE html&gt;</span>\n  <span class=\"nt\">&lt;html</span> <span class=\"na\">lang=</span><span class=\"s\">\"zh-CN\"</span><span\n        class=\"nt\">&gt;</span>\n    ...\n  <span class=\"nt\">&lt;/html&gt;</span>\n</pre>\n          </div>\n\n          <h4>基本样式</h4>\n          <p>Vue Beauty设置了基本的全局样式。分别是<a href=\"#\">dsd</a>：</p>\n          <ul>\n              <li>为 <code>body</code> 元素设置 <code>background-color: #fff;</code></li>\n              <li>使用 <code>@font-family</code>、<code>@text-color</code>、<code>@font-size-base</code> 和 <code>@line-height-base</code>变量作为排版的基本参数\n              </li>\n              <li><code>@font-family</code>变量的默认值为<code>-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n                  \"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", SimSun,\n                  sans-serif</code></li>\n              <li><code>@text-color</code>变量的默认值为<code>#444</code></li>\n              <li><code>@font-size-base</code>变量的默认值为<code>12px</code></li>\n              <li><code>@line-height-base</code>变量的默认值为<code>1.5</code></li>\n              <li>为所有链接设置了基本颜色 <code>#369BE9</code> ，并且当链接处于 <code>:hover</code> 状态时才添加下划线</li>\n          </ul>\n\n          <h4>Normalize.css</h4>\n          <p>为了增强跨浏览器表现的一致性，我们使用了 <a href=\"http://necolas.github.io/normalize.css/\" target=\"_blank\">Normalize.css</a>，这是由\n              <a href=\"https://twitter.com/necolas\" target=\"_blank\">Nicolas Gallagher</a> 和 <a\n                      href=\"https://twitter.com/jon_neal\" target=\"_blank\">Jonathan Neal</a> 维护的一个CSS 重置样式库。</p>\n\n          <h4>布局容器</h4>\n          <p>Vue Beauty提供了两种<code>.container</code> 容器，可作为页面内容的顶层容器。具体说明如下：</p>\n          <p><code>.container</code> 类用于固定宽度并支持响应式布局的容器。其宽度有3种：720px、940px、1140px，根据视口宽度响应式匹配。</p>\n          <p><code>.container-fluid</code> 类用于 100% 宽度，占据全部视口（viewport）的容器。</p>\n\n\n          <h2>排版</h2>\n\n          <h4>标题</h4>\n          <p>HTML 中的所有标题标签，<code>&lt;h1&gt;</code> 到 <code>&lt;h6&gt;</code> 均可使用。在标题内还可以包含 <code>&lt;small&gt;</code>\n              标签，可以用来标记副标题。</p>\n\n          <h4>内联文本元素</h4>\n          <p>高亮文本使用<code>&lt;mark&gt;</code>标签：\n              <mark>高亮文本</mark>\n          </p>\n          <p>删除文本使用<code>&lt;del&gt;</code>标签：\n              <del>删除文本</del>\n          </p>\n          <p>带下划线的文本使用<code>&lt;u&gt;</code>标签：<u>下划线文本</u></p>\n          <p>小号文本使用<code>&lt;small&gt;</code>标签：\n              <small>小号文本</small>\n          </p>\n          <p>着重文本使用<code>&lt;strong&gt;</code>标签：<strong>着重文本</strong></p>\n\n          <h4>对齐及换行</h4>\n          <p class=\"text-left\">左对齐：<code>.text-left</code></p>\n          <p class=\"text-right\">右对齐：<code>.text-right</code></p>\n          <p class=\"text-center\">居中对齐：<code>.text-center</code></p>\n          <p class=\"text-nowrap\">禁止换行：<code>.text-nowrap</code></p>\n\n          <h4>文本颜色</h4>\n          <p class=\"text-muted\">.text-muted</p>\n          <p class=\"text-dark\">.text-dark</p>\n          <p class=\"text-primary\">.text-primary</p>\n          <p class=\"text-success\">.text-success</p>\n          <p class=\"text-info\">.text-info</p>\n          <p class=\"text-warning\">.text-warning</p>\n          <p class=\"text-error\">.text-error</p>\n\n          <h4>文本大小</h4>\n          <p class=\"text-md\">.text-md(14px)</p>\n          <p class=\"text-lg\">.text-lg(16px)</p>\n          <p class=\"text-xl\">.text-xl(18px)</p>\n          <p class=\"text-xxl\">.text-xxl(20px)</p>\n\n          <h4>背景区块</h4>\n          <p class=\"bg-primary\">.bg-primary</p>\n          <p class=\"bg-success\">.bg-success</p>\n          <p class=\"bg-info\">.bg-info</p>\n          <p class=\"bg-warning\">.bg-warning</p>\n          <p class=\"bg-error\">.bg-error</p>\n          <p class=\"bg-muted\">.bg-muted</p>\n\n          <h4>margin和padding</h4>\n          <p>为了开发方便，Vue Beauty提供了一组常用的margin和padding类，具体尺寸有：5px、10px、15px、20px、25px。使用方法如下：</p>\n          <p>margin-{size}类表示4个方向都有同样大小的外边距，如<code>margin-10</code>。</p>\n          <p>padding-{size}类表示4个方向都有同样大小的内边距，如<code>padding-15</code>。</p>\n          <p>margin-{side}-{size}类表示某个方向有设定大小的外边距，如<code>margin-top-25</code>。</p>\n          <p>padding-{side}-{size}类表示某个方向有设定大小的内边距，如<code>padding-right-5</code>。</p>\n\n\n          <h2>工具类</h2>\n\n          <h4>浮动</h4>\n          <p class=\"pull-left\">左浮动:<code>.pull-left</code></p>\n          <p class=\"pull-right\">右浮动:<code>.pull-right</code></p>\n          <h4>clearfix</h4>\n          <p class=\"clearfix\">清除浮动:<code>.clearfix</code></p>\n          <h4>显示隐藏</h4>\n          <p>显示:<code>.show</code></p>\n          <p>隐藏:<code>.hide</code></p>\n          <p>不可见:<code>.invisible</code>（使用visibility控制）</p>\n\n      </section>\n\n  </div>\n\n";

/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(434)
	__vue_script__ = __webpack_require__(277)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\css.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(566)
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