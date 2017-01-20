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
                path: 'button',
                name: 'button',
                component: require('./docs/zh-cn/button.md')
            },
            {
                path: 'card',
                name: 'card',
                component: require('./docs/zh-cn/card.md')
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
            }
        ]
    }
]
