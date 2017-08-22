<style>
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
        margin-left: 8px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
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

    #components-layout-demo-responsive .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 16px;
        cursor: pointer;
        transition: color .3s;
    }
    #components-layout-demo-responsive .trigger:hover {
        color: #108ee9;
    }
    #components-layout-demo-responsive .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
    #components-layout-demo-responsive .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
    }
    #components-layout-demo-responsive .ant-layout-sider-collapsed .nav-text {
        display: none;
    }

    /* Browser mockup code
     * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
     * Live example: https://updown.io
     */

    .browser-mockup {
      border-top: 2em solid rgba(230, 230, 230, 0.7);
      box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      position: relative;
      border-radius: 3px 3px 0 0;
    }

    .browser-mockup:before {
      display: block;
      position: absolute;
      content: '';
      top: -1.25em;
      left: 1em;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      background-color: #f44;
      box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
    }

    .browser-mockup.with-url:after {
      display: block;
      position: absolute;
      content: '';
      top: -1.6em;
      left: 5.5em;
      width: calc(100% - 6em);
      height: 1.2em;
      border-radius: 2px;
      background-color: white;
    }

    .browser-mockup > * {
      display: block;
    }

    .browser-content {
        position: relative;
        width: 100%;
        height: 360px;
    }
</style>
<script>
    export default {
        data() {
            return {
                collapsed: false,
                customCollapsed: false,
                menuData1: [{
                    name: 'nav 1'
                },{
                    name: 'nav 2',
                    selected: true
                },{
                    name: 'nav 3'
                }],
                menuData2: [{
                    name: 'subnav 1',
                    icon: 'user',
                    expand: true,
                    children: [{
                        name: 'option1',
                        selected: true
                    },{
                        name: 'option2'
                    },{
                        name: 'option3'
                    },{
                        name: 'option4'
                    }]
                },{
                    name: 'subnav 2',
                    icon: 'laptop',
                    children: [{
                        name: 'option5'
                    },{
                        name: 'option6'
                    },{
                        name: 'option7'
                    },{
                        name: 'option8'
                    }]
                },{
                    name: 'subnav 3',
                    icon: 'notification',
                    children: [{
                        name: 'option9'
                    },{
                        name: 'option10'
                    },{
                        name: 'option11'
                    },{
                        name: 'option12'
                    }]
                }],
                menuData3: [{
                    name: 'User',
                    icon: 'user',
                    children: [{
                        name: 'Tome'
                    },{
                        name: 'Bill'
                    },{
                        name: 'Alex'
                    }]
                },{
                    name: 'Team',
                    icon: 'team',
                    children: [{
                        name: 'Team1'
                    },{
                        name: 'Team2'
                    }]
                },{
                    name: 'File',
                    icon: 'file',
                    selected: true
                }],
                menuData4: [{
                    name: 'nav 1',
                    icon: 'user',
                    selected: true
                },{
                    name: 'nav 2',
                    icon: 'video-camera'
                },{
                    name: 'nav 3',
                    icon: 'upload'
                }],
                menuData5: [{
                    name: 'nav 1',
                    icon: 'user',
                    selected: true
                },{
                    name: 'nav 2',
                    icon: 'video-camera'
                },{
                    name: 'nav 3',
                    icon: 'upload'
                }]
            }
        },
        watch: {
            collapsed(val) {
                console.log(val);
            },
        },
        methods: {
            toggle() {
                this.customCollapsed = !this.customCollapsed;
            }
        }
    }
</script>

# Layout 布局

协助进行页面级整体布局。

## 设计规则

### 尺寸

一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。

- 顶部导航（大部分系统）：一级导航高度 `64px`，二级导航 `48px`。
- 顶部导航（展示类页面）：一级导航高度 `80px`，二级导航 `56px`。
- 顶部导航高度的范围计算公式为：`48+8n`。
- 侧边导航宽度的范围计算公式：`200+8n`。

### 交互

- 一级导航和末级的导航需要在可视化的层面被强调出来；
- 当前项应该在呈现上优先级最高；
- 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
- 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。

### 视觉

导航样式上需要根据信息层级合理的选择样式：

- **大色块强调**

  建议用于底色为深色系时，当前页面父级的导航项。

- **高亮火柴棍**

  当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- **字体高亮变色**

  从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- **字体放大**

  `12px`、`14px` 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

## 代码演示

::: demo
<summary>
  #### 基本结构
  典型的页面布局。
</summary>

```html
<template>
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
</template>

<style>
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
</style>
```
:::

::: demo
<summary>
  #### 上下中布局
  最基本的『上-中-下』布局。
  一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。
</summary>

```html
<template>
    <div id="components-layout-demo-top"> 
        <v-layout class="layout">
            <v-header>
                <div class="logo"></div>
                <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
            </v-header>
            <v-content :style="{ padding: '0 50px' }">
                <v-breadcrumb :style="{ margin: '12px 0' }">
                    <v-breadcrumb-item>Home</v-breadcrumb-item>
                    <v-breadcrumb-item href="">List</v-breadcrumb-item>
                    <v-breadcrumb-item href="">App</v-breadcrumb-item>
                </v-breadcrumb>
                <div style="background: #fff; padding: 24px; min-height: 280px">Content</div>
            </v-content>
            <v-footer :style="{ textAlign: 'center' }">
                Ant Design ©2016 Created by Ant UED
            </v-footer>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-top .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData1: [{
                    name: 'nav 1'
                },{
                    name: 'nav 2',
                    selected: true
                },{
                    name: 'nav 3'
                }]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 顶部-侧边布局
  多用在同时拥有顶部导航及侧边栏的页面。
</summary>

```html
<template>
    <div id="components-layout-demo-top-side">
        <v-layout>
            <v-header>
                <div class="logo"></div>
                <v-menu theme="dark" mode="horizontal" :data="menuData1" :style="{lineHeight: '64px'}"></v-menu>
            </v-header>
            <v-content :style="{ padding: '0 50px' }">
                <v-breadcrumb :style="{ margin: '12px 0' }">
                    <v-breadcrumb-item>Home</v-breadcrumb-item>
                    <v-breadcrumb-item href="">List</v-breadcrumb-item>
                    <v-breadcrumb-item href="">App</v-breadcrumb-item>
                </v-breadcrumb>
                <v-layout style="background: #fff; padding: 24px 0;">
                    <v-sider :width="200" style="background: #fff">
                        <v-menu mode="inline" :data="menuData2"></v-menu>
                    </v-sider>
                    <v-content :style="{ padding: '0 24px', minHeight: 280 }">Content</v-content>
                </v-layout>
            </v-content>
            <v-footer :style="{ textAlign: 'center' }">
                Ant Design ©2016 Created by Ant UED
            </v-footer>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData1: [{
                    name: 'nav 1'
                },{
                    name: 'nav 2',
                    selected: true
                },{
                    name: 'nav 3'
                }],
                menuData2: [{
                    name: 'subnav 1',
                    icon: 'user',
                    expand: true,
                    children: [{
                        name: 'option1',
                        selected: true
                    },{
                        name: 'option2'
                    },{
                        name: 'option3'
                    },{
                        name: 'option4'
                    }]
                },{
                    name: 'subnav 2',
                    icon: 'laptop',
                    children: [{
                        name: 'option5'
                    },{
                        name: 'option6'
                    },{
                        name: 'option7'
                    },{
                        name: 'option8'
                    }]
                },{
                    name: 'subnav 3',
                    icon: 'notification',
                    children: [{
                        name: 'option9'
                    },{
                        name: 'option10'
                    },{
                        name: 'option11'
                    },{
                        name: 'option12'
                    }]
                }]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 顶部-侧边布局-通栏
  同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站。
</summary>

```html
<template>
    <div id="components-layout-demo-top-side">
        <v-layout>
            <v-header>
                <div class="logo"></div>
                <v-menu theme="dark" mode="horizontal" :data="menuData1" style="line-height: 64px"></v-menu>
            </v-header>
            <v-layout>
                <v-sider :width="200" style="background: #fff">
                    <v-menu mode="inline" :data="menuData2" style="height:100%"></v-menu>
                </v-sider>
                <v-layout style="padding:0 24px 24px">
                    <v-breadcrumb style="margin:12px 0">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <v-content style="background: #fff; padding: 24px; margin: 0; min-height: 280px">Content</v-content>
                </v-layout>
            </v-layout>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-top-side .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData1: [{
                    name: 'nav 1'
                },{
                    name: 'nav 2',
                    selected: true
                },{
                    name: 'nav 3'
                }],
                menuData2: [{
                    name: 'subnav 1',
                    icon: 'user',
                    expand: true,
                    children: [{
                        name: 'option1',
                        selected: true
                    },{
                        name: 'option2'
                    },{
                        name: 'option3'
                    },{
                        name: 'option4'
                    }]
                },{
                    name: 'subnav 2',
                    icon: 'laptop',
                    children: [{
                        name: 'option5'
                    },{
                        name: 'option6'
                    },{
                        name: 'option7'
                    },{
                        name: 'option8'
                    }]
                },{
                    name: 'subnav 3',
                    icon: 'notification',
                    children: [{
                        name: 'option9'
                    },{
                        name: 'option10'
                    },{
                        name: 'option11'
                    },{
                        name: 'option12'
                    }]
                }]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 侧边布局
  侧边两列式布局。页面横向空间有限时，侧边导航可收起。
  侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。
</summary>

```html
<template>
    <div id="components-layout-demo-side"> 
        <v-layout>
            <v-sider collapsible v-model="collapsed">
                <div class="logo"></div>
                <v-menu theme="dark" :mode="collapsed?'vertical':'inline'" :data="menuData3">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span :class="{'nav-text':data.icon}">{{data.name}}</span>
                    </template>
                    <template scope="{data}" slot="sub">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout>
                <v-header :style="{ background: '#fff', padding: 0 }"></v-header>
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumb :style="{ margin: '12px 0' }">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-side .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
        margin-left: 8px;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .ant-menu-submenu-vertical > .ant-menu-submenu-title:after {
        display: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                collapsed: false,
                menuData3: [{
                    name: 'User',
                    icon: 'user',
                    children: [{
                        name: 'Tome'
                    },{
                        name: 'Bill'
                    },{
                        name: 'Alex'
                    }]
                },{
                    name: 'Team',
                    icon: 'team',
                    children: [{
                        name: 'Team1'
                    },{
                        name: 'Team2'
                    }]
                },{
                    name: 'File',
                    icon: 'file',
                    selected: true
                }]
            }
        },
        watch: {
            collapsed(val) {
                console.log(val);
            },
        },
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义触发器
  要使用自定义触发器，可以设置 `:trigger="false"` 来隐藏默认设定。
</summary>

```html
<template>
    <div id="components-layout-demo-custom-trigger"> 
        <v-layout>
            <v-sider collapsible :collapsed="customCollapsed" :trigger="false" :collapsed-width="64">
                <div class="logo"></div>
                <v-menu theme="dark" mode="inline" :data="menuData4">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout>
                <v-header :style="{ background: '#fff', padding: 0 }">
                    <v-icon class="trigger" :type="this.customCollapsed ? 'menu-unfold' : 'menu-fold'" @click.native="toggle"></v-icon>
                </v-header>
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumb :style="{ margin: '12px 0' }">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<style>
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

<script>
    export default {
        data() {
            return {
                customCollapsed: false,
                menuData4: [{
                    name: 'nav 1',
                    icon: 'user',
                    selected: true
                },{
                    name: 'nav 2',
                    icon: 'video-camera'
                },{
                    name: 'nav 3',
                    icon: 'upload'
                }]
            }
        },
        methods: {
            toggle() {
                this.customCollapsed = !this.customCollapsed;
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 响应式布局
  Layout.Sider 支持响应式布局。
  > 说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为零，会出现特殊 trigger。
</summary>

```html
<template>
    <div id="components-layout-demo-responsive"> 
        <v-layout>
            <v-sider breakpoint="lg" :collapsed-width="0">
                <div class="logo"></div>
                <v-menu theme="dark" mode="inline" :data="menuData5">
                    <template scope="{data}">
                        <i v-if="data.icon" :class="'anticon anticon-' + data.icon"></i>
                        <span class="nav-text">{{data.name}}</span>
                    </template>
                </v-menu>
            </v-sider>
            <v-layout>
                <v-header :style="{ background: '#fff', padding: 0 }">
                </v-header>
                <v-content :style="{ padding: '0 50px' }">
                    <v-breadcrumb :style="{ margin: '12px 0' }">
                        <v-breadcrumb-item>Home</v-breadcrumb-item>
                        <v-breadcrumb-item href="">List</v-breadcrumb-item>
                        <v-breadcrumb-item href="">App</v-breadcrumb-item>
                    </v-breadcrumb>
                    <div style="padding: 24px; background: #fff; min-height: 360px;">Content</div>
                </v-content>
                <v-footer :style="{ textAlign: 'center' }">
                    Ant Design ©2016 Created by Ant UED
                </v-footer>
            </v-layout>
        </v-layout>
    </div>
</template>

<style>
    #components-layout-demo-responsive .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 16px;
        cursor: pointer;
        transition: color .3s;
    }
    #components-layout-demo-responsive .trigger:hover {
        color: #108ee9;
    }
    #components-layout-demo-responsive .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
    #components-layout-demo-responsive .ant-layout-sider-collapsed .anticon {
        font-size: 16px;
    }
    #components-layout-demo-responsive .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                menuData5: [{
                    name: 'nav 1',
                    icon: 'user',
                    selected: true
                },{
                    name: 'nav 2',
                    icon: 'video-camera'
                },{
                    name: 'nav 3',
                    icon: 'upload'
                }]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 固定头部
  一般用于固定顶部导航，方便页面切换。
</summary>

```html
<template>
    <div class="browser-mockup with-url">
        <iframe class="browser-content" src="./#/demo/layout-fixed" frameborder="0"></iframe>
    </div>
</template>

<style>
    #components-layout-demo-fixed .logo {
        width: 120px;
        height: 31px;
        background: #333;
        border-radius: 6px;
        margin: 16px 24px 16px 0;
        float: left;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData6: [{
                    name: 'nav 1'
                },{
                    name: 'nav 2',
                    selected: true
                },{
                    name: 'nav 3'
                }]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 固定侧边栏
  当内容较长时，使用固定侧边栏可以提供更好的体验。
</summary>

```html
<template>
    <div class="browser-mockup with-url">
        <iframe class="browser-content" src="./#/demo/layout-fixed-sider" frameborder="0"></iframe>
    </div>
</template>

<style>
    #components-layout-demo-fixed-sider .logo {
        height: 32px;
        background: #333;
        border-radius: 6px;
        margin: 16px;
    }
</style>
<script>
    export default {
        data() {
            return {
                menuData7: [{
                    name: 'nav 1',
                    icon: 'user',
                }, {
                    name: 'nav 2',
                    icon: 'video-camera',
                }, {
                    name: 'nav 3',
                    icon: 'upload',
                }, {
                    name: 'nav 4',
                    icon: 'bar-chart',
                    selected: true,
                }, {
                    name: 'nav 5',
                    icon: 'cloud-o',
                }, {
                    name: 'nav 6',
                    icon: 'appstore-o',
                }, {
                    name: 'nav 7',
                    icon: 'team',
                }, {
                    name: 'nav 8',
                    icon: 'shop',
                }]
            }
        }
    }
</script>
```
:::

## API

### Sider Props

| 成员      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| collapsed | 当前收起状态，可用v-model | Boolean | `false` |
| collapsible | 是否可收起 | Boolean | `false`  |
| trigger | 是否显示trigger，collapsible 为 true 时有效，设置为 false 时隐藏 trigger | Boolean | - |
| width | 宽度 | Number | `200` |
| collapsedWidth | 收缩宽度，仅当 `collapsed: true` 时生效 | Number | `64` |
| breakpoint | 触发响应式布局的断点 | Enum { 'xs', 'sm', 'md', 'lg', 'xl' }  | - |

### Sider Events

| 事件      | 说明                                     | 回调参数 |
|----------|-----------------------------------------|-------|
| collapse | 展开-收起时触发 | collapsed，当前收起状态 |
