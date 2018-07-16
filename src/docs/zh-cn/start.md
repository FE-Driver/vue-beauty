# vue-beauty

vue-beauty 是一套基于 vue.js 和 ant-design样式 的PC端 UI 组件库，旨在帮助开发者提升产品体验和开发效率、降低维护成本。

## 特性
- 丰富的组件，涵盖常用场景
- 基于vue组件化开发，数据驱动视图
- 封装复杂性，提供简单友好的api
- 基于ant design样式优化

## 引入
使用npm or yarn
````javascript
    npm install vue-beauty -S 
    //OR
    yarn add vue-beauty

    import Vue from 'vue'

    //import css
    import 'vue-beauty/package/style/vue-beauty.min.css'

    //import components
    import vueBeauty from 'vue-beauty'
    //size 属性用来改变组件的默认尺寸均为 'small'
    Vue.use(vueBeauty, { size: 'small' })


    //OR
    import {alert} from 'vue-beauty'
    Vue.use(alert)
````
或使用  \<script\> 全局引用
````javascript
    <link rel="stylesheet" href="vue-beauty.min.css"> 
    <script type="text/javascript" src="vue-beauty.min.js"></script> 
````
示例
````javascript
    <template>
        <v-button>按钮</v-button>
    </template>
````
效果
<v-button>按钮</v-button>
## 版本
<br>
<a href="https://www.npmjs.com/package/vue-beauty" target="_blank"> 
    <img src="http://img.shields.io/npm/v/vue-beauty.svg"> 
</a> 
<br><br>

## 浏览器支持
chrome、firefox，暂不支持IE(计划支持IE11+)
## 相关链接
- <a href="http://cn.vuejs.org/" target="_blank">vue官方网站</a> 
- <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome vue</a> 
- <a href="http://es6.ruanyifeng.com/" target="_blank">ES2015入门</a> 
- <a href="https://doc.webpack-china.org/" target="_blank">webpack</a>
## 相关开源项目
vue-beauty 部分代码参考了以下项目：
- <a href="https://github.com/ant-design/ant-design/" target="_blank">Ant Design</a> 
- <a href="https://github.com/ElemeFE/element" target="_blank">Element</a> 
- <a href="https://github.com/okoala/vue-antd" target="_blank">vue-antd</a> 
- <a href="https://github.com/iview/iview" target="_blank">iview</a>
## 谁在使用
- <a href="http://www.g7.com.cn/" target="_blank">汇通天下</a>