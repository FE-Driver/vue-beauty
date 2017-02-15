<script>

export default {
    data: function () {
    return {
      disabled: true,
      groupValue:'shanghai',
      radioValue:'c'
    }
    },
    methods: {
        change(selectValue) {
            console.log('radio checked:' + selectValue)
        },
        changeRadioValue(){
            this.radioValue = 'b'
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
  #### RadioGroup组合
  一组互斥的 Radio 配合使用。
</summary>

```html
<template>
<v-radio-group @change="change" v-model="radioValue" :data="[{value: 'a', text: 'A'},{value: 'b', text: 'B'},{value: 'c', text: 'C'},{value: 'd', text: 'D'}]">
</v-radio-group>
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
           this.radioValue = 'b'
       }
    }
  }
</script>
```
:::

::: demo

<summary>
  #### 不可用
  radio 不可用。
</summary>

```html
<template>
<v-radio-group @change="change" 
    :data="[{value: 'e', text: 'E',disabled:true},{value: 'F', text: 'F'},{value: 'G', text: 'G'}]">
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

::: demo

<summary>
  #### 按钮样式及大小
  不同大小及样式,通过value初始化默认选中
</summary>

```html
<template>
<v-radio-group @change="change" type="button" size="small" v-model="groupValue"
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
<br>
<br>
<v-radio-group  @change="change" type="button" value="tianjin" 
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
<br>
<br>
<v-radio-group @change="change" type="button" size="large" value="shanghai"
    :data="[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true},{value: 'chengdu', text: 'chengdu'},{value: 'tianjin', text: 'tianji'}]">
</v-radio-group>
</template>
<script>
export default {
    data: function () {
        return {
          disabled: true,
          groupValue:'shanghai',
        }
    },
    methods: {
      change(selectValue) {
        console.log('radio checked:' + selectValue)
      }
    },
     watch:{
         groupValue(){
             console.log('watch groupValue'+this.groupValue);
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
| value | 初始化value控制默认选中 | string | -- |
| type | radio 展示方式，可选button | string | -- |
| data | 展示多个radio项,[{value: 'shanghai', text: 'shanghai'},{value: 'beijing', text: 'beijing',disabled:true}]<br>value-radio项的value值，text-radio项展示值，disabled-是否不可用，默认false | json | -- |

### radioGroup event

| 参数      | 说明          | 参数     |
|---------- |-------------- |----------  |
| change | 选择的值发生变化的时候触发 | value |