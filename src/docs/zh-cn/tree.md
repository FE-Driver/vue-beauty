<script>
export default {
  data() {
    return {
      treeData: [{
        title: 'parent 1',
        expanded: true,
        selected: true,
        children: [{
          title: 'parent 1-0',
          expanded: true,
          disabled: true,
          children: [{
            title: 'leaf',
            disableCheckbox: true
          }, {
            title: 'leaf',
          }]
        }, {
          title: 'parent 1-1',
          checked: true,
          children: [{
            title: "<span style='color: #08c'>sss</span>"
          }]
        }]
      }],
      treeData1: [{
        title: '0-0',
        expanded: true,
        children: [{
          title: '0-0-0',
          expanded: true,
          children: [{
            title: '0-0-0-0',
          }, {
            title: '0-0-0-1',
          }]
        }, {
          title: '0-0-1',
          children: [{
            title: '0-0-1-0'
          }]
        }]
      }, {
        title: '0-1',
        children: [{
          title: '0-1-0'
        }, {
          title: '0-1-2'
        }]
      }, {
        title: '0-2',
      }],
    }
  },
  methods: {
    selectFn(data) {
      console.log(data);
    },
    checkFn(data) {
      console.log(data);
    }
  }
}
</script>

# Tree 树形控件

## 何时使用
文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。
</summary>

```html
<template>
  <v-tree :data="treeData" checkable multiple @select="selectFn" @check="checkFn"></v-tree>
</template>

<script>
export default {
  data() {
    return {
      treeData: [{
        title: 'parent 1',
        expanded: true,
        selected: true,
        children: [{
          title: 'parent 1-0',
          expanded: true,
          disabled: true,
          children: [{
            title: 'leaf',
            disableCheckbox: true
          }, {
            title: 'leaf',
          }]
        }, {
          title: 'parent 1-1',
          checked: true,
          children: [{
            title: "<span style='color: #08c'>sss</span>"
          }]
        }]
      }]
    }
  },
  methods: {
    selectFn(data) {
      console.log(data);
    },
    checkFn(data) {
      console.log(data);
    }
  }
}
</script>
```

:::

::: demo
<summary>
  #### 拖动示例
  将节点拖拽到其他节点内部或前后。
</summary>

```html
<template>
  <v-tree :data="treeData1" draggable></v-tree>
  </v-tree>
</template>

<script>
export default {
  data() {
    return {
      treeData1: [{
        title: '0-0',
        expanded: true,
        children: [{
          title: '0-0-0',
          expanded: true,
          children: [{
            title: '0-0-0-0',
          }, {
            title: '0-0-0-1',
          }]
        }, {
          title: '0-0-1',
          children: [{
            title: '0-0-1-0'
          }]
        }]
      }, {
        title: '0-1',
        children: [{
          title: '0-1-0'
        }, {
          title: '0-1-2'
        }]
      }, {
        title: '0-2',
      }],
    }
  }
}
</script>
```

:::

## API
### Tree Props
| 参数      | 说明          | 类型      | 默认值  |
|---------- |-------------- |----------  |-------- |
| data | 可嵌套的节点属性的数组，生成tree的数据 | Array | [] |
| multiple | 支持点选多个节点 | Boolean | false |
| checkable | 节点前添加 Checkbox 复选框 | Boolean | false |
| draggable | 设置节点可拖拽 | Boolean | false |

### Tree Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| check    | 点击复选框触发 | childrenArray |
| select    | 点击树节点触发 | childrenArray |
