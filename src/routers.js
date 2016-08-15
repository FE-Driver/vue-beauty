export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component: function index(resolve) {
                require(['./views/components.vue'], resolve);
            },
        },
        'components': {
            component: function index(resolve) {
                require(['./views/components.vue'], resolve);
            },
            subRoutes: {
                '/tag': {
                    name: 'tag',
                    component: function index(resolve) {
                        require(['./views/tag.vue'], resolve);
                    },
                },
                '/alert': {
                    name: 'alert',
                    component: function index(resolve) {
                        require(['./views/alert.vue'], resolve);
                    },
                },
                '/badge': {
                    name: 'badge',
                    component: function index(resolve) {
                        require(['./views/badge.vue'], resolve);
                    },
                },
                '/card': {
                    name: 'card',
                    component: function index(resolve) {
                        require(['./views/card.vue'], resolve);
                    },
                },
                '/collapse': {
                    name: 'collapse',
                    component: function index(resolve) {
                        require(['./views/collapse.vue'], resolve);
                    },
                },
                '/dropdown': {
                    name: 'dropdown',
                    component: function index(resolve) {
                        require(['./views/dropdown.vue'], resolve);
                    },
                },
                '/button': {
                    name: 'button',
                    component: function index(resolve) {
                        require(['./views/button.vue'], resolve);
                    },
                },
                '/switch': {
                    name: 'switch',
                    component: function index(resolve) {
                        require(['./views/switch.vue'], resolve);
                    },
                },
                '/rate': {
                    name: 'rate',
                    component: function index(resolve) {
                        require(['./views/rate.vue'], resolve);
                    },
                },
                '/inputNumber': {
                    name: 'inputNumber',
                    component: function index(resolve) {
                        require(['./views/inputNumber.vue'], resolve);
                    },
                },
                '/input': {
                    name: 'input',
                    component: function index(resolve) {
                        require(['./views/input.vue'], resolve);
                    },
                },
                '/slider': {
                    name: 'slider',
                    component: function index(resolve) {
                        require(['./views/slider.vue'], resolve);
                    },
                },
                '/checkbox': {
                    name: 'checkbox',
                    component: function index(resolve) {
                        require(['./views/checkbox.vue'], resolve);
                    },
                },
                '/notification': {
                    name: 'notification',
                    component: function index(resolve) {
                        require(['./views/notification.vue'], resolve);
                    },
                },
                '/message': {
                    name: 'message',
                    component: function index(resolve) {
                        require(['./views/message.vue'], resolve);
                    },
                },
                '/affix': {
                    name: 'affix',
                    component: function index(resolve) {
                        require(['./views/affix.vue'], resolve);
                    },
                },
                '/backTop': {
                    name: 'backTop',
                    component: function index(resolve) {
                        require(['./views/backTop.vue'], resolve);
                    },
                },
                '/steps': {
                    name: 'steps',
                    component: function index(resolve) {
                        require(['./views/steps.vue'], resolve);
                    }
                },
                '/radio': {
                    name: 'radio',
                    component: function index(resolve) {
                        require(['./views/radio.vue'], resolve);
                    },
                },
                '/modal': {
                    name: 'modal',
                    component: function index(resolve) {
                        require(['./views/modal.vue'], resolve);
                    }
                },
                '/spin': {
                    name: 'spin',
                    component: function index(resolve) {
                        require(['./views/spin.vue'], resolve);
                    }
                },
                '/upload': {
                    name: 'upload',
                    component: function index(resolve) {
                        require(['./views/upload.vue'], resolve);
                    }
                },
                '/tooltip': {
                    name: 'tooltip',
                    component: function index(resolve) {
                        require(['./views/tooltip.vue'], resolve);
                    }
                }

            }
        },
        // 404路由
        '*': {
            component: function (resolve) {
                require(['./views/components.vue'], resolve);
            }
        }
    });
    router.redirect({
        '/': '/components/alert'
    });
}
