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
<v-tag>标签</v-tag>
<v-tag closable @close="onClose">标签</v-tag>

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
  基本标签可以通过`color`设置背景色，以提供视觉暗示区分不同目的的标签。
</summary>

```html
<v-tag color="blue">blue</v-tag>
<v-tag color="green">green</v-tag>
<v-tag color="yellow">yellow</v-tag>
<v-tag color="red">red</v-tag>
<v-tag color="#87d068">#87d068</v-tag>
```
:::

## API
### Tag props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| color    | 标签背景色 | string | - |
| closable | 标签是否可以关闭 | boolean | false |

### Tag Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| close    | 关闭时触发 | - |