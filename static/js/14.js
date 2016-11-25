webpackJsonp([14,50],{

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

/***/ 234:
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
	        parameter: 'name',
	        explain: '可选参数, 上传的文件',
	        type: 'String',
	        default: 'file'
	      }, {
	        parameter: 'action',
	        explain: '必选参数, 上传的地址',
	        type: 'string',
	        default: '无'
	      }, {
	        parameter: 'data',
	        explain: '可选参数, 上传所需参数',
	        type: 'Object',
	        default: '无'
	      }, {
	        parameter: 'multiple',
	        explain: '可选参数, 是否支持多选文件，支持 ie10+',
	        type: 'Boolean',
	        default: 'false'
	      }, {
	        parameter: 'accept',
	        explain: '可选参数, 接受上传的文件类型, 详见 input accept Attribute',
	        type: 'String',
	        default: '无'
	      }, {
	        parameter: 'onChange',
	        explain: '可选参数, 上传文件改变时的状态，详见 onChange',
	        type: 'Function',
	        default: '无'
	      }],
	      name: 'file',
	      action: '/upload',
	      onChange: function onChange(info) {
	        if (info.file.status !== 'uploading') {
	          console.log(info.file, info.fileList);
	        }
	        if (info.file.status === 'done') {
	          console.log(info.file.name + ' 上传成功.');
	        } else if (info.file.status === 'error') {
	          console.log(info.file.name + ' 上传失败.');
	        }
	      },

	      defaultFileList: [{
	        uid: -1,
	        name: 'xxx.png',
	        status: 'done',
	        url: 'http://www.baidu.com/xxx.png'
	      }, {
	        uid: -2,
	        name: 'yyy.png',
	        status: 'done',
	        url: 'http://www.baidu.com/yyy.png'
	      }]
	    };
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  }
	};

/***/ },

/***/ 466:
/***/ function(module, exports) {

	module.exports = "\n\n  <div>\n\n    <section class=\"markdown\">\n      <h1>Upload 上传</h1>\n      <p>\n        文件选择上传和拖拽上传控件。\n      </p>\n      <h2>何时使用</h2>\n      <ul>\n        <p>\n          上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。\n        </p>\n        <ul>\n          <li>当需要上传一个或一些文件时。</li>\n          <li>当需要展现上传的进度时。</li>\n          <li>当需要使用拖拽交互时。</li>\n        </ul>\n      </ul>\n      <h2>组件演示</h2>\n    </section>\n\n    <div class=\"ant-row\" style=\"margin-left: -8px; margin-right: -8px;\">\n\n      <div class=\"ant-col-lg-12 code-boxes-col-2-1\">\n\n        <code-box\n          title=\"点击上传\"\n          describe=\"经典款式，用户点击按钮弹出文件选择框。\"\n          code=\"<v-upload :name='name' :action='action' :on-change='onChange'>\n  <v-button type='ghost'>\n    <v-icon type='upload'></v-icon> 点击上传\n  </v-button>\n</v-upload>\"\n        >\n          <v-upload :name=\"name\" :action=\"action\" :on-change=\"onChange\">\n            <v-button type=\"ghost\">\n              <v-icon type=\"upload\"></v-icon> 点击上传\n            </v-button>\n          </v-upload>\n        </code-box>\n\n        <code-box\n          title=\"拖拽上传1\"\n          describe=\"可以把文件拖入指定区域，完成上传，同样支持点击上传。\"\n          code=\"<v-upload :name='name' :action='action' type='drag' :on-change='onChange'>\n  <p class='ant-upload-drag-icon'>\n    <v-icon type='inbox'></v-icon>\n  </p>\n  <p class='ant-upload-text'>点击或将文件拖拽到此区域上传</p>\n  <p class='ant-upload-hint'>支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>\n</v-upload>\"\n        >\n          <v-upload :name=\"name\" :action=\"action\" type=\"drag\" :on-change=\"onChange\">\n            <p class=\"ant-upload-drag-icon\">\n              <v-icon type=\"inbox\"></v-icon>\n            </p>\n            <p class=\"ant-upload-text\">点击或将文件拖拽到此区域上传</p>\n            <p class=\"ant-upload-hint\">支持单个或批量上传，严禁上传公司内部资料及其他违禁文件</p>\n          </v-upload>\n        </code-box>\n\n      </div>\n\n      <div class=\"ant-col-lg-12 code-boxes-col-2-1\">\n\n        <code-box\n          title=\"传入已上传的文件\"\n          describe=\"对已上传的文件进行编辑。\"\n          code=\"<v-upload :name='name' :action='action' :default-file-list='defaultFileList' :on-change='onChange'>\n  <v-button type='ghost'>\n    <v-icon type='upload'></v-icon> 点击上传\n  </v-button>\n</v-upload>\"\n        >\n         <v-upload :name=\"name\" :action=\"action\" :default-file-list=\"defaultFileList\" :on-change=\"onChange\">\n          <v-button type=\"ghost\">\n            <v-icon type=\"upload\"></v-icon> 点击上传\n          </v-button>\n        </v-upload>\n        </code-box>\n\n        <code-box\n          title=\"拖拽上传2\"\n          describe=\"可以把文件拖入指定区域，完成上传，同样支持点击上传。\"\n          code=\"<div style='width: 246px; height: 146px'>\n  <v-upload :name='name' :action='action' type='drag' :on-change='onChange'>\n    <v-icon type='plus'></v-icon>\n  </v-upload>\n</div>\"\n        >\n          <div style=\"width: 246px; height: 146px\">\n            <v-upload :name=\"name\" :action=\"action\" type=\"drag\" :on-change=\"onChange\">\n              <v-icon type=\"plus\"></v-icon>\n            </v-upload>\n          </div>\n        </code-box>\n\n        <code-box\n          title=\"多文件上传\"\n          describe=\"可以选择多个文件上传。\"\n          code=\"<v-upload :name='name' :action='action' :multiple='true' :on-change='onChange'>\n  <v-button type='ghost'>\n    <v-icon type='upload'></v-icon> 点击上传\n  </v-button>\n</v-upload>\"\n        >\n          <v-upload :name=\"name\" :action=\"action\" :multiple=\"true\" :on-change=\"onChange\">\n            <v-button type=\"ghost\">\n              <v-icon type=\"upload\"></v-icon> 点击上传\n            </v-button>\n          </v-upload>\n        </code-box>\n\n      </div>\n    </div>\n\n\n    <api-table\n      :apis='apis'\n    ></api-table>\n    <section class=\"markdown\">\n      <h3>onChange</h3>\n      <p>文件状态改变的回调，返回为：</p>\n      <pre>\n        <code>\n          {\n            file: { ... },\n            fileList: [ ... ],\n            event: { ... }\n          }\n        </code>\n      </pre>\n      <ol>\n        <li><p><code>file</code> 当前操作的文件对象。</p>\n        <pre><code>{\n          uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\n          name: 'xx.png'   // 文件名\n          status: 'done',  // 状态有：uploading done error removed\n          response: '{\"status\":\"success\"}'  // 服务端响应内容\n        }\n        </code></pre>\n        <p>如果上传控件是 multiple 时，此参数将为一个对象数组 <code>[file, ...]</code>。</p>\n        </li>\n        <li><p><code>fileList</code> 当前的文件列表。</p>\n        </li>\n        <li><code>event</code> 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。</li>\n      </ol>\n      <h2 id=\"-\">显示下载链接</h2>\n      <p>请使用 fileList 属性设置数组项的 url 属性进行展示控制。</p>\n      <h2 id=\"ie-note\">IE note</h2>\n      <ul>\n        <li><a href=\"https://github.com/react-component/upload#ie89-note\">https://github.com/react-component/upload#ie89-note</a></li>\n      </ul>\n    </section>\n  </div>\n\n";

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(234)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\upload.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(466)
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