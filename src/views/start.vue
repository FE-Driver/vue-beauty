<template lang="html">

    <div v-highlight>

        <section class="markdown">
            <h1>vue-beauty</h1>
            <p>
                vue-beauty 是一套基于 vue.js 和 ant-design样式 的PC端 UI 组件库，旨在帮助开发者提升产品体验和开发效率、降低维护成本。
            </p>

            <h2>特性</h2>
            <p>
                <li>丰富的组件，涵盖常用场景</li>
                <li>基于vue组件化开发，数据驱动视图</li>
                <li>封装复杂性，提供简单友好的api</li>
                <li>基于ant design样式优化</li>
            </p>
            <h2>引入</h2>
            使用npm
<pre v-highlight="'javascript'">
    <code>
        npm install vue-beauty -S

        import Vue from 'vue'

        //import css
        import 'vue-beauty/package/style/vue-beauty.min.css'

        //import components
        import vueBeauty from 'vue-beauty'
        Vue.use(vueBeauty)

        //OR
        import {alert} from 'vue-beauty'
        Vue.use(alert)
    </code>
</pre>
            或使用 &lt;script&gt; 全局引用
<pre>
    <code>
        &lt;link rel="stylesheet" href="vue-beauty.min.css"&gt; 
        &lt;script type="text/javascript" src="vue-beauty.min.js"&gt;&lt;/script&gt; 
    </code>
</pre>
        <h2>示例</h2>
<pre>
    <code>
        &lt;template&gt;
            &lt;v-button&gt;按钮&lt;/v-button&gt;
        &lt;/template&gt;
    </code>
</pre>
            效果<br>
            <v-button>按钮</v-button>
            <h2>版本</h2>
            <p> 
                <a href="https://www.npmjs.com/package/vue-beauty" target="_blank"> 
                    <img src="http://img.shields.io/npm/v/vue-beauty.svg"> 
                </a> 
            </p>
            <h2>
                浏览器支持
            </h2>
            <p>chrome、firefox，暂不支持IE(计划支持IE11+)</p>
            <h2>
                相关链接
            </h2>
            <ul>
                <li><a href="http://v1-cn.vuejs.org/" target="blank">vue1官方网站</a></li>
                <li><a href="https://github.com/vuejs/vue-cli" target="blank">vue cli</a></li>
                <li><a href="https://github.com/vuejs/awesome-vue" target="blank">awesome vue</a></li>
                <li><a href="http://es6.ruanyifeng.com/" target="blank">ES2015入门</a></li>
                <li><a href="http://webpack.github.io/" target="blank">webpack</a></li>
            </ul>
            <h2>
                相关开源项目
            </h2>
            vue-beauty 部分代码参考了以下项目：
            <ul>
                <li><a href="https://github.com/ant-design/ant-design/" target="blank">Ant Design</a></li>
                <li><a href="https://github.com/ElemeFE/element" target="blank">Element</a></li>
                <li><a href="https://github.com/okoala/vue-antd" target="blank">vue-antd</a></li>
                <li><a href="https://github.com/iview/iview" target="blank">iview</a></li>
            </ul>
            <h2>
                谁在使用
            </h2>
            <ul>
                <li><a href="http://www.g7.com.cn/" target="blank">汇通天下</a></li>
            </ul>
        </section>

    </div>

</template>