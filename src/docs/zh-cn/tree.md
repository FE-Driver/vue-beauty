<script>
export default {
  data() {
    return {
      selectNode: null,
      modalVisible: false,
      newTitle: '',
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
      dragData: [{
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
      editData: [{
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
      asyncData: [
        { title: 'pNode 01', children: []},
        { title: 'pNode 02', children: []},
        { title: 'pNode 03'},
      ]
    }
  },
  methods: {
    selectFn(data) {
      console.log(data);
    },
    checkFn(data) {
      console.log(data);
    },
    select(selectedNodes) {
      this.selectNode = selectedNodes[0];
    },
    changeTitle() {
      if (!this.newTitle) return this.$message.warning('您还未填写新的名称！');
      this.$refs.tree.editNode(this.selectNode.clue, { title: this.newTitle });
      this.newTitle = '';
      this.modalVisible = false;
    },
    addTopNode() {
      this.$refs.tree.addNode('0', {
        title: '顶级节点'
      });
    },
    addNode() {
      this.$refs.tree.addNode(this.selectNode.clue, {
        title: `${this.selectNode.title}的节点`
      });
    },
    delNode() {
      this.$refs.tree.delNode(this.selectNode.clue);
    },
    getData(node) {
      console.log(node);
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve([
            { title: `leaf ${node.clue}-0`, children:[]},
            { title: `leaf ${node.clue}-1`},
            { title: `leaf ${node.clue}-2`},
          ])
        }, 1000)
      })
    },
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
    },
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
  <v-tree :data="dragData" draggable></v-tree>
  </v-tree>
</template>

<script>
export default {
  data() {
    return {
      dragData: [{
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

::: demo
<summary>
  #### 异步数据加载
  点击展开节点，动态加载数据。
</summary>

```html
<template>
  <v-tree :data="asyncData" :async="getData"></v-tree>
  </v-tree>
</template>

<script>
export default {
  data() {
    return {
      asyncData: [
        { title: 'pNode 01', children: []},
        { title: 'pNode 02', children: []},
        { title: 'pNode 03'},
      ]
    }
  },
  methods: {
    getData(node) {
      console.log(node);
      return new Promise(resolve => {
        setTimeout(()=>{
          resolve([
            { title: `leaf ${node.clue}-0`, children: []},
            { title: `leaf ${node.clue}-1`},
            { title: `leaf ${node.clue}-2`},
          ])
        }, 1000)
      })
    },
  }
}
</script>
```

:::

::: demo
<summary>
  #### 编辑模式
  节点增、删、改
</summary>

```html
<template>
  <v-button-group>
      <v-button type="primary" icon="plus-square" @click="addTopNode" title="增加一个顶级节点"></v-button>
      <v-button type="primary" icon="edit" :disabled="!selectNode" @click="modalVisible = true" title="编辑节点(改名)"></v-button>
      <v-button type="primary" icon="plus" :disabled="!selectNode" @click='addNode' title="插入一个子节点"></v-button>
      <v-button type="primary" icon="close" :disabled="!selectNode" @click='delNode' title="删除节点"></v-button>
  </v-button-group>
  <v-tree :data="editData" @select="select" ref="tree"></v-tree>
  <v-modal title="更改名称" :visible="modalVisible" @ok="changeTitle" @cancel="modalVisible = false">
    <v-input placeholder="请输入新的名称" v-model="newTitle"></v-input>
  </v-modal>
</template>

<script>
export default {
  data() {
    return {
      selectNode: null,
      modalVisible: false,
      newTitle: '',
      editData: [{
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
    select(selectedNodes) {
      this.selectNode = selectedNodes[0];
    },
    changeTitle() {
      if (!this.newTitle) return this.$message.warning('您还未填写新的名称！');
      this.$refs.tree.editNode(this.selectNode.clue, { title: this.newTitle });
      this.newTitle = '';
      this.modalVisible = false;
    },
    addTopNode() {
      this.$refs.tree.addNode('0', {
        title: '顶级节点'
      });
    },
    addNode() {
      this.$refs.tree.addNode(this.selectNode.clue, {
        title: `${this.selectNode.title}的节点`
      });
    },
    delNode() {
      this.$refs.tree.delNode(this.selectNode.clue);
    }
  }
}
</script>
```

:::

::: demo
<summary>
  #### 连接线
  带连接线的树。
</summary>

```html
<template>
  <v-tree :data="treeData" show-line></v-tree>
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
| showLine | 是否展示连接线 | Boolean | false |
| draggable | 设置节点可拖拽 | Boolean | false |
| canDrop | 用来判断拖拽时是否能drop的函数,dropPosition的值有-1(插入到目标节点前面),0(插入到目标节点里面),1(插入到目标节点后面) | Function(sourceNode, targetNode, dropPosition) | () => true |
| async | 异步加载数据 | Function(node) | - |

### Data Props
| 属性        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| disabled	 | 禁掉响应	 | Boolean | false |
| disableCheckbox    | 禁掉 checkbox | Boolean | false |
| title | 标题	 | String/element string | '---' |
| expanded | 是否展开子节点	| Boolean | false |
| selected | 是否选中子节点	| Boolean | false |
| checked | 是否勾选(如果勾选，子节点也会全部勾选)	| Boolean | false |
| children | 子节点属性数组(同data)	| Array | - |

### Tree Methods
| 方法名      | 说明          | 参数      | 返回值  |
|---------- |-------------- |----------  |-------- |
| getCheckedNodes | 获取被勾选的节点 | - | 节点数组 |
| getHalfCheckedNodes | 获取被半选的节点 | - | 节点数组 |
| getSelectedNodes | 获取被选中的节点 | - | 节点数组 |
| editNode | 编辑某个节点 | clue, data | - |
| addNode | 在某个下面增加一个节点 | clue, data | - |
| delNode | 删除某个节点 | clue | - |

### Tree Events
| 事件        | 说明           | 参数        |
|------------|----------------|------------|
| check    | 点击复选框触发 | childrenArray |
| select    | 点击树节点触发 | childrenArray |
