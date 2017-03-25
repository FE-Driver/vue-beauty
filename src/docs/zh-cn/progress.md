## Progress 进度条

展示操作的当前进度。

### 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

### 代码演示

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
  通过设置strokeWidth,可以更灵活地使用进度条
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

## API
## Progress Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| percent    | 百分比	 | Number | 0 |
| format | 内容的模板函数	 | Function(percent) | - |
| status    | 状态，可选：`success` `exception` `active` `normal`	 | String | normal |
| show-info    | 是否显示进度数值或状态图标	 | Boolean | true |
| stroke-width    | 进度条线的宽度，单位 px	 | Number | 10 |
