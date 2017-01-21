# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

+ 当系统拥有超过两级以上的层级结构时；
+ 当需要告知用户『你在哪里』时；
+ 当需要向上导航的功能时。

## 代码演示

::: demo

<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<v-breadcrumb>
  <v-breadcrumb-item>Home</v-breadcrumb-item>
  <v-breadcrumb-item href="">Application Center</v-breadcrumb-item>
  <v-breadcrumb-item href="">Application List</v-breadcrumb-item>
  <v-breadcrumb-item>An Application</v-breadcrumb-item>
</v-breadcrumb>
```

:::

::: demo

<summary>
  #### 带图标的
  图标放在文字前面。
</summary>

```html
<v-breadcrumb>
  <v-breadcrumb-item icon="home" href=""></v-breadcrumb-item>
  <v-breadcrumb-item icon="user" href="">Application List</v-breadcrumb-item>
  <v-breadcrumb-item href="">Application </v-breadcrumb-item>
</v-breadcrumb>
```

:::

::: demo

<summary>
  #### 分隔符
  使用 separator=">" 可以自定义分隔符。
</summary>

```html
<v-breadcrumb separator=">">
  <v-breadcrumb-item>Home</v-breadcrumb-item>
  <v-breadcrumb-item href="">Application Center</v-breadcrumb-item>
  <v-breadcrumb-item href="">Application List</v-breadcrumb-item>
  <v-breadcrumb-item href="">An Application</v-breadcrumb-item>
</v-breadcrumb>
```

:::

## API

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| href | 跳转地址 | String |  |
| separator | 分隔符自定义 | String | '/' |
| icon | 图标，已有的ant图标库中的图标名 | string |  |