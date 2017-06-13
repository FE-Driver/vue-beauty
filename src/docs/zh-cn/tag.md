<script>
  export default {
    methods: {
      onClose() {
        console.log('close');
      }
    }
  }
</script>


# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

::: demo
<summary>
  #### 基本
  基本标签的用法，可以通过添加`closable`变为可关闭标签。可关闭标签具有`close`事件。
</summary>

```html
<template>
  <v-tag>标签</v-tag>
  <v-tag closable @close="onClose">标签</v-tag>
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

::: demo
<summary>
  #### 多彩标签
  我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
</summary>

```html
<v-tag color="pink">pink</v-tag>
<v-tag color="red">red</v-tag>
<v-tag color="orange">orange</v-tag>
<v-tag color="yellow">yellow</v-tag>
<v-tag color="green">green</v-tag>
<v-tag color="cyan">cyan</v-tag>
<v-tag color="blue">blue</v-tag>
<v-tag color="purple">purple</v-tag>
<br><br>
<v-tag color="pink-inverse">pink-inverse</v-tag>
<v-tag color="red-inverse">red-inverse</v-tag>
<v-tag color="orange-inverse">orange-inverse</v-tag>
<v-tag color="yellow-inverse">yellow-inverse</v-tag>
<v-tag color="green-inverse">green-inverse</v-tag>
<v-tag color="cyan-inverse">cyan-inverse</v-tag>
<v-tag color="blue-inverse">blue-inverse</v-tag>
<v-tag color="purple-inverse">purple-inverse</v-tag>
<br><br>
<v-tag color="#f50">#f50</v-tag>
<v-tag color="#2db7f5">#2db7f5</v-tag>
<v-tag color="#87d068">#87d068</v-tag>
<v-tag color="#108ee9">#108ee9</v-tag>
```
:::

## API

### Tag Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| color    | 标签背景色 | string | - |
| closable | 标签是否可以关闭 | boolean | false |

### Tag Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| close    | 关闭时触发 | - |
