<style>
    .ant-badge:not(.ant-badge-status) {
        margin-right: 16px;
    }
    .head-example {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
    }
</style>
<script>
    export default {
        data:()=> ({
            counter: 5,
            //overflowCount:99,
            show:true
        }),
        methods: {
            decline() {
                this.counter--;
            },
            increase() {
                this.counter++;
            }
        }
    }
</script>
# Badge 徽标数
图标右上角的圆形徽标数字。

## 何时使用
一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 组件演示
::: demo
<summary>
 #### 基本
 简单的徽章展示。
</summary>

```html

<template>
    <v-badge :count="5">
        <a href="#" class="head-example" />
    </v-badge>
</template>
<style>
    .ant-badge:not(.ant-badge-status) {
        margin-right: 16px;
    }
    .head-example {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
    }
</style>

```
:::

::: demo
<summary>
 #### 独立使用
 不包裹任何元素即是独立使用，可自定样式展现。
 在右上角的 badge 则限定为红色。
</summary>

```html
<v-badge :count="25"></v-badge>
<v-badge :count="4" :count-style="{ 'background-color': '#fff', 'color': '#999', 'box-shadow': '0 0 0 1px #d9d9d9 inset',}"></v-badge>
<v-badge :count="109" :count-style="{ 'background-color': '#87d068'}"></v-badge>
```
:::

::: demo
<summary>
  #### 封顶数字
  超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。
</summary>

```html

<template>
    <v-badge :count="99">
        <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="100">
        <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="99" :overflow-count="10">
        <a href="#" class="head-example" />
    </v-badge>
    <v-badge :count="1000" :overflow-count="999">
        <a href="#" class="head-example" />
    </v-badge>
</template>
<style>
    .ant-badge:not(.ant-badge-status) {
        margin-right: 16px;
    }
    .head-example {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
    }
</style>

```
:::

::: demo
<summary>
 #### 讨嫌的小红点
 没有具体的数字。
</summary>

```html
<v-badge dot>
    <v-icon type="notification" />
</v-badge>
<v-badge dot>
    <a href="#">Link something</a>
</v-badge>
```
:::

::: demo
<summary>
 #### 可点击
 用 a 标签进行包裹即可。
</summary>

```html
<template>
    <a href="#">
        <v-badge :count="5">
            <span class="head-example" />
        </v-badge>
    </a>
</template>
<style>
    .ant-badge:not(.ant-badge-status) {
        margin-right: 16px;
    }
    .head-example {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
    }
</style>
```
:::

::: demo

<summary>
 #### 动态
 展示动态变化的效果。
</summary>

```html
<template>
    <div>
        <div>
          <v-badge :count="counter">
            <a href="#" class="head-example" />
          </v-badge>
          <v-button-group>
            <v-button @click="decline">
              <v-icon type="minus" />
            </v-button>
            <v-button @click="increase">
              <v-icon type="plus" />
            </v-button>
          </v-button-group>
        </div>
        <div style="margin-top: 10px">
          <v-badge :dot="show">
            <a href="#" class="head-example" />
          </v-badge>
          <v-switch v-model="show"/>
        </div>
    </div>
</template>
<script>
    export default {
        data:()=> ({
            counter: 5,
            show:true
        }),
        methods: {
            decline() {
                this.counter--;
            },
            increase() {
                this.counter++;
            }
        }
    }
</script>
<style>
    .ant-badge:not(.ant-badge-status) {
        margin-right: 16px;
    }
    .head-example {
        width: 42px;
        height: 42px;
        border-radius: 6px;
        background: #eee;
        display: inline-block;
    }
</style>
```
:::

::: demo

<summary>
 #### 状态点
 用于表示状态的小圆点。
</summary>

```html
<v-badge status="success"></v-badge>
<v-badge status="error"></v-badge>
<v-badge status="default"></v-badge>
<v-badge status="processing"></v-badge>
<v-badge status="warning"></v-badge>
<br />
<v-badge status="success" text="Success"></v-badge>
<br/>
<v-badge status="error" text="Error"></v-badge>
<br />
<v-badge status="default" text="Default"></v-badge>
<br />
<v-badge status="processing" text="Processing"></v-badge>
<br />
<v-badge status="warning" text="Warning"></v-badge>   
</template>
```
:::

## API

### Badge Props

|参数         |  说明  |  类型  |  默认值  |
|----------|-----------------------------------------------------------------|-------|-----|-------|
|count     |展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏|number|   0  |
|overflowCount| 展示封顶的数字值    |number|  99     |
|dot       |不展示数字，只有一个小红点   |boolean|  false |
|countStyle   | 设置count的样式  |object|   - |
|status    |设置 badge 为状态点('success'、'processing'、'default'、'error'、'warning')   |string| - |
|text      |在设置了 status 的前提下有效，设置状态点的文本   |string |  -  |
