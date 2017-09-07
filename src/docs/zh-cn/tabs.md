<style>
    #components-tabs-demo-card-top {
        background: #ECECEC;
        overflow: hidden;
        padding: 24px;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
        border-color: transparent;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
        border-color: #fff;
    }
</style>

<script>
    export default {
        data() {
            return {
                position: 'top',
                positionOptions: [
                    {label: 'top', value: 'top'},
                    {label: 'bottom', value: 'bottom'},
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right'}
                ],
                keyIndex: 1,
                tabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ],
                customPosition: 'top',
                customActiveKey: 'tab1',
                customKeyIndex: 1,
                customTabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ]
            }
        },
        methods: {
            onChange(tabKey) {
                console.log("tab changed : " + tabKey);
            },
            onTabClick(tabKey) {
                console.log("tab clicked : " + tabKey);
            },
            onAdd() {
                this.tabPanes.push({
                    key: 'newTab' + this.keyIndex,
                    tab: '新选项卡' + this.keyIndex,
                    content: '新选项卡' + this.keyIndex++ + '内容'
                });
            },
            onRemove(tabKey) {
                for (let i = 0; i < this.tabPanes.length; i++) {
                    if (this.tabPanes[i].key == tabKey) {
                        this.tabPanes.splice(i, 1);
                        break;
                    }
                }
            },
            onCustomAdd() {
                this.customActiveKey = 'newTab' + this.customKeyIndex;
                this.customTabPanes.push({
                    key: 'newTab' + this.customKeyIndex,
                    tab: '新选项卡' + this.customKeyIndex,
                    content: '新选项卡' + this.customKeyIndex++ + '内容'
                });
            },
            onCustomRemove(tabKey) {
                for (let i = 0; i < this.customTabPanes.length; i++) {
                    if (this.customTabPanes[i].key == tabKey) {
                        this.customTabPanes.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>

# Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

Ant Design 依次提供了三级选项卡，分别用于不同的场景。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。
- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。
- [RadioButton](/#/components/radio) 可作为更次级的页签来使用。


## 代码演示

::: demo
<summary>
  #### 基本
  默认选中第一项。
</summary>

```html
<template>
    <v-tabs active-tab-key="key1" @change="onChange" @tab-click="onTabClick">
        <v-tab-pane tab-key="key1" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="key2" tab="选项卡二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="key3" tab="选项卡三">选项卡三内容</v-tab-pane>
    </v-tabs>
</template>

<script>
    export default {
        methods: {
            onChange(tabKey) {
                console.log("tab changed : " + tabKey);
            },
            onTabClick(tabKey) {
                console.log("tab clicked : " + tabKey);
            }
        }
    };
</script>
```
:::

::: demo
<summary>
  #### 禁用
  禁用某一项。
</summary>

```html
<template>
    <v-tabs active-tab-key="1">
        <v-tab-pane tab-key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项卡二" disabled>选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
        <v-tab-pane tab-key="4" tab="选项卡四" disabled>选项卡四内容</v-tab-pane>
    </v-tabs>
</template>
```
:::

::: demo
<summary>
  #### 图标
  有图标的标签。
</summary>

```html
<template>
    <v-tabs active-tab-key="1">
        <v-tab-pane tab-key="1" icon="apple" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" icon="android" tab="选项卡二">选项卡二内容</v-tab-pane>
    </v-tabs>
</template>
```
:::

::: demo
<summary>
  #### 滑动
  可以左右滑动，容纳更多标签。
</summary>

```html
<template>
    <v-tabs active-tab-key="1">
        <v-tab-pane tab-key="1" tab="选项一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项三">选项卡三内容</v-tab-pane>
        <v-tab-pane tab-key="4" tab="选项四">选项卡四内容</v-tab-pane>
        <v-tab-pane tab-key="5" tab="选项五">选项卡五内容</v-tab-pane>
        <v-tab-pane tab-key="6" tab="选项六">选项卡六内容</v-tab-pane>
        <v-tab-pane tab-key="7" tab="选项七">选项卡七内容</v-tab-pane>
        <v-tab-pane tab-key="8" tab="选项八">选项卡八内容</v-tab-pane>
        <v-tab-pane tab-key="9" tab="选项九">选项卡九内容</v-tab-pane>
        <v-tab-pane tab-key="10" tab="选项十">选项卡十内容</v-tab-pane>
    </v-tabs>
</template>
```
:::

::: demo
<summary>
  #### 附加内容
  可以在页签右边添加附加操作。
</summary>

```html
<template>
    <v-tabs active-tab-key="1">
        <v-button slot="extra" style="margin-right: 5px;">额外的操作</v-button>
        <v-tab-pane tab-key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项卡二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
    </v-tabs>
</template>
```
:::

::: demo
<summary>
  #### 迷你型
  用在弹出框等较狭窄的容器内。
</summary>

```html
<template>
    <v-tabs active-tab-key="1" size="small">
        <v-tab-pane tab-key="1" tab="选项一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项三">选项卡三内容</v-tab-pane>
        <v-tab-pane tab-key="4" tab="选项四">选项卡四内容</v-tab-pane>
        <v-tab-pane tab-key="5" tab="选项五">选项卡五内容</v-tab-pane>
        <v-tab-pane tab-key="6" tab="选项六">选项卡六内容</v-tab-pane>
        <v-tab-pane tab-key="7" tab="选项七">选项卡七内容</v-tab-pane>
        <v-tab-pane tab-key="8" tab="选项八">选项卡八内容</v-tab-pane>
        <v-tab-pane tab-key="9" tab="选项九">选项卡九内容</v-tab-pane>
        <v-tab-pane tab-key="10" tab="选项十">选项卡十内容</v-tab-pane>
    </v-tabs>
</template>
```
:::

::: demo
<summary>
  #### 位置
  有四个位置，`position="left|right|top|bottom"`。
</summary>

```html
<template>
    <div style="margin-bottom: 16px;">
        Tab的位置：<v-select :data="positionOptions" v-model="position" size="lg" style="width: 200px;"></v-select>    
    </div>
    <v-tabs active-tab-key="1" :position="position">
        <v-tab-pane tab-key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项卡二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
    </v-tabs>
</template>

<script>
    export default {
        data() {
            return {
                position: 'top',
                positionOptions: [
                    {label: 'top', value: 'top'},
                    {label: 'bottom', value: 'bottom'},
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right'}
                ]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 卡片式页签
  另一种样式的页签，不提供对应的垂直样式。
</summary>

```html
<template>
    <v-tabs active-tab-key="1" type="card">
        <v-tab-pane tab-key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项卡二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
    </v-tabs>
</template>
```
:::

::: demo
<summary>
  #### 卡片式页签容器
  用于容器顶部，需要一点额外的样式覆盖。
</summary>

```html
<template>
    <div id="components-tabs-demo-card-top">
        <div class="card-container">
            <v-tabs active-tab-key="1" type="card">
                <v-tab-pane tab-key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
                <v-tab-pane tab-key="2" tab="选项卡二">选项卡二内容</v-tab-pane>
                <v-tab-pane tab-key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
            </v-tabs>
        </div>
    </div>
</template>

<style>
    #components-tabs-demo-card-top {
        background: #ECECEC;
        overflow: hidden;
        padding: 24px;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
        border-color: transparent;
    }

    #components-tabs-demo-card-top > .card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
        border-color: #fff;
    }
</style>
```
:::

::: demo
<summary>
  #### 新增和关闭页签
  只有卡片样式的页签支持新增和关闭选项。
</summary>

```html
<template>
    <v-tabs active-tab-key="tab1" type="editable-card" @add="onAdd" @remove="onRemove">
        <v-tab-pane v-for="tabPane in tabPanes" :tab-key="tabPane.key" :key="tabPane.key" :tab="tabPane.tab">{{ tabPane.content }}</v-tab-pane>
    </v-tabs>
</template>

<script>
    export default {
        data() {
            return {
                keyIndex: 1,
                tabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ]
            }
        },
        methods: {
            onAdd() {
                this.tabPanes.push({
                    key: 'newTab' + this.keyIndex,
                    tab: '新选项卡' + this.keyIndex,
                    content: '新选项卡' + this.keyIndex++ + '内容'
                });
            },
            onRemove(tabKey) {
                for (let i = 0; i < this.tabPanes.length; i++) {
                    if (this.tabPanes[i].key == tabKey) {
                        this.tabPanes.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 新增和关闭自定义新增页签触发器页签
  隐藏默认的页签增加图标，给自定义触发器绑定事件。
</summary>

```html
<template>
    <div style="margin-bottom: 16px;">
        Tab的位置：<v-select :data="positionOptions" v-model="customPosition" size="lg" style="width: 200px;"></v-select>
        <v-button @click="onCustomAdd">新增</v-button>
    </div>
    <v-tabs :active-tab-key="customActiveKey" type="editable-card" :position="customPosition" hide-add @remove="onCustomRemove" >
        <v-tab-pane v-for="tabPane in customTabPanes" :tab-key="tabPane.key" :key="tabPane.key" :tab="tabPane.tab">{{ tabPane.content }}</v-tab-pane>
    </v-tabs>
</template>

<script>
    export default {
        data() {
            return {
                customPosition: 'top',
                customActiveKey: 'tab1',
                customKeyIndex: 1,
                positionOptions: [
                    {label: 'top', value: 'top'},
                    {label: 'bottom', value: 'bottom'},
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right'}
                ],
                customTabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ]
            }
        },
        methods: {
            onCustomAdd() {
                this.customTabPanes.push({
                    key: 'newTab' + this.customKeyIndex,
                    tab: '新选项卡' + this.customKeyIndex,
                    content: '新选项卡' + this.customKeyIndex++ + '内容'
                });
            },
            onCustomRemove(tabKey) {
                this.customActiveKey = 'newTab' + this.customKeyIndex;
                for (let i = 0; i < this.customTabPanes.length; i++) {
                    if (this.customTabPanes[i].key == tabKey) {
                        this.customTabPanes.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
```
:::

<!--
::: demo
<summary>
  #### 屏蔽动画
  在某些特殊情况下可能不希望有动画，使用`animated: false`可以做到这一点。
</summary>

```html
<template>
    <v-tabs active-tab-key="1" :animated="false">
        <v-tab-pane tab-key="1" tab="选项卡一">选项卡一内容</v-tab-pane>
        <v-tab-pane tab-key="2" tab="选项卡二">选项卡二内容</v-tab-pane>
        <v-tab-pane tab-key="3" tab="选项卡三">选项卡三内容</v-tab-pane>
    </v-tabs>
</template>
```
:::
-->

## API

### Tabs Props
| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| activeTabKey        | 当前激活 tab 面板的 tabKey                      | string   | - |
| slot : extra | tab bar 上额外的元素                       | slot node | - |
| type | 页签的基本样式，可选 `line`、`card` `editable-card` 类型   | string   | `line` |
| size | 大小，提供 `default` 和 `small` 两种大小，仅当 `type="line"` 时生效。  | string   | `default`|
| position | 页签位置，可选值有 `top` `right` `bottom` `left`  | string   | `top` |
| hideAdd | 是否隐藏加号图标，在 `type="editable-card"` 时有效 | boolean   | `false` |
<!--
| animated | 是否使用动画切换 Tabs，在 `position=top|bottom` 时有效 | boolean | `true` |
-->

### TabPane Props
| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| tabKey  | 对应 activeTabKey | string | - |
| tab  | 选项卡头显示文字 | string | - |
| icon   | 图标 Icon 类型 | string | - |
| disabled | 是否禁用当前tab | boolean | `false` |

### Tabs Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change | 切换面板时触发的事件 | — |
| tab-click | tab 被点击时触发的事件 | — |
| add | 新增页签的回调，在 `type="editable-card"`且`hideAdd=false` 时有效 | - |
| remove | 新增页签的回调，在 `type="editable-card"` 时有效 | tabKey |
