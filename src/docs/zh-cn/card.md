<script>
    export default {
        data: function() {
            return {
                loading: true,
                isShow:false
            }
        },
        methods: {
            onClick() {
                this.loading = !this.loading;
            },
            changeShow(){
                this.isShow = !this.isShow;
            },
        }
    }
</script>
<style>
    .demo-box.demo-alert .el-alert {
        margin: 20px 0 0;
    }

    .demo-box.demo-alert .el-alert:first-child {
        margin: 0;
    }
</style>

# Card 卡片

通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。   

## 代码演示

::: demo
<summary>
  #### 典型卡片
  包含标题、内容、操作区域。
</summary>

```html
<template>  
    <v-card title="Card title" @mouseleave.native="changeShow" @mouseenter.native="changeShow">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <div slot="extra" v-show="isShow">
            <v-button type="primary">编辑</v-button>
            <v-button type="danger">删除</v-button>
        </div>
    </v-card>
</template>
<script>
    export default {
        data: function() {
            return {
                isShow:false
            }
        },
        methods: {
            changeShow(){
                this.isShow = !this.isShow;
            },
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 简介卡片
  只包内容。
</summary>

```html
<template>  
    <v-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </v-card>
</template>
```
:::

::: demo
<summary>
  #### 无边框
  在灰色背景上使用无边框的卡片。
</summary>

```html
<template>  
    <v-card title="Card title" :bordered="false">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </v-card>
</template>
```
:::

::: demo
<summary>
  #### 更灵活的内容展示
  可以调整默认边距，设定宽度。
</summary>

```html
<template>  
    <v-card :body-style="{ padding: 0 }" style="width:240px;">
        <div class="custom-image">
            <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png">
        </div>
        <div class="custom-card">
            <h3>Europe Street beat</h3>
            <p>www.instagram.com</p>
        </div>
    </v-card>
</template>
```
:::

::: demo
<summary>
  #### 栅格卡片
  在系统概览页面常常和栅格进行配合。
</summary>

```html
<template>  
    <div class="ant-row-flex ant-row-flex-space-around">
        <v-card title="Card title" style="width:240px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </v-card>

        <v-card title="Card title" style="width:240px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </v-card>

        <v-card title="Card title" style="width:240px">
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </v-card>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 加载中状态
  当内容正在加载时，显示 loading 状态。
</summary>

```html
<template>  
    <v-card title="Card title" :loading="loading">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p> 
    </v-card>
    <p>
        <v-button type="primary" @click="onClick">切换loading状态</v-botton>
    </p>
</template>

<script>
    export default {
        data: function() {
            return {
                loading: true,
            }
        },
        methods: {
            onClick() {
                this.loading = !this.loading;
            }
        }
    }
</script>
```
:::

## API

### Card Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| title | 卡片标题 | String |  |
| slot:extra | 卡片右上角的操作区域 | slot node | 无 |
| bordered | 是否有边框 | Boolean | true | 
| bodyStyle | 内容区域自定义样式 | Object |  | 

