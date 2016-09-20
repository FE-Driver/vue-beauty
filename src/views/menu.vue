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
            <sub-menu title="导航三" icon="setting" disabled>
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
            <sub-menu title="导航三" icon="setting" disabled>
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

        <code-box
                title="从数据直接生成"
                describe="使用data从json数据直接生成menu"
        >
          <v-nav style="width:240px" :data="menuData"></v-nav>

        </code-box>

      </v-Col>

    </v-Row>

    <api-table
      :content='content'
    >
      <h3>Menu props</h3>
    </api-table>

    <api-table
      :content='content2'
      title=""
    >
      <h3>Menu.Item props</h3>
    </api-table>

    <api-table
      :content='content3'
      title=""
    >
      <h3>Menu.SubMenu props</h3>
    </api-table>

    <api-table
      :content='content4'
      title=""
    >
      <h3>Menu.ItemGroup props</h3>
    </api-table>
    <api-table
      :content='content5'
      title=""
    >
      <h3>NavMenu props</h3>
    </api-table>
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
          icon: 'home',
          link: {
            name: 'card'
          }
        },
        {
          name: "安装指南",
          icon: 'mail',
          children: [{
            link: {
              name: 'alert',
              query:{
                src: 'http://test.api.g7s.chinawayltd.com/iframe.html#apilog/index.html'
              }
            },
            name: "快速上手"
          }, {
            link: "/development",
            name: "开发指南",
            disabled: true
          }]
        },
        {
          name: "基础组件",
          icon: 'folder',
          disabled: true,
          groups: [
            {
              groupName: "Basic",
              list: [
                {
                  link: "/layout",
                  name: "布局 (layout)"
                }
              ]
            },
            {
              groupName: "Form",
              list: [
                {
                  link: "/radio",
                  name: "按钮 (radio)"
                }
              ]
            }
          ]
        }
      ],
      content: [
        [
          'theme',
          '主题颜色',
          'String: light dark',
          'light'
        ],
        [
          'mode',
          '菜单类型，现在支持垂直、水平、和内嵌模式三种',
          'String: vertical horizontal inline',
          'vertical'
        ]
      ],
      content2: [
        [
          'disabled',
          '是否禁用',
          'Boolean',
          'false'
        ],
        [
          'icon',
          '图标',
          'String',
          '无'
        ]
      ],
      content3: [
        [
          'title',
          '子菜单项值',
          'String',
          '无'
        ],
        [
          'icon',
          '图标',
          'String',
          '无'
        ]
      ],
      content4: [
        [
          'title',
          '分组标题',
          'String',
          '无'
        ]
      ],
      content5: [
          [
            'data',
            '可嵌套的节点属性的数组，生成menu的数据',
            'array',
            '无'
          ],
          [
            'theme',
            '主题颜色',
            'String: light dark',
            'light'
          ],
          [
            'mode',
            '菜单类型，现在支持垂直、水平、和内嵌模式三种',
            'String: vertical horizontal inline',
            'vertical'
          ]
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