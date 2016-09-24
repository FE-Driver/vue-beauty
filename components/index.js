import rate from './rate/index.js';

const install = function(Vue) {
    if (install.installed) return;

    Vue.component(rate.name, rate);
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '2.0.0-alpha.0',
  install,
  rate
}