import '../utils/polyfill';
import config from '../utils/config';

import alert from './alert';
import breadcrumb from './breadcrumb';
import button from './button';
import icon from './icon';
import card from './card';
import rate from './rate';
import menu from './menu';
import affix from './affix';
import backTop from './back-top';
import { steps, step } from './steps';
import pagination from './pagination';
import tag from './tag';
import vSwitch from './switch';
import { col, row } from './grid';
import { layout, sider, header, content, footer } from './layout';
import spin from './spin';
import cascader from './cascader';
import badge from './badge';
import input from './input';
import inputNumber from './input-number';
import select from './select';
import timePicker from './time-picker';
import tabs from './tabs';
import datePicker from './date-picker';
import message from './message';
import modal from './modal';
import morePanel from './more-panel';
import radio from './radio';
import checkbox from './checkbox';
import collapse from './collapse';
import upload from './upload';
import notification from './notification';
import form from './form';
import tooltip from './tooltip';
import tooltipd from '../directives/tooltip';
import dataTable from './data-table';
import tree from './tree';
import { progressLine, progressCircle } from './progress';
import popover from './popover';
import popconfirm from './popconfirm';
import transfer from './transfer';
import timeline from './timeline';
import carousel from './carousel';
import treeSelect from './tree-select';
import locale from '../locale';


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
    affix,
    backTop,
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
    collapse,
    panel: collapse.panel,
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
    tree,
    progressLine,
    progressCircle,
    popover,
    popconfirm,
    transfer,
    timeline,
    timelineItem: timeline.item,
    carousel,
    carouselItem: carousel.item,
    treeSelect,
};

message.install = function (Vue) {
    Vue.$message = Vue.prototype.$message = message;
};

notification.install = function (Vue) {
    Vue.$notification = Vue.prototype.$notification = notification;
};

for (const item of Object.values(components)) {
    if (!item.install && item.name) {
        item.install = function (Vue, prefix = config.componentNamePrefix) {
            Vue.component(prefix + item.name, item);
        };
    }
}

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    for (const item of Object.values(components)) {
        if (item.install) {
            Vue.use(item, opts.prefix);
        }
    }
};

//注册全局方法
notification.install = function (Vue) {
    Vue.$notification = Vue.prototype.$notification = notification;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version: '2.0.0-alpha.0',
    install,
    ...components,
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
