<script>
  export default {
    data: ()=> ({
      checked:true,
      checkStatus:1,
      disabled: false
    }),
    methods: {
      _toogle() {
        this.disabled = !this.disabled
      },
      getStatus(){
        this.$message.info("当前状态码为：" + this.checkStatus);
      }
    }
  }
</script>

# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 `checkbox`的区别是，切换 `switch` 会直接触发状态改变，而 `checkbox` 一般用于状态标记，需要和提交操作配合。

## 代码演示

::: demo
<summary>
  #### 简单
  最简单的用法。
</summary>

```html
<template>
  <v-switch v-model="checked"></v-switch>
</template>

<script>
  export default {
    data: ()=> ({
      checked: true
    })
  };
</script>
```
:::

::: demo
<summary>
  #### 不可用
  Switch 失效状态。
</summary>

```html
<template>
  <v-switch :disabled="disabled"></v-switch>
  <br><br>
  <v-button type="primary" @click="_toogle">Toggle disabled</v-button>
</template>

<script>
  export default {
    data: ()=> ({
      disabled: false
    }),
    methods: {
      _toogle() {
        this.disabled = !this.disabled
      }
    }
  };
</script>
```
:::

::: demo
<summary>
  #### 文字和图标
  带有文字和图标。
</summary>

```html
<v-switch> 
  <span slot="checkedChildren">开</span>
  <span slot="unCheckedChildren">关</span>
</v-switch>
<br><br>
<v-switch> 
  <span slot="checkedChildren">
    <i class="anticon anticon-check"></i>
  </span>
  <span slot="unCheckedChildren">
    <i class="anticon anticon-cross"></i>
  </span>
</v-switch>
```
:::

::: demo
<summary>
  #### 两种大小
  `size='small'` 表示小号开关
</summary>

```html
<v-switch></v-switch>
<br>
<v-switch size="small"></v-switch>
```
:::


::: demo
<summary>
  #### 自定义状态值
  属性名称：`true-value`  `false-value`
  以下例子定义：选中时为 1 ，未选中时为 0
  组件当前状态为选中
</summary>

```html
<template>
  <v-switch v-model="checkStatus" :true-value="1" :false-value="0"></v-switch>
  <v-button @click="getStatus" size="small" type="primary">获取状态码</v-button>
</template>

<script>
  export default {
    data: ()=> ({
      checkStatus: 1
    }),
    methods: {
      getStatus(){
        this.$message.info("当前状态码为：" + this.checkStatus);
      }
    }
  };
</script>
```
:::

## API

### Switch Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| value    | 指定当前是否选中	 | Boolean | false |
| disabeled  | 指定当前是否被禁用 | Boolean | false |
| size    | 开关大小（"default" or "small"） | String | default |
| slot:checkedChildren  | 选中时的内容	 | slot node | - |
| slot:unCheckedChildren    | 非选中时的内容	 | slot node | - |
| true-value   | 选中时自定义值	 |  Any | - |
| false-value   | 未选中时自定义值	 | Any | - |

