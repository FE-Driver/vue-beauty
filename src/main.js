import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import '../vb/style/index.less'
import vue_beauty from '../vb'
import './assets/markdown.less'
import App from './App'
import 'highlight.js/styles/solarized-dark.css'
import Hljs from './directive/hljs'

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vue_beauty);
Vue.use(Hljs);

const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: false
});

routerMap(router);

router.start(App, '#app');
