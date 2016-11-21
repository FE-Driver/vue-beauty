<template lang="html">

  <div>

    <section class="markdown">
      <h1>DatePicker 日期选择框</h1>
      <p>
        输入或选择日期的控件。
      </p>
      <h2>何时使用</h2>
      <ul>
        <li>当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。</li>
      </ul>
      <h2>组件演示</h2>
    </section>

    <v-Row :gutter="16">
      <v-Col span="12">

        <code-box
          title="基础"
          describe="最简单的用法，在浮层中可以选择或者输入日期">
          <v-datepicker clearable></v-datepicker><br><br>
          <v-datepicker range></v-datepicker>
        </code-box>

        <code-box
          title="三种大小"
          describe="三种大小的输入框，若不设置，则为 default。">
          <v-datepicker size="small"></v-datepicker><br><br>
          <v-datepicker></v-datepicker><br><br>
          <v-datepicker range size="large"></v-datepicker>
        </code-box>

      </v-Col>

      <v-Col span="12">

        <code-box
          title="日期格式"
          describe="使用 format 属性，可以自定义日期显示格式。">
          <v-datepicker time='2015-12-06' format="yyyy/MM/dd"></v-datepicker><br><br>
          <v-datepicker range  start-time='2015-12-06' end-time='2016-12-06' format="yyyy/MM/dd"></v-datepicker>
        </code-box>

        <code-box
          title="禁用"
          describe="选择框的不可用状态。">
          <v-datepicker disabled></v-datepicker>
        </code-box>

      </v-Col>
    </v-Row>

    <api-table
      :content='content'
    ></api-table>

  </div>

</template>

<script>
import codeBox from '../components/codeBox'
import apiTable from '../components/apiTable'

export default {
  data: function () {
    return {
      content: [
        [
          'style',
          '自定义输入框样式',
          'object',
          '-'
        ],
        [
          'size',
          '输入框大小，large 高度为 32px，small 为 22px，默认是 28px',
          'string',
          '-'
        ],
        [
          'position',
          '下拉框的定位方式(absolute、fixed)',
          'string',
          'absolute'
        ],
        [
          'range',
          '能否进行范围选择',
          'boolean',
          'false'
        ],
        [
          'time',
          '能否进行范围选择',
          'boolean',
          'false'
        ],
        [
          'startTime',
          '开始时间',
          'string',
          '-'
        ],
        [
          'endTime',
          '结束时间',
          'string',
          '-'
        ],
        [
          'maxRange',
          '选择最大范围限制,以天为单位（只有range为true的时候才起作用）',
          'number string',
          'false'
        ],
        [
          'clearable',
          '是否显示清除按钮',
          'boolean',
          'false'
        ],
        [
          'format',
          '展示的日期格式',
          'string',
          'yyyy-MM-dd'
        ],
        [
          'disabled',
          '禁用',
          'boolean',
          'false'
        ],
        [
          'confirm',
          '是否需要点击确认',
          'boolean',
          'false'
        ],
        [
          'en',
          '是否使用英文',
          'boolean',
          'false'
        ],
        [
          'onConfirm',
          '点击确认后的回调',
          'function(startTime, endTime)',
          '-'
        ]
      ]
    }
  },
  components: {
    codeBox,
    apiTable
  }
}
</script>
