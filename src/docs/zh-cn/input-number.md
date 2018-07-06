<script>
export default {
    data() {
        return {
            autoFocus: true,
            value: 5,
            disabled: true
        }
    },
    methods: {
        _handleChange(value) {
            console.log('changed ', value)
        },
        _toggle() {
            this.disabled = !this.disabled
        }
    }
}
</script>

# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 组件演示

::: demo
<summary>
  #### 基本
  数字输入框。
</summary>

```html
<v-input-number :min="1" :max="1000" v-model="value" @change="_handleChange" :auto-focus="autoFocus"></v-input-number>
<script>
export default {
    data() {
        return {
            value: 5
        }
    },
    methods: {
        _handleChange(value) {
            console.log('changed ', value)
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 不可用
  点击按钮切换可用状态。
</summary>

```html
<template>
    <v-input-number :min="1" :max="10" :disabled="disabled" @change="_handleChange"></v-input-number>
    <br>
    <br>
    <v-button @click="_toggle" type="primary">Toggle disabled</v-button>
</template>
<script>
export default {
    data: function() {
        return {
            disabled: true
        }
    }
    methods: {
        _toggle() {
            this.disabled = !this.disabled
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 三种大小
  三种大小的数字输入框，当 size 分别为 large 和 small 时，输入框高度为 32px 和 22px ，默认高度为 28px。
</summary>

```html
<template>
    <v-input-number size="large" :min="1" :max="100000" @change="_handleChange"></v-input-number>
    <v-input-number :min="1" :max="100000" @change="_handleChange"></v-input-number>
    <v-input-number size="small" :min="1" :max="100000" @change="_handleChange"></v-input-number>
</template>
<script>
export default {
    methods: {
        _handleChange(value) {
            console.log('changed ', value)
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 小数
  和原生的数字输入框一样，value 的精度由 step 的小数位数决定。
</summary>

```html
<v-input-number :min="1" :max="10" :step="0.1" :precision="2"></v-input-number>
```

:::

## API

### Input Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| autoFocus    | 自动获取焦点 | boolean | false |
| min    | 最小值 | Number | -Infinity |
| max | 最大值 | Number | Infinity |
| value | 当前值 | Number | - |
| step    | 每次改变步数，可以为小数 | Number | 1 |
| precision    | 数值精度	 | Number | - |
| disabled | 禁用	 | Boolean | false |
| size | 输入框大小 | String | - |

### Input Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 变化回调事件 | value |
