<script>
export default {
    data() {
        return {
            activeIndex: ['1','2'],
            accordionActiveIndex: ['1','2'],
            activeIndexMore:['1'],
            activeIndexSimple:['1'],
        }
    },
    methods: {
        onChange(data) {
            console.log("collapse change event!!! " + data.index + data.status);
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

对复杂区域进行分组和隐藏，保持页面的整洁。
手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## 代码演示
::: demo
<summary>
  #### 折叠面板
  可以同时展开多个面板，这个例子展开了第一个和第二个。 
</summary>

```html
<template>
    <v-collapse @change="onChange" v-model="activeIndex">
        <v-collapse-item header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
    </v-collapse>
</template>
<script>
export default {
    data() {
        return {
            activeIndex:['1','2'],
        }
    },
    methods: {
        onChange(data) {
            console.log("collapse change event!!! " + data.index + data.status);
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
  手风琴，每次只打开一个tab。默认打开传入数组的第一个。
</summary>

```html
<template>
    <v-collapse @change="onChange" v-model="accordionActiveIndex" accordion>
        <v-collapse-item header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
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
        onChange(data) {
            console.log("collapse change event!!! " + data.index + data.status);
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
  #### 简洁风格
  一套没有边框的简洁样式
</summary>

```html
<template>
    <v-collapse @change="onChange" :active-index="activeIndexSimple" :bordered="false">
        <v-collapse-item header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 2" index="2">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
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
        onChange(data) {
            console.log("collapse change event!!! " + data.index + data.status);
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
        <v-collapse-item header="This is panel header 1" index="1">
            <v-collapse :active-index="activeIndexMore">
                <v-collapse-item header="This is panel header 1-1" index="1">
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
                </v-collapse-item>
                <v-collapse-item header="This is panel header 1-2" index="2">
                    A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
                </v-collapse-item>
            </v-collapse>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item index="2">
            <template slot="header">
                <div>
                    This is panel header 2
                    <i class="">?^%$####</i>
                    <v-button type="primary" icon="search"><span>搜索</span></v-button>
                </div>
            </template>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
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
        onChange(data) {
            console.log("collapse change event!!! " + data.index + data.status);
        },
    },
}
</script>
```

:::

::: demo
<summary>
  #### 自定义标题
  可针对每个标题进行自定义
</summary>

```html
<template>
    <v-collapse @change="onChange" :active-index="activeIndexMore">
        <v-collapse-item header="This is panel header 1" index="1">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item index="2">
            <template slot="header">
                <div>
                    This is panel header 2
                    <i class="">?^%$####</i>
                    <v-button type="primary" icon="search"><span>搜索</span></v-button>
                </div>
            </template>
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
        <v-collapse-item header="This is panel header 3" index="3">
            A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.
        </v-collapse-item>
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
        onChange(data) {
            console.log("collapse change event!!! " + data.index + data.status);
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

### Collapse Item Props

| 成员      | 说明                                     | 类型       | 默认值 |
|----------|-----------------------------------------|------------|-------|
| index | 当前索引 | Number| [] |
| header | 标题内容，可使用slot(name="header") | String | 无 |

### Collapse Events

| 事件      | 说明                                     | 回调参数 |
|----------|-----------------------------------------|-------|
| change | 展开-收起时触发 | data 包含当前index和当前status |
