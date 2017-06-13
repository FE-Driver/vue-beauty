<style>
    #back-top-target {
        height: 400px;
        border: solid 1px #ddd;
        padding: 20px;
        margin: 20px;
        overflow: auto;
    }
    #back-top-target div {
        height: 280px;
    }
</style>
<script>
    export default {
        data: function() {
            return {
                styleObject: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(87, 197, 247)'
                },
                customStyle: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(10, 220, 80)'
                }
            }
        },
        methods: {
            handler() {
                console.log('噢');
            },
            getTarget() {
                return document.getElementById("back-top-target");
            }
         }
    }
</script>

# BackTop 回到顶部

返回页面顶部的操作按钮。


## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法
</summary>

```html
<template>
    向下滚动后，见右下角灰色按钮
    <v-back-top></v-back-top>
</template>
```
:::

::: demo
<summary>
  #### 自定义样式
  可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。
</summary>

```html
<template>
    向下滚动后，见右下角蓝色按钮
    <v-back-top style="bottom: 100px;" :visibility-height="600" @click.native="handler">
        <div :style="styleObject">UP</div>
    </v-back-top>
</template>
<script>
    export default {
        data: function() {
            return {
                styleObject: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(87, 197, 247)'
                }
            }
        },
        methods: {
            handler() {
                console.log('噢');
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义滚动事件的元素
  可以自定义回到顶部按钮要滚动的元素。
</summary>

```html
<template>
    <div style="position: relative;">
        <div id="back-top-target">
            <div>向下滚动后，见右下角绿色按钮</div>
            <div>向下滚动后，见右下角绿色按钮</div>
            <div>向下滚动后，见右下角绿色按钮</div>
            <div>向下滚动后，见右下角绿色按钮</div>
            <div>向下滚动后，见右下角绿色按钮t</div>
            <div>向下滚动后，见右下角绿色按钮</div>
        </div>
        <v-back-top style="position: absolute;margin-top: -100px;right: 80px;" :visibility-height="400" :target="getTarget">
            <div :style="customStyle">UP</div>
        </v-back-top>
    </div>
</template>
<style>
    #back-top-target {
        height: 400px;
        border: solid 1px #ddd;
        padding: 20px;
        margin: 20px;
        overflow: auto;
    }
    #back-top-target div {
        height: 280px;
    }
</style>

<script>
    export default {
        data: function() {
            return {
                customStyle: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(10, 220, 80)'
                }
            }
        },
        methods: {
            getTarget() {
                return document.getElementById("back-top-target");
            }
        }
    }
</script>
```
:::

## API

> 有默认样式，距离底部 `50px`，可覆盖。

> 自定义样式宽高不大于 40px * 40px。

### BackTop Props
| 参数        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| visibilityHeight    | 滚动高度达到此参数值才出现 `BackTop`   | number | 400        |
| target | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | Function | () => window |
