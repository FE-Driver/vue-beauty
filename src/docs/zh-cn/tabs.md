# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

::: demo
<summary>
  #### 基本
  默认选中第一项。
</summary>

```html
<template>
  <v-tabs>
    <v-tabpane tab="Tab 1">我是内容1</v-tabpane>
    <v-tabpane tab="Tab 2">我是内容2</v-tabpane>
    <v-tabpane tab="Tab 3">我是内容3</v-tabpane>
    <v-tabpane tab="Tab 4">我是内容4</v-tabpane>
</v-tabs>
</template>

<script>
export default {
    methods: {
      onClose() {
        console.log('close');
      }
    }
  };
</script>
```
:::



## API

### Tag Props

| 完成度  | 属性                | 说明                                       | 类型                        | 默认值       |
| :--- | ------------------ | ---------------------------------------- | ------------------------- | :-------- |
|      | activeKey          | 当前激活 tab 面板的 key                         | string                    | 无         |
|      | defaultActiveKey   | 初始化选中面板的 key，如果没有设置 activeKey            | string                    | 第一个面板     |
| 已完成  | onChange           | 切换面板的回调                                  | Function                  | 无         |
| 已完成  | onTabClick         | tab 被点击的回调                               | Function                  | 无         |
|      | tabBarExtraContent | tab bar 上额外的元素                           | React.ReactNode           | 无         |
|      | type               | 页签的基本样式，可选 `line`、`card` `editable-card` 类型 | string                    | 'line'    |
|      | size               | 大小，提供 `default` 和 `small` 两种大小，仅当 `type="line"` 时生效。 | string                    | 'default' |
|      | tabPosition        | 页签位置，可选值有 `top` `right` `bottom` `left`  | string                    | 'top'     |
|      | onEdit             | 新增和删除页签的回调，在 `type="editable-card"` 时有效  | (targetKey, action): void | 无         |

### TabPane Props

| 参数   | 说明           | 类型     | 默认值  |
| ---- | ------------ | ------ | ---- |
| index  | 对应 activeKey | string | 无    |
| tab  | 选项卡头显示文字     | String | 无    |
