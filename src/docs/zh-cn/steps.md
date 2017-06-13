<script>
export default {
    data() {
        return {
            current: 1,
            steps: [
                {
                    title: "步骤1",
                    index: 0
                },
                {
                    title: "步骤2",
                    index: 1
                },
                {
                    title: "步骤3",
                    index: 2
                },
                {
                    title: "步骤4",
                    index: 3
                }
            ],
        }
    },
    methods: {
        next() {
            if (this.current < this.steps.length) {
                this.current ++
            } else {
                this.current = 1
            }
        }
    }
}
</script>

# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 代码演示

::: demo
<summary>
  #### 基本用法
  简单的步骤条。
</summary>

```html
<v-steps :current="1">
    <v-step title="已完成" description="这里是多信息的描述" ></v-step>
    <v-step title="进行中" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
</v-steps>
```

:::

::: demo
<summary>
  #### 迷你版
  迷你版的步骤条，通过设置 `<v-steps size='small'>` 启用。
</summary>

```html
<v-steps size="small" :current="1">
    <v-step title="已完成" ></v-step>
    <v-step title="进行中" ></v-step>
    <v-step title="待运行" ></v-step>
    <v-step title="待运行" ></v-step>
</v-steps>
```

:::

::: demo
<summary>
  #### 带图标的步骤条
  通过设置 `Steps.step` 的 `icon` 属性，可以启用自定义图标。
</summary>

```html
<v-steps>
    <v-step status="finish" title="步骤1" icon="cloud" ></v-step>
    <v-step status="process" title="步骤2" icon="apple" ></v-step>
    <v-step status="wait" title="步骤3" icon="github" ></v-step>
</v-steps>
```

:::

::: demo
<summary>
  #### 切换步骤
  通常配合内容及按钮使用，表示一个流程的处理进度。
</summary>

```html
<template>
    <div>
        <div style="margin-bottom: 24px">当前正在执行第 {{current}} 步</div>
        <v-steps :current="current - 1">
          <v-step :key="s.index" :title="s.title" v-for="s in steps" ></v-step>
        </v-steps>
        <div style="margin-top: 24px">
          <button type="button" name="button" class="ant-btn" @click="next">下一步</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 1,
            steps: [
                {
                    title: "步骤1",
                    index: 0
                },
                {
                    title: "步骤2",
                    index: 1
                },
                {
                    title: "步骤3",
                    index: 2
                },
                {
                    title: "步骤4",
                    index: 3
                }
            ],
        }
    },
    methods: {
        next() {
            if (this.current < this.steps.length) {
                this.current ++
            } else {
                this.current = 1
            }
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 竖直方向的步骤条
  简单的竖直方向的步骤条。
</summary>

```html
<v-steps :current="1" direction="vertical">
    <v-step title="已完成" description="这里是多信息的描述" ></v-step>
    <v-step title="进行中" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
</v-steps>
```

:::

::: demo
<summary>
  #### 竖直方向的小型步骤条
  简单的竖直方向的步骤条。
</summary>

```html
<v-steps :current="1" direction="vertical" size="small">
    <v-step title="已完成" description="这里是多信息的描述" ></v-step>
    <v-step title="进行中" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
</v-steps>
```

:::

::: demo
<summary>
  #### 步骤运行错误
  使用 `Steps` 的 `status` 属性来指定当前步骤的状态。
</summary>

```html
<v-steps :current="1" status="error">
    <v-step title="已完成" description="这里是多信息的描述" ></v-step>
    <v-step title="进行中" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
    <v-step title="待运行" description="这里是多信息的描述" ></v-step>
</v-steps>
```

:::

## API

### Steps Props
整体步骤条。
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| current    | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | Number | 0 |
| status | 指定当前步骤的状态，可选 wait process finish error | String | process |
| size | 指定大小，目前支持普通（default）和迷你（small） | String | default |
| direction    | 指定步骤条方向。目前支持水平和竖直（vertical）两种方向，默认水平方向） | String | - |

### Steps.Step Props
步骤条内的每一个步骤。
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| status | 指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error | String | wait |
| title | 标题 | String | - |
| description    | 步骤的详情描述，可选 | String | - |
| icon    | 步骤图标，可选 | String | - |
