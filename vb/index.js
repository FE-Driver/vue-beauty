import './utils/polyfill'

import alert from './components/alert'
import button from './components/button'
import card from './components/card'
import rate from './components/rate'
import menu from './components/menu'
import {col,row} from './components/grid'

let compnents = {
  col,
  row,
  menu,
  subMenu: menu.subMenu,
  menuItemGroup: menu.itemGroup,
  menuItem: menu.item,
  rate,
  alert,
  button,
  buttonGroup:button.Group,
  card,
  rate,
}

for(let item of Object.values(compnents) ){
  if(!item.install && item.name){
    item.install = function(Vue) {
      Vue.component(item.name, item);
    };
  }
}

const install = function(Vue) {
    if (install.installed) return;

    for(let item of Object.values(compnents) ){
      if(item.install){
        Vue.use(item);
      }
    }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '2.0.0-alpha.0',
  install,
  ...compnents
}