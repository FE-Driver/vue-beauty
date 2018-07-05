<script>
export default {
    data() {
        return {
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
            options2: [{
                value: '1',
                label: 'lady'
            }, {
                value: '2',
                label: '小强'
            }, {
                value: '3',
                label: '小明'
            }],
            value: '1'
        }
    },
    methods: {
        blur(val) {
            console.log(val)
        },
        keyup(val){
            console.log(val)
        },
        keydown(val){
            console.log(val)
        },
    }
}
</script>

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用
- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 组件演示

::: demo
<summary>
  #### 基本
  基本使用。
</summary>

```html
<template>
  <v-input placeholder="基本使用" v-model="value" @keydown="keydown" @keyup="keyup"  @blur="blur('blur')"></v-input>
</template>
<script>
export default {
    methods: {
        blur(val) {
            console.log(val)
        },
        keyup(val){
            console.log(val)
        },
        keydown(val){
            console.log(val)
        },

    }
}
</script>
```

:::

::: demo
<summary>
  #### 文本域
  用于多行输入，指定 type 为一个特殊的 textarea。
</summary>

```html
  <v-input type="textarea" value="这是一个textarea"></v-input>
```

:::

::: demo
<summary>
  #### 适应文本高度的文本域
  `autosize` 属性适用于 `textarea` 节点，并且只有高度会自动变化。另外 `autosize` 可以设定为一个对象，指定最小行数和最大行数。
</summary>

```html
  <v-input type="textarea" placeholder="Autosize height based on content lines" autosize></v-input>
  <br><br>
  <v-input type="textarea" placeholder="Autosize height with minimum and maximum number of lines" :autosize="{ minRows: 2, maxRows: 6 }"></v-input>
```

:::

::: demo
<summary>
  #### 前后缀修饰添加
  带有前缀后缀修饰
</summary>

```html
<template>
  <v-input>
      <span slot="before">http://</span>
      <span slot="after">.com</span>
  </v-input>
  <br>
  <v-input>
      <v-select placeholder="请选择" style="width: 80px;" slot="before" :data="options"
      v-model="value"></v-select>
      <v-select style="width: 80px;" slot="after" :data="options2"
      v-model="value"></v-select>
  </v-input>
</template>
<script>
export default {
    data() {
        return {
            options: [{value: '1', label: 'lady'}, {value: '2', label: '小强', disabled: true}, {value: '3', label: '小明'}],
            options2: [{value: '1', label: 'lady'}, {value: '2', label: '小强'}, {value: '3', label: '小明'}],
            value: '3'
        }
    }
}
</script>
```

:::


::: demo
<summary>
  #### 三种大小
  我们为 < v-input > 输入框定义了三种尺寸（大、默认、小），高度分别为 32px、28px 和 22px。
</summary>

```html
  <v-input size="large" placeholder="大尺寸" style="width:200px;display:inline-block" disabled></v-input>
  <v-input placeholder="基本尺寸" style="width:200px;display:inline-block"></v-input>
  <v-input size="small" placeholder="小尺寸" style="width:200px;display:inline-block"></v-input>
```

:::

::: demo
<summary>
  #### 输入框组合
  输入框的组合展现。
  注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。
</summary>

```html
<template>
    <v-input-group size="large">
        <v-col span="4">
            <v-input value="0571"></v-input>
        </v-col>

        <v-col span="8">
            <v-input value="26888888"></v-input>
        </v-col>
    </v-input-group>

    <br />

    <v-input-group compact>
        <v-input value="0571" style="width: 20%"></v-input>
        <v-input value="26888888" style="width: 30%"></v-input>
    </v-input-group>

    <br />

    <v-input-group compact>
        <v-select placeholder="请选择" :data="options" v-model="value"></v-select>
        <v-input value="Input content" style="width: 50%"></v-input>
    </v-input-group>

    <br />

    <v-input-group compact>
        <v-select placeholder="请选择" :data="options" v-model="value"></v-select>
        <v-input value="Input content" style="width: 50%"></v-input>
        <v-input-number :min="1" :max="10"></v-input-number>
    </v-input-group>

    <br />

    <v-input-group compact>
        <v-input value="Input content" style="width: 50%"></v-input>
        <v-date-picker></v-date-picker>
    </v-input-group>

    <br />

    <v-input-group compact>
        <v-select placeholder="请选择" :data="options" v-model="value" style="width: 10%"></v-select>
        <v-select placeholder="请选择" :data="options2" v-model="value" style="width: 10%"></v-select>
    </v-input-group>
</template>
<script>
export default {
    data() {
        return {
            options: [{value: '1', label: 'lady'}, {value: '2', label: '小强', disabled: true}, {value: '3', label: '小明'}],
            options2: [{value: '1', label: 'lady'}, {value: '2', label: '小强'}, {value: '3', label: '小明'}],
            value: '3'
        }
    }
}
</script>
```

:::

## API

### Input Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| type    | 【必须】声明 input 类型，同原生 input 标签的 type 属性。另外提供 type="textarea"。 | String | text |
| id    | 输入框的 id | String | - |
| placeholder    | 选择框默认文字 | String | 0 |
| value | value 值 | any | - |
| size | 控件大小，默认值为 default 。{"large","default","small"}注：标准表单内的输入框大小限制为 large。 | String | default |
| disabled    | 是否禁用状态，默认为 false | Boolean | false |
| autosize    | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`,仅在type为textarea时生效 | Boolean/Object | false |
| debounce    | 延迟输入状态变化的时间（ms） | Number | 0 |
| slot:before | input前面加前缀修饰 | slot node | - |
| slot:after | input后面加后缀修饰	 | slot node | - |

### Input Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| blur    | blur事件 | val |
| keyup    | keyup事件 | val |
| keydown    | keydown事件 | val |

### Input Methods
| 方法名        | 说明         | 参数        |
|------------|----------------|------------|
| setFocus   | 设置 input 获取焦点 | - |
| setBlur    | 设置 input 失去焦点 | - |
| selectText | 选中 input 中的文字 | - |

### InputGroup
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| size | InputGroup 中所有的 Input 的大小，可选 large default small。 | String | default |
| compact | 是否用紧凑模式。 | Boolean | false |
