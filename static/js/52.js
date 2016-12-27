webpackJsonp([52,53],{

/***/ 198:
/***/ function(module, exports) {

	module.exports = "\n\n    <div v-highlight>\n\n        <section class=\"markdown\">\n            <h1>目录结构</h1>\n<pre>\n    <code>\n        VUE-BEAUTY/\n        |-- build               存放webpack的配置\n        |-- vb                  组件库的位置\n        |   |-- components      存放组件\n        |   |   |-- base        基础组件，可复用的公共组件\n        |   |   `-- _util       公共方法\n        |   |-- style           组件的公共样式\n        |   |-- directive       vue指令\n        |   `-- utils           工具方法\n        `-- src                 存放文档\n            |-- components      文档组件、业务组件\n            |-- views           组件的说明文档\n            `-- routers.js      路由\n    </code>\n</pre>\n\n            <h2>参与流程</h2>\n            <p>\n                <li>fork并clone本项目</li>\n                <li>我们会通过issue的形式发布一系列任务</li>\n                <li>在任务issue下面回复并认领</li>\n                <li>在develop分支下实现</li>\n                <li>rebase并发起pr到develop分支</li>\n                <li>NOTICE：可以加入QQ群548062121讨论</li>\n            </p>\n            <h2>组件开发步骤</h2>\n            <p>\n                <li>到<a href=\"https://github.com/ant-design/ant-design/tree/master/components\" target=\"blank\">ant-design2.5.3</a>官网拷贝组件相应的样式到vb/style/components下</li>\n                <li>打开vb/style/components/index.less，导出组件的样式</li>\n                <li>在vb/components文件夹下开发组件</li>\n                <li>到vb/index.js下导出组件</li>\n                <li>到src/views下编写组件的使用文档</li>\n                <li>修改以下文件：src/routers.js、src/views/components.vue添加文档的路由和链接</li>\n                <li>NOTICE：如果你需要增加样式，可以在组件对应的样式目录中增加xxx_vb.less（如button_vb.less），并在index.less中import该样式文件</li>\n            </p>\n            <h2>命名规范</h2>\n            <p>\n                <li>文件，目录均以小写开头，驼峰式(如inputNumber)</li>\n                <li>组件的import export 均以v开头，驼峰式(如vInputNumber)</li>\n            </p>\n            <h2>ES语法说明</h2>\n            <p>\n                <li>.babelrc配置了preset-latest保证新的语法支持（如const、let）</li>\n                <li>.babelrc配置了transform-runtime保证新的全局对象和全局对象上的方法的支持（如Promise、Object.assign）</li>\n                <li>vb/utils/polyfill.js配置了可以使用的实例方法（如'abc'.includes('a')）</li>\n            </p>\n            <h2>开发环境搭建</h2>\n            首先你需要安装Node.js 4+\n<pre>\n        <code>  \n        git clone your fork\n        npm install\n        npm run dev\n        </code>\n</pre>\n            To build:\n<pre>\n    <code>\n        npm run build\n    </code>\n</pre>\n        <h2>代码规范</h2>\n        <p>参考<a href=\"https://github.com/airbnb/javascript\" target=\"blank\">Airbnb</a>的JavaScript风格规范。</p>\n        </section>\n\n    </div>\n\n";

/***/ },

/***/ 649:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_template__ = __webpack_require__(198)
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