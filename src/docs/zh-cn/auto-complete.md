<script>
    export default {
        data: () => ({
            options: [],
        }),
        methods: {
            select(value) {
                console.log('select', value)
            },
            search(value) {
                this.options = [
                    { value: value, label: value},
                    { value: value + value, label: value + value},
                    { value: value + value + value, label: value + value + value},
                ]
            }
        }
    }
</script>


# AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

需要自动完成时。

## 代码演示

::: demo
<summary>
  #### 基本
  基本使用。
</summary>

```html
<template>
    <v-auto-complete :data="options" @select="select" @search="search"></v-auto-complete>
</template>

<script>
    export default {
        data: ()=> ({
            options: [],
        }),
        methods: {
            search(val) {
                this.options = [{
                    value: value,
                    label: value
                }, {
                    value: value + value,
                    label: value + value
                }, {
                    value: value + value + value,
                    label: value + value + value
                }];
            },
            select(value) {
                console.log('select', value)
            }
        }
    }
</script>
```
:::

## API

### Select Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| data    | 自动完成的数据源 | array | [] |

### Select Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| search     | 搜索补全项的时候调用  | value |
| select     | 被选中时调用，参数为选中项的 value 值  | value |