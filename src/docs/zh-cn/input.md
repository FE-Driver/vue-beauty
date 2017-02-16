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
        }
    }
}
</script>

## Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

### 何时使用
- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

### 组件演示

::: demo
<summary>
  #### 基本
  基本使用。
</summary>

```html
<template>
  <v-input placeholder="基本使用" v-model="value" @blur="blur('blur')"></v-input>
</template>
<script>
export default {
    methods: {
        blur(val) {
            console.log(val)
        }
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
  <v-input size="large" placeholder="大尺寸" style="width:200px;display:inline-block"disabled></v-input>
  <v-input placeholder="基本尺寸" style="width:200px;display:inline-block"></v-input>
  <v-input size="small" placeholder="小尺寸" style="width:200px;display:inline-block"></v-input>
```

:::

## API
### Input Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| type    | 【必须】声明 input 类型，同原生 input 标签的 type 属性。另外提供 type="textarea"。 | String | text |
| value | value 值 | any | - |
| size | 控件大小，默认值为 default 。{"large","default","small"}注：标准表单内的输入框大小限制为 large。 | String | default |
| disabled    | 是否禁用状态，默认为 false | Boolean | false |
| slot:before | input前面加前缀修饰 | slot node | - |
| slot:after | input后面加后缀修饰	 | slot node | - |

### Input Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| blur    | blur事件 | val |
