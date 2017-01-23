import './utils/polyfill';

import alert from './components/alert';
import breadcrumb from './components/breadcrumb';
import button from './components/button';
import card from './components/card';
import rate from './components/rate';
import menu from './components/menu';
import tag from './components/tag';
// import tabs from './components/tabs'
import vSwitch from './components/switch';
import { col, row } from './components/grid';
import spin from './components/spin';
import cascader from './components/cascader';
import input from './components/input';
import locale from './locale';

const components = {
    breadcrumb,
    breadcrumbItem: breadcrumb.item,
    col,
    row,
    menu,
    subMenu: menu.subMenu,
    menuItemGroup: menu.itemGroup,
    menuItem: menu.item,
    rate,
    alert,
    button,
    buttonGroup: button.Group,
    // tabs,
    // tabPane: tabs.tabPane,
    card,
    vSwitch,
    tag,
    spin,
    cascader,
};

for (let item of Object.values(components)) {
    if (!item.install && item.name) {
        item.install = function (Vue) {
            Vue.component(item.name, item);
        };
    }
}

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    for (let item of Object.values(components)) {
        if (item.install) {
            Vue.use(item);
        }
    }
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = {
    version: '2.0.0-alpha.0',
    install,
    ...components
};

/* function isFlexSupported(style) {
    return 'flex' in style ||
        'webkitFlex' in style ||
        'MozFlex' in style;
}

if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    const {documentElement} = window.document;
    const NO_FLEX = 'no-flex';

    if (!isFlexSupported(documentElement.style) &&
        documentElement.className.indexOf(NO_FLEX) === -1) {
        documentElement.className += ` ${NO_FLEX}`;
    }
} */
