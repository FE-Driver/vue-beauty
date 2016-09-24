// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// (also, importing Vue standalone this way breaks vue-loader, so don't do it)
// This is done with an alias defined in /build/webpack.base.conf.js
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
