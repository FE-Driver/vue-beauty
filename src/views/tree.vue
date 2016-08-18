<template lang="html">

  <div>

    <section class="markdown">
      <h1>Tree 树形控件</h1>
      <h2>何时使用</h2>
      <ul>
        <p>
          文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
        >
          <v-tree :data.sync="treedata"></v-tree>
          <v-button @click="getTreeData">tree数据</v-button>
        </code-box>

      </div>

    </div>


    <api-table
      :apis='apis'
    >
      <h3>Tree props</h3>
    </api-table>

    <api-table
      :apis='apiTreeNode'
      title=""
    >
      <h3>TreeNode props</h3>
    </api-table>
  </div>

</template>

<script>

import vTree from '../../components/tree'
import vButton from '../../components/button'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'data',
          explain: '可嵌套的节点属性的数组，生成tree的数据',
          type: 'array',
          default: '无'
        }
      ],
      apiTreeNode: [{
          parameter: 'disabled',
          explain: '禁掉响应',
          type: 'bool',
          default: 'false'
        },
        {
          parameter: 'disableCheckbox',
          explain: '禁掉 checkbox',
          type: 'bool',
          default: 'false'
        },
        {
          parameter: 'title',
          explain: '标题',
          type: 'String/element string',
          default: "'---'"
        },
        {
          parameter: 'expand',
          explain: '是否展开直子节点',
          type: 'bool',
          default: 'false'
        },
        {
          parameter: 'checked',
          explain: '是否勾选(如果勾选，子节点也会全部勾选)',
          type: 'bool',
          default: 'false'
        }
      ],
      treedata:[
        {
          title:'parent 1',
          key: '0',
          expand: true,
          node:[
            {
              title:'parent 1-0',
              key: '0-0',
              expand: true,
              disabled: true,
              node: [
                {
                  title:'leaf',
                  key: '0-0-0',
                  disableCheckbox: true
                },
                {
                  title:'leaf',
                  key: '0-0-1'
                }
              ]
            },
            {
              title:'parent 1-1',
              key: '0-1',
              node: [
                {
                  title:"<span style='color:#08c'>sss</span>",
                  key: '0-1-0'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    getTreeData(){
      console.log(this.$get('treedata'))
    }
  },
  components: {
    vTree,
    vButton,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
