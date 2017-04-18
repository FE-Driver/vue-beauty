<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 0,
            setting: {
                autoplay: false,
                autoplaySpeed: 2000,
                dots: 'inside',
                trigger: 'click',
                arrow: 'hover'
            },
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 14
            }
        }
    },
}
</script>
<style scoped>
.demo-carousel {
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    background: #364d79;
}
</style> 

# Carousel 走马灯
旋转木马，一组轮播的区域。

## 何时使用
- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <v-carousel v-model="value1">
      <v-carousel-item>
          <div class="demo-carousel">1</div>
      </v-carousel-item>
      <v-carousel-item>
          <div class="demo-carousel">2</div>
      </v-carousel-item>
      <v-carousel-item>
          <div class="demo-carousel">3</div>
      </v-carousel-item>
      <v-carousel-item>
          <div class="demo-carousel">4</div>
      </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      value: 0
    }
  },
}
</script>
```

:::

::: demo
<summary>
  #### 垂直
  垂直显示。
</summary>

```html
<v-carousel vertical>
    <v-carousel-item>
        <div class="demo-carousel">1</div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">2</div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">3</div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">4</div>
    </v-carousel-item>
</v-carousel>
```

:::

::: demo
<summary>
  #### 自动切换
  定时切换下一张。
</summary>

```html
<v-carousel autoplay>
    <v-carousel-item>
        <div class="demo-carousel">1</div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">2</div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">3</div>
    </v-carousel-item>
    <v-carousel-item>
        <div class="demo-carousel">4</div>
    </v-carousel-item>
</v-carousel>
```

:::

::: demo
<summary>
  #### 综合设置
  动态调整各配置
</summary>

```html
<template>
    <v-form :model="setting" direction="horizontal">
        <v-form-item label="自动切换" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-switch v-model="setting.autoplay">
                <span slot="checkedChildren">开</span>
                <span slot="unCheckedChildren">关</span>
            </v-switch>
        </v-form-item>
        <v-form-item label="指示器位置" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-radio-group type="button" v-model="setting.dots"
                :data="[{value: 'inside', text: '内部'},{value: 'outside', text: '外部'},{value: 'none', text: '不显示'}]">
            </v-radio-group>
        </v-form-item>
        <v-form-item label="切换箭头" :label-col="labelCol" :wrapper-col="wrapperCol">
             <v-radio-group type="button" v-model="setting.arrow"
                :data="[{value: 'hover', text: '悬停时显示'},{value: 'always', text: '一直显示'},{value: 'never', text: '不显示'}]">
            </v-radio-group>
        </v-form-item>
        <v-form-item label="指示器触发方式" :label-col="labelCol" :wrapper-col="wrapperCol">
            <v-radio-group type="button" v-model="setting.trigger"
                :data="[{value: 'click', text: '点击'},{value: 'hover', text: '悬停'}]">
            </v-radio-group>
        </v-form-item>
    </v-form>
    <v-carousel
        v-model="value2"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <v-carousel-item>
            <div class="demo-carousel">1</div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="demo-carousel">2</div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="demo-carousel">3</div>
        </v-carousel-item>
        <v-carousel-item>
            <div class="demo-carousel">4</div>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
    export default { 
        data () {
            return {
                value2: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    trigger: 'click',
                    arrow: 'hover'
                },
                labelCol: {
                    span: 6
                },
                wrapperCol: {
                    span: 14
                }
            }
        },
    }
</script>
```

:::

## API
### Carousel Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| value | 幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据 | Number | 0 |
| height | 走马灯的高度，可填 auto 或具体高度数值，单位 px| String | Number | auto |
| autoplay | 是否自动切换 | Boolean | false |
| autoplaySpeed | 自动切换的时间间隔，单位为毫秒 | Number | 2000 |
| dots | 指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）| String | inside |
| trigger | 指示器的触发方式，可选值为 click（点击），hover（悬停） | String[] | click |
| arrow | 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） | String | hover |
| easing | 动画效果 | String | ease |
| vertical | 垂直显示 | Boolean | false |

### Carousel Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| change    | 幻灯片切换时触发 | (oldValue, value) |
