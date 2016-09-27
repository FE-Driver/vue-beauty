import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import '../components/style/index.less'
import vue_beauty from '../components'
import App from './App'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(vue_beauty);

const router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: false
});

routerMap(router);

router.start(App, '#app');
