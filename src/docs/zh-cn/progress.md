# Progress 进度条

展示操作的当前进度。

## 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

::: demo
<summary>
  #### 进度条
  标准的进度条。
</summary>

```html
<v-progress-line :percent="30"></v-progress-line>
<v-progress-line :percent="50" status="active"></v-progress-line>
<v-progress-line :percent="70" status="exception"></v-progress-line>
<v-progress-line :percent="100"></v-progress-line>
<v-progress-line :percent="50" :show-info="false"></v-progress-line>
```

:::

::: demo
<summary>
  #### 小型进度条
  适合放在较狭窄的区域内。
</summary>

```html
<v-progress-line :percent="30" :stroke-width="5"></v-progress-line>
<v-progress-line :percent="50" :stroke-width="5" status="active"></v-progress-line>
<v-progress-line :percent="70" :stroke-width="5" status="exception"></v-progress-line>
<v-progress-line :percent="100" :stroke-width="5"></v-progress-line>
```

:::

::: demo
<summary>
  #### 自定义文字格式
  `format` 属性指定格式。
</summary>

```html
<v-progress-line :percent="75" :format="percent => `${percent}天`"></v-progress-line>
<v-progress-line :percent="100" :format="() => '完成'"></v-progress-line>
```

:::

::: demo
<summary>
  #### 进度圈
  圈形的进度。
</summary>

```html
<v-progress-circle :percent="75" :stroke-width="3"></v-progress-circle>
<v-progress-circle :percent="70" status="exception"></v-progress-circle>
<v-progress-circle :percent="100"></v-progress-circle>
```

:::

::: demo
<summary>
  #### 小型进度圈
  小一号的圈形进度。
</summary>

```html
<v-progress-circle :percent="30" :width="80"></v-progress-circle>
<v-progress-circle :percent="70" :width="80" status="exception"></v-progress-circle>
<v-progress-circle :percent="100" :width="80"></v-progress-circle>
```

:::

::: demo
<summary>
  #### 自定义文字格式
  `format` 属性指定格式。
</summary>

```html
<v-progress-circle :percent="75" :format="percent => `${percent}天`"></v-progress-circle>
<v-progress-circle :percent="100" :format="() => '完成'"></v-progress-circle>
```

:::

::: demo
<summary>
  #### 仪表盘
  仪表盘样式的进度条。
</summary>

```html
<v-progress-circle dashboard :percent="75"></v-progress-circle>
```

:::

## API

## ProgressLine Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| percent    | 百分比	 | Number | 0 |
| format | 内容的模板函数	 | String/Function(percent) | - |
| status    | 状态，可选：`success` `exception` `active` `normal`	 | String | normal |
| showInfo    | 是否显示进度数值或状态图标	 | Boolean | true |
| infoColor    | 进度数值或状态图标的颜色	 | String | - |
| strokeWidth   | 进度条线的宽度，单位 px	 | Number | 10 |
| normalColor    | 自定义进度normal时的颜色	 | String | #108ee9 |
| activeColor    | 自定义进度active时的颜色	 | String | #108ee9 |
| exceptionColor    | 自定义进度exception时的颜色	 | String | #f04134 |
| successColor    | 自定义进度success时的颜色	 | String | #00a854 |
| trailColor    | 进度背景颜色	 | String | #f7f7f7 |

## ProgressCircle Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| percent    | 百分比	 | Number | 0 |
| format | 内容的模板函数	 | String/Function(percent) | - |
| status    | 状态，可选：`success` `exception` `normal`	 | String | normal |
| showInfo    | 是否显示进度数值或状态图标	 | Boolean | true |
| infoColor    | 进度数值或状态图标的颜色	 | String | - |
| strokeWidth    | 圆形进度条线的宽度，单位是进度条画布宽度的百分比	 | Number | 6 |
| width    | 圆形进度条画布宽度，单位 px	 | Number | 132 |
| normalColor    | 自定义进度圈normal时的颜色	 | String | #108ee9 |
| exceptionColor    | 自定义进度圈exception时的颜色	 | String | #f04134 |
| successColor    | 自定义进度圈success时的颜色	 | String | #00a854 |
| trailColor    | 进度圈背景颜色	 | String | #f7f7f7 |
| dashboard    | 是否是仪表盘样式 | Boolean | false |
