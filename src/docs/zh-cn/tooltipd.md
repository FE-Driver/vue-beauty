<style scoped>
    .box {
        /* width: 500px; */
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
    .left button, .right button {
        margin-bottom: 5px;
    }
</style>
<script>
    export default{
        data :function(){
            return {
                msg: '<em>hello world</em>',
                msg1: '请正确输入',
                msg2: '不保持显示',
                msg3: '保持显示',
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
            <v-button v-tooltip.topleft='msg'>上左</v-button>
            <v-button v-tooltip.top='msg'>上边</v-button>
            <v-button v-tooltip.topright='msg'>上右</v-button>
        </div>
        <div class="left">
            <v-button v-tooltip.lefttop='msg'>左上</v-button>
            <v-button v-tooltip.left='msg'>左边</v-button>
            <v-button v-tooltip.leftbottom='msg'>左下</v-button>
        </div>
        <div class="right">
            <v-button v-tooltip.righttop='msg'>右上</v-button>
            <v-button v-tooltip.right='msg'>右边</v-button>
            <v-button v-tooltip.rightbottom='msg'>右下</v-button>
        </div>
        <div class="bottom">
            <v-button v-tooltip.bottomleft='msg'>下左</v-button>
            <v-button v-tooltip.bottom='msg'>下边</v-button>
            <v-button v-tooltip.bottomright='msg'>下右</v-button>
        </div>
    </div>
</template>
<script>
    export default{
        data :function(){
            return {
                msg: '<em>hello world</em>',
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 保持tooltip的显示
  通过controlled来控制tooltip是否保持显示
</summary>

```html
<template>
    <v-button v-tooltip.topleft='msg2'>不保持显示</v-button>
    <v-button v-tooltip.top.controlled='msg3'>保持显示</v-button>
</template>
<script>
    export default{
        data :function(){
            return {
                msg2: '不保持显示',
                msg3: '保持显示',
            }
        }
    }
</script>
```

::: demo
<summary>
  #### 指定触发事件
  可通过指定触发事件来控制tooltip的显示
</summary>

```html
<template>
    <v-input name="test" v-tooltip:focus.right="msg1"></v-input>
</template>
<script>
    export default{
        data :function(){
            return {
                msg1: '请正确输入',
            }
        }
    }
</script>
```
:::

## API

### tooltip 指令说明
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| :事件 | 显示或关闭tip的触发事件,支持hover或focus | String |  hover |
| .位置 | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | top    |
| .controlled | 是否保持tooltip的显示 | -- |  -- |
