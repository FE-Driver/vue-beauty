import affix from './affix'
import alert from './alert'
import backTop from './backTop'
import badge from './badge'
import breadcrumbs from './breadcrumb'
import button from './button'
import card from './card'
import carousel from './carousel'
import cascader from './cascader'
import checkbox from './checkbox'
import collapse from './collapse'
import datatable from './datatable'
import datepicker from './datepicker'
import form from './form'
import icon from './iconfont'
import input from './input'
import inputNumber from './inputNumber'
import {vCol, vRow} from './layout'
import menu from './menu'
import navMenu from './menu/navMenu.vue'
import modal from './modal'
import multiselect from './multiselect'
import pagination from './pagination'
import popconfirm from './popconfirm'
import popover from './popover'
import {vProgressLine, vProgressCircle} from './progress'
import queueAnim from './queueAnim'
import radio from './radio'
import rate from './rate'
import select from './select'
import slider from './slider'
import spin from './spin'
import steps from './steps'
import _switch from './switch'
import tabs from './tabs'
import tag from './tag'
import timeline from './timeline'
import timePicker from './timePicker'
import transfer from './transfer'
import tree from './tree'
import treeSelect from './treeSelect'
import upload from './upload'

import message from './message'
import notification from './notification'

let compnents = {
    affix,
    alert,
    backTop,
    badge,
    breadcrumbs,
    breadcrumb: breadcrumbs.Breadcrumb,
    button,
    buttonGroup: button.Group,
    card,
    carousel,
    cascader,
    checkbox,
    checkboxGroup: checkbox.Group,
    collapse,
    datatable,
    datepicker,
    form,
    formItem: form.Item,
    icon,
    input,
    inputNumber,
    col: vCol,
    row: vRow,
    menu,
    subMenu: menu.subMenu,
    menuItemGroup: menu.ItemGroup,
    menuItem: menu.Item,
    navMenu,
    modal,
    multiselect,
    pagination,
    popconfirm,
    popover,
    progressLine: vProgressLine,
    progressCircle: vProgressCircle,
    queueAnim,
    radio,
    radioGroup: radio.Group,
    rate,
    select,
    slider,
    spin,
    steps,
    step: steps.Step,
    _switch,
    tabs,
    tabPane: tabs.TabPane,
    tag,
    timeline,
    timelineItem: timeline.Item,
    timePicker,
    transfer,
    tree,
    treeSelect,
    upload
};

message.install = function(Vue){
    Vue.$message = Vue.prototype.$message = message
}

notification.install = function(Vue){
    Vue.$notification = Vue.prototype.$notification = notification
}

for (let k in compnents) {
    if (!compnents[k].install && compnents[k].name) {
        compnents[k].install = function (Vue) {
            Vue.component(compnents[k].name, compnents[k]);
        };
    }
}

const install = function (Vue) {
    if (install.installed) return;

    for (let k in compnents) {
        if (compnents[k].install) {
            Vue.use(compnents[k]);
        }
    }
};

// auto install
/*if (typeof window !== 'undefined' && window.Vue) {
 install(window.Vue);
 };*/

module.exports = {
    version: '0.0.1',
    install,
    ...compnents
}