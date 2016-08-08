<template lang="html">

  <div>

    <section class="markdown">
      <h1>Rate 评分</h1>
      <p>
        评分组件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <p>
          对评价进行展示。
        </p>
        <p>
          对事物进行快速的评级操作。
        </p>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="基本"
          describe="最简单的用法。"
          code="<v-rate :on-change='_change'></v-rate>"
        >
          <v-rate :on-change="_change"></v-rate>
        </code-box>

        <code-box
          title="文案展现"
          describe="给评分组件加上文案展示。"
          code="<v-rate :default-value.sync='value'></v-rate>
<span class='ant-rate-text'>{{value}}星</span>"
        >
          <v-rate :default-value.sync="value"></v-rate>
          <span class="ant-rate-text">{{value}}星</span>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
          title="半星"
          describe="支持选中半星。"
          code="<v-rate allow-half :default-value='2.5'></v-rate>"
        >
          <v-rate allow-half :default-value="2.5"></v-rate>
        </code-box>

        <code-box
          title="只读"
          describe="只读，无法进行鼠标交互。"
          code="<v-rate disabled :default-value='2'></v-rate>"
        >
          <v-rate disabled :default-value="2"></v-rate>
        </code-box>

      </div>
    </div>


    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vRate from '../../components/rate'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      apis: [{
          parameter: 'count',
          explain: 'star 总数',
          type: 'Number',
          default: '5'
        },{
          parameter: 'defaultValue',
          explain: '默认值',
          type: 'Number',
          default: '0'
        },{
          parameter: 'onChange(value: Number)',
          explain: '回调',
          type: 'Function',
          default: '无'
        },{
          parameter: 'allowHalf',
          explain: '是否允许半选',
          type: 'Boolean',
          default: 'false'
        },{
          parameter: 'disabled',
          explain: '只读，无法进行交互',
          type: 'Boolean',
          default: 'false'
        }
      ],
      value:3
    }
  },
  components: {
    vRate,
    codeBox,
    apiTable
  },
   methods:{
    _change:val=> console.log('current value:'+val)
  }
}
</script>

<style lang="less">
</style>
