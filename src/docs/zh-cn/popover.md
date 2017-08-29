<script>
export default {
    data: () => ({
        visible: false,
        controlled: false,
    }),
}
</script>
<style>
#components-popover-demo-placement .ant-btn {
    width: 70px;
}
.box-demo .ant-popover-wrapper {
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>

# Popover 气泡卡片

点击/鼠标移入元素，弹出气泡式的卡片浮层。

## 何时使用
- 当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
- 和 `Tooltip` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法，浮层的大小由内容区域决定。
</summary>

```html
<v-popover title="Title">
    <v-button type="primary">Hover me</v-button>
    <div slot="content">
        <p>Content</P>
        <p>Content</P>
    </div>    
</v-popover>
```

:::

::: demo
<summary>
  #### 三种触发方式
  鼠标移入、聚集、点击。
</summary>

```html
<v-popover title="Title" trigger="hover">
    <v-button>Hover me</v-button>
    <div slot="content">
        <p>Content</P>
        <p>Content</P>
    </div>    
</v-popover>
<v-popover title="Title" trigger="focus">
    <v-button>Focus me</v-button>
    <div slot="content">
        <p>Content</P>
        <p>Content</P
    </div>    
</v-popover>
<v-popover title="Title" trigger="click">
    <v-button>Click me</v-button>
    <div slot="content">
        <p>Content</P>
        <p>Content</P>
    </div>    
</v-popover>
```

:::

::: demo
<summary>
  #### 保持显示
  使用controlled保持显示。
</summary>

```html
<template>
    <v-popover title="Title" trigger="hover" :controlled="controlled">
        <v-button>Hover me</v-button>
        <div slot="content">
            <p>Content</P>
            <p>Content</P>
        </div>
    </v-popover>
    <v-popover title="Title" trigger="focus" :controlled="controlled">
        <v-button>Focus me</v-button>
        <div slot="content">
            <p>Content</P>
            <p>Content</P
        </div>
    </v-popover>
    <v-popover title="Title" trigger="click" :controlled="controlled">
        <v-button>Click me</v-button>
        <div slot="content">
            <p>Content</P>
            <p>Content</P>
        </div>
    </v-popover>
    <v-button type="primary" @click="controlled = !controlled">设置controlled</v-button>
</template>
<script>
export default {
    data: () => ({
        controlled: false
    })
  }
</script>
```

:::

::: demo
<summary>
  #### 位置
  位置有十二个方向。
</summary>

```html
<div id="components-popover-demo-placement">
    <div style="margin-left: 70px; white-space: nowrap;">
        <v-popover placement="topLeft" title="Title" trigger="click">
            <v-button>TL</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="top" title="Title" trigger="click">
            <v-button>Top</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="topRight" title="Title" trigger="click">
            <v-button>TR</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
    </div>
    <div style="width: 70px; float: left;">
        <v-popover placement="leftTop" title="Title" trigger="click">
            <v-button>LT</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="left" title="Title" trigger="click">
            <v-button>L</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="leftBottom" title="Title" trigger="click">
            <v-button>LB</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
    </div>
    <div style="width: 70px; margin-left: 304px;">
        <v-popover placement="rightTop" title="Title" trigger="click">
            <v-button>RT</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="right" title="Title" trigger="click">
            <v-button>R</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="rightBottom" title="Title" trigger="click">
            <v-button>RB</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
    </div>
    <div style="margin-left: 70px; clear: both; white-space: nowrap;">
        <v-popover placement="bottomLeft" title="Title" trigger="click">
            <v-button>BL</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="bottom" title="Title" trigger="click">
            <v-button>B</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
        <v-popover placement="bottomRight" title="Title" trigger="click">
            <v-button>BR</v-button>
            <div slot="content">
                <p>Content</P>
                <p>Content</P>
            </div> 
        </v-popover>
    </div>
</div>
```

:::

::: demo
<summary>
  #### 从浮层内关闭
  使用 `visible` 属性控制浮层显示。
</summary>

```html
<template>   
    <v-popover v-model="visible" title="Title" trigger="click">
        <v-button type="primary">Click me</v-button>
        <a slot="content" @click="visible = false">Close</a>    
    </v-popover>
</template>
<script>
export default {
    data: () => ({
        visible: false
    })
  }
</script>
```

:::

## API

## Popover Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| init-visible    | 初始状态是否显示popover | Boolean | false |
| title    | 卡片标题 | String | - |
| placement | 气泡框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | String | top |
| trigger | 触发行为，可选 `hover/focus/click` | String | hover |
| overlay-style | 卡片样式 | String/Object | - |
| controlled | 保持popover显示 | Boolean | false |
| title:slot | 卡片标题，优先级高于title prop | Slot Node | - |
| content:slot | 卡片内容 | Slot Node | - |

### Popover Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | visible发生变化时触发 | visible |
