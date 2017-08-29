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
    .box-demo .ant-tooltip-wrapper {
        margin-right: 8px;
        margin-bottom: 8px;
    }
</style>
<script>

export default {
    methods: {
        popperHide() {
            console.log('tooltip hide');
        }
    }
}
</script>

# Tooltip 文字提示
简单的文字提示气泡框

## 何时使用
鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。
可用来代替系统默认的 `title` 提示，提供一个`按钮/文字/操作`的文案解释。

## 代码演示

::: demo

<summary>
  #### 基本
  最简单的用法
</summary>

```html
<v-tooltip content="提示文本">
    <span>鼠标一上来就会出现</span>
</v-tooltip>
```
:::

::: demo

<summary>
  #### 位置
  位置有 12 个方向。
</summary>

```html
<template>
    <div class="box">
        <div class="top">
            <v-tooltip placement="topLeft" controlled>
                <v-button>上左</v-button>
                <template slot="content">
                    <p>topLeft 文字提示</p>
                    <p>topLeft 文字提示</p>
                    <p>topLeft 文字提示</p>
                </template>
            </v-tooltip>
            <v-tooltip content="top 文字提示,初始可见" placement="top" init-visible>
                <v-button>上边</v-button>
            </v-tooltip>
            <v-tooltip content="topRight 不可用tooltip" placement="topRight" disabled>
                <v-button>上右</v-button>
            </v-tooltip>
        </div>
        <div class="left">
            <v-tooltip content="leftTop 文字提示" placement="leftTop" @hide="popperHide">
                <v-button>左上</v-button>
            </v-tooltip>
            <v-tooltip content="left 文字提示" placement="left">
                <v-button>左边</v-button>
            </v-tooltip>
            <v-tooltip content="leftBottom 文字提示" placement="leftBottom">
                <v-button>左下</v-button>
            </v-tooltip>
        </div>

        <div class="right">
            <v-tooltip content="rightTop 文字提示" placement="rightTop">
                <v-button>右上</v-button>
            </v-tooltip>
            <v-tooltip content="right 文字提示" placement="right">
                <v-button>右边</v-button>
            </v-tooltip>
            <v-tooltip content="rightBottom 文字提示" placement="rightBottom">
                <v-button>右下</v-button>
            </v-tooltip>
        </div>
        <div class="bottom">
            <v-tooltip content="bottomLeft 文字提示" placement="bottomLeft">
                <v-button>下左</v-button>
            </v-tooltip>
            <v-tooltip content="bottom 文字提示" placement="bottom">
                <v-button>下边</v-button>
            </v-tooltip>
            <v-tooltip content="bottomRight 文字提示" placement="bottomRight">
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
    methods: {
        popperHide() {
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
    .box-demo .ant-tooltip-wrapper {
        margin-right: 8px;
        margin-bottom: 8px;
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
<v-tooltip content="延时1秒展示" placement="topLeft" :delay="1000">
    <v-button>延时展示</v-button>
</v-tooltip>
```
:::

## API

### Tooltip Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | String     | top    |
| content | 显示的内容 | String/Number	 |  - |
| content:slot | 显示的内容 | Slot Node	 |  - |
| init-visible | 初始状态是否显示tooltip | Boolean |  false |
| delay | 鼠标移入后延时多少才显示tooltip,单位:毫秒| Number |  0 |
| disabled | tooltip是否可用 | Boolean |  false |
| controlled | 保持tooltop显示 | Boolean |  false |

### Tooltip Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| hide | tooptip由显示变为隐藏时触发 | - |
