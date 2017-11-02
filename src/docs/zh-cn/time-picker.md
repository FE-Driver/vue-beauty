<script>
  export default {
    data: ()=> ({
      value: '08:30:00'
    }),
    watch: {
      value(val){
        console.log(val)
      }
    },
    methods: {
        range(start, end) {
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledHours(h) {
            const hours = this.range(0, 60);
            hours.splice(20, 4);
            return hours.includes(h);
        },
        disabledMinutes(m) {
            return this.range(0, 31).includes(m);
        },
        disabledSeconds(s) {
            return this.range(30, 60).includes(s);
        }
    }
  }
</script>


# TimePicker 时间选择框

当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<v-time-picker></v-time-picker>
```
:::

::: demo
<summary>
  #### 三种大小
  三种大小的输入框，大的用在表单中，中的为默认。
</summary>

```html
<v-time-picker size="large"></v-time-picker>
<v-time-picker></v-time-picker>
<v-time-picker size="small"></v-time-picker>
```
:::

::: demo
<summary>
  #### 受控组件
  v-model 和 watch 需要配合使用。
</summary>

```html
<template>
  <v-time-picker v-model="value"></v-time-picker>
</template>

<script>
  export default {
    data: ()=> ({
      value: '08:30:00'
    }),
    watch: {
      value(val){
        console.log(val)
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 禁用
  禁用时间选择。
</summary>

```html
<v-time-picker disabled></v-time-picker>
```
:::

::: demo
<summary>
  #### 选择时分
  TimePicker 浮层中的列会随着`format`变化，当略去`format`中的某部分时，浮层中对应的列也会消失。
</summary>

```html
<v-time-picker format="HH:mm"></v-time-picker>
```
:::

::: demo
<summary>
  #### 禁止选项
  可以使用 `disabledHours` `disabledMinutes` `disabledSeconds` 组合禁止用户选择某个时间，配合`hideDisabledOptions`可以直接把不可选择的项隐藏。
</summary>

```html
<template>
  <v-time-picker :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></v-time-picker>
  <v-time-picker :disabled-hours="disabledHours" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds" hide-disabled-options></v-time-picker>
</template>

<script>
  export default {
    methods: {
        range(start, end) {
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledHours(h) {
            const hours = this.range(0, 60);
            hours.splice(20, 4);
            return hours.includes(h);
        },
        disabledMinutes(m) {
            return this.range(0, 31).includes(m);
        },
        disabledSeconds(s) {
            return this.range(30, 60).includes(s);
        }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 附加内容
  在 TimePicker 选择框底部显示自定义的内容。
</summary>

```html
<v-time-picker>
  <template slot="addon" slot-scope="props">
    <v-button size="small" type="primary" @click="props.panel.close()">OK</v-button>
  </template>
</v-time-picker>
```
:::

## API

### TimePicker Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value    | 默认时间 | string | - |
| format | 展示的时间格式 | string | HH:mm:ss |
| position | 下拉框的定位方式(absolute、fixed) | string | absolute |
| popupContainer | 下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | function | () => document.body |
| size | 控件大小（large、small） | string | - |
| disabled | 禁用全部操作 | boolean | false |
| disabledHours | 禁止选择部分小时选项 | function(hour) | - |
| disabledMinutes | 禁止选择部分分钟选项 | function(minite)	 | - |
| disabledSeconds    | 禁止选择部分秒选项	| function(second)	 | - |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |
| scopedSlot:addon | 选择框底部显示自定义的内容 | function | - |
