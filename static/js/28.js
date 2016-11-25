webpackJsonp([28,50],{

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

/***/ 217:
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
	            apis: [{
	                parameter: 'slot::trigger',
	                explain: '触发目标(必选)',
	                type: 'slot node',
	                default: '无'
	            }, {
	                parameter: 'slot::content',
	                explain: '卡片内容(可选,与content属性互斥)',
	                type: 'slot node',
	                default: '无'
	            }, {
	                parameter: 'trigger',
	                explain: '触发行为，可选 hover/focus/click,默认click',
	                type: 'string',
	                default: 'click'
	            }, {
	                parameter: 'placement',
	                explain: '气泡框位置，可选 top/left/right/bottom/topLeft/topRight/bottomLeft/bottomRight',
	                type: 'string',
	                default: 'bottom'
	            }, {
	                parameter: 'title',
	                explain: '卡片标题',
	                type: 'string',
	                default: '无'
	            }, {
	                parameter: 'content',
	                explain: '卡片内容',
	                type: 'string',
	                default: '无'
	            }, {
	                parameter: 'visible',
	                explain: '用于手动控制浮层显隐',
	                type: 'boolean',
	                default: 'false'
	            }, {
	                parameter: 'onVisibleChange',
	                explain: '显示或隐藏发生改变的回调',
	                type: 'function(boolean:改变后卡片的可见性)',
	                default: '无'
	            }, {
	                parameter: 'openClassName',
	                explain: '气泡框展现时触发器添加的类名，可用于打开浮层时高亮触发器',
	                type: 'string',
	                default: '无'
	            }, {
	                parameter: 'disabled',
	                explain: '临时禁用气泡卡片弹出',
	                type: 'boolean',
	                default: 'false'
	            }],

	            outer_control_visible: true,
	            default_is_disabled: false,
	            popover_is_disabled: false
	        };
	    },

	    components: {
	        codeBox: _codeBox2.default,
	        apiTable: _apiTable2.default
	    },
	    methods: {
	        clickClose: function clickClose() {
	            this.outer_control_visible = false;
	        },
	        to_disabled: function to_disabled(val) {
	            this.popover_is_disabled = val;
	        },
	        outerVisibleChange: function outerVisibleChange(val) {
	            this.outer_control_visible = val;
	        },
	        visibleChange: function visibleChange(val) {
	            this.$message.info(val ? '卡片显示了' : '卡片隐藏了');
	        }
	    }
	};

/***/ },

/***/ 449:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"markdown\">\n    <h1>Popover 气泡卡片</h1>\n    <p>\n        点击/鼠标移入元素，弹出气泡式的卡片浮层。\n    </p>\n    <h2>何时使用</h2>\n    <ul>\n        <p>当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。</p>\n        <p>和 Tooltip 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。</p>\n    </ul>\n    <h2>组件演示</h2>\n</section>\n\n\n<v-row :gutter=\"16\">\n    <v-col span=\"12\">\n        <code-box title=\"基本用法\" describe=\"使用slot指定弹出内容和触发目标\">\n            <v-popover placement=\"top\" title=\"简单标题\">\n                <div slot=\"content\">\n                    我是普通文本内容\n                </div>\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">点击弹出卡片</button>\n            </v-popover>\n        </code-box>\n    </v-col>\n\n    <v-col span=\"12\">\n        <code-box title=\"快速设置简单的内容\" describe=\"使用content属性设置简单内容\">\n            <v-popover placement=\"top\" title=\"简单标题\" content=\"我的优先级更高\">\n                <div slot=\"content\">\n                    我会被忽略\n                </div>\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">点击弹出卡片</button>\n            </v-popover>\n        </code-box>\n    </v-col>\n</v-row>\n\n<v-row :gutter=\"16\">\n    <v-col span=\"12\">\n        <code-box title=\"触发行为\" describe=\"点击、聚集、鼠标移入。\">\n            <v-popover placement=\"left\" title=\"简单标题\" content=\"点击\">\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">click</button>\n            </v-popover>\n\n            <span style=\"display:inline-block;width:80px;\">\n                <v-popover placement=\"top\" title=\"简单标题\" trigger=\"focus\" content=\"focus\">\n                    <input class=\"ant-input ant-input-lg\" slot=\"trigger\" placeholder=\"focus\">\n                </v-popover>\n            </span>\n\n            <v-popover placement=\"right\" title=\"简单标题\" content=\"hover\" trigger=\"hover\">\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">hover</button>\n            </v-popover>\n        </code-box>\n    </v-col>\n\n\n\n    <v-col span=\"12\">\n        <code-box title=\"从卡片内关闭\" describe=\"使用visible控制显示。\">\n            <v-popover placement=\"top\" title=\"标题\" :visible=\"outer_control_visible\" :on-visible-change=\"outerVisibleChange\">\n                <div slot=\"content\">\n                    <a href=\"javascript:;\" @click=\"clickClose\">关闭</a>\n                </div>\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">click</button>\n            </v-popover>\n        </code-box>\n    </v-col>\n</v-row>\n<v-row :gutter=\"16\">\n    <v-col span=\"12\">\n        <code-box title=\"临时禁用卡片弹出\" describe=\"使用disabled禁用卡片弹出。\">\n            <v-popover placement=\"top\" title=\"标题\" content=\"看见我了吗\" :disabled=\"popover_is_disabled\">\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">点击弹出</button>\n            </v-popover>\n            &nbsp;&nbsp;&nbsp;&nbsp;\n            是否禁用卡片弹出\n            <v-switch :on-change=\"to_disabled\" :checked=\"default_is_disabled\">\n                <span slot=\"checkedChildren\">是</span>\n                <span slot=\"unCheckedChildren\">否</span>\n            </v-switch>\n        </code-box>\n    </v-col>\n    <v-col span=\"12\">\n        <code-box title=\"卡片显示/隐藏的回调\" describe=\"onVisibleChange\">\n            <v-popover placement=\"top\" title=\"标题\" content=\"看见我了吗\" :on-visible-change=\"visibleChange\">\n                <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\">点击弹出</button>\n            </v-popover>\n        </code-box>\n    </v-col>\n</v-row>\n\n<v-row :gutter=\"8\">\n    <v-col span=\"12\">\n        <code-box title=\"滚动区域内\" describe=\"滚动区域内的卡片\">\n            <div style=\"height:100px;background:#D7E6F3;overflow:auto;\">\n                <div style=\"width:1000px;\">\n                    按钮在右下角\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n                    <v-popover placement=\"top\" title=\"标题\" content=\"滚动区域内的定位\">\n                        <button class=\"ant-btn ant-btn-primary\" slot=\"trigger\" style=\"float:right;\">点击弹出</button>\n                    </v-popover>\n                </div>\n            </div>\n        </code-box>\n    </v-col>\n</v-row>\n<api-table :apis=\"apis\"></api-table>\n";

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(217)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\popover.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(449)
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