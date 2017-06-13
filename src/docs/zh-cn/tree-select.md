<script>
export default {
  data() {
    return {
      treeData1: [{
        title: 'parent 1',
        expanded: true,
        children: [{
          title: 'parent 1-0',
          expanded: true,
          children: [{
            title: 'my leaf',
          }, {
            title: 'your leaf',
          }]
        }, {
          title: 'parent 1-1',
          children: [{
            title: "<span style='color: #08c'>sss</span>"
          }]
        }]
      }],
      treeData2: [{
        title: 'parent 1',
        expanded: true,
        children: [{
          title: 'parent 1-0',
          expanded: true,
          children: [{
            title: 'my leaf',
          }, {
            title: 'your leaf',
          }, {
            title: 'self leaf',
          }]
        }, {
          title: 'parent 1-1',
          children: [{
            title: "<span style='color: #08c'>sss</span>"
          }]
        }, {
          title: 'parent 1-2',
        }]
      }],
    }
  },
  methods: {
    onCheck(data) {
      console.log(data)
    },
    onSelect(data) {
      console.log(data);
    },
    onClear(data) {
      console.log('clear', data);
    }
  }
}
</script>

# TreeSelect 树选择

树型选择控件。

## 何时使用
类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <v-tree-select :data="treeData1" allow-clear style="width:300px" @select="onSelect" @clear="onClear"></v-tree-select>
</template>

<script>
export default {
  data() {
    return {
      treeData1: [{
        title: 'parent 1',
        expanded: true,
        children: [{
          title: 'parent 1-0',
          expanded: true,
          children: [{
            title: 'my leaf',
          }, {
            title: 'your leaf',
          }]
        }, {
          title: 'parent 1-1',
          children: [{
            title: "<span style='color: #08c'>sss</span>"
          }]
        }]
      }],
    }
  },
  methods: {
      onSelect(data) {
        console.log(data);
      },
      onClear(data) {
        console.log('clear', data);
      }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 多选
  多选和勾选框功能。
</summary>

```html
<template>
  <v-tree-select :data="treeData2" allow-clear multiple style="width:300px" @check="onCheck" @clear="onClear"></v-tree-select>
</template>

<script>
export default {
  data() {
    return {
      treeData2: [{
        title: 'parent 1',
        expanded: true,
        children: [{
          title: 'parent 1-0',
          expanded: true,
          children: [{
            title: 'my leaf',
          }, {
            title: 'your leaf',
          }, {
            title: 'self leaf',
          }]
        }, {
          title: 'parent 1-1',
          children: [{
            title: "<span style='color: #08c'>sss</span>"
          }]
        }, {
          title: 'parent 1-2',
        }]
      }],
    }
  },
  methods: {
    onCheck(data) {
      console.log(data)
    },
    onClear(data) {
      console.log('clear', data);
    }
  }
}
</script>
```

:::

## API

### TreeSelect Props 
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| data | 可嵌套的节点属性的数组，生成tree的数据 | Array | [] |
| multiple | 支持多选 | Boolean | false |
| allowClear | 显示清除按钮 | Boolean | false |
| popupContainer | 下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。 | Function | () => document.body |
| position | 设置节点可拖拽 | Boolean | false |

### Tree Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| check    | 点击复选框触发 | childrenArray |
| select    | 点击树节点触发 | childrenArray |
| clear    | 点击清除按钮触发 | null |
