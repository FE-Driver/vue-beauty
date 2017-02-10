<style scoped>
  .box {
    width: 500px;
    }
    .top {
        
      margin-left: 125px;
      
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      width: 60px; 
      margin-left: 380px;
    }

    .bottom {
      clear: both;
      margin-left: 125px;
    }
    .ant-tooltip{
        margin:5px
    }
</style>
<script>
import notification from '../../../vb/components/notification';
export default {
        methods: {
          openNotification() {
          debugger;
            this.$notification.open({
              message: '这是标题',
              description: '这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案这是提示框的文案',
            });
          }
        }
      }
</script>

# Tooltip 文字提示
简单的文字提示气泡框

## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

## 代码演示

::: demo

<summary>
  #### 基本
  最简单的用法
</summary>

```html
<template>
<button type="button" class="ant-btn ant-btn-primary" @click="openNotification"><span>打开通知提醒框</span></button>
</template>
<script>
export default {
    data: function () {
        return {
          visible : false,
          disabled : true,
          controlled : true
        }
    },
    methods: {
        popperHide :function() {
            console.log('tooltip hide');
          }
    }
  }
</script>
```
:::


## API
### tooltip Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `top-start` `top-end` `bottom-start` `bottom-end` `left-start` `left-end` `right-start` `right-end` | string     | top    |
| visible | 初始状态是否显示tooltip | Boolean |  false |
| delay | 鼠标移入后延时多少才显示tooltip,单位:毫秒| number |  0 |
| disabled | tooltip是否可用 | Boolean |  false |
| controlled | 保持tooltop显示 | Boolean |  false |

### tooltip event

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| tooltiphide | tooptip由显示变为隐藏的回调函数 | Function() | -- |