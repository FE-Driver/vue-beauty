<style scoped>
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
        methods: {
            confirm: function() {
                this.$message.info('点击了是');
            },
            cancel: function() {
                this.$message.info('点击了否');
            }
        }
    }
</script>

# Popconfirm 气泡确认框

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。

和 `confirm` 弹出的全屏居中模态对话框相比，交互形式更轻量。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <v-popconfirm  title="确定删除吗?" @confirm="confirm" @cancel="cancel">
      <a href="javascript:;">删除</a>
  </v-popconfirm>
</template>

<script>
    export default{
        methods: {
            confirm: function() {
                this.$message.info('点击了是');
            },
            cancel: function() {
                this.$message.info('点击了否');
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 国际化
  使用 `okText` 和 `cancelText` 自定义按钮文字。
</summary>

```html
<template>
  <v-popconfirm  title="Are you sure？" ok-text="Yes" cancel-text="No">
      <a href="javascript:;">Delete</a>
  </v-popconfirm>
</template>
```
:::

::: demo
<summary>
  #### 位置
  位置有十二个方向。
   <!--
  如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。
  -->
</summary>

```html
<template>
    <div>
        <div class="top">
            <v-popconfirm  title="确定删除吗?" placement="topLeft">
                <v-button>上左</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="top">
                <v-button>上边</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="topRight">
                <v-button>上右</v-button>
            </v-popconfirm>
        </div>
        <div class="left">
            <v-popconfirm  title="确定删除吗?" placement="leftTop">
                <v-button>左上</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="left">
                <v-button>左边</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="leftBottom">
                <v-button>左下</v-button>
            </v-popconfirm>
        </div>
        <div class="right">
            <v-popconfirm  title="确定删除吗?" placement="rightTop">
                <v-button>右上</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="right">
                <v-button>右边</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="rightBottom">
                <v-button>右下</v-button>
            </v-popconfirm>
        </div>
        <div class="bottom">
            <v-popconfirm  title="确定删除吗?" placement="bottomLeft">
                <v-button>下左</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="bottom">
                <v-button>下边</v-button>
            </v-popconfirm>
            <v-popconfirm  title="确定删除吗?" placement="bottomRight">
                <v-button>下右</v-button>
            </v-popconfirm>
        </div>
    </div>
</template>
<style scoped>
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

## API

### Popconfirm Props

| 参数      | 说明                                     | 类型          | 默认值 |
|-----------|-----------------------------------------|---------------|--------|
| title     | 确认框的描述                              | string        | -     |
| okText    | 确认按钮文字                              | string        | `确定`   |
| cancelText| 取消按钮文字                              | string        | `取消`   |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string     | `top`    |

### Popconfirm Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| confirm | 点击确认时触发的事件 | - |
| cancel | 点击取消时触发的事件 | - |

## 注意

请确保 `Popconfirm` 的子元素能接受 `onMouseEnter`、`onMouseLeave`、`onFocus`、`onClick` 事件。
