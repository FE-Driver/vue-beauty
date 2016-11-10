webpackJsonp([25,49],{

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

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getIterator2 = __webpack_require__(20);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _datatable = __webpack_require__(76);

	var _datatable2 = _interopRequireDefault(_datatable);

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            apis: [{
	                parameter: 'data-source(必须)',
	                explain: '数据源,服务端数据接口对应的url地址',
	                type: 'string',
	                default: ''
	            }, {
	                parameter: 'columns(必须)',
	                explain: '列配置（请见下表）',
	                type: 'object',
	                default: ''
	            }, {
	                parameter: 'size',
	                explain: '表格尺寸,支持large,middle,small',
	                type: 'string',
	                default: 'middle'
	            }, {
	                parameter: 'pageSize',
	                explain: '分页大小',
	                type: 'number',
	                default: '10'
	            }, {
	                parameter: 'pageSizeOptions',
	                explain: '分页大小配置项',
	                type: 'array',
	                default: '[10,20,30,40,50]'
	            }, {
	                parameter: 'paramsName',
	                explain: '接口请求参数名称配置项,后续完善文档',
	                type: 'object',
	                default: ''
	            }, {
	                parameter: 'otherParams',
	                explain: '发送请求时需要额外附带的参数,后续完善文档',
	                type: 'object',
	                default: '{}'
	            }, {
	                parameter: 'formatter',
	                explain: '数据格式化函数,参数data,数据加载成功table渲染之前调用',
	                type: 'function',
	                default: ''
	            }, {
	                parameter: 'rowSelection',
	                explain: '行选择配置（请见下表）',
	                type: 'object',
	                default: ''
	            }, {
	                parameter: 'ghost',
	                explain: '如果需要在datatable内使用外部组件，可以在这里自定义，然后在columns.component引用，每个自定义组件会接受3个prop（index，item，value），index是该组件所在行的序号，item是该组件所在行对应的数据，value是该组件所在行field字段对应的数据',
	                type: 'object',
	                default: ''
	            }],
	            columnsapi: [{
	                parameter: 'title(必须)',
	                explain: '列名',
	                type: 'string',
	                default: ''
	            }, {
	                parameter: 'field(必须)',
	                explain: '对应的数据字段',
	                type: 'string',
	                default: ''
	            }, {
	                parameter: 'render',
	                explain: '渲染函数,可自定义某列的具体渲染逻辑,参数value, row, index',
	                type: 'function',
	                default: ''
	            }, {
	                parameter: 'component',
	                explain: '使用ghost里定义的组件',
	                type: 'String',
	                default: ''
	            }, {
	                parameter: 'width',
	                explain: '列的宽度,支持任意css尺寸值',
	                type: 'string',
	                default: 'auto'
	            }, {
	                parameter: 'className',
	                explain: '列的自定义class,多个class之间使用空格分割',
	                type: 'string',
	                default: ''
	            }, {
	                parameter: 'sort',
	                explain: '是否启用列排序,true表示启用排序功能,asc和desc表示启用默认排序',
	                type: 'true | "asc" | "desc"',
	                default: 'false'
	            }],
	            rowSelectionApi: [{
	                parameter: 'type(必须)',
	                explain: '选择模式,',
	                type: 'checkbox | radio',
	                default: 'checkbox'
	            }, {
	                parameter: 'onSelect',
	                explain: '行选择之后的回调函数,参数index,state,item',
	                type: 'function',
	                default: ''
	            }, {
	                parameter: 'onSelectAll',
	                explain: '全选操作的回掉函数,参数state,items',
	                type: 'function',
	                default: ''
	            }],
	            url: "/truck/search",
	            columns: [{ title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true, width: "200px" }, { title: "姓名", field: 'name', sort: true }, { title: "姓名姓名姓名姓名姓名", field: 'name', sort: true }, { title: "姓名姓名", field: 'name', sort: true }, { title: "姓名姓名姓名", field: 'name', sort: true }, { title: "姓名姓名", field: 'name', sort: true }, { title: "姓名姓名姓名姓名姓名", field: 'name', sort: true }, { title: "姓名姓名", field: 'name', sort: true }, { title: "姓名姓名姓名", field: 'name', sort: true }, { title: "姓名姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "性别", field: 'sex', render: this.cellrender }, { title: "性别", field: 'sex', render: this.cellrender }, { title: "id", field: 'id', className: "test dd" }, { title: "姓名", field: 'name', sort: true }, { title: "id", field: 'id', className: "test dd" }, { title: "姓名", field: 'name', sort: true }, { title: "姓名", field: 'name', sort: true }, { title: "id", field: 'id', className: "test dd" }, { title: "id", field: 'id', className: "test dd" }, { title: "姓名", field: 'name', sort: true }, { title: "id", field: 'id', className: "test dd" }],
	            msg: {},
	            formatter: function formatter(data) {
	                console.log(data);
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = (0, _getIterator3.default)(data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var obj = _step.value;

	                        obj.checkbox = "<input type='checkbox' @click='clickCheck(" + obj.id + ",$event)'>";
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

	                return data;
	            },
	            rowSelection: {
	                type: "checkbox",
	                onSelect: function onSelect(index, state, item) {
	                    console.log(index);
	                    console.log(state);
	                    console.log(item);
	                },
	                onSelectAll: function onSelectAll(state, items) {
	                    console.log(state);
	                    console.log(items);
	                }
	            }
	        };
	    },
	    components: {
	        vDatatable: _datatable2.default,
	        codeBox: _codeBox2.default,
	        apiTable: _apiTable2.default
	    },
	    methods: {
	        handleIt: function handleIt(msg) {
	            console.log(msg);
	            this.msg = msg;
	        },
	        cellrender: function cellrender(value, row, index) {
	            return '<strong>' + value + '</strong>';
	        },
	        clickCheck: function clickCheck() {
	            alert(0);
	        }
	    }
	};

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 431:
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
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./datatable.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./datatable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 563:
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <section class=\"markdown\">\n        <h1>Datatable</h1>\n\n        <p>\n            依赖服务端加载的数据表格\n        </p>\n\n        <h2>何时使用</h2>\n        <ul>\n            <p>\n                展示大量结构化数据时使用.\n            </p>\n        </ul>\n\n        <v-datatable\n                :data-source='url'\n                :columns='columns'\n                :formatter='formatter'\n                :row-selection='rowSelection'\n                :bottom-gap=\"100\"\n                :left-fix=\"3\"\n        >\n        </v-datatable>\n\n        <br>\n\n        <v-datatable\n                :data-source='url'\n                :columns='columns'\n                :formatter='formatter'\n                :row-selection='rowSelection'\n                :height='400'\n        >\n        </v-datatable>\n\n        <h2>组件演示</h2>\n    </section>\n\n    <div class=\"ant-row\" style=\"margin-left: -8px; margin-right: -8px;\">\n        <div class=\"ant-col-lg-24 code-boxes-col-2-1\">\n            <code-box title=\"表格-自定义事件\" describe=\"自定义事件\">\n                <v-datatable :data-source='url' :columns='columns' :formatter='formatter' :row-selection='rowSelection'></v-datatable>\n            </code-box>\n        </div>\n    </div>\n\n    <api-table :apis='apis'>datatable参数</api-table>\n    <api-table :apis='columnsapi'>columns参数</api-table>\n    <api-table :apis='rowSelectionApi'>rowSelection参数</api-table>\n\n</div>\n\n\n";

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(431)
	__vue_script__ = __webpack_require__(275)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\datatable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(563)
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