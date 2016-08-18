<template lang="html">

  <div>

    <section class="markdown">
      <h1>Button 按钮</h1>
      <p>
        按钮用于开始一个即时操作。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-24 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="基本用法"
         >
          <api-table
            :apis='apis'
          >
            <div>这是一个slot</div>
          </api-table>
        </code-box>

      </div>

      <div class="ant-col-lg-24 code-boxes-col-2-1">

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
        </code-box>

      </div>

    </div>


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
          parameter: 'head',
          explain: '表头数组',
          type: 'Array',
          default: "['参数','说明','类型','默认值']"
        },{
          parameter: 'content',
          explain: '表格每行的内容数组 [["1","2","3","4"]...',
          type: 'Array',
          default: '无'
        },{
          parameter: 'apis',
          explain: '表格每行的内容数组 [{parameter,explain,type,default}],推荐用content',
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

<style lang="less">
</style>
