<style scoped>
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

<script>
    export default {
        data() {
            return {
                collapsed: false,
                customCollapsed: false,
            }
        },
        methods: {
            onCollapse() {
                console.log("onCollapse！")
            },
            toggle() {
                this.customCollapsed = !this.customCollapsed;
            }
        }
    }
</script>

# Layout 布局

可协助进行页面级整体布局。

## 概述

- `Layout`：布局容器，其下可嵌套 `Header` `Sider` `Content` `Footer` 或 `Layout` 本身。
- `Header`：顶部布局，自带默认样式。
- `Sider`：侧边栏，自带默认样式及基本功能。
- `Content`：内容部分，自带默认样式。
- `Footer`：底部布局，自带默认样式。

> 注意：采用 flex 布局实现，请注意[浏览器兼容性](http://caniuse.com/#search=flex)问题。

## 代码演示

::: demo
<summary>
  #### 基本
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
</summary>

```html
<template>
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
                <v-menu theme="dark" mode="horizontal" :style="{lineHeight: '64px'}">
                    <v-menu-item>nav 1</v-menu-item>
                    <v-menu-item>nav 2</v-menu-item>
                    <v-menu-item>nav 3</v-menu-item>
                </v-menu>
            </v-header>
            <v-content :style="{ padding: '0 50px' }">
                <v-breadcrumb :style="{ margin: '12px 0' }">
                    <v-breadcrumb-item>Home</v-breadcrumb-item>
                    <v-breadcrumb-item href="">List</v-breadcrumb-item>
                    <v-breadcrumb-item href="">App</v-breadcrumb-item>
                </v-breadcrumb>
                <v-layout style="background: #fff; padding: 24px 0;">
                    <v-sider :width="200" style="background: #fff">
                        <v-menu mode="inline">
                            <v-submenu icon="user" title="subnav 1">
                                <v-menu-item>option1</v-menu-item>  
                                <v-menu-item>option2</v-menu-item>
                                <v-menu-item>option3</v-menu-item>  
                                <v-menu-item>option4</v-menu-item>
                            </v-submenu>
                            <v-submenu icon="laptop" title="subnav 2">
                                <v-menu-item>option5</v-menu-item>  
                                <v-menu-item>option6</v-menu-item>
                                <v-menu-item>option7</v-menu-item>  
                                <v-menu-item>option8</v-menu-item>  
                            </v-submenu>
                            <v-submenu icon="notification" title="subnav 3">
                                <v-menu-item>option9</v-menu-item>  
                                <v-menu-item>option10</v-menu-item>
                                <v-menu-item>option11</v-menu-item>  
                                <v-menu-item>option12</v-menu-item>  
                            </v-submenu>
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
```
:::

::: demo
<summary>
  #### 侧边布局
  多用在两列式布局。
</summary>

```html
<template>
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
    }
    #components-layout-demo-side .ant-layout-sider-collapsed .nav-text {
        display: none;
    }
</style>

<script>
    export default {
        data() {
            return {
                collapsed: false,
            }
        },
        methods: {
            onCollapse() {
                console.log("onCollapse！")
            }
        }
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

## API

### Sider Props

| 成员      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| collapsible | 是否可收起 | boolean | `false`  |
| collapsed | 当前收起状态 | boolean | `false` |
| trigger | 是否显示trigger，collapsible 为 true 时有效，设置为 false 时隐藏 trigger | boolean | - |
| width | 宽度 | number | `200` |
| collapsedWidth | 收缩宽度，仅当 `collapsed: true` 时生效 | number | `64` |

### Sider Events

| 事件      | 说明                                     | 回调参数 |
|----------|-----------------------------------------|-------|
| collapse | 展开-收起时触发 | collapsed，当前收起状态 |
