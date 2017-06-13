<style>
    .icon-wrapper {
        position: relative;
        padding: 0px 30px;
    }
    
    .icon-wrapper .anticon {
        position: absolute;
        top: -3px;
        width: 16px;
        height: 16px;
        line-height: 1;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.3);
    }
    
    .icon-wrapper .anticon:first-child {
        left: 0;
    }
    
    .icon-wrapper .anticon:last-child {
        right: 0;
    }
    
    .anticon.anticon-highlight {
        color: rgba(0, 0, 0, 0.6);
    }
</style>

<script>
    export default {
        data() {
            return {
                disabled: false,
                sliderValue: 30,
                sliderRange: [20, 50],
                customIconValue: 30,
                synValue: 2,
                synFloatValue: 0.2,
                marks: {
                    0: '0°C',
                    26: '26°C',
                    37: '37°C',
                    100: '100°C',
                },
            };
        },
        methods: {
            customIconChange(value) {
                
            },
            tipFormatter(value) {
                return `${value}%`;
            },
            beforeChange(value) {
                console.log(`before slider change: ${value}`);
            },
            onChange(value) {
                console.log(`slider changed: ${value}`);
            },
            afterChange(value) {
                console.log(`after slider change: ${value}`);
            },
        },
    };
</script>

# Slider 滑动输入条

滑动型输入器，展示当前值和可选范围。

## 何时使用
 
 当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

## 代码演示

::: demo
<summary>
  #### 基本
  基本滑动条。当 `range` 为 `true` 时，渲染为双滑块。当 `disabled` 为 `true` 时，滑块处于不可用状态。
</summary>

```html
<template>
    <div>
        <v-slider v-model="sliderValue" :disabled="disabled"></v-slider>
        <v-slider range v-model="sliderRange" :disabled="disabled"></v-slider>
        <div>
            Disabled: <v-switch v-model="disabled"></v-switch>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                disabled: false,
                sliderValue: 30,
                sliderRange: [20, 50],
            };
        },
    };
</script>
```
:::

::: demo
<summary>
  #### 带 icon 的滑块
  滑块左右可以设置图标来表达业务含义。
</summary>

```html
<template>
    <div class="icon-wrapper">
        <v-icon type="frown-o" :class="customIconValue <= 50 ? 'anticon-highlight' : ''"></v-icon>
        <v-slider v-model="customIconValue"></v-slider>
        <v-icon type="smile-o" :class="customIconValue > 50 ? 'anticon-highlight' : ''"></v-icon>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customIconValue: 30,
            };
        },
    };
</script>

<style>
    .icon-wrapper {
        position: relative;
        padding: 0px 30px;
    }
    
    .icon-wrapper .anticon {
        position: absolute;
        top: -3px;
        width: 16px;
        height: 16px;
        line-height: 1;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.3);
    }
    
    .icon-wrapper .anticon:first-child {
        left: 0;
    }
    
    .icon-wrapper .anticon:last-child {
        right: 0;
    }
    
    .anticon.anticon-highlight {
        color: rgba(0, 0, 0, 0.6);
    }
</style>
```
:::

::: demo
<summary>
  #### 事件
  当 Slider 的值发生改变时，会触发 `change` 事件，并把改变后的值作为参数传入。在 `onmouseup` 时，会触发 `afterChange` 事件，并把当前值作为参数传入。
</summary>

```html
<template>
    <div>
        <v-slider v-model="sliderValue"  @before-change="beforeChange" @change="onChange" @after-change="afterChange"></v-slider>
        <v-slider range v-model="sliderRange"  @before-change="beforeChange" @change="onChange" @after-change="afterChange"></v-slider>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sliderValue: 30,
                sliderRange: [20, 50],
            };
        },
        methods: {
            beforeChange(value) {
                console.log(`before slider change: ${value}`);
            },
            onChange(value) {
                console.log(`slider changed: ${value}`);
            },
            afterChange(value) {
                console.log(`after slider change: ${value}`);
            },
        },
    };
</script>
```
:::

::: demo
<summary>
  #### 和输入框组件保持同步
  和 [数字输入框](/#/components/inputNumber) 组件保持同步。
</summary>

```html
<template>
    <v-row>
        <v-col :span="20">
            <v-slider :min="1" :max="20" v-model="synValue"></v-slider>
        </v-col>
        <v-col :span="4">
            <v-input-number :min="1" :max="20" v-model="synValue"></v-input-number>
        </v-col>
    </v-row>
    <v-row>
        <v-col :span="20">
            <v-slider :min="0" :max="1" :step="0.01" v-model="synFloatValue"></v-slider>
        </v-col>
        <v-col :span="4">
            <v-input-number :min="0" :max="1" :step="0.01" v-model="synFloatValue"></v-input-number>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                synValue: 2,
                synFloatValue: 0.2,
            };
        },
    };
</script>
```
:::

::: demo
<summary>
  #### 自定义提示
  使用 `tipFormatter` 可以格式化 `Tooltip` 的内容，设置 `tipFormatter={null}`，则隐藏 `Tooltip`。
</summary>

```html
<template>
    <div>
        <v-slider :value="30" :tip-formatter="tipFormatter"></v-slider>
        <v-slider :value="30" :tip-formatter="null"></v-slider>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        methods: {
            tipFormatter(value) {
                return `${value}%`;
            },
        },
    };
</script>
```
:::

::: demo
<summary>
  #### 带标签的滑块
  使用 `marks` 属性标注分段式滑块，使用 `value` 指定滑块位置。当 `included=false` 时，表明不同标记间为并列关系。当 `step=null` 时，Slider 的可选值仅有 `marks` 标出来的部分。
</summary>

```html
<template>
    <div>
        <h4>included = true</h4>
        <v-slider :value="37" :marks="marks"></v-slider>
        <v-slider :value="[26, 37]" range :marks="marks"></v-slider>

        <h4>included = false</h4>
        <v-slider :value="37" :marks="marks" :included="false"></v-slider>

        <h4>marks & step</h4>
        <v-slider :value="37" :marks="marks" :step="10" dots></v-slider>

        <h4>step = null</h4>
        <v-slider :value="37" :marks="marks" :step="null"></v-slider>
    </div>
</template>
```
:::

## API

### Slider Props
| 参数       | 说明            | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| range          | 双滑块模式 | boolean       | false
| min            | 最小值 | number             | 0
| max            | 最大值 | number             | 100
| step           | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。 | number\|null    | 1
| marks          | 刻度标记，key 的类型必须为 `number` 且取值在闭区间 [min, max] 内 | object | { number: string }
| dots           | 显示 `step` 间断点，建议在 `step` 间隔不密集时使用 | boolean | false
| value          | 设置当前取值。当 `range` 为 `false` 时，使用 `number`，否则用 `[number, number]`   | number\|number[] |
| included       | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 | boolean             | true
| disabled       | 值为 `true` 时，滑块为禁用状态 | boolean             | false
| tip-formatter   | Slider 会把当前值传给 `tip-formatter`，并在 Tooltip 中显示 `tip-formatter` 的返回值，若为 null，则隐藏 Tooltip。 | Function\|null | IDENTITY

### Slider Events
| 参数        | 说明           | 回调参数           |
|------------|----------------|-------------------|
| before-change | 当 Slider 的值发生改变前触发的事件 | value |
| change | 当 Slider 的值发生改变时触发的事件 | value |
| after-change | 与 `onmouseup` 触发时机一致 | value |
