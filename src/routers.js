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
                path: 'alert',
                name: 'alert',
                component: require('./docs/zh-cn/alert.md')
            },
            {
                path: 'card',
                name: 'card',
                component: require('./docs/zh-cn/card.md')
            }
        ]
    }
]
