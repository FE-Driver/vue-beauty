<script>
export default {
    data() {
        return {
            checkStatus: 1,
            checked: false,
            disabled: false,
            arrayValue: [],
            options: [
                {label: '苹果', value: 'Apple'},
                {label: '梨', value: 'Pear'},
                {label: '橘', value: 'Orange'},
            ],
            optionsWithDisabled: [
                {text: '苹果', value: 'Apple'},
                {text: '梨', value: 'Pear'},
                {text: '橘', value: 'Orange', disabled: true},
            ],
            indeterminate: true,
            allChecked: false,
            fruits: ['Apple', 'Orange'],
            allFruits: ['Apple', 'Pear', 'Orange']
        }
    },
    methods: {
        onChange(value) {
            console.log("checkbox change event!!! " + value);
        },
        checkGroup(values) {
            console.log("checkboxGroup change event!!! ");
            console.log(values);
        },
        checkAll() {
            if (this.fruits.length == this.options.length) {
                this.fruits = [];
                this.allChecked = false;
                this.indeterminate = false;
            } else {
                this.fruits = JSON.parse(JSON.stringify(this.allFruits));
                this.allChecked = true;
                this.indeterminate = false;
            }
        },
        setState() {
            this.indeterminate =  this.fruits.length > 0 && this.fruits.length < this.options.length;
            this.allChecked = this.fruits.length == this.options.length;
        }
    }
}
</script>

# Checkbox 多选框

多选框。

## 何时使用

* 在一组可选项中进行多项选择时；
* 单独使用可以表示两种状态之间的切换，和 `switch` 类似。区别在于切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

::: demo
<summary>
  #### 基本用法
  简单的 checkbox。
</summary>

```html
<template>
    <v-checkbox>checkbox</v-checkbox>
    <v-checkbox v-model="checkStatus" :true-value="0" :false-value="1" @change="onChange">checkbox</v-checkbox>
</template>

<script>
    export default {
        data () {
            return {
                checkStatus: 1
            }
        },
        methods: {
            onChange(value) {
                console.log("checkbox change event!!! " + value);
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 受控的 Checkbox
  联动 checkbox。
</summary>

```html
<template>
    <p style="margin-bottom: 16px;">
        <v-checkbox v-model="checked" :disabled="disabled" @change="onChange">
            <span v-if="!checked">取消</span>
            <span v-if="checked">选中</span>
            -
            <span v-if="!disabled">可用</span>
            <span v-if="disabled">不可用</span>
        </v-checkbox>
    </p>
    <p>
        <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" @click="checked = !checked">
            <span v-if="checked">取 消</span>
            <span v-if="!checked">选 中</span>
        </button>
        <button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-left: 10px;" @click="disabled = !disabled">
            <span v-if="disabled">可用</span>
            <span v-if="!disabled">不可用</span>
        </button>
    </p>
</template>

<script>
    export default {
        data() {
            return {
                checked: false,
                disabled: false
            }
        },
        methods: {
            onChange(value) {
                console.log("checkbox change event!!! " + value);
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 不可用
  checkbox 不可用。
</summary>

```html
<template>
    <v-checkbox disabled>checkbox</v-checkbox>
    <v-checkbox :value="true" disabled>checkbox</v-checkbox>
</template>
```
:::

::: demo
<summary>
  #### checkbox 组
  方便的从数组生成 Checkbox 组。
</summary>

```html
<template>
    <div>
        <p style="margin-bottom: 16px;">
            <v-checkbox-group :data="options" v-model="arrayValue" @change="checkGroup" :max="2"></v-checkbox-group>
        </p>
        <p style="margin-bottom: 16px;">
            <v-checkbox-group @change="checkGroup">
                <v-checkbox v-for="item in optionsWithDisabled" :true-value="item.value" :disabled="item.disabled" :key="item.value">{{item.text}}</v-checkbox>
            </v-checkbox-group>
        </p>
        <p style="margin-bottom: 16px;">
            <v-checkbox-group disabled>
                <v-checkbox v-for="item in options" :true-value="item.value" :key="item.value">{{item.label}}</v-checkbox>
            </v-checkbox-group>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                arrayValue: [],
                options: [
                    {label: '苹果', value: 'Apple'},
                    {label: '梨', value: 'Pear'},
                    {label: '橘', value: 'Orange'},
                ],
                optionsWithDisabled: [
                    {text: '苹果', value: 'Apple'},
                    {text: '梨', value: 'Pear'},
                    {text: '橘', value: 'Orange', disabled: true},
                ]
            }
        },
        methods: {
            checkGroup(values) {
                console.log("checkboxGroup change event!!! ");
                console.log(values);
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 全选
  在实现全选效果时，你可能会用到 `indeterminate` 属性。
</summary>

```html
<template>
    <div>
        <p>
            <v-checkbox :indeterminate="indeterminate" v-model="allChecked" @click="checkAll">全选</v-checkbox>
        </p>
        <p style="margin-bottom: 16px;">
            <v-checkbox-group :data="options" v-model="fruits" @change="setState"></v-checkbox-group>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                indeterminate: true,
                allChecked: false,
                fruits: ['Apple', 'Orange'],
                options: [
                    {label: '苹果', value: 'Apple'},
                    {label: '梨', value: 'Pear'},
                    {label: '橘', value: 'Orange'},
                ],
                allFruits: ['Apple', 'Pear', 'Orange']
            }
        },
        methods: {
            checkAll() {
                if (this.fruits.length == this.options.length) {
                    this.fruits = [];
                    this.allChecked = false;
                    this.indeterminate = false;
                } else {
                    this.fruits = JSON.parse(JSON.stringify(this.allFruits));
                    this.allChecked = true;
                    this.indeterminate = false;
                }
            },
            setState() {
                this.indeterminate =  this.fruits.length > 0 && this.fruits.length < this.options.length;
                this.allChecked = this.fruits.length == this.options.length;
            }
        }
    }
</script>
```
:::

## API

### Checkbox Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 指定当前是否选中 | Any | false |
| true-value | 选中时的值 | Any | true |
| false-value | 没有选中时的值 | Any | false |
| disabled | 只读，无法进行交互 | Boolean | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | Boolean | false |

### Checkbox Group Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 默认选中的选项 | Array | [] |
| keyField | 选项的value的字段名 | String | value |
| label | 选项显示的文本的字段名 | String | label |
| data | 选项 | Array | — |
| disabled | 禁用 | Boolean | false |
| max | 控制checkbox组最多的选中数量 | Number | - |

### Data Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |
| value | 选项的值(该字段可通过keyField属性修改) | String | — |
| label    | 选项的标签(可通过label属性修改) | String | — |
| disabled | 是否禁用	 | Boolean | false |

### Checkbox Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 值发生变化的时候触发 | value |
| click    | 点击的时候触发 | - |

### Checkbox Group Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 选择的值发生变化的时候触发 | value |
| item-change    | 单项选择的值发生变化的时候触发 | value数组中对应的值 |
| item-click    | 点击单项的时候触发 | value |
