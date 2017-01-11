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

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基本"
          describe="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
        >
          <v-tree-select :data="treedata1" :allow-clear="true"></v-tree-select>
          <template slot="js">
          export default {
            data: function() {
              return {
                treedata1:[
                  {
                    title:'parent 1',
                    selected: true,
                    expand: true,
                    node:[
                      {
                        title:'parent 1-0',
                        expand: true,
                        disabled: true,
                        node: [
                          {
                            title:'leaf',
                            disableCheckbox: true
                          },
                          {
                            title:'leaf',
                          }
                        ]
                      },
                      {
                        title:'parent 1-1',
                        node: [
                          {
                            title:"<span style='color:#08c'>sss</span>"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
          </template>
        </code-box>

        <code-box
          title="基本"
          describe="最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。"
        >
          <v-tree-select :data="treedata2" :multiple="true" :allow-clear="true"></v-tree-select>
          <template slot="js">
          export default {
            data: function() {
              return {
                treedata2:[
                  {
                    title:'parent 1',
                    expand: true,
                    node:[
                      {
                        title:'parent 1-0',
                        expand: true,
                        disabled: true,
                        node: [
                          {
                            title:'leaf',
                            disableCheckbox: true
                          },
                          {
                            title:'leaf',
                            checked: true,
                          }
                        ]
                      },
                      {
                        title:'parent 1-1',
                        node: [
                          {
                            title:"<span style='color:#08c'>sss</span>"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            }
          }
          </template>
        </code-box>

      </v-Col>
    </v-Row>


    <api-table
      :content='content'
    >
      <h3>TreeSelect props</h3>
    </api-table>

    <api-table
      :content='content'
      title=""
    >
      <h3>TreeNode props</h3>
    </api-table>
  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      content:[
        [
          'data',
          '可嵌套的节点属性的数组，生成tree的数据',
          'array',
          '无'
        ],
        [
          'open',
          '下拉选择框是否显示',
          'bool',
          'false'
        ],
        [
          'multiple',
          '支持多选',
          'bool',
          'false'
        ],
        [
          'allowClear',
          '显示清除按钮',
          'bool',
          'false'   
        ],
        [
          'position',
          '下拉框的定位方式（absolute,fixed）',
          'string',
          'absolute'   
        ],
        [
          'popupContainer',
          '下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。',
          'Function',
          '() => document.body'   
        ],
        [
          'onSelect',
          '被选中时调用，参数为选中项的 value 值',
          'function(valueArray)',
          '无'
        ]
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
      treedata1:[
        {
          title:'parent 1',
          selected: true,
          expand: true,
          node:[
            {
              title:'parent 1-0',
              expand: true,
              disabled: true,
              node: [
                {
                  title:'leaf',
                  disableCheckbox: true
                },
                {
                  title:'leaf',
                }
              ]
            },
            {
              title:'parent 1-1',
              node: [
                {
                  title:"<span style='color:#08c'>sss</span>"
                }
              ]
            }
          ]
        }
      ],
      treedata2:[
        {
          title:'parent 1',
          expand: true,
          node:[
            {
              title:'parent 1-0',
              expand: true,
              disabled: true,
              node: [
                {
                  title:'leaf',
                  disableCheckbox: true
                },
                {
                  title:'leaf',
                  checked: true,
                }
              ]
            },
            {
              title:'parent 1-1',
              node: [
                {
                  title:"<span style='color:#08c'>sss</span>"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>