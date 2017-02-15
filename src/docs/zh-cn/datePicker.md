<script>
export default {
    data:()=> ({
        date: '2015-12-06',
        rangeDate: ['2015-12-06','2016-12-06'],
        time: '2015-12-06 23:12',
        rangeTime: ['2015-12-06 23:12','2016-12-06 23:12']
    }),
    watch: {
        date(val){
            console.log(val)
        },
        rangeDate(val){
            console.log(val)
        }
    },
    methods: {
        confirm() {
            console.log('confirm')
        },
        change(time) {
            console.log(time)
        },
        rangeChange(startTime, endTime) {
            console.log(startTime, endTime)
        },
        range (start, end){
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledDate(current){
            return current && current.valueOf() < Date.now();
        },
        disabledTime(){
            return [{
                disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
                disabledMinutes: (m) => this.range(30, 60).includes(m)
            }]
        },
        disabledRangeTime(){
            return [{ 
                disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
                disabledMinutes: (m) => this.range(30, 60).includes(m)
            },{
                disabledHours: (h) => this.range(0, 60).splice(20, 4).includes(h),
                disabledMinutes: (m) => this.range(0, 31).includes(m)
            }]
        }
    }
}
</script>

## DatePicker 日期选择框

输入或选择日期的控件。

### 何时使用
当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

### 代码演示

::: demo
<summary>
  #### 基础
  最简单的用法，在浮层中可以选择或者输入日期
</summary>

```html
<template>                        
    <v-date-picker v-model="date" clearable @change="change"></v-date-picker>
    <v-date-picker v-model="rangeDate" range clearable @confirm="confirm" @change="rangeChange"></v-date-picker>
</template>
<script>
export default {
    data:()=> ({
        date: '2015-12-06'
        rangeDate: ['2015-12-06','2016-12-06']
    }),,
    watch: {
        date(val){
            console.log(val)
        },
        rangeDate(val){
            console.log(val)
        }
    }
    methods: {
        confirm() {
            console.log('confirm')
        },
        change(time) {
            console.log(time)
        },
        rangeChange(startTime, endTime) {
            console.log(startTime, endTime)
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 三种大小
  三种大小的输入框，若不设置，则为 `default`。
</summary>

```html
<template>                         
    <v-date-picker v-model="date" size="sm"></v-date-picker>
    <v-date-picker v-model="date"></v-date-picker>
    <v-date-picker v-model="rangeDate" range size="lg"></v-date-picker>
</template>
<script>
export default {
    data:()=> ({
        date: '2015-12-06'
        rangeDate: ['2015-12-06','2016-12-06']
    }),
    watch: {
        date(val){
            console.log(val)
        },
        rangeDate(val){
            console.log(val)
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 日期格式
  使用 `format` 属性，可以自定义日期显示格式。
</summary>

```html
<template>                        
    <v-date-picker v-model="date" format="yyyy/MM/dd"></v-date-picker>
    <v-date-picker range v-model="rangeDate" format="yyyy/MM/dd"></v-date-picker>
</template>
<script>
export default {
    data:()=> ({
        date: '2015-12-06'
        rangeDate: ['2015-12-06','2016-12-06']
    }),
    watch: {
        date(val){
            console.log(val)
        },
        rangeDate(val){
            console.log(val)
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 日期时间选择
  增加选择时间功能
</summary>

```html
<template>  
    <v-date-picker clearable show-time v-model="time"></v-date-picker>
    <v-date-picker range show-time v-model="rangeTime" clearable></v-date-picker>
</template>
<script>
export default {
    data:()=> ({
        time: '2015-12-06 23:12',
        rangeTime: ['2015-12-06 23:12','2016-12-06 23:12']
    })
}
</script>
```
:::

::: demo
<summary>
  #### 不可选用日期和时间
  可用 disabledDate 和 disabledTime 分别禁止选择部分日期和时间，其中 disabledTime 需要和 showTime 一起使用。
</summary>

```html
<template>                        
    <v-date-picker v-model="time" show-time :disabled-date="disabledDate" :disabled-time="disabledTime()"></v-date-picker>
    <v-date-picker v-model="rangeTime" range show-time :disabled-date="disabledDate" :disabled-time="disabledRangeTime()"></v-date-picker>
</template>
<script>
export default {
    data:()=> ({
        time: '2015-12-06 23:12',
        rangeTime: ['2015-12-06 23:12','2016-12-06 23:12']
    }),
    methods: {
        range (start, end){
            const result = [];
            for (let i = start; i < end; i++) {
                result.push(i);
            }
            return result;
        },
        disabledDate(current){
            return current && current.valueOf() < Date.now();
        },
        disabledTime(){
            return [{
                disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
                disabledMinutes: (m) => this.range(30, 60).includes(m)
            }]
        },
        disabledRangeTime(){
            return [{ 
                disabledHours: (h) => this.range(0, 24).splice(4, 20).includes(h),
                disabledMinutes: (m) => this.range(30, 60).includes(m)
            },{
                disabledHours: (h) => this.range(0, 60).splice(20, 4).includes(h),
                disabledMinutes: (m) => this.range(0, 31).includes(m)
            }]
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 禁用
  选择框的不可用状态。
</summary>

```html
<v-date-picker disabled></v-date-picker>
```
:::

## API
### DatePicker Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value  | 默认日期,当range为true时为数组[开始时间，结束时间] | string/array | - |
| style | 自定义输入框样式 | object | {width:'100px'} |
| size | 输入框大小，lg 高度为 32px，sm 为 22px，默认是 28px | string | - |
| placeholder  | 占位提示符 | string | 请选择日期 |
| position | 下拉框的定位方式(absolute、fixed) | string | absolute |
| popupContainer | 下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | function | () => document.body |
| range | 能否进行范围选择 | boolean | false |
| showTime  | 增加时间选择功能	 | boolean | false |
| maxRange | 选择最大范围限制,以天为单位（只有range为true的时候才起作用） | number | - |
| clearable | 是否显示清除按钮 | boolean | false |
| format  | 展示的日期格式 | string | yyyy-MM-dd |
| disabled | 禁用 | boolean | false |

### DatePicker Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 时间发生变化的时候触发 | time or (startTime, endTime) |
| confirm | 点击确定按钮时触发	 | - |