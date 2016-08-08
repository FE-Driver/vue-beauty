import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routers';
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: false,
});

routerMap(router);

router.start(App, '#app');
