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
      <div class="ant-col-lg-12 code-boxes-col-2-2">

        <code-box
          title="基础"
          describe="最简单的用法">
          <v-datepicker format="YYYY-MM-DD"></v-datepicker>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">
        <code-box
                title="不同尺寸"
                describe="large、small">
          <v-datepicker size="large"></v-datepicker>
          <v-datepicker size="small"></v-datepicker>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
                title="placeholder"
                describe="placeholder">
          <v-datepicker placeholder="请选择注册日期"></v-datepicker>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-2">

        <code-box
                title="format"
                describe="日期格式">
          <v-datepicker format="YYYY/MM/DD"></v-datepicker>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-1">

        <code-box
                title="默认值"
                describe="使用value设置初始默认值">
          <v-datepicker :value.sync="regdate"></v-datepicker>
        </code-box>

      </div>

      <div class="ant-col-lg-12 code-boxes-col-2-2">

        <code-box
                title="设定不可选择日期"
                describe="使用disabledDateFn来设定不可选择的日期，该函数执行时会自动传入当前遍历的日期对象，使用者根据业务需要判断该日期是否可选。返回true表示不可选，返回false表示可选。">
          <v-datepicker :disabled-date-fn="disabledDateFn"></v-datepicker>
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
      onClose: function() {
          console.log(this);
      },
      regdate:"2016-09-12",
      disabledDateFn:function (date) {
        console.log(date);
        if(date.getTime() - new Date().getTime() > 7*24*60*60*1000){
          return true;
        }
        return false;
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
          explain: '输入框尺寸(large、small)',
          type: 'Sring',
          default: 'default'
        },
        {
          parameter: 'position',
          explain: '下拉框的定位方式（absolute,fixed）',
          type: 'Sring',
          default: 'absolute'
        },
        {
          parameter: 'placeholder',
          explain: '占位说明文字',
          type: 'Sring',
          default: '请选择日期'
        },
        {
          parameter: 'disabledDateFn',
          explain: '设置不可选日期的判定函数，执行时自动传入当前遍历的Date对象作为参数',
          type: 'Function',
          default: ''
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

<style lang="less">
</style>
