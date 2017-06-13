<script>
export default {
    data:()=> ({
      spinning:false
    })
}
</script>

# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码演示

::: demo

<summary>
  #### 基本
  一个简单的 loading 状态
</summary>

```html
<v-spin></v-spin>
```
:::

::: demo
<summary>
  #### 自定义描述文案
  自定义描述文案，指定的 tip 文案会直接代替 ...
</summary>


```html
<v-spin tip="正在读取数据.">
    <v-alert type="info" message="消息提示的文案"
      description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
    ></v-alert>
</v-spin>
```
:::


::: demo
<summary>
  #### 各种大小
  小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。
</summary>


```html
<v-spin size="small"></v-spin>
<v-spin></v-spin>
<v-spin size="large"></v-spin>
```
:::

::: demo
<summary>
  #### 卡片加载中
  可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。
</summary>


```html
<template>
    <v-spin :spinning="spinning" tip="加载中">
        <v-alert type="info" message="消息提示的文案" description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍">
        </v-alert>
    </v-spin>
    切换加载状态：<v-switch v-model="spinning"></v-switch>
</template>
<script>
export default {
   data: ()=> ({
       spinning:false
   })
}
<script>
```
:::

## API

### Spin Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| size | spin组件中点的大小，可选值为 small default large | string | default |
| spinning | 用于内嵌其他组件的模式，可以关闭 loading 效果 | boolean | true |
| tip | 自定义描述文案 | string | 无 |

