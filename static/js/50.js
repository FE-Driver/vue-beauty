webpackJsonp([50,53],{

/***/ 236:
/***/ function(module, exports) {

	module.exports = "\n\n    <div v-highlight>\n\n        <section class=\"markdown\">\n            <h1>vue-beauty</h1>\n            <p>\n                vue-beauty 是一套基于 vue.js 和 ant-design样式 的PC端 UI 组件库，旨在帮助开发者提升产品体验和开发效率、降低维护成本。\n            </p>\n\n            <h2>特性</h2>\n            <p>\n                <li>丰富的组件，涵盖常用场景</li>\n                <li>基于vue组件化开发，数据驱动视图</li>\n                <li>封装复杂性，提供简单友好的api</li>\n                <li>基于ant design样式优化</li>\n            </p>\n            <h2>引入</h2>\n            使用npm\n<pre v-highlight=\"'javascript'\">\n    <code>\n        npm install vue-beauty -S\n\n        import Vue from 'vue'\n\n        //import css\n        import from 'vue-beauty/style/vue-beauty.min.css'\n\n        //import components\n        import vue-beauty from 'vue-beauty'\n        Vue.use(vue-beauty)\n\n        //OR\n        import {alert} from 'vue-beauty'\n        Vue.use(alert)\n    </code>\n</pre>\n            或使用 &lt;script&gt; 全局引用\n<pre>\n    <code>\n        &lt;link rel=\"stylesheet\" href=\"vue-beauty.min.css\"&gt; \n        &lt;script type=\"text/javascript\" src=\"vue-beauty.min.js\"&gt;&lt;/script&gt; \n    </code>\n</pre>\n        <h2>示例</h2>\n<pre>\n    <code>\n        &lt;template&gt;\n            &lt;v-button&gt;按钮&lt;/v-button&gt;\n        &lt;/template&gt;\n    </code>\n</pre>\n            效果<br>\n            <v-button>按钮</v-button>\n            <h2>版本</h2>\n            <p> \n                <a href=\"https://www.npmjs.com/package/vue-beauty\" target=\"_blank\"> \n                    <img src=\"http://img.shields.io/npm/v/vue-beauty.svg\"> \n                </a> \n            </p>\n            <h2>\n                浏览器支持\n            </h2>\n            <p>chrome、firefox，暂不支持IE(计划支持IE11+)</p>\n            <h2>\n                相关链接\n            </h2>\n            <ul>\n                <li><a href=\"http://v1-cn.vuejs.org/\" target=\"blank\">vue1官方网站</a></li>\n                <li><a href=\"https://github.com/vuejs/vue-cli\" target=\"blank\">vue cli</a></li>\n                <li><a href=\"https://github.com/vuejs/awesome-vue\" target=\"blank\">awesome vue</a></li>\n                <li><a href=\"http://es6.ruanyifeng.com/\" target=\"blank\">ES2015入门</a></li>\n                <li><a href=\"http://webpack.github.io/\" target=\"blank\">webpack</a></li>\n            </ul>\n            <h2>\n                相关开源项目\n            </h2>\n            vue-beauty 部分代码参考了以下项目：\n            <ul>\n                <li><a href=\"https://github.com/ant-design/ant-design/\" target=\"blank\">Ant Design</a></li>\n                <li><a href=\"https://github.com/ElemeFE/element\" target=\"blank\">Element</a></li>\n                <li><a href=\"https://github.com/okoala/vue-antd\" target=\"blank\">vue-antd</a></li>\n                <li><a href=\"https://github.com/iview/iview\" target=\"blank\">iview</a></li>\n            </ul>\n            <h2>\n                谁在使用\n            </h2>\n            <ul>\n                <li><a href=\"http://www.g7.com.cn/\" target=\"blank\">汇通天下</a></li>\n            </ul>\n        </section>\n\n    </div>\n\n";

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(236)
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