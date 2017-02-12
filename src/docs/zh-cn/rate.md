<script>
  export default {
      data: function() {
          return {
              star1: 1,
              star2: 6,
          };
      },
      methods: {
          _change(val) {
              console.log('selected:' + val);
          }
      }
  }
</script>


# Rate 评分

评分组件。

## 何时使用

对评价进行展示。
对事物进行快速的评级操作。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
    <v-rate v-model="star1" @change="_change"></v-rate>
</template>

<script>
    export default {
        data: function() {
            return {
                star1: 1
            };
        },
        methods: {
            _change(val) {
                console.log('selected:' + val);
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 半星
  支持选中半星。
</summary>

```html
<template>
    <v-rate allow-half :value='2.5'></v-rate>
</template>
```
:::

::: demo
<summary>
  #### 文案展示
  给评分组件加上文案展示。
</summary>

```html
<template>
    <v-rate v-model='star2' @change="_change">
        <span class='ant-rate-text'>{{ star2 }}星</span>
    </v-rate>
</template>

<script>
    export default {
        data: function() {
            return {
                star2: 6
            };
        },
        methods: {
            _change(val) {
                console.log('selected:' + val);
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 只读
  只读，无法进行鼠标交互。
</summary>

```html
<template>
    <v-rate disabled :value='2'></v-brate>
</template>
```
:::

## API

### Rate Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| count    | star 总数 | Number | 5 |
| value | 当前值，如果输入值超过 count 会被强制转换成count值 | Number | 0 |
| allowHalf | 是否允许半选   | Boolean | false |
| disabled | 只读，无法进行交互 | Boolean | false |

### Rate Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 选择的值发生变化的时候触发 | value |

