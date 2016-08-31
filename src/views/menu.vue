<template lang="html">

  <div>

    <section class="markdown">
      <h1>Menu 导航菜单</h1>
      <p>
        为页面和功能提供导航的菜单列表。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
                title="导航菜单"
                describe=""
                code=""
        >
          <v-menu class="aside-container" mode="inline">
            <menu-item>
              level1_1
            </menu-item>

            <sub-menu title="level1_2">

              <menu-item>
                level2_1
              </menu-item>

              <sub-menu title="level2_2">
                <menu-item>
                  level3_1
                </menu-item>
                <menu-item>
                  level3_1
                </menu-item>
              </sub-menu>

            </sub-menu>
          </v-menu>

        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
                title="导航菜单"
                describe=""
                code=""
        >
          <v-nav :data="menuData"></v-nav>

        </code-box>

      </div>

    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vDropdown from '../../components/dropdown'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

import vMenu from '../../components/menu'
let menuItem = vMenu.Item
let subMenu = vMenu.subMenu

import vNav from '../../components/menu/navMenu.vue'

export default {
  data: function () {
    return {
      menuData:[
        {
          name: "首页",
          icon: "glyphicon glyphicon-globe",
          url: "/home",
          target: ""
        },
        {
          name: "共配中心",
          icon: "glyphicon glyphicon-cog",
          target: "",
          children: [
            {
              name: "业务管理",
              target: "",
              children: [
                {
                  name: "车次到站",
                  url: "/distribution/business/arrival",
                  target: "",

                },
                {
                  name: "全状态监控",
                  url: "/distribution/business/monitor",
                  target: ""
                },
              ]
            },
            {
              name: "协作中心",
              target: "",
              children: [
                {
                  name: "合作伙伴管理",
                  url: "/cooperation/cooperation",
                  target: ""
                },
                {
                  name: "合作管理",
                  url: "/cooperation/project",
                  target: ""
                },
                {
                  name: "项目管理",
                  url: "/cooperation/partner",
                  target: ""
                }
              ]
            },
          ]
        },
        {
          name: "用户中心",
          icon: "glyphicon glyphicon-user",
          target: "",
          children: [
            {
              name: "机构管理",
              url: "/ucenter/org",
              target: "",
            },
            {
              name: "角色管理",
              url: "/ucenter/role",
              target: "",
            },
            {
              name: "用户管理",
              url: "/ucenter/user",
              target: "",
            },
            {
              name: "资源管理",
              url: "/ucenter/res",
              target: "",
            },
          ]
        }
      ],
      apis: [{
          parameter: 'type',
          explain: '设置按钮类型，可选值为 primary success error warning ghost dashed 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'icon',
          explain: '设置按钮的图标类型',
          type: 'string',
          default: '无'
        },{
          parameter: 'shape',
          explain: '设置按钮形状，可选值为 circle circle-outline 或者不设',
          type: 'String',
          default: '无'
        },{
          parameter: 'size',
          explain: '设置按钮大小，可选值为 small large 或者不设',
          type: 'String',
          default: 'default'
        },{
          parameter: 'description',
          explain: '可选参数，警告提示的辅助性文字介绍',
          type: 'String',
          default: '无'
        },{
          parameter: 'loading',
          explain: '设置按钮载入状态',
          type: 'boolean',
          default: 'false'
        },{
          parameter: 'onClick',
          explain: 'click 事件的 handler',
          type: 'function',
          default: ''
        }
      ]
    }
  },
  components: {
    codeBox,
    apiTable,
    vMenu,
    menuItem,
    subMenu,
    vNav
  }
}
</script>