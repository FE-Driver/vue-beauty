<template lang="html">

  <div>

    <section class="markdown">
      <h1>Dropdown 下拉菜单</h1>
      <p>
        向下弹出的列表。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-12 code-boxes-col-2-1">

      </div>
    </div>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vAlert from '../../components/alert'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'type',
          explain: '必选参数，指定警告提示的样式，有四种选择 success、info、warning、error',
          type: 'String',
          default: 'info'
        },{
          parameter: 'closable',
          explain: '可选参数，默认不显示关闭按钮',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'closeText',
          explain: '可选参数，自定义关闭按钮',
          type: 'String',
          default: '无'
        },{
          parameter: 'message',
          explain: '必选参数，警告提示内容',
          type: 'String',
          default: '无'
        },{
          parameter: 'description',
          explain: '可选参数，警告提示的辅助性文字介绍',
          type: 'String',
          default: '无'
        },{
          parameter: 'onClose',
          explain: '可选参数，关闭时触发的回调函数',
          type: 'Function',
          default: '无'
        },{
          parameter: 'showIcon',
          explain: '可选参数，是否显示辅助图标',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'closed',
          explain: '可选参数，控制组件隐藏显示，默认显示',
          type: 'Boolean',
          default: 'false'
        }
      ]
    }
  },
  components: {
    vAlert,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
