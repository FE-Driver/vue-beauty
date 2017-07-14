export default [{
    path: '/',
    name: 'index',
    redirect: '/components/button',
}, {
    path: '/components',
    component: resolve => require(['./views/components.vue'], resolve),
    children: [{
        path: 'start',
        name: 'start',
        component: resolve => require(['./docs/zh-cn/start.md'], resolve),
    }, {
        path: 'contribute',
        name: 'contribute',
        component: resolve => require(['./docs/zh-cn/contribute.md'], resolve),
    }, {
        path: 'polyfill',
        name: 'polyfill',
        component: resolve => require(['./docs/zh-cn/polyfill.md'], resolve),
    }, {
        path: 'css',
        name: 'css',
        component: resolve => require(['./docs/zh-cn/css.md'], resolve),
    }, {
        path: 'tag',
        name: 'tag',
        component: resolve => require(['./docs/zh-cn/tag.md'], resolve),
    }, {
        path: 'tabs',
        name: 'tabs',
        component: resolve => require(['./docs/zh-cn/tabs.md'], resolve),
    }, {
        path: 'alert',
        name: 'alert',
        component: resolve => require(['./docs/zh-cn/alert.md'], resolve),
    }, {
        path: 'breadcrumb',
        name: 'breadcrumb',
        component: resolve => require(['./docs/zh-cn/breadcrumb.md'], resolve),
    }, {
        path: 'input',
        name: 'input',
        component: resolve => require(['./docs/zh-cn/input.md'], resolve),
    }, {
        path: 'inputNumber',
        name: 'inputNumber',
        component: resolve => require(['./docs/zh-cn/input-number.md'], resolve),
    }, {
        path: 'cascader',
        name: 'cascader',
        component: resolve => require(['./docs/zh-cn/cascader.md'], resolve),
    }, {
        path: 'collapse',
        name: 'collapse',
        component: resolve => require(['./docs/zh-cn/collapse.md'], resolve),
    }, {
        path: 'button',
        name: 'button',
        component: resolve => require(['./docs/zh-cn/button.md'], resolve),
    }, {
        path: 'icon',
        name: 'icon',
        component: resolve => require(['./docs/zh-cn/icon.md'], resolve),
    }, {
        path: 'badge',
        name: 'badge',
        component: resolve => require(['./docs/zh-cn/badge.md'], resolve),
    }, {
        path: 'menu',
        name: 'menu',
        component: resolve => require(['./docs/zh-cn/menu.md'], resolve),
    }, {
        path: 'dropdown',
        name: 'dropdown',
        component: resolve => require(['./docs/zh-cn/dropdown.md'], resolve),
    }, {
        path: 'grid',
        name: 'grid',
        component: resolve => require(['./docs/zh-cn/grid.md'], resolve),
    }, {
        path: 'layout',
        name: 'layout',
        component: resolve => require(['./docs/zh-cn/layout.md'], resolve),
    }, {
        path: 'affix',
        name: 'affix',
        component: resolve => require(['./docs/zh-cn/affix.md'], resolve),
    }, {
        path: 'backTop',
        name: 'backTop',
        component: resolve => require(['./docs/zh-cn/back-top.md'], resolve),
    }, {
        path: 'steps',
        name: 'steps',
        component: resolve => require(['./docs/zh-cn/steps.md'], resolve),
    }, {
        path: 'card',
        name: 'card',
        component: resolve => require(['./docs/zh-cn/card.md'], resolve),
    }, {
        path: 'switch',
        name: 'switch',
        component: resolve => require(['./docs/zh-cn/switch.md'], resolve),
    }, {
        path: 'timePicker',
        name: 'timePicker',
        component: resolve => require(['./docs/zh-cn/time-picker.md'], resolve),
    }, {
        path: 'datePicker',
        name: 'datePicker',
        component: resolve => require(['./docs/zh-cn/date-picker.md'], resolve),
    }, {
        path: 'pagination',
        name: 'pagination',
        component: resolve => require(['./docs/zh-cn/pagination.md'], resolve),
    }, {
        path: 'message',
        name: 'message',
        component: resolve => require(['./docs/zh-cn/message.md'], resolve),
    }, {
        path: 'modal',
        name: 'modal',
        component: resolve => require(['./docs/zh-cn/modal.md'], resolve),
    }, {
        path: 'notification',
        name: 'notification',
        component: resolve => require(['./docs/zh-cn/notification.md'], resolve),
    }, {
        path: 'morePanel',
        name: 'morePanel',
        component: resolve => require(['./docs/zh-cn/more-panel.md'], resolve),
    }, {
        path: 'select',
        name: 'select',
        component: resolve => require(['./docs/zh-cn/select.md'], resolve),
    }, {
        path: 'slider',
        name: 'slider',
        component: resolve => require(['./docs/zh-cn/slider.md'], resolve),
    }, {
        path: 'rate',
        name: 'rate',
        component: resolve => require(['./docs/zh-cn/rate.md'], resolve),
    }, {
        path: 'spin',
        name: 'spin',
        component: resolve => require(['./docs/zh-cn/spin.md'], resolve),
    }, {
        path: 'radio',
        name: 'radio',
        component: resolve => require(['./docs/zh-cn/radio.md'], resolve),
    }, {
        path: 'checkbox',
        name: 'checkbox',
        component: resolve => require(['./docs/zh-cn/checkbox.md'], resolve),
    }, {
        path: 'upload',
        name: 'upload',
        component: resolve => require(['./docs/zh-cn/upload.md'], resolve),
    }, {
        path: 'tooltip',
        name: 'tooltip',
        component: resolve => require(['./docs/zh-cn/tooltip.md'], resolve),
    }, {
        path: 'form',
        name: 'form',
        component: resolve => require(['./docs/zh-cn/form.md'], resolve),
    }, {
        path: 'tooltipd',
        name: 'tooltipd',
        component: resolve => require(['./docs/zh-cn/tooltipd.md'], resolve),
    }, {
        path: 'dataTable',
        name: 'dataTable',
        component: resolve => require(['./docs/zh-cn/data-table.md'], resolve),
    }, {
        path: 'tree',
        name: 'tree',
        component: resolve => require(['./docs/zh-cn/tree.md'], resolve),
    }, {
        path: 'progress',
        name: 'progress',
        component: resolve => require(['./docs/zh-cn/progress.md'], resolve),
    }, {
        path: 'popover',
        name: 'popover',
        component: resolve => require(['./docs/zh-cn/popover.md'], resolve),
    }, {
        path: 'popconfirm',
        name: 'popconfirm',
        component: resolve => require(['./docs/zh-cn/popconfirm.md'], resolve),
    }, {
        path: 'transfer',
        name: 'transfer',
        component: resolve => require(['./docs/zh-cn/transfer.md'], resolve),
    }, {
        path: 'timeline',
        name: 'timeline',
        component: resolve => require(['./docs/zh-cn/timeline.md'], resolve),
    }, {
        path: 'carousel',
        name: 'carousel',
        component: resolve => require(['./docs/zh-cn/carousel.md'], resolve),
    }, {
        path: 'treeSelect',
        name: 'treeSelect',
        component: resolve => require(['./docs/zh-cn/tree-select.md'], resolve),
    }],
}, {
    path: '/demo/layout-fixed',
    name: 'demo-layout-fixed',
    component: resolve => require(['./views/layout-fixed.vue'], resolve),
}, {
    path: '/demo/layout-fixed-sider',
    name: 'demo-layout-fixed-sider',
    component: resolve => require(['./views/layout-fixed-sider.vue'], resolve),
}];
