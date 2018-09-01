import Vue from 'vue';
import VueRouter from 'vue-router';
import 'highlight.js/styles/solarized-light.css';
import App from './App';
import routerMap from './routers';
// import 'highlight.js/styles/color-brewer.css';
import vueBeauty from '../vb';
// import '../package/style/vue-beauty.css';
// import vueBeauty from '../package/vue-beauty';
import components from './components';
// import locale from '../vb/locale/lang/en';
import locale from '../vb/locale/lang/zh-CN';

window.Promise = Promise;
Vue.use(VueRouter);
Vue.use(vueBeauty, { locale, size: '' });
Vue.use(components);

window.Vue = Vue;
Vue.config.productionTip = false;

window.router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routerMap,
});

new Vue({
    el: '#app',
    router: window.router,
    render: h => h(App),
});
