webpackJsonp([1,53],{

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
	exports.push([module.id, ".code-box {\n  border: 1px solid #e9e9e9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: .5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box .collapse:hover {\n  opacity: 1;\n}\n.code-box:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 10;\n  background: #fff;\n}\n.code-box:hover .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n.code-box:hover .code-box-meta {\n  background: #fbfbfb;\n}\n.code-box .code-box-demo {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 42px 20px 50px;\n}\n.code-box .highlight-wrapper {\n  max-height: 0;\n  opacity: 0;\n  overflow: auto;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  border-radius: 0 0 6px 6px;\n}\n.code-box .highlight-wrapper-expand {\n  max-height: 500px;\n  opacity: 1;\n}\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #e9e9e9;\n}\n.code-box-meta {\n  position: relative;\n  padding: 16px;\n  border-radius: 0 0 6px 6px;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n  width: 100%;\n  font-size: 12px;\n}\n.code-box-meta p {\n  margin: 0;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E6D2\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  display: inline-block;\n}\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n  font-size: 14px;\n}\n.highlight {\n  line-height: 1.5;\n}\n.highlight pre {\n  margin: 0;\n  padding: 0;\n  background: #fff;\n  width: auto;\n}\n.highlight pre code {\n  display: block;\n  color: #666;\n  line-height: 1.7;\n  border: 1px solid #e9e9e9;\n  padding: 10px 15px;\n  border-radius: 6px;\n  font-size: 13px;\n  border: none;\n  background: #fff;\n}\n.hljs {\n  background: none;\n}\n", ""]);

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

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(29)
	  , invoke             = __webpack_require__(303)
	  , html               = __webpack_require__(61)
	  , cel                = __webpack_require__(47)
	  , global             = __webpack_require__(20)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(32)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vertical-center-modal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.vertical-center-modal .ant-modal {\n  top: 0;\n}\n", ""]);

	// exports


/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(99);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 157:
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <section class=\"markdown\">\n    <h1>Modal对话框</h1>\n    <p>\n      模态对话框。\n    </p>\n    <h2>何时使用</h2>\n    <ul>\n      <li>需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li>\n      <li>另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 ant.Modal.confirm() 等方法。</li>\n    </ul>\n    <h2>组件演示</h2>\n  </section>\n  <v-Row :gutter=\"16\">\n    <v-Col span=\"12\">\n    <code-box\n      title=\"基本\"\n      describe=\"第一个对话框。\"\n      code=''> \n      <v-button type=\"primary\" @click=\"_showModal\">显示对话框</v-button>\n      <v-modal title=\"第一个 Modal\"\n        :visible=\"visible\"\n        :on-ok=\"_handleOk\"\n        :on-cancel=\"_handleCancel\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n      </v-modal>\n    </code-box>\n\n    <code-box\n      title=\"自定义页脚\"\n      describe=\"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。\"\n      code=\"\"> \n      <v-button type=\"primary\" @click=\"_showModal2\">显示对话框</v-button>\n      <v-modal title=\"Modal\"\n        :visible=\"visible2\"\n        :on-cancel=\"_handleCancel2\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <div slot=\"footer\">\n          <v-button key=\"cancel\" type=\"ghost\" size=\"large\" @click=\"_handleCancel2\">返 回</v-button>\n          <v-button key=\"confirm\" type=\"primary\" size=\"large\" :loading=\"confirmLoading2\" @click=\"_handleOk2\">提 交</v-button>\n        </div>\n      </v-modal>\n    </code-box>\n\n    <code-box\n      title=\"自定义页脚\"\n      describe=\"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。\"\n      code=\"\"> \n      <v-button type=\"primary\" @click=\"_showModal3\">显示对话框</v-button>\n      <v-modal title=\"第一个 Modal\"\n        :visible=\"visible3\"\n        :on-ok=\"_handleOk3\"\n        :on-cancel=\"_handleCancel3\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n      </v-modal>\n    </code-box>\n\n    <code-box\n      title=\"国际化\"\n      describe=\"设置 okText 与 cancelText 以自定义按钮文字。\"\n      code=\"\"> \n      <v-button type=\"primary\" @click=\"_showModal4\">show Modal</v-button>\n      <v-modal title=\"Modal\"\n        :visible=\"visible4\"\n        :on-ok=\"_handleOk4\"\n        :on-cancel=\"_handleCancel4\"\n        ok-text=\"ok\"\n        cancel-text=\"Cancel\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n      </v-modal>\n      <br/>\n      <v-button @click=\"_confirmNation\">confirm</v-button>\n    </code-box>\n\n    <code-box\n      title=\"自定义位置\"\n      describe=\"1.0 之后，Modal 的 align 属性被移除，您可以直接使用 style.top 或配合其他样式来设置对话框位置。\"\n      code=\"\"> \n      <v-button type=\"primary\" @click=\"_showModal5\">显示距离顶部 20px 的对话框</v-button>\n      <v-button type=\"primary\" @click=\"_showModal51\">显示垂直居中的对话框</v-button>\n      <v-modal \n        title=\"Modal\"\n        :visible=\"visible5\"\n        :on-ok=\"_handleOk5\"\n        :on-cancel=\"_handleCancel5\"\n        :modal-style=\"modalStyle\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n      </v-modal>\n      <v-modal \n        title=\"Modal\"\n        :visible=\"visible51\"\n        :on-ok=\"_handleOk51\"\n        :on-cancel=\"_handleCancel51\"\n        wrap-class-name=\"vertical-center-modal\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n      </v-modal>\n    </code-box>\n  </v-col>\n  <v-Col span=\"12\">\n    <code-box\n      title=\"异步关闭\"\n      describe=\"点击确定后异步关闭对话框，例如提交表单。\"\n      code=\"\"> \n      <v-button type=\"primary\" @click=\"_showModal6\">显示对话框</v-button>\n      <v-modal title=\"第一个 Modal\"\n        :visible=\"visible6\"\n        :on-ok=\"_handleOk6\"\n        :on-cancel=\"_handleCancel6\"\n        :confirm-loading=\"confirmLoading6\">\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n        <p>对话框的内容</p>\n      </v-modal>\n    </code-box>\n\n    <code-box\n      title=\"自定义页脚\"\n      describe=\"更复杂的例子，自定义了页脚的按钮，点击提交后进入 loading 状态，完成后关闭。\"\n      code=\"\"> \n      <v-button @click=\"_showConfirm2\">确认对话框</v-button>\n    </code-box>\n\n    <code-box\n      title=\"信息提示\"\n      describe=\"各种类型的信息提示，只提供一个按钮用于关闭。\"\n      code=\"\"> \n      <v-button @click=\"info\">信息提示</v-button>\n      <v-button @click=\"success\">成功提示</v-button>\n      <v-button @click=\"error\">失败提示</v-button>\n      <v-button @click=\"error\">警告提示</v-button>\n    </code-box>\n\n    <code-box\n      title=\"手动移除\"\n      describe=\"手动关闭modal。\"\n      code=\"\"> \n      <v-button @click=\"_confirmDestroy\">成功提示</v-button>\n    </code-box>\n  </v-col>\n</v-row>\n  <api-table\n    :apis='modalApis'\n  ></api-table>\n  <api-table\n    :apis='confirmApis',\n    title=\"Modal.xxx()\"\n  >\n    <p>包括：</p>\n    <ul><li><p><code>Modal.info</code></p></li><li><p><code>Modal.success</code></p></li><li><p><code>Modal.error</code></p></li><li><p><code>Modal.warning</code></p></li><li><p><code>Modal.confirm</code></p></li></ul>\n    <p>以上均为一个函数，参数为 object，具体属性如下：</p>\n  </api-table>\n</div>\n";

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(331);
	__webpack_require__(38);
	__webpack_require__(54);
	__webpack_require__(332);
	module.exports = __webpack_require__(17).Promise;

/***/ },

/***/ 298:
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(29)
	  , call        = __webpack_require__(64)
	  , isArrayIter = __webpack_require__(63)
	  , anObject    = __webpack_require__(23)
	  , toLength    = __webpack_require__(52)
	  , getIterFn   = __webpack_require__(53)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },

/***/ 303:
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(20)
	  , macrotask = __webpack_require__(70).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(32)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(26);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(20)
	  , core        = __webpack_require__(17)
	  , dP          = __webpack_require__(28)
	  , DESCRIPTORS = __webpack_require__(25)
	  , SPECIES     = __webpack_require__(19)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(23)
	  , aFunction = __webpack_require__(44)
	  , SPECIES   = __webpack_require__(19)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },

/***/ 331:
/***/ function(module, exports) {

	

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(67)
	  , global             = __webpack_require__(20)
	  , ctx                = __webpack_require__(29)
	  , classof            = __webpack_require__(45)
	  , $export            = __webpack_require__(21)
	  , isObject           = __webpack_require__(30)
	  , aFunction          = __webpack_require__(44)
	  , anInstance         = __webpack_require__(298)
	  , forOf              = __webpack_require__(301)
	  , speciesConstructor = __webpack_require__(319)
	  , task               = __webpack_require__(70).set
	  , microtask          = __webpack_require__(307)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(19)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(316)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(49)($Promise, PROMISE);
	__webpack_require__(318)(PROMISE);
	Wrapper = __webpack_require__(17)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(66)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(525);

	var _promise2 = _interopRequireDefault(_promise);

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      modalText: '对话框的内容',
	      confirmLoading: false,
	      visible: false,
	      visible2: false,
	      visible3: false,
	      visible4: false,
	      visible5: false,
	      visible51: false,
	      visible6: false,
	      confirmLoading2: false,
	      confirmLoading6: false,
	      modalStyle: {
	        top: '20px'
	      },
	      wrapClassName: 'vertical-center-modal',
	      confirmApis: [{
	        "parameter": "title",
	        "explain": "标题",
	        "type": "React.Element or String",
	        "default": "无"
	      }, {
	        "parameter": "content",
	        "explain": "内容",
	        "type": "React.Element or String",
	        "default": "无"
	      }, {
	        "parameter": "onOk",
	        "explain": "点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭",
	        "type": "function",
	        "default": "无"
	      }, {
	        "parameter": "onCancel",
	        "explain": "取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭",
	        "type": "function",
	        "default": "无"
	      }, {
	        "parameter": "width",
	        "explain": "宽度",
	        "type": "String or Number",
	        "default": "416"
	      }, {
	        "parameter": "iconType",
	        "explain": "图标 Icon 类型",
	        "type": "String",
	        "default": "question-circle"
	      }, {
	        "parameter": "okText",
	        "explain": "确认按钮文字",
	        "type": "String",
	        "default": "确定"
	      }, {
	        "parameter": "cancelText",
	        "explain": "取消按钮文字",
	        "type": "String",
	        "default": "取消"
	      }],
	      modalApis: [{
	        "parameter": "visible",
	        "explain": "对话框是否可见",
	        "type": "Boolean",
	        "default": "无"
	      }, {
	        "parameter": "confirmLoading",
	        "explain": "确定按钮 loading",
	        "type": "Boolean",
	        "default": "无"
	      }, {
	        "parameter": "title",
	        "explain": "标题",
	        "type": "React.Element",
	        "default": "无"
	      }, {
	        "parameter": "closable",
	        "explain": "是否显示右上角的关闭按钮",
	        "type": "Boolean",
	        "default": "true"
	      }, {
	        "parameter": "onOk",
	        "explain": "点击确定回调",
	        "type": "function",
	        "default": "无"
	      }, {
	        "parameter": "onCancel",
	        "explain": "点击遮罩层或右上角叉或取消按钮的回调",
	        "type": "function(e)",
	        "default": "无"
	      }, {
	        "parameter": "width",
	        "explain": "宽度",
	        "type": "String or Number",
	        "default": "520"
	      }, {
	        "parameter": "footer",
	        "explain": "底部内容",
	        "type": "React.Element",
	        "default": "确定取消按钮"
	      }, {
	        "parameter": "okText",
	        "explain": "确认按钮文字",
	        "type": "String",
	        "default": "确定"
	      }, {
	        "parameter": "cancelText",
	        "explain": "取消按钮文字",
	        "type": "String",
	        "default": "取消"
	      }, {
	        "parameter": "maskClosable",
	        "explain": "点击蒙层是否允许关闭",
	        "type": "Boolean",
	        "default": "true"
	      }, {
	        "parameter": "style",
	        "explain": "可用于设置浮层的样式，调整浮层位置等",
	        "type": "Object",
	        "default": "-"
	      }, {
	        "parameter": "wrapClassName",
	        "explain": "对话框外层容器的类名",
	        "type": "String",
	        "default": "-"
	      }]
	    };
	  },


	  components: { codeBox: _codeBox2.default, apiTable: _apiTable2.default },

	  methods: {
	    _showModal: function _showModal() {
	      this.visible = true;
	    },
	    _handleOk: function _handleOk() {
	      this.confirmLoading = false;
	      this.visible = false;
	    },
	    _handleCancel: function _handleCancel() {
	      this.visible = false;
	    },
	    _showModal2: function _showModal2() {
	      this.visible2 = true;
	    },
	    _handleOk2: function _handleOk2() {
	      var _this = this;

	      this.modalText = '对话框将在两秒后关闭';
	      this.confirmLoading2 = true;
	      setTimeout(function () {
	        _this.visible2 = false;
	        _this.confirmLoading2 = false;
	      }, 2000);
	    },
	    _handleCancel2: function _handleCancel2() {
	      this.visible2 = false;
	    },
	    _showModal3: function _showModal3() {
	      this.visible3 = true;
	    },
	    _handleOk3: function _handleOk3() {
	      this.visible3 = false;
	    },
	    _handleCancel3: function _handleCancel3() {
	      this.visible3 = false;
	    },
	    _showModal4: function _showModal4() {
	      this.visible4 = true;
	    },
	    _handleOk4: function _handleOk4() {
	      this.modalText = '对话框将在两秒后关闭';
	      this.visible4 = false;
	    },
	    _handleCancel4: function _handleCancel4() {
	      this.visible4 = false;
	    },
	    _showModal5: function _showModal5() {
	      this.visible5 = true;
	    },
	    _handleOk5: function _handleOk5() {
	      this.visible5 = false;
	    },
	    _handleCancel5: function _handleCancel5() {
	      this.visible5 = false;
	    },
	    _showModal51: function _showModal51() {
	      this.visible51 = true;
	    },
	    _handleOk51: function _handleOk51() {
	      this.visible51 = false;
	    },
	    _handleCancel51: function _handleCancel51() {
	      this.visible51 = false;
	    },
	    _showModal6: function _showModal6() {
	      this.visible6 = true;
	    },
	    _handleOk6: function _handleOk6() {
	      var _this2 = this;

	      this.modalText = '对话框将在两秒后关闭';
	      this.confirmLoading6 = true;
	      setTimeout(function () {
	        _this2.visible6 = false;
	        _this2.confirmLoading6 = false;
	      }, 2000);
	    },
	    _handleCancel6: function _handleCancel6() {
	      this.visible6 = false;
	    },
	    _confirmNation: function _confirmNation() {
	      Vue.$modal.confirm({
	        title: 'Confirm',
	        content: 'Bla bla ...',
	        okText: 'OK',
	        cancelText: 'Cancel'
	      });
	    },
	    _showConfirm: function _showConfirm() {
	      Vue.$modal.confirm({
	        title: '您是否确认要删除这项内容',
	        content: '一些解释',
	        onOk: function onOk() {
	          console.log('确定');
	        },
	        onCancel: function onCancel() {}
	      });
	    },
	    _showConfirm2: function _showConfirm2() {
	      Vue.$modal.confirm({
	        title: '您是否确认要删除这项内容',
	        content: '点确认 1 秒后关闭',
	        onOk: function onOk() {
	          return new _promise2.default(function (resolve) {
	            setTimeout(resolve, 1000);
	          });
	        },
	        onCancel: function onCancel() {}
	      });
	    },
	    info: function info() {
	      Vue.$modal.info({
	        title: '这是一条通知信息',
	        content: '一些附加信息一些附加信息一些附加信息',
	        onOk: function onOk() {}
	      });
	    },
	    success: function success() {
	      Vue.$modal.success({
	        title: '这是一条通知信息',
	        content: '一些附加信息一些附加信息一些附加信息'
	      });
	    },
	    error: function error() {
	      this.$modal.error({
	        title: '这是一条通知信息',
	        content: '一些附加信息一些附加信息一些附加信息'
	      });
	    },
	    _confirmDestroy: function _confirmDestroy() {
	      var modal = this.$modal.success({
	        title: '这是一条通知信息',
	        content: '一秒后自动移除'
	      });
	      setTimeout(function () {
	        return modal.destroy();
	      }, 1000);
	    }
	  }
	};

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(296), __esModule: true };

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(118)
	__vue_script__ = __webpack_require__(428)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(157)
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