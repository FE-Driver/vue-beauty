<script>
export default {
    data() {
        return {
            activeIndex: ['1'],
            accordionActiveIndex: ['1','2'],
            activeIndexMore:['1'],
            activeIndexSimple:['1'],
            customPanelStyle: {
                background: '#f7f7f7',
                borderRadius: '4px',
                marginBottom: '24px',
                border: 0,
            },
        }
    },
    methods: {
        onChange(index, status) {
            console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
    },
    watch: {
        activeIndex(val){
            console.log(val);
        },
        accordionActiveIndex(val){
            console.log(val);
        },
    },
}
</script>
# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示
::: demo
<summary>
  #### 折叠面板
  可以同时展开多个面板，这个例子默认展开了第一个。
</summary>

```html
<template>
    <v-collapse @change="onChange" v-model="activeIndex">
        <v-panel header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
    </v-collapse>
</template>
<script>
export default {
    data() {
        return {
            activeIndex:['1'],
        }
    },
    methods: {
        onChange(index, status) {
            console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
    },
    watch: {
        activeIndex(val){
            console.log(val);
        },
    },
}
</script>
```
:::

::: demo
<summary>
  #### 手风琴
  手风琴，每次只打开一个tab。
</summary>

```html
<template>
    <v-collapse @change="onChange" accordion :active-index="activeIndexMore">
        <v-panel header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
    </v-collapse>
</template>
<script>
export default {
    data() {
        return {
            accordionActiveIndex:['1','2'],
        }
    },
    methods: {
        onChange(index, status) {
            console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
    },
    watch: {
        accordionActiveIndex(val){
            console.log(val);
        },
    },
}
</script>
```

:::

::: demo
<summary>
  #### 嵌套模式
  可在单个面板里面嵌套
</summary>

```html
<template>
    <v-collapse @change="onChange" :active-index="activeIndexMore">
        <v-panel header="This is panel header 1" index="1">
            <v-collapse :active-index="activeIndexMore">
                <v-panel header="This is panel header 1-1" index="1">
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
                </v-panel>
                <v-panel header="This is panel header 1-2" index="2">
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
                </v-panel>
            </v-collapse>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
    </v-collapse>
</template>
<script>
export default {
    data() {
        return {
            activeIndexMore:['1'],
        }
    },
    methods: {
        onChange(index, status) {
            console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
    },
}
</script>
```

:::

::: demo
<summary>
  #### 简洁风格
  一套没有边框的简洁样式
</summary>

```html
<template>
    <v-collapse @change="onChange" :active-index="activeIndexSimple" :bordered="false">
        <v-panel header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
    </v-collapse>
</template>
<script>
export default {
    data() {
        return {
            activeIndexSimple:['1'],
        }
    },
    methods: {
        onChange(index, status) {
            console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
    },
}
</script>
```

:::

::: demo
<summary>
  #### 自定义面板
  自定义各个面板的头部、背景色、圆角和边距。
</summary>

```html
<template>
    <v-collapse @change="onChange" :active-index="activeIndexMore" :bordered="false">
        <v-panel index="1" :style="customPanelStyle">
            <v-button type="primary" icon="search" slot="header"><span>搜索</span></v-button>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 2" index="2" :style="customPanelStyle">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
        <v-panel header="This is panel header 3" index="3" :style="customPanelStyle">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-panel>
    </v-collapse>
</template>
<script>
export default {
    data() {
        return {
            activeIndexMore:['1'],
            customPanelStyle: {
                background: '#f7f7f7',
                borderRadius: '4px',
                marginBottom: '24px',
                border: 0,
            },
        }
    },
    methods: {
        onChange(index, status) {
            console.log(`第${index}个面板发生变化，目前状态: ${status}`);
        },
    },
}
</script>
```
:::

## API

### Collapse Props

| 成员      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| activeIndex | 当前展开状态，可用v-model | Array | [] |
| accordion | 开启手风琴模式 | Boolean | `false`  |
| bordered | 开启简洁模式 | Boolean | `false` |

### Collapse Events

| 事件      | 说明                                     | 回调参数 |
|----------|-----------------------------------------|-------|
| change | 展开-收起时触发 | index, status |

### Collapse Panel Props

| 成员      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| index | 当前索引 | Number| [] |
| header | 标题内容 | String | 无 |
| slot:header | 自定义标题内容 | Slot Node | 无 |






