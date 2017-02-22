import './utils/polyfill'

import affix from './components/affix'
import alert from './components/alert'
import backTop from './components/backTop'
import badge from './components/badge'
import breadcrumbs from './components/breadcrumb'
import button from './components/button'
import card from './components/card'
import carousel from './components/carousel'
import cascader from './components/cascader'
import checkbox from './components/checkbox'
import collapse from './components/collapse'
import datatable from './components/datatable'
import datepicker from './components/datePicker'
import dropdown from './components/dropdown'
import form from './components/form'
import icon from './components/iconfont'
import input from './components/input'
import inputNumber from './components/inputNumber'
import {vCol, vRow} from './components/grid'
import menu from './components/menu'
import navMenu from './components/menu/navMenu.vue'
import modal from './components/modal'
import multiselect from './components/multiselect'
import pagination from './components/pagination'
import popconfirm from './components/popconfirm'
import popover from './components/popover'
import {vProgressLine, vProgressCircle} from './components/progress'
import queueAnim from './components/queueAnim'
import radio from './components/radio'
import rate from './components/rate'
import select from './components/select'
import slider from './components/slider'
import spin from './components/spin'
import steps from './components/steps'
import _switch from './components/switch'
import tabs from './components/tabs'
import tag from './components/tag'
import timeline from './components/timeline'
import timePicker from './components/timePicker'
import transfer from './components/transfer'
import tree from './components/tree'
import treeSelect from './components/treeSelect'
import upload from './components/upload'
import message from './components/message'
import notification from './components/notification'
import morePanel from './components/morePanel'
import { layout, sider, header, content, footer } from './components/layout'
import tooltip from './directive/tooltip'

const compnents = {
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
    collapseItem: collapse.Item,
    datatable,
    datepicker,
    dropdown,
    dropdownMenu: dropdown.Menu,
    dropdownItem: dropdown.Item,
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
    upload,
    message,
    notification,
    morePanel,
    layout,
    sider,
    header,
    content,
    footer,
    tooltip
};

message.install = function(Vue){
    Vue.$message = Vue.prototype.$message = message
}

notification.install = function(Vue){
    Vue.$notification = Vue.prototype.$notification = notification
}

for(let component of Object.values(compnents)){
    if (!component.install && component.name) {
        component.install = function (Vue) {
            Vue.component(component.name, component);
        };
    }
}

const install = function (Vue) {
    if (install.installed) return;

    for (let component of Object.values(compnents)) {
        if (component.install) {
            Vue.use(component);
        }
    }
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: '0.0.1',
    install,
    ...compnents
}