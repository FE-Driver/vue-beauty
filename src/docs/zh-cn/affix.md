<script>
export default {
    methods: {
        onChange: affixed => console.log(affixed)
    }
}
</script>

# Affix 固钉

将页面元素钉在可视范围。

## 何时使用
- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <v-affix>
      <button type="button" class="ant-btn ant-btn-primary"><span>固定在顶部2</span></button>
  </v-affix><br>
  <v-affix :offset-bottom="0">
      <button type="button" class="ant-btn ant-btn-primary"><span>固定在底部</span></button>
  </v-affix>
</template>
```
:::

::: demo
<summary>
  #### 固定状态改变的事件
  可以获得是否固定的状态。
</summary>

```html
<template>
  <v-affix :offset-top="120" @change='onChange'>
      <button type="button" class="ant-btn"><span>固定在距离顶部 120px 的位置</span></button>
  </v-affix>
</template>

<script>
export default {
    methods: {
        onChange: affixed => console.log(affixed)
    }
}
</script>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| offsetTop    | 距离窗口顶部达到指定偏移量后触发 | Number | - |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | Number | - |

### Affix Events
| 参数        | 说明           | 回调参数               |
|------------|----------------|-------------------|
| change | 固定状态改变时触发的事件 | affixed |
