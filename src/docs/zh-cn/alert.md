<script>
    export default {
        methods: {
            onClose() {
                alert("Alert Closed！")
            }
        }
    }
</script>
<style>
    .demo-box.demo-alert .el-alert {
        margin: 20px 0 0;
    }

    .demo-box.demo-alert .el-alert:first-child {
        margin: 0;
    }
</style>

# Alert 警告提示

警告提示，展现需要关注的信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 代码演示

::: demo
<summary>
  #### 基本
  基本使用。
</summary>

```html
<template>
    <v-alert type="success" message="成功提示的文案"></v-alert>
    <v-alert type="success">
        成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍
    </v-alert>
</template>
```
:::

::: demo
<summary>
  #### 四种样式
  四种样式。
</summary>

```html
<template>
    <v-alert type="success" message="成功提示的文案"></v-alert>
    <v-alert type="info" message="消息提示的文案"></v-alert>
    <v-alert type="warning" message="警告提示的文案"></v-alert>
    <v-alert type="error" message="错误提示的文案"></v-alert>
</template>
```
:::

::: demo
<summary>
  #### 可关闭的警告提示
  可关闭的警告提示。
</summary>

```html
<template>
    <v-alert type="error" message="错误提示的文案"
    description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
    closable @close="onClose"></v-alert>
</template>

<script>
    export default {
        methods: {
            onClose() {
                alert("Alert Closed！")
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义关闭
  可以自定义关闭，自定义的文字会替换掉原先的关闭Icon。
</summary>

```html
<template>
    <v-alert type="info" message="消息提示的文案"
    closable close-text="关闭"></v-alert>
</template>
```
:::

::: demo
<summary>
  #### 图标
  可口的图标让信息类型更加醒目。
</summary>

```html
<template>
    <v-alert type="success" message="成功提示的文案" show-icon></v-alert>
    <v-alert type="info" message="消息提示的文案" show-icon></v-alert>
    <v-alert type="warning" message="警告提示的文案" show-icon></v-alert>
    <v-alert type="error" message="错误提示的文案" show-icon></v-alert>
    <v-alert type="success" message="成功提示的文案" show-icon
        description="成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍"></v-alert>
    <v-alert type="info" message="消息提示的文案" show-icon
        description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"></v-alert>
    <v-alert type="warning" message="警告提示的文案" show-icon
        description="警告提示的辅助性文字介绍警告提示的辅助性文字介绍"></v-alert>
    <v-alert type="error" message="错误提示的文案" show-icon description="错误错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"></v-alert>
</template>
```
:::

## API

### Alert Props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | String | success/warning/info/error | info |
| description | 辅助性文字 | String | — | — |
| closable | 是否可关闭 | Boolean | — | true |
| close-text | 关闭按钮自定义文本 | String | — | — |
| show-icon | 是否显示图标 | Boolean | — | false |

### Alert Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭alert时触发的事件 | — |
