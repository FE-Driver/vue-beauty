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
  <v-breadcrumb-item>Application Center</v-breadcrumb-item>
  <v-breadcrumb-item>Application List</v-breadcrumb-item>
  <v-breadcrumb-item>An Application</v-breadcrumb-item>
</v-breadcrumb>
```

:::

::: demo

<summary>
  #### 可点击的
  用 `href`，会渲染为a标签，您也可以显式地使用 `<router-link>`
</summary>

```html
<v-breadcrumb>
  <v-breadcrumb-item>
	  <a href="#">Home </a>
  </v-breadcrumb-item>
  <v-breadcrumb-item >
	  <a href="#">Application Center</a>
  </v-breadcrumb-item>
  <v-breadcrumb-item >
	  <a href="#">Application List</a>
  </v-breadcrumb-item>
  <v-breadcrumb-item>
	  <a href="#">An Application</a>
  </v-breadcrumb-item>
</v-breadcrumb>
```

:::

::: demo

<summary>
  #### 带图标的
  将图标组件放在文字前面。
</summary>

```html
<v-breadcrumb>
  <v-breadcrumb-item >
      <v-icon type="home"></v-icon>
  </v-breadcrumb-item>
  <v-breadcrumb-item >
      <v-icon type="user"></v-icon>Application List
  </v-breadcrumb-item>
  <v-breadcrumb-item >Application </v-breadcrumb-item>
</v-breadcrumb>
```

:::

::: demo

<summary>
  #### 分隔符
  使用 `separator=">"` 可以自定义分隔符。
</summary>

```html
<v-breadcrumb separator=">">
  <v-breadcrumb-item>Home</v-breadcrumb-item>
  <v-breadcrumb-item href="https://www.baidu.com">Application Center</v-breadcrumb-item>
  <v-breadcrumb-item >Application List</v-breadcrumb-item>
  <v-breadcrumb-item >An Application</v-breadcrumb-item>
</v-breadcrumb>
```

:::

## API

### Breadcrumb Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| separator | 分隔符自定义 | string | '/' |
| href | 跳转地址 | string | - |
