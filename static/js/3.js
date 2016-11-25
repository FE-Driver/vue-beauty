webpackJsonp([3,50],{

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

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isInteger = __webpack_require__(308);

	var _isInteger2 = _interopRequireDefault(_isInteger);

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    var _this = this;

	    var checkAge = function checkAge(rule, value, callback) {
	      var age = parseInt(value, 10);

	      setTimeout(function () {
	        if (!(0, _isInteger2.default)(age)) {
	          callback(new Error('请输入数字值'));
	        } else {
	          if (age < 18) {
	            callback(new Error('必须年满18岁'));
	          } else {
	            callback();
	          }
	        }
	      }, 1000);
	    };
	    var validatePass = function validatePass(rule, value, callback) {
	      if (value === '') {
	        callback(new Error('请输入密码'));
	      } else {
	        if (_this.customForm.checkPass !== '') {
	          _this.$refs.customRuleForm.validateField('checkPass');
	        }
	        callback();
	      }
	    };
	    var validatePass2 = function validatePass2(rule, value, callback) {
	      if (value === '') {
	        callback(new Error('请再次输入密码'));
	      } else if (value !== _this.customForm.pass) {
	        callback(new Error('两次输入密码不一致!'));
	      } else {
	        callback();
	      }
	    };

	    return {
	      content: [['model', '表单数据对象', 'object', '-'], ['rules', '表单验证规则', 'object', '-'], ['direction', 'form 排列布局方式 inline或者horizontal', 'string', 'inline']],
	      methodsCont: [['validate', '对整个表单进行校验的方法', 'callback(valid)', '无'], ['validateField', '对部分表单字段进行校验的方法', 'prop,callback(valid)', '无'], ['resetFields', '对整个表单进行重置，isAll为true将model里所有字段值重置为初始值并移除校验结果，为false则只重置传了prop属性的表单元素', 'isAll,默认为true', '无']],
	      itemCont: [['prop', '表单域 model 字段', '传入 Form 组件的 model 中的字段', '-'], ['help', '提示信息，如不设置，则会根据校验规则自动生成', 'string', '无'], ['hasFeedback', '配合 validateStatus 属性使用，展示校验状态图标，建议只配合 Input 组件使用', 'boolean', 'false'], ['validateStatus', "校验状态，如不设置，则会根据校验规则自动生成('success' 'warning' 'error' 'validating')", 'string', '无'], ['required', '是否必填，如不设置，则会根据校验规则自动生成', 'boolean', 'false'], ['label', 'label 标签的文本', 'string', '无'], ['labelCol', 'label 标签布局，通 v-col 组件，设置 span offset 值，如 {span: 3, offset: 12}', 'object', '无'], ['wrapperCol', '需要为输入控件设置布局样式时，使用该属性，用法同 labelCol', 'object', '无']],
	      ruleForm: {
	        name: '',
	        region: '',
	        date: '',
	        delivery: false,
	        type: [],
	        resource: '',
	        desc: ''
	      },
	      rules: {
	        name: [{ required: true, message: '请输入活动名称' }],
	        region: [{ required: true, message: '请选择活动区域' }],
	        date: [{ required: true, message: '请选择日期' }],
	        type: [{ type: 'array', required: true, message: '请至少选择一个活动性质' }],
	        resource: [{ required: true, message: '请选择活动资源' }],
	        desc: [{ required: true, message: '请填写活动形式' }]
	      },
	      customForm: {
	        pass: '',
	        checkPass: '',
	        age: ''
	      },
	      customRules: {
	        pass: [{ required: true, message: '请输入密码' }, { validator: validatePass }],
	        checkPass: [{ required: true, message: '请再次输入密码' }, { validator: validatePass2 }],
	        age: [{ required: true, message: '请填写年龄' }, { validator: checkAge }]
	      },
	      checkboxOpt: [{ label: '美食/餐厅线上活动', value: '1' }, { label: '地推活动', value: '2' }, { label: '线下主题活动', value: '3' }, { label: '单纯品牌曝光', value: '4' }],
	      labelCol: { span: 6 },
	      wrapperCol: { span: 14 }
	    };
	  },
	  methods: {
	    handleSubmit: function handleSubmit() {
	      this.$refs.ruleForm.validate(function (valid) {
	        if (valid) {
	          alert('submit!');
	        } else {
	          console.log('error submit!!');
	          return false;
	        }
	      });
	    },
	    handleReset: function handleReset() {
	      this.$refs.ruleForm.resetFields();
	    },
	    handleReset2: function handleReset2() {
	      this.$refs.customRuleForm.resetFields();
	    },
	    handleSubmit2: function handleSubmit2(ev) {
	      this.$refs.customRuleForm.validate(function (valid) {
	        if (valid) {
	          alert('submit!');
	        } else {
	          console.log('error submit!!');
	          return false;
	        }
	      });
	    }
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  }
	};

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(320), __esModule: true };

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(356);
	module.exports = __webpack_require__(18).Number.isInteger;

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(32)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(23);

	$export($export.S, 'Number', {isInteger: __webpack_require__(333)});

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".code-box-demo .ant-form-horizontal {\n  max-width: 540px;\n}\n", ""]);

	// exports


/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(368);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./form.vue", function() {
				var newContent = require("!!./../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/style-rewriter.js!./../../node_modules/.npminstall/less-loader/2.2.3/less-loader/index.js!./../../node_modules/.npminstall/vue-loader/8.5.4/vue-loader/lib/selector.js?type=style&index=0!./form.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 437:
/***/ function(module, exports) {

	module.exports = "\n\n  <div>\n\n    <section class=\"markdown\">\n      <h1>Form 表单</h1>\n      <p>\n        具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。\n      </p>\n      <h2>表单</h2>\n      <ul>\n        <p>\n          我们为 form 提供了以下两种排列方式：\n        </p>\n        <li>水平排列：可以实现 label 标签和表单控件的水平排列；</li>\n        <li>行内排列：使其表现为 inline-block 级别的控件。</li>\n      </ul>\n      <h2>表单域</h2>\n      <ul>\n        <p>\n          表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。<br>这里我们封装了表单域 <code>&lt;Form.Item /&gt;</code 。\n        </p>\n      </ul>\n      <h2>组件演示</h2>\n    </section>\n\n    <v-row>\n\n      <v-col>\n\n        <code-box\n          title=\"平行排列\"\n          describe=\"行内排列，常用于登录界面。\"\n        >\n          <v-form>\n            <v-form-item label=\"账户\">\n              <v-input value=\"请输入账户名\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"密码\">\n              <v-input value=\"请输入密码\"></v-input>\n            </v-form-item>\n            <v-form-item>\n              <v-checkbox>记住我</v-checkbox>\n            </v-form-item>\n            <v-button type='primary' html-type=\"submit\">登录</v-button>\n          </v-form>\n        </code-box>\n\n       <code-box\n          title=\"典型排列\"\n          describe=\"竖直排列的表单。\"\n        >\n          <v-form direction=\"horizontal\">\n            <v-form-item label=\"用户名\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\">\n              <p className=\"ant-form-text\" id=\"userName\" name=\"userName\">大眼萌 minion</p>\n            </v-form-item>\n            <v-form-item label=\"密码\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" required>\n              <v-input type=\"password\" placeholder=\"请输入密码\" size=\"large\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"您的性别\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\">\n              <v-radio-group\n                default-value='female'\n                :radios=\"[{value: 'male', name: '男的'},{value: 'female', name: '女的'}]\">\n              </v-radio-group>\n            </v-form-item>\n            <v-form-item label=\"备注\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\">\n              <v-input type='textarea' placeholder=\"随便写\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"卖身华府\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\">\n              <v-checkbox>同意</v-checkbox>\n            </v-form-item>\n            <v-form-item :wrapper-col=\"{span:16,offset:6}\" style=\"margin-top:24px\">\n              <v-button type='primary' html-type=\"submit\">确定</v-button>\n            </v-form-item>\n          </v-form>\n        </code-box>\n\n        <code-box\n          title=\"校验提示\"\n          describe=\"我们为表单控件定义了三种校验状态，为 <FormItem> 定义 validateStatus 属性即可。\nvalidateStatus: 'success', 'warning', 'error', 'validating'。\n另外为输入框添加反馈图标，设置 <FormItem> 的 hasFeedback 属性值为 true 即可。\n注意: 反馈图标只对 &lt; v-input &gt; 有效。\"\n        >\n          <v-form direction=\"horizontal\">\n            <v-form-item label=\"失败校验\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" help=\"请输入数字和字母的组合\" validate-status=\"error\">\n              <v-input value=\"无效选择\" size=\"large\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"警告校验\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" validate-status=\"warning\">\n              <v-input value=\"前方高能预警\" size=\"large\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"校验中\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" help=\"信息审核中...\" has-feedback validate-status=\"validating\">\n              <v-input value=\"我是被校验的内容\" size=\"large\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"成功校验\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" has-feedback validate-status=\"success\">\n              <v-input value=\"我是正文\" size=\"large\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"警告校验\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" has-feedback validate-status=\"warning\">\n              <v-input value=\"前方高能预警\" size=\"large\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"失败校验\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" help=\"请输入数字和字母的组合\" has-feedback validate-status=\"error\">\n              <v-input value=\"无效选择\" size=\"large\"></v-input>\n            </v-form-item>\n          </v-form>\n        </code-box>\n\n         <code-box\n          title=\"表单校验\"\n          describe=\"Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并 Form-Item 的 prop 属相设置为需校验的字段名即可。校验规则参见<a href='https://github.com/yiminghe/async-validator' target='_blank'>async-validator</a>\"\n        >\n          <v-form direction=\"horizontal\" :model=\"ruleForm\" :rules=\"rules\" v-ref:rule-form>\n            <v-form-item label=\"活动名称\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"name\" has-feedback>\n              <v-input size=\"large\" :value.sync=\"ruleForm.name\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"活动区域\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"region\">\n               <v-Select :value.sync=\"ruleForm.region\" placeholder=\"请选择活动区域\" notfound=\"无法找到\" :options=\"[{value: '1', text: '区域1'}, {value: '2', text: '区域2'}]\"></v-Select>\n            </v-form-item>\n            <v-form-item label=\"活动时间\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"date\">\n              <v-datepicker :time.sync=\"ruleForm.date\"></v-datepicker>\n            </v-form-item>\n            <v-form-item label=\"即时配送\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\">\n              <v-switch :value.sync=\"ruleForm.delivery\"></v-switch>\n            </v-form-item>\n            <v-form-item label=\"活动性质\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"type\">\n              <v-checkbox-group :value.sync=\"ruleForm.type\" :options=\"checkboxOpt\"></v-checkbox-group>\n            </v-form-item>\n            <v-form-item label=\"特殊资源\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"resource\">\n              <v-radio-group :value.sync=\"ruleForm.resource\" :radios=\"[{value: '1', name: '线上品牌商赞助'},{value: '2', name: '线下场地免费'}]\"></v-radio-group>\n            </v-form-item>\n            <v-form-item label=\"活动形式\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"desc\">\n              <v-input :value.sync=\"ruleForm.desc\" type='textarea'></v-input>\n            </v-form-item>\n            <v-form-item :wrapper-col=\"{offset:6, span: 14 }\">\n              <v-button type=\"primary\" style=\"margin-right:10px\" @click.prevent=\"handleSubmit\">立即创建</v-button><v-button type=\"ghost\" @click.prevent=\"handleReset\">重置</v-button>\n            </v-form-item>\n          </v-form>\n        </code-box>\n\n        <code-box\n          title=\"自定义校验规则\"\n          describe=\"更加灵活的表单校验。\"\n        >\n          <v-form direction=\"horizontal\" :model=\"customForm\" :rules=\"customRules\" v-ref:custom-rule-form>\n            <v-form-item label=\"密码\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"pass\" has-feedback>\n              <v-input type=\"password\" size=\"large\" :value.sync=\"customForm.pass\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"确认密码\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"checkPass\" has-feedback>\n              <v-input type=\"password\" size=\"large\" :value.sync=\"customForm.checkPass\"></v-input>\n            </v-form-item>\n            <v-form-item label=\"年龄\" :label-col=\"labelCol\" :wrapper-col=\"wrapperCol\" prop=\"age\" has-feedback>\n              <v-input size=\"large\" :value.sync=\"customForm.age\"></v-input>\n            </v-form-item>\n            <v-form-item :wrapper-col=\"{offset:6, span: 14 }\">\n              <v-button type=\"primary\" style=\"margin-right:10px\" @click.prevent=\"handleSubmit2\">提交</v-button><v-button type=\"ghost\" @click.prevent=\"handleReset2\">重置</v-button>\n            </v-form-item>\n          </v-form>\n        </code-box>\n\n      </v-col>\n\n    </v-row>\n\n\n    <api-table\n      :content='content'\n    >\n      <h3>Form</h3>\n    </api-table>\n\n    <api-table\n      title=\"\"\n      type=\"methods\"\n      :content='methodsCont'\n    >\n      <h3>Form methods</h3>\n    </api-table>\n\n    <api-table\n      title=\"\"\n      :content='itemCont'\n    >\n      <h3>Form.Item</h3>\n    </api-table>\n\n  </div>\n\n";

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(399)
	__vue_script__ = __webpack_require__(205)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\views\\form.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(437)
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