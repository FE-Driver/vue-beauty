import '../utils/polyfill'

import alert from './alert'
import breadcrumb from './breadcrumb'
import button from './button'
import icon from './icon'
import card from './card'
import rate from './rate'
import menu from './menu'
import affix from './affix'
import { steps, step } from './steps'
import pagination from './pagination'
import tag from './tag'
import vSwitch from './switch'
import { col, row } from './grid'
import { layout, sider, header, content, footer } from './layout'
import spin from './spin'
import cascader from './cascader'
import badge from './badge'
import input from './input'
import inputNumber from './inputNumber'
import select from './select'
import timePicker from './timePicker'
import tabs from './tabs'
import datePicker from './datePicker'
import message from './message'
import modal from './modal'
import morePanel from './morePanel'
import radio from './radio'
import checkbox from './checkbox'
import upload from './upload'
import notification from './notification'
import form from './form'
import tooltip from './tooltip'
import tooltipd from '../directive/tooltip'
import dataTable from './dataTable'
import tree from './tree'
import locale from '../locale'

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
    buttonGroup: button.group,
    tabs,
    tabPane: tabs.pane,
    card,
    vSwitch,
    tag,
    spin,
    cascader,
    input,
    inputGroup: input.group,
    inputNumber,
    select,
    timePicker,
    morePanel,
    radio,
    radioGroup: radio.group,
    checkbox,
    checkboxGroup: checkbox.group,
    upload,
    notification,
    tooltip,
    form,
    formItem: form.item,
    tooltipd,
    modal,
    message,
    datePicker,
    dataTable,
    tree
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
