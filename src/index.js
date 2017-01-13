import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routerMap from './routers'
import '../vb/style/index.less'
import vueBeauty from '../vb'
import components from './components'

Vue.use(VueRouter);
Vue.use(vueBeauty);
Vue.use(components);

window.router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: routerMap
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})