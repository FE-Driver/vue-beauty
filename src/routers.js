export default function(router) {
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
        '/alert': {
          name: 'alert',
          component: function index(resolve) {
            require(['./views/alert.vue'], resolve);
          },
        },
        '/progress': {
          name: 'progress',
          component: function index(resolve) {
            require(['./views/progress.vue'], resolve);
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
        '/font': {
          name: 'font',
          component: function index(resolve) {
            require(['./views/font.vue'], resolve);
          },
        },
        '/grid': {
          name: 'grid',
          component: function index(resolve) {
            require(['./views/grid.vue'], resolve);
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
        '/pagination': {
          name: 'pagination',
          component: function index(resolve) {
            require(['./views/pagination.vue'], resolve);
          }
        },
        '/transfer': {
          name: 'transfer',
          component: function index(resolve) {
            require(['./views/transfer.vue'], resolve);
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
        '/tag': {
          name: 'tag',
          component: function index(resolve) {
            require(['./views/tag.vue'], resolve);
          },
        },
        '/tabs': {
          name: 'tabs',
          component: function index(resolve) {
            require(['./views/tabs.vue'], resolve);
          },
        },
        '/timeline': {
          name: 'timeline',
          component: function index(resolve) {
            require(['./views/timeline.vue'], resolve);
          }
        },
        '/tooltip': {
          name: 'tooltip',
          component: function index(resolve) {
            require(['./views/tooltip.vue'], resolve);
          }
        },
        '/popover': {
          name: 'popover',
          component: function index(resolve) {
            require(['./views/popover.vue'], resolve);
          }
        },
        '/popconfirm': {
          name: 'popconfirm',
          component: function index(resolve) {
            require(['./views/popconfirm.vue'], resolve);
          }
        },
        '/tree': {
          name: 'tree',
          component: function index(resolve) {
            require(['./views/tree.vue'], resolve);
          }
        },
        '/treeSelect':{
          name: 'treeSelect',
          component: function index(resolve) {
            require(['./views/treeSelect.vue'], resolve);
          }
        },
        '/timePicker': {
          name: 'timePicker',
          component: function index(resolve) {
            require(['./views/timePicker.vue'], resolve);
          }
        },
        '/multiselect': {
          name: 'multiselect',
          component: function index(resolve) {
            require(['./views/multiselect.vue'], resolve);
          }
        },
        '/cascader': {
          name: 'cascader',
          component: function index(resolve) {
            require(['./views/cascader.vue'], resolve);
          }
        },
        '/breadcrumb': {
          name: 'breadcrumb',
          component: function index(resolve) {
            require(['./views/breadcrumb.vue'], resolve);
          }
        },
        '/dropdown': {
          name: 'dropdown',
          component: function index(resolve) {
            require(['./views/dropdown.vue'], resolve);
          }
        },
        '/menu': {
          name: 'menu',
          component: function index(resolve) {
            require(['./views/menu.vue'], resolve);
          }
        },
        '/select': {
          name: 'select',
          component: function index(resolve) {
            require(['./views/select.vue'], resolve);
          }
        },
        '/queueAnim': {
          name: 'queueAnim',
          component: function index(resolve) {
            require(['./views/queueAnim.vue'], resolve);
          }
        },
        '/form': {
          name: 'form',
          component: function index(resolve) {
            require(['./views/form.vue'], resolve);
          }
        },
        '/apiTable': {
          name: 'apiTable',
          component: function index(resolve) {
            require(['./views/apiTable.vue'], resolve);
          }
        },
        '/codeBox': {
          name: 'codeBox',
          component: function index(resolve) {
            require(['./views/codeBox.vue'], resolve);
          }
        },
        '/datatable': {
            name: 'datatable',
            component: function index(resolve) {
                require(['./views/datatable.vue'], resolve);
            },
        },
        '/carousel': {
          name: 'carousel',
          component: function index(resolve) {
            require(['./views/carousel.vue'], resolve);
          }
        },
        '/datepicker': {
          name: 'datepicker',
          component: function index(resolve) {
            require(['./views/datepicker.vue'], resolve);
          }
        },
        '/morePanel': {
          name: 'morePanel',
          component: function index(resolve) {
            require(['./views/morePanel.vue'], resolve);
          }
        },
        '/css': {
          name: 'css',
          component: function index(resolve) {
            require(['./views/css.vue'], resolve);
          }
        },
        '/start': {
          name: 'start',
          component: function index(resolve) {
            require(['./views/start.vue'], resolve);
          }
        },
        '/contribute': {
          name: 'contribute',
          component: function index(resolve) {
            require(['./views/contribute.vue'], resolve);
          }
        },
        '/polyfill': {
          name: 'polyfill',
          component: function index(resolve) {
            require(['./views/polyfill.vue'], resolve);
          }
        },
        '/layout': {
          name: 'layout',
          component: function index(resolve) {
            require(['./views/layout.vue'], resolve);
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
    '/': '/components/start'
  });
}
