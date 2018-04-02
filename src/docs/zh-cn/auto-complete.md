<script>
    export default {
        data: () => ({
            options: [],
            results: [],
            dataSource: [
                { value: 'Burns Bay Road', label: 'Burns Bay Road' },
                { value: 'Downing Street', label: 'Downing Street' },
                { value: 'Wall Street', label: 'Wall Street'},
            ],
        }),
        methods: {
            select(value) {
                console.log('select', value)
            },
            search(value) {
                this.options = !value ? [] : [
                    { value: value, label: value},
                    { value: value + value, label: value + value},
                    { value: value + value + value, label: value + value + value},
                ]
            },
            handelSearch(value) {
                if(!value || value.indexOf('@') >=0 ){
                    this.results = [];
                } else {
                    this.results = ['gmail.com', '163.com', 'qq.com'].map(domain => ({value: `${value}@${domain}`, label: `${value}@${domain}`}));
                }
            },
            filter(val, item){
                const input = val.toLocaleUpperCase();
                return item.value.toUpperCase().indexOf(input) !== -1;
            },
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
    <div>
        <v-auto-complete :data="options" @select="select" @search="search" style="width:200px;"></v-auto-complete>
    </div>
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
                console.log('select value', value)
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义选项
  通过默认scopedSlot自定义选项显示内容
</summary>

```html
<template>
    <v-auto-complete @search="handelSearch" :data="results" style="width:200px;">
        <template slot-scope="{data}">
            {{data.label}}-1
        </template>
    </v-auto-complete>
</template>

<script>
    export default {
        data: ()=> ({
            results: [],
        }),
        methods: {
            handelSearch(value) {
                if(!value || value.indexOf('@') >=0 ){
                    this.results = [];
                } else {
                    this.results = ['gmail.com', '163.com', 'qq.com'].map(domain => ({value: `${value}@${domain}`, label: `${value}@${domain}`}));
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 不区分大小写
  不区分大小写的 AutoComplete
</summary>

```html
<template>
    <v-auto-complete :data="dataSource" :filter="filter" style="width:200px;"></v-auto-complete>
</template>

<script>
    export default {
        data: ()=> ({
            dataSource: [
                { value: 'Burns Bay Road', label: 'Burns Bay Road' },
                { value: 'Downing Street', label: 'Downing Street' },
                { value: 'Wall Street', label: 'Wall Street'},
            ],
        }),
        methods: {
            filter(val, item) {
                const input = val.toLocaleUpperCase();
                return item.value.toUpperCase().indexOf(input) !== -1;
            }
        }
    }
</script>
```
:::

## API

### AutoComplete Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value    | 指定默认选中的条目 | string/array | - |
| data    | 自动完成的数据源 | array | [] |
| placeholder    | 输入框提示 | string | - |
| filter    | 搜索过滤函数,返回Boolean | 搜索过滤函数,返回Boolean | - |

### Data Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| label    | 选项的标签或组名(作为标签时可通过select的label属性修改；作为组名时只支持一级,可通过select的groupLabel属性修改) | string | - |
| disabled | 是否禁用	 | boolean | false |
| options | 分组的数据	| array | - |

### AutoComplete Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| search     | 搜索补全项的时候调用  | value |
| select     | 被选中时调用，参数为选中项的 value 值  | value |
| blur      | blur事件   | - |
| focus      | focus事件   | - |