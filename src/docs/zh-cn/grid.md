<style scoped>
    .grid-demo .demo-row {
        background-image: linear-gradient(90deg, #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, transparent 95.83333333%);
        overflow: hidden;
        margin-bottom: 8px;
    }

    .grid-demo .ant-row-flex {
        background: #F5F5F5;
    }

    .grid-demo .ant-row > div,
    .grid-demo .ant-row-flex > div {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
    }

    .grid-demo .ant-row > div:not(.gutter-row),
    .grid-demo .ant-row-flex > div:not(.gutter-row) {
        background: #00A0E9;
        padding: 16px 0;
    }

    .grid-demo .ant-row > div:not(.gutter-row):nth-child(2n+1),
    .grid-demo .ant-row-flex > div:not(.gutter-row):nth-child(2n+1) {
        background: rgba(0, 160, 233, 0.7);
    }

    .grid-demo .ant-row .demo-col {
        text-align: center;
        padding: 30px 0;
        color: #fff;
        font-size: 18px;
        border: none;
        margin-top: 0;
        margin-bottom: 0;
    }

    .grid-demo .overview .ant-row .demo-col-1 {
        background: rgba(0, 160, 233, 0.7);
    }

    .grid-demo .overview .ant-row .demo-col-2 {
        background: rgba(0, 160, 233, 0.5);
    }

    .grid-demo .overview .ant-row .demo-col-3 {
        background: rgba(255, 255, 255, 0.2);
        color: #999;
    }

    .grid-demo .overview .ant-row .demo-col-4 {
        background: rgba(0, 160, 233, 0.6);
    }

    .grid-demo .overview .ant-row .demo-col-5 {
        background: rgba(255, 255, 255, 0.5);
        color: #999;
    }

    .grid-demo .height-100 {
        height: 100px;
        line-height: 100px;
    }

    .grid-demo .height-50 {
        height: 50px;
        line-height: 50px;
    }

    .grid-demo .height-120 {
        height: 120px;
        line-height: 120px;
    }

    .grid-demo .height-80 {
        height: 80px;
        line-height: 80px;
    }

    .grid-demo .gutter-example .ant-row > div {
        background: transparent;
        border: 0;
    }

    .grid-demo .gutter-box {
        background: #00A0E9;
        padding: 5px 0;
    }
</style>
<script>
    export default {
        data: function() {
            return {
                align: "top",
                index: 0,
                alignChoose: ["top", "middle", "bottom"],
                gutter: 0,
                colCount: 2,
                renderCode: '<v-row>\n' +
                            '    <v-col span="12"></v-col>\n' +
                            '    <v-col span="12"></v-col>\n' +
                            '</v-row>',
                gutterOptions: [
                    {label: '0px', value: 0},
                    {label: '8px', value: 8},
                    {label: '16px', value: 16},
                    {label: '24px', value: 24},
                    {label: '32px', value: 32},
                    {label: '40px', value: 40},
                    {label: '48px', value: 48}
                ],
                colCountOptions: [
                    {label: '2', value: 2},
                    {label: '3', value: 3},
                    {label: '4', value: 4},
                    {label: '6', value: 6},
                    {label: '8', value: 8},
                    {label: '12', value: 12}
                ],
            }
        },
        methods: {
            alignChange() {
                this.index = (this.index + 1) % 3;
                this.align = this.alignChoose[this.index];
            },
            gutterChange(value) {
                this.refreshCode(value, this.colCount);
            },
            colCountChange(value) {
                this.refreshCode(this.gutter, value);
            },
            refreshCode(gutter, colCount) {
                this.renderCode = '';
                let gutterStr = "";
                if (gutter) gutterStr = ' gutter="' + gutter + '"';
                this.renderCode += '<v-row' + gutterStr + '>\n';
                for (let n = 0; n < colCount; n++) {
                    this.renderCode += '    <v-col span="' + (24 / colCount) + '"></v-col>\n';
                }
                this.renderCode += '</v-row>';
            }
        }
    }
</script>

# Grid 栅格

24栅格系统。

## 栅格设计理念

在多数业务情况下，Ant Design需要在设计区域内解决大量信息收纳的问题，因此在12栅格系统的基础上，我们将整个设计建议区域按照24等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

::: demo
<summary>
  #### 示例
  示例。
</summary>

```html
<template>
    <div class="grid-demo">
        <div class="overview">
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-1" span="24">
                    100%
                </v-col>
            </v-row>
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-2" span="6">25%</v-col>
                <v-col class="demo-col demo-col-3" span="6">25%</v-col>
                <v-col class="demo-col demo-col-2" span="6">25%</v-col>
                <v-col class="demo-col demo-col-3" span="6">25%</v-col>
            </v-row>
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-4" span="8">33.33%</v-col>
                <v-col class="demo-col demo-col-5" span="8">33.33%</v-col>
                <v-col class="demo-col demo-col-4" span="8">33.33%</v-col>
            </v-row>
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-1" span="12">50%</v-col>
                <v-col class="demo-col demo-col-3" span="12">50%</v-col>
            </v-row>
            <v-row class="demo-row">
                <v-col class="demo-col demo-col-4" span="16">66.66%</v-col>
                <v-col class="demo-col demo-col-5" span="8">33.33%</v-col>
            </v-row>
        </div>
    </div>
</template>
```
:::

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

* 通过`row`在水平方向建立一组`column`（简写col）
* 你的内容应当放置于`col`内，并且，只有`col`可以作为`row`的直接元素
* 栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用`.col-8`来创建
* 如果一个`row`中的`col`总和超过 24，那么多余的`col`会作为一个整体另起一行排列

## Flex 布局

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。

## 代码演示

::: demo
<summary>
  #### 基本栅格
  从堆叠到水平排列。
  使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。
</summary>

```html
<template>
    <div class="grid-demo">
        <v-row>
            <v-col span="24">col-24</v-col>
        </v-row>
        <v-row>
            <v-col span="6">col-6</v-col>
            <v-col span="6">col-6</v-col>
            <v-col span="6">col-6</v-col>
            <v-col span="6">col-6</v-col>
        </v-row>
        <v-row>
            <v-col span="8">col-8</v-col>
            <v-col span="8">col-8</v-col>
            <v-col span="8">col-8</v-col>
        </v-row>
        <v-row>
            <v-col span="12">col-12</v-col>
            <v-col span="12">col-12</v-col>
        </v-row>

        <v-row class="demo-row">
            <v-col span="16">col-16</v-col>
            <v-col span="8">col-8</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 区块间隔
  栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔。
</summary>

```html
<template>
    <div class="grid-demo">
        <v-row :gutter="16">
            <v-col class="gutter-row" span="6">
                <div class="gutter-box">col-6</div>
            </v-col>
            <v-col class="gutter-row" span="6">
                <div class="gutter-box">col-6</div>
            </v-col>
            <v-col class="gutter-row" span="6">
                <div class="gutter-box">col-6</div>
            </v-col>
            <v-col class="gutter-row" span="6">
                <div class="gutter-box">col-6</div>
            </v-col>
        </v-row>
    </div>
</template>

<style>
    .grid-demo .gutter-example .ant-row > div {
        background: transparent;
        border: 0;
    }

    .grid-demo .gutter-box {
        background: #00A0E9;
        padding: 5px 0;
    }
</style>
```
:::

::: demo
<summary>
  #### 左右偏移
  使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。
</summary>

```html
<template>
    <div class="grid-demo">
        <v-row>
            <v-col span="8">col-8</v-col>
            <v-col span="8" offset="8">col-8</v-col>
        </v-row>
        <v-row>
            <v-col span="6" offset="6">col-6 col-offset-6</v-col>
            <v-col span="6" offset="6">col-6 col-offset-6</v-col>
        </v-row>
        <v-row>
            <v-col span="12" offset="6">col-12 col-offset-6</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 格栅排序
  列排序。
  通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。
</summary>

```html
<template>
    <div class="grid-demo">
        <v-row>
            <v-col span="18" push="6">col-18 col-push-6</v-col>
            <v-col span="6" pull="18">col-6 col-pull-18</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### Flex 布局
  Flex 布局基础。
  使用 `row-flex` 定义 `flex` 布局，其子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。
</summary>

```html
<template>
    <div class="grid-demo">
        <p>sub-element align left</p>
        <v-row type="flex" justify="start">
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element align center</p>
        <v-row type="flex" justify="center">
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element align right</p>
        <v-row type="flex" justify="end">
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element monospaced arrangement</p>
        <v-row type="flex" justify="space-between">
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
        </v-row>
        <p>sub-element align full</p>
        <v-row type="flex" justify="space-around">
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
            <v-col span="4">col-4</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### Flex 对齐
  Flex 子元素垂直对齐。
</summary>

```html
<template>
    <div class="grid-demo">
        <p>Align Top</p>
        <v-row type="flex" justify="center" align="top">
            <v-col span="4"><p class="height-100">col-4</p></v-col>
            <v-col span="4"><p class="height-50">col-4</p></v-col>
            <v-col span="4"><p class="height-120">col-4</p></v-col>
            <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
        <p>Align Center</p>
        <v-row type="flex" justify="space-around" align="middle">
            <v-col span="4"><p class="height-100">col-4</p></v-col>
            <v-col span="4"><p class="height-50">col-4</p></v-col>
            <v-col span="4"><p class="height-120">col-4</p></v-col>
            <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
        <p>Align Bottom</p>
        <v-row type="flex" justify="space-between" align="bottom">
            <v-col span="4"><p class="height-100">col-4</p></v-col>
            <v-col span="4"><p class="height-50">col-4</p></v-col>
            <v-col span="4"><p class="height-120">col-4</p></v-col>
            <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
        <p>Dynamically Align To {{ '"' + align + '"' }}</p>
        <p><v-button type="primary" @click="alignChange">改变Align</v-button></p>
        <v-row type="flex" justify="space-between" :align="align">
            <v-col span="4"><p class="height-100">col-4</p></v-col>
            <v-col span="4"><p class="height-50">col-4</p></v-col>
            <v-col span="4"><p class="height-120">col-4</p></v-col>
            <v-col span="4"><p class="height-80">col-4</p></v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                align: "top",
                index: 0,
                alignChoose: ["top", "middle", "bottom"]
            }
        },
        methods: {
            alignChange() {
                this.index = (this.index + 1) % 3;
                this.align = this.alignChoose[this.index];
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### Flex 排序
  通过 Flex 布局的 Order 来改变元素的排序。
</summary>

```html
<template>
    <div class="grid-demo">
        <p>Align Top</p>
        <v-row type="flex">
            <v-col span="6" order="4">1 col-order-4</v-col>
            <v-col span="6" order="3">2 col-order-3</v-col>
            <v-col span="6" order="2">3 col-order-2</v-col>
            <v-col span="6" order="1">4 col-order-1</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 响应式布局
  参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设四个响应尺寸：`xs` `sm` `md` `lg`。
</summary>

```html
<template>
    <div class="grid-demo">
        <v-row type="flex">
            <v-col :xs="2" :sm="4" :md="6" :lg="8">col</v-col>
            <v-col :xs="20" :sm="16" :md="12" :lg="8">col</v-col>
            <v-col :xs="2" :sm="4" :md="6" :lg="8">col</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 其他属性的响应式
  `span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` 属性中来使用。其中 `:xs="6"` 相当于 `:xs="{ span: 6 }"`。
</summary>

```html
<template>
    <div class="grid-demo">
        <v-row type="flex">
            <v-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</v-col>
            <v-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</v-col>
            <v-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">col</v-col>
        </v-row>
        <v-row type="flex">
            <v-col :xs="{ span: 6, order: 1 }" :lg="{ span: 8, order: 3 }">col-1</v-col>
            <v-col :xs="{ span: 12, order: 2 }" :lg="{ span: 8, order: 2 }">col-2</v-col>
            <v-col :xs="{ span: 6, order: 3 }" :lg="{ span: 8, order: 1 }">col-3</v-col>
        </v-row>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 格栅配置器
  可以简单配置几种等分栅格和间距。
</summary>

```html
<template>
    <div class="grid-demo">
        Gutter: <v-select size="lg" style="width: 200px;" :data="gutterOptions" v-model="gutter" @change="gutterChange"></v-select>
        Column Count: <v-select size="lg" style="width: 200px;" :data="colCountOptions" v-model="colCount" @change="colCountChange"></v-select>
        <v-row :gutter="gutter">
            <v-col v-for="n in colCount" :span="24/colCount" :key="n" class="gutter-row" >
                <div class="gutter-box">Column</div>
            </v-col>
        </v-row>
    </div>
    <div><pre>{{ renderCode }}</pre></div>
</template>

<script>
    export default {
        data: function() {
            return {
                gutter: 0,
                colCount: 2,
                renderCode: '<v-row>\n' +
                            '    <v-col span="12"></v-col>\n' +
                            '    <v-col span="12"></v-col>\n' +
                            '</v-row>',
                gutterOptions: [
                    {label: '0px', value: 0},
                    {label: '8px', value: 8},
                    {label: '16px', value: 16},
                    {label: '24px', value: 24},
                    {label: '32px', value: 32},
                    {label: '40px', value: 40},
                    {label: '48px', value: 48}
                ],
                colCountOptions: [
                    {label: '2', value: 2},
                    {label: '3', value: 3},
                    {label: '4', value: 4},
                    {label: '6', value: 6},
                    {label: '8', value: 8},
                    {label: '12', value: 12}
                ],
            }
        },
        methods: {
            gutterChange(value) {
                this.refreshCode(value, this.colCount);
            },
            colCountChange(value) {
                this.refreshCode(this.gutter, value);
            },
            refreshCode(gutter, colCount) {
                this.renderCode = '';
                let gutterStr = "";
                if (gutter) gutterStr = ' gutter="' + gutter + '"';
                this.renderCode += '<v-row' + gutterStr + '>\n';
                for (let n = 0; n < colCount; n++) {
                    this.renderCode += '    <v-col span="' + (24 / colCount) + '"></v-col>\n';
                }
                this.renderCode += '</v-row>';
            }
        }
    }
</script>
```
:::

## API

### Row Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| gutter    | 栅格间隔 | Number | 0 |
| type | 布局模式，可选`flex`，现代浏览器下有效 | String | - |
| align | flex 布局下的垂直对齐方式：top middle bottom   | String | - |
| justify | flex 布局下的水平排列方式：start end center space-around space-between | String | start |

### Col Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| span    | 栅格占位格数，为 0 时相当于 display: none | Number | - |
| order | 栅格顺序，flex 布局模式下有效 | Number | 0 |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格   | Number | 0 |
| push | 栅格向右移动格数 | Number | 0 |
| pull | 栅格向左移动格数 | Number | 0 |
| xs | <768px 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| sm | ≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| md | ≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
| lg | ≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number\|Object | - |
