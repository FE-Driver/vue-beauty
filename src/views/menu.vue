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

    <v-Row :gutter="16">
      <v-Col>
        <code-box
                title="顶部导航"
                describe="水平的顶部导航菜单。"
        >
          <v-menu mode="horizontal">
            <menu-item><v-icon type='mail'></v-icon>导航一</menu-item>
            <menu-item disabled><v-icon type='appstore'></v-icon>导航二</menu-item>
            <sub-menu title="导航 - 子菜单" icon="setting">
              <item-group title="分组1">
                <menu-item>选项1</menu-item>
                <menu-item>选项2</menu-item>
              </item-group>
              <item-group title="分组2">
                <menu-item>选项3</menu-item>
                <menu-item>选项4</menu-item>
              </item-group>
            </sub-menu>
             <menu-item><a href="http://www.alipay.com/" target="_blank">导航四 - 链接</a></menu-item>
          </v-menu>

        </code-box>

        <code-box
                title="内嵌菜单"
                describe="垂直菜单，子菜单内嵌在菜单区域。"
        >
          <v-menu mode="inline" style="width:240px">
            <sub-menu title="导航一" icon="mail">
              <item-group title="分组1">
                <menu-item>选项1</menu-item>
                <menu-item>选项2</menu-item>
              </item-group>
              <item-group title="分组2">
                <menu-item>选项3</menu-item>
                <menu-item>选项4</menu-item>
              </item-group>
            </sub-menu>
            <sub-menu title="导航二" icon="appstore">
              <menu-item>选项5</menu-item>
              <menu-item>选项6</menu-item>
              <sub-menu title="三级导航">
                <menu-item>选项7</menu-item>
                <menu-item>选项8</menu-item>
              </sub-menu>
            </sub-menu>
            <sub-menu title="导航三" icon="setting">
              <menu-item>选项9</menu-item>
              <menu-item>选项10</menu-item>
              <menu-item>选项11</menu-item>
              <menu-item>选项12</menu-item>
            </sub-menu>
          </v-menu>

        </code-box>

        <code-box
                title="垂直菜单"
                describe="子菜单是弹出的形式。"
        >
          <v-menu style="width:240px">
            <sub-menu title="导航一" icon="mail">
              <item-group title="分组1">
                <menu-item>选项1</menu-item>
                <menu-item>选项2</menu-item>
              </item-group>
              <item-group title="分组2">
                <menu-item>选项3</menu-item>
                <menu-item>选项4</menu-item>
              </item-group>
            </sub-menu>
            <sub-menu title="导航二" icon="appstore">
              <menu-item>选项5</menu-item>
              <menu-item>选项6</menu-item>
              <sub-menu title="三级导航">
                <menu-item>选项7</menu-item>
                <menu-item>选项8</menu-item>
              </sub-menu>
            </sub-menu>
            <sub-menu title="导航三" icon="setting">
              <menu-item>选项9</menu-item>
              <menu-item>选项10</menu-item>
              <menu-item>选项11</menu-item>
              <menu-item>选项12</menu-item>
            </sub-menu>
          </v-menu>

        </code-box>

        <code-box
                title="主题"
                describe="内建了两套主题 light|dark，默认 light。"
        >
          <v-menu style="width:240px" theme="dark" mode="inline">
            <sub-menu title="导航一" icon="mail">
              <menu-item>选项1</menu-item>
              <menu-item>选项2</menu-item>
              <menu-item>选项3</menu-item>
              <menu-item>选项4</menu-item>
            </sub-menu>
            <sub-menu title="导航二" icon="appstore">
              <menu-item>选项5</menu-item>
              <menu-item>选项6</menu-item>
              <sub-menu title="三级导航">
                <menu-item>选项7</menu-item>
                <menu-item>选项8</menu-item>
              </sub-menu>
            </sub-menu>
            <sub-menu title="导航三" icon="setting">
              <menu-item>选项9</menu-item>
              <menu-item>选项10</menu-item>
              <menu-item>选项11</menu-item>
              <menu-item>选项12</menu-item>
            </sub-menu>
          </v-menu>

        </code-box>

        <!--<code-box
                title="导航菜单"
                describe=""
                code=""
        >
          <v-nav :data="menuData"></v-nav>

        </code-box>-->

      </v-Col>

    </v-Row>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'
import {vRow, vCol} from '../../components/layout'
import vIcon from '../../components/iconfont'

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
    vIcon,
    vRow,
    vCol,
    codeBox,
    apiTable,
    vMenu,
    itemGroup: vMenu.ItemGroup,
    menuItem,
    subMenu,
    vNav
  }
}
</script>