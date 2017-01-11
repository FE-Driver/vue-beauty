<template lang="html">

  <div>

    <section class="markdown">
      <h1>ApiTable Api表格</h1>
      <p>
        用于描述组件的api
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          组件说明文档的api说明。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col>

        <code-box
          title="基本"
          describe="基本用法"
         >
          <api-table
            :apis='apis'
          >
            <div>这是一个slot</div>
          </api-table>
          <template slot="js">
              export default{
                data:function(){
                    return {
                      apis: [{
                          parameter: 'type',
                          explain: '表格类型(props,methods,events)',
                          type: 'String',
                          default: "props"
                      },{
                          parameter: 'head',
                          explain: '表头数组,根据type字段，head的默认值也不同',
                          type: 'Array',
                          default: "props:['参数','说明','类型','默认值'],methods:['方法名','说明','参数'],events:['事件名','说明','参数']"
                      },{
                          parameter: 'content',
                          explain: '表格每行的内容数组 [["1","2","3","4"]...]',
                          type: 'Array',
                          default: '无'
                      },{
                          parameter: 'apis',
                          explain: '表格每行的内容数组 [{parameter,explain,type,default}...],推荐用content',
                          type: 'Array',
                          default: '无'
                      },{
                          parameter: 'title',
                          explain: '设置表格的标题',
                          type: 'string',
                          default: 'API'
                      },{
                          parameter: 'slot::default',
                          explain: 'title和table之间的slot',
                          type: 'slot node',
                          default: '无'
                      }
                      ]
                    }
                }
              }
          </template>
        </code-box>

        <code-box
          title="使用head和content"
          describe="不推荐使用apis"
         >
          <api-table
            :head='head'
            :content="content"
            title="使用head和content"
          >
          </api-table>
          <template slot="js">
              export default {
                  data: function () {
                    return {
                      head: ['title1','title2'],
                      content:[
                          ['1-1','1-2'],
                          ['2-1','2-2'],
                          ['3-1','3-2']
                      ]
                    }
                  }
              }
          </template>
        </code-box>

      </v-Col>
      </v-Row>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'type',
          explain: '表格类型(props,methods,events)',
          type: 'String',
          default: "props"
        },{
          parameter: 'head',
          explain: '表头数组,根据type字段，head的默认值也不同',
          type: 'Array',
          default: "props:['参数','说明','类型','默认值'],methods:['方法名','说明','参数'],events:['事件名','说明','参数']"
        },{
          parameter: 'content',
          explain: '表格每行的内容数组 [["1","2","3","4"]...]',
          type: 'Array',
          default: '无'
        },{
          parameter: 'apis',
          explain: '表格每行的内容数组 [{parameter,explain,type,default}...],推荐用content',
          type: 'Array',
          default: '无'
        },{
          parameter: 'title',
          explain: '设置表格的标题',
          type: 'string',
          default: 'API'
        },{
          parameter: 'slot::default',
          explain: 'title和table之间的slot',
          type: 'slot node',
          default: '无'
        }
      ],
      head: ['title1','title2'],
      content:[
        ['1-1','1-2'],
        ['2-1','2-2'],
        ['3-1','3-2']
      ]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>