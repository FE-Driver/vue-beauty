import './utils/polyfill'

import alert from './components/alert'
import breadcrumb from './components/breadcrumb'
import button from './components/button'
import icon from './components/icon'
import card from './components/card'
import rate from './components/rate'
import menu from './components/menu'
import affix from './components/affix'
import { steps, step } from './components/steps'
import pagination from './components/pagination'
import tag from './components/tag'
import vSwitch from './components/switch'
import { col, row } from './components/grid'
import { layout, sider, header, content, footer } from './components/layout'
import spin from './components/spin'
import cascader from './components/cascader'
import badge from './components/badge'
import input from './components/input'
import inputNumber from './components/inputNumber'
import select from './components/select'
import timePicker from './components/timePicker'
import tabs from './components/tabs'
import datePicker from './components/datePicker'
import message from './components/message'
import modal from './components/modal'
import morePanel from './components/morePanel'
import radio from './components/radio'
import checkbox from './components/checkbox'
import upload from './components/upload'
import notification from './components/notification'
import form from './components/form'
import tooltip from './components/tooltip'
import locale from './locale'
import tooltipd from './directive/tooltip'
import datatable from './components/datatable'

const components = {
    breadcrumb,
    breadcrumbItem: breadcrumb.item,
    badge,
    col,
    row,
    layout,
    sider,
    header,
    content,
    footer,
    menu,
    subMenu: menu.subMenu,
    menuItemGroup: menu.itemGroup,
    menuItem: menu.item,
    affix,
    steps,
    step,
    pagination,
    rate,
    alert,
    icon,
    button,
    buttonGroup: button.Group,
    tabs,
    tabPane: tabs.tabPane,
    card,
    vSwitch,
    tag,
    spin,
    cascader,
    input,
    inputGroup: input.Group,
    inputNumber,
    select,
    timePicker,
    morePanel,
    radio,
    radioGroup: radio.Group,
    checkbox,
    checkboxGroup: checkbox.Group,
    upload,
    notification,
    tooltip,
    form,
    formItem: form.Item,
    tooltipd,
    modal,
    message,
    datePicker,
    datatable
};

message.install = function (Vue) {
    Vue.$message = Vue.prototype.$message = message
};

notification.install = function (Vue) {
    Vue.$notification = Vue.prototype.$notification = notification
};

for (let item of Object.values(components)) {
    if (!item.install && item.name) {
        item.install = function (Vue, prefix) {
            prefix = prefix || 'v';
            Vue.component(prefix+item.name, item)
        }
    }
}

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    for (let item of Object.values(components)) {
        if (item.install) {
            Vue.use(item, opts.prefix)
        }
    }
};

//注册全局方法
notification.install = function(Vue){
    Vue.$notification = Vue.prototype.$notification = notification
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    version: '2.0.0-alpha.0',
    install,
    ...components
}

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
