<script>

export default {
    data: function () {
    return {
      radioValue:'apple',
      radioValue1 : 'a' ,
      radio : 'third',
      bRadio1: 'shanghai',
      bRadio2: 'shanghai',
      bRadio3: 'shanghai',
      
    }
    },
    methods: {
        change(selectValue) {
            console.log('radio checked:' + selectValue)
        },
        changeRadioValue(){
            this.radioValue = 'android'
        },
         changeRadioValue1(){
             this.radioValue1 = 'b'
         }
    }
}
</script>

# Radio 单选框
单选框

## 何时使用

用于在多个备选项中选中单个状态。和 Select 的区别是：Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

::: demo

<summary>
  #### radio
  radio组合使用(不建议单个使用，单个请用checkbox)
</summary>

```html
<template>
    <v-radio v-model="radio" label="first" disabled>fist</v-radio>
    <v-radio v-model="radio" label="second">second</v-radio>
    <v-radio v-model="radio" label="third">third</v-radio>
    <br>
    <br>
    <span>选择的值为：{{radio}}</span>
</template>
<script>
export default {
    data: function () {
        return {
          radio : 'third'
        }
    }
}
</script>
```
:::

::: demo

<summary>
  #### RadioGroup组合
  一组互斥的 Radio 配合使用。在组合使用时，根据传入的v-model的值自动判断
</summary>

```html
<template>
<v-radio-group @change="change" v-model="radioValue">
    <v-radio label="apple" disabled><v-icon type="apple"></v-icon><span>Apple</span></v-radio>
    <v-radio label="android" ><v-icon type="android"></v-icon><span>Android</span></v-radio>
    <v-radio label="rocket"><v-icon type="rocket"></v-icon><span>Rocket</span></v-radio>
</v-radio-group>
<br>
<br>
<span>选中的值为：{{radioValue}}</span>
<br>
<br>
<v-button name="test" @click="changeRadioValue">设置raido的值</v-button>
</template>
<script>
export default {
    data:{
        return {
            radioValue: 'apple',
        }
    },
    methods: {
        change(selectValue) {
            console.log('radio checked:' + selectValue)
        },
        changeRadioValue(){
            this.radioValue = 'android'
        }
    }
  }
</script>
```
:::

::: demo

<summary>
  #### data 属性
  data 属性来初始化(注：当互斥的 Radio组合radioGroup使用时, data 属性 将无效)
</summary>

```html
<template>
<v-radio-group @change="change" v-model="radioValue1" :data="[{value: 'a', text: 'A'},{value: 'b', text: 'B'},{value: 'c', text: 'C'},{value: 'd', text: 'D'}]">
</v-radio-group>
<br>
<br>
<span>选中的值为：{{radioValue1}}</span>
<br>
<br>
<v-button name="test" @click="changeRadioValue1">设置raido的值</v-button>
</template>
<script>
export default {
    data:{
        return {
            radioValue1: 'a',
        }
    },
    methods: {
        change(selectValue) {
            console.log('radio checked:' + selectValue)
        },
        changeRadioValue1(){
           this.radioValue1 = 'b'
        }
    }
}
</script>
```
:::

::: demo

<summary>
  #### 按钮样式和大小
  组合使用时可以设置属性type为 button 来应用按钮的样式 设置size属性来设置大小尺寸
</summary>

```html
<template>
<v-radio-group type="button" size="small" v-model="bRadio1"
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
<br>
<br>
<v-radio-group type="button"  v-model="bRadio2"
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
<br>
<br>
<v-radio-group type="button" size="large" v-model="bRadio3" disabled
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
</template>
<script>
export default {
    data:{
        return {
            bRadio1: 'shanghai',
            bRadio2: 'shanghai',
            bRadio3: 'shanghai',
        }
    }
}
</script>
```
:::

## API

### radio Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| label | radio的value | String,Number |-|
| disabled | 是否禁用 | Boolean | false |

### radioGroup Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| size | 组件中点的大小，可选值为 `small` `default` `large` | string | default |
| type | radio 展示方式，可选button | string |-|
| data | 用于渲染多个radio项 | Array |-|
| disabled | 是否禁用 | Boolean | false |

### data
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- 
| value | radio项的value值| String,Number |-|
| text | radio项展示值| String |-|
| disabled | radio项是否可用| Boolean | false |

### radioGroup event

| 参数      | 说明          | 参数     |
|---------- |-------------- |----------  |
| change | 选择的值发生变化的时候触发 | value |

