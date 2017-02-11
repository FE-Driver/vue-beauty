export default [
  {
    path: '/',
    name: 'index',
    redirect: '/components/test'
  },
  {
    path: '/components',
    component: require('./views/components.vue'),
    children: [
          {
            path: 'test',
            name: 'test',
            component: require('./docs/zh-cn/test.md')
          },
          {
            path: 'tag',
            name: 'tag',
            component: require('./docs/zh-cn/tag.md')
          },
          {
            path: 'alert',
            name: 'alert',
            component: require('./docs/zh-cn/alert.md')
          },
          {
            path: 'breadcrumb',
            name: 'breadcrumb',
            component: require('./docs/zh-cn/breadcrumb.md')
          },
          {
            path: 'input',
            name: 'input',
            component: require('./docs/zh-cn/input.md')
          },
          {
            path: 'cascader',
            name: 'cascader',
            component: require('./docs/zh-cn/cascader.md')
          },
          {
            path: 'button',
            name: 'button',
            component: require('./docs/zh-cn/button.md')
          },
          {
            path: 'icon',
            name: 'icon',
            component: require('./docs/zh-cn/icon.md')
          },
          {
            path: 'affix',
            name: 'affix',
            component: require('./docs/zh-cn/affix.md')
          },
          {
            path: 'pagination',
            name: 'pagination',
            component: require('./docs/zh-cn/pagination.md')
          },
          {
            path: 'card',
            name: 'card',
            component: require('./docs/zh-cn/card.md')
          },
          {
            path: 'switch',
            name: 'switch',
            component: require('./docs/zh-cn/switch.md')
          },
          {
            path: 'timePicker',
            name: 'timePicker',
            component: require('./docs/zh-cn/timePicker.md')
          },
          {
            path: 'morePanel',
            name: 'morePanel',
            component: require('./docs/zh-cn/morePanel.md')
          },
          {
            path: 'notification',
            name: 'notification',
            component: require('./docs/zh-cn/notification.md')
          },
          {
            path: 'select',
            name: 'select',
            component: require('./docs/zh-cn/select.md')
          },
          {
            path: 'rate',
            name: 'rate',
            component: require('./docs/zh-cn/rate.md')
          },
          {
            path: 'spin',
            name: 'spin',
            component: require('./docs/zh-cn/spin.md')
          },
          {
            path: 'radio',
            name: 'radio',
            component: require('./docs/zh-cn/radio.md')
          },
          {
            path: 'checkbox',
            name: 'checkbox',
            component: require('./docs/zh-cn/checkbox.md')
          },
          {
            path: 'upload',
            name: 'upload',
            component: require('./docs/zh-cn/upload.md')
          }
        ]
  }
]
