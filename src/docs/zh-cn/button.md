<script>
    export default {
        data: function () {
            return {
                loading: true
            };
        },
        methods: {
            onClick: function() {
                alert("Button Clicked！")
            },
            removeLoading: function() {
                this.loading = !this.loading;
            }
        }
    }
</script>
# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
## 代码演示

::: demo
<summary>
  #### 按钮类型
  按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮以及四种颜色按钮。主按钮在同一个操作区域最多出现一次。
</summary>

```html
<v-button type="primary">Primary</v-button>
<v-button>Default</v-button>
<v-button type="dashed">Dashed</v-button>
<v-button type="danger">Danger</v-button>
<v-button type="info">Info</v-button>
<v-button type="success">Success</v-button>
<v-button type="warning">Warning</v-button>
<v-button type="error">Error</v-button>
```
:::

::: demo
<summary>
  #### 图标按钮
  当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
</summary>

```html
<v-button type="primary" shape="circle" icon="search"></v-button>
<v-button type="primary" icon="search"><span>搜索</span></v-button>
<v-button type="ghost" shape="circle-outline" icon="search"></v-button>
<v-button type="ghost" icon="search"><span>搜索</span></v-button>
<br/><br/>
<v-button type="dashed" shape="circle-outline" icon="search"></v-button>
<v-button type="dashed" icon="search"><span>搜索</span></v-button>
<v-button type="ghost" shape="circle-outline"><v-icon type="search"></v-icon></v-button>
<v-button type="ghost"><span>搜索</span><v-icon type="search"></v-icon></v-button>
```
:::

::: demo
<summary>
  #### 按钮尺寸
  按钮有大、中、小三种尺寸。通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。
</summary>

```html
<v-button type="primary" size="large">Large</v-button>
<v-button type="primary">Default</v-button>
<v-button type="primary" size="small">Small</v-button>
<br/><br/>
<v-button type="ghost" size="large">Large</v-button>
<v-button type="ghost">Default</v-button>
<v-button type="ghost" size="small">Small</v-button>
<br/><br/>
<v-button type="dashed" size="large">Large</v-button>
<v-button type="dashed">Default</v-button>
<v-button type="dashed" size="small">Small</v-button>
<br/><br/>
<v-button type="primary" shape="circle" icon="search" size="large"></v-button>
<v-button type="primary" shape="circle" icon="search"></v-button>
<v-button type="primary" shape="circle" icon="search" size="small"></v-button>
```
:::

::: demo
<summary>
  #### 不可用状态
  添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
</summary>

```html
<template>
    <div>
        <v-button type="primary" @click="onClick">Primary</v-button>
        <v-button type="primary" disabled @click="onClick">Primary</v-button>
        <br/><br/>
        <v-button type="default" @click="onClick">Default</v-button>
        <v-button type="default" disabled @click="onClick">Default</v-button>
        <br/><br/>
        <v-button type="dashed" @click="onClick">Dashed</v-button>
        <v-button type="dashed" disabled @click="onClick">Dashed</v-button>
        <br/><br/>
        <v-button type="danger" @click="onClick">Danger</v-button>
        <v-button type="danger" disabled @click="onClick">Danger</v-button>
    </div>
</template>

<script>
    export default {
        methods: {
            onClick: function() {
                alert("Button Clicked！")
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 加载中状态
  添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
</summary>

```html
<template>
    <div>
        <v-button type="primary" :loading="loading">{{ loading ? "Loading" : "Default" }}</v-button>
        <v-button type="primary" @click="removeLoading">点击将切换loading状态</v-button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                loading: true
            };
        },
        methods: {
            onClick: function() {
                alert("Button Clicked！")
            },
            removeLoading: function() {
                this.loading = !this.loading;
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 幽灵按钮
  幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
</summary>

```html
<div style="background: rgb(190, 200, 200); padding: 1.5rem 1rem 1rem;">
    <v-button type="primary" ghost>Primary</v-button>
    <v-button ghost>Default</v-button>
    <v-button type="dashed" ghost>Dashed</v-button>
    <v-button type="danger" ghost>Danger</v-button>
</div>
```
:::

::: demo
<summary>
  #### 按钮组合
  可以将多个 Button 放入 Button.Group 的容器中。通过设置 size 为 large small 分别把按钮组合设为大、小尺寸。若不设置 size，则尺寸为中。
</summary>

```html
<v-button-group size="large">
    <v-button>Large</v-button>
    <v-button>Large</v-button>
</v-button-group>
<v-button-group>
    <v-button>Default</v-button>
    <v-button>Default</v-button>
</v-button-group>
<v-button-group size="small">
    <v-button>Small</v-button>
    <v-button>Small</v-button>
</v-button-group>
<br/><br/>
<h3>带图标的组合</h3>
<v-button-group>
    <v-button type="primary" icon="left">后退</v-button>
    <v-button type="primary">前进 <v-icon type="right"></v-icon></v-button>
</v-button-group>
<v-button-group>
    <v-button type="primary" icon="cloud"></v-button>
    <v-button type="primary" icon="cloud-download"></v-button>
</v-button-group>
```
:::

## API

### Button Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| type | 设置按钮类型 | string | primary dashed info success warning danger error 或者不设| - |
| html-type | 设置 button 原生的 type 值 | string | 参考 HTML 标准（button reset submit） | button |
| icon | 设置按钮的图标类型 | string | 参考Icon组件中的type可选值| - |
| shape | 设置按钮形状 | string | circle circle-outline 或者不设 | - |
| size | 设置按钮大小 | string | small large 或者不设 | default |
| loading | 设置按钮载入状态 | boolean | true false | false |
| ghost | 幽灵属性，使按钮背景透明 | boolean | true false | false |

### Button Group Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| size | 设置按钮大小 | string | small large 或者不设 | default |


### Button Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击按钮时触发的事件 | 事件对象 |

