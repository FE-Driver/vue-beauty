<p align="center">
    <a href="https://github.com/FE-Driver/vue-beauty">
        <img width="200" src="https://raw.githubusercontent.com/FE-Driver/vue-beauty/master/src/assets/VB-logo.png">
    </a>
</p>

# vue-beauty [![npm](http://img.shields.io/npm/v/vue-beauty.svg)](https://www.npmjs.com/package/vue-beauty) [![NPM downloads](http://img.shields.io/npm/dm/vue-beauty.svg)](https://www.npmjs.com/package/vue-beauty) [![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://www.npmjs.com/package/vue-beauty)
Beautiful  UI components build with vue and ant design

## 特性
- 丰富的组件，涵盖常用场景
- 基于vue组件化开发，数据驱动视图
- 封装复杂性，提供简单友好的api
- 基于ant design样式优化

## 引入
使用npm或者yarn
```
npm install vue-beauty -S  OR  yarn add vue-beauty

import Vue from 'vue'
//import css
import 'vue-beauty/package/style/vue-beauty.min.css'

//import components
import vueBeauty from 'vue-beauty'
Vue.use(vueBeauty)

//OR
import {alert} from 'vue-beauty'
Vue.use(alert)
```
或使用 &lt;script&gt; 全局引用
```
<link rel="stylesheet" href="vue-beauty.min.css"> 
<script type="text/javascript" src="vue-beauty.min.js"></script> 
```
更多说明，请查看我们的[在线文档](https://fe-driver.github.io/vue-beauty)。

## 浏览器支持
chrome、firefox、暂不支持IE(计划支持IE11+)。

## Polyfill
本组件库内置了一些es最新实例方法的垫片，请查看[Polyfill](https://fe-driver.github.io/vue-beauty/#/components/polyfill)。

## 更新日志
欢迎查看详细的[更新日志](https://github.com/FE-Driver/vue-beauty/releases)。

## 参与贡献
我们欢迎任何形式的贡献，请阅读[贡献指南](https://fe-driver.github.io/vue-beauty/#/components/contribute)了解详细的情况。

## 链接
- [Vue官网](http://cn.vuejs.org//)
- [Ant.Design官网](http://ant.design/)