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
                this.$notification.info({
                    message: '这是标题',
                    description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
                    duration: 0,
                    selfKey:'noClose'
                });
            },
            onPlacementChange(val) {
                this.$notification.config({
                    placement: val,
                });
            },
            closeNotice(){
                this.$notification.close('noClose');
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
<script>
    export default {
        methods: {
            openNotification() {
                this.$notification.open({
                  message: '这是标题',
                  description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
                  onClose: close
                });
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 自动关闭的延时
  自定义通知框自动关闭的延时，默认`4.5s`，取消自动关闭只要将该值设为 `0` 即可。
  可通过this.$notification.close(selfKey) 手动关闭通知框
</summary>

```html
<template>
    <button type="button" class="ant-btn ant-btn-primary" @click="openNotificationInfinite">
        <span>打开通知提醒框</span>
    </button>
    <button type="button" class="ant-btn ant-btn-primary" @click="closeNotice">
        <span>关闭通知提醒框</span>
    </button>
</template>
<script>
    export default {
        methods: {
            openNotificationInfinite() {
                this.$notification.info({
                    message: '这是标题',
                    description: '我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭，我不会自动关闭',
                    duration: 0,
                    selfKey:'noClose'
                });
            },
            closeNotice(){
                this.$notification.close('noClose');
            }
        }
    }
</script>
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
<script>
    export default {
        methods: {
            openNotificationWithIcon(type) {
                this.$notification[type]({
                  message: '这是标题',
                  description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案'
                });
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 位置
  可以设置通知从右上角、右下角、左下角、左上角弹出。
</summary>

```html
<template>
    <v-select style="width: 120px;" :data="options" @change="onPlacementChange"></v-select>
    <button type="button" class="ant-btn ant-btn-primary" @click="openNotification">
        <span>打开通知提醒框</span>
    </button>
</template>
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
    export default {
        data () {
            return {
                options
            }
        },
        methods: {
            openNotification() {
                this.$notification.info({
                  message: '这是标题',
                  description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
                  onClose: close
                });
            },
            onPlacementChange(val) {
                this.$notification.config({
                    placement: val,
                });
            },
        }
    }
</script>
```
:::


## API

- `this.$notification.success(config)`
- `this.$notification.error(config)`
- `this.$notification.info(config)`
- `this.$notification.warning(config)`
- `this.$notification.close(selfKey:String)`


### config 参数如下：
| 参数        | 说明                                            | 类型         | 默认值 |
|----------- |---------------------------------------------    | ----------- |--------|
| message    | 通知提醒标题，必选                                 | string  | -     |
| description | 通知提醒内容，必选                                | string  | -     |
| selfKey        | 当前通知唯一标志                                   | string      | -     |
| duration   | 默认自动关闭延时，设置为 null或者0 则不自动关闭,单位秒        | number    | 4.5     |
| placement  | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | topRight |
| onClose    | 关闭通知弹框时触发的回调函数(注：手动触发关闭不触发回调)     | Function    | -     |



还提供了一个全局配置方法，在调用前提前配置，全局一次生效。

- `this.$notification.config(options)`

```js
    this.$notification.config({
        top: 100,
        duration: 3,
    });
```
### options 参数如下：
| 参数       | 说明               | 类型                       | 默认值       |
|------------|--------------------|----------------------------|--------------|
| placement  | 弹出位置，可选 `topLeft` `topRight` `bottomLeft` `bottomRight` | string | topRight |
| top        | 消息从顶部弹出时，距离顶部的位置，单位像素。 | number    | 24        |
| bottom     | 消息从底部弹出时，距离底部的位置，单位像素。 | number    | 24        |
| duration   | 默认自动关闭延时，单位秒 | number                       | 4.5         |
