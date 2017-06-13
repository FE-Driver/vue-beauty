<script>

export default {
    data:() => ({
        data: [
            {content: '1st item'},
            {content: '2nd item'},
            {content: '3rd item'},
        ],
        data1: [
            {content: '1st item'},
            {content: '2nd item'},
            {content: '3rd item', divided: true, disabled: true},
        ],
        data2: [
            {content: '1st item'},
            {content: '2nd item'},
            {
                content: 'sub',
                children: [
                    {content: '3rd item'},
                    {content: '4th item'},
                ],
            },
        ],
    }),
    methods: {
        itemClick(data) {
            console.log(data);
        }
    }
}
</script>

# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

 当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 代码演示

::: demo

<summary>
  #### 基本
  最简单的下拉菜单。
</summary>

```html
<template>                
    <v-dropdown :data="data">
        <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger">
            Hover me <v-icon type="down"></v-icon>
        </a>
    </v-dropdown>
</template>
<script>
export default {
    data:() => ({
        data: [
            {content: '1st item'},
            {content: '2nd item'},
            {content: '3rd item'},
        ],
    }),
}
</script>
```
:::

::: demo

<summary>
  #### 其他元素
  分割线和不可用菜单项。
</summary>

```html
<template>                
    <v-dropdown :data="data1">
        <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger">
            Hover me <v-icon type="down"></v-icon>
        </a>
    </v-dropdown>
</template>
    
<script>
export default {
    data:() => ({
        data1: [
            {content: '1st item'},
            {content: '2nd item'},
            {content: '3rd item', divided: true, disabled: true},
        ],
    }),
}
</script>
```
:::

::: demo

<summary>
  #### 触发方式
  默认是移入触发菜单，可以点击触发。
</summary>

```html
<template>                
    <v-dropdown :data="data" trigger="click">
        <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger">
            Click me <v-icon type="down"></v-icon>
        </a>
    </v-dropdown>
</template>
    
<script>
export default {
    data:() => ({
        data: [
            {content: '1st item'},
            {content: '2nd item'},
            {content: '3rd item'},
        ],
    }),
}
</script>
```
:::

::: demo

<summary>
  #### 触发事件
  点击菜单项后会触发事件。
</summary>

```html
<template>                
    <v-dropdown :data="data" @item-click="itemClick">
        <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger">
            Hover me <v-icon type="down"></v-icon>
        </a>
    </v-dropdown>
</template>
    
<script>
export default {
    data:() => ({
        data: [
            {content: '1st item'},
            {content: '2nd item'},
            {content: '3rd item'},
        ],
    }),
    methods: {
        itemClick(data) {
            console.log(data);
        }
    }
}
</script>
```
:::

::: demo

<summary>
  #### 多级菜单
  传入的菜单里有多个层级。
</summary>

```html
<template>                
    <v-dropdown :data="data2">
        <a href="javascript:void(0)" class="ant-dropdown-link ant-dropdown-trigger">
            Hover me <v-icon type="down"></v-icon>
        </a>
    </v-dropdown>
</template>
<script>
export default {
    data:() => ({
        data2: [
            {content: '1st item'},
            {content: '2nd item'},
            {
                content: 'sub',
                    children: [
                        {content: '3rd item'},
                        {content: '4th item'},
                    ],
                },
            },
        ],
    }),
}
</script>
```
:::

## API
### Dropdown Props

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| data | 可选项数据源 | Array | - |
| trigger | 触发方式 | String: `hover` `click` | hover |
| position | 下拉框的定位方式 | String: `absolute` `fixed` | absolute |
| popupContainer | 下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function | () => document.body |

### Dropdown Events

| 事件     |   说明	   | 参数      |
|---------- |-------------- |----------  |-------- |
| item-click | 点击菜单项时触发 | function(data) |

### Dropdown:Data Prop

| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| content | 可选项数据源 | String | - |
| disabled | 是否禁用 | Boolean | false |
| divided | 是否显示分割线 | Boolean | false |