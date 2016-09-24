import rate from './rate.vue'

rate.install = function(Vue) {
  Vue.component(rate.name, Rate);
};

export default rate
