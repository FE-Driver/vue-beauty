<script>

export default {
    data: function () {
    return {
      disabled: true,
      groupValue:'shanghai',
      radioValue:'apple',
      radioValue1 : 'a' ,
      oneRadio : 'oneRadio'
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
    },
    watch:{
        groupValue(){
            console.log('watch groupValue '+this.groupValue);
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
  单个radio使用(不建议，单个请用checkbox)
</summary>

```html
<template>
        <v-radio v-model="oneRadio" checked @change="change" >oneRadio</v-radio>
</template>
<script>
export default {
    methods: {
      change(selectValue) {
        console.log('radio checked:' + selectValue)
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
        <v-radio value="apple" disabled><v-icon type="apple"></v-icon><span>Apple</span></v-radio>
        <v-radio value="android" checked><v-icon type="android"></v-icon><span>Android</span></v-radio>
        <v-radio value="rocket"><v-icon type="rocket"></v-icon><span>Rocket</span></v-radio>
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
<v-radio-group @change="change" type="button" size="small" 
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
<br>
<br>
<v-radio-group  @change="change" type="button"  
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
<br>
<br>
<v-radio-group @change="change" type="button" size="large" 
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
</template>
<script>
export default {
    methods: {
      change(selectValue) {
        console.log('radio checked:' + selectValue)
      }
    }
  }
</script>
```
:::

## API
### radioGroup Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| size | 组件中点的大小，可选值为 small default large | string | default |
| type | radio 展示方式，可选button | string | -- |
| data | 展示多个radio项,[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true}]<br>value-radio项的value值，text-radio项展示值，disabled-是否不可用，默认false | json | -- |

### radioGroup event

| 参数      | 说明          | 参数     |
|---------- |-------------- |----------  |
| change | 选择的值发生变化的时候触发 | value |