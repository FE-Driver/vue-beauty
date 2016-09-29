import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './routers'
import vueBeauty from '../components'
import '../components/style/index.less'

Vue.use(VueRouter);
Vue.use(vueBeauty);

window.router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routerMap
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})