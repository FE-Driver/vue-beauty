<template lang="html">

  <div>

    <section class="markdown">
      <h1>Layout 布局</h1>
      <p>
        可协助进行页面级整体布局。
      </p>
      <h2>概述</h2>
      <ul>
        <li>Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身。</li>
        <li>Header：顶部布局，自带默认样式。</li>
        <li>Sider：侧边栏，自带默认样式及基本功能。</li>
        <li>Content：内容部分，自带默认样式。</li>
        <li>Footer：底部布局，自带默认样式。</li>
      </ul>
      <blockquote><p>注意：采用 flex 布局实现，请注意<a href="http://caniuse.com/#search=flex">浏览器兼容性</a>问题。</p></blockquote>
      <h2>组件演示</h2>
    </section>

    <v-row>

      <v-col>

        <code-box
          title="基本结构"
          describe="典型的页面布局。"
        >
        <div class="components-layout-demo-basic"> 
            <v-layout>
                <v-header>Header</v-header>
                <v-content>Content</v-content>
                <v-footer>Footer</v-footer>
            </v-layout>
        </div>

        <div class="components-layout-demo-basic"> 
            <v-layout>
                <v-header>Header</v-header>
                <v-layout>
                    <v-sider>Sider</v-sider>
                    <v-content>Content</v-content>
                </v-layout>
                <v-footer>Footer</v-footer>
            </v-layout>
        </div>

        <div class="components-layout-demo-basic"> 
            <v-layout>
                <v-header>Header</v-header>
                <v-layout>
                    <v-content>Content</v-content>
                    <v-sider>Sider</v-sider>
                </v-layout>
                <v-footer>Footer</v-footer>
            </v-layout>
        </div>

        <div class="components-layout-demo-basic"> 
            <v-layout>
                    <v-sider>Sider</v-sider>
                    <v-content>
                        <v-header>Header</v-header>
                        <v-content>Content</v-content>
                        <v-footer>Footer</v-footer>
                    </v-content>
            </v-layout>
        </div>
        </code-box>

       <code-box
          title="上中下布局"
          describe="最基本的『上-中-下』布局。"
        >
        <div id="components-layout-demo-top"> 
            <v-layout class="layout">
                <v-header>
                    <div class="logo"></div>
                    <v-menu theme="dark" mode="horizontal" :style="{lineHeight: '64px'}">
                        <v-menu-item>nav 1</v-menu-item>
                        <v-menu-item>nav 2</v-menu-item>
                        <v-menu-item>nav 3</v-menu-item>
                    </v-menu>
                </v-header>
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumbs :style="{ margin: '12px 0' }">
                        <v-breadcrumb name="Home"></v-breadcrumb>
                        <v-breadcrumb href="" name="List"></v-breadcrumb>
                        <v-breadcrumb href="" name="App"></v-breadcrumb>
                    </v-breadcrumbs>
                    <div style="background: #fff; padding: 24px; min-height: 280px">Content</div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </div>
        </code-box>

        <code-box
          title="顶部-侧边布局"
          describe="多用在同时拥有顶部导航及侧边栏的页面。"
        >
        <div id="components-layout-demo-top-side">
            <v-layout>
                <v-header>
                    <div class="logo"></div>
                    <v-menu theme="dark" mode="horizontal" :style="{lineHeight: '64px'}">
                        <v-menu-item>nav 1</v-menu-item>
                        <v-menu-item>nav 2</v-menu-item>
                        <v-menu-item>nav 3</v-menu-item>
                    </v-menu>
                </v-header>
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumbs :style="{ margin: '12px 0' }">
                        <v-breadcrumb name="Home"></v-breadcrumb>
                        <v-breadcrumb href="" name="List"></v-breadcrumb>
                        <v-breadcrumb href="" name="App"></v-breadcrumb>
                    </v-breadcrumbs>
                    <v-layout style="background: #fff; padding: 24px 0;">
                        <v-sider :width="200" style="background: #fff">
                            <v-menu mode="inline" style="width:240px" :expand="true">
                                <v-sub-menu title="subnav1" icon="user">
                                    <v-menu-item>option1</v-menu-item>
                                    <v-menu-item>option2</v-menu-item>
                                    <v-menu-item>option3</v-menu-item>
                                    <v-menu-item>option4</v-menu-item>
                                </v-sub-menu>
                                <v-sub-menu title="subnav2" icon="laptop">
                                    <v-menu-item>option5</v-menu-item>
                                    <v-menu-item>option6</v-menu-item>
                                    <v-menu-item>option7</v-menu-item>
                                    <v-menu-item>option8</v-menu-item>
                                </v-sub-menu>
                                <v-sub-menu title="subnav3" icon="notification">
                                    <v-menu-item>option9</v-menu-item>
                                    <v-menu-item>option10</v-menu-item>
                                    <v-menu-item>option11</v-menu-item>
                                    <v-menu-item>option12</v-menu-item>
                                </v-sub-menu>
                            </v-menu>
                        </v-sider>
                        <v-content :style="{ padding: '0 24px', minHeight: 280 }">Content</v-content>
                    </v-layout>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </div>
        </code-box>

         <code-box
          title="侧边布局"
          describe="多用在两列式布局。"
        >
        <div id="components-layout-demo-side"> 
            <v-layout>
                <v-sider collapsible :collapsed="collapsed" @collapse="onCollapse">
                    <div class="logo"></div>
                    <v-menu theme="dark" mode="inline">
                        <v-menu-item>
                            <v-icon type="user"></v-icon>
                            <span class="nav-text">nav 1</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="video-camera"></v-icon>
                            <span class="nav-text">nav 2</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="upload"></v-icon>
                            <span class="nav-text">nav 3</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="user"></v-icon>
                            <span class="nav-text">nav 4</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="heart-o"></v-icon>
                            <span class="nav-text">nav 5</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="team"></v-icon>
                            <span class="nav-text">nav 6</span>
                        </v-menu-item>
                    </v-menu>
                </v-sider>
                <v-layout>
                    <v-header :style="{ background: '#fff', padding: 0 }"></v-header>
                    <v-content :style="{ padding: '0 50px' }">
                        <v-breadcrumbs :style="{ margin: '12px 0' }">
                            <v-breadcrumb name="Home"></v-breadcrumb>
                            <v-breadcrumb href="" name="List"></v-breadcrumb>
                            <v-breadcrumb href="" name="App"></v-breadcrumb>
                        </v-breadcrumbs>
                        <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
                    </v-content>
                    <v-footer :style="{ textAlign: 'center' }">
                        Ant Design ©2016 Created by Ant UED
                    </v-footer>
                </v-layout>
            </v-layout>
        </div>
        <template slot="js">
            export default {
                data() {
                    return {
                        collapsed: false,
                    }
                },
                methods: {
                    onCollapse(val) {
                        console.log("collapse state:",val)
                    }
                }
            }
        </template>
        </code-box>

        <code-box
          title="自定义触发器"
          describe="要使用自定义触发器，可以设置 :trigger="false" 来隐藏默认设定。"
        >
        <div id="components-layout-demo-custom-trigger"> 
            <v-layout>
                <v-sider collapsible :collapsed="customCollapsed" :trigger="false" :collapsed-width="100">
                    <div class="logo"></div>
                    <v-menu theme="dark" mode="inline">
                        <v-menu-item>
                            <v-icon type="user"></v-icon>
                            <span class="nav-text">nav 1</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="video-camera"></v-icon>
                            <span class="nav-text">nav 2</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="upload"></v-icon>
                            <span class="nav-text">nav 3</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="user"></v-icon>
                            <span class="nav-text">nav 4</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="heart-o"></v-icon>
                            <span class="nav-text">nav 5</span>
                        </v-menu-item>
                        <v-menu-item>
                            <v-icon type="team"></v-icon>
                            <span class="nav-text">nav 6</span>
                        </v-menu-item>
                    </v-menu>
                </v-sider>
                <v-layout>
                    <v-header :style="{ background: '#fff', padding: 0 }">
                        <v-icon class="trigger" :type="this.customCollapsed ? 'menu-unfold' : 'menu-fold'" @click.native="toggle"></v-icon>
                    </v-header>
                    <v-content :style="{ padding: '0 50px' }">
                        <v-breadcrumbs :style="{ margin: '12px 0' }">
                            <v-breadcrumb name="Home"></v-breadcrumb>
                            <v-breadcrumb href="" name="List"></v-breadcrumb>
                            <v-breadcrumb href="" name="App"></v-breadcrumb>
                        </v-breadcrumbs>
                        <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
                    </v-content>
                    <v-footer :style="{ textAlign: 'center' }">
                        Ant Design ©2016 Created by Ant UED
                    </v-footer>
                </v-layout>
            </v-layout>
        </div>
        <template slot="js">
            export default {
                data() {
                    return {
                        customCollapsed: false,
                    }
                },
                methods: {
                    toggle() {
                        this.customCollapsed = !this.customCollapsed;
                    }
                }
            }
        </template>
        </code-box>

      </v-col>

    </v-row>


    <api-table
      :content='content'
    >
      <h3>Sider</h3>
    </api-table>

    <api-table
      title=""
      type="events"
      :content='eventContent'
    >
      <h3>Sider Events</h3>
    </api-table>

  </div>

</template>

<script>

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
        collapsed: false,
        customCollapsed: false,
        content: [
            [
                'collapsible',
                '是否可收起',
                'boolean',
                'false'
            ],
            [
                'collapsed',
                '当前收起状态',
                'boolean',
                'false'
            ],
            [
                'trigger',
                '是否显示trigger，collapsible 为 true 时有效，设置为 false 时隐藏 trigger',
                'boolean',
                '-'
            ],
            [
                'width',
                '宽度',
                'number',
                '200'
            ],
            [
                'collapsedWidth',
                '收缩宽度，仅当 collapsed:true 时生效',
                'number',
                '64'
            ],
        ],
        eventContent: [
          ['collapse',
          '展开-收起时触发',
          'collapsed，当前收起状态']
        ]
    }
  },
  methods: {
    onCollapse(val) {
        console.log("collapse state:",val)
    },
    toggle() {
        this.customCollapsed = !this.customCollapsed;
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>

<style scoped lang="less">
  .components-layout-demo-basic {
        text-align: center;
        margin: 2rem;
    }
    .components-layout-demo-basic .ant-layout-header,
    .components-layout-demo-basic .ant-layout-footer {
        background: #7dbcea;
        color: #fff;
    }
    .components-layout-demo-basic .ant-layout-footer {
        line-height: 1.5;
    }
    .components-layout-demo-basic .ant-layout-sider {
        background: #3ba0e9;
        color: #fff;
        line-height: 120px;
    }
    .components-layout-demo-basic .ant-layout-content {
        background: rgba(16, 142, 233, 1);
        color: #fff;
        min-height: 120px;
        line-height: 120px;
    }
    #components-layout-demo-top .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
    }
    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 28px 16px 0;
        float: left;
    }
    #components-layout-demo-side .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 16px;
        cursor: pointer;
        transition: color .3s;
     }
    #components-layout-demo-custom-trigger .trigger:hover {
        color: #108ee9;
    }
    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
    #components-layout-demo-custom-trigger .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
    }
    #components-layout-demo-custom-trigger .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
</style>