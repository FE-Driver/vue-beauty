webpackJsonp([4,53],{

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

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.code-box-demo .demo-header[_v-341b3438] {\n  width: 100%;\n  background: #ebedee;\n  height: 30px;\n}\n.code-box-demo .demo-header ul[_v-341b3438] {\n  float: right;\n  margin-right: 5px;\n}\n.code-box-demo .demo-header ul li[_v-341b3438] {\n  width: 50px;\n  height: 30px;\n  float: left;\n  background: #e4e4e4;\n  margin-left: 5px;\n}\n.code-box-demo .demo-header ul li[_v-341b3438]:before {\n  margin: 10px auto;\n  width: 20px;\n  height: 10px;\n  background: #ebeded;\n}\n.code-box-demo .demo-header .logo[_v-341b3438] {\n  float: left;\n  margin: 0px auto 0 10px;\n  line-height: 32px;\n}\n.code-box-demo .demo-header .logo img[_v-341b3438]{\n  margin:auto\n}\n.code-box-demo .demo-header .logo span[_v-341b3438] {\n  display: block;\n  float: right;\n}\n.code-box-demo .demo-content[_v-341b3438] {\n  width: 80%;\n  margin: 10px auto;\n}\n.code-box-demo .demo-content .demo-title[_v-341b3438] {\n  text-align:left;\n  background: #a4a4a4;\n  width: 40%;\n  height: 20px;\n  line-height: 20px;\n  color: #ebeded;\n  text-indent:10px\n}\n.code-box-demo .demo-content .demo-listBox[_v-341b3438] {\n  margin-top: 10px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-341b3438] {\n  height: 30px;\n  background: #cacaca;\n  overflow: hidden;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-341b3438]:before,.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-341b3438]:after{\n  width: 30%;\n  height: 5px;\n  background: #ebeded;\n  float:left;\n  margin:12px 35px 0;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-341b3438]:after{\n  width:15%;\n  float:right;\n  margin:12px 10px 0;\n\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-341b3438] {\n  height: 25px;\n  background: #ebeded;\n  border-bottom: 1px solid #cacaca;\n  overflow: hidden;\n  padding: 5px 15px;\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-341b3438]:before {\n  width: 10px;\n  height: 5px;\n  background: #cacaca;\n  float: left;\n  margin-top:4px\n}\n.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-341b3438]:after {\n  width: 50%;\n  height: 5px;\n  background: #cacaca;\n  float: left;\n  margin-left: 10px;\n  margin-top: 4px;\n}\n.code-box-demo .demo-content .demo-kp[_v-341b3438] {\n  margin: 10px auto;\n}\n.code-box-demo .demo-content .demo-kp ul li[_v-341b3438] {\n  display: inline-block;\n  width: 30%;\n  height: 40px;\n  background: #cacaca;\n  color: #ebeded;\n  text-align: left;\n  padding: 10px;\n  margin-right: calc(2%);\n}\n.code-box-demo .demo-content .demo-kp ul li[_v-341b3438]:last-child {\n  margin-right: 0%;\n}\n.code-box-demo .demo-content .demo-kp ul li[_v-341b3438]:after {\n  width: 60%;\n  height: 5px;\n  background: #ebeded;\n  float: left;\n  margin-top: 7px;\n}\n.code-box-demo .demo-content .demo-kp ul li[_v-341b3438]:before {\n  background: #ebeded;\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin:2px 10% 0 0;\n\n}\n.code-box-demo .demo-footer[_v-341b3438] {\n  margin-top: 10px;\n  background: #cacaca;\n  height: 40px;\n  float: left;\n  width: 100%;\n  display: table;\n}\n.code-box-demo .demo-footer[_v-341b3438]:before {\n  width: 60%;\n  height: 5px;\n  background: #ededed;\n  margin: 10px auto 0;\n}\n.code-box-demo .demo-footer[_v-341b3438]:after {\n  width: 30%;\n  height: 5px;\n  background: #ededed;\n  margin: 5px auto;\n}\n.code-box-demo .demo-header ul li[_v-341b3438]:before,\n.code-box-demo .demo-content .demo-kp ul li[_v-341b3438]:before,\n.code-box-demo .demo-content .demo-kp ul li[_v-341b3438]:after,\n.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-341b3438]:before,\n.code-box-demo .demo-content .demo-listBox .demo-list .title[_v-341b3438]:after,\n.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-341b3438]:before,\n.code-box-demo .demo-content .demo-listBox .demo-list ul li[_v-341b3438]:after,\n.code-box-demo .demo-footer[_v-341b3438]:before,\n.code-box-demo .demo-footer[_v-341b3438]:after {\n  display: block;\n  content: \"\";\n}\n.code-box-demo .buttons[_v-341b3438] {\n  text-align: center;\n  padding-top: 20px;\n  clear: both;\n}\n.demo-list ul li[_v-341b3438] {\n    height: 25px;\n    background: #ebeded;\n    border-bottom: 1px solid #cacaca;\n    overflow: hidden;\n    padding: 5px 15px;\n}\n.code-box-demo .ant-form-horizontal[_v-341b3438]{\n  max-width: 540px\n}\n", ""]);

	// exports


/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(152);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-341b3438&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./queueAnim.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js?id=_v-341b3438&scoped=true!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./queueAnim.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 312:
/***/ function(module, exports) {

	module.exports = "\n\n<div _v-341b3438=\"\">\n\n  <section class=\"markdown\" _v-341b3438=\"\">\n    <h1 _v-341b3438=\"\">QueueAnim 进出场动画</h1>\n    <p _v-341b3438=\"\">\n      通过简单的配置对一组元素添加串行的进场动画效果。\n    </p>\n    <h2 _v-341b3438=\"\">何时使用</h2>\n    <ul _v-341b3438=\"\">\n      <li _v-341b3438=\"\">从内容A到内容B的转变过程时能有效的吸引用户注意力，突出视觉中心，提高整体视觉效果。</li>\n      <li _v-341b3438=\"\">小的信息元素排布或块状较多的情况下，根据一定的路径层次依次进场，区分维度层级，来凸显量级，使页面转场更加流畅和舒适，提高整体视觉效果和产品的质感。</li>\n      <li _v-341b3438=\"\">特别适合首页和需要视觉展示效果的宣传页，以及单页应用的切换页面动效。</li>\n    </ul>\n    <h2 _v-341b3438=\"\">组件演示</h2>\n  </section>\n\n  <v-row :gutter=\"16\" _v-341b3438=\"\">\n    <v-col span=\"12\" _v-341b3438=\"\">\n\n      <code-box title=\"默认\" describe=\"最简单的进场例子。\" _v-341b3438=\"\">\n        <v-queue-anim :delay=\"1000\" _v-341b3438=\"\">\n          <div key=\"a\" _v-341b3438=\"\">依次进场</div>\n          <div key=\"b\" _v-341b3438=\"\">依次进场</div>\n          <div key=\"c\" _v-341b3438=\"\">依次进场</div>\n          <div key=\"d\" _v-341b3438=\"\">依次进场</div>\n          <div key=\"e\" _v-341b3438=\"\">依次进场</div>\n          <div key=\"f\" _v-341b3438=\"\">依次进场</div>\n        </v-queue-anim>\n      </code-box>\n\n      <code-box title=\"进场和离场\" describe=\"通过把属性设置一个数组来分别表示进出场的效果，type、animConfig、delay、duration、interval、ease 等属性均支持配置为数组。\" _v-341b3438=\"\">\n        <v-queue-anim class=\"demo-content\" key=\"demo\" :show=\"show\" :type=\"['right', 'left']\" :ease=\"['easeOutQuart', 'easeInOutQuart']\" _v-341b3438=\"\">\n          <div class=\"demo-kp\" key=\"a\" _v-341b3438=\"\">\n            <ul _v-341b3438=\"\">\n              <li _v-341b3438=\"\"></li>\n              <li _v-341b3438=\"\"></li>\n              <li _v-341b3438=\"\"></li>\n            </ul>\n          </div>\n          <div class=\"demo-listBox\" key=\"b\" _v-341b3438=\"\">\n            <div class=\"demo-list\" _v-341b3438=\"\">\n              <div class=\"title\" _v-341b3438=\"\"></div>\n              <ul _v-341b3438=\"\">\n                <li _v-341b3438=\"\"></li>\n                <li _v-341b3438=\"\"></li>\n                <li _v-341b3438=\"\"></li>\n              </ul>\n            </div>\n          </div>\n        </v-queue-anim>\n        <p class=\"buttons\" _v-341b3438=\"\">\n          <v-button type=\"primary\" @click=\"_handleClick\" _v-341b3438=\"\">切换</v-button>\n        </p>\n      </code-box>\n\n      <code-box title=\"表单动画进出场\" describe=\"表单组合的进场与出场动画。\" _v-341b3438=\"\">\n        <v-queue-anim class=\"ant-form-horizontal\" type=\"bottom\" :leave-reverse=\"true\" :show=\"show\" _v-341b3438=\"\">\n          <v-form direction=\"horizontal\" _v-341b3438=\"\">\n            <v-form-item label=\"用户名\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" key=\"name\" _v-341b3438=\"\">\n              <p classname=\"ant-form-text\" id=\"userName\" name=\"userName\" _v-341b3438=\"\">大眼萌 minion</p>\n            </v-form-item>\n            <v-form-item label=\"密码\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" key=\"password\" _v-341b3438=\"\">\n              <v-input type=\"password\" placeholder=\"请输入密码\" size=\"large\" _v-341b3438=\"\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"您的性别\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" key=\"sex\" _v-341b3438=\"\">\n              <v-radio-group default-value=\"female\" :radios=\"[{value: 'male', name: '男的'},{value: 'female', name: '女的'}]\" _v-341b3438=\"\">\n              </v-radio-group>\n            </v-form-item>\n            <v-form-item label=\"备注\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" key=\"remark\" _v-341b3438=\"\">\n              <v-input type=\"textarea\" placeholder=\"随便写\" _v-341b3438=\"\"></v-input>\n            </v-form-item>\n            <v-form-item :wrapper-col=\"{span:16,offset:6}\" style=\"margin-top:24px\" key=\"btn\" _v-341b3438=\"\">\n              <v-button type=\"primary\" html-type=\"submit\" _v-341b3438=\"\">确定</v-button>\n            </v-form-item>\n          </v-form>\n        </v-queue-anim>\n        <p class=\"buttons\" _v-341b3438=\"\">\n          <v-button type=\"primary\" @click=\"_handleClick\" _v-341b3438=\"\">切换</v-button>\n        </p>\n      </code-box>\n\n      <code-box title=\"一个复杂些的例子\" describe=\"模拟一个完整的页面。\" _v-341b3438=\"\">\n        <v-queue-anim :show=\"show\" :type=\"['right', 'left']\" _v-341b3438=\"\">\n          <div class=\"demo-header\" key=\"header\" _v-341b3438=\"\">\n            <div class=\"logo\" _v-341b3438=\"\">\n              <img width=\"30\" src=\"https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg\" _v-341b3438=\"\">\n              <span _v-341b3438=\"\">logo</span>\n            </div>\n            <v-queue-anim _v-341b3438=\"\">\n              <ul _v-341b3438=\"\">\n                <li key=\"0\" _v-341b3438=\"\"></li>\n                <li key=\"1\" _v-341b3438=\"\"></li>\n                <li key=\"2\" _v-341b3438=\"\"></li>\n                <li key=\"3\" _v-341b3438=\"\"></li>\n                <li key=\"4\" _v-341b3438=\"\"></li>\n              </ul>\n            </v-queue-anim>\n          </div>\n          <v-queue-anim class=\"demo-content\" key=\"content\" :delay=\"300\" _v-341b3438=\"\">\n            <div class=\"demo-title\" key=\"title\" _v-341b3438=\"\">我是标题</div>\n            <v-queue-anim class=\"demo-kp\" key=\"b\" _v-341b3438=\"\">\n              <v-queue-anim _v-341b3438=\"\">\n                <ul _v-341b3438=\"\">\n                  <li key=\"0\" _v-341b3438=\"\"></li>\n                  <li key=\"1\" _v-341b3438=\"\"></li>\n                  <li key=\"2\" _v-341b3438=\"\"></li>\n                </ul>\n              </v-queue-anim>\n            </v-queue-anim>\n            <div class=\"demo-title\" key=\"title2\" _v-341b3438=\"\">我是标题</div>\n            <div class=\"demo-listBox\" _v-341b3438=\"\">\n              <v-queue-anim class=\"demo-list\" :delay=\"500\" _v-341b3438=\"\">\n                <div class=\"title\" key=\"title3\" _v-341b3438=\"\"></div>\n                <v-queue-anim type=\"bottom\" key=\"li\" _v-341b3438=\"\">\n                  <ul _v-341b3438=\"\">\n                    <li key=\"0\" _v-341b3438=\"\"></li>\n                    <li key=\"1\" _v-341b3438=\"\"></li>\n                    <li key=\"2\" _v-341b3438=\"\"></li>\n                    <li key=\"3\" _v-341b3438=\"\"></li>\n                    <li key=\"4\" _v-341b3438=\"\"></li>\n                  </ul>\n                </v-queue-anim>\n              </v-queue-anim>\n            </div>\n          </v-queue-anim>\n          <v-queue-anim type=\"bottom\" :delay=\"1000\" key=\"footerBox\" _v-341b3438=\"\">\n            <div class=\"demo-footer\" key=\"footer\" _v-341b3438=\"\"></div>\n          </v-queue-anim>\n        </v-queue-anim>\n        <p class=\"buttons\" _v-341b3438=\"\">\n          <v-button type=\"primary\" @click=\"_handleClick\" _v-341b3438=\"\">切换</v-button>\n        </p>\n      </code-box>\n    </v-col>\n    <v-col span=\"12\" _v-341b3438=\"\">\n\n      <code-box title=\"进场和离场\" describe=\"同时支持进场和离场动画。\" _v-341b3438=\"\">\n        <v-queue-anim :show=\"show\" class=\"demo-content\" _v-341b3438=\"\">\n          <div class=\"demo-kp\" key=\"a\" _v-341b3438=\"\">\n            <ul _v-341b3438=\"\">\n              <li _v-341b3438=\"\"></li>\n              <li _v-341b3438=\"\"></li>\n              <li _v-341b3438=\"\"></li>\n            </ul>\n          </div>\n          <div class=\"demo-listBox\" key=\"b\" _v-341b3438=\"\">\n            <div class=\"demo-list\" _v-341b3438=\"\">\n              <div class=\"title\" _v-341b3438=\"\"></div>\n              <ul _v-341b3438=\"\">\n                <li _v-341b3438=\"\"></li>\n                <li _v-341b3438=\"\"></li>\n                <li _v-341b3438=\"\"></li>\n              </ul>\n            </div>\n          </div>\n        </v-queue-anim>\n        <p class=\"buttons\" _v-341b3438=\"\">\n          <v-button type=\"primary\" @click=\"_handleClick\" _v-341b3438=\"\">切换</v-button>\n        </p>\n      </code-box>\n\n      <code-box title=\"自定义动画进出场\" describe=\"通过 animConfig 来自定义动画进出场。\" _v-341b3438=\"\">\n        <v-queue-anim class=\"demo-content\" :show=\"show\" :anim-config=\"[{ opacity: [1, 0], translateY: [0, 50] },{ opacity: [1, 0], translateY: [0, -50] }]\" _v-341b3438=\"\">\n          <div class=\"demo-kp\" key=\"a\" _v-341b3438=\"\">\n            <ul _v-341b3438=\"\">\n              <li _v-341b3438=\"\"></li>\n              <li _v-341b3438=\"\"></li>\n              <li _v-341b3438=\"\"></li>\n            </ul>\n          </div>\n          <div class=\"demo-listBox\" key=\"b\" _v-341b3438=\"\">\n            <div class=\"demo-list\" _v-341b3438=\"\">\n              <div class=\"title\" _v-341b3438=\"\"></div>\n              <ul _v-341b3438=\"\">\n                <li _v-341b3438=\"\"></li>\n                <li _v-341b3438=\"\"></li>\n                <li _v-341b3438=\"\"></li>\n              </ul>\n            </div>\n          </div>\n        </v-queue-anim>\n        <p class=\"buttons\" _v-341b3438=\"\">\n          <v-button type=\"primary\" @click=\"_handleClick\" _v-341b3438=\"\">切换</v-button>\n        </p>\n      </code-box>\n\n      <code-box title=\"添加与删除\" describe=\"场景里有增加或删除条目时也会触发动画。\" _v-341b3438=\"\">\n        <div class=\"demo-content\" _v-341b3438=\"\">\n            <div class=\"demo-listBox\" key=\"b\" _v-341b3438=\"\">\n              <div class=\"demo-list\" _v-341b3438=\"\">\n                <div class=\"title\" _v-341b3438=\"\"></div>\n                <v-queue-anim :type=\"['right', 'left']\" :watch-value=\"items\" :show=\"show\" _v-341b3438=\"\">\n                  <ul _v-341b3438=\"\">\n                    <li v-for=\"item in items\" :key=\"Date.now()\" _v-341b3438=\"\"></li>\n                  </ul>\n                </v-queue-anim>\n              </div>\n            </div>\n        </div>\n        <p class=\"buttons\" _v-341b3438=\"\">\n          <v-button type=\"primary\" @click=\"_handleClick\" _v-341b3438=\"\">切换</v-button>\n          <v-button @click=\"_handleAdd\" style=\"margin-left: 10px\" _v-341b3438=\"\">添加</v-button>\n          <v-button @click=\"_handleRemove\" style=\"margin-left: 10px\" _v-341b3438=\"\">删除</v-button>\n        </p>\n      </code-box>\n\n    </v-col>\n  </v-row>\n  <section class=\"markdown\" _v-341b3438=\"\">\n      <h3 _v-341b3438=\"\">API</h3>\n      <p _v-341b3438=\"\">元素依次进场</p>\n      <pre _v-341b3438=\"\">        <code class=\"html\" _v-341b3438=\"\">&lt;v-queue-anim&gt;\n            &lt;div key='demo1'&gt;依次进场&lt;/div&gt;\n            &lt;div key='demo2'&gt;依次进场&lt;/div&gt;\n            &lt;div key='demo3'&gt;依次进场&lt;/div&gt;\n            &lt;div key='demo4'&gt;依次进场&lt;/div&gt;\n          &lt;/v-queue-anim&gt;</code>\n      </pre>\n      <blockquote _v-341b3438=\"\">\n        <p _v-341b3438=\"\">每个子标签必须带 key，如果未设置 key 将不执行动画。</p>\n      </blockquote>\n   </section>\n  <api-table :content=\"content\" _v-341b3438=\"\"></api-table>\n\n</div>\n\n";

/***/ },

/***/ 543:
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
	      content: [['show', '控制queueAnim组件的显示隐藏', 'bool', 'true'], ['type', '动画内置参数 left right top bottom scale scaleBig scaleX scaleY', 'string / array', 'right'], ['animConfig', '配置动画参数 如 {opacity:[1, 0],translateY:[0, -30]} 具体参考 velocity 的写法', 'object / array', 'null'], ['delay', '整个动画的延时,以毫秒为单位', 'number / array', '0'], ['duration', '每个动画的时间,以毫秒为单位', 'number / array', '500'], ['interval', '每个动画的间隔时间,以毫秒为单位', 'number / array', '100'], ['leaveReverse', '出场时是否倒放,从最后一个 dom 开始往上播放', 'boolean', 'false'], ['ease', '动画的缓动函数,<a href="http://velocityjs.org/#easing" target="_blank">查看详细</a>', 'string / array', 'easeOutQuart'], ['animatingClassName', '进出场动画进行中的类名', 'array', "['queue-anim-entering', 'queue-anim-leaving']"]],
	      items: ['1', '2', '3'],
	      show: true,
	      labelCol: { span: 6 },
	      wrapperCol: { span: 14 }
	    };
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  },
	  methods: {
	    _handleClick: function _handleClick() {
	      this.show = !this.show;
	    },
	    _handleAdd: function _handleAdd() {
	      var len = this.items.length + 1;
	      this.items.push('' + len);
	    },
	    _handleRemove: function _handleRemove() {
	      this.items.pop();
	    }
	  }
	};

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(175)
	__vue_script__ = __webpack_require__(543)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/queueAnim.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(312)
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