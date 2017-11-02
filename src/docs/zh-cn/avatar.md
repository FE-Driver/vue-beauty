<style scoped>
.box-demo .ant-avatar {
    margin-right: 16px;
}
</style>

# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

::: demo
<summary>
  #### 基本
  头像有三种尺寸，两种形状可选。
</summary>

```html
<template>
<div>
    <v-avatar size="large" icon="user"></v-avatar>
    <v-avatar icon="user"></v-avatar>
    <v-avatar size="small" icon="user"></v-avatar>
</div>
<div>
    <v-avatar shape="square" size="large" icon="user"></v-avatar>
    <v-avatar shape="square" icon="user"></v-avatar>
    <v-avatar shape="square" size="small" icon="user"></v-avatar>
</div>
</template>
```
:::

::: demo
<summary>
  #### 类型
  支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
</summary>

```html
<template>
<div>
    <v-avatar icon="user"></v-avatar>
    <v-avatar>U</v-avatar>
    <v-avatar>USER</v-avatar>
    <v-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></v-avatar>
    <v-avatar :style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">U</v-avatar>
    <v-avatar :style="{ backgroundColor: '#87d068' }" icon="user"></v-avatar>
</div>
</template>
```
:::

::: demo
<summary>
  #### 带徽标的头像
  通常用于消息提示
</summary>

```html
<template>
<v-badge :count=1><v-avatar shape="square" icon="user"></v-avatar></v-badge>
<v-badge dot><v-avatar shape="square" icon="user"></v-avatar></v-badge>
</template>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| icon    | 设置头像的图标类型，参考 `Icon` 组件 | String | - |
| shape | 指定头像的形状(square、circle)	 | String | circle |
| size    | 设置头像的大小(large、small、default) | String | default |
| src | 图片类头像的资源地址	 | String | - |
