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
export default{
    data :function(){
        return {
            msg: '<em>LVison </em>',
            msg1: '<em>love</em>',
            msg2: '<em>jiangguagua</em>',
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
<div class="box">
  <div class="top">
    <v-button type='success' v-tooltipd.topleft='msg'>上左</v-button>
    <v-button type='success' v-tooltipd.top='msg1'>上边</v-button>
    <v-button type='success' v-tooltipd.topright='msg2'>上右</v-button>
  </div>
  <div class="left">
    <v-button type='success' v-tooltipd.lefttop='msg'>左上</v-button>
    <v-button type='success' v-tooltipd.left='msg'>左边</v-button>
    <v-button type='success' v-tooltipd.leftbottom='msg'>左下</v-button>
  </div>

  <div class="right">
    <v-button type='success' v-tooltipd.righttop='msg'>右上</v-button>
    <v-button type='success' v-tooltipd.right='msg'>右边</v-button>
    <v-button type='success' v-tooltipd.rightbottom='msg'>右下</v-button>
  </div>
  <div class="bottom">
    <v-button type='success' v-tooltipd.bottomleft='msg'>下左</v-button>
    <v-button type='success' v-tooltipd.bottom='msg'>下边</v-button>
    <v-button type='success' v-tooltipd.bottomright='msg'>下右</v-button>
</div>
</template>
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