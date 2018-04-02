import './style/index.less';
import './utils/polyfill';
import config from './utils/config';

import alert from './components/alert';
import avatar from './components/avatar';
import breadcrumb from './components/breadcrumb';
import button from './components/button';
import icon from './components/icon';
import card from './components/card';
import rate from './components/rate';
import slider from './components/slider';
import menu from './components/menu';
import dropdown from './components/dropdown';
import affix from './components/affix';
import backTop from './components/back-top';
import { steps, step } from './components/steps';
import pagination from './components/pagination';
import tag from './components/tag';
import vSwitch from './components/switch';
import { col, row } from './components/grid';
import { layout, sider, header, content, footer } from './components/layout';
import spin from './components/spin';
import cascader from './components/cascader';
import badge from './components/badge';
import input from './components/input';
import inputNumber from './components/input-number';
import select from './components/select';
import timePicker from './components/time-picker';
import tabs from './components/tabs';
import datePicker from './components/date-picker';
import message from './components/message';
import modal from './components/modal';
import morePanel from './components/more-panel';
import radio from './components/radio';
import checkbox from './components/checkbox';
import collapse from './components/collapse';
import upload from './components/upload';
import notification from './components/notification';
import form from './components/form';
import tooltip from './components/tooltip';
import dataTable from './components/data-table';
import tree from './components/tree';
import { progressLine, progressCircle } from './components/progress';
import popover from './components/popover';
import popconfirm from './components/popconfirm';
import transfer from './components/transfer';
import timeline from './components/timeline';
import carousel from './components/carousel';
import treeSelect from './components/tree-select';
import autoComplete from './components/auto-complete';
import clickoutside from './directives/clickoutside';
import tooltipd from './directives/tooltip';
import { use, i18n } from './locale';

import { version } from '../package.json';

const clickoutsidep = {
    install(Vue) {
        Vue.directive('clickoutside', clickoutside);
    },
};

message.install = function (Vue) {
    Vue.$message = Vue.prototype.$message = message;
};

notification.install = function (Vue) {
    Vue.$notification = Vue.prototype.$notification = notification;
};

const components = {
    avatar,
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
    dropdown,
    dropdownMenu: dropdown.menu,
    affix,
    backTop,
    steps,
    step,
    pagination,
    rate,
    slider,
    alert,
    icon,
    button,
    buttonGroup: button.group,
    tabs,
    tabPane: tabs.pane,
    card,
    cardGrid: card.grid,
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
    clickoutsidep,
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
    autoComplete,
};

for (const item of Object.values(components)) {
    if (!item.install && item.name) {
        item.install = function (Vue, prefix = config.componentNamePrefix) {
            Vue.component(`${prefix}${item.name === 'vSwitch' ? 'Switch' : item.name}`, item);
        };
    }
}

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    use(opts.locale);
    i18n(opts.i18n);

    for (const item of Object.values(components)) {
        if (item.install) {
            Vue.use(item, opts.prefix);
        }
    }
};

// 注册全局方法
notification.install = function (Vue) {
    Vue.$notification = Vue.prototype.$notification = notification;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    version,
    avatar,
    breadcrumb,
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
    slider,
    alert,
    icon,
    dropdown,
    button,
    tabs,
    card,
    vSwitch,
    tag,
    spin,
    cascader,
    input,
    inputNumber,
    select,
    timePicker,
    morePanel,
    radio,
    checkbox,
    collapse,
    upload,
    notification,
    tooltip,
    form,
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
    carousel,
    treeSelect,
    autoComplete,
};

export default {
    version,
    install,
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
