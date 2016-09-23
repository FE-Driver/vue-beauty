<template lang="html">

  <div>

    <section class="markdown">
      <h1>日期选择器</h1>
      <p>
        日期选择器
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>日期选择器</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <div class="ant-row" style="margin-left: -8px; margin-right: -8px;">
      <div class="ant-col-lg-24 code-boxes-col-2-2">

        <code-box
          title="基础"
          describe="最简单的用法">
          <v-datepicker :readonly="true" format="YYYY-MM-DD"></v-datepicker>
        </code-box>


      </div>
      <div class="ant-col-lg-12 code-boxes-col-2-1">

      </div>
    </div>

    <api-table
      :apis='apis'
    ></api-table>

  </div>

</template>

<script>

import vDatepicker from '../../components/datepicker'
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      onClose: function() {
          console.log(this);
      },
      apis: [
        {
          parameter: 'value',
          explain: '默认值',
          type: 'Sring',
          default: ''
        },
        {
          parameter: 'format',
          explain: '日期显示格式',
          type: 'Sring',
          default: 'YYYY-MM-DD'
        },
        {
          parameter: 'size',
          explain: '输入框尺寸',
          type: 'Sring',
          default: 'default'
        }
      ]
    }
  },
  components: {
    vDatepicker,
    codeBox,
    apiTable
  }
}
</script>

<style lang="less">
</style>
