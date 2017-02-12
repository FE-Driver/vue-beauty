<script>
    const options = [{
        value: 'topLeft',
        label: 'topLeft'
    }, {
        value: 'topRight',
        label: 'topRight'
    }, {
        value: 'bottomLeft',
        label: 'bottomLeft'
    }, {
        value: 'bottomRight',
        label: 'bottomRight'
    }];
    const close = () => {
        console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
    };
    export default {
        data () {
            return {
                options
            }
        },
        methods: {
            openNotification() {
                this.$notification.open({
                  message: '这是标题',
                  description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
                  onClose: close
                });
            },

            openNotificationWithIcon(type) {
                this.$notification[type]({
                  message: '这是标题',
                  description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
                });
            },
            openNotificationInfinite() {
                this.$notification.open({
                    message: '这是标题',
                    description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
                    duration: 0
                });
            },
            onPlacementChange(val) {
                this.$notification.config({
                    placement: val,
                });
            }
        }
    }
</script>

# Notification 通知提醒框

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法，4.5 秒后自动关闭。
</summary>

```html
<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openNotification">
        <span>打开通知提醒框</span>
    </button>
</template>
```
:::

::: demo
<summary>
  #### 自动关闭的延时
  自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。
</summary>

```html
<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openNotificationInfinite">
        <span>打开通知提醒框</span>
    </button>
</template>
```
:::


::: demo
<summary>
  #### 带有Icon的通知提醒框
  通知提醒框左侧有图标。
</summary>

```html
<template>
    <button type="button" class="ant-btn" @click="openNotificationWithIcon('success')"><span>成 功</span></button>
    <button type="button" class="ant-btn" @click="openNotificationWithIcon('info')"><span>消 息</span></button>
    <button type="button" class="ant-btn" @click="openNotificationWithIcon('warning')"><span>警 告</span></button>
    <button type="button" class="ant-btn" @click="openNotificationWithIcon('error')"><span>错 误</span></button>
</template>
```
:::

::: demo
<summary>
  #### 位置
  可以设置通知从右上角、右下角、左下角、左上角弹出。
</summary>

```html
<template>
    <v-select search style="width: 120px;" :options="options" @change="onPlacementChange"></v-select>

    <button type="button" class="ant-btn ant-btn-primary" @click="openNotificationInfinite">
        <span>打开通知提醒框</span>
    </button>
</template>
```
:::


### API

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`

### Props
| 参数        | 说明                                            | 类型         | 默认值 |
|----------- |---------------------------------------------    | ----------- |--------|
| message    | 通知提醒标题，必选                                 | string  | -     |
| description | 通知提醒内容，必选                                | string  | -     |
| vkey        | 当前通知唯一标志                                   | string      | -     |
| onClose    | 点击默认关闭按钮时触发的回调函数                     | Function    | -     |
| duration   | 默认 4.5 秒后自动关闭，配置为 null 则不自动关闭         | number    | 4.5     |
| placement  | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | topRight |

还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `notification.config(options)`

```js
    notification.config({
        top: 100,
        duration: 3,
    });
```

| 参数       | 说明               | 类型                       | 默认值       |
|------------|--------------------|----------------------------|--------------|
| placement  | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | topRight |
| top        | 消息从顶部弹出时，距离顶部的位置，单位像素。 | number    | 24        |
| bottom     | 消息从底部弹出时，距离底部的位置，单位像素。 | number    | 24        |
| duration   | 默认自动关闭延时，单位秒 | number                       | 4.5         |