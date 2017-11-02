<script>
    export default {
        data: () => ({
            options: [{
                value: '1',
                label: 'lady'
            }, {
                value: '2',
                label: '小强',
                disabled: true
            }, {
                value: '3',
                label: '小明'
            }],
            value: '3',
            groupOpt: [{
                label: '重庆',
                options: [{
                    value: 'lp',
                    label: '梁平'
                }, {
                    value: 'wz',
                    label: '万州',
                    disabled: true
                }]
            }, {
                label: '四川',
                options: [{
                    value: 'cd',
                    label: '成都'
                }, {
                    value: 'dz',
                    label: '达州'
                }]
            }],
            list: [],
            states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"],
            loading: false,
            loading2: false,
            remoteOption: []
        }),
        watch: {
            value(val){
                console.log(val)
            }
        },
        mounted(){
            this.list = this.states.map(item => {
                return {value: item, label: item};
            });
        },
        methods: {
            change(val) {
                console.log(val)
            },
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.remoteOption = this.list.filter(item => {
                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.remoteOption = [];
                }
            },
            remoteMethod2(query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        this.remoteOption = this.list.filter(item => {
                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.remoteOption = [];
                }
            }
        }
    }
</script>


# Select 选择器

类似 Select2 的选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

::: demo
<summary>
  #### 基本
  基本使用。
</summary>

```html
<template>
    <v-select placeholder="请选择人员" style="width: 120px;" :data="options" @change="change"></v-select>
    <v-select placement="top" style="width: 120px;" :data="options" v-model="value"></v-select>
    <v-select disabled style="width: 120px;"></v-select>
</template>

<script>
    export default {
        data: ()=> ({
            options: [{
                value: '1',
                label: 'lady'
            }, {
                value: '2',
                label: '小强',
                disabled: true
            }, {
                value: '3',
                label: '小明'
            }],
            value: '3'
        }),
        watch: {
            value(val){
                console.log(val)
            }
        },
        methods: {
            change(val) {
                console.log(val)
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
    <v-select style="width: 100%" :data="options" v-model="value">
        <template slot-scope="{data}">
            {{data.label}}-{{data.value}}
        </template>
    </v-select>
</template>

<script>
    export default {
        data: ()=> ({
            options: [{
                value: '1',
                label: 'lady'
            }, {
                value: '2',
                label: '小强',
                disabled: true
            }, {
                value: '3',
                label: '小明'
            }],
            value: '3'
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
  #### 三种大小
  三种大小的选择框，当 size 分别为`lg`和`sm`时，输入框高度为`32px`和`22px`，默认高度为`28px`
</summary>

```html
<template>
    <v-select size="lg" style="width: 200px;" :data="options" v-model="value"></v-select>
    <v-select style="width: 200px;" :data="options" v-model="value"></v-select>
    <v-select size="sm" style="width: 200px;" :data="options" v-model="value"></v-select>
</template>

<script>
    export default {
        data: ()=> ({
            options: [{
                value: '1',
                label: 'lady'
            }, {
                value: '2',
                label: '小强',
                disabled: true
            }, {
                value: '3',
                label: '小明'
            }],
            value: '3'
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
  #### 多选
  多选，从已有条目中选择（scroll the menu）
</summary>

```html
<template>
    <v-select style="width: 100%;" multiple :data="options" :value="['3']"></v-select>
</template>

<script>
    export default {
        data: ()=> ({
            options: [{
                value: '1',
                label: 'lady'
            }, {
                value: '2',
                label: '小强',
                disabled: true
            }, {
                value: '3',
                label: '小明'
            }]
        })
    }
</script>
```
:::

::: demo
<summary>
  #### 带搜索框
  展开后可对选项进行搜索。
</summary>

```html
<template>
    <v-select search style="width: 120px;" :data="options"></v-select>
    <br><br>
    <v-select search multiple style="width: 100%" :data="options"></v-select>
</template>

<script>
     export default {
         data: ()=> ({
             options: [{
                 value: '1',
                 label: 'lady'
             }, {
                 value: '2',
                 label: '小强',
                 disabled: true
             }, {
                 value: '3',
                 label: '小明'
             }]
         })
     }
</script>
```
:::

::: demo
<summary>
  #### 分组
  用嵌套的数据结构进行选项分组。
</summary>

```html
<template>
    <v-select style="width: 200px" :data="groupOpt" :value="'lp'"></v-select>
    <v-select style="width: 200px" multiple :data="groupOpt" :value="['lp']"></v-select>
</template>

<script>
    export default {
        data: ()=> ({
            groupOpt: [{
                label: '重庆',
                options: [{
                    value: 'lp',
                    label: '梁平'
                }, {
                    value: 'wz',
                    label: '万州',
                    disabled: true
                }]
            }, {
                label: '四川',
                options: [{
                    value: 'cd',
                    label: '成都'
                }, {
                    value: 'dz',
                    label: '达州'
                }]
            }]
        })
    }
</script>
```
:::


::: demo
<summary>
  #### 标签
  tags select，随意输入的内容（scroll the menu）。
</summary>

```html
<template>
    <v-select tags style="width: 120px;" :data="options" ></v-select>
    
</template>

<script>
     export default {
         data: ()=> ({
            xxx:'ff',
             options: [{
                 value: '1',
                 label: 'lady'
             }, {
                 value: '2',
                 label: '小强',
                 disabled: true
             }, {
                 value: '3',
                 label: '小明'
             }]
         })
     }
</script>
```
:::


::: demo
<summary>
  #### 远程搜索
  从服务器搜索数据，输入关键字进行查找
</summary>

```html
<template>
    <v-select style="width: 200px" search :loading="loading" :remote-method="remoteMethod" :data="remoteOption"></v-select>
    <br><br>
    <v-select style="width: 100%" search multiple :loading="loading2" :remote-method="remoteMethod2" :data="remoteOption"></v-select>
</template>

<script>
    export default {
        data: ()=> ({
            list: [],
            states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"],
            loading: false,
            loading2: false,
            remoteOption: []
        }),
        mounted(){
            this.list = this.states.map(item => {
                return { value: item, label: item };
            });
        },
        methods: {
            remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    setTimeout(() => {
                        this.loading = false;
                        this.remoteOption = this.list.filter(item => {
                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.remoteOption = [];
                }
            },
            remoteMethod2(query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        this.remoteOption = this.list.filter(item => {
                            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } else {
                    this.remoteOption = [];
                }
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
| value    | 指定默认选中的条目 | string/array | - |
| default:scopedSlot | 自定义下拉框选项内容,传入的参数：data | slot node | - |
| clue | 选项的value的字段名 | string | value |
| label | 选项显示的文本的字段名 | string | label |
| groupLabel | 分组title的字段名 | string | label |
| data | 下拉框的数据 | array | [] |
| multiple | 是否支持多选 | boolean | false |
| notFoundContent | 当下拉列表为空时显示的内容 | string | 没有找到 |
| placement | 下拉框出现的位置(top、bottom) | string | bottom |
| search    | 是否可以搜索 | boolean | false |
| maxHeight | 下拉框的最大高度 | number | 300 |
| disabled | 控件是否禁用 | boolean | false |
| allowClear | 支持清除, 单选模式有效 | boolean | true |
| placeholder | 选择框默认文字 | string | 请选择 |
| size | 选择框大小，可选 lg sm	 | string | - |
| loading    | 呈现加载样式（一般用于从远程获取数据）	 | boolean| false |
| loadingText | 加载时显示的文字 | string | 加载中... |
| optionOnChange | 指定change事件返回的数据是否是选中的整个option数据 | boolean | false |
| remoteMethod | 远程搜索方法	 | function | - |
| position | 下拉框的定位方式（absolute,fixed）	 | string | absolute |
| popupContainer | 下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | function | () => document.body |

### Data Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value | 选项的值(该字段可通过select的clue属性修改)	 | string/number/object | - |
| label    | 选项的标签或组名(作为标签时可通过select的label属性修改；作为组名时只支持一级,可通过select的groupLabel属性修改) | string | - |
| disabled | 是否禁用	 | boolean | false |
| options | 分组的数据	| array | - |

### Select Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 选择的值发生变化的时候触发，默认返回value，如需返回整个option，请设置optionOnChange | value |
