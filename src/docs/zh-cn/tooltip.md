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
        margin:5px;
        position:relative;
        display:inline-block;
    }
</style>
<script>

export default {
    data: function () {
        return {
          disabled: true,
          visible : true,
          delay :1000,
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
        <v-tooltip content="top-start 文字提示" placement="top-start" :controlled="controlled">
             <v-button>上左</v-button>
        </v-tooltip>
        <v-tooltip content="top 文字提示,初始可见" placement="top" :visible="visible">
            <v-button>上边</v-button>
        </v-tooltip>
        <v-tooltip content="top-end 不可用tooltip" placement="top-end" :disabled="disabled">
            <v-button>上右</v-button>
        </v-tooltip>
    </div>
    <div class="left">
        <v-tooltip content="left-start 文字提示" placement="left-start" @hide="popperHide">
            <v-button>左上</v-button>
         </v-tooltip>
         <v-tooltip content="left 文字提示" placement="left">
            <v-button>左边</v-button>
         </v-tooltip>
         <v-tooltip content="left-end 文字提示" placement="left-end">
            <v-button>左下</v-button>
         </v-tooltip>
    </div>

    <div class="right">
        <v-tooltip content="right-start 文字提示" placement="right-start">
            <v-button>右上</v-button>
        </v-tooltip>
        <v-tooltip content="right 文字提示" placement="right">
            <v-button>右边</v-button>
        </v-tooltip>
        <v-tooltip content="right-end 文字提示" placement="right-end">
            <v-button>右下</v-button>
        </v-tooltip>
    </div>
    <div class="bottom">
        <v-tooltip content="bottom-start 文字提示" placement="bottom-start">
            <v-button>下左</v-button>
        </v-tooltip>
        <v-tooltip content="bottom 文字提示" placement="bottom">
            <v-button>下边</v-button>
        </v-tooltip>
        <v-tooltip content="bottom-end 文字提示" placement="bottom-end">
            <v-button>下右</v-button>
            <div slot="content">
                <span style="color:#AAA">自定义提示内容</span>
            <div>
        </v-tooltip>
    </div>
</div>
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
        margin:5px;
        position:relative;
        display:inline-block;
    }
</style>
```
:::

::: demo

<summary>
  #### 延时
  设定延时时间 展示提示信息
</summary>

```html
<template>
<v-tooltip content="延时1秒展示" placement="top-start" :delay="delay">
    <v-button>延时展示</v-button>
</v-tooltip>
</template>
<script>
export default {
    data: function () {
        return {
            delay: 1000
        }
    },
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
| hide | tooptip由显示变为隐藏的回调函数 | Function() | -- |